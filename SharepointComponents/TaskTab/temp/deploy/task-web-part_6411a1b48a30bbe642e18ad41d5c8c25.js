define("fefc85e6-8e32-4f3b-979e-8a0f128a5c85_0.0.1",["@microsoft/sp-webpart-base","@microsoft/sp-core-library","@microsoft/sp-loader","TaskWebPartStrings","@microsoft/sp-http","bootstrap","jquery"],function(t,e,n,i,a,o,r){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",function(){var t,e=document.getElementsByTagName("script"),i=new RegExp("\\/task-web-part(_[a-z0-9-]+)*\\.js","i");if(e&&e.length)for(var a=0;a<e.length;a++)if(e[a]){var o=e[a].getAttribute("src");if(o&&o.match(i)){t=o.substring(0,o.lastIndexOf("/")+1);break}}if(!t)for(var r in window.__setWebpackPublicPathLoaderSrcRegistry__)if(r&&r.match(i)){t=r.substring(0,r.lastIndexOf("/")+1);break}n.p=t}(),n(n.s=22)}([function(e,n){e.exports=t},function(t,e,n){window,t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(n(1))},function(t,e,n){"use strict";var i=this&&this.__rest||function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(t);a<i.length;a++)e.indexOf(i[a])<0&&(n[i[a]]=t[i[a]])}return n};function a(t){for(var e="^",n=t.split("."),i=0;i<n.length;i++)e+=(i>0?"[.]":"")+n[i].replace("*","[^/^.]+");return e+="$"}Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){for(var e="",n=0;n<t.length;n++)e+=(0===n?"":"|")+a(t[n]);return new RegExp(e)}(["https://teams.microsoft.com","https://teams.microsoft.us","https://gov.teams.microsoft.us","https://dod.teams.microsoft.us","https://int.teams.microsoft.com","https://devspaces.skype.com","https://ssauth.skype.com","http://dev.local","http://dev.local:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com"]),r={},s={settings:"settings",content:"content",authentication:"authentication",remove:"remove",task:"task"};!function(t){var e,n,i,a=function(){this.enabled=!0};t.MenuItem=a,function(t){t.dropDown="dropDown",t.popOver="popOver"}(t.MenuListType||(t.MenuListType={})),r.navBarMenuItemPress=function(t){e&&e(t)||(j(),R(l,"handleNavBarMenuItemPress",[t]))},r.actionMenuItemPress=function(t){n&&n(t)||(j(),R(l,"handleActionMenuItemPress",[t]))},r.setModuleView=function(t){i&&i(t)||(j(),R(l,"viewConfigItemPress",[t]))},t.setUpViews=function(t,e){j(),i=e,R(l,"setUpViews",[t])},t.setNavBarMenu=function(t,n){j(),e=n,R(l,"setNavBarMenu",[t])},t.showActionMenu=function(t,e){j(),n=e,R(l,"showActionMenu",[t])}}(e.menus||(e.menus={}));var c,l,u,d,f,p,b,h,g,m,v,y,_,w=!1,k=!1,x=[],T=[],S=0,P={},C=!1;function I(){window.print()}function E(t){j(),h=t,t&&R(l,"registerHandler",["themeChange"])}function O(t){j(),g=t,t&&R(l,"registerHandler",["fullScreen"])}function N(t){j(),m=t,t&&R(l,"registerHandler",["backButton"])}function L(){j();var t=R(l,"navigateBack",[]);P[t]=function(t){if(!t)throw new Error("Back navigation is not supported in the current client or context.")}}function M(t){j(),v=t,t&&R(l,"registerHandler",["beforeUnload"])}function j(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(!w)throw new Error("The library has not yet been initialized");if(p&&t&&t.length>0){for(var n=!1,i=0;i<t.length;i++)if(t[i]===p){n=!0;break}if(!n)throw new Error("This call is not allowed in the '"+p+"' context")}}function U(t){if(t&&t.data&&"object"==typeof t.data){var e=t.source||t.originalEvent.source,n=t.origin||t.originalEvent.origin;e===c||n!==c.location.origin&&!o.test(n.toLowerCase())||(function(t,e){l&&t!==l?d&&t!==d||(d=t,f=e):(l=t,u=e),l&&l.closed&&(l=null,u=null),d&&d.closed&&(d=null,f=null),B(l),B(d)}(e,n),e===l?H(t):e===d&&function(t){if("id"in t.data&&"func"in t.data){var e=t.data,n=r[e.func];if(n){var i=n.apply(this,e.args);i&&V(d,e.id,Array.isArray(i)?i:[i])}else{var a=R(l,e.func,e.args);P[a]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];d&&V(d,e.id,t)}}}}(t))}}function H(t){if("id"in t.data){var e=t.data,n=P[e.id];n&&(n.apply(null,e.args),delete P[e.id])}else if("func"in t.data){e=t.data;var i=r[e.func];i&&i.apply(this,e.args)}}function A(t){return t===l?x:t===d?T:[]}function z(t){return t===l?u:t===d?f:null}function B(t){for(var e=z(t),n=A(t);t&&e&&n.length>0;)t.postMessage(n.shift(),e)}function D(t,e){var n=c.setInterval(function(){0===A(t).length&&(clearInterval(n),e())},100)}function R(t,e,n){var i=function(t,e){return{id:S++,func:t,args:e||[]}}(e,n);if(k)c&&c.nativeInterface&&c.nativeInterface.framelessPostMessage(JSON.stringify(i));else{var a=z(t);t&&a?t.postMessage(i,a):A(t).push(i)}return i.id}function V(t,e,n){var i=function(t,e){return{id:t,args:e||[]}}(e,n),a=z(t);t&&a&&t.postMessage(i,a)}r.themeChange=function(t){h&&h(t),d&&R(d,"themeChange",[t])},r.fullScreenChange=function(t){g&&g(t)},r.backButtonPress=function(){m&&m()||L()},r.beforeUnload=function(){var t=function(){R(l,"readyToUnload",[])};v&&v(t)||t()},r.changeSettings=function(){y&&y()},e.initialize=function(t){if(void 0===t&&(t=window),!w){w=!0;var e=function(t){return U(t)};(l=(c=t).parent!==c.self?c.parent:c.opener)?c.addEventListener("message",e,!1):(k=!0,window.onNativeMessage=H);try{u="*";var n=R(l,"initialize",["1.4.2"]);P[n]=function(t,e){p=t,b=e}}finally{u=null}this._uninitialize=function(){p&&(E(null),O(null),N(null),M(null)),p===s.settings&&_.registerOnSaveHandler(null),p===s.remove&&_.registerOnRemoveHandler(null),k||c.removeEventListener("message",e,!1),w=!1,l=null,u=null,x=[],d=null,f=null,T=[],S=0,P={},p=null,b=null,k=!1}}},e._uninitialize=function(){},e.enablePrintCapability=function(){C||(C=!0,j(),document.addEventListener("keydown",function(t){(t.ctrlKey||t.metaKey)&&80===t.keyCode&&(I(),t.cancelBubble=!0,t.preventDefault(),t.stopImmediatePropagation())}))},e.print=I,e.getContext=function(t){j();var e=R(l,"getContext");P[e]=t},e.registerOnThemeChangeHandler=E,e.registerFullScreenHandler=O,e.registerBackButtonHandler=N,e.navigateBack=L,e.registerBeforeUnloadHandler=M,e.registerChangeSettingsHandler=function(t){j(s.content),y=t,t&&R(l,"registerHandler",["changeSettings"])},e.navigateCrossDomain=function(t){j(s.content,s.settings,s.remove,s.task);var e=R(l,"navigateCrossDomain",[t]);P[e]=function(t){if(!t)throw new Error("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.")}},e.getTabInstances=function(t,e){j();var n=R(l,"getTabInstances",[e]);P[n]=t},e.getUserJoinedTeams=function(t,e){j();var n=R(l,"getUserJoinedTeams",[e]);P[n]=t},e.getMruTabInstances=function(t,e){j();var n=R(l,"getMruTabInstances",[e]);P[n]=t},e.shareDeepLink=function(t){j(s.content),R(l,"shareDeepLink",[t.subEntityId,t.subEntityLabel,t.subEntityWebUrl])},e.openFilePreview=function(t){j(s.content);var e=[t.entityId,t.title,t.description,t.type,t.objectUrl,t.downloadUrl,t.webPreviewUrl,t.webEditUrl,t.baseUrl,t.editFile,t.subEntityId];R(l,"openFilePreview",e)},e.showNotification=function(t){j(s.content);var e=[t.message,t.notificationType];R(l,"showNotification",e)},e.executeDeepLink=function(t){j(s.content);var e=R(l,"executeDeepLink",[t]);P[e]=function(t,e){if(!t)throw new Error(e)}},e.uploadCustomApp=function(t){j();var e=R(l,"uploadCustomApp",[t]);P[e]=function(t,e){if(!t)throw new Error(e)}},e.navigateToTab=function(t){j();var e=R(l,"navigateToTab",[t]);P[e]=function(t){if(!t)throw new Error("Invalid internalTabInstanceId and/or channelId were/was provided")}},function(t){var e,n;r["settings.save"]=function(t){var n=new i(t);e?e(n):n.notifySuccess()},r["settings.remove"]=function(){var t=new a;n?n(t):t.notifySuccess()},t.setValidityState=function(t){j(s.settings,s.remove),R(l,"settings.setValidityState",[t])},t.getSettings=function(t){j(s.content,s.settings,s.remove);var e=R(l,"settings.getSettings");P[e]=t},t.setSettings=function(t){j(s.content,s.settings);var e=R(l,"settings.setSettings",[t]);P[e]=function(t,e){if(!t)throw new Error(e)}},t.registerOnSaveHandler=function(t){j(s.settings),e=t,t&&R(l,"registerHandler",["save"])},t.registerOnRemoveHandler=function(t){j(s.remove),n=t,t&&R(l,"registerHandler",["remove"])};var i=function(){function t(t){this.notified=!1,this.result=t||{}}return t.prototype.notifySuccess=function(){this.ensureNotNotified(),R(l,"settings.save.success"),this.notified=!0},t.prototype.notifyFailure=function(t){this.ensureNotNotified(),R(l,"settings.save.failure",[t]),this.notified=!0},t.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},t}(),a=function(){function t(){this.notified=!1}return t.prototype.notifySuccess=function(){this.ensureNotNotified(),R(l,"settings.remove.success"),this.notified=!0},t.prototype.notifyFailure=function(t){this.ensureNotNotified(),R(l,"settings.remove.failure",[t]),this.notified=!0},t.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},t}()}(_=e.settings||(e.settings={})),function(t){var e,n;function i(){o();try{d&&d.close()}finally{d=null,f=null}}function a(t){e=t,i();var n=e.width||600,a=e.height||400;n=Math.min(n,c.outerWidth-400),a=Math.min(a,c.outerHeight-200);var o=document.createElement("a");o.href=e.url;var r=void 0!==c.screenLeft?c.screenLeft:c.screenX,s=void 0!==c.screenTop?c.screenTop:c.screenY;r+=c.outerWidth/2-n/2,s+=c.outerHeight/2-a/2,(d=c.open(o.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+s+", left="+r+", width="+n+", height="+a))?u():p("FailedToOpenWindow")}function o(){n&&(clearInterval(n),n=0),delete r.initialize,delete r.navigateCrossDomain}function u(){o(),n=c.setInterval(function(){if(!d||d.closed)p("CancelledByUser");else{var t=f;try{f="*",R(d,"ping")}finally{f=t}}},100),r.initialize=function(){return[s.authentication,b]},r.navigateCrossDomain=function(t){return!1}}function p(t){try{e&&e.failureCallback&&e.failureCallback(t)}finally{e=null,i()}}function h(t,e,n){if(t){var i=document.createElement("a");i.href=decodeURIComponent(t),i.host&&i.host!==window.location.host&&"outlook.office.com"===i.host&&i.search.indexOf("client_type=Win32_Outlook")>-1&&(e&&"result"===e&&(n&&(i.href=g(i.href,"result",n)),c.location.assign(g(i.href,"authSuccess",""))),e&&"reason"===e&&(n&&(i.href=g(i.href,"reason",n)),c.location.assign(g(i.href,"authFailure",""))))}}function g(t,e,n){var i=t.indexOf("#"),a=-1===i?"#":t.substr(i);return a=a+"&"+e+(""!==n?"="+n:""),(t=-1===i?t:t.substr(0,i))+a}r["authentication.authenticate.success"]=function(t){try{e&&e.successCallback&&e.successCallback(t)}finally{e=null,i()}},r["authentication.authenticate.failure"]=p,t.registerAuthenticationHandlers=function(t){e=t},t.authenticate=function(t){var n=void 0!==t?t:e;if(j(s.content,s.settings,s.remove,s.task),"desktop"===b||"android"===b||"ios"===b){var i=document.createElement("a");i.href=n.url;var o=R(l,"authentication.authenticate",[i.href,n.width,n.height]);P[o]=function(t,e){t?n.successCallback(e):n.failureCallback(e)}}else a(n)},t.getAuthToken=function(t){j();var e=R(l,"authentication.getAuthToken",[t.resources]);P[e]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}},t.getUser=function(t){j();var e=R(l,"authentication.getUser");P[e]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}},t.notifySuccess=function(t,e){h(e,"result",t),j(s.authentication),R(l,"authentication.authenticate.success",[t]),D(l,function(){return setTimeout(function(){return c.close()},200)})},t.notifyFailure=function(t,e){h(e,"reason",t),j(s.authentication),R(l,"authentication.authenticate.failure",[t]),D(l,function(){return setTimeout(function(){return c.close()},200)})}}(e.authentication||(e.authentication={})),e.sendCustomMessage=function(t,e){return j(),R(l,t,e)},function(t){t.startTask=function(t,e){j(s.content);var n=R(l,"tasks.startTask",[t]);P[n]=e},t.updateTask=function(t){j(s.content,s.task),t.width,t.height;var e=i(t,["width","height"]);if(Object.keys(e).length)throw new Error("updateTask requires a taskInfo argument containing only width and height");R(l,"tasks.updateTask",[t])},t.submitTask=function(t,e){j(s.content,s.task),R(l,"tasks.completeTask",[t,Array.isArray(e)?e:[e]])}}(e.tasks||(e.tasks={})),e.getChatMembers=function(t){j();var e=R(l,"getChatMembers");P[e]=t}}])},function(t,n){t.exports=e},function(t,e){t.exports=n},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var a=(r=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),o=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(o).concat([a]).join("\n")}var r;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(i[o]=!0)}for(a=0;a<t.length;a++){var r=t[a];"number"==typeof r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},function(t,e,n){"use strict";(function(t){var n,i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var a="undefined"==typeof window?t:window,o=a&&a.CSPSettings&&a.CSPSettings.nonce,r=function(){var t=a.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]};t.runState||(t=i({},t,{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}}));t.registeredThemableStyles||(t=i({},t,{registeredThemableStyles:[]}));return a.__themeState__=t,t}(),s=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,c=1e4,l=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};function u(t){var e=l();t();var n=l();r.perf.duration+=n-e}function d(){u(function(){var t=r.runState.buffer.slice();r.runState.buffer=[];var e=[].concat.apply([],t);e.length>0&&f(e)})}function f(t,e){r.loadStyles?r.loadStyles(g(t).styleString,t):n?function(t,e){if("undefined"==typeof document)return;var n=document.getElementsByTagName("head")[0],i=r.registeredStyles,a=r.lastStyleElement,o=a?a.styleSheet:void 0,s=o?o.cssText:"",l=i[i.length-1],u=g(t).styleString;(!a||s.length+u.length>c)&&((a=document.createElement("style")).type="text/css",e?(n.replaceChild(a,e.styleElement),e.styleElement=a):n.appendChild(a),e||(l={styleElement:a,themableStyle:t},i.push(l)));a.styleSheet.cssText+=h(u),Array.prototype.push.apply(l.themableStyle,t),r.lastStyleElement=a}(t,e):function(t){if("undefined"==typeof document)return;var e=document.getElementsByTagName("head")[0],n=document.createElement("style"),i=g(t),a=i.styleString,s=i.themable;n.type="text/css",o&&n.setAttribute("nonce",o);n.appendChild(document.createTextNode(a)),r.perf.count++,e.appendChild(n);var c={styleElement:n,themableStyle:t};s?r.registeredThemableStyles.push(c):r.registeredStyles.push(c)}(t)}function p(t){void 0===t&&(t=3),3!==t&&2!==t||(b(r.registeredStyles),r.registeredStyles=[]),3!==t&&1!==t||(b(r.registeredThemableStyles),r.registeredThemableStyles=[])}function b(t){t.forEach(function(t){var e=t&&t.styleElement;e&&e.parentElement&&e.parentElement.removeChild(e)})}function h(t){return t&&(t=g(m(t)).styleString),t}function g(t){var e=r.theme,n=!1;return{styleString:(t||[]).map(function(t){var i=t.theme;if(i){n=!0;var a=e?e[i]:void 0,o=t.defaultValue||"inherit";return e&&!a&&console,a||o}return t.rawString}).join(""),themable:n}}function m(t){var e=[];if(t){for(var n=0,i=void 0;i=s.exec(t);){var a=i.index;a>n&&e.push({rawString:t.substring(n,a)}),e.push({theme:i[1],defaultValue:i[2]}),n=s.lastIndex}e.push({rawString:t.substring(n)})}return e}e.loadStyles=function(t,e){void 0===e&&(e=!1),u(function(){var i=Array.isArray(t)?t:m(t);void 0===n&&(n=function(){var t=!1;if("undefined"!=typeof document){var e=document.createElement("style");e.type="text/css",t=!!e.styleSheet}return t}());var a=r.runState,o=a.mode,s=a.buffer,c=a.flushTimer;e||1===o?(s.push(i),c||(r.runState.flushTimer=setTimeout(function(){r.runState.flushTimer=0,d()},0))):f(i)})},e.configureLoadStyles=function(t){r.loadStyles=t},e.configureRunMode=function(t){r.runState.mode=t},e.flush=d,e.loadTheme=function(t){r.theme=t,function(){if(r.theme){for(var t=[],e=0,n=r.registeredThemableStyles;e<n.length;e++){var i=n[e];t.push(i.themableStyle)}t.length>0&&(p(1),f([].concat.apply([],t)))}}()},e.clearStyles=p,e.detokenize=h,e.splitStyles=m}).call(this,n(6))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=i},,,function(t,e){t.exports=a},function(t,e){t.exports=o},function(t,e,n){var i=n(13),a=n(5);"string"==typeof i&&(i=[[t.i,i]]);for(var o=0;o<i.length;o++)a.loadStyles(i[o][1],!0);i.locals&&(t.exports=i.locals)},function(t,e,n){var i=n(14);(e=t.exports=n(4)(!1)).push([t.i,"@import url(https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css);",""]),e.push([t.i,'.taskTab_47c71a0b .container_47c71a0b{max-width:auto;margin:0 auto}.taskTab_47c71a0b .row_47c71a0b{margin:0 -8px;-webkit-box-sizing:border-box;box-sizing:border-box;color:"[theme:white, default: #ffffff]";padding:0!important;margin:4px 0!important}.taskTab_47c71a0b .row_47c71a0b:after,.taskTab_47c71a0b .row_47c71a0b:before{display:table;content:"";line-height:0}.taskTab_47c71a0b .row_47c71a0b:after{clear:both}.taskTab_47c71a0b .column_47c71a0b{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}[dir=ltr] .taskTab_47c71a0b .column_47c71a0b{float:left}[dir=rtl] .taskTab_47c71a0b .column_47c71a0b{float:right}.taskTab_47c71a0b .column_47c71a0b .ms-Grid_47c71a0b{padding:0}@media (min-width:640px){.taskTab_47c71a0b .column_47c71a0b{width:25%}}@media (min-width:1024px){[dir=ltr] .taskTab_47c71a0b .column_47c71a0b{left:16.66667%}[dir=rtl] .taskTab_47c71a0b .column_47c71a0b{right:16.66667%}}@media (min-width:640px){[dir=ltr] .taskTab_47c71a0b .column_47c71a0b{left:8.33333%}[dir=rtl] .taskTab_47c71a0b .column_47c71a0b{right:8.33333%}}.taskTab_47c71a0b .heading_47c71a0b{font-size:22px;color:#000}.taskTab_47c71a0b .subheading_47c71a0b{font-size:18px;color:gray;cursor:pointer}.taskTab_47c71a0b .title_47c71a0b{color:#000;font-weight:700;padding:2px;position:relative;top:10px}.taskTab_47c71a0b .review_47c71a0b{color:#8a2be2;cursor:pointer}.taskTab_47c71a0b .review_47c71a0b:hover{text-decoration:underline}.taskTab_47c71a0b .grid1_47c71a0b,.taskTab_47c71a0b .grid2_47c71a0b{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;background-image:url('+i(n(15))+");background-size:120px 80px;background-position:50%;background-repeat:no-repeat;left:0!important;height:160px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}[dir=ltr] .taskTab_47c71a0b .grid1_47c71a0b,[dir=ltr] .taskTab_47c71a0b .grid2_47c71a0b{float:left}[dir=rtl] .taskTab_47c71a0b .grid1_47c71a0b,[dir=rtl] .taskTab_47c71a0b .grid2_47c71a0b{float:right}.taskTab_47c71a0b .grid1_47c71a0b .ms-Grid_47c71a0b,.taskTab_47c71a0b .grid2_47c71a0b .ms-Grid_47c71a0b{padding:0}@media (min-width:640px){.taskTab_47c71a0b .grid1_47c71a0b,.taskTab_47c71a0b .grid2_47c71a0b{width:25%}}@media (min-width:1024px){[dir=ltr] .taskTab_47c71a0b .grid1_47c71a0b,[dir=ltr] .taskTab_47c71a0b .grid2_47c71a0b{left:16.66667%}[dir=rtl] .taskTab_47c71a0b .grid1_47c71a0b,[dir=rtl] .taskTab_47c71a0b .grid2_47c71a0b{right:16.66667%}}@media (min-width:640px){[dir=ltr] .taskTab_47c71a0b .grid1_47c71a0b,[dir=ltr] .taskTab_47c71a0b .grid2_47c71a0b{left:8.33333%}[dir=rtl] .taskTab_47c71a0b .grid1_47c71a0b,[dir=rtl] .taskTab_47c71a0b .grid2_47c71a0b{right:8.33333%}}.taskTab_47c71a0b .grid2_47c71a0b{background-image:url("+i(n(16))+');background-repeat:no-repeat;margin-left:2%}.taskTab_47c71a0b .button_47c71a0b{text-decoration:none;height:32px;min-width:80px;background-color:"[theme:themePrimary, default: #0078d4]";border-color:"[theme:themePrimary, default: #0078d4]";color:"[theme:white, default: #ffffff]";outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;margin-top:104px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.taskTab_47c71a0b .button_47c71a0b .label_47c71a0b{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}.taskTab_47c71a0b .list_47c71a0b{margin:10;padding:10;line-height:50px;list-style-type:none;-webkit-box-shadow:0 4px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);box-shadow:0 4px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.taskTab_47c71a0b .list_47c71a0b,.taskTab_47c71a0b .listItem_47c71a0b{color:#333;font-family:Segoe UI Regular WestEuropean,Segoe UI,Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;-webkit-box-sizing:border-box;box-sizing:border-box}.taskTab_47c71a0b .listItem_47c71a0b{vertical-align:center;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;padding:9px 28px 3px;position:relative}.taskTab_47c71a0b .panel_47c71a0b{padding:10px 0;background-color:#fff;border-bottom:1px solid #e8e4e4}@media (max-width:768px){.taskTab_47c71a0b .grid1_47c71a0b,.taskTab_47c71a0b .grid2_47c71a0b{width:49%}}@media (max-width:425px){.taskTab_47c71a0b .grid1_47c71a0b,.taskTab_47c71a0b .grid2_47c71a0b{width:100%}.taskTab_47c71a0b .grid2_47c71a0b{margin:10px 0 0}}',""])},function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e,n){t.exports=n.p+"pending3_84968af36cefc50388d07208c8773d4a.png"},function(t,e,n){t.exports=n.p+"expenses3_be55f569e57e25010ddb2598c3c51321.png"},function(t,e){t.exports=r},,,,,function(t,e,n){"use strict";n.r(e);var i=n(2),a=n(0),o=n(10);n(12);var r,s={taskTab:"taskTab_47c71a0b",container:"container_47c71a0b",row:"row_47c71a0b",column:"column_47c71a0b","ms-Grid":"ms-Grid_47c71a0b",heading:"heading_47c71a0b",subheading:"subheading_47c71a0b",title:"title_47c71a0b",review:"review_47c71a0b",grid1:"grid1_47c71a0b",grid2:"grid2_47c71a0b",button:"button_47c71a0b",label:"label_47c71a0b",list:"list_47c71a0b",listItem:"listItem_47c71a0b",panel:"panel_47c71a0b"},c=n(7),l=n(1),u=n(3),d=(n(17),n(11),r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});l.initialize(),n(11);var f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return d(e,t),e.prototype._getTaskListData=function(){var t=this.context.pageContext.web.absoluteUrl;return this.context.spHttpClient.get(t+"/_api/web/lists/GetByTitle('TaskList')/items",o.SPHttpClient.configurations.v1).then(function(t){return t.json()})},e.prototype._getInvoiceListData=function(){var t=this.context.pageContext.web.absoluteUrl;return this.context.spHttpClient.get(t+"/_api/web/lists/GetByTitle('InvoiceList')/items",o.SPHttpClient.configurations.v1).then(function(t){return t.json()})},e.prototype._renderTaskList=function(t){var e="";t.forEach(function(t){e+='\n            <tr>\n              <th scope="row">'+t.PoNumber+"</th>\n              <td>-</td>\n              <td>"+t.VendorName+"</td>\n              <td>"+t.InvoiceNo+"</td>\n              <td>&#8377; "+t.TotalAmount+'</td>\n              <td id="buttonReview" name="buttonReview" class="'+s.review+"\" id='review'>Review</td>\n            </tr>\n"}),this.domElement.querySelector("#spTaskListContainer").innerHTML=e},e.prototype._renderInvoiceList=function(t){var e="";t.forEach(function(t){e+='\n            <tr>\n              <th scope="row">'+t.Invoiceno_x002e_+"</th>\n              <td>"+t.POno_x002e_+"</td>\n              <td>--</td>\n              <td>"+t.Vendorname+"</td>\n              <td>"+t.Vendorno_x002e_+"</td>\n               <td>&#8377; "+t.Amount+'</td>\n              <td id="buttonReview" name="buttonReview" class="'+s.review+"\" id='review'>Review</td>\n            </tr>\n"}),this.domElement.querySelector("#spInvoiceListContainer").innerHTML=e},e.prototype._renderListAsync=function(){var t=this;this._getTaskListData().then(function(e){t._renderTaskList(e.value)})},e.prototype._renderInvoiceListAsync=function(){var t=this;this._getInvoiceListData().then(function(e){t._renderInvoiceList(e.value)})},e.prototype.render=function(){u.SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"),this.domElement.innerHTML='\n     <div class="'+s.taskTab+'">\n           <div class="'+s.heading+'"> Pending Submissions </div>\n              <div class="'+s.row+'">\n                <div class="'+s.grid1+'">\n                  <span class="'+s.title+'">12 Days of pending timesheet</span>\n                  <div>\n                  <a href="https://aka.ms/spfx" class="'+s.button+'">\n                    <span class="'+s.label+'">Timesheet</span>\n                  </a>\n                  </div>\n                </div>\n                 <div class="'+s.grid2+'">\n                  <span class="'+s.title+'">$25,000 Unreconciled expenses</span>\n                  <div>\n                  <a href="https://aka.ms/spfx" class="'+s.button+'">\n                    <span class="'+s.label+'">Expenses</span>\n                  </a>\n                  </div>\n                </div>\n              </div>\n              <div class="'+s.row+'">\n              <div class="'+s.heading+'"> Pending Approvals </div>\n   <div class="panel-group" id="accordion">\n                <div class="'+s.panel+'">\n                      <div class="'+s.subheading+'" data-toggle="collapse" data-parent="#accordion" href="#collapse1">Purchased Order ('+this._renderTaskList.length+')</div>\n                  <div id="collapse1" class="panel-collapse collapse">\n                    <div>\n                    <table class="table table-bordered">\n                      <thead>\n                        <tr>\n                          <th scope="col">PoNumber</th>\n                          <th scope="col">Description</th>\n                          <th scope="col">VendorName</th>\n                          <th scope="col">VendorNo</th>\n                          <th scope="col">TotalAmount</th>\n                          <th scope="col"></th>\n                        </tr>\n                      </thead>\n                        <tbody id="spTaskListContainer">\n                          '+this._renderListAsync()+'\n                        </tbody>\n                    </table>\n                    </div>\n                    </div>\n       </div>\n                    <div class="'+s.panel+'">\n                          <div class="'+s.subheading+'" data-toggle="collapse" data-parent="#accordion" href="#collapse2">Invoice ('+this._renderInvoiceList.length+')\n          </div>\n                      <div id="collapse2" class="panel-collapse collapse in">\n                        <div>\n                          <table class="table table-bordered">\n                          <thead>\n                            <tr>\n                              <th scope="col">InvoiceNo</th>\n                              <th scope="col">PoNumber</th>\n                              <th scope="col">Description</th>\n                              <th scope="col">VendorName</th>\n                              <th scope="col">VendorNo</th>\n                              <th scope="col">Amount</th>\n                              <th scope="col"></th>\n                            </tr>\n                          </thead>\n                          <tbody id="spInvoiceListContainer">\n                            '+this._renderInvoiceListAsync()+'\n                          </tbody>\n                        </table>\n                        </div>\n                      </div>\n                    </div>\n            <div class="'+s.panel+'">\n                   <div class="'+s.subheading+'" data-toggle="collapse" data-parent="#accordion" href="#collapse3">Inventory (0)</div>\n              <div id="collapse3" class="panel-collapse collapse">\n                <div>\n                <table class="table table-bordered">\n                          <thead>\n                            <tr>\n                              <th scope="col">InvoiceNo</th>\n                              <th scope="col">PoNumber</th>\n                              <th scope="col">Description</th>\n                              <th scope="col">VendorName</th>\n                              <th scope="col">VendorNo</th>\n                              <th scope="col">Amount</th>\n                              <th scope="col"></th>\n                            </tr>\n                          </thead>\n                          <tbody id="spInvoiceListContainer">\n                            '+this._renderInvoiceListAsync()+"\n                          </tbody>\n                        </table>\n                </div>\n              </div>\n            </div>\n   </div>\n   </div>\n   </div>\n </div>"},e.prototype._setButtonEventHandlers=function(){var t=this;this.domElement.querySelector("#buttonReview").addEventListener("click",function(){var e={InvoiceNo:null,height:null,width:null,url:null,fallbackUrl:null};e.height="medium",e.width="medium",e.url="https://employeeconnect-9566.azurewebsites.net/purchaseorder?poNumber=739254&vendorno=97547",e.height="medium",e.width="medium",e.fallbackUrl=e.url,l.tasks.startTask(e,t.submitHandler)})},e.prototype.submitHandler=function(t,e){var n;"podecline"==e.action&&((n={InvoiceNo:null,height:null,width:null,url:null,fallbackUrl:null}).url="https://employeeconnect-9566.azurewebsites.net/podecline?poNo="+e.poNumber+"&POreason="+e.reason+"&POComment="+e.comment,n.height="small",n.width="small",n.fallbackUrl=n.url,l.tasks.startTask(n,this.submitHandler));"decline"==e.action&&((n={height:null,width:null,url:null}).url="https://employeeconnect-9566.azurewebsites.net/declined?poNo="+e.PONo,n.height="small",n.width="small",l.tasks.startTask(n,this.submitHandler));"cancelPo"==e.action&&l.tasks.submitTask(),"closePending"==e.action&&l.tasks.submitTask(),"donedecline"==e.action&&l.tasks.submitTask()},Object.defineProperty(e.prototype,"dataVersion",{get:function(){return i.Version.parse("1.0")},enumerable:!0,configurable:!0}),e.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:c.PropertyPaneDescription},groups:[{groupName:c.BasicGroupName,groupFields:[Object(a.PropertyPaneTextField)("description",{label:c.DescriptionFieldLabel})]}]}]}},e}(a.BaseClientSideWebPart);e.default=f}])});
!function(){window.__setWebpackPublicPathLoaderSrcRegistry__||(window.__setWebpackPublicPathLoaderSrcRegistry__={});var e=document.getElementsByTagName("script");if(e&&e.length)for(var t=0;t<e.length;t++)if(e[t]){var r=e[t].getAttribute("src");r&&(window.__setWebpackPublicPathLoaderSrcRegistry__[r]=!0)}}();