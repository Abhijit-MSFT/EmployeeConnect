define("fc2baa3e-0297-4bd1-8dbf-d70666d0e734_0.0.1",["@microsoft/sp-webpart-base","@microsoft/sp-core-library","@microsoft/sp-loader","PoliciesWebPartStrings"],function(e,n,t,i){return function(e){var n={};function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(i,a,function(n){return e[n]}.bind(null,a));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=21)}([function(n,t){n.exports=e},,function(e,t){e.exports=n},function(e,n){e.exports=t},function(e,n){e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var a=(o=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),r=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[t].concat(r).concat([a]).join("\n")}var o;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(i[r]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&i[o[0]]||(t&&!o[2]?o[2]=t:t&&(o[2]="("+o[2]+") and ("+t+")"),n.push(o))}},n}},function(e,n,t){"use strict";(function(e){var t,i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0});var a="undefined"==typeof window?e:window,r=a&&a.CSPSettings&&a.CSPSettings.nonce,o=function(){var e=a.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]};e.runState||(e=i({},e,{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}}));e.registeredThemableStyles||(e=i({},e,{registeredThemableStyles:[]}));return a.__themeState__=e,e}(),c=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,l=1e4,s=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};function d(e){var n=s();e();var t=s();o.perf.duration+=t-n}function f(){d(function(){var e=o.runState.buffer.slice();o.runState.buffer=[];var n=[].concat.apply([],e);n.length>0&&u(n)})}function u(e,n){o.loadStyles?o.loadStyles(m(e).styleString,e):t?function(e,n){if("undefined"==typeof document)return;var t=document.getElementsByTagName("head")[0],i=o.registeredStyles,a=o.lastStyleElement,r=a?a.styleSheet:void 0,c=r?r.cssText:"",s=i[i.length-1],d=m(e).styleString;(!a||c.length+d.length>l)&&((a=document.createElement("style")).type="text/css",n?(t.replaceChild(a,n.styleElement),n.styleElement=a):t.appendChild(a),n||(s={styleElement:a,themableStyle:e},i.push(s)));a.styleSheet.cssText+=h(d),Array.prototype.push.apply(s.themableStyle,e),o.lastStyleElement=a}(e,n):function(e){if("undefined"==typeof document)return;var n=document.getElementsByTagName("head")[0],t=document.createElement("style"),i=m(e),a=i.styleString,c=i.themable;t.type="text/css",r&&t.setAttribute("nonce",r);t.appendChild(document.createTextNode(a)),o.perf.count++,n.appendChild(t);var l={styleElement:t,themableStyle:e};c?o.registeredThemableStyles.push(l):o.registeredStyles.push(l)}(e)}function b(e){void 0===e&&(e=3),3!==e&&2!==e||(p(o.registeredStyles),o.registeredStyles=[]),3!==e&&1!==e||(p(o.registeredThemableStyles),o.registeredThemableStyles=[])}function p(e){e.forEach(function(e){var n=e&&e.styleElement;n&&n.parentElement&&n.parentElement.removeChild(n)})}function h(e){return e&&(e=m(g(e)).styleString),e}function m(e){var n=o.theme,t=!1;return{styleString:(e||[]).map(function(e){var i=e.theme;if(i){t=!0;var a=n?n[i]:void 0,r=e.defaultValue||"inherit";return n&&!a&&console,a||r}return e.rawString}).join(""),themable:t}}function g(e){var n=[];if(e){for(var t=0,i=void 0;i=c.exec(e);){var a=i.index;a>t&&n.push({rawString:e.substring(t,a)}),n.push({theme:i[1],defaultValue:i[2]}),t=c.lastIndex}n.push({rawString:e.substring(t)})}return n}n.loadStyles=function(e,n){void 0===n&&(n=!1),d(function(){var i=Array.isArray(e)?e:g(e);void 0===t&&(t=function(){var e=!1;if("undefined"!=typeof document){var n=document.createElement("style");n.type="text/css",e=!!n.styleSheet}return e}());var a=o.runState,r=a.mode,c=a.buffer,l=a.flushTimer;n||1===r?(c.push(i),l||(o.runState.flushTimer=setTimeout(function(){o.runState.flushTimer=0,f()},0))):u(i)})},n.configureLoadStyles=function(e){o.loadStyles=e},n.configureRunMode=function(e){o.runState.mode=e},n.flush=f,n.loadTheme=function(e){o.theme=e,function(){if(o.theme){for(var e=[],n=0,t=o.registeredThemableStyles;n<t.length;n++){var i=t[n];e.push(i.themableStyle)}e.length>0&&(b(1),u([].concat.apply([],e)))}}()},n.clearStyles=b,n.detokenize=h,n.splitStyles=g}).call(this,t(6))},function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},,,function(e,n){e.exports=i},,,,,,,,function(e,n,t){var i=t(18),a=t(5);"string"==typeof i&&(i=[[e.i,i]]);for(var r=0;r<i.length;r++)a.loadStyles(i[r][1],!0);i.locals&&(e.exports=i.locals)},function(e,n,t){(e.exports=t(4)(!1)).push([e.i,'.policies_bbdf6cc9 .container_bbdf6cc9{width:auto;margin:0 auto;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.policies_bbdf6cc9 .row_bbdf6cc9{margin:0 -8px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000}.policies_bbdf6cc9 .row_bbdf6cc9:after,.policies_bbdf6cc9 .row_bbdf6cc9:before{display:table;content:"";line-height:0}.policies_bbdf6cc9 .row_bbdf6cc9:after{clear:both}.policies_bbdf6cc9 .column1_bbdf6cc9{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}[dir=ltr] .policies_bbdf6cc9 .column1_bbdf6cc9{float:left}[dir=rtl] .policies_bbdf6cc9 .column1_bbdf6cc9{float:right}.policies_bbdf6cc9 .column1_bbdf6cc9 .ms-Grid_bbdf6cc9{padding:0}@media (min-width:640px){.policies_bbdf6cc9 .column1_bbdf6cc9{width:25%}}.policies_bbdf6cc9 .column2_bbdf6cc9{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}[dir=ltr] .policies_bbdf6cc9 .column2_bbdf6cc9{float:left}[dir=rtl] .policies_bbdf6cc9 .column2_bbdf6cc9{float:right}.policies_bbdf6cc9 .column2_bbdf6cc9 .ms-Grid_bbdf6cc9{padding:0}@media (min-width:640px){.policies_bbdf6cc9 .column2_bbdf6cc9{width:75%}}.policies_bbdf6cc9 .sidebar_bbdf6cc9{margin:0;padding:0;background-color:#f3f2f1;position:fixed;height:100%;overflow:auto}.policies_bbdf6cc9 .sidebar_bbdf6cc9 a{display:block;color:#a9a8a7;padding:8px;padding-left:30px;text-decoration:none}.policies_bbdf6cc9 a.active_bbdf6cc9{background-color:#e3e2eb;color:#000;font-weight:700;cursor:pointer}.policies_bbdf6cc9 a.active_bbdf6cc9 .sidebar_bbdf6cc9{color:#000}.policies_bbdf6cc9 .sidebar_bbdf6cc9 a:hover:not(.active_bbdf6cc9){background-color:#e3e2eb;color:#000}.policies_bbdf6cc9 div.content_bbdf6cc9{margin-left:10px;padding:20px 16px;height:100vh;width:auto}.policies_bbdf6cc9 .head_bbdf6cc9{margin-bottom:20px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.policies_bbdf6cc9 .subheading_bbdf6cc9{margin-top:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.policies_bbdf6cc9 .subsubheading_bbdf6cc9{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;margin:0}.policies_bbdf6cc9 .bulletpts_bbdf6cc9{font-size:14px}.policies_bbdf6cc9 .hrdetails_bbdf6cc9{margin-left:15%}',""])},,,function(e,n,t){"use strict";t.r(n);var i=t(2),a=t(0);t(17);var r,o={policies:"policies_bbdf6cc9",container:"container_bbdf6cc9",row:"row_bbdf6cc9",column1:"column1_bbdf6cc9","ms-Grid":"ms-Grid_bbdf6cc9",column2:"column2_bbdf6cc9",sidebar:"sidebar_bbdf6cc9",active:"active_bbdf6cc9",content:"content_bbdf6cc9",head:"head_bbdf6cc9",subheading:"subheading_bbdf6cc9",subsubheading:"subsubheading_bbdf6cc9",bulletpts:"bulletpts_bbdf6cc9",hrdetails:"hrdetails_bbdf6cc9"},c=t(9),l=t(3),s=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),d=function(e){function n(){var n=e.call(this)||this;return l.SPComponentLoader.loadCss("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"),n}return s(n,e),n.prototype.render=function(){this.domElement.innerHTML='\n      <div class="'+o.policies+'">\n        <div class="'+o.container+'">\n          <div class="'+o.row+'">\n            <div class="'+o.column1+'">\n              <div class="'+o.sidebar+'">\n      <a\n        class="'+o.active+'"\n        data-toggle="collapse"\n        data-target="#hr"\n        href="#heading2"\n        >\n        <span class="HR2">Human resources</span>\n        </a\n      >\n      <a class="'+o+'" href="#heading3">\n        <span class="PB2">Pay & Benefits</span>\n      </a>\n      <a class="'+o+'" href="#">\n        <span class="right-chev"></span>\n        <span class="IT2">IT facilities</span>\n      </a>\n      <a class="'+o+'" href="#">Retail operations</a>\n    </div>\n\n\n            </div>\n\n             <div class="'+o.column2+'">\n                <div class="'+o.content+'">\n      <div class="heading2 tab-pane fade in active show" id="#heading2">\n        <div class="'+o.head+'">\n          <h4>Human Resource Policies</h4>\n          This document contains all policies-related information for employees.\n          Please contact your HR representative for any queries.\n        </div>\n        <h6 class="'+o.subheading+'">1.1 Annual Leave</h6>\n        <p class="'+o.subsubheading+'">\n          Important guidelines for the annual leave policy are listed below:\n        </p>\n        <ul class="'+o.bulletpts+'">\n          <li>\n            All employees are entitled to a total of 15 annual leaves during the\n            calendar year\n          </li>\n          <li>\n            The annual leave cycle is based on calendar year (January 1 to\n            December 31)\n          </li>\n          <li>\n            Weekly off/holidays falling during the leave period are excluded\n            from the number of leave days taken\n          </li>\n          <li>\n            Only 5 unused annual leaves can be carried forward to the next\n            calendar year\n          </li>\n          <li>\n            Employees who join during the course of the year will receive annual\n            leaves on a pro-rated basis\n          </li>\n          <li>\n            If an employee leaves during the leave cycle and has taken more\n            leaves than the eligibility, the excess leaves taken will be\n            adjusted against the full and final settlement\n          </li>\n          <li>\n            All employees need to apply for leaves using the designated vacation\n            tool\n          </li>\n          <li>\n            All annual leaves must be approved by managers before the leave\n            period begins\n          </li>\n        </ul>\n        <h6 class="'+o.subheading+'">1.2 Sick Leave</h6>\n        <p class="'+o.subsubheading+'">\n          Important guidelines for the sick leave policy are listed below:\n        </p>\n        <ul class="'+o.bulletpts+'">\n          <li>\n            All employees are entitled to a total of 12 sick leaves during the\n            calendar year\n          </li>\n          <li>\n            The sick leave cycle is based on calendar year (January 1 to\n            December 31)\n          </li>\n          <li>\n            Weekly off/holidays falling during the leave period are excluded\n            from the number of leave days taken\n          </li>\n          <li>\n            Unused sick leaves cannot be carried forward to the next calendar\n            year\n          </li>\n          <li>\n            Employees who join during the course of the year will receive sick\n            leaves on a pro-rated basis\n          </li>\n          <li>\n            If an employee leaves during the leave cycle and has taken more\n            leaves than the eligibility, the excess leaves taken will be\n            adjusted against the full and final settlement\n          </li>\n          <li>\n            All employees need to apply for sick leaves using the designated\n            vacation tool after re-joining work\n          </li>\n          <li>\n            If an employee takes more than 5 consecutive sick leaves, he/she\n            will be required to furnish a medical certificate\n          </li>\n        </ul>\n      </div>\n       <div id="#heading3">\n    </div>\n    </div>\n\n             </div>\n          </div>\n        </div>\n      </div>'},Object.defineProperty(n.prototype,"dataVersion",{get:function(){return i.Version.parse("1.0")},enumerable:!0,configurable:!0}),n.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:c.PropertyPaneDescription},groups:[{groupName:c.BasicGroupName,groupFields:[Object(a.PropertyPaneTextField)("description",{label:c.DescriptionFieldLabel})]}]}]}},n}(a.BaseClientSideWebPart);n.default=d}])});