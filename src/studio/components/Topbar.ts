/**
 * ========================================================
 * 🚀 Studio Topbar Component
 * ========================================================
 */

import { studioState } from '../state';

export class Topbar {
    public static render(): string {
        const { currentDevice, isDarkPreview, merchantUsername } = studioState;
        const canUndo = studioState.canUndo();
        const canRedo = studioState.canRedo();

        return `
        <header class="sb-topbar">
            <div class="sb-topbar-start">
                <a href="merchant-app.html" class="sb-btn-back">
                    <i class="fas fa-arrow-right"></i>
                    <span>لوحة التاجر</span>
                </a>
                <div class="sb-store-badge">
                    <div class="pulse-indicator"></div>
                    <i class="fas fa-store" style="color:var(--sb-primary);"></i>
                    <div class="sb-store-meta">
                        <span id="ui-merchant-name">${studioState.merchantStoreName || studioState.merchantUsername}</span>
                        <small>@${studioState.merchantUsername}</small>
                    </div>
                    <span class="sb-beta-tag"><i class="fas fa-palette"></i> مخصص</span>
                </div>
                <a href="index.html?store=${encodeURIComponent(studioState.merchantUsername)}" target="_blank" class="sb-btn sb-btn-ghost hide-mobile" title="فتح واجهة المتجر الحالية في تبويب جديد" style="color:#38BDF8; text-decoration:none; font-size:0.82rem; font-weight:700;">
                    <i class="fas fa-external-link-alt"></i>
                    <span>زيارة المتجر</span>
                </a>
            </div>

            <!-- أجهزة المعاينة وأدوات التراجع -->
            <div class="sb-topbar-center">
                <div class="sb-history-group">
                    <button class="sb-icon-tool" id="btn-undo" onclick="window.StudioUI.undo()" title="تراجع (Ctrl+Z)" ${!canUndo ? 'disabled' : ''}>
                        <i class="fas fa-undo"></i>
                    </button>
                    <button class="sb-icon-tool" id="btn-redo" onclick="window.StudioUI.redo()" title="إعادة (Ctrl+Y)" ${!canRedo ? 'disabled' : ''}>
                        <i class="fas fa-redo"></i>
                    </button>
                </div>

                <div class="sb-device-switcher">
                    <button class="sb-device-btn ${currentDevice === 'mobile' ? 'active' : ''}" data-device="mobile" onclick="window.StudioUI.setDevice('mobile')">
                        <i class="fas fa-mobile-alt"></i> <span>جوال (390px)</span>
                    </button>
                    <button class="sb-device-btn ${currentDevice === 'tablet' ? 'active' : ''}" data-device="tablet" onclick="window.StudioUI.setDevice('tablet')">
                        <i class="fas fa-tablet-alt"></i> <span>تابلت (768px)</span>
                    </button>
                    <button class="sb-device-btn ${currentDevice === 'desktop' ? 'active' : ''}" data-device="desktop" onclick="window.StudioUI.setDevice('desktop')">
                        <i class="fas fa-desktop"></i> <span>كمبيوتر (100%)</span>
                    </button>
                </div>
            </div>

            <!-- أزرار الإجراءات والنشر -->
            <div class="sb-topbar-end">
                <button class="sb-btn sb-btn-ghost" onclick="window.StudioUI.openHelpModal()" title="دليل تعليمات الاستوديو">
                    <i class="fas fa-lightbulb" style="color:#FBBF24;"></i>
                    <span class="hide-mobile">تعليمات</span>
                </button>
                
                <button class="sb-btn sb-btn-ghost" style="color:#F87171;" onclick="window.StudioUI.resetAllDefaults()" title="استعادة الإعدادات الافتراضية">
                    <i class="fas fa-trash-restore"></i>
                </button>

                <button class="sb-btn sb-btn-ghost" onclick="window.StudioUI.toggleDarkMode()" title="تبديل الوضع الليلي للمعاينة">
                    <i class="fas ${isDarkPreview ? 'fa-sun' : 'fa-moon'}" id="sb-theme-icon"></i>
                    <span class="hide-mobile" id="sb-theme-mode-text">${isDarkPreview ? 'فاتح' : 'داكن'}</span>
                </button>

                <input type="file" id="json-file-input" style="display:none;" accept=".json" onchange="window.StudioUI.handleJsonFileUpload(event)" />
                
                <button class="sb-btn sb-btn-ghost" onclick="document.getElementById('json-file-input').click()" title="استيراد ملف JSON">
                    <i class="fas fa-upload"></i>
                </button>
                
                <button class="sb-btn sb-btn-ghost" onclick="window.StudioUI.downloadJson()" title="تصدير ملف JSON">
                    <i class="fas fa-download"></i>
                </button>

                <button id="btn-publish-live" class="sb-btn sb-btn-primary" onclick="window.StudioUI.publishTheme()">
                    <i class="fas fa-cloud-upload-alt"></i>
                    <span>نشر 🚀</span>
                </button>
            </div>
        </header>
        `;
    }
}
