define("d2865084-ab74-41f5-9cf0-afac7226c9df_0.0.1",["jquery","@microsoft/sp-webpart-base","@microsoft/sp-core-library","@microsoft/sp-loader","bootstrap","ToolTabWebPartStrings"],function(e,t,n,o,a,c){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=28)}([function(t,n){t.exports=e},,function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=o},,function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var a=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),c=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(c).concat([a]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},a=0;a<this.length;a++){var c=this[a][0];"number"==typeof c&&(o[c]=!0)}for(a=0;a<e.length;a++){var s=e[a];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){"use strict";(function(e){var n,o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a="undefined"==typeof window?e:window,c=a&&a.CSPSettings&&a.CSPSettings.nonce,s=function(){var e=a.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]};e.runState||(e=o({},e,{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}}));e.registeredThemableStyles||(e=o({},e,{registeredThemableStyles:[]}));return a.__themeState__=e,e}(),i=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,r=1e4,l=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};function d(e){var t=l();e();var n=l();s.perf.duration+=n-t}function p(){d(function(){var e=s.runState.buffer.slice();s.runState.buffer=[];var t=[].concat.apply([],e);t.length>0&&u(t)})}function u(e,t){s.loadStyles?s.loadStyles(m(e).styleString,e):n?function(e,t){if("undefined"==typeof document)return;var n=document.getElementsByTagName("head")[0],o=s.registeredStyles,a=s.lastStyleElement,c=a?a.styleSheet:void 0,i=c?c.cssText:"",l=o[o.length-1],d=m(e).styleString;(!a||i.length+d.length>r)&&((a=document.createElement("style")).type="text/css",t?(n.replaceChild(a,t.styleElement),t.styleElement=a):n.appendChild(a),t||(l={styleElement:a,themableStyle:e},o.push(l)));a.styleSheet.cssText+=_(d),Array.prototype.push.apply(l.themableStyle,e),s.lastStyleElement=a}(e,t):function(e){if("undefined"==typeof document)return;var t=document.getElementsByTagName("head")[0],n=document.createElement("style"),o=m(e),a=o.styleString,i=o.themable;n.type="text/css",c&&n.setAttribute("nonce",c);n.appendChild(document.createTextNode(a)),s.perf.count++,t.appendChild(n);var r={styleElement:n,themableStyle:e};i?s.registeredThemableStyles.push(r):s.registeredStyles.push(r)}(e)}function f(e){void 0===e&&(e=3),3!==e&&2!==e||(b(s.registeredStyles),s.registeredStyles=[]),3!==e&&1!==e||(b(s.registeredThemableStyles),s.registeredThemableStyles=[])}function b(e){e.forEach(function(e){var t=e&&e.styleElement;t&&t.parentElement&&t.parentElement.removeChild(t)})}function _(e){return e&&(e=m(v(e)).styleString),e}function m(e){var t=s.theme,n=!1;return{styleString:(e||[]).map(function(e){var o=e.theme;if(o){n=!0;var a=t?t[o]:void 0,c=e.defaultValue||"inherit";return t&&!a&&console,a||c}return e.rawString}).join(""),themable:n}}function v(e){var t=[];if(e){for(var n=0,o=void 0;o=i.exec(e);){var a=o.index;a>n&&t.push({rawString:e.substring(n,a)}),t.push({theme:o[1],defaultValue:o[2]}),n=i.lastIndex}t.push({rawString:e.substring(n)})}return t}t.loadStyles=function(e,t){void 0===t&&(t=!1),d(function(){var o=Array.isArray(e)?e:v(e);void 0===n&&(n=function(){var e=!1;if("undefined"!=typeof document){var t=document.createElement("style");t.type="text/css",e=!!t.styleSheet}return e}());var a=s.runState,c=a.mode,i=a.buffer,r=a.flushTimer;t||1===c?(i.push(o),r||(s.runState.flushTimer=setTimeout(function(){s.runState.flushTimer=0,p()},0))):u(o)})},t.configureLoadStyles=function(e){s.loadStyles=e},t.configureRunMode=function(e){s.runState.mode=e},t.flush=p,t.loadTheme=function(e){s.theme=e,function(){if(s.theme){for(var e=[],t=0,n=s.registeredThemableStyles;t<n.length;t++){var o=n[t];e.push(o.themableStyle)}e.length>0&&(f(1),u([].concat.apply([],e)))}}()},t.clearStyles=f,t.detokenize=_,t.splitStyles=v}).call(this,n(8))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=a},,,,function(e,t){e.exports=c},,,,,,,,,,function(e,t,n){var o=n(24),a=n(7);"string"==typeof o&&(o=[[e.i,o]]);for(var c=0;c<o.length;c++)a.loadStyles(o[c][1],!0);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(6)(!1)).push([e.i,'@font-face{font-family:Teams Assets;src:url(https://github.com/Abhijit-MSFT/EmployeeConnect/blob/master/SharepointComponents/TaskTab/dist/fonts/TeamsAssets-Light.woff) format("woff"),url(https://github.com/Abhijit-MSFT/EmployeeConnect/blob/master/SharepointComponents/TaskTab/dist/fonts/TeamsAssets-Light.woff) format("woff2");font-style:normal}.toolTab_373ee72c .row_373ee72c{margin:0 -8px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px}.toolTab_373ee72c .row_373ee72c:after,.toolTab_373ee72c .row_373ee72c:before{display:table;content:"";line-height:0}.toolTab_373ee72c .row_373ee72c:after{clear:both}.toolTab_373ee72c .column_373ee72c{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box}[dir=ltr] .toolTab_373ee72c .column_373ee72c{float:left}[dir=rtl] .toolTab_373ee72c .column_373ee72c{float:right}.toolTab_373ee72c .column_373ee72c .ms-Grid_373ee72c{padding:0}@media (min-width:640px){.toolTab_373ee72c .column_373ee72c{width:100%}}@media (min-width:1024px){[dir=ltr] .toolTab_373ee72c .column_373ee72c{left:16.66667%}[dir=rtl] .toolTab_373ee72c .column_373ee72c{right:16.66667%}}@media (min-width:640px){[dir=ltr] .toolTab_373ee72c .column_373ee72c{left:8.33333%}[dir=rtl] .toolTab_373ee72c .column_373ee72c{right:8.33333%}}.toolTab_373ee72c .HR_373ee72c,.toolTab_373ee72c .IF_373ee72c,.toolTab_373ee72c .PB_373ee72c,.toolTab_373ee72c .RO_373ee72c{font-size:16px;font-weight:700;font-family:Segoe UI;cursor:pointer}.toolTab_373ee72c .P10_373ee72c{padding-top:10px;padding-bottom:40px}.toolTab_373ee72c .shadowsm_373ee72c{-webkit-box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important;box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.toolTab_373ee72c .card_373ee72c{position:relative;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem;width:25%;height:20%;display:inline-block;margin-right:15px;cursor:pointer;font-family:Segoe UI;font-size:16px}.toolTab_373ee72c .cbody_373ee72c{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding:1.25rem}.toolTab_373ee72c .CBL_373ee72c,.toolTab_373ee72c .CFT_373ee72c,.toolTab_373ee72c .CSA_373ee72c,.toolTab_373ee72c .CT_373ee72c,.toolTab_373ee72c .DP_373ee72c,.toolTab_373ee72c .EISR_373ee72c,.toolTab_373ee72c .GWR_373ee72c,.toolTab_373ee72c .IR_373ee72c,.toolTab_373ee72c .RIST_373ee72c,.toolTab_373ee72c .RL_373ee72c,.toolTab_373ee72c .SBC_373ee72c,.toolTab_373ee72c .SI_373ee72c,.toolTab_373ee72c .timesheet_373ee72c,.toolTab_373ee72c .VBP_373ee72c,.toolTab_373ee72c .VP_373ee72c{font-weight:600;padding-top:6px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.toolTab_373ee72c .BCdes_373ee72c,.toolTab_373ee72c .CBLdes_373ee72c,.toolTab_373ee72c .CSAdes_373ee72c,.toolTab_373ee72c .CTdes_373ee72c,.toolTab_373ee72c .FTdes_373ee72c,.toolTab_373ee72c .GRdes_373ee72c,.toolTab_373ee72c .IRdes_373ee72c,.toolTab_373ee72c .ISRdes_373ee72c,.toolTab_373ee72c .ISTdes_373ee72c,.toolTab_373ee72c .Pdes_373ee72c,.toolTab_373ee72c .RLdes_373ee72c,.toolTab_373ee72c .SIdes_373ee72c,.toolTab_373ee72c .timesheetdes_373ee72c,.toolTab_373ee72c .VPdes_373ee72c{padding-top:6px;color:#adacac;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;width:auto}.toolTab_373ee72c .cafe-service_373ee72c,.toolTab_373ee72c .create-finance-tkt_373ee72c,.toolTab_373ee72c .createicon_373ee72c,.toolTab_373ee72c .download-payslip_373ee72c,.toolTab_373ee72c .event-support_373ee72c,.toolTab_373ee72c .Inventory_373ee72c,.toolTab_373ee72c .leave-request_373ee72c,.toolTab_373ee72c .policies_373ee72c,.toolTab_373ee72c .Ro-SI_373ee72c,.toolTab_373ee72c .RO-timesheet_373ee72c,.toolTab_373ee72c .submit-benefits_373ee72c,.toolTab_373ee72c .support_373ee72c,.toolTab_373ee72c .ticket-creation_373ee72c,.toolTab_373ee72c .wife-request_373ee72c{font-family:Teams Assets;font-size:22px}.toolTab_373ee72c .createicon_373ee72c:before{content:"\\E328"}.toolTab_373ee72c .ticket-creation_373ee72c:before{content:"\\E13F"}.toolTab_373ee72c .leave-request_373ee72c:before{content:"\\E503"}.toolTab_373ee72c .policies_373ee72c:before{content:"\\E451"}.toolTab_373ee72c .download-payslip_373ee72c:before{content:"\\E459"}.toolTab_373ee72c .create-finance-tkt_373ee72c:before{content:"\\E13F"}.toolTab_373ee72c .submit-benefits_373ee72c:before{content:"\\E971"}.toolTab_373ee72c .view-benefits_373ee72c:before{content:"\\E451";font-family:Teams Assets;font-size:22px}.toolTab_373ee72c .support_373ee72c:before{content:"\\E21A"}.toolTab_373ee72c .wife-request_373ee72c:before{content:"\\E123"}.toolTab_373ee72c .event-support_373ee72c:before{content:"\\E917"}.toolTab_373ee72c .cafe-service_373ee72c:before{content:"\\E984"}.toolTab_373ee72c .Inventory_373ee72c:before{content:"\\E459"}.toolTab_373ee72c .RO-timesheet_373ee72c:before{content:"\\E501"}.toolTab_373ee72c .Ro-SI_373ee72c:before{content:"\\E137"}',""])},,,,function(e,t,n){"use strict";n.r(t);var o=n(3),a=n(2);n(23);var c,s={toolTab:"toolTab_373ee72c",row:"row_373ee72c",column:"column_373ee72c","ms-Grid":"ms-Grid_373ee72c",HR:"HR_373ee72c",PB:"PB_373ee72c",RO:"RO_373ee72c",IF:"IF_373ee72c",P10:"P10_373ee72c",shadowsm:"shadowsm_373ee72c",card:"card_373ee72c",cbody:"cbody_373ee72c",CBL:"CBL_373ee72c",CT:"CT_373ee72c",RL:"RL_373ee72c",VP:"VP_373ee72c",DP:"DP_373ee72c",CFT:"CFT_373ee72c",SBC:"SBC_373ee72c",VBP:"VBP_373ee72c",RIST:"RIST_373ee72c",GWR:"GWR_373ee72c",EISR:"EISR_373ee72c",CSA:"CSA_373ee72c",IR:"IR_373ee72c",timesheet:"timesheet_373ee72c",SI:"SI_373ee72c",CBLdes:"CBLdes_373ee72c",CTdes:"CTdes_373ee72c",RLdes:"RLdes_373ee72c",VPdes:"VPdes_373ee72c",Pdes:"Pdes_373ee72c",FTdes:"FTdes_373ee72c",BCdes:"BCdes_373ee72c",ISTdes:"ISTdes_373ee72c",GRdes:"GRdes_373ee72c",ISRdes:"ISRdes_373ee72c",CSAdes:"CSAdes_373ee72c",IRdes:"IRdes_373ee72c",timesheetdes:"timesheetdes_373ee72c",SIdes:"SIdes_373ee72c",createicon:"createicon_373ee72c","ticket-creation":"ticket-creation_373ee72c","leave-request":"leave-request_373ee72c",policies:"policies_373ee72c","download-payslip":"download-payslip_373ee72c","create-finance-tkt":"create-finance-tkt_373ee72c","submit-benefits":"submit-benefits_373ee72c",support:"support_373ee72c","wife-request":"wife-request_373ee72c","event-support":"event-support_373ee72c","cafe-service":"cafe-service_373ee72c",Inventory:"Inventory_373ee72c","RO-timesheet":"RO-timesheet_373ee72c","Ro-SI":"Ro-SI_373ee72c","view-benefits":"view-benefits_373ee72c"},i=n(13),r=n(4),l=(n(0),c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});n(9);var d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){r.SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"),this.domElement.innerHTML='\n      <div class="'+s.toolTab+' id="accordion"">\n        <div class="'+s.row+'">\n        <div class="col-12" >\n          <div class="'+s.HR+' ar accordion-toggle"\n                  data-toggle="collapse"\n                  data-parent="#accordion"\n                  data-target="#HRtools" aria-expanded="false"\n                  >Human Resources\n                </div>\n          <div class="'+s.P10+' panel-collapse" id="HRtools">\n            <div class="'+s.card+" "+s.shadowsm+'">\n              <div class='+s.cbody+'>\n                <span\n                  alt-name="create letter"\n                  class='+s.createicon+'\n                ></span>\n                <div class="'+s.CBL+'">Create business letter</div>\n                <p class="'+s.CBLdes+'">\n                  Create a business letter within a predesigned color and\n                  template.\n                </p>\n              </div>\n              </div>\n\n            <div class="'+s.card+" "+s.shadowsm+'">\n              <div class='+s.cbody+'>\n                <span\n                  alt-name="create letter"\n                  class='+s.createicon+'\n                ></span>\n                <div class="'+s.CBL+'">Create ticket</div>\n                <p class="'+s.CBLdes+'">\n                For all HR tickets, the ticket type is being set as Employee Support.\n                </p>\n              </div>\n              </div>\n\n              <div class="'+s.card+" "+s.shadowsm+'">\n              <div class='+s.cbody+'>\n                <span\n                  alt-name="create letter"\n                  class='+s.createicon+'\n                ></span>\n                <div class="'+s.CBL+'">Request leave</div>\n                <p class="'+s.CBLdes+'">\n                Request leave and check your status in the Leave application.\n                </p>\n              </div>\n              </div>\n\n              <div class="'+s.card+" "+s.shadowsm+'">\n              <div class='+s.cbody+'>\n                <span\n                  alt-name="create letter"\n                  class='+s.createicon+'\n                ></span>\n                <div class="'+s.CBL+'">View policies</div>\n                <p class="'+s.CBLdes+'">\n                Identify the purpose and objectives of Humana Resources department.\n                </p>\n              </div>\n              </div>\n\n\n              <div class="'+s.HR+' ar accordion-toggle"\n              data-toggle="collapse"\n              data-parent="#accordion"\n              data-target="#Pay-benefits" aria-expanded="false"\n              >Pay and benefits\n            </div>\n      <div class="'+s.P10+' panel-collapse" id="Pay-benefits">\n        <div class="'+s.card+" "+s.shadowsm+'">\n          <div class='+s.cbody+'>\n            <span\n              alt-name="create letter"\n              class='+s.createicon+'\n            ></span>\n            <div class="'+s.CBL+'">Download payslip</div>\n            <p class="'+s.CBLdes+'">\n            Create a business letter within a predesigned color and template.\n            </p>\n          </div>\n          </div>\n\n        <div class="'+s.card+" "+s.shadowsm+'">\n          <div class='+s.cbody+'>\n            <span\n              alt-name="create letter"\n              class='+s.createicon+'\n            ></span>\n            <div class="'+s.CBL+'">Create finance ticket</div>\n            <p class="'+s.CBLdes+'">\n            For all HR tickets, the ticket type is being set as Employee Support.\n            </p>\n          </div>\n          </div>\n\n          <div class="'+s.card+" "+s.shadowsm+'">\n          <div class='+s.cbody+'>\n            <span\n              alt-name="create letter"\n              class='+s.createicon+'\n            ></span>\n            <div class="'+s.CBL+'">Submit benefits claim</div>\n            <p class="'+s.CBLdes+'">\n            Request leave and check your status in the Leave application.\n            </p>\n          </div>\n          </div>\n\n          <div class="'+s.card+" "+s.shadowsm+'">\n          <div class='+s.cbody+'>\n            <span\n              alt-name="create letter"\n              class='+s.createicon+'\n            ></span>\n            <div class="'+s.CBL+'">View benefits policies</div>\n            <p class="'+s.CBLdes+'">\n            Identify the purpose and objectives of Humana Resources department.\n            </p>\n          </div>\n          </div>\n\n\n          <div class="'+s.HR+' ar accordion-toggle"\n          data-toggle="collapse"\n          data-parent="#accordion"\n          data-target="#itandfacilities" aria-expanded="false"\n          >IT and facilities\n        </div>\n  <div class="'+s.P10+' panel-collapse" id="itandfacilities">\n    <div class="'+s.card+" "+s.shadowsm+'">\n      <div class='+s.cbody+'>\n        <span\n          alt-name="create letter"\n          class='+s.createicon+'\n        ></span>\n        <div class="'+s.CBL+'">Raise IT Support Ticket</div>\n        <p class="'+s.CBLdes+'">\n        Create a business letter within a predesigned color and template.\n        </p>\n      </div>\n      </div>\n\n    <div class="'+s.card+" "+s.shadowsm+'">\n      <div class='+s.cbody+'>\n        <span\n          alt-name="create letter"\n          class='+s.createicon+'\n        ></span>\n        <div class="'+s.CBL+'">Visitor wi-fi request</div>\n        <p class="'+s.CBLdes+'">\n        For all HR tickets, the ticket type is being set as Employee Support.\n        </p>\n      </div>\n      </div>\n\n      <div class="'+s.card+" "+s.shadowsm+'">\n      <div class='+s.cbody+'>\n        <span\n          alt-name="create letter"\n          class='+s.createicon+'\n        ></span>\n        <div class="'+s.CBL+'">Event IT Support request</div>\n        <p class="'+s.CBLdes+'">\n        Request leave and check your status in the Leave application.\n        </p>\n      </div>\n      </div>\n\n      <div class="'+s.card+" "+s.shadowsm+'">\n      <div class='+s.cbody+'>\n        <span\n          alt-name="create letter"\n          class='+s.createicon+'\n        ></span>\n        <div class="'+s.CBL+'">Cafeteria service app</div>\n        <p class="'+s.CBLdes+'">\n        Identify the purpose and objectives of Humana Resources department.\n        </p>\n      </div>\n      </div>\n\n\n      <div class="'+s.HR+' ar accordion-toggle"\n                  data-toggle="collapse"\n                  data-parent="#accordion"\n                  data-target="#retail-operations" aria-expanded="false"\n                  >Retail operations\n                </div>\n          <div class="'+s.P10+' panel-collapse" id="retail-operations">\n            <div class="'+s.card+" "+s.shadowsm+'">\n              <div class='+s.cbody+'>\n                <span\n                  alt-name="create letter"\n                  class='+s.createicon+'\n                ></span>\n                <div class="'+s.CBL+'">Inventory request</div>\n                <p class="'+s.CBLdes+'">\n                Create a business letter within a predesigned color and template.\n                </p>\n              </div>\n              </div>\n\n            <div class="'+s.card+" "+s.shadowsm+'">\n              <div class='+s.cbody+'>\n                <span\n                  alt-name="create letter"\n                  class='+s.createicon+'\n                ></span>\n                <div class="'+s.CBL+'">Timesheet</div>\n                <p class="'+s.CBLdes+'">\n                For all HR tickets, the ticket type is being set as Employee Support.\n                </p>\n              </div>\n              </div>\n\n              <div class="'+s.card+" "+s.shadowsm+'">\n              <div class='+s.cbody+'>\n                <span\n                  alt-name="create letter"\n                  class='+s.createicon+'\n                ></span>\n                <div class="'+s.CBL+'">Store info</div>\n                <p class="'+s.CBLdes+'">\n                Request leave and check your status in the Leave application.\n                </p>\n              </div>\n              </div>\n\n              </div>\n          </div>\n          </div>\n      </div>'},Object.defineProperty(t.prototype,"dataVersion",{get:function(){return o.Version.parse("1.0")},enumerable:!0,configurable:!0}),t.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:i.PropertyPaneDescription},groups:[{groupName:i.BasicGroupName,groupFields:[Object(a.PropertyPaneTextField)("description",{label:i.DescriptionFieldLabel})]}]}]}},t}(a.BaseClientSideWebPart);t.default=d}])});