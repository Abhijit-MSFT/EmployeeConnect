define("fefc85e6-8e32-4f3b-979e-8a0f128a5c85_0.0.1", ["@microsoft/sp-core-library","@microsoft/sp-http","@microsoft/sp-loader","@microsoft/sp-webpart-base","TaskWebPartStrings"], function(__WEBPACK_EXTERNAL_MODULE__microsoft_sp_core_library__, __WEBPACK_EXTERNAL_MODULE__microsoft_sp_http__, __WEBPACK_EXTERNAL_MODULE__microsoft_sp_loader__, __WEBPACK_EXTERNAL_MODULE__microsoft_sp_webpart_base__, __WEBPACK_EXTERNAL_MODULE_TaskWebPartStrings__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Set the webpack public path
/******/ 	(function () {
/******/ 	  var scripts = document.getElementsByTagName('script');
/******/ 	  var regex = new RegExp('\\/task-web-part(_[a-z0-9-]+)*\\.js', 'i');
/******/ 	  var publicPath;
/******/ 	
/******/ 	  if (scripts && scripts.length) {
/******/ 	    for (var i = 0; i < scripts.length; i++) {
/******/ 	      if (!scripts[i]) continue;
/******/ 	      var path = scripts[i].getAttribute('src');
/******/ 	      if (path && path.match(regex)) {
/******/ 	        publicPath = path.substring(0, path.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	
/******/ 	  if (!publicPath) {
/******/ 	    for (var global in window.__setWebpackPublicPathLoaderSrcRegistry__) {
/******/ 	      if (global && global.match(regex)) {
/******/ 	        publicPath = global.substring(0, global.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	  __webpack_require__.p = publicPath;
/******/ 	})();
/******/ 	
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/webparts/task/TaskWebPart.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/webparts/task/TaskWebPart.js":
/*!******************************************!*\
  !*** ./lib/webparts/task/TaskWebPart.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "@microsoft/sp-core-library");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "@microsoft/sp-webpart-base");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-http */ "@microsoft/sp-http");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskWebPart.module.scss */ "./lib/webparts/task/TaskWebPart.module.scss.js");
/* harmony import */ var TaskWebPartStrings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! TaskWebPartStrings */ "TaskWebPartStrings");
/* harmony import */ var TaskWebPartStrings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(TaskWebPartStrings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/teams-js */ "./node_modules/@microsoft/teams-js/dist/MicrosoftTeams.min.js");
/* harmony import */ var _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/sp-loader */ "@microsoft/sp-loader");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_6__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







_microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__["initialize"]();
var poCount = 0;
var invoiceCount = 0;
var renderFlag = true;
var TaskTabWebPart = /** @class */ (function (_super) {
    __extends(TaskTabWebPart, _super);
    function TaskTabWebPart() {
        var _this = _super.call(this) || this;
        _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_6__["SPComponentLoader"].loadCss("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
        return _this;
    }
    //Rendering TaskList data
    TaskTabWebPart.prototype._getTaskListData = function () {
        //Rest API to call SharePoint list
        var requestURL = this.context.pageContext.web.absoluteUrl;
        return this.context.spHttpClient
            .get(requestURL + "/_api/web/lists/GetByTitle('PurchaseOrders')/items", _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    //Get PO Details List
    TaskTabWebPart.prototype._getPODetailList = function () {
        //Rest API to call SharePoint list
        var requestURL = this.context.pageContext.web.absoluteUrl;
        return this.context.spHttpClient
            .get(requestURL + "/_api/web/lists/GetByTitle('PODetails')/items", _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    //Getting Invoice List Data
    TaskTabWebPart.prototype._getInvoiceListData = function () {
        //Rest API to call SharePoint list
        var requestURL = this.context.pageContext.web.absoluteUrl;
        return this.context.spHttpClient
            .get(requestURL + "/_api/web/lists/GetByTitle('InvoiceList')/items", _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    //Rendering task List
    TaskTabWebPart.prototype._renderTaskList = function (items) {
        var _this = this;
        var html = "";
        var poNumber = this.domElement.getElementsByTagName("tr");
        var vendorNo = this.domElement.getElementsByTagName("tr");
        poCount = items.length;
        items.forEach(function (item) {
            html += "\n            <tr>\n              <td scope=\"row\" class=\"poNumber\">" + item.PoNumber + "</td>\n              <td>" + item.Description + "</td>\n              <td>" + item.VendorName + "</td>\n              <td id=\"vendorNo\">" + item.InvoiceNo + "</td>\n              <td>&#8377; " + item.TotalAmount + "</td>\n              <td id=\"buttonReview\" name=\"buttonReview\" value=" + item.PoNumber + " alt=" + item.InvoiceNo + " class=\"" + _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].review + " reviewButton\" id='review'>Review</td>\n              </tr>\n";
            //this._setButtonEventHandlers();
        });
        //const reviewButton:Element = this.domElement.querySelector(".reviewButton");
        var listContainer = this.domElement.querySelector("#spTaskListContainer");
        console.log(html);
        console.log(listContainer.innerHTML);
        listContainer.innerHTML = html;
        listContainer.addEventListener("click", function () {
            //this.showEvent(this);
            _this.submitPurchaseOrder(event);
        });
    };
    //Rendering Invoice List
    TaskTabWebPart.prototype._renderInvoiceList = function (items) {
        var _this = this;
        var html = "";
        invoiceCount = items.length;
        items.forEach(function (item) {
            html += "\n            <tr>\n              <td scope=\"row\">" + item.Invoiceno_x002e_ + "</td>\n              <td id=\"poNumber\">" + item.POno_x002e_ + "</td>\n              <td>" + item.Description + "</td>\n              <td>" + item.Vendorname + "</td>\n              <td id=\"vendorNo\">" + item.Vendorno_x002e_ + "</td>\n               <td>&#8377; " + item.Amount + "</td>\n\n               <td id=\"buttonReview\" name=\"buttonReview\"  value = " + item.POno_x002e_ + " alt=" + item.Vendorno_x002e_ + " class=\"" + _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].review + " reviewButton\" id='review'>Review</td>\n\n               </tr>\n";
            //this._setButtonEventHandlers();
        });
        //const reviewButton:Element = this.domElement.querySelector(".reviewButton");
        var listContainer = this.domElement.querySelector("#spInvoiceListContainer");
        console.log(html);
        console.log(listContainer.innerHTML);
        listContainer.innerHTML = html;
        listContainer.addEventListener("click", function () {
            //this.showEvent(this);
            _this.submitPurchaseOrder(event);
        });
        //this._setButtonEventHandlers();
    };
    TaskTabWebPart.prototype._renderListAsync = function () {
        var _this = this;
        this._getTaskListData().then(function (response) {
            _this._renderTaskList(response.value);
        });
        //}
    };
    TaskTabWebPart.prototype._renderInvoiceListAsync = function () {
        var _this = this;
        this._getInvoiceListData().then(function (response) {
            _this._renderInvoiceList(response.value);
        });
        //}
    };
    TaskTabWebPart.prototype.render = function () {
        //existing code
        this.domElement.innerHTML += "\n      <div class=\"" + _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].taskTab + "\">\n       <div class=\"" + _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].heading + "\" style=\"padding-bottom: 20px !important;\" id=\"" + _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].ps + "\"> Pending submissions </div>\n        <div class=\"" + _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].container + "\">\n          <div class=\"" + _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].row + "\">\n            <div class=\"" + _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].grid1 + "\">\n              <span class=\"" + _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].title + "\">12 Days of pending timesheet</span>\n              <div>\n              <a class=\"" + _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].button + "\">\n                <span id=\"full-timesheet\" class=\"" + _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].label + "\">Fill timesheet ></span>\n              </a>\n              </div>\n            </div>\n             <div class=\"" + _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].grid2 + "\">\n              <span class=\"" + _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].title + "\">$25,000 Unreconciled expenses</span>\n              <div>\n              <a href=\"https://aka.ms/spfx\" class=\"" + _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].button + "\">\n                <span class=\"" + _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].label + "\">Sumbit expenses ></span>\n              </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"" + _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].row + "\">\n        <div class=\"" + _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].headingPending + "\"> Pending approvals </div>\n         <div class=\"" + _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].subheading + "\">Purchased order (" + poCount + ")</div>\n        <table class=\"" + _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].container + " table\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Po no.</th>\n              <th scope=\"col\"></th>\n              <th scope=\"col\">Description</th>\n              <th scope=\"col\">Vendor name</th>\n              <th scope=\"col\">Vendor no.</th>\n              <th scope=\"col\">Amount</th>\n              <th scope=\"col\"></th>\n            </tr>\n          </thead>\n            <tbody id=\"spTaskListContainer\">\n               " + this._renderListAsync() + "\n            </tbody>\n        </table>\n        </div>\n          <div class=\"" + _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].subheading + "\">Invoice (" + invoiceCount + ")\n      </div>\n\n         <table class=\"table\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Invoice no.</th>\n              <th scope=\"col\">Po no.</th>\n              <th scope=\"col\">Description</th>\n              <th scope=\"col\">Vendor name</th>\n              <th scope=\"col\">Vendor no.</th>\n              <th scope=\"col\">Amount</th>\n              <th scope=\"col\"></th>\n            </tr>\n          </thead>\n          <tbody id=\"spInvoiceListContainer\">\n            " + this._renderInvoiceListAsync() + "\n\n          </tbody>\n        </table>\n      <div class=\"" + _TaskWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].subheading + "\">Inventory (0)</div>\n       </div>";
        this._setButtonEventHandlers();
    };
    TaskTabWebPart.prototype._setButtonEventHandlers = function () {
        var _this = this;
        var button = document.body.querySelector("#full-timesheet");
        button.addEventListener("click", function () {
            _this.pendingDates();
        });
    };
    TaskTabWebPart.prototype.pendingDates = function () {
        var taskInfoObj = {
            url: null,
            width: null,
            height: null,
            fallback: null
        };
        taskInfoObj.url =
            "https://employeeconnect-9566.azurewebsites.net/pendingdates";
        taskInfoObj.height = "1500";
        taskInfoObj.width = "950";
        taskInfoObj.fallback = taskInfoObj.url;
        _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__["tasks"].startTask(taskInfoObj, this.submitHandler);
    };
    TaskTabWebPart.prototype.submitPurchaseOrder = function (event) {
        var PONumber = event.srcElement.attributes[2].value;
        var vendorNo = event.srcElement.attributes[3].value;
        var taskInfo = {
            InvoiceNo: null,
            height: null,
            width: null,
            url: null,
            fallbackUrl: null
        };
        taskInfo.url =
            "https://employeeconnect-9566.azurewebsites.net" +
                "/purchaseorder?poNumber=" +
                PONumber +
                "&vendorno=" +
                vendorNo;
        taskInfo.height = "900";
        taskInfo.width = "600";
        taskInfo.fallbackUrl = taskInfo.url;
        _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__["tasks"].startTask(taskInfo, this.submitHandler);
        this.deleteItem();
    };
    TaskTabWebPart.prototype.getLatestItemId = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.context.spHttpClient
                .get(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('PurchaseOrders')/items?$orderby=Id desc&$top=1&$select=id", _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, {
                headers: {
                    Accept: "application/json;odata=nometadata",
                    "odata-version": ""
                }
            })
                .then(function (response) {
                return response.json();
            }, function (error) {
                reject(error);
            })
                .then(function (response) {
                if (response.value.length === 0) {
                    resolve(-1);
                }
                else {
                    resolve(response.value[0].Id);
                }
            });
        });
    };
    //Update the existing list item
    TaskTabWebPart.prototype.UpdateListItem = function () {
        var poNumber = undefined;
        var etag = undefined;
        this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle(\"PurchaseOrders\")/items(848930)", _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, {
            headers: {
                Accept: "application/json;oData=nometadat",
                "odata-version": ""
            }
        });
    };
    // private ReadListItem(){
    //   let poNumber:number = undefined;
    //   poNumber = 848930;
    //   this.context.spHttpClient.get(`${this.context.pageContext.absoluteUrl}/_api/web/lists/getByTitle("TaskList")/Items(848930)`,
    //   SPHttpClient.configurations.v1,
    //   Headers:{
    //     'Accept':'application/json;oData=nometadat',
    //     'odata-version':''
    //   });
    // }
    TaskTabWebPart.prototype.deleteItem = function () {
        var _this = this;
        // this.updateStatus("Loading latest items...");
        var latestItemId = undefined;
        var etag = undefined;
        this.getLatestItemId()
            .then(function (itemId) {
            if (itemId === -1) {
                throw new Error("No items found in the list");
            }
            latestItemId = itemId;
            // this.updateStatus(
            //   `Loading information about item ID: ${latestItemId}...`
            // );
            return _this.context.spHttpClient.get(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('PurchaseOrders')/items(" + latestItemId + ")?$select=Id", _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, {
                headers: {
                    Accept: "application/json;odata=nometadata",
                    "odata-version": ""
                }
            });
        })
            .then(function (response) {
            etag = response.headers.get("ETag");
            return response.json();
        })
            .then(function (item) {
            //this.updateStatus(`Deleting item with ID: ${latestItemId}...`);
            return _this.context.spHttpClient.post(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('PurchaseOrders')/items(" + latestItemId + ")", _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, {
                headers: {
                    Accept: "application/json;odata=nometadata",
                    "Content-type": "application/json;odata=verbose",
                    "odata-version": "",
                    "IF-MATCH": etag,
                    "X-HTTP-Method": "DELETE"
                }
            });
        })
            .then(function (response) {
            // this.updateStatus(
            //   `Item with ID: ${latestItemId} successfully deleted`
            // );
        }, function (error) {
            //this.updateStatus(`Error deleting item: ${error}`);
        });
    };
    TaskTabWebPart.prototype.submitHandler = function (err, result) {
        if (result.action == "podecline") {
            var taskInfo = {
                InvoiceNo: null,
                height: null,
                width: null,
                url: null,
                fallbackUrl: null
            };
            taskInfo.url =
                "https://employeeconnect-9566.azurewebsites.net/podecline?poNo=" +
                    result.poNumber +
                    "&POreason=" +
                    result.reason +
                    "&POComment=" +
                    result.comment;
            taskInfo.height = "400";
            taskInfo.width = "367";
            // Set fallback URL
            taskInfo.fallbackUrl = taskInfo.url;
            _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__["tasks"].startTask(taskInfo);
        }
        if (result.action == "cancelPo") {
            _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__["tasks"].submitTask();
        }
        if (result.action == "closePending") {
            _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__["tasks"].submitTask();
        }
        if (result.action == "donedecline") {
            _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__["tasks"].submitTask();
        }
        else {
            _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__["tasks"].submitTask();
        }
    };
    Object.defineProperty(TaskTabWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Version"].parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    TaskTabWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: TaskWebPartStrings__WEBPACK_IMPORTED_MODULE_4__["PropertyPaneDescription"]
                    },
                    groups: [
                        {
                            groupName: TaskWebPartStrings__WEBPACK_IMPORTED_MODULE_4__["BasicGroupName"],
                            groupFields: [
                                Object(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__["PropertyPaneTextField"])("description", {
                                    label: TaskWebPartStrings__WEBPACK_IMPORTED_MODULE_4__["DescriptionFieldLabel"]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return TaskTabWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (TaskTabWebPart);


/***/ }),

/***/ "./lib/webparts/task/TaskWebPart.module.css":
/*!**************************************************!*\
  !*** ./lib/webparts/task/TaskWebPart.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!./TaskWebPart.module.css */ "./node_modules/css-loader/index.js?!./lib/webparts/task/TaskWebPart.module.css");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "./lib/webparts/task/TaskWebPart.module.scss.js":
/*!******************************************************!*\
  !*** ./lib/webparts/task/TaskWebPart.module.scss.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./TaskWebPart.module.css */ "./lib/webparts/task/TaskWebPart.module.css");
var styles = {
    taskTab: 'taskTab_d54b3b41',
    container: 'container_d54b3b41',
    grid1_b73c1c19: 'grid1_b73c1c19_d54b3b41',
    grid2_b73c1c19: 'grid2_b73c1c19_d54b3b41',
    subheading_b73c1c19: 'subheading_b73c1c19_d54b3b41',
    heading_b73c1c19: 'heading_b73c1c19_d54b3b41',
    button_b73c1c19: 'button_b73c1c19_d54b3b41',
    row: 'row_d54b3b41',
    column: 'column_d54b3b41',
    'ms-Grid': 'ms-Grid_d54b3b41',
    taskTab_bb7e768f: 'taskTab_bb7e768f_d54b3b41',
    subheading_bb7e768f: 'subheading_bb7e768f_d54b3b41',
    heading: 'heading_d54b3b41',
    headingPending: 'headingPending_d54b3b41',
    heading_bb7e768f: 'heading_bb7e768f_d54b3b41',
    subheading: 'subheading_d54b3b41',
    heading_d5fef6f0: 'heading_d5fef6f0_d54b3b41',
    title: 'title_d54b3b41',
    review: 'review_d54b3b41',
    grid1: 'grid1_d54b3b41',
    grid2: 'grid2_d54b3b41',
    heading_8e03eadd: 'heading_8e03eadd_d54b3b41',
    spInvoiceListContainer: 'spInvoiceListContainer_d54b3b41',
    button_8e03eadd: 'button_8e03eadd_d54b3b41',
    button: 'button_d54b3b41',
    label: 'label_d54b3b41',
    list: 'list_d54b3b41',
    listItem: 'listItem_d54b3b41',
    panel: 'panel_d54b3b41',
    ps: 'ps_d54b3b41'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "./lib/webparts/task/imgs/expenses3.png":
/*!**********************************************!*\
  !*** ./lib/webparts/task/imgs/expenses3.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "expenses3_be55f569e57e25010ddb2598c3c51321.png";

/***/ }),

