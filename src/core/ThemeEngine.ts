/**
 * ========================================================
 * 🎨 ThemeEngine.ts - محرك تخصيص المظهر وتطبيق القوالب
 * ========================================================
 */

import { StorefrontConfig, ThemeColors, DeviceLayoutSettings } from '../types';
import { state } from './StoreState';
import { events } from './EventBus';
import { WORKER_API_URL } from './ApiClient';

export class ThemeEngine {
  private static instance: ThemeEngine;
  private currentConfig: StorefrontConfig | null = null;

  private constructor() {
    this.setupPostMessageListener();
    this.setupThemeObserver();
  }

  public static getInstance(): ThemeEngine {
    if (!ThemeEngine.instance) {
      ThemeEngine.instance = new ThemeEngine();
    }
    return ThemeEngine.instance;
  }

  private hexToRgba(hex: string, alpha: number = 0.25): string {
    if (!hex || typeof hex !== 'string') return `rgba(99, 102, 241, ${alpha})`;
    let cleanHex = hex.replace('#', '').trim();
    if (cleanHex.length === 3) {
      cleanHex = cleanHex.split('').map((c) => c + c).join('');
    }
    const num = parseInt(cleanHex, 16);
    if (isNaN(num)) return `rgba(99, 102, 241, ${alpha})`;
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  private hexToRgbValues(hex: string): string {
    if (!hex || typeof hex !== 'string') return '79, 70, 229';
    let cleanHex = hex.replace('#', '').trim();
    if (cleanHex.length === 3) {
      cleanHex = cleanHex.split('').map((c) => c + c).join('');
    }
    const num = parseInt(cleanHex, 16);
    if (isNaN(num)) return '79, 70, 229';
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `${r}, ${g}, ${b}`;
  }

  private loadGoogleFont(fontFamily: string): void {
    if (!fontFamily || fontFamily === 'inherit' || fontFamily === 'system-ui') return;
    const fontId = `google-font-${fontFamily.toLowerCase().replace(/\s+/g, '-')}`;
    if (document.getElementById(fontId)) return;

    const fontMap: Record<string, string> = {
      Tajawal: 'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap',
      Cairo: 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap',
      Almarai: 'https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap',
      'IBM Plex Sans Arabic': 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap',
      'Readex Pro': 'https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;500;600;700&display=swap',
      Alexandria: 'https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;600;700;800;900&display=swap',
      'Noto Kufi Arabic': 'https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;600;700;800&display=swap',
      Changa: 'https://fonts.googleapis.com/css2?family=Changa:wght@400;600;700;800&display=swap',
      'El Messiri': 'https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;600;700;800&display=swap',
    };

    const fontUrl = fontMap[fontFamily] || `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontFamily)}:wght@400;600;700;800&display=swap`;
    const link = document.createElement('link');
    link.id = fontId;
    link.rel = 'stylesheet';
    link.href = fontUrl;
    document.head.appendChild(link);
  }

  public applyConfig(config: StorefrontConfig): void {
    if (!config) return;
    this.currentConfig = config;
    state.setConfig(config);

    // Debug/logging to help diagnose why published themes may not take effect
    try {
      console.groupCollapsed('ThemeEngine.applyConfig — config summary');
      console.log('theme_name:', config.theme_name);
      console.log('default_theme_mode:', config.default_theme_mode);
      console.log('has_light_colors:', !!(config.light_theme && config.light_theme.colors));
      console.log('has_dark_colors:', !!(config.dark_theme && config.dark_theme.colors));
      console.log('typography.font_family:', config.typography?.font_family);
      console.log('products_settings present:', !!config.products_settings);
      console.log('modals_customization present:', !!config.modals_customization);

      const faLinkEl = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(l => l as HTMLLinkElement).find(l => l.href && (l.href.includes('font-awesome') || l.href.includes('fontawesome') || l.href.includes('all.min.css')));
      if (!faLinkEl) {
        console.warn('FontAwesome stylesheet not found in DOM. Icons may appear missing.');
      } else {
        console.log('FontAwesome stylesheet found:', faLinkEl.href);
      }
      console.groupEnd();
    } catch (e) { }

    // 0. Default theme mode (لا يُفرَض داخل استوديو المعاينة للسماح بالتبديل الحر بين الفاتح والداكن)
    const isStudioPreview = (window.parent && window.parent !== window) || window.location.search.includes('preview=studio');
    if (!isStudioPreview && config.default_theme_mode) {
      const mode = config.default_theme_mode;
      const root = document.documentElement;
      if (mode === 'dark') {
        root.classList.add('dark-mode');
      } else if (mode === 'light') {
        root.classList.remove('dark-mode');
      } else if (mode === 'auto') {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.classList.toggle('dark-mode', prefersDark);
      }
    }

    // 1. Color tokens & Shapes
    this.applyColorTokens(config);

    // 2. Identity & Announcement
    if (config.store_identity) {
      this.applyStoreIdentity(config.store_identity);
    }

    // 3. Products grid layout
    if (config.products_settings) {
      this.applyProductsLayout(config.products_settings);
    }

    // 4. Marketing widgets
    if (config.marketing) {
      this.applyMarketingWidgets(config.marketing);
    }

    // 5. Card style & Hover attributes on body
    const shapes: any = config.shapes || {};
    if (shapes.card_style) {
      document.body.dataset.cardStyle = shapes.card_style;
    }
    const anim: any = config.animations || {};
    if (anim.card_hover) {
      document.body.dataset.cardHover = anim.card_hover;
    }

    // 6. Global config sync and HomeUI dynamic re-render
    (window as any).currentStorefrontConfig = config;
    if (typeof (window as any).HomeUI?.applyLiveConfig === 'function' && (window as any).HomeUI?.storeData) {
      (window as any).HomeUI.applyLiveConfig(config);
    }

    events.emit('theme:applied', config);
  }

  private isHexDark(hex: string): boolean {
    if (!hex || typeof hex !== 'string') return false;
    let c = hex.replace('#', '').trim();
    if (c.length === 3) c = c.split('').map(x => x + x).join('');
    if (c.length !== 6) return false;
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    if (isNaN(r) || isNaN(g) || isNaN(b)) return false;
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return yiq < 128;
  }

  private applyColorTokens(config: StorefrontConfig): void {
    const root = document.documentElement;
    const isDark = root.classList.contains('dark-mode');
    const cfgAny = config as any;
    const lightColors = config.light_theme?.colors || cfgAny.modes?.light?.colors || {};
    const darkColors = config.dark_theme?.colors || cfgAny.modes?.dark?.colors || {};
    const activeColors = isDark ? darkColors : lightColors;

    // 1. ألوان الهوية والعلامة
    const basePrimary = lightColors.primary || '#4F46E5';
    const primary = (isDark ? (darkColors.primary || basePrimary) : basePrimary) || '#4F46E5';
    root.style.setProperty('--theme-primary', primary);
    root.style.setProperty('--primary', primary);

    const primaryRgb = this.hexToRgbValues(primary);
    root.style.setProperty('--primary-rgb', primaryRgb);
    root.style.setProperty('--theme-primary-rgb', primaryRgb);

    const primaryHover = activeColors.primary_hover || (isDark ? '#818CF8' : '#4338CA');
    root.style.setProperty('--theme-primary-hover', primaryHover);

    const glow = this.hexToRgba(primary, isDark ? 0.35 : 0.22);
    root.style.setProperty('--theme-primary-glow', glow);
    root.style.setProperty('--primary-glow', glow);

    const accent = (isDark ? (darkColors.accent || lightColors.accent) : (lightColors.accent || '#14B8A6')) || '#14B8A6';
    root.style.setProperty('--theme-accent', accent);
    root.style.setProperty('--accent', accent);

    const gradStart = activeColors.primary_gradient_start || primary;
    const gradEnd = activeColors.primary_gradient_end || accent;
    const gradient = `linear-gradient(135deg, ${gradStart}, ${gradEnd})`;
    root.style.setProperty('--theme-primary-gradient', gradient);
    root.style.setProperty('--primary-gradient', gradient);

    // 2. الخلفيات والسطوح والكروت
    const defaultDarkBg = '#0B1120';
    const defaultLightBg = '#F8FAFC';
    const bgBody = activeColors.bg_body || (isDark ? defaultDarkBg : defaultLightBg);
    root.style.setProperty('--theme-background', bgBody);
    root.style.setProperty('--bg-body', bgBody);
    if (document.body) {
      document.body.style.backgroundColor = bgBody;
    }

    const bgCard = activeColors.bg_card || activeColors.card_bg || (isDark ? '#151E2E' : '#FFFFFF');
    root.style.setProperty('--theme-card-bg', bgCard);
    root.style.setProperty('--bg-card', bgCard);

    const bgSurface = activeColors.bg_surface || (isDark ? '#1E293B' : '#F1F5F9');
    root.style.setProperty('--theme-surface', bgSurface);
    root.style.setProperty('--bg-surface', bgSurface);

    const border = activeColors.border || activeColors.card_border || (isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)');
    root.style.setProperty('--theme-border', border);
    root.style.setProperty('--border', border);

    // 3. النصوص والعناوين
    const textMain = activeColors.text_main || activeColors.card_title || (isDark ? '#F8FAFC' : '#0F172A');
    root.style.setProperty('--theme-text-primary', textMain);
    root.style.setProperty('--text-main', textMain);
    if (document.body) {
      document.body.style.color = textMain;
    }

    const textMuted = activeColors.text_muted || (isDark ? '#94A3B8' : '#64748B');
    root.style.setProperty('--theme-text-secondary', textMuted);
    root.style.setProperty('--text-muted', textMuted);

    // 4. الشريط العلوي والسفلي (Header & Navbar & Bottom Nav)
    const navbarBg = activeColors.navbar_bg || activeColors.header_bg || bgCard;
    root.style.setProperty('--theme-navbar-bg', navbarBg);
    root.style.setProperty('--navbar-bg', navbarBg);

    const navbarText = activeColors.navbar_text || activeColors.header_text || textMain;
    root.style.setProperty('--theme-navbar-text', navbarText);
    root.style.setProperty('--navbar-text', navbarText);

    const bottomNavBg = activeColors.bottom_bar_bg || activeColors.bottom_nav_bg || bgCard;
    root.style.setProperty('--theme-bottom-nav-bg', bottomNavBg);
    root.style.setProperty('--bottom-bar-bg', bottomNavBg);

    const bottomNavActive = activeColors.bottom_bar_active || activeColors.bottom_nav_active || primary;
    root.style.setProperty('--theme-bottom-nav-active', bottomNavActive);
    root.style.setProperty('--bottom-bar-active', bottomNavActive);

    const bottomNavInactive = activeColors.bottom_bar_inactive || activeColors.bottom_nav_inactive || (isDark ? '#64748B' : '#94A3B8');
    root.style.setProperty('--theme-bottom-nav-inactive', bottomNavInactive);
    root.style.setProperty('--bottom-bar-inactive', bottomNavInactive);

    // 5. شريط الفئات والشرائح (Category Chips & Sub Navbar)
    const chipBg = activeColors.category_chip_bg || bgSurface;
    root.style.setProperty('--theme-cat-chip-bg', chipBg);
    root.style.setProperty('--cat-chip-bg', chipBg);
    root.style.setProperty('--category-chip-bg', chipBg);

    const chipActive = activeColors.category_chip_active || activeColors.category_chip_active_bg || primary;
    root.style.setProperty('--theme-cat-chip-active-bg', chipActive);
    root.style.setProperty('--cat-chip-active', chipActive);
    root.style.setProperty('--category-chip-active', chipActive);

    const chipText = activeColors.category_chip_text || textMain;
    root.style.setProperty('--theme-cat-chip-text', chipText);
    root.style.setProperty('--cat-chip-text', chipText);
    root.style.setProperty('--category-chip-text', chipText);

    // 6. البحث (Search)
    const searchBg = activeColors.search_bg || bgSurface;
    root.style.setProperty('--theme-search-bg', searchBg);
    root.style.setProperty('--search-bg', searchBg);

    const searchText = activeColors.search_text || textMain;
    root.style.setProperty('--theme-search-text', searchText);

    // 7. الأسعار، الشارات، والأزرار
    const priceColor = activeColors.price_color || primary;
    root.style.setProperty('--theme-price-color', priceColor);
    root.style.setProperty('--price-color', priceColor);

    const oldPriceColor = activeColors.old_price_color || (isDark ? '#64748B' : '#94A3B8');
    root.style.setProperty('--theme-old-price-color', oldPriceColor);
    root.style.setProperty('--old-price-color', oldPriceColor);

    const badgeBg = activeColors.badge_bg || activeColors.discount_badge_bg || '#EF4444';
    root.style.setProperty('--theme-discount-badge-bg', badgeBg);
    root.style.setProperty('--badge-bg', badgeBg);

    const badgeText = activeColors.badge_text || activeColors.discount_badge_text || '#FFFFFF';
    root.style.setProperty('--theme-discount-badge-text', badgeText);
    root.style.setProperty('--badge-text', badgeText);

    const btnPrimaryBg = activeColors.btn_primary_bg || activeColors.button_primary_bg || primary;
    root.style.setProperty('--theme-btn-primary-bg', btnPrimaryBg);
    root.style.setProperty('--btn-primary-bg', btnPrimaryBg);

    const btnPrimaryText = activeColors.btn_primary_text || '#FFFFFF';
    root.style.setProperty('--theme-btn-primary-text', btnPrimaryText);
    root.style.setProperty('--btn-primary-text', btnPrimaryText);

    const chatbotBtnBg = activeColors.chatbot_btn_bg || primary;
    root.style.setProperty('--theme-chatbot-btn-bg', chatbotBtnBg);
    root.style.setProperty('--chatbot-btn-bg', chatbotBtnBg);

    // 8. النوافذ، السلة، والشيتات (Modals, Cart & Sheets)
    const modalBg = activeColors.modal_bg || bgCard;
    root.style.setProperty('--theme-modal-bg', modalBg);
    root.style.setProperty('--modal-bg', modalBg);
    root.style.setProperty('--bg-modal', modalBg);

    const modalOverlay = activeColors.modal_overlay || (isDark ? 'rgba(0, 0, 0, 0.85)' : 'rgba(15, 23, 42, 0.6)');
    root.style.setProperty('--theme-modal-overlay', modalOverlay);
    root.style.setProperty('--modal-overlay', modalOverlay);

    const modalHandle = activeColors.modal_handle || border;
    root.style.setProperty('--theme-modal-handle', modalHandle);
    root.style.setProperty('--modal-handle', modalHandle);

    // 9. Typography
    const typo = config.typography || {};
    if (typo.font_family) {
      root.style.setProperty('--theme-font-family', `'${typo.font_family}', sans-serif`);
      this.loadGoogleFont(typo.font_family);
    }

    const mobileBase = typo.base_size_mobile || typo.base_size || '15px';
    const desktopBase = typo.base_size_desktop || typo.base_size || '17px';
    root.style.setProperty('--theme-base-size-mobile', mobileBase);
    root.style.setProperty('--theme-base-size-desktop', desktopBase);

    // 10. Shapes
    const shapes: any = config.shapes || {};
    if (shapes.card_radius) {
      root.style.setProperty('--theme-card-radius', shapes.card_radius);
      root.style.setProperty('--radius-xl', shapes.card_radius);
    }
    if (shapes.button_radius) {
      root.style.setProperty('--theme-button-radius', shapes.button_radius);
      root.style.setProperty('--radius-lg', shapes.button_radius);
    }
    if (shapes.button_style === 'pill') {
      root.style.setProperty('--theme-button-radius', '9999px');
      root.style.setProperty('--radius-lg', '9999px');
    } else if (shapes.button_style === 'square' || shapes.button_style === 'flat') {
      root.style.setProperty('--theme-button-radius', shapes.button_radius || '4px');
      root.style.setProperty('--radius-lg', shapes.button_radius || '4px');
    } else if (shapes.button_style === 'rounded') {
      root.style.setProperty('--theme-button-radius', shapes.button_radius || '14px');
      root.style.setProperty('--radius-lg', shapes.button_radius || '14px');
    }

    document.body.classList.add('theme-storefront');
  }

  private applyStoreIdentity(identity: Record<string, any>): void {
    if (identity.store_name) {
      document.title = identity.store_name;
      const logoSpan = document.querySelector('.logo span') || document.querySelector('.navbar-brand span');
      if (logoSpan) logoSpan.textContent = identity.store_name;
    }

    // Announcement bar
    const ann = identity.announcement_bar;
    let barEl = document.getElementById('storefront-announcement-bar');

    if (ann && ann.enabled && ann.text) {
      if (!barEl) {
        barEl = document.createElement('div');
        barEl.id = 'storefront-announcement-bar';
        barEl.style.cssText = `
          width: 100%;
          padding: 8px 15px;
          text-align: center;
          font-size: 0.85rem;
          font-weight: 700;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10001;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        `;
        document.body.insertBefore(barEl, document.body.firstChild);
      }
      barEl.style.background = ann.bg_color || 'var(--theme-primary)';
      barEl.style.color = ann.text_color || '#FFFFFF';
      barEl.innerHTML = `<span>${ann.text}</span>`;
      barEl.style.display = 'flex';
    } else if (barEl) {
      barEl.style.display = 'none';
    }
  }

  private applyProductsLayout(ps: Record<string, any>): void {
    const port = ps.portrait || {};
    const land = ps.landscape || {};
    const pCols = Number(port.grid_columns || 2);
    const lCols = Number(land.grid_columns || 4);

    let styleTag = document.getElementById('dynamic-products-layout-css');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'dynamic-products-layout-css';
      document.head.appendChild(styleTag);
    }

    styleTag.textContent = `
      @media (max-width: 767px) {
        .product-grid, .ultra-product-grid, .store-premium-grid {
          grid-template-columns: repeat(${pCols}, minmax(0, 1fr)) !important;
          gap: 12px !important;
        }
        ${port.card_custom_width > 0 ? `
          .horizontal-scroller .product-card-compact, .horizontal-scroller .fast-card {
            flex: 0 0 ${port.card_custom_width}px !important;
            width: ${port.card_custom_width}px !important;
          }
        ` : ''}
      }
      @media (min-width: 768px) {
        .product-grid, .ultra-product-grid, .store-premium-grid {
          grid-template-columns: repeat(${lCols}, minmax(0, 1fr)) !important;
          gap: 18px !important;
        }
        ${land.card_custom_width > 0 ? `
          .horizontal-scroller .product-card-compact, .horizontal-scroller .fast-card {
            flex: 0 0 ${land.card_custom_width}px !important;
            width: ${land.card_custom_width}px !important;
          }
        ` : ''}
      }
    `;
  }

