define("d2865084-ab74-41f5-9cf0-afac7226c9df_0.0.1",["jquery","@microsoft/sp-webpart-base","@microsoft/sp-core-library","@microsoft/sp-loader","bootstrap","ToolTabWebPartStrings"],function(e,t,n,a,o,s){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=28)}([function(t,n){t.exports=e},,function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=a},,function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var o=(i=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),s=a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"});return[n].concat(s).concat([o]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(a[s]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&a[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){"use strict";(function(e){var n,a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o="undefined"==typeof window?e:window,s=o&&o.CSPSettings&&o.CSPSettings.nonce,i=function(){var e=o.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]};e.runState||(e=a({},e,{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}}));e.registeredThemableStyles||(e=a({},e,{registeredThemableStyles:[]}));return o.__themeState__=e,e}(),r=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,l=1e4,d=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};function c(e){var t=d();e();var n=d();i.perf.duration+=n-t}function f(){c(function(){var e=i.runState.buffer.slice();i.runState.buffer=[];var t=[].concat.apply([],e);t.length>0&&p(t)})}function p(e,t){i.loadStyles?i.loadStyles(_(e).styleString,e):n?function(e,t){if("undefined"==typeof document)return;var n=document.getElementsByTagName("head")[0],a=i.registeredStyles,o=i.lastStyleElement,s=o?o.styleSheet:void 0,r=s?s.cssText:"",d=a[a.length-1],c=_(e).styleString;(!o||r.length+c.length>l)&&((o=document.createElement("style")).type="text/css",t?(n.replaceChild(o,t.styleElement),t.styleElement=o):n.appendChild(o),t||(d={styleElement:o,themableStyle:e},a.push(d)));o.styleSheet.cssText+=m(c),Array.prototype.push.apply(d.themableStyle,e),i.lastStyleElement=o}(e,t):function(e){if("undefined"==typeof document)return;var t=document.getElementsByTagName("head")[0],n=document.createElement("style"),a=_(e),o=a.styleString,r=a.themable;n.type="text/css",s&&n.setAttribute("nonce",s);n.appendChild(document.createTextNode(o)),i.perf.count++,t.appendChild(n);var l={styleElement:n,themableStyle:e};r?i.registeredThemableStyles.push(l):i.registeredStyles.push(l)}(e)}function u(e){void 0===e&&(e=3),3!==e&&2!==e||(b(i.registeredStyles),i.registeredStyles=[]),3!==e&&1!==e||(b(i.registeredThemableStyles),i.registeredThemableStyles=[])}function b(e){e.forEach(function(e){var t=e&&e.styleElement;t&&t.parentElement&&t.parentElement.removeChild(t)})}function m(e){return e&&(e=_(v(e)).styleString),e}function _(e){var t=i.theme,n=!1;return{styleString:(e||[]).map(function(e){var a=e.theme;if(a){n=!0;var o=t?t[a]:void 0,s=e.defaultValue||"inherit";return t&&!o&&console,o||s}return e.rawString}).join(""),themable:n}}function v(e){var t=[];if(e){for(var n=0,a=void 0;a=r.exec(e);){var o=a.index;o>n&&t.push({rawString:e.substring(n,o)}),t.push({theme:a[1],defaultValue:a[2]}),n=r.lastIndex}t.push({rawString:e.substring(n)})}return t}t.loadStyles=function(e,t){void 0===t&&(t=!1),c(function(){var a=Array.isArray(e)?e:v(e);void 0===n&&(n=function(){var e=!1;if("undefined"!=typeof document){var t=document.createElement("style");t.type="text/css",e=!!t.styleSheet}return e}());var o=i.runState,s=o.mode,r=o.buffer,l=o.flushTimer;t||1===s?(r.push(a),l||(i.runState.flushTimer=setTimeout(function(){i.runState.flushTimer=0,f()},0))):p(a)})},t.configureLoadStyles=function(e){i.loadStyles=e},t.configureRunMode=function(e){i.runState.mode=e},t.flush=f,t.loadTheme=function(e){i.theme=e,function(){if(i.theme){for(var e=[],t=0,n=i.registeredThemableStyles;t<n.length;t++){var a=n[t];e.push(a.themableStyle)}e.length>0&&(u(1),p([].concat.apply([],e)))}}()},t.clearStyles=u,t.detokenize=m,t.splitStyles=v}).call(this,n(8))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=o},,,,function(e,t){e.exports=s},,,,,,,,,,function(e,t,n){var a=n(24),o=n(7);"string"==typeof a&&(a=[[e.i,a]]);for(var s=0;s<a.length;s++)o.loadStyles(a[s][1],!0);a.locals&&(e.exports=a.locals)},function(e,t,n){(e.exports=n(6)(!1)).push([e.i,'@font-face{font-family:Teams Assets;src:url(https://github.com/Abhijit-MSFT/EmployeeConnect/blob/master/SharepointComponents/TaskTab/dist/fonts/TeamsAssets-Light.woff) format("woff"),url(https://github.com/Abhijit-MSFT/EmployeeConnect/blob/master/SharepointComponents/TaskTab/dist/fonts/TeamsAssets-Light.woff) format("woff2");font-style:normal}.toolTab_31f08909 .row_31f08909{margin:0 -8px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px}.toolTab_31f08909 .row_31f08909:after,.toolTab_31f08909 .row_31f08909:before{display:table;content:"";line-height:0}.toolTab_31f08909 .row_31f08909:after{clear:both}.toolTab_31f08909 .column_31f08909{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box}[dir=ltr] .toolTab_31f08909 .column_31f08909{float:left}[dir=rtl] .toolTab_31f08909 .column_31f08909{float:right}.toolTab_31f08909 .column_31f08909 .ms-Grid_31f08909{padding:0}@media (min-width:640px){.toolTab_31f08909 .column_31f08909{width:100%}}@media (min-width:1024px){[dir=ltr] .toolTab_31f08909 .column_31f08909{left:16.66667%}[dir=rtl] .toolTab_31f08909 .column_31f08909{right:16.66667%}}@media (min-width:640px){[dir=ltr] .toolTab_31f08909 .column_31f08909{left:8.33333%}[dir=rtl] .toolTab_31f08909 .column_31f08909{right:8.33333%}}.toolTab_31f08909 .HR_31f08909,.toolTab_31f08909 .IF_31f08909,.toolTab_31f08909 .PB_31f08909,.toolTab_31f08909 .RO_31f08909{font-size:16px;font-weight:700;font-family:Segoe UI;cursor:pointer}.toolTab_31f08909 .P10_31f08909{padding-top:10px;padding-bottom:40px}.toolTab_31f08909 .shadowsm_31f08909{-webkit-box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important;box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.toolTab_31f08909 .card_31f08909{position:relative;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem;width:22%;height:20%;display:inline-block;margin-right:15px;cursor:pointer;font-family:Segoe UI;font-size:16px}.toolTab_31f08909 .cbody_31f08909{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding:1.25rem}.toolTab_31f08909 .CBL_31f08909,.toolTab_31f08909 .CFT_31f08909,.toolTab_31f08909 .CSA_31f08909,.toolTab_31f08909 .CT_31f08909,.toolTab_31f08909 .DP_31f08909,.toolTab_31f08909 .EISR_31f08909,.toolTab_31f08909 .GWR_31f08909,.toolTab_31f08909 .IR_31f08909,.toolTab_31f08909 .RIST_31f08909,.toolTab_31f08909 .RL_31f08909,.toolTab_31f08909 .SBC_31f08909,.toolTab_31f08909 .SI_31f08909,.toolTab_31f08909 .timesheet_31f08909,.toolTab_31f08909 .VBP_31f08909,.toolTab_31f08909 .VP_31f08909{font-weight:600;padding-top:6px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.toolTab_31f08909 .BCdes_31f08909,.toolTab_31f08909 .CBLdes_31f08909,.toolTab_31f08909 .CSAdes_31f08909,.toolTab_31f08909 .CTdes_31f08909,.toolTab_31f08909 .FTdes_31f08909,.toolTab_31f08909 .GRdes_31f08909,.toolTab_31f08909 .IRdes_31f08909,.toolTab_31f08909 .ISRdes_31f08909,.toolTab_31f08909 .ISTdes_31f08909,.toolTab_31f08909 .Pdes_31f08909,.toolTab_31f08909 .RLdes_31f08909,.toolTab_31f08909 .SIdes_31f08909,.toolTab_31f08909 .timesheetdes_31f08909,.toolTab_31f08909 .VPdes_31f08909{padding-top:6px;color:#adacac;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;width:auto}.toolTab_31f08909 .cafe-service_31f08909,.toolTab_31f08909 .create-finance-tkt_31f08909,.toolTab_31f08909 .createicon_31f08909,.toolTab_31f08909 .download-payslip_31f08909,.toolTab_31f08909 .event-support_31f08909,.toolTab_31f08909 .Inventory_31f08909,.toolTab_31f08909 .leave-request_31f08909,.toolTab_31f08909 .policies_31f08909,.toolTab_31f08909 .Ro-SI_31f08909,.toolTab_31f08909 .RO-timesheet_31f08909,.toolTab_31f08909 .submit-benefits_31f08909,.toolTab_31f08909 .support_31f08909,.toolTab_31f08909 .ticket-creation_31f08909,.toolTab_31f08909 .wife-request_31f08909{font-family:Teams Assets;font-size:22px}@media (max-width:425px){.toolTab_31f08909 .card_31f08909{width:100%}}',""])},,,,function(e,t,n){"use strict";n.r(t);var a=n(3),o=n(2);n(23);var s,i={toolTab:"toolTab_31f08909",row:"row_31f08909",column:"column_31f08909","ms-Grid":"ms-Grid_31f08909",HR:"HR_31f08909",PB:"PB_31f08909",RO:"RO_31f08909",IF:"IF_31f08909",P10:"P10_31f08909",shadowsm:"shadowsm_31f08909",card:"card_31f08909",cbody:"cbody_31f08909",CBL:"CBL_31f08909",CT:"CT_31f08909",RL:"RL_31f08909",VP:"VP_31f08909",DP:"DP_31f08909",CFT:"CFT_31f08909",SBC:"SBC_31f08909",VBP:"VBP_31f08909",RIST:"RIST_31f08909",GWR:"GWR_31f08909",EISR:"EISR_31f08909",CSA:"CSA_31f08909",IR:"IR_31f08909",timesheet:"timesheet_31f08909",SI:"SI_31f08909",CBLdes:"CBLdes_31f08909",CTdes:"CTdes_31f08909",RLdes:"RLdes_31f08909",VPdes:"VPdes_31f08909",Pdes:"Pdes_31f08909",FTdes:"FTdes_31f08909",BCdes:"BCdes_31f08909",ISTdes:"ISTdes_31f08909",GRdes:"GRdes_31f08909",ISRdes:"ISRdes_31f08909",CSAdes:"CSAdes_31f08909",IRdes:"IRdes_31f08909",timesheetdes:"timesheetdes_31f08909",SIdes:"SIdes_31f08909",createicon:"createicon_31f08909","ticket-creation":"ticket-creation_31f08909","leave-request":"leave-request_31f08909",policies:"policies_31f08909","download-payslip":"download-payslip_31f08909","create-finance-tkt":"create-finance-tkt_31f08909","submit-benefits":"submit-benefits_31f08909",support:"support_31f08909","wife-request":"wife-request_31f08909","event-support":"event-support_31f08909","cafe-service":"cafe-service_31f08909",Inventory:"Inventory_31f08909","RO-timesheet":"RO-timesheet_31f08909","Ro-SI":"Ro-SI_31f08909"},r=n(13),l=n(4),d=(n(0),s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});n(9);var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.render=function(){l.SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"),this.domElement.innerHTML='\n      <div class="'+i.toolTab+' id="accordion"">\n        <div class="'+i.row+'">\n        <div class="col-12" >\n          <div class="'+i.HR+' ar accordion-toggle"\n                  data-toggle="collapse"\n                  data-parent="#accordion"\n                  data-target="#HRtools" aria-expanded="false"\n                  >Human Resources\n                </div>\n          <div class="'+i.P10+' panel-collapse" id="HRtools">\n            <div class="'+i.card+" "+i.shadowsm+'">\n              <div class='+i.cbody+'>\n                <span\n                  alt-name="create letter"\n                  class='+i.createicon+'\n                ></span>\n                <div class="'+i.CBL+'">Create business letter</div>\n                <p class="'+i.CBLdes+'">\n                  Create a business letter within a predesigned color and\n                  template.\n                </p>\n              </div>\n              </div>\n\n            <div class="'+i.card+" "+i.shadowsm+'">\n              <div class='+i.cbody+'>\n                <span\n                  alt-name="create letter"\n                  class='+i.createicon+'\n                ></span>\n                <div class="'+i.CBL+'">Create ticket</div>\n                <p class="'+i.CBLdes+'">\n                For all HR tickets, the ticket type is being set as Employee Support.\n                </p>\n              </div>\n              </div>\n\n              <div class="'+i.card+" "+i.shadowsm+'">\n              <div class='+i.cbody+'>\n                <span\n                  alt-name="create letter"\n                  class='+i.createicon+'\n                ></span>\n                <div class="'+i.CBL+'">Request leave</div>\n                <p class="'+i.CBLdes+'">\n                Request leave and check your status in the Leave application.\n                </p>\n              </div>\n              </div>\n\n              <div class="'+i.card+" "+i.shadowsm+'">\n              <div class='+i.cbody+'>\n                <span\n                  alt-name="create letter"\n                  class='+i.createicon+'\n                ></span>\n                <div class="'+i.CBL+'">View policies</div>\n                <p class="'+i.CBLdes+'">\n                Identify the purpose and objectives of Humana Resources department.\n                </p>\n              </div>\n              </div>\n\n\n              <div class="'+i.HR+' ar accordion-toggle"\n              data-toggle="collapse"\n              data-parent="#accordion"\n              data-target="#Pay-benefits" aria-expanded="false"\n              >Pay and benefits\n            </div>\n      <div class="'+i.P10+' panel-collapse" id="Pay-benefits">\n        <div class="'+i.card+" "+i.shadowsm+'">\n          <div class='+i.cbody+'>\n            <span\n              alt-name="create letter"\n              class='+i.createicon+'\n            ></span>\n            <div class="'+i.CBL+'">Download payslip</div>\n            <p class="'+i.CBLdes+'">\n            Create a business letter within a predesigned color and template.\n            </p>\n          </div>\n          </div>\n\n        <div class="'+i.card+" "+i.shadowsm+'">\n          <div class='+i.cbody+'>\n            <span\n              alt-name="create letter"\n              class='+i.createicon+'\n            ></span>\n            <div class="'+i.CBL+'">Create finance ticket</div>\n            <p class="'+i.CBLdes+'">\n            For all HR tickets, the ticket type is being set as Employee Support.\n            </p>\n          </div>\n          </div>\n\n          <div class="'+i.card+" "+i.shadowsm+'">\n          <div class='+i.cbody+'>\n            <span\n              alt-name="create letter"\n              class='+i.createicon+'\n            ></span>\n            <div class="'+i.CBL+'">Submit benefits claim</div>\n            <p class="'+i.CBLdes+'">\n            Request leave and check your status in the Leave application.\n            </p>\n          </div>\n          </div>\n\n          <div class="'+i.card+" "+i.shadowsm+'">\n          <div class='+i.cbody+'>\n            <span\n              alt-name="create letter"\n              class='+i.createicon+'\n            ></span>\n            <div class="'+i.CBL+'">View benefits policies</div>\n            <p class="'+i.CBLdes+'">\n            Identify the purpose and objectives of Humana Resources department.\n            </p>\n          </div>\n          </div>\n\n\n          <div class="'+i.HR+' ar accordion-toggle"\n          data-toggle="collapse"\n          data-parent="#accordion"\n          data-target="#itandfacilities" aria-expanded="false"\n          >IT and facilities\n        </div>\n  <div class="'+i.P10+' panel-collapse" id="itandfacilities">\n    <div class="'+i.card+" "+i.shadowsm+'">\n      <div class='+i.cbody+'>\n        <span\n          alt-name="create letter"\n          class='+i.createicon+'\n        ></span>\n        <div class="'+i.CBL+'">Raise IT Support Ticket</div>\n        <p class="'+i.CBLdes+'">\n        Create a business letter within a predesigned color and template.\n        </p>\n      </div>\n      </div>\n\n    <div class="'+i.card+" "+i.shadowsm+'">\n      <div class='+i.cbody+'>\n        <span\n          alt-name="create letter"\n          class='+i.createicon+'\n        ></span>\n        <div class="'+i.CBL+'">Visitor wi-fi request</div>\n        <p class="'+i.CBLdes+'">\n        For all HR tickets, the ticket type is being set as Employee Support.\n        </p>\n      </div>\n      </div>\n\n      <div class="'+i.card+" "+i.shadowsm+'">\n      <div class='+i.cbody+'>\n        <span\n          alt-name="create letter"\n          class='+i.createicon+'\n        ></span>\n        <div class="'+i.CBL+'">Event IT Support request</div>\n        <p class="'+i.CBLdes+'">\n        Request leave and check your status in the Leave application.\n        </p>\n      </div>\n      </div>\n\n      <div class="'+i.card+" "+i.shadowsm+'">\n      <div class='+i.cbody+'>\n        <span\n          alt-name="create letter"\n          class='+i.createicon+'\n        ></span>\n        <div class="'+i.CBL+'">Cafeteria service app</div>\n        <p class="'+i.CBLdes+'">\n        Identify the purpose and objectives of Humana Resources department.\n        </p>\n      </div>\n      </div>\n\n\n      <div class="'+i.HR+' ar accordion-toggle"\n                  data-toggle="collapse"\n                  data-parent="#accordion"\n                  data-target="#retail-operations" aria-expanded="false"\n                  >Retail operations\n                </div>\n          <div class="'+i.P10+' panel-collapse" id="retail-operations">\n            <div class="'+i.card+" "+i.shadowsm+'">\n              <div class='+i.cbody+'>\n                <span\n                  alt-name="create letter"\n                  class='+i.createicon+'\n                ></span>\n                <div class="'+i.CBL+'">Inventory request</div>\n                <p class="'+i.CBLdes+'">\n                Create a business letter within a predesigned color and template.\n                </p>\n              </div>\n              </div>\n\n            <div class="'+i.card+" "+i.shadowsm+'">\n              <div class='+i.cbody+'>\n                <span\n                  alt-name="create letter"\n                  class='+i.createicon+'\n                ></span>\n                <div class="'+i.CBL+'">Timesheet</div>\n                <p class="'+i.CBLdes+'">\n                For all HR tickets, the ticket type is being set as Employee Support.\n                </p>\n              </div>\n              </div>\n\n              <div class="'+i.card+" "+i.shadowsm+'">\n              <div class='+i.cbody+'>\n                <span\n                  alt-name="create letter"\n                  class='+i.createicon+'\n                ></span>\n                <div class="'+i.CBL+'">Store info</div>\n                <p class="'+i.CBLdes+'">\n                Request leave and check your status in the Leave application.\n                </p>\n              </div>\n              </div>\n\n              </div>\n          </div>\n          </div>\n      </div>'},Object.defineProperty(t.prototype,"dataVersion",{get:function(){return a.Version.parse("1.0")},enumerable:!0,configurable:!0}),t.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:r.PropertyPaneDescription},groups:[{groupName:r.BasicGroupName,groupFields:[Object(o.PropertyPaneTextField)("description",{label:r.DescriptionFieldLabel})]}]}]}},t}(o.BaseClientSideWebPart);t.default=c}])});