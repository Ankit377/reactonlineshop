(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[4],{476:function(e,t,a){"use strict";a.d(t,"f",(function(){return l})),a.d(t,"a",(function(){return r})),a.d(t,"e",(function(){return o})),a.d(t,"h",(function(){return c})),a.d(t,"b",(function(){return m})),a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return u})),a.d(t,"g",(function(){return h})),a.d(t,"j",(function(){return E})),a.d(t,"i",(function(){return p})),a.d(t,"k",(function(){return d}));var n=a(45),l=function(e,t,a,n){var l=t?e.filter((function(e){return e.category.filter((function(e){return e===t}))[0]})):e;if(a&&"new"===a){var r=l.filter((function(e){return e.new}));return r.slice(0,n||r.length)}if(a&&"bestSeller"===a)return l.sort((function(e,t){return t.saleCount-e.saleCount})).slice(0,n||l.length);if(a&&"saleItems"===a){var o=l.filter((function(e){return e.discount&&e.discount>0}));return o.slice(0,n||o.length)}return l.slice(0,n||l.length)},r=function(e,t){return t&&t>0?e-e*(t/100):null},o=function(e,t,a,n){var l=e.filter((function(e){return e.id===t.id&&(!e.selectedProductColor||e.selectedProductColor===a)&&(!e.selectedProductSize||e.selectedProductSize===n)}))[0];return e.length>=1&&l?t.variation?e.filter((function(e){return e.id===t.id&&e.selectedProductColor===a&&e.selectedProductSize===n}))[0].quantity:e.filter((function(e){return t.id===e.id}))[0].quantity:0},c=function(e,t,a){if(e&&t&&a){if("category"===t)return e.filter((function(e){return e.category.filter((function(e){return e===a}))[0]}));if("tag"===t)return e.filter((function(e){return e.tag.filter((function(e){return e===a}))[0]}));if("color"===t)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.color===a}))[0]}));if("size"===t)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.size.filter((function(e){return e.name===a}))[0]}))[0]}));if("filterSort"===t){var l=Object(n.a)(e);if("default"===a)return l;if("priceHighToLow"===a)return l.sort((function(e,t){return t.price-e.price}));if("priceLowToHigh"===a)return l.sort((function(e,t){return e.price-t.price}))}}return e},i=function(e){return e.filter((function(e,t,a){return t===a.indexOf(e)}))},m=function(e){var t=[];return e&&e.map((function(e){return e.category&&e.category.map((function(e){return t.push(e)}))})),i(t)},s=function(e){var t=[];return e&&e.map((function(e){return e.tag&&e.tag.map((function(e){return t.push(e)}))})),i(t)},u=function(e){var t=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return t.push(e.color)}))})),i(t)},h=function(e){var t=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return e.size.map((function(e){return t.push(e.name)}))}))})),i(t)},E=function(e){document.querySelectorAll(".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},p=function(e){document.querySelectorAll(".shop-tab button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},d=function(e){var t=document.querySelector("#product-filter-wrapper");t.classList.toggle("active"),t.style.height?t.style.height=null:t.style.height=t.scrollHeight+"px",e.currentTarget.classList.toggle("active")}},486:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(101),o=a(64);t.a=Object(o.multilanguage)((function(e){var t=e.strings,a=e.menuWhiteClass,n=e.sidebarMenu;return l.a.createElement("div",{className:" ".concat(n?"sidebar-menu":"main-menu ".concat(a||"")," ")},l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/"},t.home,n?l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-angle-right"})):l.a.createElement("i",{className:"fa fa-angle-down"})),l.a.createElement("ul",{className:"mega-menu mega-menu-padding"},l.a.createElement("li",null,l.a.createElement("ul",null,l.a.createElement("li",{className:"mega-menu-title"},l.a.createElement(r.b,{to:"/reactonlineshop/"},t.home_group_one)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-fashion"},t.home_fashion)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-fashion-two"},t.home_fashion_two)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-fashion-three"},t.home_fashion_three)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-fashion-four"},t.home_fashion_four)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-fashion-five"},t.home_fashion_five)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-fashion-six"},t.home_fashion_six)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-fashion-seven"},t.home_fashion_seven)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-fashion-eight"},t.home_fashion_eight)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-kids-fashion"},t.home_kids_fashion)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-cosmetics"},t.home_cosmetics)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-furniture"},t.home_furniture)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-furniture-two"},t.home_furniture_two)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-furniture-three"},t.home_furniture_three)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-furniture-four"},t.home_furniture_four)))),l.a.createElement("li",null,l.a.createElement("ul",null,l.a.createElement("li",{className:"mega-menu-title"},l.a.createElement(r.b,{to:"/reactonlineshop/"},t.home_group_two)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-furniture-five"},t.home_furniture_five)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-furniture-six"},t.home_furniture_six)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-furniture-seven"},t.home_furniture_seven)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-electronics"},t.home_electronics)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-electronics-two"},t.home_electronics_two)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-electronics-three"},t.home_electronics_three)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-book-store"},t.home_book_store)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-book-store-two"},t.home_book_store_two)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-plants"},t.home_plants)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-flower-shop"},t.home_flower_shop)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-flower-shop-two"},t.home_flower_shop_two)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-organic-food"},t.home_organic_food)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-organic-food-two"},t.home_organic_food_two)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-onepage-scroll"},t.home_onepage_scroll)))),l.a.createElement("li",null,l.a.createElement("ul",null,l.a.createElement("li",{className:"mega-menu-title"},l.a.createElement(r.b,{to:"/reactonlineshop/"},t.home_group_three)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-grid-banner"},t.home_grid_banner)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-auto-parts"},t.home_auto_parts)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-cake-shop"},t.home_cake_shop)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-handmade"},t.home_handmade)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-pet-food"},t.home_pet_food)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-medical-equipment"},t.home_medical_equipment)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-christmas"},t.home_christmas)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-black-friday"},t.home_black_friday)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-black-friday-two"},t.home_black_friday_two)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/home-valentines-day"},t.home_valentines_day)))))),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/shop-grid-standard"}," ",t.shop,n?l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-angle-right"})):l.a.createElement("i",{className:"fa fa-angle-down"})),l.a.createElement("ul",{className:"mega-menu"},l.a.createElement("li",null,l.a.createElement("ul",null,l.a.createElement("li",{className:"mega-menu-title"},l.a.createElement(r.b,{to:"/reactonlineshop/shop-grid-standard"},t.shop_layout)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/shop-grid-standard"},t.shop_grid_standard)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/shop-grid-filter"},t.shop_grid_filter)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/shop-grid-two-column"},t.shop_grid_two_column)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/shop-grid-no-sidebar"},t.shop_grid_no_sidebar)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/shop-grid-full-width"},t.shop_grid_full_width)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/shop-grid-right-sidebar"},t.shop_grid_right_sidebar)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/shop-list-standard"},t.shop_list_standard)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/shop-list-full-width"},t.shop_list_full_width)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/shop-list-two-column"},t.shop_list_two_column)))),l.a.createElement("li",null,l.a.createElement("ul",null,l.a.createElement("li",{className:"mega-menu-title"},l.a.createElement(r.b,{to:"/reactonlineshop/product/1"},t.product_details)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/product/1"},t.product_tab_bottom)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/product-tab-left/1"},t.product_tab_left)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/product-tab-right/1"},t.product_tab_right)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/product-sticky/1"},t.product_sticky)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/product-slider/1"},t.product_slider)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/product-fixed-image/1"},t.product_fixed_image)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/product/8"},t.product_simple)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/product/1"},t.product_variation)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/product/9"},t.product_affiliate)))),l.a.createElement("li",null,l.a.createElement("ul",null,l.a.createElement("li",{className:"mega-menu-img"},l.a.createElement(r.b,{to:"/reactonlineshop/shop-grid-standard"},l.a.createElement("img",{src:"/reactonlineshop/assets/img/banner/banner-12.png",alt:""}))))))),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/shop-grid-standard"},t.collection)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/"},t.pages,n?l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-angle-right"})):l.a.createElement("i",{className:"fa fa-angle-down"})),l.a.createElement("ul",{className:"submenu"},l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/cart"},t.cart)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/checkout"},t.checkout)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/wishlist"},t.wishlist)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/compare"},t.compare)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/my-account"},t.my_account)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/login-register"},t.login_register)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/about"},t.about_us)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/contact"},t.contact_us)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/not-found"},t["404_page"])))),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/blog-standard"},t.blog,n?l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-angle-right"})):l.a.createElement("i",{className:"fa fa-angle-down"})),l.a.createElement("ul",{className:"submenu"},l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/blog-standard"},t.blog_standard)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/blog-no-sidebar"},t.blog_no_sidebar)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/blog-right-sidebar"},t.blog_right_sidebar)),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/blog-details-standard"},t.blog_details_standard)))),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/contact"},t.contact_us)))))}))},488:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=function(){return l.a.createElement("div",{className:"offcanvas-mobile-search-area"},l.a.createElement("form",{action:"#"},l.a.createElement("input",{type:"search",placeholder:"Search ..."}),l.a.createElement("button",{type:"submit"},l.a.createElement("i",{className:"fa fa-search"}))))},o=a(101),c=a(64),i=Object(c.multilanguage)((function(e){var t=e.strings;return l.a.createElement("nav",{className:"offcanvas-navigation",id:"offcanvas-navigation"},l.a.createElement("ul",null,l.a.createElement("li",{className:"menu-item-has-children"},l.a.createElement(o.b,{to:"/reactonlineshop/"},t.home),l.a.createElement("ul",{className:"sub-menu"},l.a.createElement("li",{className:"menu-item-has-children"},l.a.createElement(o.b,{to:"/reactonlineshop/"},t.home_group_one),l.a.createElement("ul",{className:"sub-menu"},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-fashion"},t.home_fashion)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-fashion-two"},t.home_fashion_two)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-fashion-three"},t.home_fashion_three)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-fashion-four"},t.home_fashion_four)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-fashion-five"},t.home_fashion_five)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-fashion-six"},t.home_fashion_six)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-fashion-seven"},t.home_fashion_seven)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-fashion-eight"},t.home_fashion_eight)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-kids-fashion"},t.home_kids_fashion)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-cosmetics"},t.home_cosmetics)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-furniture"},t.home_furniture)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-furniture-two"},t.home_furniture_two)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-furniture-three"},t.home_furniture_three)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-furniture-four"},t.home_furniture_four)))),l.a.createElement("li",{className:"menu-item-has-children"},l.a.createElement(o.b,{to:"/reactonlineshop/"},t.home_group_two),l.a.createElement("ul",{className:"sub-menu"},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-furniture-five"},t.home_furniture_five)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-furniture-six"},t.home_furniture_six)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-furniture-seven"},t.home_furniture_seven)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-electronics"},t.home_electronics)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-electronics-two"},t.home_electronics_two)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-electronics-three"},t.home_electronics_three)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-book-store"},t.home_book_store)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-book-store-two"},t.home_book_store_two)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-plants"},t.home_plants)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-flower-shop"},t.home_flower_shop)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-flower-shop-two"},t.home_flower_shop_two)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-organic-food"},t.home_organic_food)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-organic-food-two"},t.home_organic_food_two)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-onepage-scroll"},t.home_onepage_scroll)))),l.a.createElement("li",{className:"menu-item-has-children"},l.a.createElement(o.b,{to:"/reactonlineshop/"},t.home_group_three),l.a.createElement("ul",{className:"sub-menu"},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-grid-banner"},t.home_grid_banner)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-auto-parts"},t.home_auto_parts)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-cake-shop"},t.home_cake_shop)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-handmade"},t.home_handmade)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-pet-food"},t.home_pet_food)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-medical-equipment"},t.home_medical_equipment)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-christmas"},t.home_christmas)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-black-friday"},t.home_black_friday)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-black-friday-two"},t.home_black_friday_two)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/home-valentines-day"},t.home_valentines_day)))))),l.a.createElement("li",{className:"menu-item-has-children"},l.a.createElement(o.b,{to:"/reactonlineshop/shop-grid-standard"},t.shop),l.a.createElement("ul",{className:"sub-menu"},l.a.createElement("li",{className:"menu-item-has-children"},l.a.createElement(o.b,{to:"/reactonlineshop/shop-grid-standard"},t.shop_layout),l.a.createElement("ul",{className:"sub-menu"},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/shop-grid-standard"},t.shop_grid_standard)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/shop-grid-filter"},t.shop_grid_filter)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/shop-grid-two-column"},t.shop_grid_two_column)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/shop-grid-no-sidebar"},t.shop_grid_no_sidebar)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/shop-grid-full-width"},t.shop_grid_full_width)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/shop-grid-right-sidebar"},t.shop_grid_right_sidebar)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/shop-list-standard"},t.shop_list_standard)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/shop-list-full-width"},t.shop_list_full_width)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/shop-list-two-column"},t.shop_list_two_column)))),l.a.createElement("li",{className:"menu-item-has-children"},l.a.createElement(o.b,{to:"/reactonlineshop/product/1"},t.product_details),l.a.createElement("ul",{className:"sub-menu"},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/product/1"},t.product_tab_bottom)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/product-tab-left/1"},t.product_tab_left)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/product-tab-right/1"},t.product_tab_right)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/product-sticky/1"},t.product_sticky)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/product-slider/1"},t.product_slider)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/product-fixed-image/1"},t.product_fixed_image)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/product/1"},t.product_simple)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/product/1"},t.product_variation)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/product/1"},t.product_affiliate)))))),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/shop-grid-standard"},t.collection)),l.a.createElement("li",{className:"menu-item-has-children"},l.a.createElement(o.b,{to:"/reactonlineshop/"},t.pages),l.a.createElement("ul",{className:"sub-menu"},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/cart"},t.cart)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/checkout"},t.checkout)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/wishlist"},t.wishlist)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/compare"},t.compare)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/my-account"},t.my_account)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/login-register"},t.login_register)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/about"},t.about_us)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/contact"},t.contact_us)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/not-found"},t["404_page"])))),l.a.createElement("li",{className:"menu-item-has-children"},l.a.createElement(o.b,{to:"/reactonlineshop/blog-standard"},t.blog),l.a.createElement("ul",{className:"sub-menu"},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/blog-standard"},t.blog_standard)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/blog-no-sidebar"},t.blog_no_sidebar)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/blog-right-sidebar"},t.blog_right_sidebar)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/blog-details-standard"},t.blog_details_standard)))),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reactonlineshop/contact"},t.contact_us))))})),m=a(63),s=a(144),u=Object(m.connect)((function(e){return{currency:e.currencyData}}),(function(e){return{setCurrency:function(t){e(Object(s.b)(t))}}}))(Object(c.multilanguage)((function(e){var t=e.currency,a=e.setCurrency,n=e.currentLanguageCode,r=e.dispatch,o=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")};return l.a.createElement("div",{className:"mobile-menu-middle"},l.a.createElement("div",{className:"lang-curr-style"},l.a.createElement("span",{className:"title mb-2"},"Choose Language "),l.a.createElement("select",{value:n,onChange:function(e){!function(e){var t=e.target.value;r(Object(c.changeLanguage)(t))}(e),o()}},l.a.createElement("option",{value:"en"},"English"),l.a.createElement("option",{value:"fn"},"French"),l.a.createElement("option",{value:"de"},"Germany"))),l.a.createElement("div",{className:"lang-curr-style"},l.a.createElement("span",{className:"title mb-2"},"Choose Currency"),l.a.createElement("select",{value:t.currencyName,onChange:function(e){!function(e){var t=e.target.value;a(t)}(e),o()}},l.a.createElement("option",{value:"USD"},"USD"),l.a.createElement("option",{value:"EUR"},"EUR"),l.a.createElement("option",{value:"GBP"},"GBP"))))}))),h=function(){return l.a.createElement("div",{className:"offcanvas-widget-area"},l.a.createElement("div",{className:"off-canvas-contact-widget"},l.a.createElement("div",{className:"header-contact-info"},l.a.createElement("ul",{className:"header-contact-info__list"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-phone"})," ",l.a.createElement("a",{href:"tel://12452456012"},"(1245) 2456 012 ")),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-envelope"})," ",l.a.createElement("a",{href:"mailto:info@yourdomain.com"},"info@yourdomain.com"))))),l.a.createElement("div",{className:"off-canvas-widget-social"},l.a.createElement("a",{href:"//twitter.com",title:"Twitter"},l.a.createElement("i",{className:"fa fa-twitter"})),l.a.createElement("a",{href:"//instagram.com",title:"Instagram"},l.a.createElement("i",{className:"fa fa-instagram"})),l.a.createElement("a",{href:"//facebook.com",title:"Facebook"},l.a.createElement("i",{className:"fa fa-facebook"})),l.a.createElement("a",{href:"//pinterest.com",title:"Pinterest"},l.a.createElement("i",{className:"fa fa-pinterest"}))))};t.a=function(){Object(n.useEffect)((function(){for(var a=document.querySelector("#offcanvas-navigation"),n=a.querySelectorAll(".sub-menu"),l=a.querySelectorAll("a"),r=0;r<n.length;r++)n[r].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var o=a.querySelectorAll(".menu-expand"),c=o.length,i=0;i<c;i++)o[i].addEventListener("click",(function(t){e(t)}));for(var m=0;m<l.length;m++)l[m].addEventListener("click",(function(){t()}))}));var e=function(e){e.currentTarget.parentElement.classList.toggle("active")},t=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")};return l.a.createElement("div",{className:"offcanvas-mobile-menu",id:"offcanvas-mobile-menu"},l.a.createElement("button",{className:"offcanvas-menu-close",id:"mobile-menu-close-trigger",onClick:function(){return t()}},l.a.createElement("i",{className:"pe-7s-close"})),l.a.createElement("div",{className:"offcanvas-wrapper"},l.a.createElement("div",{className:"offcanvas-inner-content"},l.a.createElement(r,null),l.a.createElement(i,null),l.a.createElement(u,null),l.a.createElement(h,null))))}},489:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(101),o=a(63),c=a(143),i=a(476),m=function(e){var t=e.cartData,a=e.currency,o=e.deleteFromCart,m=0,s=Object(c.useToasts)().addToast;return l.a.createElement("div",{className:"shopping-cart-content"},t&&t.length>0?l.a.createElement(n.Fragment,null,l.a.createElement("ul",null,t.map((function(e,t){var n=Object(i.a)(e.price,e.discount),c=(e.price*a.currencyRate).toFixed(2),u=(n*a.currencyRate).toFixed(2);return m+=null!=n?u*e.quantity:c*e.quantity,l.a.createElement("li",{className:"single-shopping-cart",key:t},l.a.createElement("div",{className:"shopping-cart-img"},l.a.createElement(r.b,{to:"/reactonlineshop/product/"+e.id},l.a.createElement("img",{alt:"",src:"/reactonlineshop"+e.image[0],className:"img-fluid"}))),l.a.createElement("div",{className:"shopping-cart-title"},l.a.createElement("h4",null,l.a.createElement(r.b,{to:"/reactonlineshop/product/"+e.id}," ",e.name," ")),l.a.createElement("h6",null,"Qty: ",e.quantity),l.a.createElement("span",null,null!==n?a.currencySymbol+u:a.currencySymbol+c),e.selectedProductColor&&e.selectedProductSize?l.a.createElement("div",{className:"cart-item-variation"},l.a.createElement("span",null,"Color: ",e.selectedProductColor),l.a.createElement("span",null,"Size: ",e.selectedProductSize)):""),l.a.createElement("div",{className:"shopping-cart-delete"},l.a.createElement("button",{onClick:function(){return o(e,s)}},l.a.createElement("i",{className:"fa fa-times-circle"}))))}))),l.a.createElement("div",{className:"shopping-cart-total"},l.a.createElement("h4",null,"Total :"," ",l.a.createElement("span",{className:"shop-total"},a.currencySymbol+m.toFixed(2)))),l.a.createElement("div",{className:"shopping-cart-btn btn-hover text-center"},l.a.createElement(r.b,{className:"default-btn",to:"/reactonlineshop/cart"},"view cart"),l.a.createElement(r.b,{className:"default-btn",to:"/reactonlineshop/checkout"},"checkout"))):l.a.createElement("p",{className:"text-center"},"No items added to cart"))},s=a(65);t.a=Object(o.connect)((function(e){return{currency:e.currencyData,cartData:e.cartData,wishlistData:e.wishlistData,compareData:e.compareData}}),(function(e){return{deleteFromCart:function(t,a){e(Object(s.i)(t,a))}}}))((function(e){var t=e.currency,a=e.cartData,n=e.wishlistData,o=e.compareData,c=e.deleteFromCart,i=e.iconWhiteClass,s=function(e){e.currentTarget.nextSibling.classList.toggle("active")};return l.a.createElement("div",{className:"header-right-wrap ".concat(i||"")},l.a.createElement("div",{className:"same-style header-search d-none d-lg-block"},l.a.createElement("button",{className:"search-active",onClick:function(e){return s(e)}},l.a.createElement("i",{className:"pe-7s-search"})),l.a.createElement("div",{className:"search-content"},l.a.createElement("form",{action:"#"},l.a.createElement("input",{type:"text",placeholder:"Search"}),l.a.createElement("button",{className:"button-search"},l.a.createElement("i",{className:"pe-7s-search"}))))),l.a.createElement("div",{className:"same-style account-setting d-none d-lg-block"},l.a.createElement("button",{className:"account-setting-active",onClick:function(e){return s(e)}},l.a.createElement("i",{className:"pe-7s-user-female"})),l.a.createElement("div",{className:"account-dropdown"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/login-register"},"Login")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/login-register"},"Register")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/reactonlineshop/my-account"},"my account"))))),l.a.createElement("div",{className:"same-style header-compare"},l.a.createElement(r.b,{to:"/reactonlineshop/compare"},l.a.createElement("i",{className:"pe-7s-shuffle"}),l.a.createElement("span",{className:"count-style"},o&&o.length?o.length:0))),l.a.createElement("div",{className:"same-style header-wishlist"},l.a.createElement(r.b,{to:"/reactonlineshop/wishlist"},l.a.createElement("i",{className:"pe-7s-like"}),l.a.createElement("span",{className:"count-style"},n&&n.length?n.length:0))),l.a.createElement("div",{className:"same-style cart-wrap d-none d-lg-block"},l.a.createElement("button",{className:"icon-cart",onClick:function(e){return s(e)}},l.a.createElement("i",{className:"pe-7s-shopbag"}),l.a.createElement("span",{className:"count-style"},a&&a.length?a.length:0)),l.a.createElement(m,{cartData:a,currency:t,deleteFromCart:c})),l.a.createElement("div",{className:"same-style cart-wrap d-block d-lg-none"},l.a.createElement(r.b,{className:"icon-cart",to:"/reactonlineshop/cart"},l.a.createElement("i",{className:"pe-7s-shopbag"}),l.a.createElement("span",{className:"count-style"},a&&a.length?a.length:0))),l.a.createElement("div",{className:"same-style mobile-off-canvas d-block d-lg-none"},l.a.createElement("button",{className:"mobile-aside-button",onClick:function(){document.querySelector("#offcanvas-mobile-menu").classList.add("active")}},l.a.createElement("i",{className:"pe-7s-menu"}))))}))}}]);
//# sourceMappingURL=4.ae8c0f63.chunk.js.map