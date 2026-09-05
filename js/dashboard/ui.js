/**
 * ui.js — واجهة المستخدم، النوافذ المنبثقة، الثيم، والتنقل
 * يُحمَّل فوراً مع الصفحة
 */
(function () {
    'use strict';

    // ===== حقن Modals المشتركة في DOM إذا لم تكن موجودة =====
    function injectBaseModals() {
        if (!document.getElementById('unsaved-modal')) {
            const unsavedHTML = `
            <div class="modal" id="unsaved-modal" style="z-index: 10007;">
                <div class="modal-content">
                    <div style="width: 55px; height: 55px; background: rgba(245, 158, 11, 0.1); border-radius: 50%; display: flex; justify-content: center; align-items: center; margin: 0 auto 12px;">
                        <i class="fas fa-exclamation-triangle" style="font-size:1.8rem; color:var(--warning);"></i>
                    </div>
                    <h3 style="font-weight:900; font-size: 1.15rem; margin-bottom: 6px;">تجاهل التغييرات؟</h3>
                    <p style="color:var(--text-muted); font-size: 0.85rem; margin-bottom: 18px;">لقد قمت بكتابة بيانات لم تقم بحفظها. هل أنت متأكد من رغبتك في الخروج؟</p>
                    <div style="display:flex; gap:10px;">
                        <button class="btn-main" style="background: var(--warning); padding: 9px; font-size: 0.9rem; box-shadow: none;" onclick="confirmLeaveForm()">نعم، اخرج</button>
                        <button class="btn-main" style="background: var(--bg-body); color: var(--text-main); border: 1px solid var(--border-glass); padding: 9px; font-size: 0.9rem; box-shadow: none;" onclick="closeM('unsaved-modal')">بقاء</button>
                    </div>
                </div>
            </div>`;
            document.body.insertAdjacentHTML('beforeend', unsavedHTML);
        }

        if (!document.getElementById('smart-confirm-modal')) {
            const smartConfirmHTML = `
            <div id="smart-confirm-modal" class="modal" style="z-index: 10008;">
                <div class="modal-content" style="max-width: 360px; text-align: center; padding: 30px 22px; border-radius: 24px;">
                    <div id="smart-confirm-icon-box" style="width: 70px; height: 70px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin: 0 auto 16px; font-size: 2.2rem;">
                        <i id="smart-confirm-icon" class="fas fa-question-circle"></i>
                    </div>
                    <h3 id="smart-confirm-title" style="font-weight: 900; font-size: 1.35rem; margin-bottom: 8px; color: var(--text-main);">تأكيد العملية</h3>
                    <p id="smart-confirm-msg" style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.5; margin-bottom: 24px;">هل أنت متأكد من رغبتك في الاستمرار؟</p>
                    <div style="display: flex; gap: 10px;">
                        <button id="smart-confirm-yes" class="btn-main" style="flex: 1; padding: 12px; border-radius: 12px;">تأكيد</button>
                        <button id="smart-confirm-no" class="btn-main" style="flex: 1; padding: 12px; border-radius: 12px; background: var(--bg-body); color: var(--text-main); border: 1px solid var(--border-glass); box-shadow: none;">إلغاء</button>
                    </div>
                </div>
            </div>`;
            document.body.insertAdjacentHTML('beforeend', smartConfirmHTML);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectBaseModals);
    } else {
        injectBaseModals();
    }

    // ===== نظام التوست (Toast Notifications) =====
    window.showT = function (msg, type = 'success') {
        const t = document.getElementById('toast');
        const m = document.getElementById('toast-msg');
        if (!t || !m) return;
        m.innerText = msg;
        t.style.background = type === 'error' ? 'var(--danger)' : (type === 'info' ? 'var(--warning)' : 'var(--success)');
        t.classList.add('show');
        setTimeout(() => t.classList.remove('show'), 3500);
    };

    // ===== فتح وإغلاق النوافذ المنبثقة (Modals) =====
    window.openM = async function (id) {
        // التحميل الكسول للموديول المرتبط بالنافذة إن وجد
        if (id === 'setting-ai-assistant-modal') {
            await window.ModuleLoader.load('ai-assistant');
        } else if (id === 'setting-whatsapp-modal') {
            await window.ModuleLoader.load('whatsapp');
        } else if (id === 'qr-modal') {
            await window.ModuleLoader.load('qr-modal');
        } else if (id === 'merchant-delivery-code-modal') {
            await window.ModuleLoader.load('scanner');
        } else if (id.startsWith('setting-')) {
            await window.ModuleLoader.load('settings');
            if (typeof window.ensureSettingsHTML === 'function') window.ensureSettingsHTML();
        }

        const el = document.getElementById(id);
        if (el) {
            el.classList.add('show');
            document.body.classList.add('modal-open-noscroll');
        }
    };

    window.closeM = function (id) {
        const el = document.getElementById(id);
        if (el) {
            el.classList.remove('show');
            document.body.classList.remove('modal-open-noscroll');
        }
    };

    // ===== الثيم (Dark / Light Mode) =====
    window.initTheme = function () {
        if (localStorage.getItem('mThm') === 'dark') {
            document.body.classList.add('dark-mode');
        }
        window.updThmIcn();
    };

    window.toggleTheme = function () {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('mThm', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        window.updThmIcn();
        if (typeof window.renderWeeklyActivityBar === 'function') {
            window.renderWeeklyActivityBar();
        }
        if (typeof window.addNotification === 'function') {
            window.addNotification('fas fa-palette', 'تم تغيير مظهر لوحة التحكم', 'info');
        }
    };

    window.updThmIcn = function () {
        const icon = document.getElementById('theme-icon');
        if (icon) {
            icon.className = document.body.classList.contains('dark-mode') ? 'fas fa-sun' : 'fas fa-moon';
        }
    };

    // ===== نافذة التأكيد الذكية (Smart Confirm) =====
    window.showSmartConfirm = function ({ title, msg, icon, type = 'info', confirmText = 'تأكيد', onConfirm }) {
        injectBaseModals();
        const types = {
            danger: { bg: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' },
            success: { bg: 'rgba(16, 185, 129, 0.1)', color: '#10b981' },
            warning: { bg: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' },
            info: { bg: 'rgba(37, 99, 235, 0.1)', color: '#2563eb' }
        };
        const style = types[type] || types.info;

        const iconBox = document.getElementById('smart-confirm-icon-box');
        const yesBtn = document.getElementById('smart-confirm-yes');
        const noBtn = document.getElementById('smart-confirm-no');
        const titleEl = document.getElementById('smart-confirm-title');
        const msgEl = document.getElementById('smart-confirm-msg');
        const iconEl = document.getElementById('smart-confirm-icon');

        if (iconBox) {
            iconBox.style.backgroundColor = style.bg;
            iconBox.style.color = style.color;
        }
        if (yesBtn) {
            yesBtn.style.background = `linear-gradient(135deg, ${style.color}, ${style.color}dd)`;
            yesBtn.innerText = confirmText;
            yesBtn.onclick = () => {
                window.closeM('smart-confirm-modal');
                if (onConfirm) onConfirm();
            };
        }
        if (noBtn) {
            noBtn.onclick = () => window.closeM('smart-confirm-modal');
        }
        if (titleEl) titleEl.innerText = title;
        if (msgEl) msgEl.innerText = msg;
        if (iconEl) iconEl.className = `fas ${icon}`;

        window.openM('smart-confirm-modal');
    };

    // ===== القوائم المنسدلة المخصصة (Custom Select) =====
    let selectOverlay = document.querySelector('.custom-select-overlay');
    if (!selectOverlay) {
        selectOverlay = document.createElement('div');
        selectOverlay.className = 'custom-select-overlay';
        document.body.appendChild(selectOverlay);
    }

    window.formatCategoryOptionLabel = function (html) {
        if (typeof html !== 'string' || html.indexOf(' ↳ ') === -1) return html;
        const parts = html.split(' ↳ ');
        const leaf = parts.pop();
        const breadcrumb = parts.length ? `<span class="cat-breadcrumb">${parts.join(' <i class="fas fa-chevron-left"></i> ')}</span>` : '';
        return `<span class="cat-option-inner">${breadcrumb}<span class="cat-leaf">${leaf}</span></span>`;
    };

    window.updateCustomSelect = function (select) {
        if (!select) return;
        const isCategorySelect = select.id === 'single-category-select' || select.id === 'new-cat-parent' || select.id === 'cm-new-cat-parent';

        let oldWrapper = select.closest('.custom-select-wrapper');
        if (oldWrapper) {
            oldWrapper.parentNode.insertBefore(select, oldWrapper);
            oldWrapper.remove();
        }

        select.style.display = 'none';

        const wrapper = document.createElement('div');
        wrapper.className = 'custom-select-wrapper';
        select.parentNode.insertBefore(wrapper, select);
        wrapper.appendChild(select);

        const trigger = document.createElement('div');
        trigger.className = 'custom-select-trigger';
        if (select.disabled) trigger.classList.add('disabled');

        const matchedOption = Array.from(select.options).find(opt => String(opt.value) === String(select.value)) || select.options[select.selectedIndex];
        const triggerText = document.createElement('span');
        triggerText.className = 'trigger-text';
        triggerText.innerHTML = matchedOption ? matchedOption.innerHTML.replace(/ ↳ /g, ' › ') : 'اختر...';
        if (matchedOption) trigger.title = matchedOption.textContent.replace(/ ↳ /g, ' › ');

        const arrow = document.createElement('i');
        arrow.className = 'fas fa-chevron-down arrow';

        trigger.appendChild(triggerText);
        trigger.appendChild(arrow);
        wrapper.appendChild(trigger);

        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'custom-options';

        Array.from(select.options).forEach(option => {
            const customOp = document.createElement('div');
            customOp.className = 'custom-option';
            if (String(option.value) === String(select.value)) customOp.classList.add('selected');
            if (option.value === 'new') customOp.classList.add('special-add');

            customOp.innerHTML = isCategorySelect ? window.formatCategoryOptionLabel(option.innerHTML) : option.innerHTML;
            customOp.dataset.value = option.value;

            customOp.addEventListener('click', function (e) {
                e.stopPropagation();
                if (select.disabled) return;

                select.value = this.dataset.value;
                triggerText.innerHTML = option.innerHTML.replace(/ ↳ /g, ' › ');
                trigger.title = option.textContent.replace(/ ↳ /g, ' › ');

                optionsContainer.querySelectorAll('.custom-option').forEach(op => op.classList.remove('selected'));
                this.classList.add('selected');

                window.closeAllCustomSelects();
                select.dispatchEvent(new Event('change', { bubbles: true }));
            });
            optionsContainer.appendChild(customOp);
        });

        wrapper.appendChild(optionsContainer);

        trigger.addEventListener('click', function (e) {
            e.stopPropagation();
            if (select.disabled) return;
            const isOpen = wrapper.classList.contains('open');
            window.closeAllCustomSelects();
            if (!isOpen) {
                wrapper.classList.add('open');
                if (window.innerWidth <= 768 && selectOverlay) selectOverlay.classList.add('show');
            }
        });
    };

    window.closeAllCustomSelects = function () {
        document.querySelectorAll('.custom-select-wrapper').forEach(w => w.classList.remove('open'));
        if (selectOverlay) selectOverlay.classList.remove('show');
    };

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.custom-select-wrapper')) {
            window.closeAllCustomSelects();
        }
    });

    if (selectOverlay) {
        selectOverlay.addEventListener('click', window.closeAllCustomSelects);
    }

    // ===== إعداد التنقل والتبويبات =====
    window.setupNav = function () {
        document.querySelectorAll('[data-tab]').forEach(b => {
            b.onclick = e => window.switchT(e.currentTarget.dataset.tab);
        });
    };

    window.switchT = async function (tab) {
        if (tab === 'orders' && typeof window.dismissOrderAlerts === 'function') {
            window.dismissOrderAlerts();
        }
        const formView = document.getElementById('product-form-view');
        if (formView && formView.style.display === 'block' && window.isProductFormDirty) {
            window.pendingTabToSwitch = tab;
            window.openM('unsaved-modal');
            return;
        }

        // فصل مراقبي التمرير للأقسام السابقة لتفريغ المعالج والذاكرة
        if (tab !== 'management' && window.productObserver) {
            try { window.productObserver.disconnect(); } catch (e) { }
        }

        // إغلاق الكاميرا والماسح إن كانت تعمل
        if (typeof window.closeDeliveryModal === 'function') {
            window.closeDeliveryModal();
        }

        // إغلاق وتحديث أزرار القائمة
        document.querySelectorAll('[data-tab]').forEach(x => {
            if (x.dataset.tab === tab) x.classList.add('active');
            else x.classList.remove('active');
        });

        // إغلاق كل الأقسام السابقة تماماً وإظهار القسم المطلوب فقط
        document.querySelectorAll('.section').forEach(s => {
            if (s.id === tab) {
                s.style.display = 'block';
                s.classList.add('active');
            } else {
                s.style.display = 'none';
                s.classList.remove('active');
            }
        });

        const titles = {
            'dashboard': 'الرئيسية',
            'management': 'المنتجات',
            'orders': 'الطلبات',
            'settings': 'الإعدادات'
        };
        const titleEl = document.getElementById('page-title');
        if (titleEl) titleEl.textContent = titles[tab] || 'لوحة التحكم';

        // التعامل مع كل تبويب وتحميل ملفاته عند الطلب من الذاكرة
        if (tab === 'dashboard') {
            await window.ModuleLoader.load('dashboard-tab');
            if (typeof window.ensureDashboardHTML === 'function') window.ensureDashboardHTML();
            if (!window.dashboardSectionsInitialized.dashboard && typeof window.loadLocalDashboardStats === 'function') {
                window.dashboardSectionsInitialized.dashboard = true;
                await window.loadLocalDashboardStats();
            }
        } else if (tab === 'management') {
            // لا نطلب المنتجات من Work قبل التأكد من وصول اللقطة اللحظية.
            const realtimeReady = typeof window.ensureDashboardRealtime === 'function'
                ? await window.ensureDashboardRealtime()
                : false;
            if (!realtimeReady) {
                if (typeof window.showT === 'function') {
                    window.showT('بانتظار الاتصال اللحظي لتحميل المنتجات', 'warning');
                }
                return;
            }
            await Promise.all([
                window.ModuleLoader.load('products'),
                window.ModuleLoader.load('categories'),
                window.ModuleLoader.load('product-form')
            ]);
            if (typeof window.ensureProductsHTML === 'function') window.ensureProductsHTML();
            if (typeof window.showProductList === 'function') window.showProductList();
            const searchInput = document.getElementById('search-p');
            // احتفظ بالبحث وبشبكة المنتجات عند العودة للتبويب حتى لا تعاد
            // عناصر الصور وطلبات الشبكة من الصفر.
            if (searchInput && typeof window.currentSearchTerm === 'string') {
                searchInput.value = window.currentSearchTerm;
            }

            const allProducts = window.AppStore.getProducts();
            if (allProducts && allProducts.length > 0) {
                const grid = document.getElementById('p-grid');
                const hasRenderedProducts = Boolean(grid && grid.querySelector('.product-card'));
                // أعد الرسم فقط عند أول دخول أو بعد إزالة الشبكة فعلياً.
                if (!hasRenderedProducts && typeof window.renderProductsInitial === 'function') {
                    window.renderProductsInitial();
                } else if (!hasRenderedProducts && typeof window.renderProductsGrid === 'function') {
                    window.renderProductsGrid(allProducts.slice(0, 12), false);
                } else if (window.hasMoreProducts && typeof window.setupProductObserver === 'function') {
                    window.setupProductObserver();
                }
            } else {
                // لا يوجد كاش — أظهر مؤشر تحميل وجلب من الخادم
                const grid = document.getElementById('p-grid');
                if (grid) {
                    grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:45px 20px;"><i class="fas fa-circle-notch fa-spin text-primary" style="font-size:2.2rem;"></i><div style="margin-top:12px; color:var(--text-muted); font-size:0.9rem; font-weight:700;">جاري تحميل المنتجات...</div></div>';
                }
                if (!window.dashboardSectionsInitialized.management && typeof window.loadAllFromJson === 'function') {
                    window.dashboardSectionsInitialized.management = true;
                    window.loadAllFromJson(1, '', false, false);
                }
            }
            if (typeof window.fetchCategoryTree === 'function' && (!window.flatCategoriesList || window.flatCategoriesList.length === 0)) {
                window.fetchCategoryTree();
            }
        } else if (tab === 'orders') {
            await Promise.all([
                window.ModuleLoader.load('orders'),
                window.ModuleLoader.load('orders-actions')
            ]);
            if (typeof window.ensureOrdersHTML === 'function') window.ensureOrdersHTML();

            const newOrdersBadge = document.getElementById('new-orders-badge');
            const navBadgeMobile = document.getElementById('nav-badge-mobile');
            if (newOrdersBadge) newOrdersBadge.style.display = 'none';
            if (navBadgeMobile) navBadgeMobile.style.display = 'none';

            const activeTabBtn = document.querySelector('#orders .segment-btn.active') || document.querySelector('#orders .segment-btn');
            const currentFilter = (activeTabBtn && activeTabBtn.innerText.includes('النشطة')) ? 'active' : 'archived';

            const cachedOrders = window.AppStore.getOrders(currentFilter);
            if (cachedOrders && cachedOrders.length > 0 && typeof window.renderOrdersUI === 'function') {
                window.renderOrdersUI(cachedOrders, currentFilter);
            }

            if (!window.dashboardSectionsInitialized.orders && typeof window.loadOrders === 'function') {
                window.dashboardSectionsInitialized.orders = true;
                window.loadOrders(currentFilter, activeTabBtn, true);
            }
        } else if (tab === 'settings') {
            await window.ModuleLoader.load('settings');
            if (typeof window.ensureSettingsHTML === 'function') window.ensureSettingsHTML();
            if (typeof window.updateSettingsUI === 'function') {
                window.updateSettingsUI(window.currentMerchantData);
            }
        }

        window.scrollTo({
            top: 0,
            behavior: window.dashboardPerformanceMode === 'light' ? 'auto' : 'smooth'
        });
    };

    window.ModuleLoader.loaded.add('ui');

})();
