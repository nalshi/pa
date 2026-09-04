/**
 * NavigationTab Component v1.0
 */

import { studioState } from '../../state';
import { DEFAULT_NAV_ITEMS, DEFAULT_TOP_BAR_SETTINGS, NAVIGATION_PRESETS, getNavigationPresetLabel, normalizeBottomNavItems, normalizeTopBarSettings } from '../../navigationDefaults';

export const DEFAULT_BOTTOM_ITEMS = DEFAULT_NAV_ITEMS;

const ICON_OPTIONS: Record<string, string[]> = {
    home:      ['fa-home', 'fa-house', 'fa-store', 'fa-shop'],
    search:    ['fa-search', 'fa-magnifying-glass', 'fa-binoculars'],
    orders:    ['fa-box-open', 'fa-box', 'fa-clipboard-list', 'fa-receipt', 'fa-truck'],
    favorites: ['fa-heart', 'fa-star', 'fa-bookmark', 'fa-thumbs-up'],
    cart:      ['fa-shopping-cart', 'fa-shopping-bag', 'fa-basket-shopping', 'fa-cart-plus'],
};

export class NavigationTab {
    public static render(): string {
        const cfg = studioState.config;
        const navSettings = (cfg as any).navigation_settings || {};
        const bottomItems = normalizeBottomNavItems(navSettings.bottom_bar?.items || DEFAULT_BOTTOM_ITEMS);
        const topBar = normalizeTopBarSettings(navSettings.top_bar || DEFAULT_TOP_BAR_SETTINGS);

        const renderIconSelect = (itemId: string, currentIcon: string): string => {
            const opts = ICON_OPTIONS[itemId] || ['fa-circle'];
            let html = `<select class="sb-select" style="font-size:0.78rem;padding:5px 8px;width:auto;min-width:110px;" onchange="window.StudioUI.handleNavBottomItemChange('${itemId}','icon',this.value)">`;
            for (const ic of opts) {
                html += `<option value="${ic}"${currentIcon === ic ? ' selected' : ''}>${ic.replace('fa-','')}</option>`;
            }
            html += '</select>';
            return html;
        };

        let itemsHtml = '';
        for (let idx = 0; idx < bottomItems.length; idx++) {
            const item = bottomItems[idx];
            const isFirst = idx === 0;
            const isLast = idx === bottomItems.length - 1;
            itemsHtml += `<div draggable="true" ondragstart="window.StudioUI.handleNavBottomItemDragStart('${item.id}')" ondragover="event.preventDefault()" ondrop="window.StudioUI.handleNavBottomItemDrop('${item.id}')" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--sb-surface,#f8f9fb);border:1px solid var(--sb-border,#e8eaed);border-radius:12px;margin-bottom:8px;box-shadow:0 2px 8px rgba(15,23,42,0.04);${!item.visible ? 'opacity:0.55;' : ''}">
               <div title="اسحب لإعادة ترتيب العنصر" style="width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--sb-primary,#6366F1),var(--sb-primary-strong,#4F46E5));display:flex;align-items:center;justify-content:center;color:#fff;font-size:0.9rem;flex-shrink:0;cursor:grab;box-shadow:0 6px 18px rgba(99,102,241,0.18);"><i class="fas ${item.icon}"></i></div>
                <div style="display:flex;flex-direction:column;gap:2px;flex-shrink:0;">
                    <button onclick="window.StudioUI.handleNavBottomItemMove('${item.id}','up')" ${isFirst ? 'disabled' : ''} style="background:var(--sb-bg,#fff);border:1px solid var(--sb-border,#e8eaed);border-radius:5px;width:22px;height:20px;cursor:pointer;font-size:0.65rem;display:flex;align-items:center;justify-content:center;${isFirst ? 'opacity:0.3;cursor:not-allowed;' : ''}">↑</button>
                    <button onclick="window.StudioUI.handleNavBottomItemMove('${item.id}','down')" ${isLast ? 'disabled' : ''} style="background:var(--sb-bg,#fff);border:1px solid var(--sb-border,#e8eaed);border-radius:5px;width:22px;height:20px;cursor:pointer;font-size:0.65rem;display:flex;align-items:center;justify-content:center;${isLast ? 'opacity:0.3;cursor:not-allowed;' : ''}">↓</button>
                </div>
                <div style="flex:1;display:flex;flex-direction:column;gap:6px;">
                    <div style="display:flex;align-items:center;gap:6px;">
                        <span style="font-size:0.68rem;color:var(--sb-muted,#6b7280);display:inline-flex;align-items:center;gap:4px;letter-spacing:0.02em;">⋮⋮ <span>اسحب</span></span>
                        <input type="text" class="sb-input" value="${item.label}" style="font-size:0.82rem;padding:5px 8px;flex:1;min-width:60px;" onchange="window.StudioUI.handleNavBottomItemChange('${item.id}','label',this.value)" placeholder="الاسم">
                        ${renderIconSelect(item.id, item.icon)}
                    </div>
                </div>
                <label class="sb-toggle" style="flex-shrink:0;">
                    <input type="checkbox" ${item.visible ? 'checked' : ''} onchange="window.StudioUI.handleNavBottomItemChange('${item.id}','visible',this.checked)">
                    <span class="sb-toggle-slider"></span>
                </label>
            </div>`;
        }

        const logoIcons = [
            ['fa-store','متجر'],['fa-shopping-bag','حقيبة'],['fa-tag','بطاقة'],['fa-star','نجمة'],
            ['fa-gem','جوهرة'],['fa-fire','نار'],['fa-bolt','برق'],['fa-crown','تاج']
        ];
        let logoIconsHtml = '';
        for (const [ic, lbl] of logoIcons) {
            const isActive = topBar.logo_icon === ic;
            logoIconsHtml += `<button title="${lbl}" onclick="window.StudioUI.handleNavTopBarChange('logo_icon','${ic}')"
                style="width:44px;height:44px;border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;cursor:pointer;
                border:2px solid ${isActive ? 'var(--sb-primary,#6366F1)' : 'var(--sb-border,#e8eaed)'};
                background:${isActive ? 'rgba(99,102,241,0.12)' : 'var(--sb-surface,#f8f9fb)'};
                font-size:1.1rem;color:${isActive ? 'var(--sb-primary,#6366F1)' : 'var(--sb-muted,#6b7280)'};"><i class="fas ${ic}"></i></button>`;
        }

        const presetButtons = Object.keys(NAVIGATION_PRESETS).map((key) => `
            <button class="sb-btn-outline" style="font-size:0.75rem;padding:6px 10px;" onclick="window.StudioUI.handleNavPreset('${key}')">
                ${getNavigationPresetLabel(key)}
            </button>`).join('');

        return `<div class="sb-tab-pane">
            <div class="sb-alert-box info">
                <i class="fas fa-bars"></i>
                <div><strong>تحكم كامل بأشرطة التنقل 🧭</strong>
                <span>خصّص الشريط السفلي والعلوي — رتّب وأخفِ وأعِد تسمية كل عنصر وشاهد التغيير فوراً في المعاينة الحية.</span></div>
            </div>

            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-wand-magic-sparkles" style="color:var(--sb-primary);"></i>
                    <h3>قوالب ذكية</h3>
                </div>
                <div style="display:flex;gap:8px;flex-wrap:wrap;">${presetButtons}</div>
            </div>

            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-grip-horizontal" style="color:var(--sb-primary);"></i>
                    <h3>الشريط السفلي (Bottom Bar)</h3>
                </div>
                <p style="font-size:0.82rem;color:var(--sb-muted,#6b7280);margin:0 0 14px;padding:0 4px;">رتّب عناصر الشريط السفلي بالأسهم ↑↓ وسحب العناصر داخل القائمة. العناصر المحمية هي الرئيسية والسلة، مع حد أدنى 2 عناصر مرئية لحفاظ تجربة التنقل.</p>
                ${itemsHtml}
                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                    <button class="sb-btn-outline" style="flex:1;min-width:140px;margin-top:10px;font-size:0.82rem;" onclick="window.StudioUI.handleNavResetBottomBar()">
                        <i class="fas fa-undo"></i> إعادة الضبط للافتراضي
                    </button>
                    <button class="sb-btn-primary" style="flex:1;min-width:140px;margin-top:10px;font-size:0.82rem;" onclick="window.StudioUI.handleNavSmartProtect()">
                        <i class="fas fa-shield-heart"></i> حماية ذكية
                    </button>
                </div>
            </div>

            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-bars" style="color:var(--sb-primary);"></i>
                    <h3>الشريط العلوي (Header)</h3>
                </div>
                <div class="sb-fields-grid">
                    <div class="sb-field-card" style="grid-column:1/-1;">
                        <label class="sb-field-label">أيقونة الشعار / اللوجو</label>
                        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:8px;">${logoIconsHtml}</div>
                    </div>
                    <div class="sb-field-card" style="display:flex;align-items:center;justify-content:space-between;">
                        <div>
                            <label class="sb-field-label" style="margin:0;">إظهار الشعار 🏬</label>
                            <p style="font-size:0.75rem;color:var(--sb-muted,#6b7280);margin:3px 0 0;">إخفاء/إظهار أيقونة الشعار في الهيدر</p>
                        </div>
                        <label class="sb-toggle">
                            <input type="checkbox" ${topBar.show_logo_icon !== false ? 'checked' : ''} onchange="window.StudioUI.handleNavTopBarChange('show_logo_icon',this.checked)">
                            <span class="sb-toggle-slider"></span>
                        </label>
                    </div>
                    <div class="sb-field-card" style="display:flex;align-items:center;justify-content:space-between;">
                        <div>
                            <label class="sb-field-label" style="margin:0;">زر البحث 🔎</label>
                            <p style="font-size:0.75rem;color:var(--sb-muted,#6b7280);margin:3px 0 0;">إظهار/إخفاء زر البحث في الهيدر</p>
                        </div>
                        <label class="sb-toggle">
                            <input type="checkbox" ${topBar.show_search_btn !== false ? 'checked' : ''} onchange="window.StudioUI.handleNavTopBarChange('show_search_btn',this.checked)">
                            <span class="sb-toggle-slider"></span>
                        </label>
                    </div>
                    <div class="sb-field-card" style="display:flex;align-items:center;justify-content:space-between;">
                        <div>
                            <label class="sb-field-label" style="margin:0;">زر الوضع الليلي 🌙</label>
                            <p style="font-size:0.75rem;color:var(--sb-muted,#6b7280);margin:3px 0 0;">إظهار/إخفاء زر تبديل الوضع الداكن في الهيدر</p>
                        </div>
                        <label class="sb-toggle">
                            <input type="checkbox" ${topBar.show_dark_mode_btn !== false ? 'checked' : ''} onchange="window.StudioUI.handleNavTopBarChange('show_dark_mode_btn',this.checked)">
                            <span class="sb-toggle-slider"></span>
                        </label>
                    </div>
                    <div class="sb-field-card" style="display:flex;align-items:center;justify-content:space-between;">
                        <div>
                            <label class="sb-field-label" style="margin:0;">زر الحساب الشخصي 👤</label>
                            <p style="font-size:0.75rem;color:var(--sb-muted,#6b7280);margin:3px 0 0;">إظهار/إخفاء زر الملف الشخصي في الهيدر</p>
                        </div>
                        <label class="sb-toggle">
                            <input type="checkbox" ${topBar.show_profile_btn !== false ? 'checked' : ''} onchange="window.StudioUI.handleNavTopBarChange('show_profile_btn',this.checked)">
                            <span class="sb-toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>`;
    }
}