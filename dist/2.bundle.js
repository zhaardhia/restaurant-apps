(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,function(e,t,n){"use strict";t.a={BASE_URL:"https://restaurant-api.dicoding.dev",BASE_IMAGE_URL:{SMALL:"https://restaurant-api.dicoding.dev/images/small",MEDIUM:"https://restaurant-api.dicoding.dev/images/medium",LARGE:"https://restaurant-api.dicoding.dev/images/large"},DEFAULT_LANGUAGE:"en-us",DATABASE_NAME:"restaurant-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurants",CACHE_NAME:"RestaurantsCatalogue"}},function(e,t,n){"use strict";var r=n(1),a={MAIN:"".concat(r.a.BASE_URL,"/list"),DETAIL:function(e){return"".concat(r.a.BASE_URL,"/detail/").concat(e)},REVIEW:"".concat(r.a.BASE_URL,"/review")};function o(e,t,n,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function u(e){o(i,r,a,u,c,"next",e)}function c(e){o(i,r,a,u,c,"throw",e)}u(void 0)}))}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r,o,c,s;return t=e,n=null,r=[{key:"mainRestaurant",value:(s=i(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a.MAIN);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.restaurants);case 7:case"end":return e.stop()}}),e)}))),function(){return s.apply(this,arguments)})},{key:"detailRestaurant",value:(c=i(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a.DETAIL(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.restaurant);case 7:case"end":return e.stop()}}),e)}))),function(e){return c.apply(this,arguments)})},{key:"addReview",value:(o=i(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a.REVIEW,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})}],n&&u(t.prototype,n),r&&u(t,r),e}();t.a=c},function(e,t,n){"use strict";var r=n(14),a=n(1);function o(e,t,n,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function u(e){o(i,r,a,u,c,"next",e)}function c(e){o(i,r,a,u,c,"throw",e)}u(void 0)}))}}var u=a.a.DATABASE_NAME,c=a.a.DATABASE_VERSION,s=a.a.OBJECT_STORE_NAME,f=Object(r.a)(u,c,{upgrade:function(e){e.createObjectStore(s,{keyPath:"id"})}}),l={getRestaurant:function(e){return i(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,f;case 4:return t.abrupt("return",t.sent.get(s,e));case 5:case"end":return t.stop()}}),t)})))()},getAllRestaurant:function(){return i(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return e.abrupt("return",e.sent.getAll(s));case 3:case"end":return e.stop()}}),e)})))()},putRestaurant:function(e){return i(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.hasOwnProperty("id")){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,f;case 4:return t.abrupt("return",t.sent.put(s,e));case 5:case"end":return t.stop()}}),t)})))()},deleteRestaurant:function(e){return i(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f;case 2:return t.abrupt("return",t.sent.delete(s,e));case 3:case"end":return t.stop()}}),t)})))()}};t.a=l},function(e,t,n){"use strict";var r={parseActiveUrlWithCombiner:function(){var e=window.location.hash.slice(1).toLowerCase(),t=this._urlSplitter(e);return this._urlCombiner(t)},parseActiveUrlWithoutCombiner:function(){var e=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(e)},_urlSplitter:function(e){var t=e.split("/");return{resource:t[1]||null,id:t[2]||null,verb:t[3]||null}},_urlCombiner:function(e){return(e.resource?"/".concat(e.resource):"/")+(e.id?"/:id":"")+(e.verb?"/".concat(e.verb):"")}};t.a=r},,,function(e,t,n){"use strict";var r={init:function(e){var t=this,n=e.button,r=e.drawer;n.addEventListener("click",(function(e){t._toggleDrawer(e,r),n.classList.toggle("toggle")}))},_toggleDrawer:function(e,t){e.stopPropagation(),t.classList.toggle("nav-active"),t.style.display="flex",document.querySelectorAll(".nav-links li").forEach((function(e,n){e.style.animation?(e.style.animation="",t.style.display="none"):(t.style.display="flex",e.style.animation="navLinkFade 0.5s ease forwards ".concat(n/7+.3,"s"))}))}};t.a=r},function(e,t,n){"use strict";var r=n(5),a=n(9),o=n(10),i=n(12),u={"/":r.a,"/main":r.a,"/restaurant":a.a,"/detail/:id":o.a,"/like":i.a};t.a=u},,,function(e,t,n){"use strict";var r=n(3),a=n(0);function o(e,t,n,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function u(e){o(i,r,a,u,c,"next",e)}function c(e){o(i,r,a,u,c,"throw",e)}u(void 0)}))}}var u={init:function(e){var t=this;return i(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.likeButtonContainer,a=e.restaurant,t._likeButtonContainer=r,t._restaurant=a,n.next=5,t._renderButton();case 5:case"end":return n.stop()}}),n)})))()},_renderButton:function(){var e=this;return i(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e._restaurant.id,t.next=3,e._isRestaurantExist(n);case 3:if(!t.sent){t.next=7;break}e._renderLiked(),t.next=8;break;case 7:e._renderLike();case 8:case"end":return t.stop()}}),t)})))()},_isRestaurantExist:function(e){return i(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.getRestaurant(e);case 2:return n=t.sent,t.abrupt("return",!!n);case 4:case"end":return t.stop()}}),t)})))()},_renderLike:function(){var e=this;this._likeButtonContainer.innerHTML=Object(a.c)(),document.querySelector("#likeButton").addEventListener("click",i(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.putRestaurant(e._restaurant);case 2:e._renderButton();case 3:case"end":return t.stop()}}),t)}))))},_renderLiked:function(){var e=this;this._likeButtonContainer.innerHTML=Object(a.d)(),document.querySelector("#likeButton").addEventListener("click",i(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.deleteRestaurant(e._restaurant.id);case 2:e._renderButton();case 3:case"end":return t.stop()}}),t)}))))}};t.a=u},,,,,,,,,,,function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/c6b2c6c466715f76abcc5ec31e65fca4-hero-image.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/09f158c25ee72d8113679e9e82a3831f-hero-image-small.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/52533c308ec029d5ebac102d55ceeaf1-hero-image-large.jpg"},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function i(e){var t="function"==typeof Map?new Map:void 0;return(i=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return u(e,arguments,f(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,e)})(e)}function u(e,t,n){return(u=c()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&s(a,n.prototype),a}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(d,e);var t,n,i,u,l,p=(t=d,n=c(),function(){var e,r=f(t);if(n){var a=f(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return o(this,e)});function d(){return r(this,d),p.apply(this,arguments)}return i=d,(u=[{key:"connectedCallback",value:function(){this._render()}},{key:"_render",value:function(){this.innerHTML='\n    <div class="footer-container">\n    <div class="footer-container-first">\n        <a href="#/main">\n            <img alt="Ja-Food-putih">\n        </a>\n        <div>\n            <h4>JaFood Jaya Abadi</h4>\n            <p>\n                Jl. Batik Kumeli No.50, Sukaluyu,<br>\n                Kec. Cibeunying Kaler, Kota Bandung<br>\n                Jawa Barat 40123\n            </p>\n        </div>\n    </div>\n    <div class="footer-container-second">\n        <h4>Menu</h4>\n        <a href="#/main">Home</a>\n        <a href="#/restaurant">Restaurant</a>\n        <a href="#/favorite">Favorite</a>\n        <a href="https://github.com/zhaardhia">About Us</a>\n    </div>\n    <div class="footer-container-third">\n        <h4>Socials</h4>\n        <div>\n            <a href="https://instagram.com">\n                <i class="fab fa-instagram"></i>\n            </a>\n            <a href="https://twitter.com">\n                <i class="fab fa-twitter"></i>\n            </a>\n            <a href="https://facebook.com">\n                <i class="fab fa-facebook"></i>\n            </a>\n        </div>\n    </div>\n</div>\n<hr>\n<p class="copyright">Copyright &copy; 2021 - JaFood Jaya Abadi</p>\n    '}}])&&a(i.prototype,u),l&&a(i,l),d}(i(HTMLElement));window.customElements.define("footer-app",l)},function(e,t,n){"use strict";n.r(t);n(15),n(17);var r=n(6),a=(n(25),n(13)),o=n.n(a);function i(e,t,n,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,a)}var u=function(){var e,t=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=4;break}return e.next=3,o.a.register();case 3:return e.abrupt("return");case 4:console.log("Service worker not supported in this browser");case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function u(e){i(o,r,a,u,c,"next",e)}function c(e){i(o,r,a,u,c,"throw",e)}u(void 0)}))});return function(){return t.apply(this,arguments)}}();document.querySelector("nav a img").setAttribute("src","https://i.ibb.co/xh621tP/Ja-Food-putih.png"),document.querySelector(".footer-container-first img").setAttribute("src","https://i.ibb.co/xh621tP/Ja-Food-putih.png");var c=new r.a({button:document.querySelector("#mobile-menu"),drawer:document.querySelector(".nav-links"),hero:document.querySelector("#hero-banner"),content:document.querySelector("#maincontent")});window.addEventListener("hashchange",(function(){c.renderPage()})),window.addEventListener("load",(function(){c.renderPage(),u()})),window.addEventListener("scroll",(function(){document.querySelector("nav").classList.toggle("sticky",window.scrollY>0)}))}]]);