/***/ "./lib/webparts/task/imgs/pending3.png":
/*!*********************************************!*\
  !*** ./lib/webparts/task/imgs/pending3.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pending3_84968af36cefc50388d07208c8773d4a.png";

/***/ }),

/***/ "./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
        }
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.type = 'text/css';
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@microsoft/teams-js/dist/MicrosoftTeams.min.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@microsoft/teams-js/dist/MicrosoftTeams.min.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(n(1))},function(t,e,n){"use strict";var i=this&&this.__rest||function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&(n[i[o]]=t[i[o]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var o="1.4.2";function r(t){for(var e="^",n=t.split("."),i=0;i<n.length;i++)e+=(i>0?"[.]":"")+n[i].replace("*","[^/^.]+");return e+="$"}var a=function(t){for(var e="",n=0;n<t.length;n++)e+=(0===n?"":"|")+r(t[n]);return new RegExp(e)}(["https://teams.microsoft.com","https://teams.microsoft.us","https://gov.teams.microsoft.us","https://dod.teams.microsoft.us","https://int.teams.microsoft.com","https://devspaces.skype.com","https://ssauth.skype.com","http://dev.local","http://dev.local:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com"]),s={},u={settings:"settings",content:"content",authentication:"authentication",remove:"remove",task:"task"};!function(t){var e,n,i,o=function(){return function(){this.enabled=!0}}();t.MenuItem=o,function(t){t.dropDown="dropDown",t.popOver="popOver"}(t.MenuListType||(t.MenuListType={})),s.navBarMenuItemPress=function(t){e&&e(t)||(_(),W(f,"handleNavBarMenuItemPress",[t]))},s.actionMenuItemPress=function(t){n&&n(t)||(_(),W(f,"handleActionMenuItemPress",[t]))},s.setModuleView=function(t){i&&i(t)||(_(),W(f,"viewConfigItemPress",[t]))},t.setUpViews=function(t,e){_(),i=e,W(f,"setUpViews",[t])},t.setNavBarMenu=function(t,n){_(),e=n,W(f,"setNavBarMenu",[t])},t.showActionMenu=function(t,e){_(),n=e,W(f,"showActionMenu",[t])}}(e.menus||(e.menus={}));var c,f,l,d,h,v,g,p,m,y,b,w,k,T=!1,C=!1,O=[],M=[],S=0,E={},I=!1;function P(){window.print()}function x(t){_(),p=t,t&&W(f,"registerHandler",["themeChange"])}function H(t){_(),m=t,t&&W(f,"registerHandler",["fullScreen"])}function N(t){_(),y=t,t&&W(f,"registerHandler",["backButton"])}function U(){_();var t=W(f,"navigateBack",[]);E[t]=function(t){if(!t)throw new Error("Back navigation is not supported in the current client or context.")}}function j(t){_(),b=t,t&&W(f,"registerHandler",["beforeUnload"])}function _(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(!T)throw new Error("The library has not yet been initialized");if(v&&t&&t.length>0){for(var n=!1,i=0;i<t.length;i++)if(t[i]===v){n=!0;break}if(!n)throw new Error("This call is not allowed in the '"+v+"' context")}}function B(t){if(t&&t.data&&"object"==typeof t.data){var e=t.source||t.originalEvent.source,n=t.origin||t.originalEvent.origin;e===c||n!==c.location.origin&&!a.test(n.toLowerCase())||(L(e,n),e===f?A(t):e===d&&D(t))}}function L(t,e){f&&t!==f?d&&t!==d||(d=t,h=e):(f=t,l=e),f&&f.closed&&(f=null,l=null),d&&d.closed&&(d=null,h=null),R(f),R(d)}function A(t){if("id"in t.data){var e=t.data,n=E[e.id];n&&(n.apply(null,e.args),delete E[e.id])}else if("func"in t.data){e=t.data;var i=s[e.func];i&&i.apply(this,e.args)}}function D(t){if("id"in t.data&&"func"in t.data){var e=t.data,n=s[e.func];if(n){var i=n.apply(this,e.args);i&&J(d,e.id,Array.isArray(i)?i:[i])}else{var o=W(f,e.func,e.args);E[o]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];d&&J(d,e.id,t)}}}}function F(t){return t===f?O:t===d?M:[]}function z(t){return t===f?l:t===d?h:null}function R(t){for(var e=z(t),n=F(t);t&&e&&n.length>0;)t.postMessage(n.shift(),e)}function V(t,e){var n=c.setInterval(function(){0===F(t).length&&(clearInterval(n),e())},100)}function W(t,e,n){var i=K(e,n);if(C)c&&c.nativeInterface&&c.nativeInterface.framelessPostMessage(JSON.stringify(i));else{var o=z(t);t&&o?t.postMessage(i,o):F(t).push(i)}return i.id}function J(t,e,n){var i=q(e,n),o=z(t);t&&o&&t.postMessage(i,o)}function K(t,e){return{id:S++,func:t,args:e||[]}}function q(t,e){return{id:t,args:e||[]}}s.themeChange=function(t){p&&p(t);d&&W(d,"themeChange",[t])},s.fullScreenChange=function(t){m&&m(t)},s.backButtonPress=function(){y&&y()||U()},s.beforeUnload=function(){var t=function(){W(f,"readyToUnload",[])};b&&b(t)||t()},s.changeSettings=function(){w&&w()},e.initialize=function(t){if(void 0===t&&(t=window),!T){T=!0;var e=function(t){return B(t)};(f=(c=t).parent!==c.self?c.parent:c.opener)?c.addEventListener("message",e,!1):(C=!0,window.onNativeMessage=A);try{l="*";var n=W(f,"initialize",[o]);E[n]=function(t,e){v=t,g=e}}finally{l=null}this._uninitialize=function(){v&&(x(null),H(null),N(null),j(null)),v===u.settings&&k.registerOnSaveHandler(null),v===u.remove&&k.registerOnRemoveHandler(null),C||c.removeEventListener("message",e,!1),T=!1,f=null,l=null,O=[],d=null,h=null,M=[],S=0,E={},v=null,g=null,C=!1}}},e._uninitialize=function(){},e.enablePrintCapability=function(){I||(I=!0,_(),document.addEventListener("keydown",function(t){(t.ctrlKey||t.metaKey)&&80===t.keyCode&&(P(),t.cancelBubble=!0,t.preventDefault(),t.stopImmediatePropagation())}))},e.print=P,e.getContext=function(t){_();var e=W(f,"getContext");E[e]=t},e.registerOnThemeChangeHandler=x,e.registerFullScreenHandler=H,e.registerBackButtonHandler=N,e.navigateBack=U,e.registerBeforeUnloadHandler=j,e.registerChangeSettingsHandler=function(t){_(u.content),w=t,t&&W(f,"registerHandler",["changeSettings"])},e.navigateCrossDomain=function(t){_(u.content,u.settings,u.remove,u.task);var e=W(f,"navigateCrossDomain",[t]);E[e]=function(t){if(!t)throw new Error("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.")}},e.getTabInstances=function(t,e){_();var n=W(f,"getTabInstances",[e]);E[n]=t},e.getUserJoinedTeams=function(t,e){_();var n=W(f,"getUserJoinedTeams",[e]);E[n]=t},e.getMruTabInstances=function(t,e){_();var n=W(f,"getMruTabInstances",[e]);E[n]=t},e.shareDeepLink=function(t){_(u.content),W(f,"shareDeepLink",[t.subEntityId,t.subEntityLabel,t.subEntityWebUrl])},e.openFilePreview=function(t){_(u.content);var e=[t.entityId,t.title,t.description,t.type,t.objectUrl,t.downloadUrl,t.webPreviewUrl,t.webEditUrl,t.baseUrl,t.editFile,t.subEntityId];W(f,"openFilePreview",e)},e.showNotification=function(t){_(u.content);var e=[t.message,t.notificationType];W(f,"showNotification",e)},e.executeDeepLink=function(t){_(u.content);var e=W(f,"executeDeepLink",[t]);E[e]=function(t,e){if(!t)throw new Error(e)}},e.uploadCustomApp=function(t){_();var e=W(f,"uploadCustomApp",[t]);E[e]=function(t,e){if(!t)throw new Error(e)}},e.navigateToTab=function(t){_();var e=W(f,"navigateToTab",[t]);E[e]=function(t){if(!t)throw new Error("Invalid internalTabInstanceId and/or channelId were/was provided")}},function(t){var e,n;s["settings.save"]=function(t){var n=new i(t);e?e(n):n.notifySuccess()},s["settings.remove"]=function(){var t=new o;n?n(t):t.notifySuccess()},t.setValidityState=function(t){_(u.settings,u.remove),W(f,"settings.setValidityState",[t])},t.getSettings=function(t){_(u.content,u.settings,u.remove);var e=W(f,"settings.getSettings");E[e]=t},t.setSettings=function(t){_(u.content,u.settings);var e=W(f,"settings.setSettings",[t]);E[e]=function(t,e){if(!t)throw new Error(e)}},t.registerOnSaveHandler=function(t){_(u.settings),e=t,t&&W(f,"registerHandler",["save"])},t.registerOnRemoveHandler=function(t){_(u.remove),n=t,t&&W(f,"registerHandler",["remove"])};var i=function(){function t(t){this.notified=!1,this.result=t||{}}return t.prototype.notifySuccess=function(){this.ensureNotNotified(),W(f,"settings.save.success"),this.notified=!0},t.prototype.notifyFailure=function(t){this.ensureNotNotified(),W(f,"settings.save.failure",[t]),this.notified=!0},t.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},t}();var o=function(){function t(){this.notified=!1}return t.prototype.notifySuccess=function(){this.ensureNotNotified(),W(f,"settings.remove.success"),this.notified=!0},t.prototype.notifyFailure=function(t){this.ensureNotNotified(),W(f,"settings.remove.failure",[t]),this.notified=!0},t.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},t}()}(k=e.settings||(e.settings={})),function(t){var e,n;function i(){r();try{d&&d.close()}finally{d=null,h=null}}function o(t){e=t,i();var n=e.width||600,o=e.height||400;n=Math.min(n,c.outerWidth-400),o=Math.min(o,c.outerHeight-200);var r=document.createElement("a");r.href=e.url;var s=void 0!==c.screenLeft?c.screenLeft:c.screenX,u=void 0!==c.screenTop?c.screenTop:c.screenY;s+=c.outerWidth/2-n/2,u+=c.outerHeight/2-o/2,(d=c.open(r.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+u+", left="+s+", width="+n+", height="+o))?a():l("FailedToOpenWindow")}function r(){n&&(clearInterval(n),n=0),delete s.initialize,delete s.navigateCrossDomain}function a(){r(),n=c.setInterval(function(){if(!d||d.closed)l("CancelledByUser");else{var t=h;try{h="*",W(d,"ping")}finally{h=t}}},100),s.initialize=function(){return[u.authentication,g]},s.navigateCrossDomain=function(t){return!1}}function l(t){try{e&&e.failureCallback&&e.failureCallback(t)}finally{e=null,i()}}function v(t,e,n){if(t){var i=document.createElement("a");i.href=decodeURIComponent(t),i.host&&i.host!==window.location.host&&"outlook.office.com"===i.host&&i.search.indexOf("client_type=Win32_Outlook")>-1&&(e&&"result"===e&&(n&&(i.href=p(i.href,"result",n)),c.location.assign(p(i.href,"authSuccess",""))),e&&"reason"===e&&(n&&(i.href=p(i.href,"reason",n)),c.location.assign(p(i.href,"authFailure",""))))}}function p(t,e,n){var i=t.indexOf("#"),o=-1===i?"#":t.substr(i);return o=o+"&"+e+(""!==n?"="+n:""),(t=-1===i?t:t.substr(0,i))+o}s["authentication.authenticate.success"]=function(t){try{e&&e.successCallback&&e.successCallback(t)}finally{e=null,i()}},s["authentication.authenticate.failure"]=l,t.registerAuthenticationHandlers=function(t){e=t},t.authenticate=function(t){var n=void 0!==t?t:e;if(_(u.content,u.settings,u.remove,u.task),"desktop"===g||"android"===g||"ios"===g){var i=document.createElement("a");i.href=n.url;var r=W(f,"authentication.authenticate",[i.href,n.width,n.height]);E[r]=function(t,e){t?n.successCallback(e):n.failureCallback(e)}}else o(n)},t.getAuthToken=function(t){_();var e=W(f,"authentication.getAuthToken",[t.resources]);E[e]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}},t.getUser=function(t){_();var e=W(f,"authentication.getUser");E[e]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}},t.notifySuccess=function(t,e){v(e,"result",t),_(u.authentication),W(f,"authentication.authenticate.success",[t]),V(f,function(){return setTimeout(function(){return c.close()},200)})},t.notifyFailure=function(t,e){v(e,"reason",t),_(u.authentication),W(f,"authentication.authenticate.failure",[t]),V(f,function(){return setTimeout(function(){return c.close()},200)})}}(e.authentication||(e.authentication={})),e.sendCustomMessage=function(t,e){return _(),W(f,t,e)},function(t){t.startTask=function(t,e){_(u.content);var n=W(f,"tasks.startTask",[t]);E[n]=e},t.updateTask=function(t){_(u.content,u.task),t.width,t.height;var e=i(t,["width","height"]);if(Object.keys(e).length)throw new Error("updateTask requires a taskInfo argument containing only width and height");W(f,"tasks.updateTask",[t])},t.submitTask=function(t,e){_(u.content,u.task),W(f,"tasks.completeTask",[t,Array.isArray(e)?e:[e]])}}(e.tasks||(e.tasks={})),e.getChatMembers=function(t){_();var e=W(f,"getChatMembers");E[e]=t}}])});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./lib/webparts/task/TaskWebPart.module.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./lib/webparts/task/TaskWebPart.module.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css);", ""]);

