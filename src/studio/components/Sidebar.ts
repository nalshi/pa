/**
 * ========================================================
 * 🗂️ Studio Sidebar & Tab Navigator
 * ========================================================
 */

import { studioState } from '../state';
import { ActiveTabKey } from '../types';
import { IdentityTab } from './tabs/IdentityTab';
import { ProductsTab } from './tabs/ProductsTab';
import { MessagesTab } from './tabs/MessagesTab';
import { SectionsTab } from './tabs/SectionsTab';
import { ModalsTab } from './tabs/ModalsTab';
import { ColorsTab } from './tabs/ColorsTab';
import { AIPaletteTab } from './tabs/AIPaletteTab';
import { TypographyTab } from './tabs/TypographyTab';
import { ShapesTab } from './tabs/ShapesTab';
import { MarketingTab } from './tabs/MarketingTab';
import { JsonTab } from './tabs/JsonTab';
import { NavigationTab } from './tabs/NavigationTab';

export class Sidebar {
    public static readonly TAB_ITEMS: Array<{ key: ActiveTabKey; label: string; icon: string; color: string }> = [
        { key: 'identity', label: 'الهوية', icon: 'fa-store', color: '#6366F1' },
        { key: 'ai_palette', label: '20 ثيم', icon: 'fa-palette', color: '#A78BFA' },
        { key: 'light_colors', label: 'الفاتح', icon: 'fa-sun', color: '#F59E0B' },
        { key: 'dark_colors', label: 'الداكن', icon: 'fa-moon', color: '#818CF8' },
        { key: 'products_layout', label: 'المنتجات', icon: 'fa-boxes-stacked', color: '#10B981' },
        { key: 'sections', label: 'الأقسام', icon: 'fa-layer-group', color: '#06B6D4' },
        { key: 'navigation', label: 'الأشرطة', icon: 'fa-bars', color: '#0EA5E9' },
        { key: 'typography', label: 'الخطوط', icon: 'fa-font', color: '#14B8A6' },
        { key: 'shapes', label: 'الأشكال', icon: 'fa-shapes', color: '#FBBF24' },
        { key: 'messages', label: 'الرسائل', icon: 'fa-comments', color: '#EC4899' },
        { key: 'modals', label: 'النوافذ', icon: 'fa-window-restore', color: '#F43F5E' },
        { key: 'marketing', label: 'تسويق', icon: 'fa-bullhorn', color: '#EF4444' },
        { key: 'json', label: 'JSON', icon: 'fa-code', color: '#94A3B8' }
    ];

    public static readonly TAB_GROUPS = [
        {
            title: 'أساسيات المتجر',
            tabs: ['identity', 'ai_palette', 'light_colors', 'dark_colors'] as ActiveTabKey[]
        },
        {
            title: 'تخطيط المتجر',
            tabs: ['products_layout', 'sections', 'navigation', 'typography', 'shapes'] as ActiveTabKey[]
        },
        {
            title: 'تجربة المستخدم',
            tabs: ['messages', 'modals', 'marketing'] as ActiveTabKey[]
        },
        {
            title: 'متقدم',
            tabs: ['json'] as ActiveTabKey[]
        }
    ];

    public static renderTabContent(tabKey: ActiveTabKey = studioState.activeTab): string {
        switch (tabKey) {
            case 'identity': return IdentityTab.render();
            case 'products_layout': return ProductsTab.render();
            case 'messages': return MessagesTab.render();
            case 'sections': return SectionsTab.render();
            case 'modals': return ModalsTab.render();
            case 'light_colors': return ColorsTab.render('light');
            case 'dark_colors': return ColorsTab.render('dark');
            case 'ai_palette': return AIPaletteTab.render();
            case 'typography': return TypographyTab.render();
            case 'shapes': return ShapesTab.render();
            case 'navigation': return NavigationTab.render();
            case 'marketing': return MarketingTab.render();
            case 'json': return JsonTab.render();
            default: return IdentityTab.render();
        }
    }

    public static render(): string {
        const { activeTab } = studioState;
        const tabContentHtml = Sidebar.renderTabContent(activeTab);

        return `
        <aside class="sb-sidebar-pane">
            <nav class="sb-nav-rail" id="sb-tabs-rail">
                ${Sidebar.TAB_GROUPS.flatMap(group => group.tabs).map(tabKey => {
                    const tab = Sidebar.TAB_ITEMS.find(item => item.key === tabKey);
                    if (!tab) return '';
                    return `
                        <button class="sb-rail-btn ${activeTab === tab.key ? 'active' : ''}" 
                                data-tab="${tab.key}"
                                onclick="window.StudioUI.setActiveTab('${tab.key}')" 
                                title="${tab.label}">
                            <div class="sb-rail-icon" style="color: ${tab.color};">
                                <i class="fas ${tab.icon}"></i>
                            </div>
                            <span class="sb-rail-label">${tab.label}</span>
                        </button>
                    `;
                }).join('')}
            </nav>

            <div class="sb-tab-content-wrapper" id="sb-tab-content-area">
                <div class="sb-sidebar-header">
                    <div>
                        <span class="sb-sidebar-kicker">إعدادات المتجر</span>
                        <h2>لوحة التخصيص</h2>
                    </div>
                    <button class="sb-mini-btn" onclick="window.StudioUI.openHelpModal()">
                        <i class="fas fa-lightbulb"></i>
                    </button>
                </div>

                <div class="sb-tab-group-list">
                    ${Sidebar.TAB_GROUPS.map(group => `
                        <div class="sb-tab-group">
                            <div class="sb-tab-group-header">${group.title}</div>
                            <div class="sb-tab-group-links">
                                ${group.tabs.map(tabKey => {
                                    const tab = Sidebar.TAB_ITEMS.find(item => item.key === tabKey);
                                    if (!tab) return '';
                                    return `
                                        <button class="sb-tab-link ${activeTab === tab.key ? 'active' : ''}" data-tab="${tab.key}" onclick="window.StudioUI.setActiveTab('${tab.key}')">
                                            <span class="sb-tab-link-icon" style="color: ${tab.color};"><i class="fas ${tab.icon}"></i></span>
                                            <span>${tab.label}</span>
                                        </button>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>

                ${tabContentHtml}
            </div>
        </aside>
        `;
    }
}
