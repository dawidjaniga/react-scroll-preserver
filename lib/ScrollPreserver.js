/*! For license information please see ScrollPreserver.js.LICENSE.txt */
module.exports=function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=2)}([function(e,r){e.exports=require("react")},function(e,r,t){"use strict";e.exports=t(3)},function(e,r,t){"use strict";t.r(r);var n=t(0),o=t(1),u=0;r.default=function(e){var r,t=e.children,c=Object(n.useRef)(null),i=null===c||void 0===c||null===(r=c.current)||void 0===r?void 0:r.offsetHeight;return Object(n.useLayoutEffect)((function(){if(i){var e=i-u;document.documentElement.scrollTop>0&&e>0&&(document.documentElement.scrollTop+=e),u=i}}),[i]),Object(o.jsx)("div",{ref:c,children:t})}},function(e,r,t){"use strict";t(4);var n=t(0),o=60103;if(r.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),r.Fragment=u("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,u={},l=null,a=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)i.call(r,n)&&!f.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:o,type:e,key:l,ref:a,props:u,_owner:c.current}}r.jsx=l,r.jsxs=l},function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,r){for(var t,i,f=c(e),l=1;l<arguments.length;l++){for(var a in t=Object(arguments[l]))o.call(t,a)&&(f[a]=t[a]);if(n){i=n(t);for(var s=0;s<i.length;s++)u.call(t,i[s])&&(f[i[s]]=t[i[s]])}}return f}}]);
//# sourceMappingURL=ScrollPreserver.js.map