// module
exports.push([module.i, ".taskTab_d54b3b41 .container_d54b3b41{max-width:auto;margin:0 auto;position:relative;top:-18px}.taskTab_d54b3b41 .grid1_b73c1c19_d54b3b41,.taskTab_d54b3b41 .grid2_b73c1c19_d54b3b41{width:22%!important}.taskTab_d54b3b41 .subheading_b73c1c19_d54b3b41{margin:10px}.taskTab_d54b3b41 .heading_b73c1c19_d54b3b41{margin-top:20px}.taskTab_d54b3b41 thead{background:#f8f8f8}.taskTab_d54b3b41 th{font-weight:500;font-size:13px}.taskTab_d54b3b41 td{font-size:11px;font-weight:400;color:#333}.taskTab_d54b3b41 a.button_b73c1c19_d54b3b41{background:0 0!important;color:#3b8ce3!important}.taskTab_d54b3b41 .row_d54b3b41{margin:0 -8px;-webkit-box-sizing:border-box;box-sizing:border-box;color:\"[theme:white, default: #ffffff]\";padding:0!important;margin:4px 0!important}.taskTab_d54b3b41 .row_d54b3b41:after,.taskTab_d54b3b41 .row_d54b3b41:before{display:table;content:\"\";line-height:0}.taskTab_d54b3b41 .row_d54b3b41:after{clear:both}.taskTab_d54b3b41 .column_d54b3b41{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}[dir=ltr] .taskTab_d54b3b41 .column_d54b3b41{float:left}[dir=rtl] .taskTab_d54b3b41 .column_d54b3b41{float:right}.taskTab_d54b3b41 .column_d54b3b41 .ms-Grid_d54b3b41{padding:0}@media (min-width:640px){.taskTab_d54b3b41 .column_d54b3b41{width:25%}}@media (min-width:1024px){[dir=ltr] .taskTab_d54b3b41 .column_d54b3b41{left:16.66667%}[dir=rtl] .taskTab_d54b3b41 .column_d54b3b41{right:16.66667%}}@media (min-width:640px){[dir=ltr] .taskTab_d54b3b41 .column_d54b3b41{left:8.33333%}[dir=rtl] .taskTab_d54b3b41 .column_d54b3b41{right:8.33333%}}.taskTab_d54b3b41 .taskTab_bb7e768f_d54b3b41 .subheading_bb7e768f_d54b3b41{font-size:13px;color:gray;cursor:pointer}.taskTab_d54b3b41 .heading_d54b3b41{font-size:22px;color:#000}.taskTab_d54b3b41 .headingPending_d54b3b41{font-size:22px;margin-top:25px;color:#000}.taskTab_d54b3b41 .taskTab_bb7e768f_d54b3b41 .heading_bb7e768f_d54b3b41{font-size:18px;font-weight:500;padding-bottom:5px;padding-top:0}.taskTab_d54b3b41 .subheading_d54b3b41{font-size:13px;color:gray;cursor:pointer;margin-top:8px}.taskTab_d54b3b41 .heading_d5fef6f0_d54b3b41{margin-bottom:30px!important}.taskTab_d54b3b41 .title_d54b3b41{color:#000;font-weight:700;padding:2px;position:relative;top:10px}.taskTab_d54b3b41 .review_d54b3b41{color:#0078d4;cursor:pointer}.taskTab_d54b3b41 .review_d54b3b41:hover{text-decoration:underline}.taskTab_d54b3b41 .grid1_d54b3b41,.taskTab_d54b3b41 .grid2_d54b3b41{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;background-image:url(" + escape(__webpack_require__(/*! ./imgs/pending3.png */ "./lib/webparts/task/imgs/pending3.png")) + ");background-size:120px 80px;background-position:50%;background-repeat:no-repeat;left:0!important;height:160px;width:22%!important;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}[dir=ltr] .taskTab_d54b3b41 .grid1_d54b3b41,[dir=ltr] .taskTab_d54b3b41 .grid2_d54b3b41{float:left}[dir=rtl] .taskTab_d54b3b41 .grid1_d54b3b41,[dir=rtl] .taskTab_d54b3b41 .grid2_d54b3b41{float:right}.taskTab_d54b3b41 .grid1_d54b3b41 .ms-Grid_d54b3b41,.taskTab_d54b3b41 .grid2_d54b3b41 .ms-Grid_d54b3b41{padding:0}@media (min-width:640px){.taskTab_d54b3b41 .grid1_d54b3b41,.taskTab_d54b3b41 .grid2_d54b3b41{width:25%}}@media (min-width:1024px){[dir=ltr] .taskTab_d54b3b41 .grid1_d54b3b41,[dir=ltr] .taskTab_d54b3b41 .grid2_d54b3b41{left:16.66667%}[dir=rtl] .taskTab_d54b3b41 .grid1_d54b3b41,[dir=rtl] .taskTab_d54b3b41 .grid2_d54b3b41{right:16.66667%}}@media (min-width:640px){[dir=ltr] .taskTab_d54b3b41 .grid1_d54b3b41,[dir=ltr] .taskTab_d54b3b41 .grid2_d54b3b41{left:8.33333%}[dir=rtl] .taskTab_d54b3b41 .grid1_d54b3b41,[dir=rtl] .taskTab_d54b3b41 .grid2_d54b3b41{right:8.33333%}}.taskTab_d54b3b41 .grid2_d54b3b41{background-image:url(" + escape(__webpack_require__(/*! ./imgs/expenses3.png */ "./lib/webparts/task/imgs/expenses3.png")) + ");background-repeat:no-repeat;margin-left:2%}.taskTab_d54b3b41 td,.taskTab_d54b3b41 th{border-left:none!important;border-right:none!important;color:#000}.taskTab_d54b3b41 .heading_8e03eadd_d54b3b41{margin-top:25px!important;padding-bottom:5px}.taskTab_d54b3b41 tbody#spInvoiceListContainer_d54b3b41{position:relative}.taskTab_d54b3b41 .button_d54b3b41,.taskTab_d54b3b41 a.button_8e03eadd_d54b3b41{background:0 0!important;color:#0078d4!important}.taskTab_d54b3b41 .button_d54b3b41{text-decoration:none;height:32px;min-width:80px;border-color:\"[theme:themePrimary, default: #0078d4]\";outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;margin-top:104px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.taskTab_d54b3b41 .button_d54b3b41 .label_d54b3b41{font-weight:600;font-size:14px;height:32px;line-height:32px;font-family:Segoe UI;margin:0 4px;vertical-align:top;display:inline-block}.taskTab_d54b3b41 .list_d54b3b41{margin:10;padding:10;line-height:50px;list-style-type:none;-webkit-box-shadow:0 4px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);box-shadow:0 4px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.taskTab_d54b3b41 .list_d54b3b41,.taskTab_d54b3b41 .listItem_d54b3b41{color:#333;font-family:Segoe UI Regular WestEuropean,Segoe UI,Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;-webkit-box-sizing:border-box;box-sizing:border-box}.taskTab_d54b3b41 .listItem_d54b3b41{vertical-align:center;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;padding:9px 28px 3px;position:relative}.taskTab_d54b3b41 .panel_d54b3b41{padding:10px 0;background-color:#fff;border-bottom:1px solid #e8e4e4}@media (max-width:768px){.taskTab_d54b3b41 .grid1_d54b3b41,.taskTab_d54b3b41 .grid2_d54b3b41{display:none;width:22%}}@media (max-width:425px){.taskTab_d54b3b41 #ps_d54b3b41,.taskTab_d54b3b41 .grid1_d54b3b41,.taskTab_d54b3b41 .grid2_d54b3b41{display:none}.taskTab_d54b3b41 .grid2_d54b3b41{margin:10px 0 0}.taskTab_d54b3b41 .heading_d54b3b41,.taskTab_d54b3b41 .subheading_d54b3b41,.taskTab_d54b3b41 thead th{font-size:xx-small}}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "@microsoft/sp-core-library":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__microsoft_sp_core_library__;

/***/ }),

/***/ "@microsoft/sp-http":
/*!*************************************!*\
  !*** external "@microsoft/sp-http" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__microsoft_sp_http__;

/***/ }),

/***/ "@microsoft/sp-loader":
/*!***************************************!*\
  !*** external "@microsoft/sp-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__microsoft_sp_loader__;

/***/ }),

/***/ "@microsoft/sp-webpart-base":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__microsoft_sp_webpart_base__;

/***/ }),

/***/ "TaskWebPartStrings":
/*!*************************************!*\
  !*** external "TaskWebPartStrings" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_TaskWebPartStrings__;

/***/ })

/******/ })});;
//# sourceMappingURL=task-web-part.js.map
(function(){
if (!window.__setWebpackPublicPathLoaderSrcRegistry__) window.__setWebpackPublicPathLoaderSrcRegistry__={};
var scripts = document.getElementsByTagName('script');
if (scripts && scripts.length) {
  for (var i = 0; i < scripts.length; i++) {
    if (!scripts[i]) continue;
    var path = scripts[i].getAttribute('src');
    if (path) window.__setWebpackPublicPathLoaderSrcRegistry__[path]=true;
  }
}
})();