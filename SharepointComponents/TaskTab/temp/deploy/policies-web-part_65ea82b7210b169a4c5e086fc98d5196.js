define("fc2baa3e-0297-4bd1-8dbf-d70666d0e734_0.0.1",["@microsoft/sp-webpart-base","@microsoft/sp-core-library","PoliciesWebPartStrings"],function(e,n,t){return function(e){var n={};function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(i,a,function(n){return e[n]}.bind(null,a));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=22)}([function(n,t){n.exports=e},,function(e,t){e.exports=n},function(e,n){e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var a=(o=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),r=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[t].concat(r).concat([a]).join("\n")}var o;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(i[r]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&i[o[0]]||(t&&!o[2]?o[2]=t:t&&(o[2]="("+o[2]+") and ("+t+")"),n.push(o))}},n}},function(e,n,t){"use strict";(function(e){var t,i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0});var a="undefined"==typeof window?e:window,r=a&&a.CSPSettings&&a.CSPSettings.nonce,o=function(){var e=a.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]};e.runState||(e=i({},e,{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}}));e.registeredThemableStyles||(e=i({},e,{registeredThemableStyles:[]}));return a.__themeState__=e,e}(),l=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,s=1e4,c=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};function d(e){var n=c();e();var t=c();o.perf.duration+=t-n}function u(){d(function(){var e=o.runState.buffer.slice();o.runState.buffer=[];var n=[].concat.apply([],e);n.length>0&&b(n)})}function b(e,n){o.loadStyles?o.loadStyles(m(e).styleString,e):t?function(e,n){if("undefined"==typeof document)return;var t=document.getElementsByTagName("head")[0],i=o.registeredStyles,a=o.lastStyleElement,r=a?a.styleSheet:void 0,l=r?r.cssText:"",c=i[i.length-1],d=m(e).styleString;(!a||l.length+d.length>s)&&((a=document.createElement("style")).type="text/css",n?(t.replaceChild(a,n.styleElement),n.styleElement=a):t.appendChild(a),n||(c={styleElement:a,themableStyle:e},i.push(c)));a.styleSheet.cssText+=h(d),Array.prototype.push.apply(c.themableStyle,e),o.lastStyleElement=a}(e,n):function(e){if("undefined"==typeof document)return;var n=document.getElementsByTagName("head")[0],t=document.createElement("style"),i=m(e),a=i.styleString,l=i.themable;t.type="text/css",r&&t.setAttribute("nonce",r);t.appendChild(document.createTextNode(a)),o.perf.count++,n.appendChild(t);var s={styleElement:t,themableStyle:e};l?o.registeredThemableStyles.push(s):o.registeredStyles.push(s)}(e)}function p(e){void 0===e&&(e=3),3!==e&&2!==e||(f(o.registeredStyles),o.registeredStyles=[]),3!==e&&1!==e||(f(o.registeredThemableStyles),o.registeredThemableStyles=[])}function f(e){e.forEach(function(e){var n=e&&e.styleElement;n&&n.parentElement&&n.parentElement.removeChild(n)})}function h(e){return e&&(e=m(g(e)).styleString),e}function m(e){var n=o.theme,t=!1;return{styleString:(e||[]).map(function(e){var i=e.theme;if(i){t=!0;var a=n?n[i]:void 0,r=e.defaultValue||"inherit";return n&&!a&&console,a||r}return e.rawString}).join(""),themable:t}}function g(e){var n=[];if(e){for(var t=0,i=void 0;i=l.exec(e);){var a=i.index;a>t&&n.push({rawString:e.substring(t,a)}),n.push({theme:i[1],defaultValue:i[2]}),t=l.lastIndex}n.push({rawString:e.substring(t)})}return n}n.loadStyles=function(e,n){void 0===n&&(n=!1),d(function(){var i=Array.isArray(e)?e:g(e);void 0===t&&(t=function(){var e=!1;if("undefined"!=typeof document){var n=document.createElement("style");n.type="text/css",e=!!n.styleSheet}return e}());var a=o.runState,r=a.mode,l=a.buffer,s=a.flushTimer;n||1===r?(l.push(i),s||(o.runState.flushTimer=setTimeout(function(){o.runState.flushTimer=0,u()},0))):b(i)})},n.configureLoadStyles=function(e){o.loadStyles=e},n.configureRunMode=function(e){o.runState.mode=e},n.flush=u,n.loadTheme=function(e){o.theme=e,function(){if(o.theme){for(var e=[],n=0,t=o.registeredThemableStyles;n<t.length;n++){var i=t[n];e.push(i.themableStyle)}e.length>0&&(p(1),b([].concat.apply([],e)))}}()},n.clearStyles=p,n.detokenize=h,n.splitStyles=g}).call(this,t(5))},function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},,,,function(e,n){e.exports=t},,,,,,,,,function(e,n,t){var i=t(19),a=t(4);"string"==typeof i&&(i=[[e.i,i]]);for(var r=0;r<i.length;r++)a.loadStyles(i[r][1],!0);i.locals&&(e.exports=i.locals)},function(e,n,t){(e.exports=t(3)(!1)).push([e.i,'.policies_9bb4c299 .container_9bb4c299{margin:0 auto;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.policies_9bb4c299 .row_9bb4c299{margin:0 -8px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000}.policies_9bb4c299 .row_9bb4c299:after,.policies_9bb4c299 .row_9bb4c299:before{display:table;content:"";line-height:0}.policies_9bb4c299 .row_9bb4c299:after{clear:both}.policies_9bb4c299 .column1_9bb4c299{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}[dir=ltr] .policies_9bb4c299 .column1_9bb4c299{float:left}[dir=rtl] .policies_9bb4c299 .column1_9bb4c299{float:right}.policies_9bb4c299 .column1_9bb4c299 .ms-Grid_9bb4c299{padding:0}@media (min-width:640px){.policies_9bb4c299 .column1_9bb4c299{width:16.666666666666664%}}.policies_9bb4c299 .column2_9bb4c299{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}[dir=ltr] .policies_9bb4c299 .column2_9bb4c299{float:left}[dir=rtl] .policies_9bb4c299 .column2_9bb4c299{float:right}.policies_9bb4c299 .column2_9bb4c299 .ms-Grid_9bb4c299{padding:0}@media (min-width:640px){.policies_9bb4c299 .column2_9bb4c299{width:83.33333333333334%}}.policies_9bb4c299 .sidebar_9bb4c299{margin:0;padding:0;width:300px;background-color:#f3f2f1;position:fixed;height:100%;overflow:auto}.policies_9bb4c299 .sidebar_9bb4c299 a{display:block;color:#a9a8a7;padding:8px;padding-left:30px;text-decoration:none}.policies_9bb4c299 .sidebar_9bb4c299 a.active_9bb4c299{background-color:#e3e2eb;color:#000;font-weight:700;cursor:pointer}.policies_9bb4c299 .sidebar_9bb4c299 a:hover:not(.active_9bb4c299){background-color:#e3e2eb;color:#000}.policies_9bb4c299 div.content_9bb4c299{margin-left:150px;padding:20px 16px;height:auto;width:auto}.policies_9bb4c299 .head_9bb4c299{margin-bottom:20px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.policies_9bb4c299 .subheading_9bb4c299{margin-top:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.policies_9bb4c299 .subsubheading_9bb4c299{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;margin:0}.policies_9bb4c299 .bulletpts_9bb4c299{font-size:14px}.policies_9bb4c299 .hrdetails_9bb4c299{margin-left:15%}',""])},,,function(e,n,t){"use strict";t.r(n);var i=t(2),a=t(0);t(18);var r,o={policies:"policies_9bb4c299",container:"container_9bb4c299",row:"row_9bb4c299",column1:"column1_9bb4c299","ms-Grid":"ms-Grid_9bb4c299",column2:"column2_9bb4c299",sidebar:"sidebar_9bb4c299",active:"active_9bb4c299",content:"content_9bb4c299",head:"head_9bb4c299",subheading:"subheading_9bb4c299",subsubheading:"subsubheading_9bb4c299",bulletpts:"bulletpts_9bb4c299",hrdetails:"hrdetails_9bb4c299"},l=t(9),s=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),c=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return s(n,e),n.prototype.render=function(){this.domElement.innerHTML='\n      <div class="'+o.policies+'">\n        <div class="'+o.container+'">\n          <div class="'+o.row+'">\n            <div class="'+o.column1+'">\n              <div class="'+o.sidebar+'">\n      <a\n        class="HR active"\n        data-toggle="collapse"\n        data-target="#hr"\n        href="#heading2"\n        >\n        <span class="HR2">Human resources</span>\n        </a\n      >\n      <div id="hr" class="collapse show display-show">\n        <div class="'+o.hrdetails+'">\n          <div class="EB">Employee Benefits</div>\n          \x3c!--data-toggle="modal" data-target=".content"--\x3e\n          <div class="PI">Payroll Info</div>\n          <div class="Com">Compensation</div>\n          <div class="service">Service</div>\n        </div>\n      </div>\n      <a class="PB" href="#">\n        <span class="PB2">Pay & Benefits</span>\n      </a>\n      <a class="IT" href="#">\n        <span class="right-chev"></span>\n        <span class="IT2">IT facilities</span>\n      </a>\n      <a class="RO" href="#">Retail operations</a>\n    </div>\n\n\n            </div>\n\n             <div class="'+o.column2+'">\n                <div class="'+o.content+'">\n      <div class="heading2 tab-pane fade in active show" id="#heading2">\n        <div class="'+o.head+'">\n          <h4>Human Resource Policies</h4>\n          This document contains all policies-related information for employees.\n          Please contact your HR representative for any queries.\n        </div>\n        <h6 class="'+o.subheading+'">1.1 Annual Leave</h6>\n        <p class="'+o.subsubheading+'">\n          Important guidelines for the annual leave policy are listed below:\n        </p>\n        <ul class="'+o.bulletpts+'">\n          <li>\n            All employees are entitled to a total of 15 annual leaves during the\n            calendar year\n          </li>\n          <li>\n            The annual leave cycle is based on calendar year (January 1 to\n            December 31)\n          </li>\n          <li>\n            Weekly off/holidays falling during the leave period are excluded\n            from the number of leave days taken\n          </li>\n          <li>\n            Only 5 unused annual leaves can be carried forward to the next\n            calendar year\n          </li>\n          <li>\n            Employees who join during the course of the year will receive annual\n            leaves on a pro-rated basis\n          </li>\n          <li>\n            If an employee leaves during the leave cycle and has taken more\n            leaves than the eligibility, the excess leaves taken will be\n            adjusted against the full and final settlement\n          </li>\n          <li>\n            All employees need to apply for leaves using the designated vacation\n            tool\n          </li>\n          <li>\n            All annual leaves must be approved by managers before the leave\n            period begins\n          </li>\n        </ul>\n        <h6 class="'+o.subheading+'">1.2 Sick Leave</h6>\n        <p class="'+o.subsubheading+'">\n          Important guidelines for the sick leave policy are listed below:\n        </p>\n        <ul class="'+o.bulletpts+'">\n          <li>\n            All employees are entitled to a total of 12 sick leaves during the\n            calendar year\n          </li>\n          <li>\n            The sick leave cycle is based on calendar year (January 1 to\n            December 31)\n          </li>\n          <li>\n            Weekly off/holidays falling during the leave period are excluded\n            from the number of leave days taken\n          </li>\n          <li>\n            Unused sick leaves cannot be carried forward to the next calendar\n            year\n          </li>\n          <li>\n            Employees who join during the course of the year will receive sick\n            leaves on a pro-rated basis\n          </li>\n          <li>\n            If an employee leaves during the leave cycle and has taken more\n            leaves than the eligibility, the excess leaves taken will be\n            adjusted against the full and final settlement\n          </li>\n          <li>\n            All employees need to apply for sick leaves using the designated\n            vacation tool after re-joining work\n          </li>\n          <li>\n            If an employee takes more than 5 consecutive sick leaves, he/she\n            will be required to furnish a medical certificate\n          </li>\n        </ul>\n      </div>\n    </div>\n             </div>\n          </div>\n        </div>\n      </div>'},Object.defineProperty(n.prototype,"dataVersion",{get:function(){return i.Version.parse("1.0")},enumerable:!0,configurable:!0}),n.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:l.PropertyPaneDescription},groups:[{groupName:l.BasicGroupName,groupFields:[Object(a.PropertyPaneTextField)("description",{label:l.DescriptionFieldLabel})]}]}]}},n}(a.BaseClientSideWebPart);n.default=c}])});