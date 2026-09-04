import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir   = path.resolve(__dirname, '..');
const distDir   = path.resolve(rootDir, 'dist');
const SAFE_DIR_MODE  = 0o755;
const SAFE_FILE_MODE = 0o644;

// 🔒 منع أي نسخة للملفات من الخروج خارج جذر المشروع
function assertWithinRoot(targetPath, label) {
  const rel = path.relative(rootDir, targetPath);
  if (rel.startsWith('..') || path.isAbsolute(rel)) {
    throw new Error(`${label} خارج نطاق جذر المشروع: ${targetPath}`);
  }
}

function sanitizeCopiedPath(targetPath) {
  assertWithinRoot(targetPath, 'مسار التهيئة');
  const stat = fs.lstatSync(targetPath);
  if (stat.isSymbolicLink()) throw new Error(`تم رفض رابط رمزي: ${targetPath}`);
  const now = new Date();
  fs.chmodSync(targetPath, stat.isDirectory() ? SAFE_DIR_MODE : SAFE_FILE_MODE);
  try { fs.utimesSync(targetPath, now, now); } catch (_) {}
}

function sanitizeCopiedTree(targetPath) {
  if (!fs.existsSync(targetPath)) return;
  const stat = fs.lstatSync(targetPath);
  if (stat.isSymbolicLink()) throw new Error(`تم رفض رابط رمزي: ${targetPath}`);
  if (stat.isDirectory()) {
    for (const entry of fs.readdirSync(targetPath, { withFileTypes: true })) {
      sanitizeCopiedTree(path.join(targetPath, entry.name));
    }
  }
  sanitizeCopiedPath(targetPath);
}

function safeCopy(source, destination) {
  const src  = path.resolve(source);
  const dest = path.resolve(destination);
  assertWithinRoot(src,  'مصدر النسخ');
  assertWithinRoot(dest, 'وجهة النسخ');
  fs.mkdirSync(path.dirname(dest), { recursive: true, mode: SAFE_DIR_MODE });
  fs.cpSync(src, dest, { recursive: true, force: true, errorOnExist: false, dereference: false, preserveTimestamps: false });
  sanitizeCopiedTree(dest);
}

console.log('📦 [Build Sync] نسخ الأصول إلى مجلد dist...');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true, mode: SAFE_DIR_MODE });
}

// 1. نسخ مجلدات Runtime التي تعتمد عليها الصفحات القديمة
const runtimeDirs = ['css', 'js'];
for (const dir of runtimeDirs) {
  const src  = path.resolve(rootDir, dir);
  const dest = path.resolve(distDir, dir);
  if (fs.existsSync(src)) {
    safeCopy(src, dest);
    console.log(`  ✓ ${dir}/ → dist/${dir}/`);
  }
}

// 2. نسخ الملفات الثابتة من الجذر
const rootFiles = [
  'manifest.json',
  'theme-config.json',
  'favicon.svg',
];
for (const file of rootFiles) {
  const src  = path.resolve(rootDir, file);
  const dest = path.resolve(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    sanitizeCopiedPath(dest);
    console.log(`  ✓ ${file} → dist/${file}`);
  }
}

// 3. مجلدات بديلة للـ Clean URLs (login/ → login/index.html إلخ)
const htmlAliases = ['login.html', 'merchant-dashboard.html', 'store-builder.html'];
for (const file of htmlAliases) {
  const source = path.resolve(distDir, file);
  if (!fs.existsSync(source)) continue;
  const aliasDir = path.resolve(distDir, path.basename(file, '.html'));
  const alias    = path.resolve(aliasDir, 'index.html');
  fs.mkdirSync(aliasDir, { recursive: true, mode: SAFE_DIR_MODE });
  fs.copyFileSync(source, alias);
  sanitizeCopiedPath(alias);
}

// 4. نسخ مجلد functions إن وُجد
const functionsDir = path.resolve(rootDir, 'functions');
if (fs.existsSync(functionsDir)) {
  safeCopy(functionsDir, path.resolve(distDir, 'functions'));
  console.log('  ✓ functions/ → dist/functions/');
}

// 5. إنشاء _headers و _redirects مباشرة في dist (للنشر على Cloudflare)
const headersContent = `/*
  X-Content-Type-Options: nosniff
  Access-Control-Allow-Origin: *

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/theme-config.json
  Cache-Control: public, max-age=0, must-revalidate
`;
fs.writeFileSync(path.resolve(distDir, '_headers'), headersContent, 'utf8');
fs.chmodSync(path.resolve(distDir, '_headers'), SAFE_FILE_MODE);

const redirectsContent = `# Cloudflare Pages — Clean URL routing
# Compatibility rewrites for cached/legacy dashboard pages
/merchant-dashboard/js/*      /js/:splat                         200
/merchant-dashboard/css/*     /css/:splat                        200
/merchant-dashboard/manifest.json /manifest.json                  200
/login                        /login/index.html                   200
/login.html                   /login/index.html                   200
/dashboard                    /merchant-dashboard/index.html      200
/merchant-dashboard           /merchant-dashboard/index.html      200
/merchant-dashboard.html      /merchant-dashboard/index.html      200
/builder                      /store-builder/index.html           200
/studio                       /store-builder/index.html           200
/store-builder.html           /store-builder/index.html           200
`;
fs.writeFileSync(path.resolve(distDir, '_redirects'), redirectsContent, 'utf8');
fs.chmodSync(path.resolve(distDir, '_redirects'), SAFE_FILE_MODE);

console.log('  ✓ _headers و _redirects → dist/');
console.log('');
console.log('✅ [Build Sync] مجلد dist جاهز 100% للنشر على Cloudflare Pages!');
