(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[73],{478:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=l(a(18)),c=l(a(36)),o=a(491);function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f,b,v,E=function(e){function t(){return s(this,t),m(this,d(t).apply(this,arguments))}var a,r,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),a=t,(r=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&c.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var a=n.default.createElement("div",{className:"react-head-temp"},t);c.default.render(a,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var a=e.temporaryElement.querySelector(".react-head-temp");if(null!==a){var n=Array.prototype.slice.call(a.children),r=document.head,c=r.innerHTML;(n=(n=n.filter((function(e){return-1===c.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var a=(0,o.getDuplicateTitle)();a&&(0,o.removeChild)(r,a)}else if("meta"===t){var n=(0,o.getDuplicateMeta)(e);n&&(0,o.removeChild)(r,n)}else if("link"===t&&"canonical"===e.rel){var c=(0,o.getDuplicateCanonical)(e);c&&(0,o.removeChild)(r,c)}})),(0,o.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&u(a.prototype,r),l&&u(a,l),t}(n.Component);f=E,b="contextTypes",v={extract:r.default.func},b in f?Object.defineProperty(f,b,{value:v,enumerable:!0,configurable:!0,writable:!0}):f[b]=v;var h=E;t.default=h,e.exports=t.default},480:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){for(var t=e.ratingValue,a=[],c=0;c<5;c++)a.push(r.a.createElement("i",{className:"fa fa-star-o",key:c}));if(t&&t>0)for(var o=0;o<=t-1;o++)a[o]=r.a.createElement("i",{className:"fa fa-star-o yellow",key:o});return r.a.createElement(n.Fragment,null,a)}},483:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return c.default}}),t.default=void 0;var n=o(a(490)),r=o(a(478)),c=o(a(492));function o(e){return e&&e.__esModule?e:{default:e}}var l=r.default;t.default=l},490:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=a(0),c=(n=a(18))&&n.__esModule?n:{default:n};function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return l(this,t),s(this,u(t).apply(this,arguments))}var a,n,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),a=t,(n=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return r.Children.only(this.props.children)}}])&&i(a.prototype,n),c&&i(a,c),t}(r.Component);!function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}(d,"childContextTypes",{extract:c.default.func});var p=d;t.default=p,e.exports=t.default},491:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,a=null,n=[],o=[];return e.forEach((function(e){var r=e.type,c=e.props;"title"===r?t=e:"link"===r&&"canonical"===c.rel?a=e:"meta"===r?n.push(e):o.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};c.forEach((function(e){t[e]=[]}));for(var a=[],n=function(n){var o=e[n],l=o.props.id;(l?!t.id[l]:0===r.filter((function(e){var a=o.props[e],n=t[e][a];return n&&!n.props.id})).length)&&(a.unshift(o),c.forEach((function(e){var a=o.props[e];a&&(t[e][a]=o)})))},o=e.length-1;o>=0;o--)n(o);return a}(n)),[a],o)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,a=e.id;if(a)return a&&t.querySelector("#".concat(a));return n.reduce((function(a,n){var r,c=e.getAttribute(n);return c?a.concat((r=t.querySelectorAll("[".concat(n,' = "').concat(c,'"]')),(r=Array.prototype.slice.call(r||[])).filter((function(e){return!e.id})))):a}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=document.createDocumentFragment(),n=0,r=t.length;n<r;n++)a.appendChild(t[n]);e.appendChild(a)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=0,n=t.length;a<n;a++)e.removeChild(t[a])};var n=["property","name","itemprop"],r=n.concat(["itemProp"]),c=r.concat(["id"])},492:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=o(a(18)),c=o(a(478));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,f,b,v=function(e){function t(){return i(this,t),u(this,m(t).apply(this,arguments))}var a,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,(r=[{key:"render",value:function(){return n.default.createElement(c.default,null,n.default.createElement("title",null,this.props.title))}}])&&s(a.prototype,r),o&&s(a,o),t}(n.Component);p=v,f="propTypes",b={title:r.default.string},f in p?Object.defineProperty(p,f,{value:b,enumerable:!0,configurable:!0,writable:!0}):p[f]=b;var E=v;t.default=E,e.exports=t.default},494:function(e,t,a){"use strict";var n=a(477),r=a(0),c=a.n(r),o=a(479),l=a.n(o),i=a(476),s=a(796),u=a(480),m=a(63);t.a=Object(m.connect)((function(e){return{cartitems:e.cartData}}))((function(e){var t=e.product,a=e.currency,o=e.discountedprice,m=e.finalproductprice,d=e.finaldiscountedprice,p=Object(r.useState)(null),f=Object(n.a)(p,2),b=f[0],v=f[1],E=Object(r.useState)(null),h=Object(n.a)(E,2),y=h[0],g=h[1],N=Object(r.useState)(t.variation?t.variation[0].color:""),w=Object(n.a)(N,2),O=w[0],C=w[1],k=Object(r.useState)(t.variation?t.variation[0].size[0].name:""),j=Object(n.a)(k,2),S=j[0],x=j[1],T=Object(r.useState)(t.variation?t.variation[0].size[0].stock:t.stock),_=Object(n.a)(T,2),P=_[0],A=_[1],B=Object(r.useState)(1),M=Object(n.a)(B,2),I=M[0],D=M[1],L=e.wishlistitem,q=e.compareitem,F=e.addtocart,z=e.addtowishlist,H=e.addtocompare,R=e.addtoast,V=e.cartitems,W=Object(i.e)(V,t,O,S);Object(r.useEffect)((function(){null!==b&&b.controller&&null!==y&&y.controller&&(b.controller.control=y,y.controller.control=b)}),[b,y]);var U={getSwiper:v,spaceBetween:10,loopedSlides:4,loop:!0},J={getSwiper:g,spaceBetween:10,slidesPerView:4,loopedSlides:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return c.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav"},c.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return c.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav"},c.a.createElement("i",{className:"pe-7s-angle-right"}))}};return c.a.createElement(r.Fragment,null,c.a.createElement(s.a,{show:e.show,onHide:e.onHide,className:"product-quickview-modal-wrapper"},c.a.createElement(s.a.Header,{closeButton:!0}),c.a.createElement("div",{className:"modal-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-5 col-sm-12 col-xs-12"},c.a.createElement("div",{className:"product-large-image-wrapper"},c.a.createElement(l.a,U,t.image&&t.image.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("div",{className:"single-image"},c.a.createElement("img",{src:"/reactonlineshop"+e,className:"img-fluid",alt:""})))})))),c.a.createElement("div",{className:"product-small-image-wrapper mt-15"},c.a.createElement(l.a,J,t.image&&t.image.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("div",{className:"single-image"},c.a.createElement("img",{src:"/reactonlineshop"+e,className:"img-fluid",alt:""})))}))))),c.a.createElement("div",{className:"col-md-7 col-sm-12 col-xs-12"},c.a.createElement("div",{className:"product-details-content quickview-content"},c.a.createElement("h2",null,t.name),c.a.createElement("div",{className:"product-details-price"},null!==o?c.a.createElement(r.Fragment,null,c.a.createElement("span",null,a.currencySymbol+d)," ",c.a.createElement("span",{className:"old"},a.currencySymbol+m)):c.a.createElement("span",null,a.currencySymbol+m," ")),t.rating&&t.rating>0?c.a.createElement("div",{className:"pro-details-rating-wrap"},c.a.createElement("div",{className:"pro-details-rating"},c.a.createElement(u.a,{ratingValue:t.rating}))):"",c.a.createElement("div",{className:"pro-details-list"},c.a.createElement("p",null,t.shortDescription)),t.variation?c.a.createElement("div",{className:"pro-details-size-color"},c.a.createElement("div",{className:"pro-details-color-wrap"},c.a.createElement("span",null,"Color"),c.a.createElement("div",{className:"pro-details-color-content"},t.variation.map((function(e,t){return c.a.createElement("label",{className:"pro-details-color-content--single ".concat(e.color),key:t},c.a.createElement("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===O?"checked":"",onChange:function(){C(e.color),x(e.size[0].name),A(e.size[0].stock),D(1)}}),c.a.createElement("span",{className:"checkmark"}))})))),c.a.createElement("div",{className:"pro-details-size"},c.a.createElement("span",null,"Size"),c.a.createElement("div",{className:"pro-details-size-content"},t.variation&&t.variation.map((function(e){return e.color===O?e.size.map((function(e,t){return c.a.createElement("label",{className:"pro-details-size-content--single",key:t},c.a.createElement("input",{type:"radio",value:e.name,checked:e.name===S?"checked":"",onChange:function(){x(e.name),A(e.stock),D(1)}}),c.a.createElement("span",{className:"size-name"},e.name))})):""}))))):"",t.affiliateLink?c.a.createElement("div",{className:"pro-details-quality"},c.a.createElement("div",{className:"pro-details-cart btn-hover"},c.a.createElement("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank"},"Buy Now"))):c.a.createElement("div",{className:"pro-details-quality"},c.a.createElement("div",{className:"cart-plus-minus"},c.a.createElement("button",{onClick:function(){return D(I>1?I-1:1)},className:"dec qtybutton"},"-"),c.a.createElement("input",{className:"cart-plus-minus-box",type:"text",value:I,readOnly:!0}),c.a.createElement("button",{onClick:function(){return D(I<P-W?I+1:I)},className:"inc qtybutton"},"+")),c.a.createElement("div",{className:"pro-details-cart btn-hover"},P&&P>0?c.a.createElement("button",{onClick:function(){return F(t,R,I,O,S)},disabled:W>=P}," ","Add To Cart"," "):c.a.createElement("button",{disabled:!0},"Out of Stock")),c.a.createElement("div",{className:"pro-details-wishlist"},c.a.createElement("button",{className:void 0!==L?"active":"",disabled:void 0!==L,title:void 0!==L?"Added to wishlist":"Add to wishlist",onClick:function(){return z(t,R)}},c.a.createElement("i",{className:"pe-7s-like"}))),c.a.createElement("div",{className:"pro-details-compare"},c.a.createElement("button",{className:void 0!==q?"active":"",disabled:void 0!==q,title:void 0!==q?"Added to compare":"Add to compare",onClick:function(){return H(t,R)}},c.a.createElement("i",{className:"pe-7s-shuffle"}))))))))))}))},508:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(496),o=function(e){var t,a=e.status,n=e.message,c=e.onValidated,o=e.spaceTopClass,l=e.subscribeBtnClass;return r.a.createElement("div",{className:"subscribe-form-3 ".concat(o||"")},r.a.createElement("div",{className:"mc-form"},r.a.createElement("div",null,r.a.createElement("input",{className:"email",ref:function(e){return t=e},type:"email",placeholder:"Your Email Address",required:!0})),"sending"===a&&r.a.createElement("div",{style:{color:"#3498db",fontSize:"12px"}},"sending..."),"error"===a&&r.a.createElement("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===a&&r.a.createElement("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),r.a.createElement("div",{className:"clear-3 ".concat(l||"")},r.a.createElement("button",{className:"button",onClick:function(){t&&t.value.indexOf("@")>-1&&c({EMAIL:t.value}),t.value=""}},"SUBSCRIBE"))))};t.a=function(e){var t=e.mailchimpUrl,a=e.spaceTopClass,n=e.subscribeBtnClass;return r.a.createElement("div",null,r.a.createElement(c.a,{url:t,render:function(e){var t=e.subscribe,c=e.status,l=e.message;return r.a.createElement(o,{status:c,message:l,onValidated:function(e){return t(e)},spaceTopClass:a,subscribeBtnClass:n})}}))}},528:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(508);t.a=function(e){var t=e.spaceTopClass,a=e.spaceBottomClass,n=e.subscribeBtnClass;return r.a.createElement("div",{className:"subscribe-area-3 ".concat(t||""," ").concat(a||""," ")},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-5 col-lg-7 col-md-10 ml-auto mr-auto"},r.a.createElement("div",{className:"subscribe-style-3 text-center"},r.a.createElement("h2",null,"Subscribe "),r.a.createElement("p",null,"Subscribe to our newsletter to receive news on update"),r.a.createElement(c.a,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:n}))))))}},544:function(e,t,a){"use strict";var n=a(477),r=a(0),c=a.n(r),o=a(101),l=a(497);t.a=function(e){var t=e.backgroundColorClass,a=e.copyrightColorClass,i=e.spaceLeftClass,s=e.spaceRightClass,u=e.footerTopBackgroundColorClass,m=e.footerTopSpaceTopClass,d=e.footerTopSpaceBottomClass,p=e.footerLogo,f=e.backgroundImage,b=Object(r.useState)(0),v=Object(n.a)(b,2),E=v[0],h=v[1],y=Object(r.useState)(0),g=Object(n.a)(y,2),N=g[0],w=g[1];Object(r.useEffect)((function(){return w(100),window.addEventListener("scroll",O),function(){window.removeEventListener("scroll",O)}}),[]);var O=function(){h(window.scrollY)};return c.a.createElement("footer",{className:"footer-area ".concat(t||""," ").concat(i||""," ").concat(s||""," ").concat(f?"bg-img":""),style:{backgroundImage:" ".concat(f?"url(".concat("/reactonlineshop"+f,")"):"url()")}},c.a.createElement("div",{className:"footer-top text-center ".concat(u||""," ").concat(m||"","  ").concat(d||"")},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"footer-logo"},c.a.createElement(o.b,{to:"/reactonlineshop"},c.a.createElement("img",{alt:"",src:"/reactonlineshop"+"".concat(p||"/assets/img/logo/logo.png")}))),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"),c.a.createElement("div",{className:"footer-social"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"//www.facebook.com"},c.a.createElement("i",{className:"fa fa-facebook"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"//www.dribbble.com"},c.a.createElement("i",{className:"fa fa-dribbble"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"//www.pinterest.com"},c.a.createElement("i",{className:"fa fa-pinterest-p"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"//www.twitter.com"},c.a.createElement("i",{className:"fa fa-twitter"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"//www.linkedin.com"},c.a.createElement("i",{className:"fa fa-linkedin"}))))))),c.a.createElement("div",{className:"footer-bottom text-center"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"copyright-2 ".concat(a||"")},c.a.createElement("p",null,"\xa9 2020"," ",c.a.createElement("a",{href:"//www.hasthemes.com",rel:"noopener noreferrer",target:"_blank"},"Flone"),". All Rights Reserved.")))),c.a.createElement("button",{className:"scroll-top ".concat(E>N?"show":""),onClick:function(){l.animateScroll.scrollToTop()}},c.a.createElement("i",{className:"fa fa-angle-double-up"})))}},660:function(e){e.exports=JSON.parse('[{"id":1,"title":"New Arrival","subtitle":"Final Sale","text":"30% off Summer Vacation","image":"/assets/img/slider/slider-3.jpg","url":"/shop-grid-standard"},{"id":2,"title":"New Arrival","subtitle":"Final Sale","text":"40% off Summer Vacation","image":"/assets/img/slider/slider-4.jpg","url":"/shop-grid-standard"}]')},805:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(483),o=a.n(c),l=a(477),i=a(101),s=a(486),u=a(489),m=a(488),d=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),d=Object(l.a)(o,2),p=d[0],f=d[1];Object(n.useEffect)((function(){var e=document.querySelector(".sticky-bar");return f(e.offsetTop),window.addEventListener("scroll",b),function(){window.removeEventListener("scroll",b)}}),[]);var b=function(){c(window.scrollY)};return r.a.createElement("header",{className:"header-area sticky-bar header-padding-3 header-res-padding clearfix transparent-bar ".concat(a>p?"stick":"")},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-5 col-lg-6 d-none d-lg-block"},r.a.createElement(s.a,{menuWhiteClass:"menu-white"})),r.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4"},r.a.createElement("div",{className:"logo text-center logo-hm5"},r.a.createElement(i.b,{className:"sticky-none",to:"/reactonlineshop/"},r.a.createElement("img",{alt:"",src:"assets/img/logo/logo-2.png"})),r.a.createElement(i.b,{className:"sticky-block",to:"/reactonlineshop/"},r.a.createElement("img",{alt:"",src:"assets/img/logo/logo.png"})))),r.a.createElement("div",{className:"col-xl-5 col-lg-4 col-md-6 col-8"},r.a.createElement(u.a,{iconWhiteClass:"header-right-wrap-white"}))),r.a.createElement(m.a,null)))},p=a(544),f=function(e){var t=e.children;return r.a.createElement("div",{className:"wrapper"},r.a.createElement(d,null),t,r.a.createElement(p.a,{backgroundColorClass:"bg-black",footerTopBackgroundColorClass:"bg-black",footerTopSpaceTopClass:"pt-80",spaceBottomClass:"pb-25",footerLogo:"/assets/img/logo/logo-2.png"}))},b=a(479),v=a.n(b),E=a(660),h=function(e){var t=e.data,a=e.sliderClass;return r.a.createElement("div",{className:"slider-height-4 d-flex align-items-center bg-img ".concat(a||""),style:{backgroundImage:"url(".concat("/reactonlineshop"+t.image,")")}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-12"},r.a.createElement("div",{className:"slider-content-5 slider-animated-1 text-center"},r.a.createElement("h3",{className:"animated"},t.title),r.a.createElement("h1",{className:"animated"},t.subtitle),r.a.createElement("p",{className:"animated"},t.text),r.a.createElement("div",{className:"slider-btn-5 btn-hover"},r.a.createElement(i.b,{className:"animated",to:"/reactonlineshop"+t.url},"SHOP NOW")))))))},y=function(){var e={effect:"fade",loop:!0,speed:1e3,autoplay:{delay:5e3,disableOnInteraction:!1},watchSlidesVisibility:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return r.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav"},r.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return r.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav"},r.a.createElement("i",{className:"pe-7s-angle-right"}))}};return r.a.createElement("div",{className:"slider-area"},r.a.createElement("div",{className:"slider-active-2 nav-style-2"},r.a.createElement(v.a,e,E&&E.map((function(e,t){return r.a.createElement(h,{data:e,key:t,sliderClass:"swiper-slide"})})))))},g=a(528),N=a(63),w=a(476),O=a(143),C=a(494),k=function(e){var t=e.product,a=e.currency,c=e.addToCart,o=e.addToWishlist,s=e.addToCompare,u=e.cartItem,m=e.wishlistItem,d=e.compareItem,p=e.sliderClassName,f=e.spaceBottomClass,b=Object(n.useState)(!1),v=Object(l.a)(b,2),E=v[0],h=v[1],y=Object(O.useToasts)().addToast,g=Object(w.a)(t.price,t.discount),N=+(t.price*a.currencyRate).toFixed(2),k=+(g*a.currencyRate).toFixed(2);return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 ".concat(p||"")},r.a.createElement("div",{className:"product-wrap-3 scroll-zoom ".concat(f||"")},r.a.createElement("div",{className:"product-img"},r.a.createElement(i.b,{to:"/reactonlineshop/product/"+t.id},r.a.createElement("img",{className:"default-img",src:"/reactonlineshop"+t.image[0],alt:""})),t.discount||t.new?r.a.createElement("div",{className:"product-img-badges"},t.discount?r.a.createElement("span",{className:"pink"},"-",t.discount,"%"):"",t.new?r.a.createElement("span",{className:"purple"},"New"):""):"",r.a.createElement("div",{className:"product-content-3-wrap"},r.a.createElement("div",{className:"product-content-3"},r.a.createElement("div",{className:"product-title"},r.a.createElement("h3",null,r.a.createElement(i.b,{to:"/reactonlineshop/product/"+t.id},t.name))),r.a.createElement("div",{className:"price-3"},null!==g?r.a.createElement(n.Fragment,null,r.a.createElement("span",null,a.currencySymbol+k)," ",r.a.createElement("span",{className:"old"},a.currencySymbol+N)):r.a.createElement("span",null,a.currencySymbol+N," ")),r.a.createElement("div",{className:"product-action-3"},r.a.createElement("div",{className:"pro-same-action pro-wishlist"},r.a.createElement("button",{className:void 0!==m?"active":"",disabled:void 0!==m,title:void 0!==m?"Added to wishlist":"Add to wishlist",onClick:function(){return o(t,y)}},r.a.createElement("i",{className:"fa fa-heart-o"}))),r.a.createElement("div",{className:"pro-same-action pro-cart"},t.affiliateLink?r.a.createElement("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now"}," ",r.a.createElement("i",{className:"fa fa-shopping-cart"})," "):t.variation&&t.variation.length>=1?r.a.createElement(i.b,{to:"".concat("/reactonlineshop","/product/").concat(t.id),title:"Select options"},r.a.createElement("i",{class:"fa fa-cog"})):t.stock&&t.stock>0?r.a.createElement("button",{onClick:function(){return c(t,y)},className:void 0!==u&&u.quantity>0?"active":"",disabled:void 0!==u&&u.quantity>0,title:void 0!==u?"Added to cart":"Add to cart"}," ",r.a.createElement("i",{className:"fa fa-shopping-cart"})," "):r.a.createElement("button",{disabled:!0,className:"active",title:"Out of stock"},r.a.createElement("i",{className:"fa fa-shopping-cart"}))),r.a.createElement("div",{className:"pro-same-action pro-compare"},r.a.createElement("button",{className:void 0!==d?"active":"",disabled:void 0!==d,title:void 0!==d?"Added to compare":"Add to compare",onClick:function(){return s(t,y)}},r.a.createElement("i",{className:"fa fa-retweet"}))),r.a.createElement("div",{className:"pro-same-action pro-quickview"},r.a.createElement("button",{onClick:function(){return h(!0)},title:"Quick View"},r.a.createElement("i",{className:"fa fa-eye"}))))))))),r.a.createElement(C.a,{show:E,onHide:function(){return h(!1)},product:t,currency:a,discountedprice:g,finalproductprice:N,finaldiscountedprice:k,cartitem:u,wishlistitem:m,compareitem:d,addtocart:c,addtowishlist:o,addtocompare:s,addtoast:y}))},j=a(65),S=a(82),x=a(102),T=Object(N.connect)((function(e,t){return{products:Object(w.f)(e.productData.products,t.category,t.type,t.limit),currency:e.currencyData,cartItems:e.cartData,wishlistItems:e.wishlistData,compareItems:e.compareData}}),(function(e){return{addToCart:function(t,a,n,r,c){e(Object(j.e)(t,a,n,r,c))},addToWishlist:function(t,a){e(Object(S.d)(t,a))},addToCompare:function(t,a){e(Object(x.c)(t,a))}}}))((function(e){var t=e.products,a=e.currency,c=e.addToCart,o=e.addToWishlist,l=e.addToCompare,i=e.cartItems,s=e.wishlistItems,u=e.compareItems,m=e.sliderClassName,d=e.spaceBottomClass;return r.a.createElement(n.Fragment,null,t.map((function(e){return r.a.createElement(k,{sliderClassName:m,spaceBottomClass:d,product:e,currency:a,addToCart:c,addToWishlist:o,addToCompare:l,cartItem:i.filter((function(t){return t.id===e.id}))[0],wishlistItem:s.filter((function(t){return t.id===e.id}))[0],compareItem:u.filter((function(t){return t.id===e.id}))[0],key:e.id})})))})),_=function(e){var t=e.spaceTopClass,a=e.spaceBottomClass,n=e.category;return r.a.createElement("div",{className:"product-area hm5-section-padding ".concat(t||"","  ").concat(a||"")},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement(T,{category:n,limit:12,spaceBottomClass:"mb-20"}))))};t.default=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("title",null,"Flone | Fashion Home"),r.a.createElement("meta",{name:"description",content:"Fashion home of flone react minimalist eCommerce template."})),r.a.createElement(f,null,r.a.createElement(y,null),r.a.createElement(_,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",category:"accessories"}),r.a.createElement(g.a,{spaceBottomClass:"pb-100"})))}}}]);
//# sourceMappingURL=73.6db3741d.chunk.js.map