  private applyMarketingWidgets(m: Record<string, any>): void {
    const wa = m.whatsapp_floating;
    let waBtn = document.getElementById('storefront-floating-whatsapp') as HTMLAnchorElement | null;

    if (wa && wa.enabled && wa.phone) {
      if (!waBtn) {
        waBtn = document.createElement('a') as HTMLAnchorElement;
        waBtn.id = 'storefront-floating-whatsapp';
        waBtn.target = '_blank';
        waBtn.rel = 'noopener noreferrer';
        waBtn.style.cssText = `
          position: fixed;
          bottom: 85px;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #25D366;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          box-shadow: 0 4px 18px rgba(37, 211, 102, 0.4);
          z-index: 999;
          text-decoration: none;
        `;
        document.body.appendChild(waBtn);
      }
      const cleanPhone = wa.phone.replace(/[^0-9]/g, '');
      waBtn.href = `https://wa.me/${cleanPhone}?text=${encodeURIComponent('مرحباً، أود الاستفسار بخصوص المتجر')}`;
      if (wa.position === 'right') {
        waBtn.style.right = '20px';
        waBtn.style.left = 'auto';
      } else {
        waBtn.style.left = '20px';
        waBtn.style.right = 'auto';
      }
      waBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
      waBtn.style.display = 'flex';
    } else if (waBtn) {
      waBtn.style.display = 'none';
    }
  }

