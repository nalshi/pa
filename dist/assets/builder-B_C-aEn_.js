import"./modulepreload-polyfill-B5Qt9EMX.js";var x=[{id:"home",label:"الرئيسية",icon:"fa-home",visible:!0,order:1},{id:"search",label:"بحث",icon:"fa-search",visible:!0,order:2},{id:"orders",label:"طلباتي",icon:"fa-box-open",visible:!0,order:3},{id:"favorites",label:"المفضلة",icon:"fa-heart",visible:!0,order:4},{id:"cart",label:"السلة",icon:"fa-shopping-cart",visible:!0,order:5}],M={show_logo_icon:!0,logo_icon:"fa-store",show_dark_mode_btn:!0,show_profile_btn:!0,show_search_btn:!0},q={default:x.map(r=>({...r})),minimal:[{id:"home",label:"الرئيسية",icon:"fa-home",visible:!0},{id:"search",label:"بحث",icon:"fa-search",visible:!1},{id:"orders",label:"طلباتي",icon:"fa-box-open",visible:!0},{id:"favorites",label:"المفضلة",icon:"fa-heart",visible:!1},{id:"cart",label:"السلة",icon:"fa-shopping-cart",visible:!0}],market:[{id:"home",label:"الرئيسية",icon:"fa-house",visible:!0},{id:"search",label:"بحث",icon:"fa-magnifying-glass",visible:!0},{id:"orders",label:"طلباتي",icon:"fa-bag-shopping",visible:!0},{id:"favorites",label:"المفضلة",icon:"fa-heart",visible:!0},{id:"cart",label:"السلة",icon:"fa-cart-shopping",visible:!0}],luxury:[{id:"home",label:"الرئيسية",icon:"fa-store",visible:!0},{id:"search",label:"استعراض",icon:"fa-magnifying-glass",visible:!0},{id:"orders",label:"طلباتي",icon:"fa-box",visible:!0},{id:"favorites",label:"المفضلة",icon:"fa-star",visible:!1},{id:"cart",label:"السلة",icon:"fa-shopping-bag",visible:!0}],premium:[{id:"home",label:"الرئيسية",icon:"fa-house-chimney",visible:!0},{id:"search",label:"استكشف",icon:"fa-compass",visible:!0},{id:"orders",label:"طلباتي",icon:"fa-bag-shopping",visible:!0},{id:"favorites",label:"المفضلة",icon:"fa-heart",visible:!0},{id:"cart",label:"السلة",icon:"fa-cart-arrow-down",visible:!0}],wellness:[{id:"home",label:"الرئيسية",icon:"fa-seedling",visible:!0},{id:"search",label:"تصفح",icon:"fa-magnifying-glass",visible:!0},{id:"orders",label:"طلبات",icon:"fa-truck-fast",visible:!0},{id:"favorites",label:"مفضلة",icon:"fa-sparkles",visible:!1},{id:"cart",label:"السلة",icon:"fa-basket-shopping",visible:!0}]},K={default:"افتراضي",minimal:"مبسط",market:"تجاري",luxury:"فاخر",premium:"مميز",wellness:"صحي"};function uu(r){return K[r]||"مخصص"}function D(r){const t=(Array.isArray(r)&&r.length>0?r:x).map((a,s)=>({id:String(a?.id||x[s]?.id||`nav_${s+1}`),label:String(a?.label||x[s]?.label||"عنصر"),icon:String(a?.icon||x[s]?.icon||"fa-circle"),visible:a?.visible!==!1,order:Number.isFinite(a?.order)?Number(a.order):s+1}));return t.filter(a=>a.visible).sort((a,s)=>(a.order||0)-(s.order||0)).length>=2?t.sort((a,s)=>(a.order||0)-(s.order||0)):x.map((a,s)=>({...a,visible:s<2,order:s+1}))}function P(r){return{...M,...r||{}}}var tu=["Tajawal","Cairo","Almarai","Readex Pro","Alexandria","IBM Plex Sans Arabic","Noto Kufi Arabic","Changa","El Messiri"],m={version:"4.0",theme_name:"nalsh_indigo",default_theme_mode:"light",store_identity:{store_name:"متجري الإلكتروني",slogan:"وجهتك الأولى لأرقى المنتجات والخدمات",welcome_message:"أهلاً بكم في متجرنا! نتمنى لكم تجربة تسوق ممتعة.",currency_symbol:"YER",announcement_bar:{enabled:!0,text:"🎉 عروض حصرية وتوصيل سريع لكافة المناطق!",bg_color:"#4F46E5",text_color:"#FFFFFF"}},products_settings:{display_mode:"by_categories_sections",sort_by:"latest",out_of_stock_display:"badge_at_end",show_quick_add:!0,show_stock_badge:!0,show_discount_badge:!0,show_category_tag:!0,show_old_price:!0,show_currency:!0,show_actions:!0,add_to_cart_btn:{style:"circle_icon",text:"أضف للسلة",show_text:!1,icon:"fa-plus",action_animation:"scale"},portrait:{scroll_direction:"horizontal",grid_columns:2,grid_rows:0,slider_rows:1,card_orientation:"portrait",card_style:"classic",card_custom_width:0,card_custom_height:0,img_custom_height:0,card_density:"standard",show_badges:!0,show_quick_add:!0,show_rating:!0,show_old_price:!0,show_currency:!0},landscape:{scroll_direction:"horizontal",grid_columns:4,grid_rows:0,slider_rows:1,card_orientation:"portrait",card_style:"classic",card_custom_width:0,card_custom_height:0,img_custom_height:0,card_density:"standard",show_badges:!0,show_quick_add:!0,show_rating:!0,show_old_price:!0,show_currency:!0},category_overrides:{}},messages:{search_placeholder:"ابحث عن المنتجات أو الماركات...",empty_cart_title:"سلة المشتريات فارغة 🛒",empty_cart_desc:"لم تقم بإضافة أي منتجات للسلة بعد، تصفح المتجر الآن!",order_success_title:"تم استلام طلبك بنجاح! 🎉",order_success_msg:"شكراً لثقتك بنا. سيتم تجهيز وتوصيل طلبك في أقرب وقت.",order_track_whatsapp:"متابعة وتأكيد الطلب عبر واتساب 💬",chatbot_greeting:"أهلاً بك! كيف يمكنني مساعدتك في التسوق اليوم؟ 🤖",ai_assistant:{enabled:!0,name:"مساعد نالش",persona:"classic",avatar_icon:"fa-robot",avatar_emoji:"🤖",button_style:"pill",avatar_style:"pulse",position:"bottom-right",enable_quick_actions:!0,smart_contextual_actions:!0,smart_contextual_replies:!0,behavior_mode:"support",conversation_style:"balanced",response_style:"friendly",accent_color:"#4F46E5",status_text:"متصل للرد الفوري",quick_actions:["أريد أفضل العروض المتاحة","كيف أقوم بالطلب والتوصيل؟","تتبع طلبي"]},copied_link_msg:"تم نسخ الرابط بنجاح! 📋"},layout_blocks:[{id:"block_hero_1",type:"hero",title:"أهلاً بكم في متجرنا",subtitle:"تسوق أحدث المنتجات بأفضل الأسعار وأعلى جودة مضمونة",style:"classic",visible:!0,order:1,settings:{cta_text:"تصفح المنتجات",cta_link:"#products",alignment:"center"}},{id:"block_cat_1",type:"categories",title:"التصنيفات المميزة",style:"bubbles",visible:!0,order:2,settings:{layout:"horizontal"}},{id:"block_prod_1",type:"products",title:"أحدث المنتجات والعروض",style:"classic_grid",visible:!0,order:3,settings:{limit:12}}],modals_customization:{product_details:{cta_button_text:"إضافة إلى السلة 🛍️",border_radius:"24px"},cart_drawer:{header_title:"سلة مشترياتي 🛒",checkout_btn_text:"متابعة الطلب والدفع 🚀",empty_message:"سلتك فارغة حالياً"},store_info:{title:"عن المتجر وسياسات الخدمة",about_text:"متجر رائد يقدم أفضل المنتجات والخدمات المميزة.",delivery_policy:"نوفر التوصيل السريع والدفع عند الاستلام مع ضمان الاسترجاع خلال 3 أيام."},order_success:{title:"تم استلام طلبك بنجاح! 🎉",whatsapp_btn_text:"تأكيد ومتابعة الطلب بالواتساب 💬"}},light_theme:{colors:{primary:"#4F46E5",primary_hover:"#4338CA",primary_gradient_start:"#4F46E5",primary_gradient_end:"#06B6D4",accent:"#14B8A6",bg_body:"#F8FAFC",bg_card:"#FFFFFF",bg_surface:"#F1F5F9",text_main:"#0F172A",text_muted:"#64748B",border:"#E2E8F0",navbar_bg:"#FFFFFF",navbar_text:"#0F172A",bottom_bar_bg:"#FFFFFF",bottom_bar_active:"#4F46E5",bottom_bar_inactive:"#94A3B8",card_bg:"#FFFFFF",card_border:"#E2E8F0",card_title:"#0F172A",price_color:"#4F46E5",old_price_color:"#94A3B8",badge_bg:"#EF4444",badge_text:"#FFFFFF",section_title:"#0F172A",category_chip_bg:"#F1F5F9",category_chip_active:"#4F46E5",category_chip_text:"#0F172A",modal_bg:"#FFFFFF",modal_overlay:"rgba(15, 23, 42, 0.6)",modal_handle:"#CBD5E1",btn_primary_bg:"#4F46E5",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#4F46E5",toast_bg:"#0F172A",toast_text:"#FFFFFF"}},dark_theme:{colors:{primary:"#6366F1",primary_hover:"#818CF8",primary_gradient_start:"#6366F1",primary_gradient_end:"#2DD4BF",accent:"#2DD4BF",bg_body:"#0B1120",bg_card:"#151E2E",bg_surface:"#1E293B",text_main:"#F8FAFC",text_muted:"#94A3B8",border:"rgba(255, 255, 255, 0.08)",navbar_bg:"#151E2E",navbar_text:"#F8FAFC",bottom_bar_bg:"#151E2E",bottom_bar_active:"#6366F1",bottom_bar_inactive:"#64748B",card_bg:"#151E2E",card_border:"rgba(255, 255, 255, 0.08)",card_title:"#F8FAFC",price_color:"#818CF8",old_price_color:"#64748B",badge_bg:"#EF4444",badge_text:"#FFFFFF",section_title:"#F8FAFC",category_chip_bg:"#1E293B",category_chip_active:"#6366F1",category_chip_text:"#F8FAFC",modal_bg:"#151E2E",modal_overlay:"rgba(0, 0, 0, 0.85)",modal_handle:"#475569",btn_primary_bg:"#6366F1",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#6366F1",toast_bg:"#1E293B",toast_text:"#F8FAFC"}},typography:{font_family:"Tajawal",base_size:"16px",base_size_mobile:"15px",base_size_desktop:"17px",heading_weight:"700",heading_size_mobile:"1.15rem",heading_size_desktop:"1.45rem",price_size_mobile:"1.1rem",price_size_desktop:"1.25rem",headings:{price_size:"1.15rem"}},shapes:{card_radius:"20px",button_radius:"14px",button_style:"rounded",card_style:"elevated",navbar_style:"solid",section_spacing:"normal"},navigation_settings:{bottom_bar:{items:D(x)},top_bar:P(M)},animations:{card_hover:"lift"},marketing:{free_shipping_bar:{enabled:!1,message:"🚚 شحن مجاني للطلبات فوق 10,000 ريال!"},whatsapp_floating:{enabled:!0,phone:"",position:"left"}}},N=[{id:"nalsh_indigo",name:"بنفسجي نالش العصري 💎",category:"تقنية وحديث",description:"الهوية الرسمية لمنصة نالش بتدرجات إنديغو وتركوازية حيوية وعصرية",light_theme:{colors:{primary:"#4F46E5",primary_hover:"#4338CA",primary_gradient_start:"#4F46E5",primary_gradient_end:"#06B6D4",accent:"#14B8A6",bg_body:"#F8FAFC",bg_card:"#FFFFFF",bg_surface:"#F1F5F9",text_main:"#0F172A",text_muted:"#64748B",border:"#E2E8F0",navbar_bg:"#FFFFFF",navbar_text:"#0F172A",bottom_bar_bg:"#FFFFFF",bottom_bar_active:"#4F46E5",bottom_bar_inactive:"#94A3B8",card_bg:"#FFFFFF",card_border:"#E2E8F0",card_title:"#0F172A",price_color:"#4F46E5",old_price_color:"#94A3B8",badge_bg:"#EF4444",badge_text:"#FFFFFF",section_title:"#0F172A",category_chip_bg:"#F1F5F9",category_chip_active:"#4F46E5",category_chip_text:"#0F172A",modal_bg:"#FFFFFF",modal_overlay:"rgba(15, 23, 42, 0.6)",modal_handle:"#CBD5E1",btn_primary_bg:"#4F46E5",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#4F46E5"}},dark_theme:{colors:{primary:"#6366F1",primary_hover:"#818CF8",primary_gradient_start:"#6366F1",primary_gradient_end:"#2DD4BF",accent:"#2DD4BF",bg_body:"#0B1120",bg_card:"#151E2E",bg_surface:"#1E293B",text_main:"#F8FAFC",text_muted:"#94A3B8",border:"#2D3B55",navbar_bg:"#151E2E",navbar_text:"#F8FAFC",bottom_bar_bg:"#151E2E",bottom_bar_active:"#6366F1",bottom_bar_inactive:"#64748B",card_bg:"#151E2E",card_border:"#2D3B55",card_title:"#F8FAFC",price_color:"#818CF8",old_price_color:"#64748B",badge_bg:"#EF4444",badge_text:"#FFFFFF",section_title:"#F8FAFC",category_chip_bg:"#1E293B",category_chip_active:"#6366F1",category_chip_text:"#F8FAFC",modal_bg:"#151E2E",modal_overlay:"rgba(0, 0, 0, 0.85)",modal_handle:"#475569",btn_primary_bg:"#6366F1",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#6366F1"}},typography:{font_family:"Tajawal",base_size:"16px",heading_weight:"700"},shapes:{card_radius:"20px",button_radius:"14px",button_style:"rounded",card_style:"elevated"}},{id:"emerald_royal",name:"زمردي ملكي فاخر 👑",category:"فخامة وعطور",description:"درجات الزمرد الأخضر الفاخر للأناقة والمتاجر المميزة والعطور",light_theme:{colors:{primary:"#059669",primary_hover:"#047857",primary_gradient_start:"#059669",primary_gradient_end:"#34D399",accent:"#10B981",bg_body:"#F0FDF4",bg_card:"#FFFFFF",bg_surface:"#DCFCE7",text_main:"#064E3B",text_muted:"#047857",border:"#BBF7D0",navbar_bg:"#FFFFFF",navbar_text:"#064E3B",bottom_bar_bg:"#FFFFFF",bottom_bar_active:"#059669",bottom_bar_inactive:"#047857",card_bg:"#FFFFFF",card_border:"#BBF7D0",card_title:"#064E3B",price_color:"#059669",old_price_color:"#047857",badge_bg:"#E11D48",badge_text:"#FFFFFF",section_title:"#064E3B",category_chip_bg:"#DCFCE7",category_chip_active:"#059669",category_chip_text:"#064E3B",modal_bg:"#FFFFFF",modal_overlay:"rgba(6, 78, 59, 0.6)",modal_handle:"#BBF7D0",btn_primary_bg:"#059669",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#059669"}},dark_theme:{colors:{primary:"#10B981",primary_hover:"#34D399",primary_gradient_start:"#10B981",primary_gradient_end:"#6EE7B7",accent:"#34D399",bg_body:"#022C22",bg_card:"#064E3B",bg_surface:"#065F46",text_main:"#ECFDF5",text_muted:"#A7F3D0",border:"#0F766E",navbar_bg:"#064E3B",navbar_text:"#ECFDF5",bottom_bar_bg:"#064E3B",bottom_bar_active:"#10B981",bottom_bar_inactive:"#A7F3D0",card_bg:"#064E3B",card_border:"#0F766E",card_title:"#ECFDF5",price_color:"#34D399",old_price_color:"#A7F3D0",badge_bg:"#F43F5E",badge_text:"#FFFFFF",section_title:"#ECFDF5",category_chip_bg:"#065F46",category_chip_active:"#10B981",category_chip_text:"#ECFDF5",modal_bg:"#064E3B",modal_overlay:"rgba(0, 0, 0, 0.85)",modal_handle:"#0F766E",btn_primary_bg:"#10B981",btn_primary_text:"#022C22",chatbot_btn_bg:"#10B981"}},typography:{font_family:"Cairo",base_size:"16px",heading_weight:"800"},shapes:{card_radius:"16px",button_radius:"12px",button_style:"rounded",card_style:"elevated"}},{id:"ruby_red",name:"ياقوتي أحمر وجريء 🌹",category:"أزياء ومكياج",description:"تصميم دافئ وجريء بألوان الياقوت الأحمر للأزياء والموضة والمستحضرات",light_theme:{colors:{primary:"#E11D48",primary_hover:"#BE123C",primary_gradient_start:"#E11D48",primary_gradient_end:"#FB7185",accent:"#FB7185",bg_body:"#FFF1F2",bg_card:"#FFFFFF",bg_surface:"#FFE4E6",text_main:"#1C1917",text_muted:"#78716C",border:"#FECDD3",navbar_bg:"#FFFFFF",navbar_text:"#1C1917",bottom_bar_bg:"#FFFFFF",bottom_bar_active:"#E11D48",bottom_bar_inactive:"#78716C",card_bg:"#FFFFFF",card_border:"#FECDD3",card_title:"#1C1917",price_color:"#E11D48",old_price_color:"#78716C",badge_bg:"#BE123C",badge_text:"#FFFFFF",section_title:"#1C1917",category_chip_bg:"#FFE4E6",category_chip_active:"#E11D48",category_chip_text:"#1C1917",modal_bg:"#FFFFFF",modal_overlay:"rgba(28, 25, 23, 0.6)",modal_handle:"#FECDD3",btn_primary_bg:"#E11D48",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#E11D48"}},dark_theme:{colors:{primary:"#FB7185",primary_hover:"#FDA4AF",primary_gradient_start:"#FB7185",primary_gradient_end:"#E11D48",accent:"#F43F5E",bg_body:"#18181B",bg_card:"#27272A",bg_surface:"#3F3F46",text_main:"#FAFAFA",text_muted:"#A1A1AA",border:"#3F3F46",navbar_bg:"#27272A",navbar_text:"#FAFAFA",bottom_bar_bg:"#27272A",bottom_bar_active:"#FB7185",bottom_bar_inactive:"#A1A1AA",card_bg:"#27272A",card_border:"#3F3F46",card_title:"#FAFAFA",price_color:"#FB7185",old_price_color:"#A1A1AA",badge_bg:"#E11D48",badge_text:"#FFFFFF",section_title:"#FAFAFA",category_chip_bg:"#3F3F46",category_chip_active:"#FB7185",category_chip_text:"#FAFAFA",modal_bg:"#27272A",modal_overlay:"rgba(0, 0, 0, 0.85)",modal_handle:"#52525B",btn_primary_bg:"#FB7185",btn_primary_text:"#18181B",chatbot_btn_bg:"#FB7185"}},typography:{font_family:"Readex Pro",base_size:"16px",heading_weight:"700"},shapes:{card_radius:"24px",button_radius:"9999px",button_style:"pill",card_style:"elevated"}},{id:"amber_gold",name:"ذهبي عنبري كلاسيكي 🏆",category:"مجوهرات وساعات",description:"فخامة ملكية مع حدود واضحة وألوان العنبر والذهب للمجوهرات والساعات الفاخرة",light_theme:{colors:{primary:"#D97706",primary_hover:"#B45309",primary_gradient_start:"#D97706",primary_gradient_end:"#FBBF24",accent:"#F59E0B",bg_body:"#FFFBEB",bg_card:"#FFFFFF",bg_surface:"#FEF3C7",text_main:"#1E293B",text_muted:"#64748B",border:"#FDE68A",navbar_bg:"#FFFFFF",navbar_text:"#1E293B",bottom_bar_bg:"#FFFFFF",bottom_bar_active:"#D97706",bottom_bar_inactive:"#64748B",card_bg:"#FFFFFF",card_border:"#FDE68A",card_title:"#1E293B",price_color:"#D97706",old_price_color:"#64748B",badge_bg:"#DC2626",badge_text:"#FFFFFF",section_title:"#1E293B",category_chip_bg:"#FEF3C7",category_chip_active:"#D97706",category_chip_text:"#1E293B",modal_bg:"#FFFFFF",modal_overlay:"rgba(30, 41, 59, 0.6)",modal_handle:"#FDE68A",btn_primary_bg:"#D97706",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#D97706"}},dark_theme:{colors:{primary:"#F59E0B",primary_hover:"#FBBF24",primary_gradient_start:"#F59E0B",primary_gradient_end:"#D97706",accent:"#FBBF24",bg_body:"#0F172A",bg_card:"#1E293B",bg_surface:"#334155",text_main:"#F8FAFC",text_muted:"#94A3B8",border:"#334155",navbar_bg:"#1E293B",navbar_text:"#F8FAFC",bottom_bar_bg:"#1E293B",bottom_bar_active:"#F59E0B",bottom_bar_inactive:"#94A3B8",card_bg:"#1E293B",card_border:"#334155",card_title:"#F8FAFC",price_color:"#FBBF24",old_price_color:"#94A3B8",badge_bg:"#DC2626",badge_text:"#FFFFFF",section_title:"#F8FAFC",category_chip_bg:"#334155",category_chip_active:"#F59E0B",category_chip_text:"#F8FAFC",modal_bg:"#1E293B",modal_overlay:"rgba(0, 0, 0, 0.85)",modal_handle:"#475569",btn_primary_bg:"#F59E0B",btn_primary_text:"#0F172A",chatbot_btn_bg:"#F59E0B"}},typography:{font_family:"Almarai",base_size:"16px",heading_weight:"800"},shapes:{card_radius:"14px",button_radius:"8px",button_style:"rounded",card_style:"bordered"}},{id:"deep_ocean",name:"أزرق المحيط الصافي 🌊",category:"إلكترونيات وخدمات",description:"درجات الأزرق البحري الصافي والعميق للإلكترونيات والأجهزة والخدمات الحديثة",light_theme:{colors:{primary:"#0284C7",primary_hover:"#0369A1",primary_gradient_start:"#0284C7",primary_gradient_end:"#38BDF8",accent:"#0EA5E9",bg_body:"#F0F9FF",bg_card:"#FFFFFF",bg_surface:"#E0F2FE",text_main:"#0C4A6E",text_muted:"#0369A1",border:"#BAE6FD",navbar_bg:"#FFFFFF",navbar_text:"#0C4A6E",bottom_bar_bg:"#FFFFFF",bottom_bar_active:"#0284C7",bottom_bar_inactive:"#0369A1",card_bg:"#FFFFFF",card_border:"#BAE6FD",card_title:"#0C4A6E",price_color:"#0284C7",old_price_color:"#0369A1",badge_bg:"#EF4444",badge_text:"#FFFFFF",section_title:"#0C4A6E",category_chip_bg:"#E0F2FE",category_chip_active:"#0284C7",category_chip_text:"#0C4A6E",modal_bg:"#FFFFFF",modal_overlay:"rgba(12, 74, 110, 0.6)",modal_handle:"#BAE6FD",btn_primary_bg:"#0284C7",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#0284C7"}},dark_theme:{colors:{primary:"#38BDF8",primary_hover:"#7DD3FC",primary_gradient_start:"#38BDF8",primary_gradient_end:"#0284C7",accent:"#0EA5E9",bg_body:"#082F49",card_bg:"#0C4A6E",bg_card:"#0C4A6E",bg_surface:"#075985",text_main:"#F0F9FF",text_muted:"#BAE6FD",border:"#0369A1",navbar_bg:"#0C4A6E",navbar_text:"#F0F9FF",bottom_bar_bg:"#0C4A6E",bottom_bar_active:"#38BDF8",bottom_bar_inactive:"#BAE6FD",card_border:"#0369A1",card_title:"#F0F9FF",price_color:"#38BDF8",old_price_color:"#BAE6FD",badge_bg:"#F43F5E",badge_text:"#FFFFFF",section_title:"#F0F9FF",category_chip_bg:"#075985",category_chip_active:"#38BDF8",category_chip_text:"#F0F9FF",modal_bg:"#0C4A6E",modal_overlay:"rgba(0, 0, 0, 0.85)",modal_handle:"#0369A1",btn_primary_bg:"#38BDF8",btn_primary_text:"#082F49",chatbot_btn_bg:"#38BDF8"}},typography:{font_family:"Alexandria",base_size:"16px",heading_weight:"700"},shapes:{card_radius:"16px",button_radius:"10px",button_style:"rounded",card_style:"elevated"}},{id:"cyber_cyan",name:"سماوي سايبر نيون ⚡",category:"ألعاب وتقنية",description:"ألوان سايبر بانك ونيون مضيء للمتاجر الرقمية، الألعاب، والإلكترونيات السريعة",light_theme:{colors:{primary:"#0891B2",primary_hover:"#0E7490",primary_gradient_start:"#0891B2",primary_gradient_end:"#06B6D4",accent:"#06B6D4",bg_body:"#ECFEFF",bg_card:"#FFFFFF",bg_surface:"#CFFAFE",text_main:"#164E63",text_muted:"#0891B2",border:"#A5F3FC",navbar_bg:"#FFFFFF",navbar_text:"#164E63",bottom_bar_bg:"#FFFFFF",bottom_bar_active:"#0891B2",bottom_bar_inactive:"#0891B2",card_bg:"#FFFFFF",card_border:"#A5F3FC",card_title:"#164E63",price_color:"#0891B2",old_price_color:"#0891B2",badge_bg:"#F43F5E",badge_text:"#FFFFFF",section_title:"#164E63",category_chip_bg:"#CFFAFE",category_chip_active:"#0891B2",category_chip_text:"#164E63",modal_bg:"#FFFFFF",modal_overlay:"rgba(22, 78, 99, 0.6)",modal_handle:"#A5F3FC",btn_primary_bg:"#0891B2",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#0891B2"}},dark_theme:{colors:{primary:"#22D3EE",primary_hover:"#67E8F9",primary_gradient_start:"#22D3EE",primary_gradient_end:"#A855F7",accent:"#A855F7",bg_body:"#08131F",card_bg:"#0E2338",bg_card:"#0E2338",bg_surface:"#153350",text_main:"#ECFEFF",text_muted:"#A5F3FC",border:"#155E75",navbar_bg:"#0E2338",navbar_text:"#ECFEFF",bottom_bar_bg:"#0E2338",bottom_bar_active:"#22D3EE",bottom_bar_inactive:"#A5F3FC",card_border:"#155E75",card_title:"#ECFEFF",price_color:"#22D3EE",old_price_color:"#A5F3FC",badge_bg:"#F43F5E",badge_text:"#FFFFFF",section_title:"#ECFEFF",category_chip_bg:"#153350",category_chip_active:"#22D3EE",category_chip_text:"#ECFEFF",modal_bg:"#0E2338",modal_overlay:"rgba(0, 0, 0, 0.9)",modal_handle:"#155E75",btn_primary_bg:"#22D3EE",btn_primary_text:"#08131F",chatbot_btn_bg:"#22D3EE"}},typography:{font_family:"Cairo",base_size:"16px",heading_weight:"900"},shapes:{card_radius:"12px",button_radius:"6px",button_style:"square",card_style:"bordered"}},{id:"fashion_rose",name:"وردي أنيق وفاشن 🌸",category:"أزياء وجمال",description:"درجات الوردي والروز الناعمة والأنيقة للأزياء النسائية، العطور، ومستحضرات التجميل",light_theme:{colors:{primary:"#DB2777",primary_hover:"#BE185D",primary_gradient_start:"#DB2777",primary_gradient_end:"#F472B6",accent:"#F472B6",bg_body:"#FDF2F8",bg_card:"#FFFFFF",bg_surface:"#FCE7F3",text_main:"#831843",text_muted:"#9D174D",border:"#FBCFE8",navbar_bg:"#FFFFFF",navbar_text:"#831843",bottom_bar_bg:"#FFFFFF",bottom_bar_active:"#DB2777",bottom_bar_inactive:"#9D174D",card_bg:"#FFFFFF",card_border:"#FBCFE8",card_title:"#831843",price_color:"#DB2777",old_price_color:"#9D174D",badge_bg:"#9D174D",badge_text:"#FFFFFF",section_title:"#831843",category_chip_bg:"#FCE7F3",category_chip_active:"#DB2777",category_chip_text:"#831843",modal_bg:"#FFFFFF",modal_overlay:"rgba(131, 24, 67, 0.6)",modal_handle:"#FBCFE8",btn_primary_bg:"#DB2777",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#DB2777"}},dark_theme:{colors:{primary:"#F472B6",primary_hover:"#FBCFE8",primary_gradient_start:"#F472B6",primary_gradient_end:"#DB2777",accent:"#FB7185",bg_body:"#1F0A16",card_bg:"#371228",bg_card:"#371228",bg_surface:"#4C1D3A",text_main:"#FDF2F8",text_muted:"#FBCFE8",border:"#831843",navbar_bg:"#371228",navbar_text:"#FDF2F8",bottom_bar_bg:"#371228",bottom_bar_active:"#F472B6",bottom_bar_inactive:"#FBCFE8",card_border:"#831843",card_title:"#FDF2F8",price_color:"#F472B6",old_price_color:"#FBCFE8",badge_bg:"#DB2777",badge_text:"#FFFFFF",section_title:"#FDF2F8",category_chip_bg:"#4C1D3A",category_chip_active:"#F472B6",category_chip_text:"#FDF2F8",modal_bg:"#371228",modal_overlay:"rgba(0, 0, 0, 0.85)",modal_handle:"#831843",btn_primary_bg:"#F472B6",btn_primary_text:"#1F0A16",chatbot_btn_bg:"#F472B6"}},typography:{font_family:"Readex Pro",base_size:"16px",heading_weight:"700"},shapes:{card_radius:"24px",button_radius:"9999px",button_style:"pill",card_style:"elevated"}},{id:"imperial_purple",name:"أرجواني ملكي فاخر 🔮",category:"فخامة وهدايا",description:"أرجواني عميق وساحر يعكس التميز والفخامة للمتاجر الراقية والهدايا الفاخرة",light_theme:{colors:{primary:"#7C3AED",primary_hover:"#6D28D9",primary_gradient_start:"#7C3AED",primary_gradient_end:"#A78BFA",accent:"#A78BFA",bg_body:"#FAF5FF",bg_card:"#FFFFFF",bg_surface:"#F3E8FF",text_main:"#3B0764",text_muted:"#581C87",border:"#E9D5FF",navbar_bg:"#FFFFFF",navbar_text:"#3B0764",bottom_bar_bg:"#FFFFFF",bottom_bar_active:"#7C3AED",bottom_bar_inactive:"#581C87",card_bg:"#FFFFFF",card_border:"#E9D5FF",card_title:"#3B0764",price_color:"#7C3AED",old_price_color:"#581C87",badge_bg:"#EC4899",badge_text:"#FFFFFF",section_title:"#3B0764",category_chip_bg:"#F3E8FF",category_chip_active:"#7C3AED",category_chip_text:"#3B0764",modal_bg:"#FFFFFF",modal_overlay:"rgba(59, 7, 100, 0.6)",modal_handle:"#E9D5FF",btn_primary_bg:"#7C3AED",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#7C3AED"}},dark_theme:{colors:{primary:"#A78BFA",primary_hover:"#C4B5FD",primary_gradient_start:"#A78BFA",primary_gradient_end:"#7C3AED",accent:"#C084FC",bg_body:"#160826",card_bg:"#291045",bg_card:"#291045",bg_surface:"#3B1A60",text_main:"#FAF5FF",text_muted:"#DDD6FE",border:"#581C87",navbar_bg:"#291045",navbar_text:"#FAF5FF",bottom_bar_bg:"#291045",bottom_bar_active:"#A78BFA",bottom_bar_inactive:"#DDD6FE",card_border:"#581C87",card_title:"#FAF5FF",price_color:"#A78BFA",old_price_color:"#DDD6FE",badge_bg:"#F43F5E",badge_text:"#FFFFFF",section_title:"#FAF5FF",category_chip_bg:"#3B1A60",category_chip_active:"#A78BFA",category_chip_text:"#FAF5FF",modal_bg:"#291045",modal_overlay:"rgba(0, 0, 0, 0.85)",modal_handle:"#581C87",btn_primary_bg:"#A78BFA",btn_primary_text:"#160826",chatbot_btn_bg:"#A78BFA"}},typography:{font_family:"Tajawal",base_size:"16px",heading_weight:"800"},shapes:{card_radius:"18px",button_radius:"12px",button_style:"rounded",card_style:"elevated"}},{id:"fresh_mint",name:"أخضر نعناعي منعش 🍃",category:"صحة وطبيعة",description:"درجات النعناع والتركواز الهادئة والمريحة للمنتجات الصحية، الطبيعية، والأغذية الصحية",light_theme:{colors:{primary:"#0D9488",primary_hover:"#0F766E",primary_gradient_start:"#0D9488",primary_gradient_end:"#2DD4BF",accent:"#2DD4BF",bg_body:"#F0FDFA",bg_card:"#FFFFFF",bg_surface:"#CCFBF1",text_main:"#134E4A",text_muted:"#115E59",border:"#99F6E4",navbar_bg:"#FFFFFF",navbar_text:"#134E4A",bottom_bar_bg:"#FFFFFF",bottom_bar_active:"#0D9488",bottom_bar_inactive:"#115E59",card_bg:"#FFFFFF",card_border:"#99F6E4",card_title:"#134E4A",price_color:"#0D9488",old_price_color:"#115E59",badge_bg:"#EF4444",badge_text:"#FFFFFF",section_title:"#134E4A",category_chip_bg:"#CCFBF1",category_chip_active:"#0D9488",category_chip_text:"#134E4A",modal_bg:"#FFFFFF",modal_overlay:"rgba(19, 78, 74, 0.6)",modal_handle:"#99F6E4",btn_primary_bg:"#0D9488",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#0D9488"}},dark_theme:{colors:{primary:"#2DD4BF",primary_hover:"#5EEAD4",primary_gradient_start:"#2DD4BF",primary_gradient_end:"#0D9488",accent:"#14B8A6",bg_body:"#042320",card_bg:"#0B3B36",bg_card:"#0B3B36",bg_surface:"#104F49",text_main:"#F0FDFA",text_muted:"#99F6E4",border:"#134E4A",navbar_bg:"#0B3B36",navbar_text:"#F0FDFA",bottom_bar_bg:"#0B3B36",bottom_bar_active:"#2DD4BF",bottom_bar_inactive:"#99F6E4",card_border:"#134E4A",card_title:"#F0FDFA",price_color:"#2DD4BF",old_price_color:"#99F6E4",badge_bg:"#F43F5E",badge_text:"#FFFFFF",section_title:"#F0FDFA",category_chip_bg:"#104F49",category_chip_active:"#2DD4BF",category_chip_text:"#F0FDFA",modal_bg:"#0B3B36",modal_overlay:"rgba(0, 0, 0, 0.85)",modal_handle:"#134E4A",btn_primary_bg:"#2DD4BF",btn_primary_text:"#042320",chatbot_btn_bg:"#2DD4BF"}},typography:{font_family:"Almarai",base_size:"16px",heading_weight:"700"},shapes:{card_radius:"20px",button_radius:"14px",button_style:"rounded",card_style:"elevated"}},{id:"sunset_coral",name:"برتقالي مرجاني دافئ 🌅",category:"مأكولات ورياضة",description:"دفء ألوان الغروب والمرجان النابض بالحياة، مثالي للمطاعم والمنتجات الرياضية السريعة",light_theme:{colors:{primary:"#EA580C",primary_hover:"#C2410C",primary_gradient_start:"#EA580C",primary_gradient_end:"#FB923C",accent:"#F97316",bg_body:"#FFF7ED",bg_card:"#FFFFFF",bg_surface:"#FFEDD5",text_main:"#431407",text_muted:"#7C2D12",border:"#FED7AA",navbar_bg:"#FFFFFF",navbar_text:"#431407",bottom_bar_bg:"#FFFFFF",bottom_bar_active:"#EA580C",bottom_bar_inactive:"#7C2D12",card_bg:"#FFFFFF",card_border:"#FED7AA",card_title:"#431407",price_color:"#EA580C",old_price_color:"#7C2D12",badge_bg:"#DC2626",badge_text:"#FFFFFF",section_title:"#431407",category_chip_bg:"#FFEDD5",category_chip_active:"#EA580C",category_chip_text:"#431407",modal_bg:"#FFFFFF",modal_overlay:"rgba(67, 20, 7, 0.6)",modal_handle:"#FED7AA",btn_primary_bg:"#EA580C",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#EA580C"}},dark_theme:{colors:{primary:"#FB923C",primary_hover:"#FDBA74",primary_gradient_start:"#FB923C",primary_gradient_end:"#EA580C",accent:"#F97316",bg_body:"#1C0B04",card_bg:"#361608",bg_card:"#361608",bg_surface:"#4D2210",text_main:"#FFF7ED",text_muted:"#FED7AA",border:"#7C2D12",navbar_bg:"#361608",navbar_text:"#FFF7ED",bottom_bar_bg:"#361608",bottom_bar_active:"#FB923C",bottom_bar_inactive:"#FED7AA",card_border:"#7C2D12",card_title:"#FFF7ED",price_color:"#FB923C",old_price_color:"#FED7AA",badge_bg:"#EA580C",badge_text:"#FFFFFF",section_title:"#FFF7ED",category_chip_bg:"#4D2210",category_chip_active:"#FB923C",category_chip_text:"#FFF7ED",modal_bg:"#361608",modal_overlay:"rgba(0, 0, 0, 0.85)",modal_handle:"#7C2D12",btn_primary_bg:"#FB923C",btn_primary_text:"#1C0B04",chatbot_btn_bg:"#FB923C"}},typography:{font_family:"Changa",base_size:"16px",heading_weight:"800"},shapes:{card_radius:"16px",button_radius:"10px",button_style:"rounded",card_style:"elevated"}},{id:"warm_mocha",name:"موكا وبن كافيه ☕",category:"مقاهي وحلويات",description:"درجات البن والكراميل والقهوة الدافئة للمقاهي، المخابز، ومتاجر الحلويات الراقية",light_theme:{colors:{primary:"#92400E",primary_hover:"#78350F",primary_gradient_start:"#92400E",primary_gradient_end:"#D97706",accent:"#B45309",bg_body:"#FFFBEB",bg_card:"#FFFFFF",bg_surface:"#FEF3C7",text_main:"#451A03",text_muted:"#78350F",border:"#FDE68A",navbar_bg:"#FFFFFF",navbar_text:"#451A03",bottom_bar_bg:"#FFFFFF",bottom_bar_active:"#92400E",bottom_bar_inactive:"#78350F",card_bg:"#FFFFFF",card_border:"#FDE68A",card_title:"#451A03",price_color:"#92400E",old_price_color:"#78350F",badge_bg:"#B91C1C",badge_text:"#FFFFFF",section_title:"#451A03",category_chip_bg:"#FEF3C7",category_chip_active:"#92400E",category_chip_text:"#451A03",modal_bg:"#FFFFFF",modal_overlay:"rgba(69, 26, 3, 0.6)",modal_handle:"#FDE68A",btn_primary_bg:"#92400E",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#92400E"}},dark_theme:{colors:{primary:"#FBBF24",primary_hover:"#FCD34D",primary_gradient_start:"#FBBF24",primary_gradient_end:"#B45309",accent:"#D97706",bg_body:"#180D04",card_bg:"#2D1808",bg_card:"#2D1808",bg_surface:"#40240E",text_main:"#FFFBEB",text_muted:"#FDE68A",border:"#78350F",navbar_bg:"#2D1808",navbar_text:"#FFFBEB",bottom_bar_bg:"#2D1808",bottom_bar_active:"#FBBF24",bottom_bar_inactive:"#FDE68A",card_border:"#78350F",card_title:"#FFFBEB",price_color:"#FBBF24",old_price_color:"#FDE68A",badge_bg:"#DC2626",badge_text:"#FFFFFF",section_title:"#FFFBEB",category_chip_bg:"#40240E",category_chip_active:"#FBBF24",category_chip_text:"#FFFBEB",modal_bg:"#2D1808",modal_overlay:"rgba(0, 0, 0, 0.85)",modal_handle:"#78350F",btn_primary_bg:"#FBBF24",btn_primary_text:"#180D04",chatbot_btn_bg:"#FBBF24"}},typography:{font_family:"Amiri",base_size:"16px",heading_weight:"700"},shapes:{card_radius:"14px",button_radius:"8px",button_style:"rounded",card_style:"bordered"}},{id:"midnight_navy",name:"كحلي ليلي فاخر 🌌",category:"شركات وأجهزة",description:"أزرق كحلي رصين ورسمي مع لمسات زرقاء ساطعة يعكس الثقة والمصداقية العالية",light_theme:{colors:{primary:"#1E40AF",primary_hover:"#1E3A8A",primary_gradient_start:"#1E40AF",primary_gradient_end:"#3B82F6",accent:"#60A5FA",bg_body:"#F8FAFC",bg_card:"#FFFFFF",bg_surface:"#EFF6FF",text_main:"#0F172A",text_muted:"#475569",border:"#DBEAFE",navbar_bg:"#FFFFFF",navbar_text:"#0F172A",bottom_bar_bg:"#FFFFFF",bottom_bar_active:"#1E40AF",bottom_bar_inactive:"#475569",card_bg:"#FFFFFF",card_border:"#DBEAFE",card_title:"#0F172A",price_color:"#1E40AF",old_price_color:"#475569",badge_bg:"#EF4444",badge_text:"#FFFFFF",section_title:"#0F172A",category_chip_bg:"#EFF6FF",category_chip_active:"#1E40AF",category_chip_text:"#0F172A",modal_bg:"#FFFFFF",modal_overlay:"rgba(15, 23, 42, 0.6)",modal_handle:"#DBEAFE",btn_primary_bg:"#1E40AF",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#1E40AF"}},dark_theme:{colors:{primary:"#60A5FA",primary_hover:"#93C5FD",primary_gradient_start:"#60A5FA",primary_gradient_end:"#1E40AF",accent:"#38BDF8",bg_body:"#0A1128",card_bg:"#111D44",bg_card:"#111D44",bg_surface:"#1A2C63",text_main:"#F8FAFC",text_muted:"#94A3B8",border:"#1E3A8A",navbar_bg:"#111D44",navbar_text:"#F8FAFC",bottom_bar_bg:"#111D44",bottom_bar_active:"#60A5FA",bottom_bar_inactive:"#94A3B8",card_border:"#1E3A8A",card_title:"#F8FAFC",price_color:"#60A5FA",old_price_color:"#94A3B8",badge_bg:"#F43F5E",badge_text:"#FFFFFF",section_title:"#F8FAFC",category_chip_bg:"#1A2C63",category_chip_active:"#60A5FA",category_chip_text:"#F8FAFC",modal_bg:"#111D44",modal_overlay:"rgba(0, 0, 0, 0.85)",modal_handle:"#1E3A8A",btn_primary_bg:"#60A5FA",btn_primary_text:"#0A1128",chatbot_btn_bg:"#60A5FA"}},typography:{font_family:"Alexandria",base_size:"16px",heading_weight:"700"},shapes:{card_radius:"16px",button_radius:"10px",button_style:"rounded",card_style:"elevated"}},{id:"minimal_charcoal",name:"فحم ومونوكروم عصري 🖤",category:"مينيمال وبسيط",description:"أسلوب مونوكروم مينيمال هادئ ونظيف يركز بالكامل على إبراز صور المنتجات بدقة",light_theme:{colors:{primary:"#18181B",primary_hover:"#27272A",primary_gradient_start:"#18181B",primary_gradient_end:"#3F3F46",accent:"#52525B",bg_body:"#FAFAFA",bg_card:"#FFFFFF",bg_surface:"#F4F4F5",text_main:"#18181B",text_muted:"#71717A",border:"#E4E4E7",navbar_bg:"#FFFFFF",navbar_text:"#18181B",bottom_bar_bg:"#FFFFFF",bottom_bar_active:"#18181B",bottom_bar_inactive:"#71717A",card_bg:"#FFFFFF",card_border:"#E4E4E7",card_title:"#18181B",price_color:"#18181B",old_price_color:"#71717A",badge_bg:"#18181B",badge_text:"#FFFFFF",section_title:"#18181B",category_chip_bg:"#F4F4F5",category_chip_active:"#18181B",category_chip_text:"#FFFFFF",modal_bg:"#FFFFFF",modal_overlay:"rgba(24, 24, 27, 0.6)",modal_handle:"#E4E4E7",btn_primary_bg:"#18181B",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#18181B"}},dark_theme:{colors:{primary:"#FAFAFA",primary_hover:"#FFFFFF",primary_gradient_start:"#FAFAFA",primary_gradient_end:"#E4E4E7",accent:"#A1A1AA",bg_body:"#09090B",card_bg:"#18181B",bg_card:"#18181B",bg_surface:"#27272A",text_main:"#FAFAFA",text_muted:"#A1A1AA",border:"#27272A",navbar_bg:"#18181B",navbar_text:"#FAFAFA",bottom_bar_bg:"#18181B",bottom_bar_active:"#FAFAFA",bottom_bar_inactive:"#A1A1AA",card_border:"#27272A",card_title:"#FAFAFA",price_color:"#FAFAFA",old_price_color:"#71717A",badge_bg:"#FAFAFA",badge_text:"#09090B",section_title:"#FAFAFA",category_chip_bg:"#27272A",category_chip_active:"#FAFAFA",category_chip_text:"#09090B",modal_bg:"#18181B",modal_overlay:"rgba(0, 0, 0, 0.9)",modal_handle:"#3F3F46",btn_primary_bg:"#FAFAFA",btn_primary_text:"#09090B",chatbot_btn_bg:"#FAFAFA"}},typography:{font_family:"Tajawal",base_size:"16px",heading_weight:"700"},shapes:{card_radius:"8px",button_radius:"4px",button_style:"square",card_style:"bordered"}},{id:"velvet_berry",name:"توتي مخملي ملكي 🍇",category:"عطور وشوكولاتة",description:"درجات التوت والبنفسج المخملي الفاخر للشوكولاتة، العطور، والمتاجر الفاخرة",light_theme:{colors:{primary:"#9333EA",primary_hover:"#7E22CE",primary_gradient_start:"#9333EA",primary_gradient_end:"#C084FC",accent:"#C084FC",bg_body:"#FAF5FF",bg_card:"#FFFFFF",bg_surface:"#F3E8FF",text_main:"#2E1065",text_muted:"#581C87",border:"#E9D5FF",navbar_bg:"#FFFFFF",navbar_text:"#2E1065",bottom_bar_bg:"#FFFFFF",bottom_bar_active:"#9333EA",bottom_bar_inactive:"#581C87",card_bg:"#FFFFFF",card_border:"#E9D5FF",card_title:"#2E1065",price_color:"#9333EA",old_price_color:"#581C87",badge_bg:"#BE185D",badge_text:"#FFFFFF",section_title:"#2E1065",category_chip_bg:"#F3E8FF",category_chip_active:"#9333EA",category_chip_text:"#2E1065",modal_bg:"#FFFFFF",modal_overlay:"rgba(46, 16, 101, 0.6)",modal_handle:"#E9D5FF",btn_primary_bg:"#9333EA",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#9333EA"}},dark_theme:{colors:{primary:"#C084FC",primary_hover:"#E9D5FF",primary_gradient_start:"#C084FC",primary_gradient_end:"#9333EA",accent:"#E879F9",bg_body:"#17072B",card_bg:"#2B0E4E",bg_card:"#2B0E4E",bg_surface:"#3F1570",text_main:"#FAF5FF",text_muted:"#E9D5FF",border:"#581C87",navbar_bg:"#2B0E4E",navbar_text:"#FAF5FF",bottom_bar_bg:"#2B0E4E",bottom_bar_active:"#C084FC",bottom_bar_inactive:"#E9D5FF",card_border:"#581C87",card_title:"#FAF5FF",price_color:"#C084FC",old_price_color:"#E9D5FF",badge_bg:"#F43F5E",badge_text:"#FFFFFF",section_title:"#FAF5FF",category_chip_bg:"#3F1570",category_chip_active:"#C084FC",category_chip_text:"#FAF5FF",modal_bg:"#2B0E4E",modal_overlay:"rgba(0, 0, 0, 0.85)",modal_handle:"#581C87",btn_primary_bg:"#C084FC",btn_primary_text:"#17072B",chatbot_btn_bg:"#C084FC"}},typography:{font_family:"Readex Pro",base_size:"16px",heading_weight:"700"},shapes:{card_radius:"22px",button_radius:"14px",button_style:"rounded",card_style:"elevated"}},{id:"forest_olive",name:"زيتوني وغابات طبيعية 🌲",category:"زراعة وأعشاب",description:"ألوان الزيتوني والغابات الطبيعية تعزز الإحساس بالمواد الطبيعية والأعشاب النقية",light_theme:{colors:{primary:"#4D7C0F",primary_hover:"#3F6212",primary_gradient_start:"#4D7C0F",primary_gradient_end:"#84CC16",accent:"#84CC16",bg_body:"#F7FEE7",bg_card:"#FFFFFF",bg_surface:"#ECFCCB",text_main:"#1A2E05",text_muted:"#365314",border:"#D9F99D",navbar_bg:"#FFFFFF",navbar_text:"#1A2E05",bottom_bar_bg:"#FFFFFF",bottom_bar_active:"#4D7C0F",bottom_bar_inactive:"#365314",card_bg:"#FFFFFF",card_border:"#D9F99D",card_title:"#1A2E05",price_color:"#4D7C0F",old_price_color:"#365314",badge_bg:"#B91C1C",badge_text:"#FFFFFF",section_title:"#1A2E05",category_chip_bg:"#ECFCCB",category_chip_active:"#4D7C0F",category_chip_text:"#1A2E05",modal_bg:"#FFFFFF",modal_overlay:"rgba(26, 46, 5, 0.6)",modal_handle:"#D9F99D",btn_primary_bg:"#4D7C0F",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#4D7C0F"}},dark_theme:{colors:{primary:"#A3E635",primary_hover:"#BEF264",primary_gradient_start:"#A3E635",primary_gradient_end:"#4D7C0F",accent:"#84CC16",bg_body:"#0B1703",card_bg:"#182F07",bg_card:"#182F07",bg_surface:"#24440B",text_main:"#F7FEE7",text_muted:"#D9F99D",border:"#365314",navbar_bg:"#182F07",navbar_text:"#F7FEE7",bottom_bar_bg:"#182F07",bottom_bar_active:"#A3E635",bottom_bar_inactive:"#D9F99D",card_border:"#365314",card_title:"#F7FEE7",price_color:"#A3E635",old_price_color:"#D9F99D",badge_bg:"#EA580C",badge_text:"#FFFFFF",section_title:"#F7FEE7",category_chip_bg:"#24440B",category_chip_active:"#A3E635",category_chip_text:"#F7FEE7",modal_bg:"#182F07",modal_overlay:"rgba(0, 0, 0, 0.85)",modal_handle:"#365314",btn_primary_bg:"#A3E635",btn_primary_text:"#0B1703",chatbot_btn_bg:"#A3E635"}},typography:{font_family:"Almarai",base_size:"16px",heading_weight:"700"},shapes:{card_radius:"16px",button_radius:"10px",button_style:"rounded",card_style:"elevated"}},{id:"turquoise_lagoon",name:"تركواز لاجون استوائي 🏝️",category:"صيف ورحلات",description:"مزيج حيوي من التركواز والأزرق الاستوائي يناسب متاجر الصيف، الرحلات، والرياضات المائية",light_theme:{colors:{primary:"#0284C7",primary_hover:"#0369A1",primary_gradient_start:"#0284C7",primary_gradient_end:"#14B8A6",accent:"#14B8A6",bg_body:"#F0FDFA",bg_card:"#FFFFFF",bg_surface:"#CCFBF1",text_main:"#0C4A6E",text_muted:"#0F766E",border:"#99F6E4",navbar_bg:"#FFFFFF",navbar_text:"#0C4A6E",bottom_bar_bg:"#FFFFFF",bottom_bar_active:"#0284C7",bottom_bar_inactive:"#0F766E",card_bg:"#FFFFFF",card_border:"#99F6E4",card_title:"#0C4A6E",price_color:"#0284C7",old_price_color:"#0F766E",badge_bg:"#F43F5E",badge_text:"#FFFFFF",section_title:"#0C4A6E",category_chip_bg:"#CCFBF1",category_chip_active:"#0284C7",category_chip_text:"#0C4A6E",modal_bg:"#FFFFFF",modal_overlay:"rgba(12, 74, 110, 0.6)",modal_handle:"#99F6E4",btn_primary_bg:"#0284C7",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#0284C7"}},dark_theme:{colors:{primary:"#2DD4BF",primary_hover:"#5EEAD4",primary_gradient_start:"#2DD4BF",primary_gradient_end:"#38BDF8",accent:"#38BDF8",bg_body:"#031D24",card_bg:"#08333E",bg_card:"#08333E",bg_surface:"#0D4A59",text_main:"#F0FDFA",text_muted:"#99F6E4",border:"#115E59",navbar_bg:"#08333E",navbar_text:"#F0FDFA",bottom_bar_bg:"#08333E",bottom_bar_active:"#2DD4BF",bottom_bar_inactive:"#99F6E4",card_border:"#115E59",card_title:"#F0FDFA",price_color:"#2DD4BF",old_price_color:"#99F6E4",badge_bg:"#F43F5E",badge_text:"#FFFFFF",section_title:"#F0FDFA",category_chip_bg:"#0D4A59",category_chip_active:"#2DD4BF",category_chip_text:"#F0FDFA",modal_bg:"#08333E",modal_overlay:"rgba(0, 0, 0, 0.85)",modal_handle:"#115E59",btn_primary_bg:"#2DD4BF",btn_primary_text:"#031D24",chatbot_btn_bg:"#2DD4BF"}},typography:{font_family:"Tajawal",base_size:"16px",heading_weight:"700"},shapes:{card_radius:"18px",button_radius:"12px",button_style:"rounded",card_style:"elevated"}},{id:"french_bronze",name:"برونزي وبني كلاسيك 🏺",category:"أنتيك وجلود",description:"فخامة درجات الجلد والبرونز للمصنوعات اليدوية، السلع الجلدية، والتحف",light_theme:{colors:{primary:"#854D0E",primary_hover:"#713F12",primary_gradient_start:"#854D0E",primary_gradient_end:"#CA8A04",accent:"#CA8A04",bg_body:"#FEFCE8",bg_card:"#FFFFFF",bg_surface:"#FEF9C3",text_main:"#422006",text_muted:"#713F12",border:"#FEF08A",navbar_bg:"#FFFFFF",navbar_text:"#422006",bottom_bar_bg:"#FFFFFF",bottom_bar_active:"#854D0E",bottom_bar_inactive:"#713F12",card_bg:"#FFFFFF",card_border:"#FEF08A",card_title:"#422006",price_color:"#854D0E",old_price_color:"#713F12",badge_bg:"#B91C1C",badge_text:"#FFFFFF",section_title:"#422006",category_chip_bg:"#FEF9C3",category_chip_active:"#854D0E",category_chip_text:"#422006",modal_bg:"#FFFFFF",modal_overlay:"rgba(66, 32, 6, 0.6)",modal_handle:"#FEF08A",btn_primary_bg:"#854D0E",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#854D0E"}},dark_theme:{colors:{primary:"#FACC15",primary_hover:"#FDE047",primary_gradient_start:"#FACC15",primary_gradient_end:"#854D0E",accent:"#EAB308",bg_body:"#1B1202",card_bg:"#312105",bg_card:"#312105",bg_surface:"#473209",text_main:"#FEFCE8",text_muted:"#FEF08A",border:"#713F12",navbar_bg:"#312105",navbar_text:"#FEFCE8",bottom_bar_bg:"#312105",bottom_bar_active:"#FACC15",bottom_bar_inactive:"#FEF08A",card_border:"#713F12",card_title:"#FEFCE8",price_color:"#FACC15",old_price_color:"#FEF08A",badge_bg:"#EA580C",badge_text:"#FFFFFF",section_title:"#FEFCE8",category_chip_bg:"#473209",category_chip_active:"#FACC15",category_chip_text:"#FEFCE8",modal_bg:"#312105",modal_overlay:"rgba(0, 0, 0, 0.85)",modal_handle:"#713F12",btn_primary_bg:"#FACC15",btn_primary_text:"#1B1202",chatbot_btn_bg:"#FACC15"}},typography:{font_family:"Amiri",base_size:"16px",heading_weight:"700"},shapes:{card_radius:"12px",button_radius:"6px",button_style:"square",card_style:"bordered"}},{id:"soft_lavender",name:"باستيل لافندر هادئ 🪻",category:"كتب وقرطاسية",description:"ألوان الباستيل واللافندر الهادئة والمريحة للمكتبات، متاجر الأطفال، والقرطاسية الراقية",light_theme:{colors:{primary:"#6366F1",primary_hover:"#4F46E5",primary_gradient_start:"#6366F1",primary_gradient_end:"#818CF8",accent:"#818CF8",bg_body:"#EEF2FF",bg_card:"#FFFFFF",bg_surface:"#E0E7FF",text_main:"#1E1B4B",text_muted:"#4338CA",border:"#C7D2FE",navbar_bg:"#FFFFFF",navbar_text:"#1E1B4B",bottom_bar_bg:"#FFFFFF",bottom_bar_active:"#6366F1",bottom_bar_inactive:"#4338CA",card_bg:"#FFFFFF",card_border:"#C7D2FE",card_title:"#1E1B4B",price_color:"#6366F1",old_price_color:"#4338CA",badge_bg:"#EC4899",badge_text:"#FFFFFF",section_title:"#1E1B4B",category_chip_bg:"#E0E7FF",category_chip_active:"#6366F1",category_chip_text:"#1E1B4B",modal_bg:"#FFFFFF",modal_overlay:"rgba(30, 27, 75, 0.6)",modal_handle:"#C7D2FE",btn_primary_bg:"#6366F1",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#6366F1"}},dark_theme:{colors:{primary:"#818CF8",primary_hover:"#A5B4FC",primary_gradient_start:"#818CF8",primary_gradient_end:"#6366F1",accent:"#A78BFA",bg_body:"#0D102B",card_bg:"#171B47",bg_card:"#171B47",bg_surface:"#222863",text_main:"#EEF2FF",text_muted:"#C7D2FE",border:"#3730A3",navbar_bg:"#171B47",navbar_text:"#EEF2FF",bottom_bar_bg:"#171B47",bottom_bar_active:"#818CF8",bottom_bar_inactive:"#C7D2FE",card_border:"#3730A3",card_title:"#EEF2FF",price_color:"#818CF8",old_price_color:"#C7D2FE",badge_bg:"#F43F5E",badge_text:"#FFFFFF",section_title:"#EEF2FF",category_chip_bg:"#222863",category_chip_active:"#818CF8",category_chip_text:"#EEF2FF",modal_bg:"#171B47",modal_overlay:"rgba(0, 0, 0, 0.85)",modal_handle:"#3730A3",btn_primary_bg:"#818CF8",btn_primary_text:"#0D102B",chatbot_btn_bg:"#818CF8"}},typography:{font_family:"Readex Pro",base_size:"16px",heading_weight:"700"},shapes:{card_radius:"20px",button_radius:"9999px",button_style:"pill",card_style:"elevated"}},{id:"burgundy_wine",name:"نبيذي كلاسيكي فاخر 🍷",category:"فخامة وسهرات",description:"أحمر عنابي فاخر وكلاسيكي يعكس أصالة المنتجات الفاخرة وسهرات الأناقة",light_theme:{colors:{primary:"#9F1239",primary_hover:"#881337",primary_gradient_start:"#9F1239",primary_gradient_end:"#BE123C",accent:"#BE123C",bg_body:"#FFF1F2",bg_card:"#FFFFFF",bg_surface:"#FFE4E6",text_main:"#4C0519",text_muted:"#881337",border:"#FECDD3",navbar_bg:"#FFFFFF",navbar_text:"#4C0519",bottom_bar_bg:"#FFFFFF",bottom_bar_active:"#9F1239",bottom_bar_inactive:"#881337",card_bg:"#FFFFFF",card_border:"#FECDD3",card_title:"#4C0519",price_color:"#9F1239",old_price_color:"#881337",badge_bg:"#881337",badge_text:"#FFFFFF",section_title:"#4C0519",category_chip_bg:"#FFE4E6",category_chip_active:"#9F1239",category_chip_text:"#4C0519",modal_bg:"#FFFFFF",modal_overlay:"rgba(76, 5, 25, 0.6)",modal_handle:"#FECDD3",btn_primary_bg:"#9F1239",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#9F1239"}},dark_theme:{colors:{primary:"#FB7185",primary_hover:"#FDA4AF",primary_gradient_start:"#FB7185",primary_gradient_end:"#9F1239",accent:"#E11D48",bg_body:"#1F040C",card_bg:"#3B0A19",bg_card:"#3B0A19",bg_surface:"#520F24",text_main:"#FFF1F2",text_muted:"#FECDD3",border:"#881337",navbar_bg:"#3B0A19",navbar_text:"#FFF1F2",bottom_bar_bg:"#3B0A19",bottom_bar_active:"#FB7185",bottom_bar_inactive:"#FECDD3",card_border:"#881337",card_title:"#FFF1F2",price_color:"#FB7185",old_price_color:"#FECDD3",badge_bg:"#9F1239",badge_text:"#FFFFFF",section_title:"#FFF1F2",category_chip_bg:"#520F24",category_chip_active:"#FB7185",category_chip_text:"#FFF1F2",modal_bg:"#3B0A19",modal_overlay:"rgba(0, 0, 0, 0.85)",modal_handle:"#881337",btn_primary_bg:"#FB7185",btn_primary_text:"#1F040C",chatbot_btn_bg:"#FB7185"}},typography:{font_family:"Cairo",base_size:"16px",heading_weight:"800"},shapes:{card_radius:"16px",button_radius:"10px",button_style:"rounded",card_style:"elevated"}},{id:"electric_lime",name:"ليموني نيون رياضي 🔋",category:"رياضة ولياقة",description:"أخضر ليموني نيون مشع وحيوي ومناسب للأحذية الرياضية والمكملات واللياقة البدنية",light_theme:{colors:{primary:"#65A30D",primary_hover:"#4D7C0F",primary_gradient_start:"#65A30D",primary_gradient_end:"#84CC16",accent:"#84CC16",bg_body:"#F7FEE7",bg_card:"#FFFFFF",bg_surface:"#ECFCCB",text_main:"#1A2E05",text_muted:"#365314",border:"#D9F99D",navbar_bg:"#FFFFFF",navbar_text:"#1A2E05",bottom_bar_bg:"#FFFFFF",bottom_bar_active:"#65A30D",bottom_bar_inactive:"#365314",card_bg:"#FFFFFF",card_border:"#D9F99D",card_title:"#1A2E05",price_color:"#65A30D",old_price_color:"#365314",badge_bg:"#DC2626",badge_text:"#FFFFFF",section_title:"#1A2E05",category_chip_bg:"#ECFCCB",category_chip_active:"#65A30D",category_chip_text:"#1A2E05",modal_bg:"#FFFFFF",modal_overlay:"rgba(26, 46, 5, 0.6)",modal_handle:"#D9F99D",btn_primary_bg:"#65A30D",btn_primary_text:"#FFFFFF",chatbot_btn_bg:"#65A30D"}},dark_theme:{colors:{primary:"#A3E635",primary_hover:"#BEF264",primary_gradient_start:"#A3E635",primary_gradient_end:"#22C55E",accent:"#22C55E",bg_body:"#071302",card_bg:"#112606",bg_card:"#112606",bg_surface:"#1B390B",text_main:"#F7FEE7",text_muted:"#D9F99D",border:"#365314",navbar_bg:"#112606",navbar_text:"#F7FEE7",bottom_bar_bg:"#112606",bottom_bar_active:"#A3E635",bottom_bar_inactive:"#D9F99D",card_border:"#365314",card_title:"#F7FEE7",price_color:"#A3E635",old_price_color:"#D9F99D",badge_bg:"#EF4444",badge_text:"#FFFFFF",section_title:"#F7FEE7",category_chip_bg:"#1B390B",category_chip_active:"#A3E635",category_chip_text:"#F7FEE7",modal_bg:"#112606",modal_overlay:"rgba(0, 0, 0, 0.9)",modal_handle:"#365314",btn_primary_bg:"#A3E635",btn_primary_text:"#071302",chatbot_btn_bg:"#A3E635"}},typography:{font_family:"Changa",base_size:"16px",heading_weight:"800"},shapes:{card_radius:"14px",button_radius:"6px",button_style:"square",card_style:"bordered"}}];function O(r={},u="free"){const t=[];if(!r||typeof r!="object")return{sanitizedConfig:JSON.parse(JSON.stringify(m)),notices:t};const e={...m,...r,store_identity:{...m.store_identity,...r.store_identity||{}},products_settings:{...m.products_settings,...r.products_settings||{}},messages:{...m.messages,...r.messages||{}},modals_customization:{...m.modals_customization,...r.modals_customization||{}},light_theme:{...m.light_theme,...r.light_theme||{},colors:{...m.light_theme.colors,...r.light_theme?.colors||r.modes?.light?.colors||{}}},dark_theme:{...m.dark_theme,...r.dark_theme||{},colors:{...m.dark_theme.colors,...r.dark_theme?.colors||r.modes?.dark?.colors||{}}},typography:{...m.typography,...r.typography||{}},shapes:{...m.shapes,...r.shapes||{}},navigation_settings:{bottom_bar:{items:D(r.navigation_settings?.bottom_bar?.items)},top_bar:P({...m.navigation_settings.top_bar,...r.navigation_settings?.top_bar||{}})},marketing:{...m.marketing,...r.marketing||{}},layout_blocks:Array.isArray(r.layout_blocks)&&r.layout_blocks.length>0?r.layout_blocks:m.layout_blocks},a=e.navigation_settings??m.navigation_settings;return a.bottom_bar.items.filter(i=>i.visible!==!1).length<2&&(a.bottom_bar.items=m.navigation_settings.bottom_bar.items.map((i,n)=>({...i,visible:n<2,order:n+1})),e.navigation_settings=a,t.push("تم إصلاح الشريط السفلي للحفاظ على عنصرين مرئيين على الأقل.")),{sanitizedConfig:e,notices:t}}var eu=class U{static instance;listeners=new Map;constructor(){}static getInstance(){return U.instance||(U.instance=new U),U.instance}on(u,t){return this.listeners.has(u)||this.listeners.set(u,new Set),this.listeners.get(u).add(t),()=>this.off(u,t)}once(u,t){const e=a=>{this.off(u,e),t(a)};this.on(u,e)}off(u,t){const e=this.listeners.get(u);e&&(e.delete(t),e.size===0&&this.listeners.delete(u))}emit(u,t){const e=this.listeners.get(u);e&&e.forEach(a=>{try{a(t)}catch(s){console.error(`[EventBus] Error in event listener for "${u}":`,s)}})}clear(){this.listeners.clear()}},B=eu.getInstance(),au=class T{static instance;user={loggedIn:!1};products=[];categories=[];activeCategory="all";favorites=new Set;cart={items:[],discount_amount:0,delivery_fee:0};config=null;storeId="nalsh_mall";constructor(){this.initFromStorage(),this.setupStorageListener()}static getInstance(){return T.instance||(T.instance=new T),T.instance}initFromStorage(){try{const u=localStorage.getItem("nalsh_user_session");u&&(this.user=JSON.parse(u));const t=localStorage.getItem("nalsh_cart_items");t&&(this.cart.items=JSON.parse(t));const e=localStorage.getItem("nalsh_favorites");if(e){const a=JSON.parse(e);this.favorites=new Set(a)}}catch(u){console.warn("[StoreState] Failed to initialize state from storage:",u)}}setupStorageListener(){window.addEventListener("storage",u=>{if(u.key==="nalsh_cart_items"&&u.newValue)try{this.cart.items=JSON.parse(u.newValue),B.emit("cart:updated",this.getCart())}catch{}else if(u.key==="nalsh_user_session"&&u.newValue)try{this.user=JSON.parse(u.newValue),B.emit("user:changed",this.user)}catch{}else if(u.key==="nalsh_favorites"&&u.newValue)try{this.favorites=new Set(JSON.parse(u.newValue)),B.emit("favorites:updated",Array.from(this.favorites))}catch{}})}setUser(u){this.user=u,u.loggedIn&&u.token?(localStorage.setItem("customer_token",u.token),localStorage.setItem("nalsh_user_session",JSON.stringify(u))):(localStorage.removeItem("customer_token"),localStorage.removeItem("nalsh_user_session")),B.emit("user:changed",this.user)}logout(){this.setUser({loggedIn:!1})}setProducts(u){this.products=u,window.allProducts=u,B.emit("products:loaded",u)}setCategories(u){this.categories=u,B.emit("categories:loaded",u)}setActiveCategory(u){this.activeCategory=u,B.emit("category:selected",u)}addToCart(u){const t=u.quantity||1,e=this.cart.items.findIndex(a=>u.selected_variation&&a.selected_variation?a.product_id===u.product_id&&a.selected_variation.id===u.selected_variation.id:a.product_id===u.product_id);e>-1?this.cart.items[e].quantity+=t:this.cart.items.push({...u,quantity:t}),this.saveCart(),B.emit("cart:item-added",u)}updateCartItemQuantity(u,t){if(u>=0&&u<this.cart.items.length){const e=this.cart.items[u];e.quantity+=t,e.quantity<=0&&this.cart.items.splice(u,1),this.saveCart()}}removeCartItem(u){u>=0&&u<this.cart.items.length&&(this.cart.items.splice(u,1),this.saveCart())}clearCart(){this.cart.items=[],this.cart.discount_amount=0,this.cart.coupon_code=void 0,this.saveCart()}saveCart(){localStorage.setItem("nalsh_cart_items",JSON.stringify(this.cart.items)),B.emit("cart:updated",this.getCart())}getCart(){const u=this.cart.items.reduce((a,s)=>a+s.price*s.quantity,0),t=this.cart.items.reduce((a,s)=>a+s.quantity,0),e=Math.max(0,u-this.cart.discount_amount+this.cart.delivery_fee);return{...this.cart,totalItems:t,subtotal:u,total:e}}toggleFavorite(u){const t=this.favorites.has(u);t?this.favorites.delete(u):this.favorites.add(u);const e=Array.from(this.favorites);return localStorage.setItem("nalsh_favorites",JSON.stringify(e)),B.emit("favorites:updated",e),!t}isFavorite(u){return this.favorites.has(u)}setConfig(u){this.config=u,B.emit("config:updated",u)}};au.getInstance();function su(){if(typeof window<"u"){const u=window.WORKER_API_URL||window.CF_WORKER_URL||window.CLOUDFLARE_WORKER_URL;if(u&&typeof u=="string"){const e=u.trim();if(e==="/api/worker"||e==="/api/worker/")return"/api/worker/";if(e.includes("://")){const a=e.replace(/\/$/,"");return a.endsWith("/api/worker")?`${a}/`:`${a}/api/worker/`}return e.endsWith("/")?e:`${e}/`}const t=window.CF_WORKER_URL;if(typeof t=="string")return`${t.replace(/\/$/,"")}/api/worker/`}return["/api/worker/","https://api.nalsh.dpdns.org/api.php"][0]}var H=su(),iu=class z{static instance;config;activeTab="identity";activeProductSubTab="portrait";currentDevice="mobile";isDarkPreview=!1;selectedCategoryForOverride="";merchantToken="";merchantUsername="store";merchantStoreName="";merchantUserId=0;merchantPlanType="free";isCloudSynced=!1;mobileView="controls";historyStack=[];historyIndex=-1;listeners=[];debounceHistoryTimer=null;constructor(){this.config=JSON.parse(JSON.stringify(m))}static getInstance(){return z.instance||(z.instance=new z),z.instance}init(){this.extractMerchantAuth(),this.loadInitialConfig(),this.pushHistory(),this.fetchCloudConfig()}extractMerchantAuth(){const u=localStorage.getItem("merchant_token")||sessionStorage.getItem("merchant_token");if(!u){console.log("ℹ️ تشغيل الاستوديو في وضع المعاينة السريعة."),this.merchantUsername="store",this.merchantStoreName="متجري",this.merchantPlanType="pro";return}this.merchantToken=u;try{const t=u.split(".");if(t.length===3){const e=JSON.parse(atob(t[1].replace(/-/g,"+").replace(/_/g,"/")));e.exp&&Date.now()>=e.exp*1e3&&console.warn("⚠️ جلسة منتهية، الاستمرار بوضع المعاينة المحلية"),this.merchantUsername=e.username||"store",this.merchantStoreName=e.store_name||e.username||"متجري",this.merchantUserId=Number(e.user_id||e.id||0),this.merchantPlanType=e.plan_type||"free"}}catch(t){console.warn("Error decoding merchant token, continuing in preview mode:",t),this.merchantUsername="store",this.merchantStoreName="متجري"}}async fetchCloudConfig(){if(this.merchantToken)try{const u=await fetch(H,{method:"POST",cache:"no-store",headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.merchantToken},body:JSON.stringify({action:"get_storefront_config",username:this.merchantUsername,merchant_id:this.merchantUserId})});if(u.status===401||u.status===403){console.warn("⚠️ لا يمكن جلب الإعدادات السحابية، الاستمرار بالمسودة المحلية");return}if(u.ok){const t=await u.json(),e=t?.data?.config||t?.config;if(e&&typeof e=="object"){const{sanitizedConfig:a}=O(e,this.merchantPlanType);this.config=a,t.data?.store_info?.store_name&&(this.merchantStoreName=t.data.store_info.store_name),t.data?.tier&&(this.merchantPlanType=t.data.tier),this.isCloudSynced=!0;try{localStorage.setItem(`nalsh_storefront_config_${this.merchantUsername}`,JSON.stringify(this.config))}catch{}this.sendLiveUpdateToPreview(),this.notify("full_sync")}}}catch(u){console.warn("⚠️ Could not fetch remote config, using local draft:",u)}}subscribe(u){return this.listeners.push(u),()=>{this.listeners=this.listeners.filter(t=>t!==u)}}notify(u="live_update"){this.listeners.forEach(t=>t(this.config,this.activeTab,u))}setActiveTab(u){this.activeTab=u,u==="light_colors"?this.setPreviewDarkMode(!1):u==="dark_colors"&&this.setPreviewDarkMode(!0),this.notify("tab")}setProductSubTab(u){this.activeProductSubTab=u,u==="landscape"?this.setDevice("desktop"):u==="portrait"?this.setDevice("mobile"):this.notify("full_sync")}setDevice(u){this.currentDevice=u,this.activeTab==="products_layout"&&(u==="mobile"&&this.activeProductSubTab!=="portrait"&&this.activeProductSubTab!=="categories"?this.activeProductSubTab="portrait":(u==="desktop"||u==="tablet")&&this.activeProductSubTab!=="landscape"&&this.activeProductSubTab!=="categories"&&(this.activeProductSubTab="landscape")),this.notify("device")}setMobileView(u){this.mobileView=u,this.notify("mobile_view")}setPreviewDarkMode(u){this.isDarkPreview=u,this.syncIframeTheme(u),this.sendLiveUpdateToPreview(),this.notify("dark_mode")}togglePreviewDarkMode(){this.setPreviewDarkMode(!this.isDarkPreview)}pushHistory(){this.historyIndex<this.historyStack.length-1&&(this.historyStack=this.historyStack.slice(0,this.historyIndex+1)),this.historyStack.push(JSON.stringify(this.config)),this.historyStack.length>40&&this.historyStack.shift(),this.historyIndex=this.historyStack.length-1}canUndo(){return this.historyIndex>0}canRedo(){return this.historyIndex<this.historyStack.length-1}undo(){return this.canUndo()?(this.historyIndex--,this.config=JSON.parse(this.historyStack[this.historyIndex]),this.sendLiveUpdateToPreview(),this.notify("history"),!0):!1}redo(){return this.canRedo()?(this.historyIndex++,this.config=JSON.parse(this.historyStack[this.historyIndex]),this.sendLiveUpdateToPreview(),this.notify("history"),!0):!1}updateConfig(u,t=!0,e="live_update"){t&&(e==="live_update"?(this.debounceHistoryTimer||this.pushHistory(),this.debounceHistoryTimer&&clearTimeout(this.debounceHistoryTimer),this.debounceHistoryTimer=setTimeout(()=>{this.pushHistory(),this.debounceHistoryTimer=null},600)):this.pushHistory()),u(this.config),this.sendLiveUpdateToPreview(),this.notify(e)}resetToDefaults(){this.pushHistory(),this.config=JSON.parse(JSON.stringify(m));try{localStorage.removeItem(`nalsh_storefront_config_${this.merchantUsername}`)}catch{}this.sendLiveUpdateToPreview(),this.notify("full_sync")}sendLiveUpdateToPreview(){const u=document.getElementById("store-preview-frame");if(u&&u.contentWindow){u.contentWindow.postMessage({type:"NALSH_CONFIG_UPDATE",config:this.config,payload:this.config,_preview_dark:this.isDarkPreview},"*");try{const t=u.contentDocument||u.contentWindow.document;t&&(t.documentElement.classList.toggle("dark-mode",this.isDarkPreview),t.body&&t.body.classList.toggle("dark-mode",this.isDarkPreview))}catch{}}}applyDimensionsDirectlyToCSS(u,t){const e=document.getElementById("store-preview-frame");if(!e||!e.contentDocument)return;let a=e.contentDocument.getElementById("studio-live-dims-css");a||(a=e.contentDocument.createElement("style"),a.id="studio-live-dims-css",e.contentDocument.head.appendChild(a));const s=this.config.products_settings||{},i=s.portrait||{},n=s.landscape||{},c=u==="portrait"?{...i,...t}:i,l=u==="landscape"?{...n,...t}:n,d=Number(c.grid_columns||2),b=Number(l.grid_columns||4);a.textContent=`
            @media (max-width: 767px) {
                .product-grid, .ultra-product-grid, .store-premium-grid {
                    grid-template-columns: repeat(${d}, minmax(0, 1fr)) !important;
                }
                ${Number(c.card_custom_width)>0?`
                .horizontal-scroller .product-card-compact, .horizontal-scroller .fast-card {
                    flex: 0 0 ${c.card_custom_width}px !important;
                    width: ${c.card_custom_width}px !important;
                    min-width: ${c.card_custom_width}px !important;
                }`:""}
                ${Number(c.card_custom_height)>0?`
                .product-card-compact, .fast-card {
                    height: ${c.card_custom_height}px !important;
                    min-height: ${c.card_custom_height}px !important;
                }`:""}
                ${Number(c.img_custom_height)>0?`
                .compact-img-wrapper, .sic-img-box, .ppc-img-box, .ct-min-img-wrap, .ct-glass-img-wrap, .ct-mag-img {
                    height: ${c.img_custom_height}px !important;
                    aspect-ratio: auto !important;
                    padding-top: 0 !important;
                }`:""}
            }
            @media (min-width: 768px) {
                .product-grid, .ultra-product-grid, .store-premium-grid {
                    grid-template-columns: repeat(${b}, minmax(0, 1fr)) !important;
                }
                ${Number(l.card_custom_width)>0?`
                .horizontal-scroller .product-card-compact, .horizontal-scroller .fast-card {
                    flex: 0 0 ${l.card_custom_width}px !important;
                    width: ${l.card_custom_width}px !important;
                    min-width: ${l.card_custom_width}px !important;
                }`:""}
                ${Number(l.card_custom_height)>0?`
                .product-card-compact, .fast-card {
                    height: ${l.card_custom_height}px !important;
                    min-height: ${l.card_custom_height}px !important;
                }`:""}
                ${Number(l.img_custom_height)>0?`
                .compact-img-wrapper, .sic-img-box, .ppc-img-box, .ct-min-img-wrap, .ct-glass-img-wrap, .ct-mag-img {
                    height: ${l.img_custom_height}px !important;
                    aspect-ratio: auto !important;
                    padding-top: 0 !important;
                }`:""}
            }
        `}syncIframeTheme(u){const t=document.getElementById("store-preview-frame");if(t&&t.contentWindow)try{t.contentWindow.postMessage({type:"NALSH_TOGGLE_DARK_MODE",darkMode:u,payload:{darkMode:u}},"*");const e=t.contentWindow.document;e.documentElement.classList.toggle("dark-mode",u),e.body?.classList.toggle("dark-mode",u),t.contentWindow.localStorage.setItem("darkMode",u?"enabled":"disabled"),t.contentWindow.StorefrontEngine&&t.contentWindow.StorefrontEngine.reapplyActiveMode()}catch{}}loadInitialConfig(){try{const u=localStorage.getItem(`nalsh_storefront_config_${this.merchantUsername}`)||localStorage.getItem("nalsh_storefront_config_v2")||localStorage.getItem("nalsh_storefront_config");if(u){const t=JSON.parse(u),{sanitizedConfig:e}=O(t,this.merchantPlanType);this.config=e}}catch{}}},o=iu.getInstance(),ou=class{static render(){const{currentDevice:r,isDarkPreview:u,merchantUsername:t}=o,e=o.canUndo(),a=o.canRedo();return`
        <header class="sb-topbar">
            <div class="sb-topbar-start">
                <a href="merchant-dashboard.html" class="sb-btn-back">
                    <i class="fas fa-arrow-right"></i>
                    <span>لوحة التاجر</span>
                </a>
                <div class="sb-store-badge">
                    <div class="pulse-indicator"></div>
                    <i class="fas fa-store" style="color:var(--sb-primary);"></i>
                    <div class="sb-store-meta">
                        <span id="ui-merchant-name">${o.merchantStoreName||o.merchantUsername}</span>
                        <small>@${o.merchantUsername}</small>
                    </div>
                    <span class="sb-beta-tag"><i class="fas fa-palette"></i> مخصص</span>
                </div>
                <a href="index.html?store=${encodeURIComponent(o.merchantUsername)}" target="_blank" class="sb-btn sb-btn-ghost hide-mobile" title="فتح واجهة المتجر الحالية في تبويب جديد" style="color:#38BDF8; text-decoration:none; font-size:0.82rem; font-weight:700;">
                    <i class="fas fa-external-link-alt"></i>
                    <span>زيارة المتجر</span>
                </a>
            </div>

            <!-- أجهزة المعاينة وأدوات التراجع -->
            <div class="sb-topbar-center">
                <div class="sb-history-group">
                    <button class="sb-icon-tool" id="btn-undo" onclick="window.StudioUI.undo()" title="تراجع (Ctrl+Z)" ${e?"":"disabled"}>
                        <i class="fas fa-undo"></i>
                    </button>
                    <button class="sb-icon-tool" id="btn-redo" onclick="window.StudioUI.redo()" title="إعادة (Ctrl+Y)" ${a?"":"disabled"}>
                        <i class="fas fa-redo"></i>
                    </button>
                </div>

                <div class="sb-device-switcher">
                    <button class="sb-device-btn ${r==="mobile"?"active":""}" data-device="mobile" onclick="window.StudioUI.setDevice('mobile')">
                        <i class="fas fa-mobile-alt"></i> <span>جوال (390px)</span>
                    </button>
                    <button class="sb-device-btn ${r==="tablet"?"active":""}" data-device="tablet" onclick="window.StudioUI.setDevice('tablet')">
                        <i class="fas fa-tablet-alt"></i> <span>تابلت (768px)</span>
                    </button>
                    <button class="sb-device-btn ${r==="desktop"?"active":""}" data-device="desktop" onclick="window.StudioUI.setDevice('desktop')">
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
                    <i class="fas ${u?"fa-sun":"fa-moon"}" id="sb-theme-icon"></i>
                    <span class="hide-mobile" id="sb-theme-mode-text">${u?"فاتح":"داكن"}</span>
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
        `}},G=class{static render(){const r=o.config.store_identity||{},u=r.announcement_bar||{},t=o.config.default_theme_mode||"light";return`
        <div class="sb-tab-pane">
            <div class="sb-quick-actions">
                <button class="sb-quick-action active" onclick="window.StudioUI.setActiveTab('ai_palette')">
                    <i class="fas fa-palette"></i>
                    <span>اختيار ثيم جاهز</span>
                </button>
                <button class="sb-quick-action" onclick="window.StudioUI.setActiveTab('light_colors')">
                    <i class="fas fa-sun"></i>
                    <span>ألوان المتجر</span>
                </button>
                <button class="sb-quick-action" onclick="window.StudioUI.setActiveTab('navigation')">
                    <i class="fas fa-bars"></i>
                    <span>تنقل المتجر</span>
                </button>
            </div>

            <div class="sb-identity-banner">
                <div class="sb-identity-banner-head">
                    <span class="sb-badge-pill active">جاهز للعرض</span>
                    <span class="sb-badge-pill">متجر حديث</span>
                </div>
                <h3>ابدأ بتخصيص متجر احترافي في 3 خطوات</h3>
                <div class="sb-stat-row">
                    <div class="sb-stat-item">
                        <strong>1</strong>
                        <span>اختر الثيم</span>
                    </div>
                    <div class="sb-stat-item">
                        <strong>2</strong>
                        <span>عدل الألوان</span>
                    </div>
                    <div class="sb-stat-item">
                        <strong>3</strong>
                        <span>انشر المعاينة</span>
                    </div>
                </div>
            </div>

            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-store" style="color:var(--sb-primary);"></i>
                    <h3>هوية وبيانات المتجر الأساسية</h3>
                </div>
                
                <div class="sb-fields-grid">
                    <div class="sb-field-card">
                        <label class="sb-field-label">اسم المتجر (Store Name)</label>
                        <input type="text" class="sb-input" value="${r.store_name||""}" 
                               placeholder="مثال: متجر الأناقة الفاخرة"
                               oninput="window.StudioUI.handleIdentityChange('store_name', this.value)" />
                    </div>

                    <div class="sb-field-card">
                        <label class="sb-field-label">الشعار التسويقي (Slogan)</label>
                        <input type="text" class="sb-input" value="${r.slogan||""}" 
                               placeholder="مثال: وجهتك الأولى لأرقى الأزياء والعطور"
                               oninput="window.StudioUI.handleIdentityChange('slogan', this.value)" />
                    </div>

                    <div class="sb-field-card">
                        <label class="sb-field-label">رسالة الترحيب أعلى المتجر</label>
                        <textarea class="sb-textarea" placeholder="أهلاً بكم في متجرنا!"
                                  oninput="window.StudioUI.handleIdentityChange('welcome_message', this.value)">${r.welcome_message||""}</textarea>
                    </div>

                    <div class="sb-field-card">
                        <label class="sb-field-label">رمز العملة المعروضة</label>
                        <select class="sb-select" onchange="window.StudioUI.handleIdentityChange('currency_symbol', this.value)">
                            <option value="YER" ${r.currency_symbol==="YER"?"selected":""}>ريال يمني (YER)</option>
                            <option value="SAR" ${r.currency_symbol==="SAR"?"selected":""}>ريال سعودي (SAR)</option>
                            <option value="USD" ${r.currency_symbol==="USD"?"selected":""}>دولار أمريكي (USD)</option>
                        </select>
                    </div>

                    <div class="sb-field-card" style="grid-column: 1 / -1;">
                        <label class="sb-field-label">
                            <span>الوضع الافتراضي عند أول زيارة للمتسوق (Default Theme)</span>
                            <span class="sb-badge-info">أول فتح للمتجر</span>
                        </label>
                        <div class="sb-segmented-control">
                            <button class="sb-seg-btn ${t==="light"?"active":""}" 
                                    onclick="window.StudioUI.handleDefaultThemeModeChange('light')">
                                ☀️ وضع فاتح (Light)
                            </button>
                            <button class="sb-seg-btn ${t==="dark"?"active":""}" 
                                    onclick="window.StudioUI.handleDefaultThemeModeChange('dark')">
                                🌙 وضع داكن (Dark)
                            </button>
                            <button class="sb-seg-btn ${t==="auto"?"active":""}" 
                                    onclick="window.StudioUI.handleDefaultThemeModeChange('auto')">
                                🖥️ حسب جهاز العميل
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- شريط الإعلانات الترويجي -->
            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-bullhorn" style="color:#EC4899;"></i>
                    <h3>شريط الإعلانات الترويجي (Announcement Bar)</h3>
                </div>

                <div class="sb-fields-grid">
                    <div class="sb-field-card" style="grid-column: 1 / -1;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                            <label class="sb-field-label" style="margin-bottom:0;">تفعيل شريط الإعلانات أعلى الهيدر</label>
                            <label class="sb-switch">
                                <input type="checkbox" ${u.enabled?"checked":""} 
                                       onchange="window.StudioUI.handleAnnouncementChange('enabled', this.checked)" />
                                <span class="sb-slider"></span>
                            </label>
                        </div>
                        
                        <input type="text" class="sb-input" value="${u.text||""}" 
                               placeholder="نص الإعلان الترويجي، مثال: 🎉 عروض حصرية وتوصيل مجاني!"
                               oninput="window.StudioUI.handleAnnouncementChange('text', this.value)" />

                        <div style="display:flex; gap:12px; margin-top:10px;">
                            <div class="sb-color-inline" style="flex:1;">
                                <span>خلفية الشريط:</span>
                                <input type="color" class="sb-color-input" value="${u.bg_color||"#4F46E5"}" 
                                       oninput="window.StudioUI.handleAnnouncementChange('bg_color', this.value)" />
                            </div>
                            <div class="sb-color-inline" style="flex:1;">
                                <span>لون النص:</span>
                                <input type="color" class="sb-color-input" value="${u.text_color||"#FFFFFF"}" 
                                       oninput="window.StudioUI.handleAnnouncementChange('text_color', this.value)" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `}},ru=class{static render(){const r=o.config.products_settings||{portrait:{},landscape:{},category_overrides:{}},u=o.activeProductSubTab||"portrait",t=u==="landscape"?r.landscape||{}:r.portrait||{};let e=["العطور والعود","الملابس والأزياء","الساعات والمجوهرات","الأجهزة الذكية","العناية والجمال"];try{const i=document.getElementById("store-preview-frame");i?.contentWindow?.App?.storeData?.categories?.length&&(e=i.contentWindow.App.storeData.categories.map(n=>n.name))}catch{}!o.selectedCategoryForOverride&&e.length>0&&(o.selectedCategoryForOverride=e[0]);const a=o.selectedCategoryForOverride&&r.category_overrides?.[o.selectedCategoryForOverride]||null,s=a&&a.enabled!==!1;return`
        <div class="sb-tab-pane">
            <div class="sb-product-summary">
                <div class="sb-product-summary-card accent">
                    <span class="label">وضع العرض</span>
                    <strong>${u==="portrait"?"جوال":u==="landscape"?"كمبيوتر":"أقسام"}</strong>
                </div>
                <div class="sb-product-summary-card">
                    <span class="label">رتبة الترتيب</span>
                    <strong>${r.sort_by||"latest"}</strong>
                </div>
                <div class="sb-product-summary-card">
                    <span class="label">أقسام المتجر</span>
                    <strong>${e.length}</strong>
                </div>
            </div>

            <div class="sb-alert-box info">
                <i class="fas fa-magic"></i>
                <div>
                    <strong>تحكم متكامل في عرض وتخطيط المنتجات ⚡</strong>
                    <span>التبديل بين وضع الجوال والكمبيوتر يغير <strong>شاشة المعاينة تلقائياً</strong> لمعاينة حية ومثالية!</span>
                </div>
            </div>

            <div class="sb-product-mini-actions">
                <button class="sb-product-mini-btn ${u==="portrait"?"active":""}" onclick="window.StudioUI.switchProductSubTab('portrait')">
                    <i class="fas fa-mobile-alt"></i>
                    <span>جوال</span>
                </button>
                <button class="sb-product-mini-btn ${u==="landscape"?"active":""}" onclick="window.StudioUI.switchProductSubTab('landscape')">
                    <i class="fas fa-desktop"></i>
                    <span>كمبيوتر</span>
                </button>
                <button class="sb-product-mini-btn ${u==="categories"?"active":""}" onclick="window.StudioUI.switchProductSubTab('categories')">
                    <i class="fas fa-folder-tree"></i>
                    <span>أقسام</span>
                </button>
            </div>

            <!-- النمط العام للرئيسية والفرز -->
            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-boxes-stacked" style="color:var(--sb-primary);"></i>
                    <h3>نمط وتجميع المنتجات في المتجر</h3>
                </div>

                <div class="sb-fields-grid">
                    <div class="sb-field-card" style="grid-column: 1 / -1; background: rgba(99, 102, 241, 0.06); border: 1px solid rgba(99, 102, 241, 0.2); padding: 14px 16px; border-radius: 12px; display: flex; align-items: center; justify-content: space-between;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <i class="fas fa-layer-group" style="color: var(--sb-primary); font-size: 1.2rem;"></i>
                            <div>
                                <strong style="font-size: 0.95rem; display: block; color: var(--sb-text);">نمط العرض: أقسام مستقلة لكل فئة 📂</strong>
                                <small style="font-size: 0.78rem; color: var(--sb-muted);">يتم تنظيم منتجات متجرك تلقائياً في صفوف وأقسام جذابة بحسب تصنيفاتها</small>
                            </div>
                        </div>
                        <span class="sb-badge-info" style="background: var(--sb-primary); color: #fff; font-weight: 800; padding: 4px 10px; border-radius: 8px; font-size: 0.75rem;">نشط ومفعل ⭐</span>
                    </div>

                    <div class="sb-field-card" style="grid-column: 1 / -1;">
                        <label class="sb-field-label">ترتيب المنتجات الافتراضي (Sort By)</label>
                        <select class="sb-select" onchange="window.StudioUI.handleProductsSettingChange('sort_by', this.value)">
                            <option value="latest" ${r.sort_by==="latest"?"selected":""}>الأحدث نزولاً في المتجر (Default)</option>
                            <option value="price_low" ${r.sort_by==="price_low"?"selected":""}>من الأقل سعراً للأعلى 💵</option>
                            <option value="price_high" ${r.sort_by==="price_high"?"selected":""}>من الأعلى سعراً للأقل 💎</option>
                            <option value="discount" ${r.sort_by==="discount"?"selected":""}>الأعلى نسبة خصم وعروض 🔥</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- تبويبات التخصيص المستقل (جوال / كمبيوتر / أقسام) -->
            <div class="sb-card-group highlight">
                <div class="sb-subtab-switcher">
                    <button class="sb-subtab-btn ${u==="portrait"?"active":""}" 
                            onclick="window.StudioUI.switchProductSubTab('portrait')">
                        <i class="fas fa-mobile-alt"></i>
                        <span>📱 شاشات الجوال</span>
                    </button>
                    <button class="sb-subtab-btn ${u==="landscape"?"active":""}" 
                            onclick="window.StudioUI.switchProductSubTab('landscape')">
                        <i class="fas fa-desktop"></i>
                        <span>💻 الكمبيوتر والشاشات</span>
                    </button>
                    <button class="sb-subtab-btn ${u==="categories"?"active":""}" 
                            onclick="window.StudioUI.switchProductSubTab('categories')">
                        <i class="fas fa-folder-tree"></i>
                        <span>📂 تخصيص الأقسام</span>
                    </button>
                </div>

                ${u==="portrait"?`
                    <!-- إعدادات الجوال (Portrait) -->
                    <div class="sb-fields-grid" style="margin-top:14px;">
                        <div class="sb-field-card">
                            <label class="sb-field-label">اتجاه تمرير المنتجات بالجوال</label>
                            <div class="sb-segmented-control">
                                <button class="sb-seg-btn ${(t.scroll_direction||"horizontal")==="horizontal"?"active":""}"
                                        onclick="window.StudioUI.handleOrientationSettingChange('portrait', 'scroll_direction', 'horizontal')">
                                    ↔️ أفقي (سلايدر باللمس 👆)
                                </button>
                                <button class="sb-seg-btn ${t.scroll_direction==="vertical"?"active":""}"
                                        onclick="window.StudioUI.handleOrientationSettingChange('portrait', 'scroll_direction', 'vertical')">
                                    ↕️ عمودي (شبكة تنزل للأسفل)
                                </button>
                            </div>
                        </div>

                        <!-- عدد الأعمدة بالجوال -->
                        <div class="sb-field-card" style="${(t.scroll_direction||"horizontal")!=="vertical"?"opacity:0.45; pointer-events:none;":t.card_orientation==="landscape"||t.card_style==="landscape_row"?"opacity:0.6; pointer-events:none;":""}">
                            <label class="sb-field-label">عدد الأعمدة بالجوال</label>
                            <div class="sb-segmented-control">
                                <button class="sb-seg-btn ${Number(t.grid_columns||2)===1||t.card_orientation==="landscape"||t.card_style==="landscape_row"?"active":""}"
                                        onclick="window.StudioUI.handleOrientationSettingChange('portrait', 'grid_columns', 1)">
                                    1️⃣ عمود 1
                                </button>
                                <button class="sb-seg-btn ${(Number(t.grid_columns||2)===2||!t.grid_columns)&&!(t.card_orientation==="landscape"||t.card_style==="landscape_row")?"active":""}"
                                        onclick="window.StudioUI.handleOrientationSettingChange('portrait', 'grid_columns', 2)">
                                    2️⃣ عمودين ⭐
                                </button>
                                <button class="sb-seg-btn ${Number(t.grid_columns)===3&&!(t.card_orientation==="landscape"||t.card_style==="landscape_row")?"active":""}"
                                        onclick="window.StudioUI.handleOrientationSettingChange('portrait', 'grid_columns', 3)">
                                    3️⃣ 3 أعمدة
                                </button>
                            </div>
                            ${(t.scroll_direction||"horizontal")!=="vertical"?'<span style="font-size:0.72rem; color:#EF4444; display:block; margin-top:4px;">متاح فقط في وضع الشبكة العمودية</span>':t.card_orientation==="landscape"||t.card_style==="landscape_row"?'<span style="font-size:0.72rem; color:#06B6D4; display:block; margin-top:4px;">الكرت بالعرض يملأ عرض الشاشة (عمود 1) تلقائياً</span>':""}
                        </div>

                        <!-- عدد الصفوف بالجوال -->
                        <div class="sb-field-card" style="${(t.scroll_direction||"horizontal")!=="vertical"?"opacity:0.45; pointer-events:none;":""}">
                            <label class="sb-field-label">عدد الصفوف المعروضة بالجوال</label>
                            <div class="sb-segmented-control">
                                <button class="sb-seg-btn ${Number(t.grid_rows||0)===0?"active":""}"
                                        onclick="window.StudioUI.handleOrientationSettingChange('portrait', 'grid_rows', 0)">
                                    ♾️ الكل
                                </button>
                                ${[1,2,3,4].map(i=>`
                                    <button class="sb-seg-btn ${Number(t.grid_rows)===i?"active":""}"
                                            onclick="window.StudioUI.handleOrientationSettingChange('portrait', 'grid_rows', ${i})">
                                        ${i} صف
                                    </button>
                                `).join("")}
                            </div>
                            ${(t.scroll_direction||"horizontal")!=="vertical"?'<span style="font-size:0.72rem; color:#EF4444; display:block; margin-top:4px;">متاح فقط في وضع الشبكة العمودية</span>':""}
                        </div>

                        <!-- صفوف السلايدر بالجوال -->
                        <div class="sb-field-card" style="${t.scroll_direction==="vertical"?"opacity:0.45; pointer-events:none;":""}">
                            <label class="sb-field-label">صفوف السلايدر بالجوال</label>
                            <div class="sb-segmented-control">
                                <button class="sb-seg-btn ${(Number(t.slider_rows)||1)===1?"active":""}"
                                        onclick="window.StudioUI.handleOrientationSettingChange('portrait', 'slider_rows', 1)">
                                    صف واحد كلاسيكي
                                </button>
                                <button class="sb-seg-btn ${Number(t.slider_rows)===2?"active":""}"
                                        onclick="window.StudioUI.handleOrientationSettingChange('portrait', 'slider_rows', 2)">
                                    صفين مزدوجين ⚡
                                </button>
                            </div>
                            ${t.scroll_direction==="vertical"?'<span style="font-size:0.72rem; color:#EF4444; display:block; margin-top:4px;">متاح فقط في وضع التمرير الأفقي (السلايدر)</span>':""}
                        </div>

                        <div class="sb-field-card">
                            <label class="sb-field-label">اتجاه كرت المنتج بالجوال</label>
                            <div class="sb-segmented-control">
                                <button class="sb-seg-btn ${(t.card_orientation||"portrait")==="portrait"?"active":""}"
                                        onclick="window.StudioUI.handleOrientationSettingChange('portrait', 'card_orientation', 'portrait')">
                                    📱 بالطول
                                </button>
                                <button class="sb-seg-btn ${t.card_orientation==="landscape"?"active":""}"
                                        onclick="window.StudioUI.handleOrientationSettingChange('portrait', 'card_orientation', 'landscape')">
                                    🖥️ بالعرض
                                </button>
                            </div>
                        </div>

                        <!-- اختيار شكل الكرت للجوال -->
                        <div class="sb-field-card" style="margin-top:12px;">
                            <label class="sb-field-label">🎨 شكل وتصميم الكرت (الجوال)</label>
                            <div class="sb-card-style-grid">
                                ${[{key:"classic",icon:"🟦",label:"كلاسيكي"},{key:"minimal",icon:"🌫️",label:"مبسط"},{key:"bold",icon:"🔡",label:"بولد"},{key:"landscape_row",icon:"↔️",label:"عريض أفقي"},{key:"magazine",icon:"📰",label:"مجلة"},{key:"glass",icon:"🔮",label:"زجاجي"}].map(i=>`
                                    <button class="sb-card-style-btn ${(t.card_style||"classic")===i.key?"active":""}"
                                            onclick="window.StudioUI.handleCardStyleChange('portrait', '${i.key}')">
                                        <span class="csb-icon">${i.icon}</span>
                                        <span class="csb-label">${i.label}</span>
                                    </button>
                                `).join("")}
                            </div>
                        </div>

                        <!-- أشرطة المقاسات للجوال (بلا لاغ) -->
                        <div class="sb-card-group" style="background:var(--sb-surface); margin-top:16px;">
                            <div class="sb-group-header" style="margin-bottom:12px;">
                                <i class="fas fa-ruler-combined" style="color:var(--sb-accent);"></i>
                                <h4 style="margin:0; font-size:0.9rem;">📐 أبعاد وحجم الكروت</h4>
                            </div>
                            
                            <div class="sb-fields-grid">
                                <div class="sb-field-card" style="${t.scroll_direction==="vertical"?"opacity:0.45; pointer-events:none;":""}">
                                    <div class="sb-slider-label">
                                        <span>↔️ عرض الكرت:</span>
                                        <strong id="val-port-width">${(t.card_custom_width||0)===0?"تلقائي":(t.card_custom_width||0)+"px"}</strong>
                                    </div>
                                    <input type="range" min="0" max="360" step="5" class="sb-range-slider"
                                           value="${t.card_custom_width||0}"
                                           oninput="
                                               const v = Number(this.value);
                                               document.getElementById('val-port-width').textContent = v === 0 ? 'تلقائي' : v + 'px';
                                               window.StudioUI.handleDimensionSliderChange('portrait', 'card_custom_width', v);
                                           " />
                                    ${t.scroll_direction==="vertical"?'<span style="font-size:0.72rem; color:#EF4444; display:block; margin-top:3px;">متاح فقط في السلايدر الأفقي</span>':""}
                                </div>

                                <div class="sb-field-card">
                                    <div class="sb-slider-label">
                                        <span>↕️ ارتفاع الكرت كامل:</span>
                                        <strong id="val-port-height">${(t.card_custom_height||0)===0?"تلقائي":(t.card_custom_height||0)+"px"}</strong>
                                    </div>
                                    <input type="range" min="0" max="400" step="10" class="sb-range-slider"
                                           value="${t.card_custom_height||0}"
                                           oninput="
                                               const v = Number(this.value);
                                               document.getElementById('val-port-height').textContent = v === 0 ? 'تلقائي' : v + 'px';
                                               window.StudioUI.handleDimensionSliderChange('portrait', 'card_custom_height', v);
                                           " />
                                </div>

                                <div class="sb-field-card" style="grid-column: 1 / -1;">
                                    <div class="sb-slider-label">
                                        <span>🖼️ ارتفاع الصورة فقط:</span>
                                        <strong id="val-port-img-height">${(t.img_custom_height||0)===0?"تلقائي":(t.img_custom_height||0)+"px"}</strong>
                                    </div>
                                    <input type="range" min="0" max="300" step="10" class="sb-range-slider"
                                           value="${t.img_custom_height||0}"
                                           oninput="
                                               const v = Number(this.value);
                                               document.getElementById('val-port-img-height').textContent = v === 0 ? 'تلقائي' : v + 'px';
                                               window.StudioUI.handleDimensionSliderChange('portrait', 'img_custom_height', v);
                                           " />
                                </div>
                            </div>
                        </div>
                    </div>
                `:u==="landscape"?`
                    <!-- إعدادات الكمبيوتر (Landscape) -->
                    <div class="sb-fields-grid" style="margin-top:14px;">
                        <div class="sb-field-card">
                            <label class="sb-field-label">اتجاه تمرير المنتجات في الكمبيوتر</label>
                            <div class="sb-segmented-control">
                                <button class="sb-seg-btn ${(t.scroll_direction||"horizontal")==="horizontal"?"active":""}"
                                        onclick="window.StudioUI.handleOrientationSettingChange('landscape', 'scroll_direction', 'horizontal')">
                                    ↔️ أفقي (سلايدر بالماوس 🖱️)
                                </button>
                                <button class="sb-seg-btn ${t.scroll_direction==="vertical"?"active":""}"
                                        onclick="window.StudioUI.handleOrientationSettingChange('landscape', 'scroll_direction', 'vertical')">
                                    ↕️ عمودي (شبكة كبرى)
                                </button>
                            </div>
                        </div>

                        <!-- عدد الأعمدة في الكمبيوتر -->
                        <div class="sb-field-card" style="${(t.scroll_direction||"horizontal")!=="vertical"?"opacity:0.45; pointer-events:none;":""}">
                            <label class="sb-field-label">عدد الأعمدة في الكمبيوتر</label>
                            <div class="sb-segmented-control">
                                ${[2,3,4,5,6].map(i=>`
                                    <button class="sb-seg-btn ${Number(t.grid_columns||4)===i?"active":""}"
                                            onclick="window.StudioUI.handleOrientationSettingChange('landscape', 'grid_columns', ${i})">
                                        ${i} ${i===4?"⭐":""}
                                    </button>
                                `).join("")}
                            </div>
                            ${(t.scroll_direction||"horizontal")!=="vertical"?'<span style="font-size:0.72rem; color:#EF4444; display:block; margin-top:4px;">متاح فقط في وضع الشبكة العمودية</span>':""}
                        </div>

                        <!-- عدد الصفوف في الكمبيوتر -->
                        <div class="sb-field-card" style="${(t.scroll_direction||"horizontal")!=="vertical"?"opacity:0.45; pointer-events:none;":""}">
                            <label class="sb-field-label">عدد الصفوف في الكمبيوتر</label>
                            <div class="sb-segmented-control">
                                <button class="sb-seg-btn ${Number(t.grid_rows||0)===0?"active":""}"
                                        onclick="window.StudioUI.handleOrientationSettingChange('landscape', 'grid_rows', 0)">
                                    ♾️ الكل
                                </button>
                                ${[1,2,3,4,5].map(i=>`
                                    <button class="sb-seg-btn ${Number(t.grid_rows)===i?"active":""}"
                                            onclick="window.StudioUI.handleOrientationSettingChange('landscape', 'grid_rows', ${i})">
                                        ${i} صف
                                    </button>
                                `).join("")}
                            </div>
                            ${(t.scroll_direction||"horizontal")!=="vertical"?'<span style="font-size:0.72rem; color:#EF4444; display:block; margin-top:4px;">متاح فقط في وضع الشبكة العمودية</span>':""}
                        </div>

                        <!-- صفوف السلايدر في الكمبيوتر -->
                        <div class="sb-field-card" style="${t.scroll_direction==="vertical"?"opacity:0.45; pointer-events:none;":""}">
                            <label class="sb-field-label">صفوف السلايدر في الكمبيوتر</label>
                            <div class="sb-segmented-control">
                                <button class="sb-seg-btn ${(Number(t.slider_rows)||1)===1?"active":""}"
                                        onclick="window.StudioUI.handleOrientationSettingChange('landscape', 'slider_rows', 1)">
                                    صف واحد كلاسيكي
                                </button>
                                <button class="sb-seg-btn ${Number(t.slider_rows)===2?"active":""}"
                                        onclick="window.StudioUI.handleOrientationSettingChange('landscape', 'slider_rows', 2)">
                                    صفين مزدوجين ⚡
                                </button>
                            </div>
                            ${t.scroll_direction==="vertical"?'<span style="font-size:0.72rem; color:#EF4444; display:block; margin-top:4px;">متاح فقط في وضع التمرير الأفقي (السلايدر)</span>':""}
                        </div>

                        <div class="sb-field-card">
                            <label class="sb-field-label">اتجاه كرت المنتج في الكمبيوتر</label>
                            <div class="sb-segmented-control">
                                <button class="sb-seg-btn ${(t.card_orientation||"portrait")==="portrait"?"active":""}"
                                        onclick="window.StudioUI.handleOrientationSettingChange('landscape', 'card_orientation', 'portrait')">
                                    📱 بالطول
                                </button>
                                <button class="sb-seg-btn ${(t.card_orientation||"landscape")==="landscape"?"active":""}"
                                        onclick="window.StudioUI.handleOrientationSettingChange('landscape', 'card_orientation', 'landscape')">
                                    🖥️ بالعرض (أنيق للكمبيوتر 🌟)
                                </button>
                            </div>
                        </div>

                        <!-- اختيار شكل الكرت للكمبيوتر -->
                        <div class="sb-field-card" style="margin-top:12px;">
                            <label class="sb-field-label">🎨 شكل وتصميم الكرت (الكمبيوتر)</label>
                            <div class="sb-card-style-grid">
                                ${[{key:"classic",icon:"🟦",label:"كلاسيكي"},{key:"minimal",icon:"🌫️",label:"مبسط"},{key:"bold",icon:"🔡",label:"بولد"},{key:"landscape_row",icon:"↔️",label:"عريض أفقي"},{key:"magazine",icon:"📰",label:"مجلة"},{key:"glass",icon:"🔮",label:"زجاجي"}].map(i=>`
                                    <button class="sb-card-style-btn ${(t.card_style||"classic")===i.key?"active":""}"
                                            onclick="window.StudioUI.handleCardStyleChange('landscape', '${i.key}')">
                                        <span class="csb-icon">${i.icon}</span>
                                        <span class="csb-label">${i.label}</span>
                                    </button>
                                `).join("")}
                            </div>
                        </div>

                        <!-- أشرطة المقاسات للكمبيوتر (بلا لاغ) -->
                        <div class="sb-card-group" style="background:var(--sb-surface); margin-top:16px;">
                            <div class="sb-group-header" style="margin-bottom:12px;">
                                <i class="fas fa-ruler-combined" style="color:var(--sb-accent);"></i>
                                <h4 style="margin:0; font-size:0.9rem;">📐 أبعاد وحجم الكروت بالكمبيوتر</h4>
                            </div>
                            
                            <div class="sb-fields-grid">
                                <div class="sb-field-card" style="${t.scroll_direction==="vertical"?"opacity:0.45; pointer-events:none;":""}">
                                    <div class="sb-slider-label">
                                        <span>↔️ عرض الكرت:</span>
                                        <strong id="val-land-width">${(t.card_custom_width||0)===0?"تلقائي":(t.card_custom_width||0)+"px"}</strong>
                                    </div>
                                    <input type="range" min="0" max="450" step="10" class="sb-range-slider"
                                           value="${t.card_custom_width||0}"
                                           oninput="
                                               const v = Number(this.value);
                                               document.getElementById('val-land-width').textContent = v === 0 ? 'تلقائي' : v + 'px';
                                               window.StudioUI.handleDimensionSliderChange('landscape', 'card_custom_width', v);
                                           " />
                                    ${t.scroll_direction==="vertical"?'<span style="font-size:0.72rem; color:#EF4444; display:block; margin-top:3px;">متاح فقط في السلايدر الأفقي</span>':""}
                                </div>

                                <div class="sb-field-card">
                                    <div class="sb-slider-label">
                                        <span>↕️ ارتفاع الكرت كامل:</span>
                                        <strong id="val-land-height">${(t.card_custom_height||0)===0?"تلقائي":(t.card_custom_height||0)+"px"}</strong>
                                    </div>
                                    <input type="range" min="0" max="500" step="10" class="sb-range-slider"
                                           value="${t.card_custom_height||0}"
                                           oninput="
                                               const v = Number(this.value);
                                               document.getElementById('val-land-height').textContent = v === 0 ? 'تلقائي' : v + 'px';
                                               window.StudioUI.handleDimensionSliderChange('landscape', 'card_custom_height', v);
                                           " />
                                </div>

                                <div class="sb-field-card" style="grid-column: 1 / -1;">
                                    <div class="sb-slider-label">
                                        <span>🖼️ ارتفاع الصورة فقط:</span>
                                        <strong id="val-land-img-height">${(t.img_custom_height||0)===0?"تلقائي":(t.img_custom_height||0)+"px"}</strong>
                                    </div>
                                    <input type="range" min="0" max="400" step="10" class="sb-range-slider"
                                           value="${t.img_custom_height||0}"
                                           oninput="
                                               const v = Number(this.value);
                                               document.getElementById('val-land-img-height').textContent = v === 0 ? 'تلقائي' : v + 'px';
                                               window.StudioUI.handleDimensionSliderChange('landscape', 'img_custom_height', v);
                                           " />
                                </div>
                            </div>
                        </div>
                    </div>
                `:`
                    <!-- تخصيص الأقسام المستقلة (Categories) -->
                    <div class="sb-fields-grid" style="margin-top:14px;">
                        <div class="sb-field-card" style="grid-column: 1 / -1;">
                            <label class="sb-field-label">اختر القسم المراد تخصيصه</label>
                            <select class="sb-select" onchange="window.StudioUI.handleCategorySelectForOverride(this.value)">
                                ${e.map(i=>`
                                    <option value="${i}" ${o.selectedCategoryForOverride===i?"selected":""}>
                                        ${i} ${r.category_overrides?.[i]?.enabled?"⭐ (مخصص)":""}
                                    </option>
                                `).join("")}
                            </select>
                        </div>

                        <div class="sb-field-card" style="grid-column: 1 / -1;">
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <label class="sb-field-label" style="margin-bottom:0;">تفعيل تصميم فريد لقسم (${o.selectedCategoryForOverride})</label>
                                <label class="sb-switch">
                                    <input type="checkbox" ${s?"checked":""} 
                                           onchange="window.StudioUI.toggleCategoryOverrideEnabled('${o.selectedCategoryForOverride}', this.checked)" />
                                    <span class="sb-slider"></span>
                                </label>
                            </div>
                        </div>

                        ${s?`
                            <div class="sb-field-card">
                                <label class="sb-field-label">اتجاه التمرير لقسم (${o.selectedCategoryForOverride})</label>
                                <div class="sb-segmented-control">
                                    <button class="sb-seg-btn ${(a.scroll_direction||"horizontal")==="horizontal"?"active":""}"
                                            onclick="window.StudioUI.handleCategoryOverrideChange('${o.selectedCategoryForOverride}', 'scroll_direction', 'horizontal')">
                                        ↔️ أفقي (سلايدر)
                                    </button>
                                    <button class="sb-seg-btn ${a.scroll_direction==="vertical"?"active":""}"
                                            onclick="window.StudioUI.handleCategoryOverrideChange('${o.selectedCategoryForOverride}', 'scroll_direction', 'vertical')">
                                        ↕️ عمودي (شبكة)
                                    </button>
                                </div>
                            </div>

                            <!-- عدد الأعمدة لهذا القسم -->
                            <div class="sb-field-card" style="${(a.scroll_direction||"horizontal")!=="vertical"?"opacity:0.45; pointer-events:none;":""}">
                                <label class="sb-field-label">عدد الأعمدة لهذا القسم</label>
                                <div class="sb-segmented-control">
                                    ${[1,2,3,4,5,6].map(i=>`
                                        <button class="sb-seg-btn ${Number(a.grid_columns||2)===i?"active":""}"
                                                onclick="window.StudioUI.handleCategoryOverrideChange('${o.selectedCategoryForOverride}', 'grid_columns', ${i})">
                                            ${i}
                                        </button>
                                    `).join("")}
                                </div>
                                ${(a.scroll_direction||"horizontal")!=="vertical"?'<span style="font-size:0.72rem; color:#EF4444; display:block; margin-top:4px;">متاح فقط في وضع الشبكة العمودية</span>':""}
                            </div>

                            <!-- عدد الصفوف لهذا القسم -->
                            <div class="sb-field-card" style="${(a.scroll_direction||"horizontal")!=="vertical"?"opacity:0.45; pointer-events:none;":""}">
                                <label class="sb-field-label">عدد الصفوف لهذا القسم</label>
                                <div class="sb-segmented-control">
                                    <button class="sb-seg-btn ${Number(a.grid_rows||0)===0?"active":""}"
                                            onclick="window.StudioUI.handleCategoryOverrideChange('${o.selectedCategoryForOverride}', 'grid_rows', 0)">
                                        ♾️ الكل
                                    </button>
                                    ${[1,2,3,4].map(i=>`
                                        <button class="sb-seg-btn ${Number(a.grid_rows)===i?"active":""}"
                                                onclick="window.StudioUI.handleCategoryOverrideChange('${o.selectedCategoryForOverride}', 'grid_rows', ${i})">
                                            ${i} صف
                                        </button>
                                    `).join("")}
                                </div>
                                ${(a.scroll_direction||"horizontal")!=="vertical"?'<span style="font-size:0.72rem; color:#EF4444; display:block; margin-top:4px;">متاح فقط في وضع الشبكة العمودية</span>':""}
                            </div>

                            <!-- صفوف السلايدر لهذا القسم -->
                            <div class="sb-field-card" style="${a.scroll_direction==="vertical"?"opacity:0.45; pointer-events:none;":""}">
                                <label class="sb-field-label">صفوف السلايدر لهذا القسم</label>
                                <div class="sb-segmented-control">
                                    <button class="sb-seg-btn ${(Number(a.slider_rows)||1)===1?"active":""}"
                                            onclick="window.StudioUI.handleCategoryOverrideChange('${o.selectedCategoryForOverride}', 'slider_rows', 1)">
                                        صف واحد
                                    </button>
                                    <button class="sb-seg-btn ${Number(a.slider_rows)===2?"active":""}"
                                            onclick="window.StudioUI.handleCategoryOverrideChange('${o.selectedCategoryForOverride}', 'slider_rows', 2)">
                                        صفين مزدوجين ⚡
                                    </button>
                                </div>
                                ${a.scroll_direction==="vertical"?'<span style="font-size:0.72rem; color:#EF4444; display:block; margin-top:4px;">متاح فقط في وضع التمرير الأفقي (السلايدر)</span>':""}
                            </div>

                            <div class="sb-field-card">
                                <label class="sb-field-label">اتجاه كرت المنتج في هذا القسم</label>
                                <div class="sb-segmented-control">
                                    <button class="sb-seg-btn ${(a.card_orientation||"portrait")==="portrait"?"active":""}"
                                            onclick="window.StudioUI.handleCategoryOverrideChange('${o.selectedCategoryForOverride}', 'card_orientation', 'portrait')">
                                        📱 بالطول
                                    </button>
                                    <button class="sb-seg-btn ${a.card_orientation==="landscape"?"active":""}"
                                            onclick="window.StudioUI.handleCategoryOverrideChange('${o.selectedCategoryForOverride}', 'card_orientation', 'landscape')">
                                        🖥️ بالعرض
                                    </button>
                                </div>
                            </div>

                            <!-- اختيار شكل الكرت لهذا القسم -->
                            <div class="sb-field-card">
                                <label class="sb-field-label">🎨 شكل وتصميم الكرت لهذا القسم</label>
                                <div class="sb-card-style-grid">
                                    ${[{key:"classic",icon:"🟦",label:"كلاسيكي"},{key:"minimal",icon:"🌫️",label:"مبسط"},{key:"bold",icon:"🔡",label:"بولد"},{key:"landscape_row",icon:"↔️",label:"عريض أفقي"},{key:"magazine",icon:"📰",label:"مجلة"},{key:"glass",icon:"🔮",label:"زجاجي"}].map(i=>`
                                        <button class="sb-card-style-btn ${(a.card_style||"classic")===i.key?"active":""}"
                                                onclick="window.StudioUI.handleCategoryOverrideChange('${o.selectedCategoryForOverride}', 'card_style', '${i.key}')">
                                            <span class="csb-icon">${i.icon}</span>
                                            <span class="csb-label">${i.label}</span>
                                        </button>
                                    `).join("")}
                                </div>
                            </div>

                            <!-- أشرطة المقاسات لهذا القسم -->
                            <div class="sb-card-group" style="background:var(--sb-surface); margin-top:16px; grid-column: 1 / -1;">
                                <div class="sb-group-header" style="margin-bottom:12px;">
                                    <i class="fas fa-ruler-combined" style="color:var(--sb-accent);"></i>
                                    <h4 style="margin:0; font-size:0.9rem;">📐 أبعاد كروت قسم (${o.selectedCategoryForOverride})</h4>
                                </div>
                                
                                <div class="sb-fields-grid">
                                    <div class="sb-field-card" style="${a.scroll_direction==="vertical"?"opacity:0.45; pointer-events:none;":""}">
                                        <div class="sb-slider-label">
                                            <span>↔️ عرض الكرت:</span>
                                            <strong id="val-cat-width">${(a.card_custom_width||0)===0?"تلقائي":(a.card_custom_width||0)+"px"}</strong>
                                        </div>
                                        <input type="range" min="0" max="420" step="5" class="sb-range-slider"
                                               value="${a.card_custom_width||0}"
                                               oninput="
                                                   const v = Number(this.value);
                                                   document.getElementById('val-cat-width').textContent = v === 0 ? 'تلقائي' : v + 'px';
                                                   window.StudioUI.handleCategoryDimensionChange('${o.selectedCategoryForOverride}', 'card_custom_width', v);
                                               " />
                                        ${a.scroll_direction==="vertical"?'<span style="font-size:0.72rem; color:#EF4444; display:block; margin-top:3px;">متاح فقط في السلايدر الأفقي</span>':""}
                                    </div>

                                    <div class="sb-field-card">
                                        <div class="sb-slider-label">
                                            <span>↕️ ارتفاع الكرت كامل:</span>
                                            <strong id="val-cat-height">${(a.card_custom_height||0)===0?"تلقائي":(a.card_custom_height||0)+"px"}</strong>
                                        </div>
                                        <input type="range" min="0" max="480" step="10" class="sb-range-slider"
                                               value="${a.card_custom_height||0}"
                                               oninput="
                                                   const v = Number(this.value);
                                                   document.getElementById('val-cat-height').textContent = v === 0 ? 'تلقائي' : v + 'px';
                                                   window.StudioUI.handleCategoryDimensionChange('${o.selectedCategoryForOverride}', 'card_custom_height', v);
                                               " />
                                    </div>

                                    <div class="sb-field-card" style="grid-column: 1 / -1;">
                                        <div class="sb-slider-label">
                                            <span>🖼️ ارتفاع صورة المنتج فقط:</span>
                                            <strong id="val-cat-img-height">${(a.img_custom_height||0)===0?"تلقائي":(a.img_custom_height||0)+"px"}</strong>
                                        </div>
                                        <input type="range" min="0" max="380" step="10" class="sb-range-slider"
                                               value="${a.img_custom_height||0}"
                                               oninput="
                                                   const v = Number(this.value);
                                                   document.getElementById('val-cat-img-height').textContent = v === 0 ? 'تلقائي' : v + 'px';
                                                   window.StudioUI.handleCategoryDimensionChange('${o.selectedCategoryForOverride}', 'img_custom_height', v);
                                               " />
                                    </div>
                                </div>
                            </div>

                            <div style="grid-column: 1 / -1; display:flex; justify-content:flex-end;">
                                <button class="sb-btn sb-btn-danger" onclick="window.StudioUI.deleteCategoryOverride('${o.selectedCategoryForOverride}')">
                                    🗑️ حذف تخصيص ${o.selectedCategoryForOverride} والعودة للعام
                                </button>
                            </div>
                        `:`
                            <div style="grid-column: 1 / -1; text-align:center; padding:20px; color:var(--sb-muted); font-size:0.85rem;">
                                هذا القسم يتبع حالياً الإعدادات العامة للمتجر. قم بتفعيل الخيار أعلاه لضبط مظهر خاص به!
                            </div>
                        `}
                    </div>
                `}
            </div>

            <!-- بطاقة تخصيص وتصميم زر إضافة إلى السلة -->
            <div class="sb-card-group highlight">
                <div class="sb-group-header">
                    <i class="fas fa-cart-plus" style="color:var(--sb-accent);"></i>
                    <h3>تخصيص وتصميم زر إضافة إلى السلة</h3>
                </div>

                <div class="sb-fields-grid">
                    <div class="sb-field-card" style="grid-column: 1 / -1;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <div>
                                <label class="sb-field-label" style="margin-bottom:2px;">إظهار زر الإضافة السريعة للسلة في الكروت</label>
                                <small style="font-size:0.75rem; color:var(--sb-muted);">يتيح للعملاء إضافة المنتج مباشرة بنقرة واحدة</small>
                            </div>
                            <label class="sb-switch">
                                <input type="checkbox" ${r.show_quick_add!==!1?"checked":""} 
                                       onchange="window.StudioUI.handleProductsSettingChange('show_quick_add', this.checked)" />
                                <span class="sb-slider"></span>
                            </label>
                        </div>
                    </div>

                    ${r.show_quick_add!==!1?`
                        <!-- أشكال وتصاميم الزر -->
                        <div class="sb-field-card" style="grid-column: 1 / -1;">
                            <label class="sb-field-label">🎨 شكل وتصميم زر السلة</label>
                            <div class="sb-card-style-grid" style="grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));">
                                ${[{key:"circle_icon",icon:"🔘",label:"دائري ناعم"},{key:"pill_text",icon:"💊",label:"كبسولي بنص"},{key:"rounded_box",icon:"⬛",label:"مربع ناعم"},{key:"full_bottom",icon:"🌟",label:"عريض بالأسفل"},{key:"outlined",icon:"🔲",label:"مؤطر شفاف"},{key:"gradient_glow",icon:"🔮",label:"متدرج متوهج"},{key:"floating_action",icon:"⚡",label:"عائم بالصورة"}].map(i=>`
                                        <button class="sb-card-style-btn ${(r.add_to_cart_btn?.style||"circle_icon")===i.key?"active":""}"
                                                onclick="window.StudioUI.handleAddToCartBtnSettingChange('style', '${i.key}')">
                                            <span class="csb-icon">${i.icon}</span>
                                            <span class="csb-label">${i.label}</span>
                                        </button>
                                    `).join("")}
                            </div>
                        </div>

                        <!-- أيقونة الزر -->
                        <div class="sb-field-card">
                            <label class="sb-field-label">أيقونة الزر</label>
                            <div class="sb-segmented-control">
                                ${[{icon:"fa-plus",label:"➕ زائد"},{icon:"fa-shopping-cart",label:"🛒 عربة"},{icon:"fa-shopping-bag",label:"🛍️ كيس"},{icon:"fa-shopping-basket",label:"🧺 سلة"},{icon:"fa-bolt",label:"⚡ برق"}].map(i=>`
                                        <button class="sb-seg-btn ${(r.add_to_cart_btn?.icon||"fa-plus")===i.icon?"active":""}"
                                                onclick="window.StudioUI.handleAddToCartBtnSettingChange('icon', '${i.icon}')">
                                            ${i.label}
                                        </button>
                                    `).join("")}
                            </div>
                        </div>

                        <!-- نص الزر -->
                        <div class="sb-field-card">
                            <label class="sb-field-label">نص الزر (عند التفعيل)</label>
                            <input type="text" class="sb-input" value="${r.add_to_cart_btn?.text||"أضف للسلة"}"
                                   placeholder="أضف للسلة"
                                   oninput="window.StudioUI.handleAddToCartBtnSettingChange('text', this.value, false)" />
                        </div>

                        <!-- حركة وتفاعل الضغط -->
                        <div class="sb-field-card" style="grid-column: 1 / -1;">
                            <label class="sb-field-label">حركة وتأثير النقر على الزر</label>
                            <div class="sb-segmented-control">
                                ${[{key:"scale",label:"🔍 ضغط وتكبير (Scale)"},{key:"bounce",label:"🚀 ارتداد مرح (Bounce)"},{key:"glow",label:"✨ توهج ضوئي (Glow)"},{key:"none",label:"🚫 بدون حركة"}].map(i=>`
                                        <button class="sb-seg-btn ${(r.add_to_cart_btn?.action_animation||"scale")===i.key?"active":""}"
                                                onclick="window.StudioUI.handleAddToCartBtnSettingChange('action_animation', '${i.key}')">
                                            ${i.label}
                                        </button>
                                    `).join("")}
                            </div>
                        </div>
                    `:""}
                </div>
            </div>

            <!-- خيارات تفاصيل الكروت وحالات المخزون -->
            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-tags" style="color:#F59E0B;"></i>
                    <h3>تفاصيل بطاقة المنتج والمخزون</h3>
                </div>

                <div class="sb-fields-grid">
                    <div class="sb-field-card" style="grid-column: 1 / -1;">
                        <div class="sb-toggles-list">
                            <label class="sb-toggle-row">
                                <span>زر الإضافة السريعة للسلة على البطاقة</span>
                                <input type="checkbox" ${r.show_quick_add!==!1?"checked":""} 
                                       onchange="window.StudioUI.handleProductsSettingChange('show_quick_add', this.checked)" />
                            </label>
                            <label class="sb-toggle-row">
                                <span>شارة حالة المخزون (متوفر / محدود)</span>
                                <input type="checkbox" ${r.show_stock_badge!==!1?"checked":""} 
                                       onchange="window.StudioUI.handleProductsSettingChange('show_stock_badge', this.checked)" />
                            </label>
                            <label class="sb-toggle-row">
                                <span>شارة نسبة الخصم والتخفيض 🔥</span>
                                <input type="checkbox" ${r.show_discount_badge!==!1?"checked":""} 
                                       onchange="window.StudioUI.handleProductsSettingChange('show_discount_badge', this.checked)" />
                            </label>
                            <label class="sb-toggle-row">
                                <span>وسم / فئة المنتج أعلى البطاقة</span>
                                <input type="checkbox" ${r.show_category_tag!==!1?"checked":""} 
                                       onchange="window.StudioUI.handleProductsSettingChange('show_category_tag', this.checked)" />
                            </label>
                        </div>
                    </div>

                    <div class="sb-field-card" style="grid-column: 1 / -1;">
                        <label class="sb-field-label">طريقة التعامل مع المنتجات منتهية المخزون</label>
                        <select class="sb-select" onchange="window.StudioUI.handleProductsSettingChange('out_of_stock_display', this.value)">
                            <option value="badge_at_end" ${r.out_of_stock_display==="badge_at_end"?"selected":""}>نقلها لآخر القائمة مع شارة (نفد المخزون)</option>
                            <option value="hide" ${r.out_of_stock_display==="hide"?"selected":""}>إخفاؤها تماماً من المتجر</option>
                            <option value="normal" ${r.out_of_stock_display==="normal"?"selected":""}>إبقاؤها في موقعها الطبيعي مع شارة</option>
                        </select>
                    </div>

                    <div style="grid-column: 1 / -1;">
                        <button class="sb-btn sb-btn-ghost" style="width:100%; justify-content:center; color:#F87171;" 
                                onclick="window.StudioUI.resetProductsLayoutDefaults()">
                            🔄 استعادة الإعدادات الافتراضية لعرض المنتجات
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `}},nu=class{static render(){const r=o.config.messages||o.config.store_messages||{},u=r.ai_assistant||{},t=Array.isArray(u.quick_actions)&&u.quick_actions.length?u.quick_actions.join(", "):"أريد أفضل العروض المتاحة, كيف أقوم بالطلب والتوصيل؟, تتبع طلبي",e=["fa-robot","fa-headset","fa-user-tie","fa-message","fa-comments","fa-store","fa-cart-shopping","fa-box","fa-bolt","fa-sparkles","fa-circle-question","fa-shield-alt"],a=u.avatar_icon||"fa-robot";return`
        <div class="sb-tab-pane">
            <div class="sb-product-summary">
                <div class="sb-product-summary-card ${u.enabled!==!1?"accent":""}">
                    <span class="label">المساعد</span>
                    <strong>${u.enabled!==!1?"مفعّل":"متوقف"}</strong>
                </div>
                <div class="sb-product-summary-card">
                    <span class="label">الشخصية</span>
                    <strong>${u.persona||"classic"}</strong>
                </div>
                <div class="sb-product-summary-card">
                    <span class="label">الاقتراحات</span>
                    <strong>${u.smart_contextual_actions!==!1?"ذكية":"بسيطة"}</strong>
                </div>
            </div>

            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-shopping-cart" style="color:var(--sb-primary);"></i>
                    <h3>رسائل وتنبيهات السلة والشراء</h3>
                </div>

                <div class="sb-fields-grid">
                    <div class="sb-field-card">
                        <label class="sb-field-label">رسالة نجاح الإضافة للسلة</label>
                        <input type="text" class="sb-input" value="${r.add_to_cart_success||"تمت إضافة المنتج إلى سلتك بنجاح"}" 
                               oninput="window.StudioUI.handleStoreMessageChange('add_to_cart_success', this.value)" />
                    </div>

                    <div class="sb-field-card">
                        <label class="sb-field-label">تنبيه نفاد الكمية / غير متوفر</label>
                        <input type="text" class="sb-input" value="${r.out_of_stock_msg||"عذراً، هذا المنتج غير متوفر حالياً"}" 
                               oninput="window.StudioUI.handleStoreMessageChange('out_of_stock_msg', this.value)" />
                    </div>

                    <div class="sb-field-card">
                        <label class="sb-field-label">رسالة السلة الفارغة</label>
                        <input type="text" class="sb-input" value="${r.empty_cart_title||r.cart_empty_msg||"سلة مشترياتك فارغة حالياً"}" 
                               oninput="window.StudioUI.handleStoreMessageChange('empty_cart_title', this.value)" />
                    </div>

                    <div class="sb-field-card">
                        <label class="sb-field-label">نص زر إتمام الطلب والدفع</label>
                        <input type="text" class="sb-input" value="${r.checkout_btn_label||"إتمام الطلب والدفع"}" 
                               oninput="window.StudioUI.handleStoreMessageChange('checkout_btn_label', this.value)" />
                    </div>
                </div>
            </div>

            <div class="sb-card-group highlight">
                <div class="sb-group-header">
                    <i class="fas fa-robot" style="color:var(--sb-primary);"></i>
                    <h3>تخصيص المساعد الذكي</h3>
                </div>
                <div class="sb-fields-grid">
                    <div class="sb-field-card">
                        <label class="sb-field-label">اسم المساعد</label>
                        <input type="text" class="sb-input" value="${u.name||"مساعد نالش"}" oninput="window.StudioUI.handleAssistantConfigChange('name', this.value)" />
                    </div>
                    <div class="sb-field-card" style="grid-column: 1 / -1;">
                        <label class="sb-field-label">أيقونات المساعد</label>
                        <div class="sb-icon-select-grid">
                            ${e.map(s=>`
                                <button type="button"
                                    class="sb-icon-choice ${a===s?"active":""}"
                                    title="${s}"
                                    onclick="window.StudioUI.handleAssistantConfigChange('avatar_icon', '${s}')">
                                    <i class="fas ${s}"></i>
                                </button>
                            `).join("")}
                        </div>
                    </div>
                    <div class="sb-field-card">
                        <label class="sb-field-label">تفعيل المساعد</label>
                        <label class="sb-toggle-row">
                            <input type="checkbox" ${u.enabled!==!1?"checked":""} onchange="window.StudioUI.handleAssistantConfigChange('enabled', this.checked)" />
                            <span>متاح للزوار</span>
                        </label>
                    </div>
                    <div class="sb-field-card">
                        <label class="sb-field-label">اقتراحات ذكية حسب الصفحة</label>
                        <label class="sb-toggle-row">
                            <input type="checkbox" ${u.smart_contextual_actions!==!1?"checked":""} onchange="window.StudioUI.handleAssistantConfigChange('smart_contextual_actions', this.checked)" />
                            <span>تغيير المقترحات بناءً على السلة والصفحات</span>
                        </label>
                    </div>
                    <div class="sb-field-card">
                        <label class="sb-field-label">ردود ذكية حسب السياق</label>
                        <label class="sb-toggle-row">
                            <input type="checkbox" ${u.smart_contextual_replies!==!1?"checked":""} onchange="window.StudioUI.handleAssistantConfigChange('smart_contextual_replies', this.checked)" />
                            <span>تخصيص الرسائل حسب صفحة المنتج أو السلة</span>
                        </label>
                    </div>
                    <div class="sb-field-card">
                        <label class="sb-field-label">لون تمييز المساعد</label>
                        <input type="color" class="sb-color-input" value="${u.accent_color||"#4F46E5"}" onchange="window.StudioUI.handleAssistantConfigChange('accent_color', this.value)" />
                    </div>
                    <div class="sb-field-card" style="grid-column:1 / -1;">
                        <label class="sb-field-label">أسلوب المساعد</label>
                        <div class="sb-segmented-control" style="grid-template-columns: repeat(4, minmax(0,1fr)); display:grid; gap:6px;">
                            <button class="sb-seg-btn ${u.persona==="classic"?"active":""}" onclick="window.StudioUI.applyAssistantPreset('classic')">كلاسيكي</button>
                            <button class="sb-seg-btn ${u.persona==="premium"?"active":""}" onclick="window.StudioUI.applyAssistantPreset('premium')">مميز</button>
                            <button class="sb-seg-btn ${u.persona==="futuristic"?"active":""}" onclick="window.StudioUI.applyAssistantPreset('futuristic')">مستقبلي</button>
                            <button class="sb-seg-btn ${u.persona==="luxury"?"active":""}" onclick="window.StudioUI.applyAssistantPreset('luxury')">فاخر</button>
                            <button class="sb-seg-btn ${u.persona==="fashion"?"active":""}" onclick="window.StudioUI.applyAssistantPreset('fashion')">موضة</button>
                            <button class="sb-seg-btn ${u.persona==="tech"?"active":""}" onclick="window.StudioUI.applyAssistantPreset('tech')">تقنية</button>
                            <button class="sb-seg-btn ${u.persona==="wellness"?"active":""}" onclick="window.StudioUI.applyAssistantPreset('wellness')">صحة</button>
                            <button class="sb-seg-btn ${u.persona==="beauty"?"active":""}" onclick="window.StudioUI.applyAssistantPreset('beauty')">جمال</button>
                        </div>
                    </div>
                    <div class="sb-field-card" style="grid-column:1 / -1;">
                        <label class="sb-field-label">أسلوب الرد</label>
                        <div class="sb-segmented-control grid-4">
                            <button class="sb-seg-btn ${u.response_style==="friendly"||!u.response_style?"active":""}" onclick="window.StudioUI.handleAssistantConfigChange('response_style', 'friendly')">ودود</button>
                            <button class="sb-seg-btn ${u.response_style==="sales"?"active":""}" onclick="window.StudioUI.handleAssistantConfigChange('response_style', 'sales')">مبيعات</button>
                            <button class="sb-seg-btn ${u.response_style==="luxury"?"active":""}" onclick="window.StudioUI.handleAssistantConfigChange('response_style', 'luxury')">فاخر</button>
                            <button class="sb-seg-btn ${u.response_style==="professional"?"active":""}" onclick="window.StudioUI.handleAssistantConfigChange('response_style', 'professional')">مهني</button>
                        </div>
                    </div>
                    <div class="sb-field-card" style="grid-column:1 / -1;">
                        <label class="sb-field-label">سلوك المساعد</label>
                        <div class="sb-segmented-control grid-4">
                            <button class="sb-seg-btn ${u.behavior_mode==="support"||!u.behavior_mode?"active":""}" onclick="window.StudioUI.handleAssistantConfigChange('behavior_mode', 'support')">دعم</button>
                            <button class="sb-seg-btn ${u.behavior_mode==="sales"?"active":""}" onclick="window.StudioUI.handleAssistantConfigChange('behavior_mode', 'sales')">مبيعات</button>
                            <button class="sb-seg-btn ${u.behavior_mode==="advisor"?"active":""}" onclick="window.StudioUI.handleAssistantConfigChange('behavior_mode', 'advisor')">مستشار</button>
                            <button class="sb-seg-btn ${u.behavior_mode==="concierge"?"active":""}" onclick="window.StudioUI.handleAssistantConfigChange('behavior_mode', 'concierge')">مرافق</button>
                        </div>
                    </div>
                    <div class="sb-field-card" style="grid-column:1 / -1;">
                        <label class="sb-field-label">طول الرسائل</label>
                        <div class="sb-segmented-control grid-3">
                            <button class="sb-seg-btn ${u.conversation_style==="short"?"active":""}" onclick="window.StudioUI.handleAssistantConfigChange('conversation_style', 'short')">قصير</button>
                            <button class="sb-seg-btn ${u.conversation_style==="balanced"||!u.conversation_style?"active":""}" onclick="window.StudioUI.handleAssistantConfigChange('conversation_style', 'balanced')">متوازن</button>
                            <button class="sb-seg-btn ${u.conversation_style==="detailed"?"active":""}" onclick="window.StudioUI.handleAssistantConfigChange('conversation_style', 'detailed')">تفصيلي</button>
                        </div>
                    </div>
                    <div class="sb-field-card">
                        <label class="sb-field-label">شكل الزر العائم</label>
                        <div class="sb-segmented-control grid-3">
                            <button class="sb-seg-btn ${u.button_style==="pill"?"active":""}" onclick="window.StudioUI.handleAssistantConfigChange('button_style', 'pill')">Pill</button>
                            <button class="sb-seg-btn ${u.button_style==="bubble"?"active":""}" onclick="window.StudioUI.handleAssistantConfigChange('button_style', 'bubble')">Bubble</button>
                            <button class="sb-seg-btn ${u.button_style==="minimal"?"active":""}" onclick="window.StudioUI.handleAssistantConfigChange('button_style', 'minimal')">Minimal</button>
                        </div>
                    </div>
                    <div class="sb-field-card">
                        <label class="sb-field-label">شكل الروبوت</label>
                        <div class="sb-segmented-control grid-4">
                            <button class="sb-seg-btn ${u.avatar_style==="pulse"||!u.avatar_style?"active":""}" onclick="window.StudioUI.handleAssistantConfigChange('avatar_style', 'pulse')">نبض</button>
                            <button class="sb-seg-btn ${u.avatar_style==="orb"?"active":""}" onclick="window.StudioUI.handleAssistantConfigChange('avatar_style', 'orb')">كرية</button>
                            <button class="sb-seg-btn ${u.avatar_style==="halo"?"active":""}" onclick="window.StudioUI.handleAssistantConfigChange('avatar_style', 'halo')">هالة</button>
                            <button class="sb-seg-btn ${u.avatar_style==="hover"?"active":""}" onclick="window.StudioUI.handleAssistantConfigChange('avatar_style', 'hover')">تحريك</button>
                        </div>
                    </div>
                    <div class="sb-field-card">
                        <label class="sb-field-label">مكان الزر</label>
                        <div class="sb-segmented-control grid-2">
                            <button class="sb-seg-btn ${u.position!=="bottom-left"?"active":""}" onclick="window.StudioUI.handleAssistantConfigChange('position', 'bottom-right')">يمين</button>
                            <button class="sb-seg-btn ${u.position==="bottom-left"?"active":""}" onclick="window.StudioUI.handleAssistantConfigChange('position', 'bottom-left')">يسار</button>
                        </div>
                    </div>
                    <div class="sb-field-card" style="grid-column:1 / -1;">
                        <label class="sb-field-label">وضع المساعد (الحالة)</label>
                        <input type="text" class="sb-input" value="${u.status_text||"متصل للرد الفوري"}" oninput="window.StudioUI.handleAssistantConfigChange('status_text', this.value)" />
                    </div>
                    <div class="sb-field-card" style="grid-column:1 / -1;">
                        <label class="sb-field-label">الوظائف الذكية السريعة</label>
                        <textarea class="sb-textarea" oninput="window.StudioUI.handleAssistantQuickActionsChange(this.value)">${t}</textarea>
                    </div>
                    <div class="sb-field-card" style="grid-column:1 / -1;">
                        <label class="sb-field-label">رسالة ترحيب المساعد الذكي</label>
                        <input type="text" class="sb-input" value="${r.chatbot_greeting||"أهلاً بك! كيف يمكنني مساعدتك اليوم؟ 🤖"}" 
                               oninput="window.StudioUI.handleStoreMessageChange('chatbot_greeting', this.value)" />
                    </div>
                </div>
            </div>

            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-search" style="color:#06B6D4;"></i>
                    <h3>نصوص البحث والتواصل</h3>
                </div>

                <div class="sb-fields-grid">
                    <div class="sb-field-card">
                        <label class="sb-field-label">تلميح حقل البحث (Placeholder)</label>
                        <input type="text" class="sb-input" value="${r.search_placeholder||"ابحث عن منتج، فئة، أو ماركة..."}" 
                               oninput="window.StudioUI.handleStoreMessageChange('search_placeholder', this.value)" />
                    </div>

                    <div class="sb-field-card" style="grid-column: 1 / -1;">
                        <label class="sb-field-label">رسالة نجاح استلام الطلب</label>
                        <textarea class="sb-textarea" oninput="window.StudioUI.handleStoreMessageChange('order_success_msg', this.value)">${r.order_success_msg||"شكراً لثقتك بنا. سيتم تجهيز وتوصيل طلبك في أقرب وقت."}</textarea>
                    </div>
                </div>
            </div>
        </div>
        `}},lu=class{static render(){const r=o.config.products_settings||m.products_settings;(!Array.isArray(o.config.layout_blocks)||o.config.layout_blocks.length===0)&&(o.config.layout_blocks=JSON.parse(JSON.stringify(m.layout_blocks||[])));const u=o.config.layout_blocks||[];return`
        <div class="sb-tab-pane">
            <div class="sb-card-group highlight">
                <div class="sb-group-header">
                    <i class="fas fa-layer-group" style="color:var(--sb-primary);"></i>
                    <h3>قوالب هيكلية ذكية للصفحة الرئيسية</h3>
                </div>
                <div class="sb-segmented-control grid-4">
                    <button class="sb-seg-btn active" onclick="window.StudioUI.applySectionPreset('balanced')">متوازن</button>
                    <button class="sb-seg-btn" onclick="window.StudioUI.applySectionPreset('catalog')">كتالوج</button>
                    <button class="sb-seg-btn" onclick="window.StudioUI.applySectionPreset('luxury')">فاخر</button>
                    <button class="sb-seg-btn" onclick="window.StudioUI.applySectionPreset('promo')">ترويجي</button>
                </div>
            </div>

            <!-- بطاقة نمط وتجميع الأقسام الرئيسية -->
            <div class="sb-card-group highlight">
                <div class="sb-group-header">
                    <i class="fas fa-boxes-stacked" style="color:var(--sb-primary);"></i>
                    <h3>طريقة ونمط عرض الأقسام والمنتجات</h3>
                </div>

                <div class="sb-fields-grid">
                    <div class="sb-field-card" style="grid-column: 1 / -1;">
                        <label class="sb-field-label">النمط العام لعرض الأقسام بالصفحة الرئيسية</label>
                        <div class="sb-segmented-control grid-2">
                            <button class="sb-seg-btn ${r.display_mode==="by_categories_sections"||!r.display_mode?"active":""}"
                                    onclick="window.StudioUI.handleProductsSettingChange('display_mode', 'by_categories_sections')">
                                📂 أقسام لكل فئة
                            </button>
                            <button class="sb-seg-btn ${r.display_mode==="tabs_by_category"?"active":""}"
                                    onclick="window.StudioUI.handleProductsSettingChange('display_mode', 'tabs_by_category')">
                                📑 تبويبات فئات
                            </button>
                            <button class="sb-seg-btn ${r.display_mode==="all_flat_grid"?"active":""}"
                                    onclick="window.StudioUI.handleProductsSettingChange('display_mode', 'all_flat_grid')">
                                📦 شبكة موحدة
                            </button>
                            <button class="sb-seg-btn ${r.display_mode==="featured_first"?"active":""}"
                                    onclick="window.StudioUI.handleProductsSettingChange('display_mode', 'featured_first')">
                                ⭐ المميزة أولاً
                            </button>
                        </div>
                    </div>

                    <div style="grid-column: 1 / -1; display:flex; justify-content:flex-end;">
                        <button class="sb-btn sb-btn-secondary" style="font-size:0.85rem;" onclick="window.StudioUI.setActiveTab('products_layout')">
                            <i class="fas fa-sliders-h"></i> <span>تخصيص أعمدة وسلايدر المنتجات 👈</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- بطاقة ترتيب وهيكل الأقسام الرئيسية -->
            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-layer-group" style="color:var(--sb-primary);"></i>
                    <h3>ترتيب وظهور الأقسام في الصفحة الرئيسية</h3>
                </div>

                <div class="sb-sections-list">
                    ${u.map((t,e)=>{const a=t.visible!==!1,s=t.settings||{},i=t.type==="hero"?"fa-store":t.type==="categories"?"fa-tags":t.type==="products"?"fa-boxes-stacked":t.type==="banner"?"fa-bullhorn":"fa-star",n=t.type==="hero"?"واجهة المتجر والكرت الرئيسي":t.type==="categories"?"شريط الفئات والتصنيفات":t.type==="products"?"منطقة عرض المنتجات":t.type==="banner"?"بانر إعلاني ترويجي":"قسم مخصص";return`
                            <div class="sb-accordion-card ${a?"":"disabled"}" id="sec-acc-${e}">
                                <div class="sb-accordion-header" onclick="window.StudioUI.toggleAccordion(${e})">
                                    <div style="display:flex; align-items:center; gap:10px;">
                                        <i class="fas ${i}" style="color:var(--sb-primary);"></i>
                                        <div>
                                            <strong style="font-size:0.92rem; color:var(--sb-text); display:block;">${t.title||n}</strong>
                                            <small style="font-size:0.75rem; color:var(--sb-muted);">${n}</small>
                                        </div>
                                    </div>
                                    <div class="sb-accordion-actions" onclick="event.stopPropagation();">
                                        <button class="sb-icon-tool" onclick="window.StudioUI.moveSectionBlock(${e}, -1)" title="تحريك لأعلى" ${e===0?"disabled":""}>
                                            <i class="fas fa-arrow-up"></i>
                                        </button>
                                        <button class="sb-icon-tool" onclick="window.StudioUI.moveSectionBlock(${e}, 1)" title="تحريك لأسفل" ${e===u.length-1?"disabled":""}>
                                            <i class="fas fa-arrow-down"></i>
                                        </button>
                                        <button class="sb-icon-tool" onclick="window.StudioUI.toggleSectionVisibility(${e})" title="${a?"إخفاء القسم":"إظهار القسم"}">
                                            <i class="fas ${a?"fa-eye":"fa-eye-slash"}" style="${a?"":"color:#EF4444"}"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="sb-accordion-body">
                                    <div class="sb-field-card">
                                        <label class="sb-field-label">عنوان القسم</label>
                                        <input type="text" class="sb-input" value="${t.title||""}" 
                                               oninput="window.StudioUI.handleBlockFieldChange(${e}, 'title', this.value)" />
                                    </div>

                                    <div class="sb-field-card">
                                        <label class="sb-field-label">العنوان الفرعي / الوصف</label>
                                        <input type="text" class="sb-input" value="${t.subtitle||""}" 
                                               oninput="window.StudioUI.handleBlockFieldChange(${e}, 'subtitle', this.value)" />
                                    </div>

                                    ${t.type==="hero"?`
                                        <div class="sb-field-card">
                                            <label class="sb-field-label">نص زر الدعوة للشراء (CTA Button)</label>
                                            <input type="text" class="sb-input" value="${s.cta_text||"تسوق الآن"}" 
                                                   oninput="window.StudioUI.handleBlockSettingChange(${e}, 'cta_text', this.value)" />
                                        </div>

                                        <div class="sb-field-card">
                                            <div class="sb-slider-label">
                                                <span>📱 ارتفاع كرت الهيرو بالجوال:</span>
                                                <strong id="val-hero-mob-${e}">${(s.hero_mobile_height||0)===0?"تلقائي":(s.hero_mobile_height||0)+"px"}</strong>
                                            </div>
                                            <input type="range" min="0" max="450" step="10" class="sb-range-slider"
                                                   value="${s.hero_mobile_height||0}"
                                                   oninput="
                                                       const v = Number(this.value);
                                                       document.getElementById('val-hero-mob-${e}').textContent = v === 0 ? 'تلقائي' : v + 'px';
                                                       window.StudioUI.handleBlockSettingChange(${e}, 'hero_mobile_height', v);
                                                   " />
                                        </div>

                                        <div class="sb-field-card">
                                            <div class="sb-slider-label">
                                                <span>💻 ارتفاع كرت الهيرو بالكمبيوتر:</span>
                                                <strong id="val-hero-desk-${e}">${(s.hero_desktop_height||0)===0?"تلقائي":(s.hero_desktop_height||0)+"px"}</strong>
                                            </div>
                                            <input type="range" min="0" max="600" step="10" class="sb-range-slider"
                                                   value="${s.hero_desktop_height||0}"
                                                   oninput="
                                                       const v = Number(this.value);
                                                       document.getElementById('val-hero-desk-${e}').textContent = v === 0 ? 'تلقائي' : v + 'px';
                                                       window.StudioUI.handleBlockSettingChange(${e}, 'hero_desktop_height', v);
                                                   " />
                                        </div>
                                    `:""}

                                    ${t.type==="categories"?`
                                        <div class="sb-field-card">
                                            <label class="sb-field-label">طريقة عرض التصنيفات</label>
                                            <div class="sb-segmented-control">
                                                <button class="sb-seg-btn ${(s.categories_style||"chips_slider")==="chips_slider"?"active":""}"
                                                        onclick="window.StudioUI.handleBlockSettingChange(${e}, 'categories_style', 'chips_slider'); window.StudioUI.handleBlockSettingChange(${e}, 'style', 'slider');">
                                                    ↔️ شريط سلايدر
                                                </button>
                                                <button class="sb-seg-btn ${s.categories_style==="grid_matrix"?"active":""}"
                                                        onclick="window.StudioUI.handleBlockSettingChange(${e}, 'categories_style', 'grid_matrix'); window.StudioUI.handleBlockSettingChange(${e}, 'style', 'grid');">
                                                    📦 شبكة أعمدة
                                                </button>
                                            </div>
                                        </div>

                                        <div class="sb-field-card">
                                            <label class="sb-field-label">عدد الأعمدة (في وضع الشبكة)</label>
                                            <div class="sb-segmented-control">
                                                ${[2,3,4,5,6].map(c=>`
                                                    <button class="sb-seg-btn ${Number(s.grid_columns||4)===c?"active":""}"
                                                            onclick="window.StudioUI.handleBlockSettingChange(${e}, 'grid_columns', ${c})">
                                                        ${c}
                                                    </button>
                                                `).join("")}
                                            </div>
                                        </div>

                                        <div class="sb-field-card">
                                            <label class="sb-field-label">حجم أيقونات الفئات</label>
                                            <div class="sb-segmented-control">
                                                <button class="sb-seg-btn ${s.icon_size==="small"?"active":""}"
                                                        onclick="window.StudioUI.handleBlockSettingChange(${e}, 'icon_size', 'small')">صغير</button>
                                                <button class="sb-seg-btn ${s.icon_size==="medium"||!s.icon_size?"active":""}"
                                                        onclick="window.StudioUI.handleBlockSettingChange(${e}, 'icon_size', 'medium')">متوسط ⭐</button>
                                                <button class="sb-seg-btn ${s.icon_size==="large"?"active":""}"
                                                        onclick="window.StudioUI.handleBlockSettingChange(${e}, 'icon_size', 'large')">كبير</button>
                                            </div>
                                        </div>
                                    `:""}

                                    ${t.type==="banner"?`
                                        <div class="sb-field-card">
                                            <label class="sb-field-label">نص الزر الترويجي</label>
                                            <input type="text" class="sb-input" value="${s.cta_text||"اكتشف المزيد"}" 
                                                   oninput="window.StudioUI.handleBlockSettingChange(${e}, 'cta_text', this.value)" />
                                        </div>

                                        <div class="sb-field-card">
                                            <div class="sb-slider-label">
                                                <span>↕️ ارتفاع البانر الإعلاني:</span>
                                                <strong id="val-banner-${e}">${(s.banner_height||0)===0?"تلقائي":(s.banner_height||0)+"px"}</strong>
                                            </div>
                                            <input type="range" min="0" max="400" step="10" class="sb-range-slider"
                                                   value="${s.banner_height||0}"
                                                   oninput="
                                                       const v = Number(this.value);
                                                       document.getElementById('val-banner-${e}').textContent = v === 0 ? 'تلقائي' : v + 'px';
                                                       window.StudioUI.handleBlockSettingChange(${e}, 'banner_height', v);
                                                   " />
                                        </div>
                                    `:""}
                                </div>
                            </div>
                        `}).join("")}
                </div>
            </div>
        </div>
        `}},cu=class{static render(){const r=o.config.modals_customization||{},u=r.product_details||{},t=r.cart_drawer||{},e=r.store_info||{};return`
        <div class="sb-tab-pane">
            <div class="sb-product-summary">
                <div class="sb-product-summary-card">
                    <span class="label">تفاصيل المنتج</span>
                    <strong>${u.cta_button_text?"مهيأة":"افتراضية"}</strong>
                </div>
                <div class="sb-product-summary-card accent">
                    <span class="label">سلة المشتريات</span>
                    <strong>${t.header_title?"مخصصة":"أساسية"}</strong>
                </div>
                <div class="sb-product-summary-card">
                    <span class="label">سياسات المتجر</span>
                    <strong>${e.delivery_policy?"مكتوبة":"غير مفعلة"}</strong>
                </div>
            </div>

            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-box-open" style="color:var(--sb-primary);"></i>
                    <h3>شيت تفاصيل المنتج (Product Details Sheet)</h3>
                </div>

                <div class="sb-product-mini-actions">
                    <button type="button" class="sb-product-mini-btn active" onclick="window.StudioUI.handleModalFieldChange('product_details', 'cta_button_text', 'إضافة إلى السلة 🛍️')">
                        <i class="fas fa-cart-plus"></i> أضف للسلة
                    </button>
                    <button type="button" class="sb-product-mini-btn" onclick="window.StudioUI.handleModalFieldChange('product_details', 'border_radius', '20px')">
                        <i class="fas fa-crop-simple"></i> زاوية 20
                    </button>
                    <button type="button" class="sb-product-mini-btn" onclick="window.StudioUI.handleModalFieldChange('product_details', 'border_radius', '32px')">
                        <i class="fas fa-crop"></i> زاوية 32
                    </button>
                </div>

                <div class="sb-fields-grid">
                    <div class="sb-field-card">
                        <label class="sb-field-label">نص زر إضافة للسلة</label>
                        <input type="text" class="sb-input" value="${u.cta_button_text||"إضافة إلى السلة 🛍️"}" 
                               oninput="window.StudioUI.handleModalFieldChange('product_details', 'cta_button_text', this.value)" />
                    </div>

                    <div class="sb-field-card">
                        <label class="sb-field-label">استدارة حواف الشيت العلوي</label>
                        <input type="text" class="sb-input" value="${u.border_radius||"24px"}" 
                               onchange="window.StudioUI.handleModalFieldChange('product_details', 'border_radius', this.value)" />
                    </div>
                </div>
            </div>

            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-shopping-bag" style="color:#EC4899;"></i>
                    <h3>نافذة وشيت سلة المشتريات (Cart Drawer)</h3>
                </div>

                <div class="sb-fields-grid">
                    <div class="sb-field-card">
                        <label class="sb-field-label">عنوان نافذة السلة</label>
                        <input type="text" class="sb-input" value="${t.header_title||"سلة مشترياتي 🛒"}" 
                               oninput="window.StudioUI.handleModalFieldChange('cart_drawer', 'header_title', this.value)" />
                    </div>

                    <div class="sb-field-card">
                        <label class="sb-field-label">نص زر إتمام الطلب والدفع</label>
                        <input type="text" class="sb-input" value="${t.checkout_btn_text||"متابعة الطلب والدفع 🚀"}" 
                               oninput="window.StudioUI.handleModalFieldChange('cart_drawer', 'checkout_btn_text', this.value)" />
                    </div>
                </div>
            </div>

            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-info-circle" style="color:#06B6D4;"></i>
                    <h3>نافذة معلومات وسياسات المتجر (Store Info)</h3>
                </div>

                <div class="sb-fields-grid">
                    <div class="sb-field-card" style="grid-column: 1 / -1;">
                        <label class="sb-field-label">سياسة التوصيل والضمان</label>
                        <textarea class="sb-textarea" oninput="window.StudioUI.handleModalFieldChange('store_info', 'delivery_policy', this.value)">${e.delivery_policy||"نوفر التوصيل السريع والدفع عند الاستلام مع ضمان الاسترجاع."}</textarea>
                    </div>
                </div>
            </div>
        </div>
        `}},du=[{key:"primary",label:"اللون الأساسي (Primary)",desc:"الأزرار، الروابط، والعناصر النشطة"},{key:"primary_hover",label:"لون التمرير (Primary Hover)",desc:"لون الأزرار عند التحويم واللمس"},{key:"accent",label:"اللون التكميلي (Accent)",desc:"التدرجات وشارات التميز والعروض"},{key:"bg_body",label:"خلفية المتجر (Body BG)",desc:"الخلفية العامة لكافة صفحات المتجر"},{key:"bg_card",label:"خلفية الكروت (Card BG)",desc:"كروت المنتجات والأقسام والقوائم"},{key:"bg_surface",label:"خلفية السطوح والشرائح (Surface)",desc:"خلفيات البحث وشرائح التصنيفات"},{key:"text_main",label:"النص الأساسي (Text Main)",desc:"العناوين والنصوص البارزة"},{key:"text_muted",label:"النص الثانوي (Text Muted)",desc:"الوصف والأسعار القديمة والتفاصيل"},{key:"border",label:"لون الحدود (Border)",desc:"إطارات الكروت والفواصل والتحديد"},{key:"navbar_bg",label:"خلفية الشريط العلوي (Navbar)",desc:"شريط التنقل العلوي للمتجر"},{key:"bottom_bar_bg",label:"خلفية الشريط السفلي (Bottom Bar)",desc:"شريط التنقل في الموبايل"},{key:"price_color",label:"لون سعر المنتج (Price)",desc:"السعر الحالي المباشر للمنتج"},{key:"badge_bg",label:"بادج الخصومات والعروض",desc:"خلفية شارة التخفيض ونفاد المخزون"},{key:"btn_primary_bg",label:"خلفية الأزرار الرئيسية",desc:"أزرار إضافة للسلة والشراء الفوري"},{key:"chatbot_btn_bg",label:"زر المساعد الذكي / الشات",desc:"الزر العائم للمحادثة الفورية"}],Y=class{static render(r){const u=r==="light",t=u?"light_theme":"dark_theme",e=o.config[t]?.colors||{},a=e.primary||(u?"#4F46E5":"#6366F1"),s=e.bg_body||(u?"#F8FAFC":"#0B1120"),i=e.text_main||(u?"#0F172A":"#F8FAFC"),n=e.accent||(u?"#14B8A6":"#2DD4BF");return`
        <div class="sb-tab-pane">
            <div class="sb-color-topbar">
                <button class="sb-seg-btn ${u?"active":""}" 
                        onclick="window.StudioUI.setActiveTab('light_colors')">
                    ☀️ فاتح
                </button>
                <button class="sb-seg-btn ${u?"":"active"}" 
                        onclick="window.StudioUI.setActiveTab('dark_colors')">
                    🌙 داكن
                </button>
            </div>

            <div class="sb-color-banner">
                <div>
                    <strong>💡 ثيمات جاهزة</strong>
                    <span>اختَر نمطًا متناسقًا لديك في ثوانٍ، أو عدّل الألوان يدويًا.</span>
                </div>
                <button class="sb-btn sb-btn-outline" style="font-size:0.76rem; padding:6px 10px; font-weight:700; white-space:nowrap;"
                        onclick="window.StudioUI.setActiveTab('ai_palette')">
                    <i class="fas fa-palette" style="color:#A78BFA;"></i>
                    <span>تصفح 20 ثيم</span>
                </button>
            </div>

            <!-- صندوق التوليد الذكي متعدد الألوان للوضع الحالي -->
            <div class="sb-card-group highlight" style="background: ${u?"rgba(245, 158, 11, 0.06)":"rgba(99, 102, 241, 0.08)"}; border-color: ${u?"rgba(245, 158, 11, 0.3)":"rgba(99, 102, 241, 0.3)"};">
                <div class="sb-group-header">
                    <i class="fas fa-wand-magic-sparkles" style="color:${u?"#F59E0B":"#818CF8"};"></i>
                    <h3>${u?"المولد الذكي لألوان الوضع الفاتح ☀️":"المولد الذكي لألوان الوضع الداكن 🌙"}</h3>
                </div>

                <p style="font-size:0.82rem; color:var(--sb-muted); line-height:1.45; margin-bottom:12px;">
                    اختر الألوان التي تريدها (الأساسي، الخلفية، الخط، التمييز) وسيقوم المولد بتنسيق واشتقاق باقي عناصر ومكونات المتجر بانسجام تام:
                </p>

                <!-- شبكة اختيار الألوان الأساسية للمولد -->
                <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap:10px; margin-bottom:14px;">
                    <!-- اللون الأساسي -->
                    <div class="sb-field-card" style="padding:8px 10px;">
                        <label style="font-size:0.75rem; color:var(--sb-muted); display:block; margin-bottom:4px; font-weight:700;">🎨 الأساسي (Primary)</label>
                        <div style="display:flex; align-items:center; gap:6px;">
                            <input type="color" id="seed-primary-${t}" value="${a}" class="sb-color-input" style="width:34px; height:30px;" />
                            <span style="font-size:0.75rem; font-family:monospace; color:var(--sb-text);">${a}</span>
                        </div>
                    </div>

                    <!-- لون الخلفية -->
                    <div class="sb-field-card" style="padding:8px 10px;">
                        <label style="font-size:0.75rem; color:var(--sb-muted); display:block; margin-bottom:4px; font-weight:700;">🖼️ الخلفية (Background)</label>
                        <div style="display:flex; align-items:center; gap:6px;">
                            <input type="color" id="seed-bg-${t}" value="${s}" class="sb-color-input" style="width:34px; height:30px;" />
                            <span style="font-size:0.75rem; font-family:monospace; color:var(--sb-text);">${s}</span>
                        </div>
                    </div>

                    <!-- لون الخط -->
                    <div class="sb-field-card" style="padding:8px 10px;">
                        <label style="font-size:0.75rem; color:var(--sb-muted); display:block; margin-bottom:4px; font-weight:700;">✍️ لون النص (Text)</label>
                        <div style="display:flex; align-items:center; gap:6px;">
                            <input type="color" id="seed-text-${t}" value="${i}" class="sb-color-input" style="width:34px; height:30px;" />
                            <span style="font-size:0.75rem; font-family:monospace; color:var(--sb-text);">${i}</span>
                        </div>
                    </div>

                    <!-- لون التمييز -->
                    <div class="sb-field-card" style="padding:8px 10px;">
                        <label style="font-size:0.75rem; color:var(--sb-muted); display:block; margin-bottom:4px; font-weight:700;">⚡ التمييز (Accent)</label>
                        <div style="display:flex; align-items:center; gap:6px;">
                            <input type="color" id="seed-accent-${t}" value="${n}" class="sb-color-input" style="width:34px; height:30px;" />
                            <span style="font-size:0.75rem; font-family:monospace; color:var(--sb-text);">${n}</span>
                        </div>
                    </div>
                </div>

                <!-- أزرار التوليد والتخصيص المخصص -->
                <div style="display:flex; flex-direction:column; gap:8px;">
                    <!-- زر التوليد الشامل للوضع -->
                    <button class="sb-btn sb-btn-primary" style="width:100%; justify-content:center; padding:11px; font-weight:800;"
                            onclick="window.StudioUI.generateSmartForMode('${u?"light":"dark"}')">
                        <i class="fas fa-magic"></i>
                        <span>توليد وتنسيق ذكي لكافة ألوان ${u?"الوضع الفاتح ☀️":"الوضع الداكن 🌙"}</span>
                    </button>

                    <!-- أزرار التخصيص المنفصل لكل جزء -->
                    <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:6px;">
                        <button class="sb-btn sb-btn-outline" style="font-size:0.76rem; padding:7px 4px; justify-content:center; text-align:center;"
                                onclick="window.StudioUI.generateSmartSectionForMode('${u?"light":"dark"}', 'bg')">
                            <i class="fas fa-layer-group"></i>
                            <span>الخلفيات والكروت</span>
                        </button>
                        <button class="sb-btn sb-btn-outline" style="font-size:0.76rem; padding:7px 4px; justify-content:center; text-align:center;"
                                onclick="window.StudioUI.generateSmartSectionForMode('${u?"light":"dark"}', 'buttons')">
                            <i class="fas fa-hand-pointer"></i>
                            <span>الأزرار والأسعار</span>
                        </button>
                        <button class="sb-btn sb-btn-outline" style="font-size:0.76rem; padding:7px 4px; justify-content:center; text-align:center;"
                                onclick="window.StudioUI.generateSmartSectionForMode('${u?"light":"dark"}', 'text')">
                            <i class="fas fa-font"></i>
                            <span>النصوص والعناوين</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- قائمة الحقول اللونية التفصيلية للتخصيص اليدوي الدقيق -->
            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-sliders-h" style="color:${u?"#F59E0B":"#818CF8"};"></i>
                    <h3>${u?"تخصيص كل لون في الوضع الفاتح بالتفصيل":"تخصيص كل لون في الوضع الداكن بالتفصيل"}</h3>
                </div>

                <div class="sb-color-cards-list">
                    ${du.map(c=>{const l=e[c.key]||(u?"#4F46E5":"#6366F1"),d=l.startsWith("#")&&(l.length===7||l.length===4||l.length===9)?l:u?"#4F46E5":"#6366F1";return`
                            <div class="sb-color-card">
                                <div class="sb-color-info">
                                    <span class="sb-color-title">${c.label}</span>
                                    <span class="sb-color-desc">${c.desc}</span>
                                </div>
                                <div class="sb-color-controls">
                                    <input type="color" class="sb-color-input" value="${d}"
                                           oninput="window.StudioUI.handleColorChange('${t}', '${c.key}', this.value, this)" />
                                    <input type="text" class="sb-hex-input" value="${l}" maxlength="9"
                                           oninput="window.StudioUI.handleColorChange('${t}', '${c.key}', this.value, this)"
                                           onchange="window.StudioUI.handleColorChange('${t}', '${c.key}', this.value, this)" />
                                </div>
                            </div>
                        `}).join("")}
                </div>
            </div>
        </div>
        `}},bu=class{static render(){const r=o.config.light_theme?.colors?.primary||"#4F46E5",u=o.config.light_theme?.colors?.bg_body||"#F8FAFC",t=o.config.dark_theme?.colors?.bg_body||"#0B1120",e=o.config.light_theme?.colors?.accent||"#14B8A6",a=o.config.theme_name||"",s=o.config.typography||{},i=o.config.products_settings||{},n=i.portrait||{},c=i.landscape||{},l=["الكل",...Array.from(new Set(N.map(d=>d.category||"عام")))];return`
        <div class="sb-tab-pane">
            <!-- بطاقة التوجيه والاختيار للتاجر -->
            <div class="sb-card-group highlight" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(168, 85, 247, 0.12)); border-color: rgba(168, 85, 247, 0.35);">
                <div class="sb-group-header" style="margin-bottom:8px;">
                    <i class="fas fa-palette" style="color:#A78BFA; font-size:1.2rem;"></i>
                    <h3 style="font-size:1.05rem;">كيف تريد تخصيص مظهر وألوان متجرك؟</h3>
                </div>
                <p style="font-size:0.84rem; color:var(--sb-muted); line-height:1.5; margin-bottom:12px;">
                    يمكنك اختيار <strong>ثيم متناسق جاهز من بين 20 ثيم مصمم باحترافية</strong> للوضعين الفاتح والداكن، أو استخدام <strong>المولد الذكي والتخصيص الحر</strong> لكل لون:
                </p>

                <!-- أزرار التنقل السريع بين طرق التخصيص -->
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;">
                    <a href="#section-ready-themes" class="sb-btn sb-btn-primary" style="justify-content:center; padding:10px 8px; font-size:0.82rem; text-decoration:none; font-weight:800;">
                        <i class="fas fa-swatchbook"></i>
                        <span>تصفح 20 ثيم جاهز 🎨</span>
                    </a>
                    <a href="#section-ai-generator" class="sb-btn sb-btn-outline" style="justify-content:center; padding:10px 8px; font-size:0.82rem; text-decoration:none; font-weight:800;">
                        <i class="fas fa-wand-magic-sparkles" style="color:#A78BFA;"></i>
                        <span>المولد الذكي والتخصيص الحر ⚡</span>
                    </a>
                </div>
            </div>

            <!-- ============================================== -->
            <!-- 🌟 قسم الـ 20 ثيم متناسق جاهز للداكن والفاتح -->
            <!-- ============================================== -->
            <div class="sb-card-group" id="section-ready-themes">
                <div class="sb-group-header">
                    <i class="fas fa-sparkles" style="color:#F59E0B;"></i>
                    <div>
                        <h3 style="font-size:1rem;">باقة الـ 20 ثيم الجاهزة والمتناسقة (${N.length} ثيم)</h3>
                        <span style="font-size:0.75rem; color:var(--sb-muted); display:block; margin-top:2px;">
                            اختر الثيم وطبّقه على الوضعين معاً أو على الوضع الفاتح أو الداكن فقط:
                        </span>
                    </div>
                </div>

                <!-- شريط فلترة الفئات للثيمات الـ 20 -->
                <div style="display:flex; gap:6px; overflow-x:auto; padding-bottom:8px; margin-bottom:12px;" id="theme-category-pills">
                    ${l.map((d,b)=>`
                        <button class="sb-badge-pill ${b===0?"active":""}" 
                                onclick="window.StudioUI.filterPresetCards('${d}', this)"
                                style="cursor:pointer; border:1px solid var(--sb-border); background:var(--sb-surface); color:var(--sb-text); padding:4px 10px; border-radius:999px; font-size:0.76rem; white-space:nowrap; transition:all 0.2s;">
                            ${d==="الكل"?"🌟 الكل (20)":d}
                        </button>
                    `).join("")}
                </div>

                <!-- شبكة كروت الـ 20 ثيم -->
                <div class="sb-themes-grid" style="display:grid; grid-template-columns: 1fr; gap:14px;">
                    ${N.map((d,b)=>{const F=a===d.id,A=d.light_theme?.colors||{},h=d.dark_theme?.colors||{};return`
                        <div class="sb-preset-theme-card" data-category="${d.category||"عام"}" 
                             style="border:1px solid ${F?"var(--sb-primary)":"var(--sb-border)"}; background:var(--sb-card); border-radius:14px; padding:12px 14px; position:relative; box-shadow:${F?"0 0 0 2px var(--sb-primary)":"none"}; transition:all 0.2s;">
                            
                            <!-- رأس الكرت -->
                            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">
                                <div>
                                    <div style="display:flex; align-items:center; gap:8px;">
                                        <strong style="font-size:0.95rem; color:var(--sb-text); font-weight:800;">${d.name}</strong>
                                        <span style="font-size:0.7rem; background:rgba(99, 102, 241, 0.12); color:#818CF8; padding:2px 8px; border-radius:6px; font-weight:600;">
                                            ${d.category||"عام"}
                                        </span>
                                    </div>
                                    <p style="font-size:0.78rem; color:var(--sb-muted); line-height:1.4; margin-top:4px;">${d.description}</p>
                                </div>
                                <span style="font-size:0.74rem; color:var(--sb-muted); font-family:monospace; background:var(--sb-surface); padding:2px 6px; border-radius:4px;">#${b+1}</span>
                            </div>

                            <!-- معاينة باليت الألوان للفاتح والداكن -->
                            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px; margin:10px 0; background:var(--sb-surface); padding:8px 10px; border-radius:10px;">
                                <!-- الفاتح -->
                                <div>
                                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                                        <span style="font-size:0.72rem; color:var(--sb-muted); font-weight:700;">☀️ الفاتح:</span>
                                        <span style="font-size:0.68rem; font-family:monospace; color:${A.primary||"#4F46E5"};">${A.primary||"#4F46E5"}</span>
                                    </div>
                                    <div style="display:flex; gap:4px;">
                                        <div title="الأساسي" style="width:20px; height:20px; border-radius:4px; background:${A.primary||"#4F46E5"};"></div>
                                        <div title="التمييز" style="width:20px; height:20px; border-radius:4px; background:${A.accent||"#14B8A6"};"></div>
                                        <div title="الخلفية" style="width:20px; height:20px; border-radius:4px; background:${A.bg_body||"#F8FAFC"}; border:1px solid #CBD5E1;"></div>
                                        <div title="الكروت" style="width:20px; height:20px; border-radius:4px; background:${A.bg_card||"#FFFFFF"}; border:1px solid #CBD5E1;"></div>
                                        <div title="النص" style="width:20px; height:20px; border-radius:4px; background:${A.text_main||"#0F172A"};"></div>
                                    </div>
                                </div>

                                <!-- الداكن -->
                                <div>
                                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                                        <span style="font-size:0.72rem; color:var(--sb-muted); font-weight:700;">🌙 الداكن:</span>
                                        <span style="font-size:0.68rem; font-family:monospace; color:${h.primary||"#6366F1"};">${h.primary||"#6366F1"}</span>
                                    </div>
                                    <div style="display:flex; gap:4px;">
                                        <div title="الأساسي" style="width:20px; height:20px; border-radius:4px; background:${h.primary||"#6366F1"};"></div>
                                        <div title="التمييز" style="width:20px; height:20px; border-radius:4px; background:${h.accent||"#2DD4BF"};"></div>
                                        <div title="الخلفية" style="width:20px; height:20px; border-radius:4px; background:${h.bg_body||"#0B1120"}; border:1px solid #334155;"></div>
                                        <div title="الكروت" style="width:20px; height:20px; border-radius:4px; background:${h.bg_card||"#151E2E"}; border:1px solid #334155;"></div>
                                        <div title="النص" style="width:20px; height:20px; border-radius:4px; background:${h.text_main||"#F8FAFC"};"></div>
                                    </div>
                                </div>
                            </div>

                            <!-- أزرار التطبيق الذكية الثلاثة (للوضعين / للفاتح / للداكن) -->
                            <div style="display:grid; grid-template-columns: 2fr 1fr 1fr; gap:6px; margin-top:8px;">
                                <button class="sb-btn sb-btn-primary" style="font-size:0.78rem; padding:8px 4px; justify-content:center; font-weight:800;"
                                        onclick="window.StudioUI.handlePresetApply('${d.id}', 'both')">
                                    <i class="fas fa-wand-magic-sparkles"></i>
                                    <span>تطبيق للوضعين ✨</span>
                                </button>
                                <button class="sb-btn sb-btn-outline" style="font-size:0.74rem; padding:8px 2px; justify-content:center; font-weight:700;"
                                        onclick="window.StudioUI.handlePresetApply('${d.id}', 'light')">
                                    <i class="fas fa-sun" style="color:#F59E0B;"></i>
                                    <span>للفاتح ☀️</span>
                                </button>
                                <button class="sb-btn sb-btn-outline" style="font-size:0.74rem; padding:8px 2px; justify-content:center; font-weight:700;"
                                        onclick="window.StudioUI.handlePresetApply('${d.id}', 'dark')">
                                    <i class="fas fa-moon" style="color:#818CF8;"></i>
                                    <span>للداكن 🌙</span>
                                </button>
                            </div>
                        </div>
                        `}).join("")}
                </div>
            </div>

            <!-- ============================================== -->
            <!-- ⚡ قسم المولد الذكي بالألوان الموجهة والتخصيص الحر -->
            <!-- ============================================== -->
            <div class="sb-card-group highlight" id="section-ai-generator">
                <div class="sb-group-header">
                    <i class="fas fa-wand-magic-sparkles" style="color:#A78BFA;"></i>
                    <h3>المولد الذكي الشامل للهوية والمظهر (AI Smart Studio)</h3>
                </div>

                <div class="sb-ai-generator-box">
                    <p style="font-size:0.84rem; color:var(--sb-muted); line-height:1.5;">
                        حدد ألوان هويتك وخلفياتك المفضلة وسيقوم المساعد الذكي بتنسيق واشتقاق الوضعين الفاتح والداكن وتحديد الخطوط والأنماط المتناغمة معها فوراً!
                    </p>

                    <!-- شبكة اختيار الألوان الموجهة للتوليد -->
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:12px;">
                        <div class="sb-field-card" style="padding:8px 10px;">
                            <label class="sb-field-label" style="font-size:0.75rem;">🎨 لون الهوية الأساسي (Primary)</label>
                            <div style="display:flex; align-items:center; gap:8px;">
                                <input type="color" id="ai-seed-primary" value="${r}" class="sb-color-input" style="width:36px; height:32px;"
                                       onchange="document.getElementById('ai-seed-primary-hex').value = this.value" />
                                <input type="text" id="ai-seed-primary-hex" class="sb-input" value="${r}" style="font-size:0.8rem; padding:4px 8px;"
                                       onchange="document.getElementById('ai-seed-primary').value = this.value" />
                            </div>
                        </div>

                        <div class="sb-field-card" style="padding:8px 10px;">
                            <label class="sb-field-label" style="font-size:0.75rem;">⚡ لون التمييز التكميلي (Accent)</label>
                            <div style="display:flex; align-items:center; gap:8px;">
                                <input type="color" id="ai-seed-accent" value="${e}" class="sb-color-input" style="width:36px; height:32px;"
                                       onchange="document.getElementById('ai-seed-accent-hex').value = this.value" />
                                <input type="text" id="ai-seed-accent-hex" class="sb-input" value="${e}" style="font-size:0.8rem; padding:4px 8px;"
                                       onchange="document.getElementById('ai-seed-accent').value = this.value" />
                            </div>
                        </div>

                        <div class="sb-field-card" style="padding:8px 10px;">
                            <label class="sb-field-label" style="font-size:0.75rem;">☀️ خلفية الفاتح المفضلة (Light BG)</label>
                            <div style="display:flex; align-items:center; gap:8px;">
                                <input type="color" id="ai-seed-lightbg" value="${u}" class="sb-color-input" style="width:36px; height:32px;"
                                       onchange="document.getElementById('ai-seed-lightbg-hex').value = this.value" />
                                <input type="text" id="ai-seed-lightbg-hex" class="sb-input" value="${u}" style="font-size:0.8rem; padding:4px 8px;"
                                       onchange="document.getElementById('ai-seed-lightbg').value = this.value" />
                            </div>
                        </div>

                        <div class="sb-field-card" style="padding:8px 10px;">
                            <label class="sb-field-label" style="font-size:0.75rem;">🌙 خلفية الداكن المفضلة (Dark BG)</label>
                            <div style="display:flex; align-items:center; gap:8px;">
                                <input type="color" id="ai-seed-darkbg" value="${t}" class="sb-color-input" style="width:36px; height:32px;"
                                       onchange="document.getElementById('ai-seed-darkbg-hex').value = this.value" />
                                <input type="text" id="ai-seed-darkbg-hex" class="sb-input" value="${t}" style="font-size:0.8rem; padding:4px 8px;"
                                       onchange="document.getElementById('ai-seed-darkbg').value = this.value" />
                            </div>
                        </div>
                    </div>

                    <!-- أزرار التوليد والتخصيص الذكي -->
                    <div style="display:flex; flex-direction:column; gap:8px; margin-top:14px;">
                        <!-- الزر الشامل -->
                        <button class="sb-btn sb-btn-primary" style="width:100%; justify-content:center; padding:12px; font-weight:900;" 
                                onclick="window.StudioUI.generateSmartHarmony('intelligent')">
                            <i class="fas fa-wand-magic-sparkles"></i>
                            <span>توليد ذكي شامل (الوضعين + الخطوط + الأشكال + العرض) 🚀</span>
                        </button>

                        <!-- أزرار التوليد لكل وضع لحاله -->
                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;">
                            <button class="sb-btn sb-btn-outline" style="justify-content:center; padding:9px; font-weight:700;"
                                    onclick="window.StudioUI.generateSmartForMode('light')">
                                <i class="fas fa-sun" style="color:#F59E0B;"></i>
                                <span>توليد الفاتح لحاله ☀️</span>
                            </button>

                            <button class="sb-btn sb-btn-outline" style="justify-content:center; padding:9px; font-weight:700;"
                                    onclick="window.StudioUI.generateSmartForMode('dark')">
                                <i class="fas fa-moon" style="color:#818CF8;"></i>
                                <span>توليد الداكن لحاله 🌙</span>
                            </button>
                        </div>

                        <!-- أزرار التخصيص التفصيلي لكل وضع -->
                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;">
                            <button class="sb-btn sb-btn-secondary" style="font-size:0.78rem; justify-content:center; padding:7px;"
                                    onclick="window.StudioUI.setActiveTab('light_colors')">
                                <i class="fas fa-sliders-h"></i>
                                <span>تخصيص ألوان الفاتح تفصيلياً ☀️</span>
                            </button>

                            <button class="sb-btn sb-btn-secondary" style="font-size:0.78rem; justify-content:center; padding:7px;"
                                    onclick="window.StudioUI.setActiveTab('dark_colors')">
                                <i class="fas fa-sliders-h"></i>
                                <span>تخصيص ألوان الداكن تفصيلياً 🌙</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ملخص الهوية المطبقة حالياً -->
            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-id-card" style="color:var(--sb-accent);"></i>
                    <h3>ملخص الهوية المطبقة حالياً</h3>
                </div>

                <div class="sb-field-card">
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px; margin-bottom:12px;">
                        <div>
                            <span style="font-size:0.78rem; color:var(--sb-muted); display:block; margin-bottom:6px;">☀️ ألوان الفاتح:</span>
                            <div style="display:flex; gap:6px;">
                                <div title="الأساسي" style="width:24px; height:24px; border-radius:6px; background:${o.config.light_theme?.colors?.primary||"#4F46E5"};"></div>
                                <div title="التمييز" style="width:24px; height:24px; border-radius:6px; background:${o.config.light_theme?.colors?.accent||"#14B8A6"};"></div>
                                <div title="الخلفية" style="width:24px; height:24px; border-radius:6px; background:${o.config.light_theme?.colors?.bg_body||"#F8FAFC"}; border:1px solid #CBD5E1;"></div>
                            </div>
                        </div>
                        <div>
                            <span style="font-size:0.78rem; color:var(--sb-muted); display:block; margin-bottom:6px;">🌙 ألوان الداكن:</span>
                            <div style="display:flex; gap:6px;">
                                <div title="الأساسي" style="width:24px; height:24px; border-radius:6px; background:${o.config.dark_theme?.colors?.primary||"#6366F1"};"></div>
                                <div title="التمييز" style="width:24px; height:24px; border-radius:6px; background:${o.config.dark_theme?.colors?.accent||"#2DD4BF"};"></div>
                                <div title="الخلفية" style="width:24px; height:24px; border-radius:6px; background:${o.config.dark_theme?.colors?.bg_body||"#0B1120"}; border:1px solid #334155;"></div>
                            </div>
                        </div>
                    </div>

                    <div style="border-top:1px dashed var(--sb-border); padding-top:10px; display:flex; flex-direction:column; gap:6px; font-size:0.84rem;">
                        <div style="display:flex; justify-content:space-between;">
                            <span style="color:var(--sb-muted);">✍️ الخط المختار:</span>
                            <strong style="color:var(--sb-primary);">${s.font_family||"Tajawal"}</strong>
                        </div>
                        <div style="display:flex; justify-content:space-between;">
                            <span style="color:var(--sb-muted);">📱 عرض الجوال:</span>
                            <strong style="color:#A5B4FC;">${(n.scroll_direction||"horizontal")==="horizontal"?"↔️ سلايدر باللمس":"↕️ شبكة عمودية"} (${n.grid_columns||2} أعمدة)</strong>
                        </div>
                        <div style="display:flex; justify-content:space-between;">
                            <span style="color:var(--sb-muted);">💻 عرض الكمبيوتر:</span>
                            <strong style="color:#38BDF8;">${(c.scroll_direction||"horizontal")==="horizontal"?"↔️ سلايدر بالماوس":"↕️ شبكة كبرى"} (${c.grid_columns||4} أعمدة)</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `}},_u=class{static render(){const r=o.config.typography||{},u=r.font_family||"Tajawal",t=parseInt(r.base_size_mobile||"15")||15,e=parseInt(r.base_size_desktop||"17")||17,a=parseFloat(r.price_size_mobile||"1.1")||1.1,s=parseFloat(r.price_size_desktop||"1.25")||1.25,i=parseFloat(r.heading_size_mobile||"1.15")||1.15,n=parseFloat(r.heading_size_desktop||"1.45")||1.45;return`
        <div class="sb-tab-pane">
            <div class="sb-typography-summary">
                <div class="sb-typography-summary-card">
                    <span>الخط</span>
                    <strong>${u}</strong>
                </div>
                <div class="sb-typography-summary-card accent">
                    <span>الوزن</span>
                    <strong>${r.heading_weight||"700"}</strong>
                </div>
                <div class="sb-typography-summary-card">
                    <span>الحجم</span>
                    <strong>${e}px</strong>
                </div>
            </div>

            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-font" style="color:var(--sb-accent);"></i>
                    <h3>نوع الخط العربي الرسمي للمتجر</h3>
                </div>

                <div class="sb-fields-grid">
                    <div class="sb-field-card" style="grid-column: 1 / -1;">
                        <label class="sb-field-label">اختر الخط الأساسي للواجهة</label>
                        <select class="sb-select" onchange="window.StudioUI.handleTypographyChange('font_family', this.value, true)">
                            ${tu.map(c=>`
                                <option value="${c}" ${u===c?"selected":""}>${c} - الخط العربي</option>
                            `).join("")}
                        </select>
                    </div>

                    <div class="sb-field-card" style="grid-column: 1 / -1;">
                        <label class="sb-field-label">سماكة ووزن عناوين المنتجات والأقسام</label>
                        <div class="sb-segmented-control">
                            <button class="sb-seg-btn ${(r.heading_weight||"700")==="600"?"active":""}" 
                                    onclick="window.StudioUI.handleTypographyChange('heading_weight', '600')">
                                متوسط (600)
                            </button>
                            <button class="sb-seg-btn ${(r.heading_weight||"700")==="700"?"active":""}" 
                                    onclick="window.StudioUI.handleTypographyChange('heading_weight', '700')">
                                عريض (700) ⭐
                            </button>
                            <button class="sb-seg-btn ${r.heading_weight==="800"?"active":""}" 
                                    onclick="window.StudioUI.handleTypographyChange('heading_weight', '800')">
                                بارز جداً (800)
                            </button>
                            <button class="sb-seg-btn ${r.heading_weight==="900"?"active":""}" 
                                    onclick="window.StudioUI.handleTypographyChange('heading_weight', '900')">
                                بلاك (900)
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- أحجام النصوص المتجاوبة بخط تمرير -->
            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-text-height" style="color:#FBBF24;"></i>
                    <h3>🎚️ حجم خط النص الأساسي</h3>
                </div>

                <div class="sb-fields-grid">
                    <div class="sb-field-card">
                        <div class="sb-slider-label">
                            <span>📱 حجم الخط بالجوال:</span>
                            <strong id="val-font-mobile">${t}px</strong>
                        </div>
                        <input type="range" min="12" max="20" step="1" class="sb-range-slider"
                               value="${t}"
                               oninput="
                                   document.getElementById('val-font-mobile').textContent = this.value + 'px';
                                   window.StudioUI.handleTypographyChange('base_size_mobile', this.value + 'px', false);
                               " />
                        <div style="display:flex; justify-content:space-between; font-size:0.72rem; color:var(--sb-muted); margin-top:4px;">
                            <span>12px</span><span>صغير 14</span><span>⭐15</span><span>16</span><span>20px</span>
                        </div>
                    </div>

                    <div class="sb-field-card">
                        <div class="sb-slider-label">
                            <span>💻 حجم الخط بالكمبيوتر:</span>
                            <strong id="val-font-desktop">${e}px</strong>
                        </div>
                        <input type="range" min="13" max="22" step="1" class="sb-range-slider"
                               value="${e}"
                               oninput="
                                   document.getElementById('val-font-desktop').textContent = this.value + 'px';
                                   window.StudioUI.handleTypographyChange('base_size_desktop', this.value + 'px', false);
                               " />
                        <div style="display:flex; justify-content:space-between; font-size:0.72rem; color:var(--sb-muted); margin-top:4px;">
                            <span>13px</span><span>15</span><span>⭐17</span><span>19</span><span>22px</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- حجم خط العناوين -->
            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-heading" style="color:#A78BFA;"></i>
                    <h3>🎚️ حجم خط عناوين الأقسام والمنتجات</h3>
                </div>

                <div class="sb-fields-grid">
                    <div class="sb-field-card">
                        <div class="sb-slider-label">
                            <span>📱 حجم العنوان بالجوال:</span>
                            <strong id="val-head-mobile">${(i*100).toFixed(0)}%</strong>
                        </div>
                        <input type="range" min="90" max="160" step="5" class="sb-range-slider"
                               value="${Math.round(i*100)}"
                               oninput="
                                   document.getElementById('val-head-mobile').textContent = this.value + '%';
                                   window.StudioUI.handleTypographyChange('heading_size_mobile', (this.value/100).toFixed(2) + 'rem', false);
                               " />
                    </div>

                    <div class="sb-field-card">
                        <div class="sb-slider-label">
                            <span>💻 حجم العنوان بالكمبيوتر:</span>
                            <strong id="val-head-desktop">${(n*100).toFixed(0)}%</strong>
                        </div>
                        <input type="range" min="100" max="200" step="5" class="sb-range-slider"
                               value="${Math.round(n*100)}"
                               oninput="
                                   document.getElementById('val-head-desktop').textContent = this.value + '%';
                                   window.StudioUI.handleTypographyChange('heading_size_desktop', (this.value/100).toFixed(2) + 'rem', false);
                               " />
                    </div>
                </div>
            </div>

            <!-- حجم خط الأسعار -->
            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-tag" style="color:#10B981;"></i>
                    <h3>🎚️ حجم خط الأسعار على الكروت</h3>
                </div>

                <div class="sb-fields-grid">
                    <div class="sb-field-card">
                        <div class="sb-slider-label">
                            <span>📱 حجم السعر بالجوال:</span>
                            <strong id="val-price-mobile">${(a*100).toFixed(0)}%</strong>
                        </div>
                        <input type="range" min="80" max="160" step="5" class="sb-range-slider"
                               value="${Math.round(a*100)}"
                               oninput="
                                   document.getElementById('val-price-mobile').textContent = this.value + '%';
                                   window.StudioUI.handleTypographyChange('price_size_mobile', (this.value/100).toFixed(2) + 'rem', false);
                               " />
                    </div>

                    <div class="sb-field-card">
                        <div class="sb-slider-label">
                            <span>💻 حجم السعر بالكمبيوتر:</span>
                            <strong id="val-price-desktop">${(s*100).toFixed(0)}%</strong>
                        </div>
                        <input type="range" min="90" max="180" step="5" class="sb-range-slider"
                               value="${Math.round(s*100)}"
                               oninput="
                                   document.getElementById('val-price-desktop').textContent = this.value + '%';
                                   window.StudioUI.handleTypographyChange('price_size_desktop', (this.value/100).toFixed(2) + 'rem', false);
                               " />
                    </div>
                </div>
            </div>
        </div>
        `}},W={"modern-soft":{id:"modern-soft",name:"Modern Soft",label:"حديث ناعم",description:"مظهر أنيق للمتجر الحديث مع حواف دقيقة وأزرار مريحة.",accent:"#6366F1",cardRadius:"18px",buttonStyle:"pill",buttonRadius:"9999px",animation:"lift",displayMode:"by_categories_sections",cardStyle:"classic",cardOrientation:"portrait",navbarStyle:"glass",spacing:"normal",botPersona:"classic",botButtonStyle:"pill",botAvatarStyle:"pulse"},glass:{id:"glass",name:"Glass",label:"زجاجي",description:"شبه شفاف مع طبقات زجاجية، ممتاز للتصاميم الفاخرة.",accent:"#8B5CF6",cardRadius:"24px",buttonStyle:"rounded",buttonRadius:"16px",animation:"glow",displayMode:"featured_first",cardStyle:"glass",cardOrientation:"landscape",navbarStyle:"glass",spacing:"relaxed",botPersona:"premium",botButtonStyle:"bubble",botAvatarStyle:"halo"},luxury:{id:"luxury",name:"Luxury",label:"فاخر",description:"ألوان أنيقة، فواصل واسعة، وزاوية مميزة للعلامات الراقية.",accent:"#B45309",cardRadius:"26px",buttonStyle:"pill",buttonRadius:"9999px",animation:"scale",displayMode:"featured_first",cardStyle:"magazine",cardOrientation:"landscape",navbarStyle:"floating",spacing:"relaxed",botPersona:"luxury",botButtonStyle:"bubble",botAvatarStyle:"halo"},minimal:{id:"minimal",name:"Minimal",label:"بسيط",description:"أقل تفاصيل وأكثر وضوح، مثالي للمتاجر العصرية.",accent:"#111827",cardRadius:"10px",buttonStyle:"square",buttonRadius:"8px",animation:"none",displayMode:"all_flat_grid",cardStyle:"minimal",cardOrientation:"portrait",navbarStyle:"solid",spacing:"compact",botPersona:"classic",botButtonStyle:"minimal",botAvatarStyle:"pulse"},tech:{id:"tech",name:"Tech",label:"تقني",description:"أسلوب تكنولوجي مع حواف متناسقة وأدوات تمثيلية حديثة.",accent:"#06B6D4",cardRadius:"16px",buttonStyle:"rounded",buttonRadius:"14px",animation:"glow",displayMode:"tabs_by_category",cardStyle:"bold",cardOrientation:"portrait",navbarStyle:"glass",spacing:"normal",botPersona:"tech",botButtonStyle:"minimal",botAvatarStyle:"orb"},fashion:{id:"fashion",name:"Fashion",label:"موضة",description:"قوة اللون، إيقاع أنيق، ومظهر مرن لأزياء وماركات lifestyle.",accent:"#EC4899",cardRadius:"22px",buttonStyle:"pill",buttonRadius:"9999px",animation:"scale",displayMode:"featured_first",cardStyle:"magazine",cardOrientation:"portrait",navbarStyle:"floating",spacing:"relaxed",botPersona:"fashion",botButtonStyle:"bubble",botAvatarStyle:"hover"},bold:{id:"bold",name:"Bold",label:"جريء",description:"عناصر واضحة، ألوان متينة، ومظهر تطلبي يلفت الانتباه.",accent:"#F59E0B",cardRadius:"28px",buttonStyle:"rounded",buttonRadius:"18px",animation:"scale",displayMode:"featured_first",cardStyle:"bold",cardOrientation:"landscape",navbarStyle:"floating",spacing:"relaxed",botPersona:"premium",botButtonStyle:"bubble",botAvatarStyle:"halo"},organic:{id:"organic",name:"Organic",label:"طبيعي",description:"مظهر ناعم ومريح يناسب المنتجات الصحية والطبيعية.",accent:"#10B981",cardRadius:"20px",buttonStyle:"pill",buttonRadius:"9999px",animation:"lift",displayMode:"by_categories_sections",cardStyle:"classic",cardOrientation:"portrait",navbarStyle:"glass",spacing:"normal",botPersona:"wellness",botButtonStyle:"pill",botAvatarStyle:"pulse"},futuristic:{id:"futuristic",name:"Futuristic",label:"مستقبلي",description:"أنيق، حديث، ومليء بالتأثيرات الرقمية والعاكسات.",accent:"#06B6D4",cardRadius:"30px",buttonStyle:"rounded",buttonRadius:"16px",animation:"glow",displayMode:"tabs_by_category",cardStyle:"glass",cardOrientation:"landscape",navbarStyle:"glass",spacing:"relaxed",botPersona:"futuristic",botButtonStyle:"minimal",botAvatarStyle:"orb"},premium:{id:"premium",name:"Premium",label:"مميز",description:"أسلوب مميز ينقل المتجر إلى تجربة علامة تجارية متقدمة.",accent:"#8B5CF6",cardRadius:"22px",buttonStyle:"pill",buttonRadius:"9999px",animation:"lift",displayMode:"featured_first",cardStyle:"magazine",cardOrientation:"landscape",navbarStyle:"floating",spacing:"relaxed",botPersona:"premium",botButtonStyle:"bubble",botAvatarStyle:"halo"},classic:{id:"classic",name:"Classic",label:"كلاسيكي",description:"مظهر متوازن يعرفه الزبون ويشعره بالثقة.",accent:"#4F46E5",cardRadius:"14px",buttonStyle:"rounded",buttonRadius:"12px",animation:"lift",displayMode:"by_categories_sections",cardStyle:"classic",cardOrientation:"portrait",navbarStyle:"solid",spacing:"normal",botPersona:"classic",botButtonStyle:"pill",botAvatarStyle:"pulse"},market:{id:"market",name:"Market",label:"تجاري",description:"مناسب للمتاجر الكبيرة والمنتجات المزودة بخصومات وتجاريات.",accent:"#FB7185",cardRadius:"16px",buttonStyle:"rounded",buttonRadius:"14px",animation:"scale",displayMode:"by_categories_sections",cardStyle:"bold",cardOrientation:"portrait",navbarStyle:"solid",spacing:"normal",botPersona:"tech",botButtonStyle:"pill",botAvatarStyle:"pulse"}},pu=Object.values(W),gu=class{static render(){const r=o.config.shapes||{},u=o.config.style_library?.current||"modern-soft";return`
        <div class="sb-tab-pane">
            <div class="sb-card-group highlight">
                <div class="sb-group-header">
                    <i class="fas fa-layer-group" style="color:#FBBF24;"></i>
                    <h3>مكتبة الأشكال</h3>
                </div>
                <p style="font-size:0.82rem;color:var(--sb-muted,#6b7280);margin:0 0 14px;line-height:1.6;">استدعِ شكل جاهز لكل عناصر المتجر: الكروت، الأزرار، الشريط العلوي/السفلي، والمساعد الذكي.</p>
                <div class="sb-style-library-grid">
                    ${pu.map(e=>{const a=e.id===u;return`
                <div class="sb-style-library-card ${a?"active":""}">
                    <div class="sb-style-preview" style="--accent:${e.accent}; --card-radius:${e.cardRadius}; --btn-radius:${e.buttonRadius}; --btn-style:${e.buttonStyle};">
                        <div class="sb-style-preview-top">
                            <span class="sb-style-dot"></span>
                            <span class="sb-style-dot"></span>
                            <span class="sb-style-dot"></span>
                        </div>
                        <div class="sb-style-preview-row">
                            <span class="sb-style-pill" style="background:${e.accent};"></span>
                            <span class="sb-style-chip"></span>
                            <span class="sb-style-chip short"></span>
                        </div>
                        <div class="sb-style-preview-card"></div>
                    </div>
                    <div class="sb-style-meta">
                        <strong>${e.label}</strong>
                        <small>${e.description}</small>
                    </div>
                    <button class="sb-btn ${a?"sb-btn-primary":"sb-btn-ghost"} sb-style-apply-btn" onclick="window.StudioUI.applyStyleLibraryPreset('${e.id}')">
                        ${a?"تم التطبيق":"تطبيق"}
                    </button>
                </div>
            `}).join("")}
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
                            <button class="sb-seg-btn ${r.card_radius==="0px"?"active":""}" 
                                    onclick="window.StudioUI.handleShapeChange('card_radius', '0px')">0px (مربع)</button>
                            <button class="sb-seg-btn ${r.card_radius==="8px"?"active":""}" 
                                    onclick="window.StudioUI.handleShapeChange('card_radius', '8px')">8px (خفيف)</button>
                            <button class="sb-seg-btn ${r.card_radius==="12px"?"active":""}" 
                                    onclick="window.StudioUI.handleShapeChange('card_radius', '12px')">12px (حاد)</button>
                            <button class="sb-seg-btn ${r.card_radius==="16px"?"active":""}" 
                                    onclick="window.StudioUI.handleShapeChange('card_radius', '16px')">16px</button>
                            <button class="sb-seg-btn ${r.card_radius==="20px"||!r.card_radius?"active":""}" 
                                    onclick="window.StudioUI.handleShapeChange('card_radius', '20px')">20px ⭐</button>
                            <button class="sb-seg-btn ${r.card_radius==="28px"?"active":""}" 
                                    onclick="window.StudioUI.handleShapeChange('card_radius', '28px')">28px (دائري)</button>
                        </div>
                    </div>

                    <div class="sb-field-card">
                        <label class="sb-field-label">نمط وشكل الأزرار (Button Style)</label>
                        <div class="sb-segmented-control">
                            <button class="sb-seg-btn ${r.button_style==="rounded"||!r.button_style?"active":""}" 
                                    onclick="window.StudioUI.handleShapeChange('button_style', 'rounded'); window.StudioUI.handleShapeChange('button_radius', '14px');">
                                🔘 منحني (Rounded)
                            </button>
                            <button class="sb-seg-btn ${r.button_style==="pill"?"active":""}" 
                                    onclick="window.StudioUI.handleShapeChange('button_style', 'pill'); window.StudioUI.handleShapeChange('button_radius', '9999px');">
                                💊 كبسولي (Pill)
                            </button>
                            <button class="sb-seg-btn ${r.button_style==="square"?"active":""}" 
                                    onclick="window.StudioUI.handleShapeChange('button_style', 'square'); window.StudioUI.handleShapeChange('button_radius', '6px');">
                                ⬛ مربع (Square)
                            </button>
                        </div>
                    </div>

                    <div class="sb-field-card" style="grid-column: 1 / -1;">
                        <label class="sb-field-label">تأثير تمرير الماوس على كرت المنتج</label>
                        <div class="sb-segmented-control">
                            <button class="sb-seg-btn ${(o.config.animations?.card_hover||"lift")==="lift"?"active":""}" 
                                    onclick="window.StudioUI.handleAnimationChange('card_hover', 'lift')">
                                🚀 رفع مع ظل (Lift)
                            </button>
                            <button class="sb-seg-btn ${o.config.animations?.card_hover==="glow"?"active":""}" 
                                    onclick="window.StudioUI.handleAnimationChange('card_hover', 'glow')">
                                ✨ توهج (Glow)
                            </button>
                            <button class="sb-seg-btn ${o.config.animations?.card_hover==="scale"?"active":""}" 
                                    onclick="window.StudioUI.handleAnimationChange('card_hover', 'scale')">
                                🔍 تكبير (Scale)
                            </button>
                            <button class="sb-seg-btn ${o.config.animations?.card_hover==="none"?"active":""}" 
                                    onclick="window.StudioUI.handleAnimationChange('card_hover', 'none')">
                                🚫 بدون حركة
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        `}},Au=class{static render(){const r=o.config.marketing||{},u=r.whatsapp_floating||{},t=r.free_shipping_bar||{};return`
        <div class="sb-tab-pane">
            <div class="sb-product-summary">
                <div class="sb-product-summary-card ${u.enabled?"accent":""}">
                    <span class="label">واتساب</span>
                    <strong>${u.enabled?"مفعّل":"متوقف"}</strong>
                </div>
                <div class="sb-product-summary-card ${t.enabled?"accent":""}">
                    <span class="label">الشحن المجاني</span>
                    <strong>${t.enabled?"نشط":"معطل"}</strong>
                </div>
                <div class="sb-product-summary-card">
                    <span class="label">موقع الزر</span>
                    <strong>${(u.position||"left")==="left"?"يسار":"يمين"}</strong>
                </div>
            </div>

            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fab fa-whatsapp" style="color:#22C55E;"></i>
                    <h3>زر الواتساب العائم للتواصل المباشر</h3>
                </div>

                <div class="sb-product-mini-actions">
                    <button type="button" class="sb-product-mini-btn ${u.enabled?"active":""}" onclick="window.StudioUI.handleMarketingChange('whatsapp_floating', 'enabled', ${!u.enabled})">
                        <i class="fab fa-whatsapp"></i> واتساب
                    </button>
                    <button type="button" class="sb-product-mini-btn ${t.enabled?"active":""}" onclick="window.StudioUI.handleMarketingChange('free_shipping_bar', 'enabled', ${!t.enabled})">
                        <i class="fas fa-truck-fast"></i> شحن مجاني
                    </button>
                    <button type="button" class="sb-product-mini-btn ${(u.position||"left")==="right"?"active":""}" onclick="window.StudioUI.handleMarketingChange('whatsapp_floating', 'position', '${(u.position||"left")==="left"?"right":"left"}')">
                        <i class="fas fa-location-dot"></i> ${(u.position||"left")==="left"?"يمين":"يسار"}
                    </button>
                </div>

                <div class="sb-fields-grid">
                    <div class="sb-field-card" style="grid-column: 1 / -1;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                            <label class="sb-field-label" style="margin-bottom:0;">تفعيل زر الواتساب العائم</label>
                            <label class="sb-switch">
                                <input type="checkbox" ${u.enabled?"checked":""} 
                                       onchange="window.StudioUI.handleMarketingChange('whatsapp_floating', 'enabled', this.checked)" />
                                <span class="sb-slider"></span>
                            </label>
                        </div>

                        <input type="text" class="sb-input" value="${u.phone||""}" 
                               placeholder="رقم الواتساب مع المفتاح الدولي، مثال: 967777000000"
                               oninput="window.StudioUI.handleMarketingChange('whatsapp_floating', 'phone', this.value)" />

                        <div style="margin-top:10px;">
                            <label class="sb-field-label">موقع الزر العائم في الشاشة</label>
                            <div class="sb-segmented-control">
                                <button class="sb-seg-btn ${(u.position||"left")==="left"?"active":""}" 
                                        onclick="window.StudioUI.handleMarketingChange('whatsapp_floating', 'position', 'left')">
                                    👈 أسفل اليسار (موصى به)
                                </button>
                                <button class="sb-seg-btn ${u.position==="right"?"active":""}" 
                                        onclick="window.StudioUI.handleMarketingChange('whatsapp_floating', 'position', 'right')">
                                    👉 أسفل اليمين
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- شريط الشحن المجاني الترويجي -->
            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-truck-fast" style="color:#06B6D4;"></i>
                    <h3>شريط الشحن المجاني الترويجي</h3>
                </div>

                <div class="sb-fields-grid">
                    <div class="sb-field-card" style="grid-column: 1 / -1;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                            <label class="sb-field-label" style="margin-bottom:0;">تفعيل شريط الشحن المجاني</label>
                            <label class="sb-switch">
                                <input type="checkbox" ${t.enabled?"checked":""} 
                                       onchange="window.StudioUI.handleMarketingChange('free_shipping_bar', 'enabled', this.checked)" />
                                <span class="sb-slider"></span>
                            </label>
                        </div>

                        <input type="text" class="sb-input" value="${t.message||"🚚 شحن مجاني للطلبات فوق 10,000 ريال!"}" 
                               placeholder="نص رسالة الشحن المجاني"
                               oninput="window.StudioUI.handleMarketingChange('free_shipping_bar', 'message', this.value)" />
                    </div>
                </div>
            </div>
        </div>
        `}},Fu=class{static render(){const r=JSON.stringify(o.config,null,2),u={store_name:o.config.store_name||"متجري",store_tagline:o.config.store_tagline||"متجر عربي عصري",language:"ar",currency:o.config.currency||"SAR",default_theme_mode:o.config.default_theme_mode||"light",primary_color:o.config.light_theme?.colors?.primary||"#4F46E5",accent_color:o.config.light_theme?.colors?.accent||"#8B5CF6",background_color:o.config.light_theme?.colors?.bg_body||"#F8FAFC",typography:{font_family:o.config.typography?.font_family||"Tajawal",heading_weight:o.config.typography?.heading_weight||"700",base_size:o.config.typography?.base_size||16},navigation:o.config.navigation_settings||{},marketing:o.config.marketing||{},messages:o.config.messages||o.config.store_messages||{},modals:o.config.modals_customization||{},sections:Array.isArray(o.config.sections)?o.config.sections:[],products_settings:o.config.products_settings||{}};return`
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
                        <textarea id="store-merchant-prompt" class="sb-json-editor sb-json-prompt-editor" spellcheck="false">${`أنت مصمم متجر إلكتروني عربي عصري ومتخصص. استخدم هذا القالب الكامل لتخصيص متجر كامل، وابقِ البنية نفسها، ولا تكتب شرحاً إضافياً، فقط أعد القيم المناسبة للمتجر وتأكد أن الناتج صالح JSON:

${JSON.stringify(u,null,2)}`}</textarea>
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
                        <textarea id="live-json-editor" class="sb-json-editor" spellcheck="false">${r}</textarea>
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
        `}},mu=x,hu={home:["fa-home","fa-house","fa-store","fa-shop"],search:["fa-search","fa-magnifying-glass","fa-binoculars"],orders:["fa-box-open","fa-box","fa-clipboard-list","fa-receipt","fa-truck"],favorites:["fa-heart","fa-star","fa-bookmark","fa-thumbs-up"],cart:["fa-shopping-cart","fa-shopping-bag","fa-basket-shopping","fa-cart-plus"]},vu=class{static render(){const u=o.config.navigation_settings||{},t=D(u.bottom_bar?.items||mu),e=P(u.top_bar||M),a=(l,d)=>{const b=hu[l]||["fa-circle"];let F=`<select class="sb-select" style="font-size:0.78rem;padding:5px 8px;width:auto;min-width:110px;" onchange="window.StudioUI.handleNavBottomItemChange('${l}','icon',this.value)">`;for(const A of b)F+=`<option value="${A}"${d===A?" selected":""}>${A.replace("fa-","")}</option>`;return F+="</select>",F};let s="";for(let l=0;l<t.length;l++){const d=t[l],b=l===0,F=l===t.length-1;s+=`<div draggable="true" ondragstart="window.StudioUI.handleNavBottomItemDragStart('${d.id}')" ondragover="event.preventDefault()" ondrop="window.StudioUI.handleNavBottomItemDrop('${d.id}')" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--sb-surface,#f8f9fb);border:1px solid var(--sb-border,#e8eaed);border-radius:12px;margin-bottom:8px;box-shadow:0 2px 8px rgba(15,23,42,0.04);${d.visible?"":"opacity:0.55;"}">
               <div title="اسحب لإعادة ترتيب العنصر" style="width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--sb-primary,#6366F1),var(--sb-primary-strong,#4F46E5));display:flex;align-items:center;justify-content:center;color:#fff;font-size:0.9rem;flex-shrink:0;cursor:grab;box-shadow:0 6px 18px rgba(99,102,241,0.18);"><i class="fas ${d.icon}"></i></div>
                <div style="display:flex;flex-direction:column;gap:2px;flex-shrink:0;">
                    <button onclick="window.StudioUI.handleNavBottomItemMove('${d.id}','up')" ${b?"disabled":""} style="background:var(--sb-bg,#fff);border:1px solid var(--sb-border,#e8eaed);border-radius:5px;width:22px;height:20px;cursor:pointer;font-size:0.65rem;display:flex;align-items:center;justify-content:center;${b?"opacity:0.3;cursor:not-allowed;":""}">↑</button>
                    <button onclick="window.StudioUI.handleNavBottomItemMove('${d.id}','down')" ${F?"disabled":""} style="background:var(--sb-bg,#fff);border:1px solid var(--sb-border,#e8eaed);border-radius:5px;width:22px;height:20px;cursor:pointer;font-size:0.65rem;display:flex;align-items:center;justify-content:center;${F?"opacity:0.3;cursor:not-allowed;":""}">↓</button>
                </div>
                <div style="flex:1;display:flex;flex-direction:column;gap:6px;">
                    <div style="display:flex;align-items:center;gap:6px;">
                        <span style="font-size:0.68rem;color:var(--sb-muted,#6b7280);display:inline-flex;align-items:center;gap:4px;letter-spacing:0.02em;">⋮⋮ <span>اسحب</span></span>
                        <input type="text" class="sb-input" value="${d.label}" style="font-size:0.82rem;padding:5px 8px;flex:1;min-width:60px;" onchange="window.StudioUI.handleNavBottomItemChange('${d.id}','label',this.value)" placeholder="الاسم">
                        ${a(d.id,d.icon)}
                    </div>
                </div>
                <label class="sb-toggle" style="flex-shrink:0;">
                    <input type="checkbox" ${d.visible?"checked":""} onchange="window.StudioUI.handleNavBottomItemChange('${d.id}','visible',this.checked)">
                    <span class="sb-toggle-slider"></span>
                </label>
            </div>`}const i=[["fa-store","متجر"],["fa-shopping-bag","حقيبة"],["fa-tag","بطاقة"],["fa-star","نجمة"],["fa-gem","جوهرة"],["fa-fire","نار"],["fa-bolt","برق"],["fa-crown","تاج"]];let n="";for(const[l,d]of i){const b=e.logo_icon===l;n+=`<button title="${d}" onclick="window.StudioUI.handleNavTopBarChange('logo_icon','${l}')"
                style="width:44px;height:44px;border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;cursor:pointer;
                border:2px solid ${b?"var(--sb-primary,#6366F1)":"var(--sb-border,#e8eaed)"};
                background:${b?"rgba(99,102,241,0.12)":"var(--sb-surface,#f8f9fb)"};
                font-size:1.1rem;color:${b?"var(--sb-primary,#6366F1)":"var(--sb-muted,#6b7280)"};"><i class="fas ${l}"></i></button>`}return`<div class="sb-tab-pane">
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
                <div style="display:flex;gap:8px;flex-wrap:wrap;">${Object.keys(q).map(l=>`
            <button class="sb-btn-outline" style="font-size:0.75rem;padding:6px 10px;" onclick="window.StudioUI.handleNavPreset('${l}')">
                ${uu(l)}
            </button>`).join("")}</div>
            </div>

            <div class="sb-card-group">
                <div class="sb-group-header">
                    <i class="fas fa-grip-horizontal" style="color:var(--sb-primary);"></i>
                    <h3>الشريط السفلي (Bottom Bar)</h3>
                </div>
                <p style="font-size:0.82rem;color:var(--sb-muted,#6b7280);margin:0 0 14px;padding:0 4px;">رتّب عناصر الشريط السفلي بالأسهم ↑↓ وسحب العناصر داخل القائمة. العناصر المحمية هي الرئيسية والسلة، مع حد أدنى 2 عناصر مرئية لحفاظ تجربة التنقل.</p>
                ${s}
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
                        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:8px;">${n}</div>
                    </div>
                    <div class="sb-field-card" style="display:flex;align-items:center;justify-content:space-between;">
                        <div>
                            <label class="sb-field-label" style="margin:0;">إظهار الشعار 🏬</label>
                            <p style="font-size:0.75rem;color:var(--sb-muted,#6b7280);margin:3px 0 0;">إخفاء/إظهار أيقونة الشعار في الهيدر</p>
                        </div>
                        <label class="sb-toggle">
                            <input type="checkbox" ${e.show_logo_icon!==!1?"checked":""} onchange="window.StudioUI.handleNavTopBarChange('show_logo_icon',this.checked)">
                            <span class="sb-toggle-slider"></span>
                        </label>
                    </div>
                    <div class="sb-field-card" style="display:flex;align-items:center;justify-content:space-between;">
                        <div>
                            <label class="sb-field-label" style="margin:0;">زر البحث 🔎</label>
                            <p style="font-size:0.75rem;color:var(--sb-muted,#6b7280);margin:3px 0 0;">إظهار/إخفاء زر البحث في الهيدر</p>
                        </div>
                        <label class="sb-toggle">
                            <input type="checkbox" ${e.show_search_btn!==!1?"checked":""} onchange="window.StudioUI.handleNavTopBarChange('show_search_btn',this.checked)">
                            <span class="sb-toggle-slider"></span>
                        </label>
                    </div>
                    <div class="sb-field-card" style="display:flex;align-items:center;justify-content:space-between;">
                        <div>
                            <label class="sb-field-label" style="margin:0;">زر الوضع الليلي 🌙</label>
                            <p style="font-size:0.75rem;color:var(--sb-muted,#6b7280);margin:3px 0 0;">إظهار/إخفاء زر تبديل الوضع الداكن في الهيدر</p>
                        </div>
                        <label class="sb-toggle">
                            <input type="checkbox" ${e.show_dark_mode_btn!==!1?"checked":""} onchange="window.StudioUI.handleNavTopBarChange('show_dark_mode_btn',this.checked)">
                            <span class="sb-toggle-slider"></span>
                        </label>
                    </div>
                    <div class="sb-field-card" style="display:flex;align-items:center;justify-content:space-between;">
                        <div>
                            <label class="sb-field-label" style="margin:0;">زر الحساب الشخصي 👤</label>
                            <p style="font-size:0.75rem;color:var(--sb-muted,#6b7280);margin:3px 0 0;">إظهار/إخفاء زر الملف الشخصي في الهيدر</p>
                        </div>
                        <label class="sb-toggle">
                            <input type="checkbox" ${e.show_profile_btn!==!1?"checked":""} onchange="window.StudioUI.handleNavTopBarChange('show_profile_btn',this.checked)">
                            <span class="sb-toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>`}},Q=class I{static TAB_ITEMS=[{key:"identity",label:"الهوية",icon:"fa-store",color:"#6366F1"},{key:"ai_palette",label:"20 ثيم",icon:"fa-palette",color:"#A78BFA"},{key:"light_colors",label:"الفاتح",icon:"fa-sun",color:"#F59E0B"},{key:"dark_colors",label:"الداكن",icon:"fa-moon",color:"#818CF8"},{key:"products_layout",label:"المنتجات",icon:"fa-boxes-stacked",color:"#10B981"},{key:"sections",label:"الأقسام",icon:"fa-layer-group",color:"#06B6D4"},{key:"navigation",label:"الأشرطة",icon:"fa-bars",color:"#0EA5E9"},{key:"typography",label:"الخطوط",icon:"fa-font",color:"#14B8A6"},{key:"shapes",label:"الأشكال",icon:"fa-shapes",color:"#FBBF24"},{key:"messages",label:"الرسائل",icon:"fa-comments",color:"#EC4899"},{key:"modals",label:"النوافذ",icon:"fa-window-restore",color:"#F43F5E"},{key:"marketing",label:"تسويق",icon:"fa-bullhorn",color:"#EF4444"},{key:"json",label:"JSON",icon:"fa-code",color:"#94A3B8"}];static TAB_GROUPS=[{title:"أساسيات المتجر",tabs:["identity","ai_palette","light_colors","dark_colors"]},{title:"تخطيط المتجر",tabs:["products_layout","sections","navigation","typography","shapes"]},{title:"تجربة المستخدم",tabs:["messages","modals","marketing"]},{title:"متقدم",tabs:["json"]}];static renderTabContent(u=o.activeTab){switch(u){case"identity":return G.render();case"products_layout":return ru.render();case"messages":return nu.render();case"sections":return lu.render();case"modals":return cu.render();case"light_colors":return Y.render("light");case"dark_colors":return Y.render("dark");case"ai_palette":return bu.render();case"typography":return _u.render();case"shapes":return gu.render();case"navigation":return vu.render();case"marketing":return Au.render();case"json":return Fu.render();default:return G.render()}}static render(){const{activeTab:u}=o,t=I.renderTabContent(u);return`
        <aside class="sb-sidebar-pane">
            <nav class="sb-nav-rail" id="sb-tabs-rail">
                ${I.TAB_GROUPS.flatMap(e=>e.tabs).map(e=>{const a=I.TAB_ITEMS.find(s=>s.key===e);return a?`
                        <button class="sb-rail-btn ${u===a.key?"active":""}" 
                                data-tab="${a.key}"
                                onclick="window.StudioUI.setActiveTab('${a.key}')" 
                                title="${a.label}">
                            <div class="sb-rail-icon" style="color: ${a.color};">
                                <i class="fas ${a.icon}"></i>
                            </div>
                            <span class="sb-rail-label">${a.label}</span>
                        </button>
                    `:""}).join("")}
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
                    ${I.TAB_GROUPS.map(e=>`
                        <div class="sb-tab-group">
                            <div class="sb-tab-group-header">${e.title}</div>
                            <div class="sb-tab-group-links">
                                ${e.tabs.map(a=>{const s=I.TAB_ITEMS.find(i=>i.key===a);return s?`
                                        <button class="sb-tab-link ${u===s.key?"active":""}" data-tab="${s.key}" onclick="window.StudioUI.setActiveTab('${s.key}')">
                                            <span class="sb-tab-link-icon" style="color: ${s.color};"><i class="fas ${s.icon}"></i></span>
                                            <span>${s.label}</span>
                                        </button>
                                    `:""}).join("")}
                            </div>
                        </div>
                    `).join("")}
                </div>

                ${t}
            </div>
        </aside>
        `}},yu=class{static render(){const{currentDevice:r}=o,u=`preview-frame-${r}`;return`
        <section class="sb-preview-pane">
            <div class="sb-preview-device-switcher" aria-label="اختيار حجم المعاينة">
                <button class="sb-device-btn ${r==="mobile"?"active":""}" data-device="mobile" onclick="window.StudioUI.setDevice('mobile')" title="جوال">
                    <i class="fas fa-mobile-alt"></i>
                    <span>جوال</span>
                </button>
                <button class="sb-device-btn ${r==="tablet"?"active":""}" data-device="tablet" onclick="window.StudioUI.setDevice('tablet')" title="تابلت">
                    <i class="fas fa-tablet-alt"></i>
                    <span>تابلت</span>
                </button>
                <button class="sb-device-btn ${r==="desktop"?"active":""}" data-device="desktop" onclick="window.StudioUI.setDevice('desktop')" title="كمبيوتر">
                    <i class="fas fa-desktop"></i>
                    <span>كمبيوتر</span>
                </button>
            </div>
            <div class="sb-preview-wrapper ${u}" id="preview-wrapper">
                <div class="sb-device-header ${r==="desktop"?"hidden":""}">
                    <div class="sb-device-speaker"></div>
                    <div class="sb-device-camera"></div>
                </div>
                <iframe id="store-preview-frame" class="sb-preview-iframe" src="index.html?store=${encodeURIComponent(o.merchantUsername||"store")}&preview=studio" title="المعاينة المباشرة للمتجر"></iframe>
            </div>
        </section>
        `}},p=class j{static timeoutId=null;static show(u,t="success"){let e=document.getElementById("builder-toast");e||(e=document.createElement("div"),e.id="builder-toast",e.className="builder-toast",document.body.appendChild(e));const a=t==="success"?"fa-check-circle":t==="error"?"fa-exclamation-triangle":"fa-info-circle";e.innerHTML=`
            <i class="fas ${a}"></i>
            <span>${u}</span>
        `,e.className=`builder-toast show ${t}`,j.timeoutId&&clearTimeout(j.timeoutId),j.timeoutId=setTimeout(()=>{e&&e.classList.remove("show")},3200)}},R=class{static render(){return`
        <div id="guide-modal" class="guide-modal-overlay" onclick="if(event.target === this) window.StudioUI.closeHelpModal()">
            <div class="guide-modal-card">
                <div class="guide-modal-header">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <div class="guide-icon-box">
                            <i class="fas fa-lightbulb"></i>
                        </div>
                        <div>
                            <h3 style="font-size:1.15rem; font-weight:900; color:var(--sb-text);">دليل استخدام مصمم المتجر المتقدم 🚀</h3>
                            <p style="font-size:0.8rem; color:var(--sb-muted);">خطوات وإرشادات سريعة لإنشاء وتخصيص واجهة متجرك بأعلى احترافية وسرعة</p>
                        </div>
                    </div>
                    <button class="guide-close-btn" onclick="window.StudioUI.closeHelpModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <div class="guide-steps-list">
                    <div class="guide-step-card">
                        <div class="guide-step-num">1</div>
                        <div>
                            <strong class="guide-step-title">هوية المتجر والإعلانات</strong>
                            <p class="guide-step-desc">
                                في تبويب <strong>هوية المتجر</strong>: حدد اسم المتجر الرسمي، الشعار التسويقي، وشريط الإعلانات الترويجي الذي يظهر للزوار في قمة المتجر.
                            </p>
                        </div>
                    </div>

                    <div class="guide-step-card">
                        <div class="guide-step-num">2</div>
                        <div>
                            <strong class="guide-step-title">تخصيص العرض للجوال والكمبيوتر بشكل مستقل</strong>
                            <p class="guide-step-desc">
                                في تبويب <strong>طريقة عرض المنتجات</strong>: يمكنك تخصيص عدد الأعمدة والصفوف وشكل السلايدر للجوال (📱 عمودين باللمس) وللكمبيوتر (💻 3-4 أعمدة) بشكل منفصل وتلقائي!
                            </p>
                        </div>
                    </div>

                    <div class="guide-step-card">
                        <div class="guide-step-num">3</div>
                        <div>
                            <strong class="guide-step-title">تخصيص كل قسم على حدة (Per-Category)</strong>
                            <p class="guide-step-desc">
                                يمكنك منح أي قسم من أقسامك (مثلاً العطور أو الملابس) مظهراً فريداً ومستقلاً (كسلايدر متطور أو شبكة عمودية) دون التأثير على باقي أقسام المتجر.
                            </p>
                        </div>
                    </div>

                    <div class="guide-step-card">
                        <div class="guide-step-num">4</div>
                        <div>
                            <strong class="guide-step-title">الألوان، القوالب الجاهزة والنشر السحابي</strong>
                            <p class="guide-step-desc">
                                اختر قالباً جاهزاً بضغطة زر أو ولّد ألواناً ذكية بالذكاء الاصطناعي، ثم اضغط <strong>نشر 🚀</strong> لحفظ التعديلات وتطبيقها فوراً على متجرك للعملاء.
                            </p>
                        </div>
                    </div>
                </div>

                <div style="display:flex; justify-content:flex-end; margin-top:20px;">
                    <button class="btn-sb-primary" style="width:100%; justify-content:center; padding:12px;" onclick="window.StudioUI.closeHelpModal()">
                        فهمت، لنبدأ التخصيص! ✨
                    </button>
                </div>
            </div>
        </div>
        `}static open(){const r=document.getElementById("guide-modal");r&&r.classList.add("show")}static close(){const r=document.getElementById("guide-modal");r&&r.classList.remove("show")}};function E(r,u="#4F46E5"){if(typeof r!="string")return u;let t=r.trim();if(!t)return u;const e={black:"#000000",white:"#FFFFFF",gray:"#808080",grey:"#808080",red:"#EF4444",blue:"#3B82F6",green:"#10B981",yellow:"#F59E0B",orange:"#F97316",purple:"#8B5CF6",pink:"#EC4899",brown:"#92400E",navy:"#1E3A8A",maroon:"#991B1B",teal:"#14B8A6",olive:"#65A30D",silver:"#E2E8F0",cyan:"#06B6D4",magenta:"#D946EF",indigo:"#4F46E5",rose:"#F43F5E",amber:"#D97706",emerald:"#059669",violet:"#7C3AED"},a=t.toLowerCase();if(e[a])return e[a].toUpperCase();const s=t.match(/rgba?\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})/i);if(s){const n=Math.min(255,Math.max(0,parseInt(s[1],10))),c=Math.min(255,Math.max(0,parseInt(s[2],10))),l=Math.min(255,Math.max(0,parseInt(s[3],10)));return`#${n.toString(16).padStart(2,"0")}${c.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}`.toUpperCase()}const i=t.match(/hsla?\s*\(\s*(\d{1,3}(?:\.\d+)?)\s*,\s*(\d{1,3}(?:\.\d+)?)%\s*,\s*(\d{1,3}(?:\.\d+)?)%/i);if(i){const n=parseFloat(i[1]),c=parseFloat(i[2]),l=parseFloat(i[3]);return g(n,c,l)}return t[0]!=="#"&&(t="#"+t),t.length===4&&/^#[0-9A-Fa-f]{3}$/.test(t)&&(t=`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`),t.length===9&&/^#[0-9A-Fa-f]{8}$/.test(t)&&(t=t.slice(0,7)),/^#[0-9A-Fa-f]{6}$/.test(t)?t.toUpperCase():u}function S(r){const u=E(r,"#4F46E5"),t=parseInt(u.slice(1,3),16)/255,e=parseInt(u.slice(3,5),16)/255,a=parseInt(u.slice(5,7),16)/255,s=Math.max(t,e,a),i=Math.min(t,e,a);let n=0,c=0;const l=(s+i)/2;if(s!==i){const d=s-i;switch(c=l>.5?d/(2-s-i):d/(s+i),s){case t:n=((e-a)/d+(e<a?6:0))/6;break;case e:n=((a-t)/d+2)/6;break;default:n=((t-e)/d+4)/6}}return{h:Math.round(n*360),s:Math.round(c*100),l:Math.round(l*100)}}function g(r,u,t){const e=(r%360+360)%360,a=Math.max(0,Math.min(100,u))/100,s=Math.max(0,Math.min(100,t))/100,i=a*Math.min(s,1-s),n=c=>{const l=(c+e/30)%12,d=s-i*Math.max(Math.min(l-3,9-l,1),-1);return Math.round(255*d).toString(16).padStart(2,"0")};return`#${n(0)}${n(8)}${n(4)}`.toUpperCase()}function X(r){const u=E(r,"#4F46E5"),{h:t,s:e,l:a}=S(u);if(e<=12){const s=a>60?220:200,i=a>60?26:32,n=a>60?62:52;return g(s,i,n)}return g((t+150)%360,Math.max(65,e),50)}function V(r){const u=E(r,"#4F46E5"),t=parseInt(u.slice(1,3),16),e=parseInt(u.slice(3,5),16),a=parseInt(u.slice(5,7),16);return .299*t+.587*e+.114*a>152?"#0F172A":"#FFFFFF"}function L(r={}){const u=E(r.primary,"#4F46E5"),{h:t,s:e,l:a}=S(u),s=a>85?g(t,Math.max(60,e),55):a<20?g(t,e,35):u,i=V(s),n=r.accent?E(r.accent):X(u),c=g(t,Math.min(100,e+6),Math.max(20,a-10));let l,d,b,F;if(r.bg&&r.bg.trim()){const v=E(r.bg),{h:w,s:y,l:C}=S(v),f=C<75?97:C;l=g(w,Math.min(25,y),f),d="#FFFFFF",b=g(w,Math.min(20,y),Math.max(90,f-3)),F=g(w,Math.min(30,y+5),Math.max(82,f-9))}else{const v=e<=12?215:t;l=g(v,12,98),d="#FFFFFF",b=g(v,14,95),F=g(v,18,90)}let A,h;if(r.text&&r.text.trim()){const v=E(r.text),{h:w,s:y,l:C}=S(v),f=C>45?12:C;A=g(w,Math.min(35,y),f),h=g(w,Math.max(0,y-10),Math.min(60,f+30))}else A="#0F172A",h="#64748B";return{primary:s,primary_hover:c,primary_gradient_start:s,primary_gradient_end:n,accent:n,bg_body:l,bg_card:d,bg_surface:b,text_main:A,text_muted:h,border:F,navbar_bg:d,navbar_text:A,bottom_bar_bg:d,bottom_bar_active:s,bottom_bar_inactive:"#94A3B8",card_bg:d,card_border:F,card_title:A,price_color:s,old_price_color:"#94A3B8",badge_bg:"#EF4444",badge_text:"#FFFFFF",section_title:A,category_chip_bg:b,category_chip_active:s,category_chip_text:A,modal_bg:d,modal_overlay:"rgba(15, 23, 42, 0.55)",modal_handle:"#CBD5E1",btn_primary_bg:s,btn_primary_text:i,chatbot_btn_bg:s,toast_bg:A,toast_text:"#FFFFFF"}}function J(r={}){const u=E(r.primary,"#6366F1"),{h:t,s:e,l:a}=S(u),s=a<45?Math.min(a+22,68):Math.min(a+6,75),i=g(t,e<=12?Math.max(e,20):Math.min(e+10,92),s),n=r.accent?E(r.accent):X(u),c=V(i),l=g(t,Math.min(92,e+6),Math.min(s+8,82));let d,b,F,A,h;if(r.bg&&r.bg.trim()){const y=E(r.bg),{h:C,s:f,l:$}=S(y),k=$>30?7:Math.max(4,$);d=g(C,Math.min(40,Math.max(12,f)),k),b=g(C,Math.min(36,f+2),k+6),F=g(C,Math.min(34,f+4),k+11),h=g(C,Math.min(36,f+2),k+5),A=g(C,Math.min(30,f+5),k+14)}else{const y=e<=12?220:t;d=g(y,28,6),b=g(y,26,11),F=g(y,24,15),h=g(y,26,10),A=g(y,20,20)}let v,w;if(r.text&&r.text.trim()){const y=E(r.text),{h:C,s:f,l:$}=S(y),k=$<65?96:$;v=g(C,Math.min(25,f),k),w=g(C,Math.max(0,f-10),Math.max(50,k-32))}else v="#F8FAFC",w="#94A3B8";return{primary:i,primary_hover:l,primary_gradient_start:i,primary_gradient_end:n,accent:n,bg_body:d,bg_card:b,bg_surface:F,text_main:v,text_muted:w,border:A,navbar_bg:h,navbar_text:v,bottom_bar_bg:h,bottom_bar_active:i,bottom_bar_inactive:"#64748B",card_bg:b,card_border:A,card_title:v,price_color:l,old_price_color:"#64748B",badge_bg:"#EF4444",badge_text:"#FFFFFF",section_title:v,category_chip_bg:F,category_chip_active:i,category_chip_text:v,modal_bg:b,modal_overlay:"rgba(0, 0, 0, 0.85)",modal_handle:"#475569",btn_primary_bg:i,btn_primary_text:c,chatbot_btn_bg:i,toast_bg:F,toast_text:v}}function fu(r){const{h:u,s:t,l:e}=S(E(r));let a="Tajawal",s="700",i="12px",n="rounded",c="14px",l="lift",d="by_categories_sections",b="portrait";const F=t<15,A=t<60&&e>75,h=t>70,v=e<35,w=u>=0&&u<45||u>=330&&u<=360,y=u>=45&&u<75,C=u>=75&&u<160,f=u>=160&&u<260,$=u>=260&&u<330;return F?(a="Alexandria",s="600",i="4px",n="square",c="4px",l="lift",d="all_flat_grid"):C?(a="Almarai",s="700",i="20px",n="pill",c="9999px",l="glow",d="tabs_by_category",b="portrait"):$?(a="Readex Pro",s="700",i="28px",n="pill",c="9999px",l="scale",d="featured_first",b="portrait"):y||w&&v?(a="Changa",s="800",i="0px",n="square",c="0px",l="lift",d="by_categories_sections",b="landscape"):f?(a="Cairo",s="700",i="12px",n="rounded",c="12px",l="lift",d="by_categories_sections",b="portrait"):w&&h?(a="Tajawal",s="800",i="16px",n="rounded",c="16px",l="scale",d="featured_first",b="portrait"):A&&(a="El Messiri",s="700",i="20px",n="pill",c="9999px",l="lift",d="tabs_by_category"),{font:a,weight:s,radius:i,button_style:n,button_radius:c,anim:l,display:d,card_style:b,l:e}}var Z=class _{static isInitialized=!1;static init(){_.isInitialized||(_.isInitialized=!0,o.init(),_.mountWindowBridge(),_.mountApp(),o.subscribe((u,t,e)=>{_.handleStateUpdate(t,e)}),window.addEventListener("keydown",u=>{(u.ctrlKey||u.metaKey)&&u.key==="z"?(u.preventDefault(),_.undo()):(u.ctrlKey||u.metaKey)&&u.key==="y"&&(u.preventDefault(),_.redo())}),window.addEventListener("message",u=>{u.data&&u.data.type==="NALSH_IFRAME_READY"&&setTimeout(()=>{o.sendLiveUpdateToPreview(),o.syncIframeTheme(o.isDarkPreview)},100)}))}static mountApp(){const u=document.getElementById("studio-app-root");if(!u)return;const{mobileView:t}=o,e=t==="preview"?"view-mode-preview":"view-mode-controls";u.innerHTML=`
            ${ou.render()}
            <main class="sb-workspace ${e}">
                ${Q.render()}
                ${yu.render()}
            </main>
            ${R.render()}
            <div class="sb-mobile-view-switcher">
                <button class="sb-m-view-btn ${t==="controls"?"active":""}" onclick="window.StudioUI.setMobileView('controls')">
                    <i class="fas fa-sliders-h"></i> <span>التخصيص</span>
                </button>
                <button class="sb-m-view-btn ${t==="preview"?"active":""}" onclick="window.StudioUI.setMobileView('preview')">
                    <i class="fas fa-eye"></i> <span>المعاينة</span>
                </button>
            </div>
        `}static refreshActiveTab(u=!0){const t=document.getElementById("sb-tab-content-area");if(!t)return;const e=u?t.scrollTop:0;t.innerHTML=Q.renderTabContent(o.activeTab),u&&(t.scrollTop=e)}static handleStateUpdate(u,t){const e=document.getElementById("btn-undo"),a=document.getElementById("btn-redo");if(e&&(e.disabled=!o.canUndo()),a&&(a.disabled=!o.canRedo()),t==="tab")document.querySelectorAll("#sb-tabs-rail .sb-rail-btn").forEach(s=>{const i=s.getAttribute("data-tab");s.classList.toggle("active",i===u)}),_.refreshActiveTab(!1);else if(t==="device"){const s=document.getElementById("preview-wrapper");s&&(s.className=`sb-preview-wrapper preview-frame-${o.currentDevice}`);const i=document.getElementById("preview-device-header");i&&i.classList.toggle("hidden",o.currentDevice==="desktop"),document.querySelectorAll(".sb-device-btn").forEach(c=>{const l=c.getAttribute("data-device")===o.currentDevice;c.classList.toggle("active",l)}),o.activeTab==="products_layout"&&_.refreshActiveTab(!0)}else if(t==="dark_mode"){const s=document.getElementById("sb-theme-icon"),i=document.getElementById("sb-theme-mode-text");s&&(s.className=`fas ${o.isDarkPreview?"fa-sun":"fa-moon"}`),i&&(i.textContent=o.isDarkPreview?"فاتح":"داكن")}else if(t==="mobile_view"){const s=document.querySelector(".sb-workspace");s&&(s.className=`sb-workspace view-mode-${o.mobileView}`),document.querySelectorAll(".sb-m-view-btn").forEach(n=>{const c=o.mobileView==="controls"&&n.innerHTML.includes("التخصيص")||o.mobileView==="preview"&&n.innerHTML.includes("المعاينة");n.classList.toggle("active",c)})}else(t==="history"||t==="full_sync")&&_.refreshActiveTab(!0)}static undo(){o.undo()&&p.show("تم التراجع ↩️","info")}static redo(){o.redo()&&p.show("تمت الإعادة ↪️","info")}static mountWindowBridge(){window.StudioUI={setActiveTab:u=>o.setActiveTab(u),switchProductSubTab:u=>{o.setProductSubTab(u),_.refreshActiveTab(!0)},setDevice:u=>o.setDevice(u),setMobileView:u=>o.setMobileView(u),toggleDarkMode:()=>o.togglePreviewDarkMode(),undo:()=>_.undo(),redo:()=>_.redo(),openHelpModal:()=>R.open(),closeHelpModal:()=>R.close(),handleIdentityChange:(u,t)=>{o.updateConfig(e=>{e.store_identity||(e.store_identity={}),e.store_identity[u]=t},!0,"live_update")},handleAnnouncementChange:(u,t,e=!1)=>{o.updateConfig(a=>{a.store_identity||(a.store_identity={}),a.store_identity.announcement_bar||(a.store_identity.announcement_bar={enabled:!0,text:"",bg_color:"#4F46E5",text_color:"#FFFFFF"}),a.store_identity.announcement_bar[u]=t},!0,e?"full_sync":"live_update"),e&&_.refreshActiveTab(!0)},handleDefaultThemeModeChange:u=>{o.updateConfig(t=>{t.default_theme_mode=u},!0,"full_sync"),_.refreshActiveTab(!0),p.show(`تم تعيين الوضع الافتراضي: ${u==="dark"?"الداكن 🌙":u==="light"?"الفاتح ☀️":"تلقائي 🖥️"}`)},handleProductsSettingChange:(u,t,e=!0)=>{o.updateConfig(a=>{a.products_settings||(a.products_settings={}),a.products_settings[u]=t},!0,e?"full_sync":"live_update"),e&&_.refreshActiveTab(!0)},handleOrientationSettingChange:(u,t,e,a=!0)=>{const i=a||["scroll_direction","grid_columns","grid_rows","slider_rows","card_orientation","items_per_row"].includes(t);o.updateConfig(n=>{n.products_settings||(n.products_settings={}),n.products_settings[u]||(n.products_settings[u]={}),n.products_settings[u][t]=e,u==="portrait"&&(n.products_settings[t]=e)},!0,i?"full_sync":"live_update"),i&&_.refreshActiveTab(!0)},handleCategorySelectForOverride:u=>{o.selectedCategoryForOverride=u,_.refreshActiveTab(!0)},handleDimensionSliderChange:(u,t,e)=>{o.applyDimensionsDirectlyToCSS(u,{[t]:e}),o.updateConfig(a=>{a.products_settings||(a.products_settings={}),a.products_settings[u]||(a.products_settings[u]={}),a.products_settings[u][t]=e},!0,"live_update")},handleCardStyleChange:(u,t)=>{o.updateConfig(e=>{e.products_settings||(e.products_settings={}),e.products_settings[u]||(e.products_settings[u]={}),e.products_settings[u].card_style=t},!0,"full_sync"),_.refreshActiveTab(!0),p.show(`تم تغيير شكل الكروت إلى "${t}" ✨`)},handleAddToCartBtnSettingChange:(u,t,e=!0)=>{o.updateConfig(a=>{a.products_settings||(a.products_settings={}),a.products_settings.add_to_cart_btn||(a.products_settings.add_to_cart_btn={}),a.products_settings.add_to_cart_btn[u]=t},!0,"full_sync"),e&&_.refreshActiveTab(!0)},toggleCategoryOverrideEnabled:(u,t)=>{o.updateConfig(e=>{e.products_settings.category_overrides||(e.products_settings.category_overrides={}),e.products_settings.category_overrides[u]?e.products_settings.category_overrides[u].enabled=t:e.products_settings.category_overrides[u]={enabled:t,scroll_direction:"horizontal",items_per_row:2,grid_columns:2,grid_rows:0,slider_rows:1,card_orientation:"portrait"}},!0,"full_sync"),_.refreshActiveTab(!0)},handleCategoryOverrideChange:(u,t,e,a=!0)=>{const i=a||["scroll_direction","grid_columns","grid_rows","slider_rows","card_orientation","items_per_row","card_style"].includes(t);o.updateConfig(n=>{n.products_settings.category_overrides||(n.products_settings.category_overrides={}),n.products_settings.category_overrides[u]||(n.products_settings.category_overrides[u]={enabled:!0}),n.products_settings.category_overrides[u][t]=e},!0,i?"full_sync":"live_update"),i&&_.refreshActiveTab(!0)},handleCategoryDimensionChange:(u,t,e)=>{o.updateConfig(a=>{a.products_settings.category_overrides||(a.products_settings.category_overrides={}),a.products_settings.category_overrides[u]||(a.products_settings.category_overrides[u]={enabled:!0}),a.products_settings.category_overrides[u][t]=e},!0,"live_update")},deleteCategoryOverride:u=>{confirm(`هل أنت متأكد من حذف التخصيص المستقل لقسم "${u}" والعودة للإعدادات العامة؟`)&&(o.updateConfig(t=>{t.products_settings?.category_overrides?.[u]&&delete t.products_settings.category_overrides[u]},!0,"full_sync"),_.refreshActiveTab(!0),p.show(`تم حذف تخصيص ${u} والعودة للنمط العام 🔄`))},resetProductsLayoutDefaults:()=>{confirm("هل تريد استعادة الإعدادات الافتراضية لطريقة عرض المنتجات؟")&&(o.updateConfig(u=>{u.products_settings=JSON.parse(JSON.stringify(m.products_settings))},!0,"full_sync"),_.refreshActiveTab(!0),p.show("تمت استعادة إعدادات عرض المنتجات بنجاح 🔄"))},handleColorChange:(u,t,e,a)=>{const s=typeof e=="string"?e.trim():"",i=u==="dark_theme";if(o.isDarkPreview!==i&&o.setPreviewDarkMode(i),o.updateConfig(n=>{if(n[u]||(n[u]={colors:{}}),n[u].colors||(n[u].colors={}),s&&(n[u].colors[t]=s),["primary","badge_bg","btn_primary_bg","chatbot_btn_bg"].includes(t)&&/^#[0-9A-Fa-f]{6}$/.test(s)){const c=V(s);t==="badge_bg"&&(n[u].colors.badge_text=c),t==="btn_primary_bg"&&(n[u].colors.btn_primary_text=c)}},!0,"live_update"),a){const n=a.closest(".sb-color-card");if(n){const c=n.querySelector(".sb-color-input"),l=n.querySelector(".sb-hex-input");a===c&&l?l.value=s:a===l&&c&&/^#[0-9A-Fa-f]{6}$/.test(s)&&(c.value=s)}}},generateSmartForMode:(u,t)=>{const e=u==="light"?"light_theme":"dark_theme",a=o.config[e]?.colors||{},s=t||document.getElementById(`seed-primary-${e}`)?.value||document.getElementById("ai-seed-primary")?.value||a.primary||(u==="light"?"#4F46E5":"#6366F1"),i=document.getElementById(`seed-bg-${e}`)?.value||(u==="light"?document.getElementById("ai-seed-lightbg")?.value:document.getElementById("ai-seed-darkbg")?.value)||a.bg_body||(u==="light"?"#F8FAFC":"#0B1120"),n=document.getElementById(`seed-text-${e}`)?.value||a.text_main||(u==="light"?"#0F172A":"#F8FAFC"),c=document.getElementById(`seed-accent-${e}`)?.value||document.getElementById("ai-seed-accent")?.value||a.accent||(u==="light"?"#14B8A6":"#2DD4BF");o.updateConfig(l=>{u==="light"?l.light_theme={colors:L({primary:s,bg:i,text:n,accent:c})}:l.dark_theme={colors:J({primary:s,bg:i,text:n,accent:c})}},!0,"full_sync"),o.setPreviewDarkMode(u==="dark"),_.refreshActiveTab(!0),p.show(`تم توليد وتنسيق ألوان الوضع ${u==="light"?"الفاتح ☀️":"الداكن 🌙"} بنجاح ✨`)},generateSmartSectionForMode:(u,t)=>{const e=u==="light"?"light_theme":"dark_theme",a=o.config[e]?.colors||{},s=document.getElementById(`seed-primary-${e}`)?.value||document.getElementById("ai-seed-primary")?.value||a.primary||(u==="light"?"#4F46E5":"#6366F1"),i=document.getElementById(`seed-bg-${e}`)?.value||(u==="light"?document.getElementById("ai-seed-lightbg")?.value:document.getElementById("ai-seed-darkbg")?.value)||a.bg_body||(u==="light"?"#F8FAFC":"#0B1120"),n=document.getElementById(`seed-text-${e}`)?.value||a.text_main||(u==="light"?"#0F172A":"#F8FAFC"),c=document.getElementById(`seed-accent-${e}`)?.value||document.getElementById("ai-seed-accent")?.value||a.accent||(u==="light"?"#14B8A6":"#2DD4BF"),l=u==="light"?L({primary:s,bg:i,text:n,accent:c}):J({primary:s,bg:i,text:n,accent:c});o.updateConfig(b=>{b[e]||(b[e]={colors:{}}),b[e].colors||(b[e].colors={}),t==="bg"?(b[e].colors.bg_body=l.bg_body,b[e].colors.bg_card=l.bg_card,b[e].colors.bg_surface=l.bg_surface,b[e].colors.navbar_bg=l.navbar_bg,b[e].colors.bottom_bar_bg=l.bottom_bar_bg,b[e].colors.border=l.border,b[e].colors.card_bg=l.card_bg,b[e].colors.card_border=l.card_border,b[e].colors.modal_bg=l.modal_bg):t==="buttons"?(b[e].colors.primary=l.primary,b[e].colors.primary_hover=l.primary_hover,b[e].colors.primary_gradient_start=l.primary_gradient_start,b[e].colors.primary_gradient_end=l.primary_gradient_end,b[e].colors.accent=l.accent,b[e].colors.price_color=l.price_color,b[e].colors.badge_bg=l.badge_bg,b[e].colors.badge_text=l.badge_text,b[e].colors.btn_primary_bg=l.btn_primary_bg,b[e].colors.btn_primary_text=l.btn_primary_text,b[e].colors.chatbot_btn_bg=l.chatbot_btn_bg,b[e].colors.category_chip_active=l.category_chip_active,b[e].colors.bottom_bar_active=l.bottom_bar_active):t==="text"&&(b[e].colors.text_main=l.text_main,b[e].colors.text_muted=l.text_muted,b[e].colors.card_title=l.card_title,b[e].colors.section_title=l.section_title,b[e].colors.navbar_text=l.navbar_text,b[e].colors.category_chip_text=l.category_chip_text)},!0,"full_sync"),o.setPreviewDarkMode(u==="dark"),_.refreshActiveTab(!0);const d={bg:"الخلفيات والكروت",buttons:"الأزرار والأسعار",text:"النصوص والعناوين"};p.show(`تم تخصيص وتوليد ${d[t]||"العناصر"} بنجاح ✨`)},generateSmartHarmony:(u="intelligent")=>{const t=document.getElementById("ai-seed-primary")?.value||document.getElementById("ai-seed-primary-hex")?.value||document.getElementById("ai-seed-color")?.value||o.config.light_theme?.colors?.primary||"#4F46E5",e=document.getElementById("ai-seed-lightbg")?.value||document.getElementById("ai-seed-lightbg-hex")?.value||o.config.light_theme?.colors?.bg_body||"#F8FAFC",a=document.getElementById("ai-seed-darkbg")?.value||document.getElementById("ai-seed-darkbg-hex")?.value||o.config.dark_theme?.colors?.bg_body||"#0B1120",s=document.getElementById("ai-seed-accent")?.value||document.getElementById("ai-seed-accent-hex")?.value||o.config.light_theme?.colors?.accent||"#14B8A6";o.updateConfig(i=>{if(i.light_theme={colors:L({primary:t,bg:e,accent:s})},i.dark_theme={colors:J({primary:t,bg:a,accent:s})},u==="intelligent"){const n=fu(t);i.typography||(i.typography={}),i.shapes||(i.shapes={}),i.animations||(i.animations={}),i.products_settings||(i.products_settings={}),i.products_settings.portrait||(i.products_settings.portrait={}),i.products_settings.landscape||(i.products_settings.landscape={}),i.typography.font_family=n.font,i.typography.heading_weight=n.weight,i.shapes.card_radius=n.radius,i.shapes.button_style=n.button_style,i.shapes.button_radius=n.button_radius,i.animations.card_hover=n.anim,i.products_settings.display_mode=n.display,i.products_settings.portrait={...i.products_settings.portrait,card_orientation:n.card_style==="landscape"?"landscape":"portrait",grid_columns:(n.display==="tabs_by_category",2),scroll_direction:"vertical"},i.products_settings.landscape={...i.products_settings.landscape,card_orientation:n.card_style,grid_columns:n.card_style==="landscape"?3:4,scroll_direction:"horizontal"},i.default_theme_mode=n.l<40?"dark":"light"}},!0,"full_sync"),_.refreshActiveTab(!0),p.show("تم توليد هوية المتجر الكاملة بذكاء بناءً على ألوانك المفضلة ✨🎨")},applySmartIndustryBundle:u=>{const e={luxury:"#D97706",tech:"#06B6D4",fashion:"#EC4899",organic:"#059669",artisan:"#B45309",modern:"#8B5CF6"}[u]||"#4F46E5",a=document.getElementById("ai-seed-color"),s=document.getElementById("ai-seed-hex");a&&(a.value=e),s&&(s.value=e);const i=document.getElementById("ai-style-preset");i&&(i.value=u),window.StudioUI.generateSmartHarmony("intelligent")},handlePresetApply:(u,t="both")=>{const e=N.find(s=>s.id===u);if(!e)return;o.updateConfig(s=>{s.theme_name=e.id,t==="both"?(s.light_theme=JSON.parse(JSON.stringify(e.light_theme||{})),s.dark_theme=JSON.parse(JSON.stringify(e.dark_theme||{})),e.typography&&(s.typography={...s.typography,...e.typography}),e.shapes&&(s.shapes={...s.shapes,...e.shapes})):t==="light"?(s.light_theme=JSON.parse(JSON.stringify(e.light_theme||{})),e.typography&&(s.typography={...s.typography,...e.typography}),e.shapes&&(s.shapes={...s.shapes,...e.shapes})):t==="dark"&&(s.dark_theme=JSON.parse(JSON.stringify(e.dark_theme||{})),e.typography&&(s.typography={...s.typography,...e.typography}),e.shapes&&(s.shapes={...s.shapes,...e.shapes}))},!0,"full_sync"),t==="light"?o.setPreviewDarkMode(!1):t==="dark"&&o.setPreviewDarkMode(!0),_.refreshActiveTab(!0);const a=t==="both"?"الوضعين معاً":t==="light"?"الوضع الفاتح ☀️":"الوضع الداكن 🌙";p.show(`تم تطبيق ثيم "${e.name}" لـ (${a}) بنجاح ✨`)},filterPresetCards:(u,t)=>{const e=document.getElementById("theme-category-pills");e&&e.querySelectorAll(".sb-badge-pill").forEach(s=>{s.style.background="var(--sb-surface)",s.style.borderColor="var(--sb-border)",s.style.color="var(--sb-text)"}),t&&(t.style.background="var(--sb-primary)",t.style.borderColor="var(--sb-primary)",t.style.color="#FFFFFF"),document.querySelectorAll(".sb-preset-theme-card").forEach(s=>{const i=s,n=i.getAttribute("data-category")||"عام";u==="الكل"||n===u?i.style.display="block":i.style.display="none"})},handleStoreMessageChange:(u,t)=>{o.updateConfig(e=>{e.messages||(e.messages={}),e.store_messages||(e.store_messages={}),e.messages[u]=t,e.store_messages[u]=t},!0,"live_update")},handleModalFieldChange:(u,t,e)=>{o.updateConfig(a=>{a.modals_customization||(a.modals_customization={}),a.modals_customization[u]||(a.modals_customization[u]={}),a.modals_customization[u][t]=e},!0,"live_update")},toggleAccordion:u=>{const t=document.getElementById(`sec-acc-${u}`);t&&t.classList.toggle("open")},moveSectionBlock:(u,t)=>{o.updateConfig(e=>{const a=e.layout_blocks||[],s=u+t;if(s<0||s>=a.length)return;const i=a[u];a[u]=a[s],a[s]=i,a.forEach((n,c)=>n.order=c+1)},!0,"full_sync"),_.refreshActiveTab(!0),p.show("تم تحديث ترتيب الأقسام ✨")},toggleSectionVisibility:u=>{o.updateConfig(t=>{const e=t.layout_blocks||[];e[u]&&(e[u].visible=!e[u].visible)},!0,"full_sync"),_.refreshActiveTab(!0)},handleBlockFieldChange:(u,t,e)=>{o.updateConfig(a=>{const s=a.layout_blocks||[];s[u]&&(s[u][t]=e)},!0,"live_update")},handleBlockSettingChange:(u,t,e)=>{o.updateConfig(a=>{const s=a.layout_blocks||[];s[u]&&(s[u].settings||(s[u].settings={}),s[u].settings[t]=e)},!0,"live_update")},handleTypographyChange:(u,t,e=!1)=>{o.updateConfig(a=>{a.typography||(a.typography={}),a.typography[u]=t},!0,e?"full_sync":"live_update"),e&&_.refreshActiveTab(!0)},handleShapeChange:(u,t)=>{o.updateConfig(e=>{e.shapes||(e.shapes={}),e.shapes[u]=t},!0,"full_sync"),_.refreshActiveTab(!0)},applyStyleLibraryPreset:u=>{const t=W[u]||W["modern-soft"];t&&(o.updateConfig(e=>{const a=e;a.style_library||(a.style_library={}),a.style_library.current=t.id,a.shapes||(a.shapes={}),a.shapes.card_radius=t.cardRadius,a.shapes.button_style=t.buttonStyle,a.shapes.button_radius=t.buttonRadius,a.animations||(a.animations={}),a.animations.card_hover=t.animation,a.products_settings||(a.products_settings={}),a.products_settings.display_mode=t.displayMode,a.messages||(a.messages={}),a.messages.ai_assistant||(a.messages.ai_assistant={}),a.messages.ai_assistant.name=t.name||t.label,a.messages.ai_assistant.persona=t.botPersona,a.messages.ai_assistant.button_style=t.botButtonStyle,a.messages.ai_assistant.avatar_style=t.botAvatarStyle,a.messages.ai_assistant.accent_color=t.accent,a.navigation_settings||(a.navigation_settings={}),a.navigation_settings.top_bar||(a.navigation_settings.top_bar={}),a.navigation_settings.bottom_bar||(a.navigation_settings.bottom_bar={}),a.navigation_settings.top_bar.navbar_style=t.navbarStyle,a.navigation_settings.bottom_bar.style=t.navbarStyle},!0,"full_sync"),_.refreshActiveTab(!0),p.show(`تم تطبيق نمط "${t.label}" بنجاح ✨`))},handleAnimationChange:(u,t)=>{o.updateConfig(e=>{e.animations||(e.animations={}),e.animations[u]=t},!0,"full_sync"),_.refreshActiveTab(!0)},handleMarketingChange:(u,t,e,a=!1)=>{o.updateConfig(s=>{s.marketing||(s.marketing={}),s.marketing[u]||(s.marketing[u]={}),s.marketing[u][t]=e},!0,a?"full_sync":"live_update"),a&&_.refreshActiveTab(!0)},handleJsonApplyFromText:()=>{const u=document.getElementById("live-json-editor");if(u)try{const t=JSON.parse(u.value),{sanitizedConfig:e}=O(t);o.pushHistory(),o.config=e,o.sendLiveUpdateToPreview(),_.refreshActiveTab(!0),p.show("تم تطبيق ملف JSON بنجاح ✅")}catch(t){alert("خطأ في صيغة JSON: "+t.message)}},handleJsonFileUpload:u=>{const t=u.target.files&&u.target.files[0];if(!t)return;const e=new FileReader;e.onload=a=>{try{const s=JSON.parse(a.target?.result),{sanitizedConfig:i}=O(s);o.pushHistory(),o.config=i,o.sendLiveUpdateToPreview(),_.refreshActiveTab(!0),p.show(`تم استيراد الملف "${t.name}" بنجاح ✅`)}catch(s){alert("خطأ في قراءة ملف JSON: "+s.message)}},e.readAsText(t),u.target.value=""},copyJsonClipboard:()=>{navigator.clipboard.writeText(JSON.stringify(o.config,null,2)).then(()=>{p.show("تم نسخ JSON للحافظة 📋")})},copyMerchantPromptClipboard:()=>{const u=document.getElementById("store-merchant-prompt"),t=u?.value||(()=>{const e=o.config,a={store_name:e.store_name||"متجري",store_tagline:e.store_tagline||"متجر عربي عصري",language:"ar",currency:e.currency||"SAR",default_theme_mode:e.default_theme_mode||"light",primary_color:e.light_theme?.colors?.primary||"#4F46E5",accent_color:e.light_theme?.colors?.accent||"#8B5CF6",background_color:e.light_theme?.colors?.bg_body||"#F8FAFC",typography:{font_family:e.typography?.font_family||"Tajawal",heading_weight:e.typography?.heading_weight||"700",base_size:e.typography?.base_size||16},navigation:e.navigation_settings||{},marketing:e.marketing||{},messages:e.messages||e.store_messages||{},modals:e.modals_customization||{},sections:Array.isArray(e.sections)?e.sections:[],products_settings:e.products_settings||{}};return`أنت مصمم متجر إلكتروني عربي عصري ومتخصص. استخدم هذا القالب الكامل لتخصيص متجر كامل، وابقِ البنية نفسها، ولا تكتب شرحاً إضافياً، فقط أعد القيم المناسبة للمتجر وتأكد أن الناتج صالح JSON:

${JSON.stringify(a,null,2)}`})();navigator.clipboard.writeText(t).then(()=>{p.show("تم نسخ البرومبت الخاص بالمتجر للحافظة ✍️")}).catch(()=>{u&&(u.select(),document.execCommand("copy")),p.show("تم نسخ البرومبت للحافظة ✍️")})},resetMerchantPrompt:()=>{const u=document.getElementById("store-merchant-prompt");if(!u)return;const t=o.config,e={store_name:t.store_name||"متجري",store_tagline:t.store_tagline||"متجر عربي عصري",language:"ar",currency:t.currency||"SAR",default_theme_mode:t.default_theme_mode||"light",primary_color:t.light_theme?.colors?.primary||"#4F46E5",accent_color:t.light_theme?.colors?.accent||"#8B5CF6",background_color:t.light_theme?.colors?.bg_body||"#F8FAFC",typography:{font_family:t.typography?.font_family||"Tajawal",heading_weight:t.typography?.heading_weight||"700",base_size:t.typography?.base_size||16},navigation:t.navigation_settings||{},marketing:t.marketing||{},messages:t.messages||t.store_messages||{},modals:t.modals_customization||{},sections:Array.isArray(t.sections)?t.sections:[],products_settings:t.products_settings||{}};u.value=`أنت مصمم متجر إلكتروني عربي عصري ومتخصص. استخدم هذا القالب الكامل لتخصيص متجر كامل، وابقِ البنية نفسها، ولا تكتب شرحاً إضافياً، فقط أعد القيم المناسبة للمتجر وتأكد أن الناتج صالح JSON:

${JSON.stringify(e,null,2)}`,u.focus(),p.show("تم تحديث برومبت تخصيص المتجر 🔄")},downloadJson:()=>{const u=`storefront_config_${o.merchantUsername}.json`,t=new Blob([JSON.stringify(o.config,null,2)],{type:"application/json"}),e=URL.createObjectURL(t),a=document.createElement("a");a.href=e,a.download=u,a.click(),URL.revokeObjectURL(e),p.show("تم تنزيل ملف الإعدادات 📥")},resetAllDefaults:()=>{confirm("⚠️ هل أنت متأكد من استعادة كافة إعدادات المتجر إلى الوضع الافتراضي؟ ستفقد التعديلات غير المنشورة.")&&(o.resetToDefaults(),_.refreshActiveTab(!0),p.show("تمت استعادة كافة الإعدادات الافتراضية بنجاح 🔄"))},publishTheme:async()=>{const u=document.getElementById("btn-publish-live"),t=u?u.innerHTML:"";u&&(u.innerHTML='<i class="fas fa-spinner fa-spin"></i> <span>جاري النشر السحابي...</span>',u.disabled=!0);try{const e=o.merchantToken||localStorage.getItem("merchant_token")||sessionStorage.getItem("merchant_token");if(!e){p.show("يجب تسجيل الدخول كتاجر لتتمكن من النشر 🔒","error"),setTimeout(()=>{window.location.replace("login.html?redirect=store-builder.html")},1200);return}const{sanitizedConfig:a,notices:s}=O(o.config,o.merchantPlanType);o.config=a;const i={"Content-Type":"application/json",Authorization:"Bearer "+e},n=await fetch(H,{method:"POST",headers:i,body:JSON.stringify({action:"save_storefront_config",merchant_username:o.merchantUsername,config:a})});if(n.status===401||n.status===403){localStorage.removeItem("merchant_token"),sessionStorage.removeItem("merchant_token"),p.show("انتهت صلاحية الجلسة. يرجى تسجيل الدخول مجدداً 🔒","error"),setTimeout(()=>{window.location.replace("login.html?redirect=store-builder.html&expired=1")},1200);return}const c=await n.json().catch(()=>null),l=!!(c&&(c.status==="success"||c.status==="ok"||c.success===!0||c.saved===!0||c.updated===!0||c.config||c.message||c.data||c.id));if(n.ok&&l){try{const b=JSON.stringify(a);localStorage.setItem(`nalsh_storefront_config_${o.merchantUsername}`,b),localStorage.setItem("nalsh_storefront_config",b),localStorage.setItem("nalsh_storefront_config_v2",b),localStorage.setItem("nalsh_storefront_config_store",b)}catch{}fetch(H,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e},body:JSON.stringify({action:"update_theme_config_file",merchant_username:o.merchantUsername,config:a})}).catch(()=>{}),o.sendLiveUpdateToPreview();const d=Array.isArray(s)&&s.length>0?` (${s[0]})`:"";p.show(`تم نشر مظهر متجرك سحابياً بنجاح! 🚀${d}`,"success")}else{const d=c?.message||"تعذر النشر على الخادم السحابي";try{const b=JSON.stringify(a);localStorage.setItem(`nalsh_storefront_config_${o.merchantUsername}`,b),localStorage.setItem("nalsh_storefront_config",b),localStorage.setItem("nalsh_storefront_config_v2",b)}catch{}p.show(`⚠️ تم حفظ التعديل محلياً كمسودة (${d})`,"info")}}catch(e){console.error("Publish error:",e);try{localStorage.setItem(`nalsh_storefront_config_${o.merchantUsername}`,JSON.stringify(o.config))}catch{}p.show("تم حفظ التعديلات محلياً كمسودة (تحقق من اتصال الإنترنت للنشر السحابي) 🎨","info")}finally{u&&(u.innerHTML=t,u.disabled=!1)}},handleAssistantConfigChange:(u,t)=>{o.updateConfig(e=>{const a=e.messages||e.store_messages||{};e.messages=a,a.ai_assistant||(a.ai_assistant={enabled:!0,name:"مساعد نالش",persona:"classic",avatar_icon:"fa-robot",avatar_emoji:"",button_style:"pill",avatar_style:"pulse",position:"bottom-right",enable_quick_actions:!0,smart_contextual_actions:!0,smart_contextual_replies:!0,behavior_mode:"support",conversation_style:"balanced",response_style:"friendly",accent_color:"#5D646D",status_text:"متصل للرد الفوري",quick_actions:["أريد أفضل العروض المتاحة","كيف أقوم بالطلب والتوصيل؟","تتبع طلبي"]}),a.ai_assistant[u]=t},!0,"live_update"),_.refreshActiveTab(!0)},handleAssistantQuickActionsChange:u=>{const t=(u||"").split(/[،,\n]/).map(e=>e.trim()).filter(Boolean).slice(0,6);o.updateConfig(e=>{const a=e.messages||e.store_messages||{};e.messages=a,a.ai_assistant||(a.ai_assistant={}),a.ai_assistant.quick_actions=t},!0,"live_update"),_.refreshActiveTab(!0)},applyAssistantPreset:u=>{const t={classic:{enabled:!0,name:"مساعد نالش",persona:"classic",avatar_icon:"fa-robot",avatar_emoji:"",button_style:"pill",avatar_style:"pulse",position:"bottom-right",response_style:"friendly",accent_color:"#5D646D",status_text:"متصل للرد الفوري",smart_contextual_actions:!0,smart_contextual_replies:!0,behavior_mode:"support",conversation_style:"balanced",quick_actions:["أريد أفضل العروض المتاحة","كيف أقوم بالطلب والتوصيل؟","تتبع طلبي"]},premium:{enabled:!0,name:"مساعد ذكي",persona:"premium",avatar_icon:"fa-star",avatar_emoji:"",button_style:"bubble",avatar_style:"halo",position:"bottom-right",response_style:"sales",accent_color:"#6C757D",status_text:"مستعد لعرض أفضل العروض",smart_contextual_actions:!0,smart_contextual_replies:!0,behavior_mode:"sales",conversation_style:"balanced",quick_actions:["أفضل منتجات اليوم","أرني العروض المميزة","أحتاج مساعدة في الطلب"]},futuristic:{enabled:!0,name:"AI Assistant",persona:"futuristic",avatar_icon:"fa-microchip",avatar_emoji:"",button_style:"minimal",avatar_style:"orb",position:"bottom-left",response_style:"professional",accent_color:"#6B727A",status_text:"البوت متصل مع دعم فوري",smart_contextual_actions:!0,smart_contextual_replies:!0,behavior_mode:"advisor",conversation_style:"short",quick_actions:["اعرض المنتجات الحديثة","توصيل سريع","مقارنة المنتجات"]},luxury:{enabled:!0,name:"مساعد الفخامة",persona:"luxury",avatar_icon:"fa-crown",avatar_emoji:"",button_style:"bubble",avatar_style:"halo",position:"bottom-right",response_style:"luxury",accent_color:"#7A6E63",status_text:"خدمة فاخرة ودعم شخصي",smart_contextual_actions:!0,smart_contextual_replies:!0,behavior_mode:"concierge",conversation_style:"balanced",quick_actions:["منتجات فاخرة","خدمة العملاء","أرني آخر العروض"]},fashion:{enabled:!0,name:"مستشار الموضة",persona:"fashion",avatar_icon:"fa-shirt",avatar_emoji:"",button_style:"bubble",avatar_style:"hover",position:"bottom-right",response_style:"friendly",accent_color:"#7F8086",status_text:"أساعدك باختيار الستايل المناسب",smart_contextual_actions:!0,smart_contextual_replies:!0,behavior_mode:"advisor",conversation_style:"balanced",quick_actions:["أرني أحدث الموديلات","اختيارات حسب الموسم","إكسسوارات أنيقة"]},tech:{enabled:!0,name:"مساعد التقنية",persona:"tech",avatar_icon:"fa-laptop",avatar_emoji:"",button_style:"minimal",avatar_style:"orb",position:"bottom-left",response_style:"professional",accent_color:"#6F7277",status_text:"أقفز لك بأفضل التقنية",smart_contextual_actions:!0,smart_contextual_replies:!0,behavior_mode:"advisor",conversation_style:"short",quick_actions:["أفضل الأجهزة الحديثة","مقارنة المواصفات","أرني العروض التقنية"]},wellness:{enabled:!0,name:"مستشار الصحة",persona:"wellness",avatar_icon:"fa-spa",avatar_emoji:"",button_style:"pill",avatar_style:"pulse",position:"bottom-right",response_style:"friendly",accent_color:"#7D8682",status_text:"أختار لك الأفضل للجسم والعناية",smart_contextual_actions:!0,smart_contextual_replies:!0,behavior_mode:"advisor",conversation_style:"balanced",quick_actions:["منتجات صحية","أفضل العناية اليومية","أرني منتجات العناية"]},beauty:{enabled:!0,name:"مساعد الجمال",persona:"beauty",avatar_icon:"fa-magic",avatar_emoji:"",button_style:"bubble",avatar_style:"halo",position:"bottom-right",response_style:"luxury",accent_color:"#8B8E94",status_text:"أرشدك لاختيار الأفضل للجمال",smart_contextual_actions:!0,smart_contextual_replies:!0,behavior_mode:"concierge",conversation_style:"balanced",quick_actions:["أحدث مستحضرات التجميل","أفضل العناية","مجموعة عناية كاملة"]}},e=t[u]||t.classic;o.updateConfig(s=>{const i=s.messages||s.store_messages||{};s.messages=i,i.ai_assistant={...i.ai_assistant||{},...e,enable_quick_actions:!0,smart_contextual_actions:!0,smart_contextual_replies:!0}},!0,"full_sync"),_.refreshActiveTab(!0);const a={classic:"كلاسيكي",premium:"مميز",futuristic:"مستقبلي",luxury:"فاخر",fashion:"موضة",tech:"تقنية",wellness:"صحة",beauty:"جمال"};p.show(`تم تطبيق أسلوب ${a[u]||"مخصص"} ✅`)},handleNavBottomItemChange:(u,t,e)=>{const a=D(x);o.updateConfig(s=>{s.navigation_settings||(s.navigation_settings={}),s.navigation_settings.bottom_bar||(s.navigation_settings.bottom_bar={items:JSON.parse(JSON.stringify(a))});const i=s.navigation_settings.bottom_bar.items,n=i.find(c=>c.id===u);if(n){if(t==="visible"&&e===!1&&i.filter(l=>l.visible).length<=2){p.show("يجب الإبقاء على عنصرين مرئيين على الأقل ⚠️","error");return}n[t]=e}},!0,"full_sync"),_.refreshActiveTab(!0),p.show(`تم تحديث ${t==="visible"?"إظهار":t==="label"?"اسم":"أيقونة"} العنصر ✅`)},handleNavBottomItemDragStart:u=>{window.__navDragItemId=u},handleNavBottomItemDrop:u=>{const t=window.__navDragItemId;if(!t||t===u)return;const e=D(x);o.updateConfig(a=>{a.navigation_settings||(a.navigation_settings={}),a.navigation_settings.bottom_bar||(a.navigation_settings.bottom_bar={items:JSON.parse(JSON.stringify(e))});const s=a.navigation_settings.bottom_bar.items.sort((l,d)=>(l.order||0)-(d.order||0)),i=s.findIndex(l=>l.id===t),n=s.findIndex(l=>l.id===u);if(i<0||n<0)return;const[c]=s.splice(i,1);s.splice(n,0,c),s.forEach((l,d)=>l.order=d+1)},!0,"full_sync"),window.__navDragItemId=null,_.refreshActiveTab(!0)},handleNavBottomItemMove:(u,t)=>{const e=D(x);o.updateConfig(a=>{a.navigation_settings||(a.navigation_settings={}),a.navigation_settings.bottom_bar||(a.navigation_settings.bottom_bar={items:JSON.parse(JSON.stringify(e))});const s=a.navigation_settings.bottom_bar.items.sort((l,d)=>(l.order||0)-(d.order||0)),i=s.findIndex(l=>l.id===u);if(i<0)return;const n=t==="up"?i-1:i+1;if(n<0||n>=s.length)return;const c=s[i].order;s[i].order=s[n].order,s[n].order=c},!0,"full_sync"),_.refreshActiveTab(!0)},handleNavTopBarChange:(u,t)=>{o.updateConfig(e=>{e.navigation_settings||(e.navigation_settings={}),e.navigation_settings.top_bar||(e.navigation_settings.top_bar=P(M)),e.navigation_settings.top_bar[u]=t},!0,"full_sync"),_.refreshActiveTab(!0),p.show("تم تحديث إعدادات الشريط العلوي ✅")},handleNavPreset:u=>{const t=q[u]||q.default;o.updateConfig(e=>{e.navigation_settings||(e.navigation_settings={}),e.navigation_settings.bottom_bar={items:D(t)},e.navigation_settings.top_bar=P(e.navigation_settings.top_bar||M)},!0,"full_sync"),_.refreshActiveTab(!0),p.show(`تم تطبيق قالب ${u==="default"?"الافتراضي":u==="minimal"?"المبسط":u==="market"?"التجاري":u==="luxury"?"الفاخر":u==="premium"?"المميز":u==="wellness"?"الصحي":"مخصص"} ✅`)},handleNavResetBottomBar:()=>{confirm("هل تريد إعادة ضبط الشريط السفلي للإعدادات الافتراضية؟")&&(o.updateConfig(u=>{u.navigation_settings||(u.navigation_settings={}),u.navigation_settings.bottom_bar={items:D(x)}},!0,"full_sync"),_.refreshActiveTab(!0),p.show("تمت إعادة ضبط الشريط السفلي 🔄"))},applySectionPreset:u=>{const t={balanced:[{id:"block_hero_1",type:"hero",title:"أهلاً بكم في متجرنا",subtitle:"تسوق أحدث المنتجات بأفضل الأسعار",style:"classic",visible:!0,order:1,settings:{cta_text:"تصفح المنتجات",cta_link:"#products",alignment:"center"}},{id:"block_cat_1",type:"categories",title:"التصنيفات المميزة",style:"bubbles",visible:!0,order:2,settings:{layout:"horizontal"}},{id:"block_prod_1",type:"products",title:"أحدث المنتجات والعروض",style:"classic_grid",visible:!0,order:3,settings:{limit:12}}],catalog:[{id:"block_cat_1",type:"categories",title:"استكشف التصنيفات",style:"chips_slider",visible:!0,order:1,settings:{layout:"horizontal"}},{id:"block_prod_1",type:"products",title:"المتجر",style:"flat_grid",visible:!0,order:2,settings:{limit:18}},{id:"block_banner_1",type:"banner",title:"عرض خاص",subtitle:"خصومات تصل إلى 50%",style:"classic",visible:!0,order:3,settings:{banner_height:180}}],luxury:[{id:"block_hero_1",type:"hero",title:"تجربة شراء فاخرة",subtitle:"منتجات مختارة بعناية",style:"luxury",visible:!0,order:1,settings:{cta_text:"استعرض المجموعة",cta_link:"#products",alignment:"center"}},{id:"block_banner_1",type:"banner",title:"تسوق بضغطة واحدة",subtitle:"التوصيل السريع وضمان الجودة",style:"minimal",visible:!0,order:2,settings:{banner_height:160}},{id:"block_prod_1",type:"products",title:"إبداعاتنا المميزة",style:"glass",visible:!0,order:3,settings:{limit:10}}],promo:[{id:"block_banner_1",type:"banner",title:"العروض الحالية",subtitle:"خصومات قوية هذا الأسبوع",style:"classic",visible:!0,order:1,settings:{banner_height:190}},{id:"block_prod_1",type:"products",title:"أكثر المنتجات طلباً",style:"classic_grid",visible:!0,order:2,settings:{limit:14}},{id:"block_cat_1",type:"categories",title:"تصفح حسب الفئة",style:"bubbles",visible:!0,order:3,settings:{layout:"horizontal"}}]},e=t[u]||t.balanced;o.updateConfig(a=>{a.layout_blocks=JSON.parse(JSON.stringify(e))},!0,"full_sync"),_.refreshActiveTab(!0),p.show(`تم تطبيق الهيكل ${u==="balanced"?"المتوازن":u==="catalog"?"الكتالوج":u==="luxury"?"الفاخر":"الترويجي"} ✅`)},handleNavSmartProtect:()=>{o.updateConfig(u=>{u.navigation_settings||(u.navigation_settings={}),u.navigation_settings.bottom_bar||(u.navigation_settings.bottom_bar={items:D(x)});const t=u.navigation_settings.bottom_bar.items,e=new Set(["home","cart"]);if(!t.length){u.navigation_settings.bottom_bar.items=D(x);return}t.forEach(s=>{e.has(s.id)&&(s.visible=!0)}),t.filter(s=>s.visible).length<2&&t.forEach(s=>{(s.id==="home"||s.id==="cart")&&(s.visible=!0)}),t.forEach((s,i)=>{s.order=i+1})},!0,"full_sync"),_.refreshActiveTab(!0),p.show("تمت حماية العناصر الأساسية في الشريط السفلي 🛡️")}}}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>Z.init()):Z.init();
