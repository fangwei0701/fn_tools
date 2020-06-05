!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var e=n();for(var r in e)("object"==typeof exports?exports:t)[r]=e[r]}}(this,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,c=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!n||e.length!==n);r=!0);}catch(t){o=!0,c=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return e}}(t,n)||function(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){return(""+t).split(n)}e.r(n),e.d(n,"numberFormat",(function(){return v})),e.d(n,"numberTransform",(function(){return b})),e.d(n,"dateFormat",(function(){return g})),e.d(n,"dateCompare",(function(){return y}));const u=["round","ceil","floor"],a={lower:{num:["零","一","二","三","四","五","六","七","八","九"],unit:["","十","百","千","万"],level:["","万","亿"]},upper:{num:["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],unit:["","拾","佰","仟"],level:["","万","亿"]},decimal:{unit:["分","角"]},maxNumber:1e12};function i(t,n){if(!n)return t;const e=/(-?\d+)(\d{3})/;for(;e.test(t);)t=t.replace(e,"$1"+n+"$2");return t}function l(t,n,e){let r="";if(u.includes(t)&&e){const o=Math.pow(10,e);r=Math[t](n*o)/o}else{const[t="0",o="0"]=c(n,"."),u=e?o.substring(0,e):o;r=Number(`${t}.${u}`)}return""+r}function f(t,n){if(!n)return t;const e=t.length;return e<n&&(t+=new Array(n-e+1).join("0")),t}function d(t,n){const{num:e,unit:r}=n||{};let o;return t.reverse().reduce((t,n,c)=>{o=t[0]||[];let u=o&&o.length<4?o:[],a="0"===n?e[n]:e[n]+r[c%4];return u.unshift(a),1===u.length?t.unshift(u):o=u,t},[])}function s(t,n){return t.reduce((e,r,o)=>{let c=n.level[t.length-o-1],u=r.join("").replace(/(零)\1+/g,"$1"),a=u.length;return"零"===u?(u="",c=""):"零"===u[a-1]&&(u=u.slice(0,a-1)),e+u+c},"")}function p(t,n,e){return t.map((t,r)=>{const{unit:o}=e,c="0"!==t?o[o.length-r-1]:"";return`${n.num[t]}${c}`}).join("")}function m(t){return t.map(t=>t<10?"0"+t:t)}function v(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"2",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"round",u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"--";if(null==t||isNaN(t))return u;var a=String(t).replace(/[^0-9+-Ee]/g,"");if(""===a)return u;var d=/[0-9]/.test(e)?"":e,s=Number(n)?Math.abs(n):0,p=l(r,a,s),m=c(p,"."),v=o(m,2),b=v[0],g=void 0===b?"0":b,y=v[1],h=void 0===y?"0":y,M=i(g,d),j=f(h,s);return s?"".concat(M,".").concat(j):"".concat(M)}function b(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"upper",e=t.replace(/,/g,"");if(Number(e)>a.maxNumber)return console.error("输入的数值 ".concat(e," 已超过最大输入数值 ").concat(a.maxNumber,"!")),!1;var r=a[n],u=l("round",e,"2"),i=c(u,"."),f=o(i,2),m=f[0],v=void 0===m?"0":m,b=f[1],g=void 0===b?"0":b,y=c(v,""),h=0===Number(g)?[]:c(g,""),M=d(y,r),j=s(M,r),S=p(h,r,a.decimal);return"".concat(j,"元")+(S||"整")}function g(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=arguments.length>2?arguments[2]:void 0,r=new Date(+t),c=r.getFullYear(),u=r.getMonth(),a=r.getDate(),i=r.getHours(),l=r.getMinutes(),f=r.getSeconds(),d=m([u,a,i,l,f]),s=o(d,5),p=s[0],v=s[1],b=s[2],g=s[3],y=s[4],h={YY:"".concat(c),"YY-MM":"".concat(c).concat(e).concat(p),"YY-MM-DD":"".concat(c).concat(e).concat(p).concat(e).concat(v),"YY-MM-DD-HMS":"".concat(c).concat(e).concat(p).concat(e).concat(v," ").concat(b,":").concat(g,":").concat(y," "),"MM-DD":"".concat(p).concat(e).concat(v),HMS:"".concat(b,":").concat(g,":").concat(y),HM:"".concat(b,":").concat(g),MS:"".concat(g,":").concat(y)};return h[n]}function y(t,n,e){var r;r=e?n-+new Date-t+e:n-t;var c=o(m([Math.floor(r/864e5),Math.floor(r/864e5%24),Math.floor(r/1e3/60%60),Math.floor(r/1e3%60)]),4);return{diff:r,days:c[0],hours:c[1],minutes:c[2],seconds:c[3]}}}])}));