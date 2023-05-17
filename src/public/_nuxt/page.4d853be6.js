import{u as se,a as de}from"./usePacketBroker.9203f3f6.js";import{a as le,b as A,s as j,N as ce,e as B,k as Y,u as Q,K as V,f as fe,o as X,M as me}from"./entry.b77de8da.js";function E(r){return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(r)}function O(r){if(r===null||r===!0||r===!1)return NaN;var t=Number(r);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function v(r,t){if(t.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+t.length+" present")}function b(r){v(1,arguments);var t=Object.prototype.toString.call(r);return r instanceof Date||E(r)==="object"&&t==="[object Date]"?new Date(r.getTime()):typeof r=="number"||t==="[object Number]"?new Date(r):((typeof r=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function he(r,t){v(2,arguments);var e=b(r).getTime(),a=O(t);return new Date(e+a)}var ve={};function F(){return ve}function ge(r){var t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),r.getTime()-t.getTime()}function we(r){return v(1,arguments),r instanceof Date||E(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function be(r){if(v(1,arguments),!we(r)&&typeof r!="number")return!1;var t=b(r);return!isNaN(Number(t))}function ye(r,t){v(2,arguments);var e=O(t);return he(r,-e)}var pe=864e5;function Te(r){v(1,arguments);var t=b(r),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),n=e-a;return Math.floor(n/pe)+1}function N(r){v(1,arguments);var t=1,e=b(r),a=e.getUTCDay(),n=(a<t?7:0)+a-t;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function ee(r){v(1,arguments);var t=b(r),e=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(e+1,0,4),a.setUTCHours(0,0,0,0);var n=N(a),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var o=N(i);return t.getTime()>=n.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function Ce(r){v(1,arguments);var t=ee(r),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var a=N(e);return a}var Oe=6048e5;function Me(r){v(1,arguments);var t=b(r),e=N(t).getTime()-Ce(t).getTime();return Math.round(e/Oe)+1}function $(r,t){var e,a,n,i,o,s,c,l;v(1,arguments);var f=F(),d=O((e=(a=(n=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&n!==void 0?n:f.weekStartsOn)!==null&&a!==void 0?a:(c=f.locale)===null||c===void 0||(l=c.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&e!==void 0?e:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=b(r),h=m.getUTCDay(),w=(h<d?7:0)+h-d;return m.setUTCDate(m.getUTCDate()-w),m.setUTCHours(0,0,0,0),m}function te(r,t){var e,a,n,i,o,s,c,l;v(1,arguments);var f=b(r),d=f.getUTCFullYear(),m=F(),h=O((e=(a=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:m.firstWeekContainsDate)!==null&&a!==void 0?a:(c=m.locale)===null||c===void 0||(l=c.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(d+1,0,h),w.setUTCHours(0,0,0,0);var D=$(w,t),T=new Date(0);T.setUTCFullYear(d,0,h),T.setUTCHours(0,0,0,0);var k=$(T,t);return f.getTime()>=D.getTime()?d+1:f.getTime()>=k.getTime()?d:d-1}function De(r,t){var e,a,n,i,o,s,c,l;v(1,arguments);var f=F(),d=O((e=(a=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:f.firstWeekContainsDate)!==null&&a!==void 0?a:(c=f.locale)===null||c===void 0||(l=c.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&e!==void 0?e:1),m=te(r,t),h=new Date(0);h.setUTCFullYear(m,0,d),h.setUTCHours(0,0,0,0);var w=$(h,t);return w}var ke=6048e5;function Pe(r,t){v(1,arguments);var e=b(r),a=$(e,t).getTime()-De(e,t).getTime();return Math.round(a/ke)+1}function u(r,t){for(var e=r<0?"-":"",a=Math.abs(r).toString();a.length<t;)a="0"+a;return e+a}var _e={y:function(t,e){var a=t.getUTCFullYear(),n=a>0?a:1-a;return u(e==="yy"?n%100:n,e.length)},M:function(t,e){var a=t.getUTCMonth();return e==="M"?String(a+1):u(a+1,2)},d:function(t,e){return u(t.getUTCDate(),e.length)},a:function(t,e){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h:function(t,e){return u(t.getUTCHours()%12||12,e.length)},H:function(t,e){return u(t.getUTCHours(),e.length)},m:function(t,e){return u(t.getUTCMinutes(),e.length)},s:function(t,e){return u(t.getUTCSeconds(),e.length)},S:function(t,e){var a=e.length,n=t.getUTCMilliseconds(),i=Math.floor(n*Math.pow(10,a-3));return u(i,e.length)}};const p=_e;var M={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Se={G:function(t,e,a){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})}},y:function(t,e,a){if(e==="yo"){var n=t.getUTCFullYear(),i=n>0?n:1-n;return a.ordinalNumber(i,{unit:"year"})}return p.y(t,e)},Y:function(t,e,a,n){var i=te(t,n),o=i>0?i:1-i;if(e==="YY"){var s=o%100;return u(s,2)}return e==="Yo"?a.ordinalNumber(o,{unit:"year"}):u(o,e.length)},R:function(t,e){var a=ee(t);return u(a,e.length)},u:function(t,e){var a=t.getUTCFullYear();return u(a,e.length)},Q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return u(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return u(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,a){var n=t.getUTCMonth();switch(e){case"M":case"MM":return p.M(t,e);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,a){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return u(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,a,n){var i=Pe(t,n);return e==="wo"?a.ordinalNumber(i,{unit:"week"}):u(i,e.length)},I:function(t,e,a){var n=Me(t);return e==="Io"?a.ordinalNumber(n,{unit:"week"}):u(n,e.length)},d:function(t,e,a){return e==="do"?a.ordinalNumber(t.getUTCDate(),{unit:"date"}):p.d(t,e)},D:function(t,e,a){var n=Te(t);return e==="Do"?a.ordinalNumber(n,{unit:"dayOfYear"}):u(n,e.length)},E:function(t,e,a){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,a,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return u(o,2);case"eo":return a.ordinalNumber(o,{unit:"day"});case"eee":return a.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(i,{width:"short",context:"formatting"});case"eeee":default:return a.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,a,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return u(o,e.length);case"co":return a.ordinalNumber(o,{unit:"day"});case"ccc":return a.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(i,{width:"narrow",context:"standalone"});case"cccccc":return a.day(i,{width:"short",context:"standalone"});case"cccc":default:return a.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,a){var n=t.getUTCDay(),i=n===0?7:n;switch(e){case"i":return String(i);case"ii":return u(i,e.length);case"io":return a.ordinalNumber(i,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});case"iiii":default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,a){var n=t.getUTCHours(),i=n/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,a){var n=t.getUTCHours(),i;switch(n===12?i=M.noon:n===0?i=M.midnight:i=n/12>=1?"pm":"am",e){case"b":case"bb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,a){var n=t.getUTCHours(),i;switch(n>=17?i=M.evening:n>=12?i=M.afternoon:n>=4?i=M.morning:i=M.night,e){case"B":case"BB":case"BBB":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,a){if(e==="ho"){var n=t.getUTCHours()%12;return n===0&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return p.h(t,e)},H:function(t,e,a){return e==="Ho"?a.ordinalNumber(t.getUTCHours(),{unit:"hour"}):p.H(t,e)},K:function(t,e,a){var n=t.getUTCHours()%12;return e==="Ko"?a.ordinalNumber(n,{unit:"hour"}):u(n,e.length)},k:function(t,e,a){var n=t.getUTCHours();return n===0&&(n=24),e==="ko"?a.ordinalNumber(n,{unit:"hour"}):u(n,e.length)},m:function(t,e,a){return e==="mo"?a.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):p.m(t,e)},s:function(t,e,a){return e==="so"?a.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):p.s(t,e)},S:function(t,e){return p.S(t,e)},X:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return K(o);case"XXXX":case"XX":return C(o);case"XXXXX":case"XXX":default:return C(o,":")}},x:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"x":return K(o);case"xxxx":case"xx":return C(o);case"xxxxx":case"xxx":default:return C(o,":")}},O:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+J(o,":");case"OOOO":default:return"GMT"+C(o,":")}},z:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+J(o,":");case"zzzz":default:return"GMT"+C(o,":")}},t:function(t,e,a,n){var i=n._originalDate||t,o=Math.floor(i.getTime()/1e3);return u(o,e.length)},T:function(t,e,a,n){var i=n._originalDate||t,o=i.getTime();return u(o,e.length)}};function J(r,t){var e=r>0?"-":"+",a=Math.abs(r),n=Math.floor(a/60),i=a%60;if(i===0)return e+String(n);var o=t||"";return e+String(n)+o+u(i,2)}function K(r,t){if(r%60===0){var e=r>0?"-":"+";return e+u(Math.abs(r)/60,2)}return C(r,t)}function C(r,t){var e=t||"",a=r>0?"-":"+",n=Math.abs(r),i=u(Math.floor(n/60),2),o=u(n%60,2);return a+i+e+o}const xe=Se;var z=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},ae=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},We=function(t,e){var a=t.match(/(P+)(p+)?/)||[],n=a[1],i=a[2];if(!i)return z(t,e);var o;switch(n){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",z(n,e)).replace("{{time}}",ae(i,e))},Ue={p:ae,P:We};const Ye=Ue;var Ee=["D","DD"],Ne=["YY","YYYY"];function $e(r){return Ee.indexOf(r)!==-1}function Fe(r){return Ne.indexOf(r)!==-1}function Z(r,t,e){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var qe={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Le=function(t,e,a){var n,i=qe[t];return typeof i=="string"?n=i:e===1?n=i.one:n=i.other.replace("{{count}}",e.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:n+" ago":n};const Re=Le;function G(r){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):r.defaultWidth,a=r.formats[e]||r.formats[r.defaultWidth];return a}}var He={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ie={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Be={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Qe={date:G({formats:He,defaultWidth:"full"}),time:G({formats:Ie,defaultWidth:"full"}),dateTime:G({formats:Be,defaultWidth:"full"})};const Xe=Qe;var Ge={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ae=function(t,e,a,n){return Ge[t]};const je=Ae;function S(r){return function(t,e){var a=e!=null&&e.context?String(e.context):"standalone",n;if(a==="formatting"&&r.formattingValues){var i=r.defaultFormattingWidth||r.defaultWidth,o=e!=null&&e.width?String(e.width):i;n=r.formattingValues[o]||r.formattingValues[i]}else{var s=r.defaultWidth,c=e!=null&&e.width?String(e.width):r.defaultWidth;n=r.values[c]||r.values[s]}var l=r.argumentCallback?r.argumentCallback(t):t;return n[l]}}var Ve={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Je={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ke={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ze={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ze={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},et={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},tt=function(t,e){var a=Number(t),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},at={ordinalNumber:tt,era:S({values:Ve,defaultWidth:"wide"}),quarter:S({values:Je,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:S({values:Ke,defaultWidth:"wide"}),day:S({values:ze,defaultWidth:"wide"}),dayPeriod:S({values:Ze,defaultWidth:"wide",formattingValues:et,defaultFormattingWidth:"wide"})};const rt=at;function x(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.width,n=a&&r.matchPatterns[a]||r.matchPatterns[r.defaultMatchWidth],i=t.match(n);if(!i)return null;var o=i[0],s=a&&r.parsePatterns[a]||r.parsePatterns[r.defaultParseWidth],c=Array.isArray(s)?it(s,function(d){return d.test(o)}):nt(s,function(d){return d.test(o)}),l;l=r.valueCallback?r.valueCallback(c):c,l=e.valueCallback?e.valueCallback(l):l;var f=t.slice(o.length);return{value:l,rest:f}}}function nt(r,t){for(var e in r)if(r.hasOwnProperty(e)&&t(r[e]))return e}function it(r,t){for(var e=0;e<r.length;e++)if(t(r[e]))return e}function ot(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.match(r.matchPattern);if(!a)return null;var n=a[0],i=t.match(r.parsePattern);if(!i)return null;var o=r.valueCallback?r.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;var s=t.slice(n.length);return{value:o,rest:s}}}var ut=/^(\d+)(th|st|nd|rd)?/i,st=/\d+/i,dt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},lt={any:[/^b/i,/^(a|c)/i]},ct={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ft={any:[/1/i,/2/i,/3/i,/4/i]},mt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ht={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},vt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},gt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},wt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},bt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},yt={ordinalNumber:ot({matchPattern:ut,parsePattern:st,valueCallback:function(t){return parseInt(t,10)}}),era:x({matchPatterns:dt,defaultMatchWidth:"wide",parsePatterns:lt,defaultParseWidth:"any"}),quarter:x({matchPatterns:ct,defaultMatchWidth:"wide",parsePatterns:ft,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:x({matchPatterns:mt,defaultMatchWidth:"wide",parsePatterns:ht,defaultParseWidth:"any"}),day:x({matchPatterns:vt,defaultMatchWidth:"wide",parsePatterns:gt,defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:wt,defaultMatchWidth:"any",parsePatterns:bt,defaultParseWidth:"any"})};const pt=yt;var Tt={code:"en-US",formatDistance:Re,formatLong:Xe,formatRelative:je,localize:rt,match:pt,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Ct=Tt;var Ot=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Mt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Dt=/^'([^]*?)'?$/,kt=/''/g,Pt=/[a-zA-Z]/;function _t(r,t,e){var a,n,i,o,s,c,l,f,d,m,h,w,D,T,k,q,L,R;v(2,arguments);var re=String(t),P=F(),_=(a=(n=e==null?void 0:e.locale)!==null&&n!==void 0?n:P.locale)!==null&&a!==void 0?a:Ct,H=O((i=(o=(s=(c=e==null?void 0:e.firstWeekContainsDate)!==null&&c!==void 0?c:e==null||(l=e.locale)===null||l===void 0||(f=l.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&s!==void 0?s:P.firstWeekContainsDate)!==null&&o!==void 0?o:(d=P.locale)===null||d===void 0||(m=d.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(H>=1&&H<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var I=O((h=(w=(D=(T=e==null?void 0:e.weekStartsOn)!==null&&T!==void 0?T:e==null||(k=e.locale)===null||k===void 0||(q=k.options)===null||q===void 0?void 0:q.weekStartsOn)!==null&&D!==void 0?D:P.weekStartsOn)!==null&&w!==void 0?w:(L=P.locale)===null||L===void 0||(R=L.options)===null||R===void 0?void 0:R.weekStartsOn)!==null&&h!==void 0?h:0);if(!(I>=0&&I<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!_.localize)throw new RangeError("locale must contain localize property");if(!_.formatLong)throw new RangeError("locale must contain formatLong property");var W=b(r);if(!be(W))throw new RangeError("Invalid time value");var ne=ge(W),ie=ye(W,ne),oe={firstWeekContainsDate:H,weekStartsOn:I,locale:_,_originalDate:W},ue=re.match(Mt).map(function(g){var y=g[0];if(y==="p"||y==="P"){var U=Ye[y];return U(g,_.formatLong)}return g}).join("").match(Ot).map(function(g){if(g==="''")return"'";var y=g[0];if(y==="'")return St(g);var U=xe[y];if(U)return!(e!=null&&e.useAdditionalWeekYearTokens)&&Fe(g)&&Z(g,t,String(r)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&$e(g)&&Z(g,t,String(r)),U(ie,g,_.localize,oe);if(y.match(Pt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return g}).join("");return ue}function St(r){var t=r.match(Dt);return t?t[1].replace(kt,"'"):r}const xt={class:"container mx-auto"},Wt={class:"stats"},Ut={key:0,class:"online"},Yt={key:1,class:"offline"},Et=le({__name:"page",setup(r){const{post:t}=se(),{measure:e}=de(),a=A(!1),n=A(null),i=async()=>{try{const d=await t("/api/heartbeat");a.value=d.status==="ok"}catch(d){a.value=!1}},o=async()=>{try{n.value=await e()}catch(d){console.error(d)}},s=j(()=>n.value===null||n.value.passRate===0?"0.0 KB":`${n.value.passRate/8e9} GB`),c=j(()=>n.value===null||n.value.time===null?"-":_t(n.value.time,"dd.MM.Y hh:mm:ss"));i(),o();const l=setInterval(i,1e4),f=setInterval(o,2e3);return ce(()=>{clearInterval(l),clearInterval(f)}),(d,m)=>(X(),B("div",xt,[Y("div",Wt,[Q(a)?(X(),B("span",Ut," API Online ")):(X(),B("span",Yt," API Offline ")),Y("span",null," Pass Rate: "+V(Q(s)),1),Y("span",null," Stats Time: "+V(Q(c)),1)]),Y("main",null,[fe(d.$slots,"default",{},void 0,!0)])]))}});const Ft=me(Et,[["__scopeId","data-v-e33c9825"]]);export{Ft as default};