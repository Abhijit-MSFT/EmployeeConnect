define("fefc85e6-8e32-4f3b-979e-8a0f128a5c85_0.0.1",["@microsoft/sp-webpart-base","@microsoft/sp-core-library","@microsoft/sp-loader","TaskWebPartStrings"],function(e,t,n,r){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",function(){var e,t=document.getElementsByTagName("script"),r=new RegExp("\\/task-web-part(_[a-z0-9-]+)*\\.js","i");if(t&&t.length)for(var i=0;i<t.length;i++)if(t[i]){var o=t[i].getAttribute("src");if(o&&o.match(r)){e=o.substring(0,o.lastIndexOf("/")+1);break}}if(!e)for(var a in window.__setWebpackPublicPathLoaderSrcRegistry__)if(a&&a.match(r)){e=a.substring(0,a.lastIndexOf("/")+1);break}n.p=e}(),n(n.s=19)}([function(t,n){t.exports=e},function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(1))},function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n};function i(e){for(var t="^",n=e.split("."),r=0;r<n.length;r++)t+=(r>0?"[.]":"")+n[r].replace("*","[^/^.]+");return t+="$"}Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){for(var t="",n=0;n<e.length;n++)t+=(0===n?"":"|")+i(e[n]);return new RegExp(t)}(["https://teams.microsoft.com","https://teams.microsoft.us","https://gov.teams.microsoft.us","https://dod.teams.microsoft.us","https://int.teams.microsoft.com","https://devspaces.skype.com","https://ssauth.skype.com","http://dev.local","http://dev.local:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com"]),a={},s={settings:"settings",content:"content",authentication:"authentication",remove:"remove",task:"task"};!function(e){var t,n,r,i=function(){this.enabled=!0};e.MenuItem=i,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),a.navBarMenuItemPress=function(e){t&&t(e)||(U(),D(c,"handleNavBarMenuItemPress",[e]))},a.actionMenuItemPress=function(e){n&&n(e)||(U(),D(c,"handleActionMenuItemPress",[e]))},a.setModuleView=function(e){r&&r(e)||(U(),D(c,"viewConfigItemPress",[e]))},e.setUpViews=function(e,t){U(),r=t,D(c,"setUpViews",[e])},e.setNavBarMenu=function(e,n){U(),t=n,D(c,"setNavBarMenu",[e])},e.showActionMenu=function(e,t){U(),n=t,D(c,"showActionMenu",[e])}}(t.menus||(t.menus={}));var l,c,u,d,f,p,h,g,m,b,v,y,w,_=!1,k=!1,T=[],x=[],S=0,P={},O=!1;function E(){window.print()}function C(e){U(),g=e,e&&D(c,"registerHandler",["themeChange"])}function M(e){U(),m=e,e&&D(c,"registerHandler",["fullScreen"])}function I(e){U(),b=e,e&&D(c,"registerHandler",["backButton"])}function N(){U();var e=D(c,"navigateBack",[]);P[e]=function(e){if(!e)throw new Error("Back navigation is not supported in the current client or context.")}}function j(e){U(),v=e,e&&D(c,"registerHandler",["beforeUnload"])}function U(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(!_)throw new Error("The library has not yet been initialized");if(p&&e&&e.length>0){for(var n=!1,r=0;r<e.length;r++)if(e[r]===p){n=!0;break}if(!n)throw new Error("This call is not allowed in the '"+p+"' context")}}function H(e){if(e&&e.data&&"object"==typeof e.data){var t=e.source||e.originalEvent.source,n=e.origin||e.originalEvent.origin;t===l||n!==l.location.origin&&!o.test(n.toLowerCase())||(function(e,t){c&&e!==c?d&&e!==d||(d=e,f=t):(c=e,u=t),c&&c.closed&&(c=null,u=null),d&&d.closed&&(d=null,f=null),L(c),L(d)}(t,n),t===c?z(e):t===d&&function(e){if("id"in e.data&&"func"in e.data){var t=e.data,n=a[t.func];if(n){var r=n.apply(this,t.args);r&&F(d,t.id,Array.isArray(r)?r:[r])}else{var i=D(c,t.func,t.args);P[i]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];d&&F(d,t.id,e)}}}}(e))}}function z(e){if("id"in e.data){var t=e.data,n=P[t.id];n&&(n.apply(null,t.args),delete P[t.id])}else if("func"in e.data){t=e.data;var r=a[t.func];r&&r.apply(this,t.args)}}function B(e){return e===c?T:e===d?x:[]}function A(e){return e===c?u:e===d?f:null}function L(e){for(var t=A(e),n=B(e);e&&t&&n.length>0;)e.postMessage(n.shift(),t)}function R(e,t){var n=l.setInterval(function(){0===B(e).length&&(clearInterval(n),t())},100)}function D(e,t,n){var r=function(e,t){return{id:S++,func:e,args:t||[]}}(t,n);if(k)l&&l.nativeInterface&&l.nativeInterface.framelessPostMessage(JSON.stringify(r));else{var i=A(e);e&&i?e.postMessage(r,i):B(e).push(r)}return r.id}function F(e,t,n){var r=function(e,t){return{id:e,args:t||[]}}(t,n),i=A(e);e&&i&&e.postMessage(r,i)}a.themeChange=function(e){g&&g(e),d&&D(d,"themeChange",[e])},a.fullScreenChange=function(e){m&&m(e)},a.backButtonPress=function(){b&&b()||N()},a.beforeUnload=function(){var e=function(){D(c,"readyToUnload",[])};v&&v(e)||e()},a.changeSettings=function(){y&&y()},t.initialize=function(e){if(void 0===e&&(e=window),!_){_=!0;var t=function(e){return H(e)};(c=(l=e).parent!==l.self?l.parent:l.opener)?l.addEventListener("message",t,!1):(k=!0,window.onNativeMessage=z);try{u="*";var n=D(c,"initialize",["1.4.2"]);P[n]=function(e,t){p=e,h=t}}finally{u=null}this._uninitialize=function(){p&&(C(null),M(null),I(null),j(null)),p===s.settings&&w.registerOnSaveHandler(null),p===s.remove&&w.registerOnRemoveHandler(null),k||l.removeEventListener("message",t,!1),_=!1,c=null,u=null,T=[],d=null,f=null,x=[],S=0,P={},p=null,h=null,k=!1}}},t._uninitialize=function(){},t.enablePrintCapability=function(){O||(O=!0,U(),document.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(E(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))},t.print=E,t.getContext=function(e){U();var t=D(c,"getContext");P[t]=e},t.registerOnThemeChangeHandler=C,t.registerFullScreenHandler=M,t.registerBackButtonHandler=I,t.navigateBack=N,t.registerBeforeUnloadHandler=j,t.registerChangeSettingsHandler=function(e){U(s.content),y=e,e&&D(c,"registerHandler",["changeSettings"])},t.navigateCrossDomain=function(e){U(s.content,s.settings,s.remove,s.task);var t=D(c,"navigateCrossDomain",[e]);P[t]=function(e){if(!e)throw new Error("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.")}},t.getTabInstances=function(e,t){U();var n=D(c,"getTabInstances",[t]);P[n]=e},t.getUserJoinedTeams=function(e,t){U();var n=D(c,"getUserJoinedTeams",[t]);P[n]=e},t.getMruTabInstances=function(e,t){U();var n=D(c,"getMruTabInstances",[t]);P[n]=e},t.shareDeepLink=function(e){U(s.content),D(c,"shareDeepLink",[e.subEntityId,e.subEntityLabel,e.subEntityWebUrl])},t.openFilePreview=function(e){U(s.content);var t=[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId];D(c,"openFilePreview",t)},t.showNotification=function(e){U(s.content);var t=[e.message,e.notificationType];D(c,"showNotification",t)},t.executeDeepLink=function(e){U(s.content);var t=D(c,"executeDeepLink",[e]);P[t]=function(e,t){if(!e)throw new Error(t)}},t.uploadCustomApp=function(e){U();var t=D(c,"uploadCustomApp",[e]);P[t]=function(e,t){if(!e)throw new Error(t)}},t.navigateToTab=function(e){U();var t=D(c,"navigateToTab",[e]);P[t]=function(e){if(!e)throw new Error("Invalid internalTabInstanceId and/or channelId were/was provided")}},function(e){var t,n;a["settings.save"]=function(e){var n=new r(e);t?t(n):n.notifySuccess()},a["settings.remove"]=function(){var e=new i;n?n(e):e.notifySuccess()},e.setValidityState=function(e){U(s.settings,s.remove),D(c,"settings.setValidityState",[e])},e.getSettings=function(e){U(s.content,s.settings,s.remove);var t=D(c,"settings.getSettings");P[t]=e},e.setSettings=function(e){U(s.content,s.settings);var t=D(c,"settings.setSettings",[e]);P[t]=function(e,t){if(!e)throw new Error(t)}},e.registerOnSaveHandler=function(e){U(s.settings),t=e,e&&D(c,"registerHandler",["save"])},e.registerOnRemoveHandler=function(e){U(s.remove),n=e,e&&D(c,"registerHandler",["remove"])};var r=function(){function e(e){this.notified=!1,this.result=e||{}}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),D(c,"settings.save.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),D(c,"settings.save.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},e}(),i=function(){function e(){this.notified=!1}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),D(c,"settings.remove.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),D(c,"settings.remove.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},e}()}(w=t.settings||(t.settings={})),function(e){var t,n;function r(){o();try{d&&d.close()}finally{d=null,f=null}}function i(e){t=e,r();var n=t.width||600,i=t.height||400;n=Math.min(n,l.outerWidth-400),i=Math.min(i,l.outerHeight-200);var o=document.createElement("a");o.href=t.url;var a=void 0!==l.screenLeft?l.screenLeft:l.screenX,s=void 0!==l.screenTop?l.screenTop:l.screenY;a+=l.outerWidth/2-n/2,s+=l.outerHeight/2-i/2,(d=l.open(o.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+s+", left="+a+", width="+n+", height="+i))?u():p("FailedToOpenWindow")}function o(){n&&(clearInterval(n),n=0),delete a.initialize,delete a.navigateCrossDomain}function u(){o(),n=l.setInterval(function(){if(!d||d.closed)p("CancelledByUser");else{var e=f;try{f="*",D(d,"ping")}finally{f=e}}},100),a.initialize=function(){return[s.authentication,h]},a.navigateCrossDomain=function(e){return!1}}function p(e){try{t&&t.failureCallback&&t.failureCallback(e)}finally{t=null,r()}}function g(e,t,n){if(e){var r=document.createElement("a");r.href=decodeURIComponent(e),r.host&&r.host!==window.location.host&&"outlook.office.com"===r.host&&r.search.indexOf("client_type=Win32_Outlook")>-1&&(t&&"result"===t&&(n&&(r.href=m(r.href,"result",n)),l.location.assign(m(r.href,"authSuccess",""))),t&&"reason"===t&&(n&&(r.href=m(r.href,"reason",n)),l.location.assign(m(r.href,"authFailure",""))))}}function m(e,t,n){var r=e.indexOf("#"),i=-1===r?"#":e.substr(r);return i=i+"&"+t+(""!==n?"="+n:""),(e=-1===r?e:e.substr(0,r))+i}a["authentication.authenticate.success"]=function(e){try{t&&t.successCallback&&t.successCallback(e)}finally{t=null,r()}},a["authentication.authenticate.failure"]=p,e.registerAuthenticationHandlers=function(e){t=e},e.authenticate=function(e){var n=void 0!==e?e:t;if(U(s.content,s.settings,s.remove,s.task),"desktop"===h||"android"===h||"ios"===h){var r=document.createElement("a");r.href=n.url;var o=D(c,"authentication.authenticate",[r.href,n.width,n.height]);P[o]=function(e,t){e?n.successCallback(t):n.failureCallback(t)}}else i(n)},e.getAuthToken=function(e){U();var t=D(c,"authentication.getAuthToken",[e.resources]);P[t]=function(t,n){t?e.successCallback(n):e.failureCallback(n)}},e.getUser=function(e){U();var t=D(c,"authentication.getUser");P[t]=function(t,n){t?e.successCallback(n):e.failureCallback(n)}},e.notifySuccess=function(e,t){g(t,"result",e),U(s.authentication),D(c,"authentication.authenticate.success",[e]),R(c,function(){return setTimeout(function(){return l.close()},200)})},e.notifyFailure=function(e,t){g(t,"reason",e),U(s.authentication),D(c,"authentication.authenticate.failure",[e]),R(c,function(){return setTimeout(function(){return l.close()},200)})}}(t.authentication||(t.authentication={})),t.sendCustomMessage=function(e,t){return U(),D(c,e,t)},function(e){e.startTask=function(e,t){U(s.content);var n=D(c,"tasks.startTask",[e]);P[n]=t},e.updateTask=function(e){U(s.content,s.task),e.width,e.height;var t=r(e,["width","height"]);if(Object.keys(t).length)throw new Error("updateTask requires a taskInfo argument containing only width and height");D(c,"tasks.updateTask",[e])},e.submitTask=function(e,t){U(s.content,s.task),D(c,"tasks.completeTask",[e,Array.isArray(t)?t:[t]])}}(t.tasks||(t.tasks={})),t.getChatMembers=function(e){U();var t=D(c,"getChatMembers");P[t]=e}}])},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";(function(e){var n,r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i="undefined"==typeof window?e:window,o=i&&i.CSPSettings&&i.CSPSettings.nonce,a=function(){var e=i.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]};e.runState||(e=r({},e,{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}}));e.registeredThemableStyles||(e=r({},e,{registeredThemableStyles:[]}));return i.__themeState__=e,e}(),s=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,l=1e4,c=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};function u(e){var t=c();e();var n=c();a.perf.duration+=n-t}function d(){u(function(){var e=a.runState.buffer.slice();a.runState.buffer=[];var t=[].concat.apply([],e);t.length>0&&f(t)})}function f(e,t){a.loadStyles?a.loadStyles(m(e).styleString,e):n?function(e,t){if("undefined"==typeof document)return;var n=document.getElementsByTagName("head")[0],r=a.registeredStyles,i=a.lastStyleElement,o=i?i.styleSheet:void 0,s=o?o.cssText:"",c=r[r.length-1],u=m(e).styleString;(!i||s.length+u.length>l)&&((i=document.createElement("style")).type="text/css",t?(n.replaceChild(i,t.styleElement),t.styleElement=i):n.appendChild(i),t||(c={styleElement:i,themableStyle:e},r.push(c)));i.styleSheet.cssText+=g(u),Array.prototype.push.apply(c.themableStyle,e),a.lastStyleElement=i}(e,t):function(e){if("undefined"==typeof document)return;var t=document.getElementsByTagName("head")[0],n=document.createElement("style"),r=m(e),i=r.styleString,s=r.themable;n.type="text/css",o&&n.setAttribute("nonce",o);n.appendChild(document.createTextNode(i)),a.perf.count++,t.appendChild(n);var l={styleElement:n,themableStyle:e};s?a.registeredThemableStyles.push(l):a.registeredStyles.push(l)}(e)}function p(e){void 0===e&&(e=3),3!==e&&2!==e||(h(a.registeredStyles),a.registeredStyles=[]),3!==e&&1!==e||(h(a.registeredThemableStyles),a.registeredThemableStyles=[])}function h(e){e.forEach(function(e){var t=e&&e.styleElement;t&&t.parentElement&&t.parentElement.removeChild(t)})}function g(e){return e&&(e=m(b(e)).styleString),e}function m(e){var t=a.theme,n=!1;return{styleString:(e||[]).map(function(e){var r=e.theme;if(r){n=!0;var i=t?t[r]:void 0,o=e.defaultValue||"inherit";return t&&!i&&console,i||o}return e.rawString}).join(""),themable:n}}function b(e){var t=[];if(e){for(var n=0,r=void 0;r=s.exec(e);){var i=r.index;i>n&&t.push({rawString:e.substring(n,i)}),t.push({theme:r[1],defaultValue:r[2]}),n=s.lastIndex}t.push({rawString:e.substring(n)})}return t}t.loadStyles=function(e,t){void 0===t&&(t=!1),u(function(){var r=Array.isArray(e)?e:b(e);void 0===n&&(n=function(){var e=!1;if("undefined"!=typeof document){var t=document.createElement("style");t.type="text/css",e=!!t.styleSheet}return e}());var i=a.runState,o=i.mode,s=i.buffer,l=i.flushTimer;t||1===o?(s.push(r),l||(a.runState.flushTimer=setTimeout(function(){a.runState.flushTimer=0,d()},0))):f(r)})},t.configureLoadStyles=function(e){a.loadStyles=e},t.configureRunMode=function(e){a.runState.mode=e},t.flush=d,t.loadTheme=function(e){a.theme=e,function(){if(a.theme){for(var e=[],t=0,n=a.registeredThemableStyles;t<n.length;t++){var r=n[t];e.push(r.themableStyle)}e.length>0&&(p(1),f([].concat.apply([],e)))}}()},t.clearStyles=p,t.detokenize=g,t.splitStyles=b}).call(this,n(6))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=r},,,function(e,t,n){var r=n(11),i=n(5);"string"==typeof r&&(r=[[e.i,r]]);for(var o=0;o<r.length;o++)i.loadStyles(r[o][1],!0);r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(12);(e.exports=n(4)(!1)).push([e.i,'.taskTab_8d110e43 .container_8d110e43{max-width:auto;margin:0 auto}.taskTab_8d110e43 .row_8d110e43{margin:0 -8px;-webkit-box-sizing:border-box;box-sizing:border-box;color:"[theme:white, default: #ffffff]";padding:0!important;margin:4px 0!important}.taskTab_8d110e43 .row_8d110e43:after,.taskTab_8d110e43 .row_8d110e43:before{display:table;content:"";line-height:0}.taskTab_8d110e43 .row_8d110e43:after{clear:both}.taskTab_8d110e43 .column_8d110e43{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}[dir=ltr] .taskTab_8d110e43 .column_8d110e43{float:left}[dir=rtl] .taskTab_8d110e43 .column_8d110e43{float:right}.taskTab_8d110e43 .column_8d110e43 .ms-Grid_8d110e43{padding:0}@media (min-width:640px){.taskTab_8d110e43 .column_8d110e43{width:25%}}@media (min-width:1024px){[dir=ltr] .taskTab_8d110e43 .column_8d110e43{left:16.66667%}[dir=rtl] .taskTab_8d110e43 .column_8d110e43{right:16.66667%}}@media (min-width:640px){[dir=ltr] .taskTab_8d110e43 .column_8d110e43{left:8.33333%}[dir=rtl] .taskTab_8d110e43 .column_8d110e43{right:8.33333%}}.taskTab_8d110e43 .heading_8d110e43{font-size:22px;color:#000}.taskTab_8d110e43 .subheading_8d110e43{font-size:18px;color:gray}.taskTab_8d110e43 .title_8d110e43{color:#000;font-weight:700;padding:2px;position:relative;top:10px}.taskTab_8d110e43 .review_8d110e43{color:#8a2be2;cursor:pointer}.taskTab_8d110e43 .review_8d110e43:hover{text-decoration:underline}.taskTab_8d110e43 .grid1_8d110e43,.taskTab_8d110e43 .grid2_8d110e43{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;background-image:url('+r(n(13))+");background-size:300px 200px;background-repeat:no-repeat;left:0!important;height:210px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}[dir=ltr] .taskTab_8d110e43 .grid1_8d110e43,[dir=ltr] .taskTab_8d110e43 .grid2_8d110e43{float:left}[dir=rtl] .taskTab_8d110e43 .grid1_8d110e43,[dir=rtl] .taskTab_8d110e43 .grid2_8d110e43{float:right}.taskTab_8d110e43 .grid1_8d110e43 .ms-Grid_8d110e43,.taskTab_8d110e43 .grid2_8d110e43 .ms-Grid_8d110e43{padding:0}@media (min-width:640px){.taskTab_8d110e43 .grid1_8d110e43,.taskTab_8d110e43 .grid2_8d110e43{width:25%}}@media (min-width:1024px){[dir=ltr] .taskTab_8d110e43 .grid1_8d110e43,[dir=ltr] .taskTab_8d110e43 .grid2_8d110e43{left:16.66667%}[dir=rtl] .taskTab_8d110e43 .grid1_8d110e43,[dir=rtl] .taskTab_8d110e43 .grid2_8d110e43{right:16.66667%}}@media (min-width:640px){[dir=ltr] .taskTab_8d110e43 .grid1_8d110e43,[dir=ltr] .taskTab_8d110e43 .grid2_8d110e43{left:8.33333%}[dir=rtl] .taskTab_8d110e43 .grid1_8d110e43,[dir=rtl] .taskTab_8d110e43 .grid2_8d110e43{right:8.33333%}}.taskTab_8d110e43 .grid2_8d110e43{background-image:url("+r(n(14))+');background-repeat:no-repeat;margin-left:2%}.taskTab_8d110e43 .button_8d110e43{text-decoration:none;height:32px;min-width:80px;background-color:"[theme:themePrimary, default: #0078d4]";border-color:"[theme:themePrimary, default: #0078d4]";color:"[theme:white, default: #ffffff]";outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px;margin-top:150px}.taskTab_8d110e43 .button_8d110e43 .label_8d110e43{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}@media screen and (max-width:425px){.taskTab_8d110e43 .grid1_8d110e43,.taskTab_8d110e43 .grid2_8d110e43{background-image:none}}',""])},function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t,n){e.exports=n.p+"pending3_84968af36cefc50388d07208c8773d4a.png"},function(e,t,n){e.exports=n.p+"expenses3_be55f569e57e25010ddb2598c3c51321.png"},,,,,function(e,t,n){"use strict";n.r(t);var r=n(2),i=n(0);n(10);var o,a={taskTab:"taskTab_8d110e43",container:"container_8d110e43",row:"row_8d110e43",column:"column_8d110e43","ms-Grid":"ms-Grid_8d110e43",heading:"heading_8d110e43",subheading:"subheading_8d110e43",title:"title_8d110e43",review:"review_8d110e43",grid1:"grid1_8d110e43",grid2:"grid2_8d110e43",button:"button_8d110e43",label:"label_8d110e43"},s=n(7),l=n(1),c=n(3),u=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});l.initialize();var d=function(e){function t(){var t=e.call(this)||this;return c.SPComponentLoader.loadCss("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"),t}return u(t,e),t.prototype.render=function(){this.domElement.innerHTML+='\n      <div class="'+a.taskTab+'">\n       <div class="'+a.heading+'"> Pending Submissions </div>\n        <div class="'+a.container+'">\n          <div class="'+a.row+'">\n            <div class="'+a.grid1+'">\n              <span class="'+a.title+'">12 Days of pending timesheet</span>\n              <a href="https://aka.ms/spfx" class="'+a.button+'">\n                <span class="'+a.label+'">Time-sheet</span>\n              </a>\n            </div>\n             <div class="'+a.grid2+'">\n              <span class="'+a.title+'">$25,000 Unreconciled expenses</span>\n              <a href="https://aka.ms/spfx" class="'+a.button+'">\n                <span class="'+a.label+'">Expenses</span>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class="'+a.row+'">\n        <div class="'+a.heading+'"> Pending Approvals </div>\n         <div class="'+a.subheading+'">Purchased Order (2)</div>\n        <table class="table table-bordered">\n          <thead>\n            <tr>\n              <th scope="col">PoNumber</th>\n              <th scope="col">Description</th>\n              <th scope="col">VendorName</th>\n              <th scope="col">VendorNo</th>\n              <th scope="col">TotalAmount</th>\n              <th scope="col"></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <th scope="row">848930</th>\n              <td>-</td>\n              <td>Store A</td>\n              <td>72383</td>\n              <td>&#36; 30,828</td>\n              <td class="'+a.review+'" id=\'review\'>Review</td>\n            </tr>\n            <tr>\n              <th scope="row">748290</th>\n              <td>-</td>\n              <td>Store B</td>\n              <td>57634</td>\n              <td>&#36; 42,000</td>\n              <td class="'+a.review+'">Review</td>\n            </tr>\n          </tbody>\n        </table>\n        <div class="'+a.subheading+'">Invoice (3)</div>\n         <table class="table table-bordered">\n          <thead>\n            <tr>\n              <th scope="col">Invoice no.</th>\n              <th scope="col">PO no.</th>\n              <th scope="col">Description</th>\n              <th scope="col">Vendor name</th>\n              <th scope="col">Vendor no.</th>\n              <th scope="col">Amount</th>\n              <th scope="col"></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <th scope="row">346829</th>\n              <td>27342992</td>\n              <td>-</td>\n              <td>Store A</td>\n              <td>72383</td>\n              <td>&#36; 56,000</td>\n              <td class="'+a.review+'">Review</td>\n            </tr>\n             <tr>\n              <th scope="row">634829</th>\n              <td>23444893</td>\n              <td>-</td>\n              <td>Store B</td>\n              <td>57634</td>\n              <td>&#36; 67,000</td>\n              <td class="'+a.review+'">Review</td>\n            </tr>\n             <tr>\n              <th scope="row">390323</th>\n              <td>24803955</td>\n              <td>-</td>\n              <td>Store C</td>\n              <td>68292</td>\n              <td>&#36; 22,000</td>\n              <td class="'+a.review+'">Review</td>\n            </tr>\n          </tbody>\n        </table>\n        <div class="'+a.subheading+'">Inventory (0)</div>\n       </div>\n      </div>',this._setButtonEventHandlers()},t.prototype._setButtonEventHandlers=function(){var e=this;this.domElement.querySelector("#review").addEventListener("click",function(){var t={InvoiceNo:null,height:null,width:null,url:null,fallbackUrl:null};t.height="medium",t.width="medium",t.url="https://employeeconnect-9566.azurewebsites.net/purchaseorder?poNumber=739254&vendorno=97547",t.height="medium",t.width="medium",t.fallbackUrl=t.url,l.tasks.startTask(t,e.submitHandler)})},t.prototype.submitHandler=function(e,t){var n;"podecline"==t.action&&((n={InvoiceNo:null,height:null,width:null,url:null,fallbackUrl:null}).url="https://employeeconnect-9566.azurewebsites.net/podecline?poNo="+t.poNumber+"&POreason="+t.reason+"&POComment="+t.comment,n.height="small",n.width="small",n.fallbackUrl=n.url,l.tasks.startTask(n,this.submitHandler));"decline"==t.action&&((n={height:null,width:null,url:null}).url="https://employeeconnect-9566.azurewebsites.net/declined?poNo="+t.PONo,n.height="small",n.width="small",l.tasks.startTask(n,this.submitHandler));"cancelPo"==t.action&&l.tasks.submitTask(),"closePending"==t.action&&l.tasks.submitTask(),"donedecline"==t.action&&l.tasks.submitTask()},Object.defineProperty(t.prototype,"dataVersion",{get:function(){return r.Version.parse("1.0")},enumerable:!0,configurable:!0}),t.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:s.PropertyPaneDescription},groups:[{groupName:s.BasicGroupName,groupFields:[Object(i.PropertyPaneTextField)("description",{label:s.DescriptionFieldLabel})]}]}]}},t}(i.BaseClientSideWebPart);t.default=d}])});
!function(){window.__setWebpackPublicPathLoaderSrcRegistry__||(window.__setWebpackPublicPathLoaderSrcRegistry__={});var e=document.getElementsByTagName("script");if(e&&e.length)for(var t=0;t<e.length;t++)if(e[t]){var r=e[t].getAttribute("src");r&&(window.__setWebpackPublicPathLoaderSrcRegistry__[r]=!0)}}();