  private setupPostMessageListener(): void {
    window.addEventListener('message', (event) => {
      if (!event.data || typeof event.data !== 'object') return;

      if (event.data.type === 'NALSH_CONFIG_UPDATE' || event.data.type === 'NALSH_THEME_UPDATE') {
        this.applyConfig(event.data.config);
      } else if (event.data.type === 'NALSH_TOGGLE_DARK_MODE') {
        const isDark = !!event.data.darkMode;
        document.documentElement.classList.toggle('dark-mode', isDark);
        if (this.currentConfig) {
          this.applyColorTokens(this.currentConfig);
        }
      }
    });

    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: 'NALSH_IFRAME_READY' }, '*');
    }
  }

  private setupThemeObserver(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        if (m.type === 'attributes' && m.attributeName === 'class') {
          if (this.currentConfig) {
            this.applyColorTokens(this.currentConfig);
          }
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
  }

  public async loadInitial(): Promise<void> {
    const keys = [
      'nalsh_storefront_config',
      'nalsh_storefront_config_store',
      'nalsh_storefront_config_merchant',
      'nalsh_storefront_config_v2',
      'nalsh_theme_config',
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const storeParam = urlParams.get('store');
    const pathParts = window.location.pathname.replace(/^\/+|\/+$/g, '').split('/');
    const storeFromPath = pathParts.length > 0 && !['', 'index.html', 'store-builder.html', 'login.html'].includes(pathParts[0].toLowerCase()) ? pathParts[0] : null;
    const targetStore = (storeParam || storeFromPath || '').toLowerCase();

    // Priority 1: cloud / latest published config (avoids stale local cache).
    const freshFromCloud = await this._syncFromCloud(targetStore, true).catch(() => undefined);
    if (freshFromCloud) {
      return;
    }

    // Priority 2: non-cached theme-config file.
    try {
      const res = await fetch('theme-config.json?v=' + Date.now(), { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        if (json && typeof json === 'object' && json.version) {
          this.applyConfig(json);
          return;
        }
      }
    } catch (e) {}

    // Priority 3: local cache as fallback only when remote data is unavailable.
    if (targetStore) {
      const saved = localStorage.getItem(`nalsh_storefront_config_${targetStore}`);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          this.applyConfig(parsed);
          return;
        } catch {}
      }
    }

    for (const key of keys) {
      const saved = localStorage.getItem(key);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          this.applyConfig(parsed);
          return;
        } catch {}
      }
    }
  }

  private async _syncFromCloud(targetStore: string, preferLatest = false): Promise<boolean> {
    try {
      const payload: any = { action: 'get_storefront_config' };
      if (targetStore) payload.username = targetStore;

      const res = await fetch(WORKER_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        cache: preferLatest ? 'no-store' : 'default',
      });

      if (!res.ok) return false;

      const json = await res.json().catch(() => null);
      const cfg = json?.data?.config || json?.config || (json?.version ? json : null);
      if (!cfg || typeof cfg !== 'object' || !cfg.version) return false;

      try {
        const storeKey = targetStore
          ? `nalsh_storefront_config_${targetStore}`
          : 'nalsh_storefront_config';
        localStorage.setItem(storeKey, JSON.stringify(cfg));
        localStorage.setItem('nalsh_storefront_config', JSON.stringify(cfg));
      } catch (e) {}

      this.applyConfig(cfg);
      return true;
    } catch (err) {
      return false;
    }
  }
}

export const themeEngine = ThemeEngine.getInstance();
