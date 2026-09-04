/**
 * ========================================================
 * 🔵 ShapesTab Component — مع sliders لحجم الكروت
 * ========================================================
 */

import { studioState } from '../../state';
import { STORE_STYLE_LIBRARY_LIST } from '../../styleLibrary';

export class ShapesTab {
    public static render(): string {
        const sh = studioState.config.shapes || {};
        const activeStyleId = studioState.config.style_library?.current || 'modern-soft';

        const libraryCards = STORE_STYLE_LIBRARY_LIST.map((preset) => {
            const isActive = preset.id === activeStyleId;
            return `
                <div class="sb-style-library-card ${isActive ? 'active' : ''}">
                    <div class="sb-style-preview" style="--accent:${preset.accent}; --card-radius:${preset.cardRadius}; --btn-radius:${preset.buttonRadius}; --btn-style:${preset.buttonStyle};">
                        <div class="sb-style-preview-top">
                            <span class="sb-style-dot"></span>
                            <span class="sb-style-dot"></span>
                            <span class="sb-style-dot"></span>
                        </div>
                        <div class="sb-style-preview-row">
                            <span class="sb-style-pill" style="background:${preset.accent};"></span>
                            <span class="sb-style-chip"></span>
                            <span class="sb-style-chip short"></span>
                        </div>
                        <div class="sb-style-preview-card"></div>
                    </div>
                    <div class="sb-style-meta">
                        <strong>${preset.label}</strong>
                        <small>${preset.description}</small>
                    </div>
                    <button class="sb-btn ${isActive ? 'sb-btn-primary' : 'sb-btn-ghost'} sb-style-apply-btn" onclick="window.StudioUI.applyStyleLibraryPreset('${preset.id}')">
                        ${isActive ? 'تم التطبيق' : 'تطبيق'}
                    </button>
                </div>
            `;
        }).join('');

        return `
        <div class="sb-tab-pane">
            <div class="sb-card-group highlight">
                <div class="sb-group-header">
                    <i class="fas fa-layer-group" style="color:#FBBF24;"></i>
                    <h3>مكتبة الأشكال</h3>
                </div>
                <p style="font-size:0.82rem;color:var(--sb-muted,#6b7280);margin:0 0 14px;line-height:1.6;">استدعِ شكل جاهز لكل عناصر المتجر: الكروت، الأزرار، الشريط العلوي/السفلي، والمساعد الذكي.</p>
                <div class="sb-style-library-grid">
                    ${libraryCards}
                </div>
            </div>

            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-shapes" style="color:#FBBF24;"></i>
                    <h3>استدارة حواف الكروت والأزرار</h3>
                </div>

                <div class="sb-fields-grid">
                    <div class="sb-field-card">
                        <label class="sb-field-label">استدارة كروت المنتجات (Card Radius)</label>
                        <div class="sb-segmented-control">
                            <button class="sb-seg-btn ${sh.card_radius === '0px' ? 'active' : ''}" 
                                    onclick="window.StudioUI.handleShapeChange('card_radius', '0px')">0px (مربع)</button>
                            <button class="sb-seg-btn ${sh.card_radius === '8px' ? 'active' : ''}" 
                                    onclick="window.StudioUI.handleShapeChange('card_radius', '8px')">8px (خفيف)</button>
                            <button class="sb-seg-btn ${sh.card_radius === '12px' ? 'active' : ''}" 
                                    onclick="window.StudioUI.handleShapeChange('card_radius', '12px')">12px (حاد)</button>
                            <button class="sb-seg-btn ${sh.card_radius === '16px' ? 'active' : ''}" 
                                    onclick="window.StudioUI.handleShapeChange('card_radius', '16px')">16px</button>
                            <button class="sb-seg-btn ${(sh.card_radius === '20px' || !sh.card_radius) ? 'active' : ''}" 
                                    onclick="window.StudioUI.handleShapeChange('card_radius', '20px')">20px ⭐</button>
                            <button class="sb-seg-btn ${sh.card_radius === '28px' ? 'active' : ''}" 
                                    onclick="window.StudioUI.handleShapeChange('card_radius', '28px')">28px (دائري)</button>
                        </div>
                    </div>

                    <div class="sb-field-card">
                        <label class="sb-field-label">نمط وشكل الأزرار (Button Style)</label>
                        <div class="sb-segmented-control">
                            <button class="sb-seg-btn ${(sh.button_style === 'rounded' || !sh.button_style) ? 'active' : ''}" 
                                    onclick="window.StudioUI.handleShapeChange('button_style', 'rounded'); window.StudioUI.handleShapeChange('button_radius', '14px');">
                                🔘 منحني (Rounded)
                            </button>
                            <button class="sb-seg-btn ${sh.button_style === 'pill' ? 'active' : ''}" 
                                    onclick="window.StudioUI.handleShapeChange('button_style', 'pill'); window.StudioUI.handleShapeChange('button_radius', '9999px');">
                                💊 كبسولي (Pill)
                            </button>
                            <button class="sb-seg-btn ${sh.button_style === 'square' ? 'active' : ''}" 
                                    onclick="window.StudioUI.handleShapeChange('button_style', 'square'); window.StudioUI.handleShapeChange('button_radius', '6px');">
                                ⬛ مربع (Square)
                            </button>
                        </div>
                    </div>

                    <div class="sb-field-card" style="grid-column: 1 / -1;">
                        <label class="sb-field-label">تأثير تمرير الماوس على كرت المنتج</label>
                        <div class="sb-segmented-control">
                            <button class="sb-seg-btn ${(studioState.config.animations?.card_hover || 'lift') === 'lift' ? 'active' : ''}" 
                                    onclick="window.StudioUI.handleAnimationChange('card_hover', 'lift')">
                                🚀 رفع مع ظل (Lift)
                            </button>
                            <button class="sb-seg-btn ${studioState.config.animations?.card_hover === 'glow' ? 'active' : ''}" 
                                    onclick="window.StudioUI.handleAnimationChange('card_hover', 'glow')">
                                ✨ توهج (Glow)
                            </button>
                            <button class="sb-seg-btn ${studioState.config.animations?.card_hover === 'scale' ? 'active' : ''}" 
                                    onclick="window.StudioUI.handleAnimationChange('card_hover', 'scale')">
                                🔍 تكبير (Scale)
                            </button>
                            <button class="sb-seg-btn ${studioState.config.animations?.card_hover === 'none' ? 'active' : ''}" 
                                    onclick="window.StudioUI.handleAnimationChange('card_hover', 'none')">
                                🚫 بدون حركة
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        `;
    }
}
