/**
 * ========================================================
 * 💻 JsonTab Component
 * ========================================================
 */

import { studioState } from '../../state';

export class JsonTab {
    public static render(): string {
        const jsonText = JSON.stringify(studioState.config, null, 2);
        const promptConfig = {
            store_name: studioState.config.store_name || 'متجري',
            store_tagline: studioState.config.store_tagline || 'متجر عربي عصري',
            language: 'ar',
            currency: studioState.config.currency || 'SAR',
            default_theme_mode: studioState.config.default_theme_mode || 'light',
            primary_color: studioState.config.light_theme?.colors?.primary || '#4F46E5',
            accent_color: studioState.config.light_theme?.colors?.accent || '#8B5CF6',
            background_color: studioState.config.light_theme?.colors?.bg_body || '#F8FAFC',
            typography: {
                font_family: studioState.config.typography?.font_family || 'Tajawal',
                heading_weight: studioState.config.typography?.heading_weight || '700',
                base_size: studioState.config.typography?.base_size || 16
            },
            navigation: studioState.config.navigation_settings || {},
            marketing: studioState.config.marketing || {},
            messages: studioState.config.messages || studioState.config.store_messages || {},
            modals: studioState.config.modals_customization || {},
            sections: Array.isArray(studioState.config.sections) ? studioState.config.sections : [],
            products_settings: studioState.config.products_settings || {}
        };

        const merchantPrompt = `أنت مصمم متجر إلكتروني عربي عصري ومتخصص. استخدم هذا القالب الكامل لتخصيص متجر كامل، وابقِ البنية نفسها، ولا تكتب شرحاً إضافياً، فقط أعد القيم المناسبة للمتجر وتأكد أن الناتج صالح JSON:\n\n${JSON.stringify(promptConfig, null, 2)}`;

        return `
        <div class="sb-tab-pane">
            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-code" style="color:var(--sb-accent);"></i>
                    <h3>برومبت تخصيص المتجر الكامل + JSON مباشر</h3>
                </div>

                <div class="sb-fields-grid">
                    <div style="grid-column: 1 / -1;">
                        <div class="sb-json-note">
                            <i class="fas fa-lightbulb"></i>
                            <span>انسخ البرومبت، عدّل القيم حسب المتجر، ثم استخدم نفس المحتوى داخل محرر الـ JSON أو أرسله لأي أداة أو AI لتطبيقه بشكل كامل.</span>
                        </div>
                    </div>

                    <div style="grid-column: 1 / -1;">
                        <textarea id="store-merchant-prompt" class="sb-json-editor sb-json-prompt-editor" spellcheck="false">${merchantPrompt}</textarea>
                    </div>

                    <div style="grid-column: 1 / -1; display:flex; flex-wrap:wrap; gap:8px; margin-top:8px;">
                        <button class="sb-btn sb-btn-primary" style="flex:1; min-width:180px;" onclick="window.StudioUI.copyMerchantPromptClipboard()">
                            <i class="fas fa-copy"></i> نسخ البرومبت
                        </button>
                        <button class="sb-btn sb-btn-ghost" onclick="window.StudioUI.resetMerchantPrompt()">
                            <i class="fas fa-rotate-right"></i> إعادة التحميل
                        </button>
                    </div>
                </div>
            </div>

            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-file-code" style="color:var(--sb-primary);"></i>
                    <h3>محرر كود JSON المباشر لمتجرك</h3>
                </div>

                <div class="sb-fields-grid">
                    <div style="grid-column: 1 / -1;">
                        <textarea id="live-json-editor" class="sb-json-editor" spellcheck="false">${jsonText}</textarea>
                    </div>

                    <div style="grid-column: 1 / -1; display:flex; flex-wrap:wrap; gap:8px; margin-top:8px;">
                        <button class="sb-btn sb-btn-primary" style="flex:1; min-width:180px;" onclick="window.StudioUI.handleJsonApplyFromText()">
                            <i class="fas fa-sync-alt"></i> تطبيق الـ JSON
                        </button>
                        <button class="sb-btn sb-btn-ghost" onclick="document.getElementById('json-file-input').click()">
                            <i class="fas fa-file-upload"></i> استيراد ملف
                        </button>
                        <button class="sb-btn sb-btn-ghost" onclick="window.StudioUI.downloadJson()">
                            <i class="fas fa-file-download"></i> تصدير
                        </button>
                        <button class="sb-btn sb-btn-ghost" onclick="window.StudioUI.copyJsonClipboard()">
                            <i class="fas fa-copy"></i> نسخ JSON
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
