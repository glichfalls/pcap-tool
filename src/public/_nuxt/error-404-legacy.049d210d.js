!function(){function e(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){u=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw i}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return e};var e={},t=Object.prototype,o=t.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},l=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(_){d=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,i=Object.create(o.prototype),l=new P(n||[]);return a(i,"_invoke",{value:S(e,r,l)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(_){return{type:"throw",arg:_}}}e.wrap=s;var p={};function v(){}function h(){}function g(){}var m={};d(m,l,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(L([])));b&&b!==t&&o.call(b,l)&&(m=b);var x=g.prototype=v.prototype=Object.create(m);function w(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(a,i,l,u){var c=f(e[a],e,i);if("throw"!==c.type){var d=c.arg,s=d.value;return s&&"object"==n(s)&&o.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,l,u)}),(function(e){r("throw",e,l,u)})):t.resolve(s).then((function(e){d.value=e,l(d)}),(function(e){return r("throw",e,l,u)}))}u(c.arg)}var i;a(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function S(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return C()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=j(i,r);if(l){if(l===p)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=f(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,p;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function L(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:C}}function C(){return{value:void 0,done:!0}}return h.prototype=g,a(x,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:h,configurable:!0}),h.displayName=d(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,d(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},w(k.prototype),d(k.prototype,u,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new k(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(x),d(x,c,"Generator"),d(x,l,(function(){return this})),d(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t,r,n,o,a,i){try{var l=e[a](i),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){l(a,n,o,i,u,"next",e)}function u(e){l(a,n,o,i,u,"throw",e)}i(void 0)}))}}System.register(["./entry-legacy.13c493fd.js"],(function(t,o){"use strict";var i,l,c,d,s,f,p,v,h,g,m,y,b,x,w,k,S,j,O,E,P,L,C,_,N,z,A=document.createElement("style");return A.textContent='.spotlight[data-v-30d2164e]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-30d2164e]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-30d2164e]{background-color:rgba(255,255,255,.3)}.gradient-border[data-v-30d2164e]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-30d2164e]{background-color:rgba(20,20,20,.3)}.gradient-border[data-v-30d2164e]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}.gradient-border[data-v-30d2164e]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:"";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-30d2164e]:hover:before{background-position:-50% 0;opacity:1}.bg-white[data-v-30d2164e]{--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-30d2164e]{cursor:pointer}.flex[data-v-30d2164e]{display:flex}.grid[data-v-30d2164e]{display:grid}.place-content-center[data-v-30d2164e]{place-content:center}.items-center[data-v-30d2164e]{align-items:center}.justify-center[data-v-30d2164e]{justify-content:center}.font-sans[data-v-30d2164e]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.font-medium[data-v-30d2164e]{font-weight:500}.font-light[data-v-30d2164e]{font-weight:300}.text-8xl[data-v-30d2164e]{font-size:6rem;line-height:1}.text-xl[data-v-30d2164e]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-30d2164e]{line-height:1.25}.mb-8[data-v-30d2164e]{margin-bottom:2rem}.mb-16[data-v-30d2164e]{margin-bottom:4rem}.max-w-520px[data-v-30d2164e]{max-width:520px}.min-h-screen[data-v-30d2164e]{min-height:100vh}.overflow-hidden[data-v-30d2164e]{overflow:hidden}.px-8[data-v-30d2164e]{padding-left:2rem;padding-right:2rem}.py-2[data-v-30d2164e]{padding-bottom:.5rem;padding-top:.5rem}.px-4[data-v-30d2164e]{padding-left:1rem;padding-right:1rem}.fixed[data-v-30d2164e]{position:fixed}.left-0[data-v-30d2164e]{left:0}.right-0[data-v-30d2164e]{right:0}.text-center[data-v-30d2164e]{text-align:center}.text-black[data-v-30d2164e]{--tw-text-opacity:1;color:#000;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-30d2164e]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-30d2164e]{width:100%}.z-10[data-v-30d2164e]{z-index:10}.z-20[data-v-30d2164e]{z-index:20}@media (min-width:640px){.sm\\:text-4xl[data-v-30d2164e]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-30d2164e]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-30d2164e]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-30d2164e]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-30d2164e]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:px-6[data-v-30d2164e]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-30d2164e]{--tw-bg-opacity:1;background-color:#000;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-30d2164e]{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}}\n',document.head.appendChild(A),{setters:[function(e){i=e.C,l=e.D,c=e.a,d=e.f,s=e.E,f=e.e,p=e.G,v=e.h,h=e.H,g=e.r,m=e.I,y=e.J,b=e.K,x=e.L,w=e.M,k=e.m,S=e.N,j=e.o,O=e.j,E=e.s,P=e.t,L=e.b,C=e.w,_=e.O,N=e.x,z=e.y}],execute:function(){var o=globalThis.requestIdleCallback||function(e){var t=Date.now(),r={didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}};return setTimeout((function(){e(r)}),1)},A=globalThis.cancelIdleCallback||function(e){clearTimeout(e)};function I(e){return q.apply(this,arguments)}function q(){return q=u(r().mark((function t(n){var o,a,i,u,c,d,s,f,p,v=arguments;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=v.length>1&&void 0!==v[1]?v[1]:l(),a=o.resolve(n),i=a.path,(u=a.matched).length){t.next=4;break}return t.abrupt("return");case 4:if(o._routePreloaded||(o._routePreloaded=new Set),!o._routePreloaded.has(i)){t.next=7;break}return t.abrupt("return");case 7:if(!((c=o._preloadPromises=o._preloadPromises||[]).length>4)){t.next=10;break}return t.abrupt("return",Promise.all(c).then((function(){return I(n,o)})));case 10:o._routePreloaded.add(i),d=u.map((function(e){var t;return null===(t=e.components)||void 0===t?void 0:t.default})).filter((function(e){return"function"==typeof e})),s=e(d),t.prev=13,p=r().mark((function e(){var t,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=f.value,n=Promise.resolve(t()).catch((function(){})).finally((function(){return c.splice(c.indexOf(n))})),c.push(n);case 3:case"end":return e.stop()}}),e)})),s.s();case 16:if((f=s.n()).done){t.next=20;break}return t.delegateYield(p(),"t0",18);case 18:t.next=16;break;case 20:t.next=25;break;case 22:t.prev=22,t.t1=t.catch(13),s.e(t.t1);case 25:return t.prev=25,s.f(),t.finish(25);case 28:return t.next=30,Promise.all(c);case 30:case"end":return t.stop()}}),t,null,[[13,22,25,28]])}))),q.apply(this,arguments)}function T(t){var k=t.componentName||"NuxtLink";return c({name:k,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup:function(c,k){var S=k.slots,j=l(),O=d((function(){return function(e,r){if(!e||"append"!==t.trailingSlash&&"remove"!==t.trailingSlash)return e;var n="append"===t.trailingSlash?b:x;if("string"==typeof e)return n(e,!0);var o="path"in e?e.path:r(e).path;return a(a({},e),{},{name:void 0,path:n(o,!0)})}(c.to||c.href||"",j.resolve)})),E=d((function(){return!!c.external||(!(!c.target||"_self"===c.target)||"object"!==n(O.value)&&(""===O.value||s(O.value,{acceptRelative:!0})))})),P=f(!1),L=f(null),C=function(e){var t;L.value=c.custom?null==e||null===(t=e.$el)||void 0===t?void 0:t.nextElementSibling:null==e?void 0:e.$el};if(!1!==c.prefetch&&!0!==c.noPrefetch&&"_blank"!==c.target&&!function(){var e=navigator.connection;if(e&&(e.saveData||/2g/.test(e.effectiveType)))return!0;return!1}()){var _,N=i(),z=null;p((function(){var t=function(){var t=i();if(t._observer)return t._observer;var r=null,n=new Map,o=function(t,o){return r||(r=new IntersectionObserver((function(t){var r,o=e(t);try{for(o.s();!(r=o.n()).done;){var a=r.value,i=n.get(a.target);(a.isIntersecting||a.intersectionRatio>0)&&i&&i()}}catch(l){o.e(l)}finally{o.f()}}))),n.set(t,o),r.observe(t),function(){n.delete(t),r.unobserve(t),0===n.size&&(r.disconnect(),r=null)}},a=t._observer={observe:o};return a}();!function(e){var t=i();t.isHydrating?t.hooks.hookOnce("app:suspense:resolve",(function(){o(e)})):o(e)}((function(){_=o((function(){var e;null!=L&&null!==(e=L.value)&&void 0!==e&&e.tagName&&(z=t.observe(L.value,u(r().mark((function e(){var t,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(t=z)||void 0===t||t(),z=null,n="string"==typeof O.value?O.value:j.resolve(O.value).fullPath,e.next=5,Promise.all([N.hooks.callHook("link:prefetch",n).catch((function(){})),!E.value&&I(O.value,j).catch((function(){}))]);case 5:P.value=!0;case 6:case"end":return e.stop()}}),e)})))))}))}))})),v((function(){var e;_&&A(_),null===(e=z)||void 0===e||e(),z=null}))}return function(){var e,r,o;if(!E.value){var a={ref:C,to:O.value,activeClass:c.activeClass||t.activeClass,exactActiveClass:c.exactActiveClass||t.exactActiveClass,replace:c.replace,ariaCurrentValue:c.ariaCurrentValue,custom:c.custom};return c.custom||(P.value&&(a.class=c.prefetchedClass||t.prefetchedClass),a.rel=c.rel),h(g("RouterLink"),a,S.default)}var i="object"===n(O.value)?null!==(e=null===(r=j.resolve(O.value))||void 0===r?void 0:r.href)&&void 0!==e?e:null:O.value||null,l=c.target||null,u=c.noRel?null:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.find((function(e){return void 0!==e}))}(c.rel,t.externalRelAttribute,i?"noopener noreferrer":"")||null;return c.custom?S.default?S.default({href:i,navigate:function(){return w(i,{replace:c.replace})},get route(){if(i){var e=m(i);return{path:e.pathname,fullPath:e.pathname,get query(){return y(e.search)},hash:e.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:i}}},rel:u,target:l,isExternal:E.value,isActive:!1,isExactActive:!1}):null:h("a",{ref:L,href:i,rel:u,target:l},null===(o=S.default)||void 0===o?void 0:o.call(S))}}})}var G=T({componentName:"NuxtLink"});var F={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},R=function(e){return N("data-v-30d2164e"),e=e(),z(),e}((function(){return E("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)})),B={class:"max-w-520px text-center z-20"},D=["textContent"],M=["textContent"],H={class:"w-full flex items-center justify-center"};t("default",k({__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup:function(e){var t=e;return S({title:"".concat(t.statusCode," - ").concat(t.statusMessage," | ").concat(t.appName),script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),function(t,r){var n=G;return j(),O("div",F,[R,E("div",B,[E("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:P(e.statusCode)},null,8,D),E("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:P(e.description)},null,8,M),E("div",H,[L(n,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:C((function(){return[_(P(e.backHome),1)]})),_:1})])])])}}},[["__scopeId","data-v-30d2164e"]]))}}}))}();