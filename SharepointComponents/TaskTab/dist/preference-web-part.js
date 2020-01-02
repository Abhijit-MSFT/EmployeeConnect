define("35c4f615-708c-4d2b-a831-e9fadd72538e_0.0.1", ["@microsoft/sp-core-library","@microsoft/sp-http","@microsoft/sp-loader","@microsoft/sp-webpart-base","PreferenceWebPartStrings","jquery"], function(__WEBPACK_EXTERNAL_MODULE__microsoft_sp_core_library__, __WEBPACK_EXTERNAL_MODULE__microsoft_sp_http__, __WEBPACK_EXTERNAL_MODULE__microsoft_sp_loader__, __WEBPACK_EXTERNAL_MODULE__microsoft_sp_webpart_base__, __WEBPACK_EXTERNAL_MODULE_PreferenceWebPartStrings__, __WEBPACK_EXTERNAL_MODULE_jquery__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/webparts/preference/PreferenceWebPart.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/webparts/preference/PreferenceWebPart.js":
/*!******************************************************!*\
  !*** ./lib/webparts/preference/PreferenceWebPart.js ***!
  \******************************************************/
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
/* harmony import */ var _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PreferenceWebPart.module.scss */ "./lib/webparts/preference/PreferenceWebPart.module.scss.js");
/* harmony import */ var PreferenceWebPartStrings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! PreferenceWebPartStrings */ "PreferenceWebPartStrings");
/* harmony import */ var PreferenceWebPartStrings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(PreferenceWebPartStrings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/teams-js */ "./node_modules/@microsoft/teams-js/dist/MicrosoftTeams.min.js");
/* harmony import */ var _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/sp-loader */ "@microsoft/sp-loader");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
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
//Tarak File








_microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__["initialize"]();
var updatePrefObj = {
    UserName: "",
    Uni_ID: "",
    TenantID: "",
    ServiceURL: "",
    SelectedCategories: [""],
    NotificationFlag: "",
    NotificaitionTime: "",
    NotifyMe: "",
    Item: "",
    EnTNotificationTime: "",
    NewsNotificationTime: "",
    TaskNotificationTime: "",
    EnTNotificationFlag: "",
    NewsnotificationFlag: "",
    //TaskNotificationFlag: "",
    NewsNotifyMe: "",
    TaskNotifyMe: ""
};
var existingUser;
var SPCategory;
var intersectionCategory = ["Business"];
var categoriesArray = {
    readCatArr: [
        "Business",
        "Animation",
        "AI",
        "Design",
        "IT",
        "Creative",
        "Data",
        "Enterprise",
        "Art",
        "Technology",
        "Health",
        "Economy",
        "Market",
        "Media",
        "Software",
        "CS",
        "Finance",
        "Culture"
    ]
};
var newsCategory = new Array();
var renderFlag = true;
var PreferencesTabWebPart = /** @class */ (function (_super) {
    __extends(PreferencesTabWebPart, _super);
    function PreferencesTabWebPart() {
        var _this = _super.call(this) || this;
        _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_6__["SPComponentLoader"].loadCss("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
        jquery__WEBPACK_IMPORTED_MODULE_7__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_7__(".toggleClassNews").click(function () {
                debugger;
                console.log(jquery__WEBPACK_IMPORTED_MODULE_7__(_this).prop("checked"));
                if (jquery__WEBPACK_IMPORTED_MODULE_7__(".toggleClassNews").prop("checked") == true) {
                    jquery__WEBPACK_IMPORTED_MODULE_7__(".radio, #newsTimeD").prop("disabled", false);
                }
                else if (jquery__WEBPACK_IMPORTED_MODULE_7__(".toggleClassNews").prop("checked") == false) {
                    jquery__WEBPACK_IMPORTED_MODULE_7__(".radio, #newsTimeD").prop("disabled", true);
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_7__(".toggleEntTimeClass").click(function () {
                debugger;
                console.log(jquery__WEBPACK_IMPORTED_MODULE_7__(".toggleEntTimeClass").prop("checked"));
                if (jquery__WEBPACK_IMPORTED_MODULE_7__(".toggleEntTimeClass").prop("checked") == true) {
                    jquery__WEBPACK_IMPORTED_MODULE_7__(".radio1, #entTimeD").prop("disabled", false);
                }
                else if (jquery__WEBPACK_IMPORTED_MODULE_7__(".toggleEntTimeClass").prop("checked") == false) {
                    jquery__WEBPACK_IMPORTED_MODULE_7__(".radio1, #entTimeD").prop("disabled", true);
                }
            });
            _this._renderListAsync();
        });
        _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__["initialize"]();
        _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__["getContext"](function (context) {
            updatePrefObj.UserName = context.userPrincipalName;
            updatePrefObj.TenantID = context.userObjectId;
            updatePrefObj.Uni_ID = context.tid;
            existingUser = updatePrefObj.UserName;
        });
        return _this;
        //this._renderListAsync();
    }
    PreferencesTabWebPart.prototype.getLatestItemId = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.context.spHttpClient
                .get(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('PreferencesList')/items?$orderby=Id desc&$top=1&$select=id", _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, {
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
    //Update preferences data
    PreferencesTabWebPart.prototype.updateItem = function (updateObj) {
        var _this = this;
        var latestItemId = undefined;
        this.getLatestItemId()
            .then(function (itemId) {
            if (itemId === -1) {
                throw new Error("No items found in the list");
            }
            latestItemId = itemId;
            console.log("Loading information about item ID: " + itemId + "...");
            return _this.context.spHttpClient.get(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('PreferencesList')/items(" + latestItemId + ")?$select=Title,Id", _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, {
                headers: {
                    Accept: "application/json;odata=nometadata",
                    "odata-version": ""
                }
            });
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (item) {
            //  console.log(`Item ID1: ${item.Id}, Title: ${item.Title}`);
            //item.NotificaitionTime = updateObj;
            var body = JSON.stringify({
                Title: "Updated Item",
                UserName: updatePrefObj.UserName,
                Uni_ID: updatePrefObj.Uni_ID,
                TenantID: updatePrefObj.TenantID,
                SelectedCategories: "" + updatePrefObj.SelectedCategories,
                //  Item: `${updatePrefObj.Item}`,
                EnTNotificationTime: "" + updatePrefObj.EnTNotificationTime,
                NewsNotificationTime: "" + updatePrefObj.NewsNotificationTime,
                TaskNotificationTime: "" + updatePrefObj.TaskNotificationTime,
                NewsNotificationFlag: "" + updatePrefObj.NewsnotificationFlag,
                // TaskNotificationFlag: `${updatePrefObj.TaskNotificationFlag}`,
                EnTNotificationFlag: "" + updatePrefObj.EnTNotificationFlag,
                NewsNotifyMe: "" + updatePrefObj.NewsNotifyMe,
                EnTNotifyMe: "" + updatePrefObj.NotifyMe
            });
            console.log(body);
            _this.context.spHttpClient
                .post(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists(guid%27e8937172-f3f3-478e-97bb-d5699f8d8945%27)/items(" + latestItemId + ")", _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1, {
                headers: {
                    Accept: "application/json;odata=nometadata",
                    "Content-type": "application/json;odata=nometadata",
                    "odata-version": "",
                    "IF-MATCH": "*",
                    "X-HTTP-Method": "MERGE"
                },
                body: body
            })
                .then(function (response) {
                console.log("Item with ID: " + latestItemId + " successfully updated");
            }, function (error) {
                console.log("Error updating item: " + error);
            });
        });
    };
    PreferencesTabWebPart.prototype._getUserInfoData = function () {
        //Rest API to call SharePoint list
        var requestURL = this.context.pageContext.web.absoluteUrl;
        return this.context.spHttpClient
            .get(requestURL + "/_api/web/lists/GetByTitle('PreferencesList')/items", _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    PreferencesTabWebPart.prototype._renderUserListData = function (PrefItems) {
        for (var readItem = 0; readItem < PrefItems.length; readItem++) {
            if (PrefItems[readItem].UserName == existingUser) {
                updatePrefObj.SelectedCategories =
                    PrefItems[readItem].SelectedCategories;
                SPCategory = PrefItems[readItem].SelectedCategories.toString().split(",");
                intersectionCategory = categoriesArray.readCatArr.filter(function (e) {
                    return SPCategory.indexOf(e) > -1;
                });
                //  categoriesArray.readCatArr = intersectionCategory;
                break;
            }
        }
        console.log("Outside loop");
        console.log(intersectionCategory);
        if (renderFlag == true) {
            this.render();
            renderFlag = false;
        }
    };
    //Read Preferences from list and show selecte categories
    PreferencesTabWebPart.prototype._renderListAsync = function () {
        var _this = this;
        this._getUserInfoData().then(function (response) {
            _this._renderUserListData(response.value);
        });
        //}
    };
    PreferencesTabWebPart.prototype.showNews = function () {
        var url = "/showNews?userName=" + existingUser;
        //var url =  url = "microsoftTeams.executeDeepLink('https://teams.microsoft.com/l/entity/@(EmployeeConnect.Helper.ApplicationSettings.AppId)/Preference')"
        _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__["executeDeepLink"]("https://teams.microsoft.com/_#/apps/1744460c-4cc8-4935-9abb-8fb42acf0008/sections/currNews?slug=28:bf0fb57b-4fe9-42b2-8c9f-b996159d2963");
        location.href = url;
    };
    PreferencesTabWebPart.prototype.showET = function () {
        var url = "/ShowEnT?userName=" + existingUser;
        _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__["executeDeepLink"]("https://teams.microsoft.com/_#/apps/1744460c-4cc8-4935-9abb-8fb42acf0008/sections/EandT?slug=28:bf0fb57b-4fe9-42b2-8c9f-b996159d2963");
        location.href = url;
    };
    PreferencesTabWebPart.prototype.showTask = function () {
        var url = "/ShowTask?userName=" + existingUser;
        _microsoft_teams_js__WEBPACK_IMPORTED_MODULE_5__["executeDeepLink"]("https://teams.microsoft.com/_#/apps/1744460c-4cc8-4935-9abb-8fb42acf0008/sections/tasks?slug=28:bf0fb57b-4fe9-42b2-8c9f-b996159d2963");
        location.href = url;
    };
    PreferencesTabWebPart.prototype._saveButtonEventHandlers = function (intersectionCategoryEvent) {
        var _this = this;
        newsCategory = intersectionCategoryEvent;
        console.log(newsCategory);
        var business = document.querySelector("#Business");
        var AI = document.querySelector("#AI");
        var Design = document.querySelector("#Design");
        var Technology = document.querySelector("#Technology");
        var Media = document.querySelector("#Media");
        var Economy = document.querySelector("#Economy");
        var Market = document.querySelector("#Market");
        var Finance = document.querySelector("#Finance");
        var Art = document.querySelector("#Art");
        var Enterprise = document.querySelector("#Enterprise");
        var Creative = document.querySelector("#Creative");
        var CS = document.querySelector("#CS");
        var Health = document.querySelector("#Health");
        var Culture = document.querySelector("#Culture");
        var AnimationID = document.querySelector("#Animation");
        var Software = document.querySelector("#Software");
        var IT = document.querySelector("#IT");
        var Data = document.querySelector("#Data");
        var newsTimeB = document.querySelector("#newsTimeB");
        var entTimeB = document.querySelector("#entTimeB");
        var taskTimeB = document.querySelector("#taskTimeB");
        var newsTimeE = document.querySelector("#newsTimeE");
        var entTimeE = document.querySelector("#entTimeE");
        var taskTimeE = document.querySelector("#taskTimeE");
        var newsTimeD = document.querySelector("#newsTimeD");
        var entTimeD = document.querySelector("#entTimeD");
        // let updatedNewsTime = document.querySelector("#NewsNotificationTime");
        newsTimeD.addEventListener("click", function (event) {
            updatePrefObj.EnTNotificationTime = "10:00 AM";
            _this.updateItem(updatePrefObj.EnTNotificationTime);
        });
        entTimeD.addEventListener("click", function (event) {
            updatePrefObj.TaskNotificationTime = "10:00 AM";
            _this.updateItem(updatePrefObj.TaskNotificationTime);
        });
        entTimeB.addEventListener("click", function (event) {
            updatePrefObj.EnTNotificationTime = "10:00 AM";
            _this.updateItem(updatePrefObj.EnTNotificationTime);
        });
        taskTimeB.addEventListener("click", function (event) {
            updatePrefObj.TaskNotificationTime = "10:00 AM";
            _this.updateItem(updatePrefObj.TaskNotificationTime);
        });
        newsTimeB.addEventListener("click", function (event) {
            updatePrefObj.NewsNotificationTime = "10:00 AM";
            _this.updateItem(updatePrefObj.NewsNotificationTime);
        });
        entTimeE.addEventListener("click", function (event) {
            updatePrefObj.EnTNotificationTime = "5:00 PM";
            _this.updateItem(updatePrefObj.EnTNotificationTime);
        });
        taskTimeE.addEventListener("click", function (event) {
            updatePrefObj.TaskNotificationTime = "5:00 PM";
            _this.updateItem(updatePrefObj.TaskNotificationTime);
        });
        newsTimeE.addEventListener("click", function (event) {
            updatePrefObj.NewsNotificationTime = "5:00 PM";
            _this.updateItem(updatePrefObj.NewsNotificationTime);
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__("#newsTimeD").change(function () {
            var newsTime = jquery__WEBPACK_IMPORTED_MODULE_7__("#newsTimeD").prop("value");
            updatePrefObj.NewsNotificationTime = newsTime;
            _this.updateItem(updatePrefObj.NewsNotificationTime);
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__("#entTimeD").change(function () {
            var entTime = jquery__WEBPACK_IMPORTED_MODULE_7__("#entTimeD").prop("value");
            updatePrefObj.EnTNotificationTime = entTime;
            _this.updateItem(updatePrefObj.EnTNotificationTime);
        });
        business.addEventListener("click", function (event) {
            console.log(newsCategory);
            if (newsCategory.indexOf("Business") == -1) {
                newsCategory.push("Business");
                updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
            else {
                updatePrefObj.SelectedCategories = newsCategory;
                var index = updatePrefObj.SelectedCategories.indexOf("Business");
                updatePrefObj.SelectedCategories.splice(index, 1);
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
        });
        Economy.addEventListener("click", function (event) {
            if (newsCategory.indexOf("Economy") == -1) {
                newsCategory.push("Economy");
                updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
            else {
                var index = updatePrefObj.SelectedCategories.indexOf("Economy");
                updatePrefObj.SelectedCategories.splice(index, 1);
                //updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
        });
        Finance.addEventListener("click", function (event) {
            if (newsCategory.indexOf("Finance") == -1) {
                newsCategory.push("Finance");
                updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
            else {
                var index = updatePrefObj.SelectedCategories.indexOf("Finance");
                updatePrefObj.SelectedCategories.splice(index, 1);
                //  updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
        });
        AnimationID.addEventListener("click", function (event) {
            if (newsCategory.indexOf("AnimationID") == -1) {
                newsCategory.push("AnimationID");
                updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
            else {
                var index = updatePrefObj.SelectedCategories.indexOf("AnimationID");
                updatePrefObj.SelectedCategories.splice(index, 1);
                //updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
        });
        Software.addEventListener("click", function (event) {
            if (newsCategory.indexOf("Software") == -1) {
                newsCategory.push("Software");
                updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
            else {
                var index = updatePrefObj.SelectedCategories.indexOf("Software");
                updatePrefObj.SelectedCategories.splice(index, 1);
                // updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
        });
        Enterprise.addEventListener("click", function (event) {
            if (newsCategory.indexOf("Enterprise") == -1) {
                newsCategory.push("Enterprise");
                updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
            else {
                var index = updatePrefObj.SelectedCategories.indexOf("Enterprise");
                updatePrefObj.SelectedCategories.splice(index, 1);
                // updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
        });
        Media.addEventListener("click", function (event) {
            if (newsCategory.indexOf("Media") == -1) {
                newsCategory.push("Media");
                updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
            else {
                var index = updatePrefObj.SelectedCategories.indexOf("Media");
                updatePrefObj.SelectedCategories.splice(index, 1);
                // updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
        });
        Market.addEventListener("click", function (event) {
            if (newsCategory.indexOf("Market") == -1) {
                newsCategory.push("Market");
                updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
            else {
                var index = updatePrefObj.SelectedCategories.indexOf("Market");
                updatePrefObj.SelectedCategories.splice(index, 1);
                // updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
        });
        Creative.addEventListener("click", function (event) {
            if (newsCategory.indexOf("Creative") == -1) {
                newsCategory.push("Creative");
                updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
            else {
                var index = updatePrefObj.SelectedCategories.indexOf("Creative");
                updatePrefObj.SelectedCategories.splice(index, 1);
                // updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
        });
        Design.addEventListener("click", function (event) {
            if (newsCategory.indexOf("Design") == -1) {
                newsCategory.push("Design");
                updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
            else {
                var index = updatePrefObj.SelectedCategories.indexOf("Design");
                updatePrefObj.SelectedCategories.splice(index, 1);
                //updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
        });
        Art.addEventListener("click", function (event) {
            if (newsCategory.indexOf("Art") == -1) {
                newsCategory.push("Art");
                updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
            else {
                var index = updatePrefObj.SelectedCategories.indexOf("Art");
                updatePrefObj.SelectedCategories.splice(index, 1);
                //updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
        });
        Data.addEventListener("click", function (event) {
            if (newsCategory.indexOf("Data") == -1) {
                newsCategory.push("Data");
                updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
            else {
                var index = updatePrefObj.SelectedCategories.indexOf("Data");
                updatePrefObj.SelectedCategories.splice(index, 1);
                //updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
        });
        Culture.addEventListener("click", function (event) {
            if (newsCategory.indexOf("Culture") == -1) {
                newsCategory.push("Culture");
                updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
            else {
                var index = updatePrefObj.SelectedCategories.indexOf("Culture");
                updatePrefObj.SelectedCategories.splice(index, 1);
                // updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
        });
        Technology.addEventListener("click", function (event) {
            if (newsCategory.indexOf("Technology") == -1) {
                newsCategory.push("Technology");
                updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
            else {
                var index = updatePrefObj.SelectedCategories.indexOf("Technology");
                updatePrefObj.SelectedCategories.splice(index, 1);
                //  updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
        });
        CS.addEventListener("click", function (event) {
            if (newsCategory.indexOf("CS") == -1) {
                newsCategory.push("CS");
                updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
            else {
                var index = updatePrefObj.SelectedCategories.indexOf("CS");
                updatePrefObj.SelectedCategories.splice(index, 1);
                //updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
        });
        Health.addEventListener("click", function (event) {
            if (newsCategory.indexOf("Health") == -1) {
                newsCategory.push("Health");
                updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
            else {
                var index = updatePrefObj.SelectedCategories.indexOf("Health");
                updatePrefObj.SelectedCategories.splice(index, 1);
                //updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
        });
        IT.addEventListener("click", function (event) {
            if (newsCategory.indexOf("IT") == -1) {
                newsCategory.push("IT");
                updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
            else {
                var index = updatePrefObj.SelectedCategories.indexOf("IT");
                updatePrefObj.SelectedCategories.splice(index, 1);
                //updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
        });
        AI.addEventListener("click", function (event) {
            if (newsCategory.indexOf("AI") == -1) {
                newsCategory.push("AI");
                updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
            else {
                var index = updatePrefObj.SelectedCategories.indexOf("AI");
                updatePrefObj.SelectedCategories.splice(index, 1);
                // updatePrefObj.SelectedCategories = newsCategory;
                _this.updateItem(updatePrefObj.SelectedCategories.toString());
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__("#toggleEntTime").click(function (event) {
            if (jquery__WEBPACK_IMPORTED_MODULE_7__("#toggleEntTime").prop("checked") == true) {
                jquery__WEBPACK_IMPORTED_MODULE_7__(".radio1, #entTimeD").prop("disabled", false);
                updatePrefObj.NotifyMe = "True";
                updatePrefObj.EnTNotificationFlag = "True";
                _this.updateItem(updatePrefObj.NotifyMe);
            }
            else if (jquery__WEBPACK_IMPORTED_MODULE_7__("#toggleEntTime").prop("checked") == false) {
                jquery__WEBPACK_IMPORTED_MODULE_7__(".radio1, #entTimeD").prop("disabled", true);
                updatePrefObj.NotifyMe = "False";
                updatePrefObj.EnTNotificationFlag = "False";
                _this.updateItem(updatePrefObj.NotifyMe);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__("#toggleNews").click(function (event) {
            if (jquery__WEBPACK_IMPORTED_MODULE_7__("#toggleNews").prop("checked") == true) {
                jquery__WEBPACK_IMPORTED_MODULE_7__(".radio, #newsTimeD").prop("disabled", false);
                updatePrefObj.NewsNotifyMe = "True";
                updatePrefObj.NewsnotificationFlag = "True";
                _this.updateItem(updatePrefObj.NewsNotifyMe);
            }
            else if (jquery__WEBPACK_IMPORTED_MODULE_7__("#toggleNews").prop("checked") == false) {
                jquery__WEBPACK_IMPORTED_MODULE_7__(".radio, #newsTimeD").prop("disabled", true);
                updatePrefObj.NewsNotifyMe = "False";
                updatePrefObj.NewsnotificationFlag = "False";
                _this.updateItem(updatePrefObj.NewsNotifyMe);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__("#showNews").click(function () {
            _this.showNews();
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__("#showEnT").click(function () {
            _this.showET();
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__("#showTask").click(function () {
            _this.showTask();
        });
        //this._renderListAsync();
    };
    PreferencesTabWebPart.prototype.render = function () {
        console.log("Inside Render");
        console.log(intersectionCategory);
        newsCategory.push(intersectionCategory);
        this.domElement.innerHTML = "\n      <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].preferencesTab + "\">\n        <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].container + "\">\n          <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].row + "\">\n            <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].column1 + "\">\n              <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].title + "\">News</span>\n            </div>\n\n            <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].column2 + "\" id=\"Allcategories\">\n              <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].rules + "\">Pick 5 or more topics for news updates\n              </div>\n               <button type=\"button\" class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].showmore + "\" id=\"showNews\">Show News</button>\n\n             <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].columnheight + "\">\n                <label for=\"Business\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Business.jpg\" class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" name=\"Business\" " + (intersectionCategory.indexOf("Business") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " id=\"Business\" class=\"category\"/>\n                    <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tick + "\">\n                      <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].name + "\">Business</div>\n                    </div>\n              </div>\n\n               <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].columnheight + "\">\n                <label for=\"AI\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Travel.jpg\" class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("AI") > -1
            ? "checked"
            : console.log(intersectionCategory)) + "  name=\"AI\" id=\"AI\" class=\"category\"/>\n                    <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tick + "\">\n                      <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].name + "\">AI</div>\n                    </div>\n              </div>\n\n              <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].columnheight + "\">\n                <label for=\"Design\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Design.jpg\" class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Design") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Design\"  id=\"Design\" class=\"category\"/>\n                    <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tick + "\">\n                      <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].name + "\">Design</div>\n                    </div>\n              </div>\n\n              <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].columnheight + "\">\n                <label for=\"Technology\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Technology.jpg\" class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Technology") > -1
            ? "checked"
            : console.log(intersectionCategory)) + "  name=\"Technology\" id=\"Technology\" class=\"category\"/>\n                    <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tick + "\">\n                      <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].name + "\">Technology</div>\n                    </div>\n              </div>\n\n              <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].columnheight + "\">\n                <label for=\"Media\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Media.jpg\" class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Media") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Media\" id=\"Media\" class=\"category\"/>\n                    <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tick + "\">\n                      <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].name + "\">Media</div>\n                    </div>\n              </div>\n\n              <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].columnheight + "\">\n                <label for=\"Economy\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Economy.jpg\" class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Economy") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Economy\" id=\"Economy\" class=\"category\"/>\n                    <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tick + "\">\n                      <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].name + "\">Economy</div>\n                    </div>\n              </div>\n\n               <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].columnheight + "\">\n                <label for=\"CS\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/CS.jpg\" class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("CS") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"CS\" id=\"CS\" class=\"category\"/>\n                    <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tick + "\">\n                      <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].name + "\">CS</div>\n                    </div>\n              </div>\n\n               <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].columnheight + "\">\n                <label for=\"Market\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Market.jpg\" class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].img1 + "\">\n                  </label>\n                  <input type=\"checkbox\"  " + (intersectionCategory.indexOf("Market") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Market\" id=\"Market\" class=\"category\"/>\n                    <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tick + "\">\n                      <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].name + "\">Market</div>\n                    </div>\n              </div>\n\n              <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].columnheight + "\">\n                <label for=\"Finance\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Finance.jpg\" class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Finance") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Finance\" id=\"Finance\" class=\"category\"/>\n                    <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tick + "\">\n                      <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].name + "\">Finance</div>\n                    </div>\n              </div>\n               <br/>\n\n              <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].columnheight + "\">\n                <label for=\"Enterprise\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Enterprise.jpg\" class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Enterprise") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Enterprise\" id=\"Enterprise\" class=\"category\"/>\n                    <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tick + "\">\n                      <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].name + "\">Enterprise</div>\n                    </div>\n              </div>\n              <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].columnheight + "\">\n                <label for=\"Software\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Software.jpg\" class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Software") > -1
            ? "checked"
            : console.log(intersectionCategory)) + "  name=\"Software\" id=\"Software\" class=\"category\"/>\n                    <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tick + "\">\n                      <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].name + "\">Software</div>\n                    </div>\n              </div>\n              <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].columnheight + "\">\n                <label for=\"Art\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Art.jpg\" class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Art") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Art\" id=\"Art\" class=\"category\"/>\n                    <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tick + "\">\n                      <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].name + "\">Art</div>\n                    </div>\n              </div>\n\n              <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].columnheight + "\">\n                <label for=\"Animation\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Animation.gif\" class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Animation") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Animation\" id=\"Animation\" class=\"category\"/>\n                    <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tick + "\">\n                      <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].name + "\">Animation</div>\n                    </div>\n              </div>\n\n               <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].columnheight + "\">\n                <label for=\"Culture\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Culture.jpg\" class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Culture") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Culture\" id=\"Culture\" class=\"category\"/>\n                    <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tick + "\">\n                      <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].name + "\">Culture</div>\n                    </div>\n              </div>\n\n               <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].columnheight + "\">\n                <label for=\"Health\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Health.jpg\" class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Health") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Health\" id=\"Health\" class=\"category\"/>\n                    <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tick + "\">\n                      <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].name + "\">Health</div>\n                    </div>\n              </div>\n\n              <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].columnheight + "\">\n                <label for=\"Creative\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Creative.png\" class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Creative") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Creative\" id=\"Creative\" class=\"category\"/>\n                    <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tick + "\">\n                      <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].name + "\">Creative</div>\n                    </div>\n              </div>\n\n              <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].columnheight + "\">\n                <label for=\"IT\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/IT.jpg\" class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("IT") > -1
            ? "checked"
            : console.log(intersectionCategory)) + "  name=\"IT\" id=\"IT\" class=\"category\"/>\n                    <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tick + "\">\n                      <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].name + "\">IT</div>\n                    </div>\n              </div>\n              <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].columnheight + "\">\n                <label for=\"Data\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Data.jpg\" class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Data") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Data\" id=\"Data\" class=\"category\"/>\n                    <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tick + "\">\n                      <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].name + "\">Data</div>\n                    </div>\n              </div>\n              <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].explore + "\">Explore more categories</div>\n              <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].switcht + "\">\n              <label class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].switch + "\">\n                <input type=\"checkbox\" class=\"toggleClassNews\" checked id=\"toggleNews\"/>\n                <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].slider + "\"></span>\n              </label>\n              <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].newsupdates + "\">Send notifications about news updates</span>\n            </div>\n            <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].notify + "\"  id=\"notifyNews\">Notify me at</div>\n\n            <form class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].allradio + "\" id=\"radioButtonTask\">\n              <label class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].radiolabel + "\">\n                <input type=\"radio\" class=\"radio\" name=\"radio\" value=\"10:00 AM\" id=\"newsTimeB\"/>\n                <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].textalign + "\">Beginning of the day</span>\n                <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].checkmark + "\"></span>\n              </label>\n              <label class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].radiolabel + "\">\n                <input type=\"radio\" class=\"radio\" name=\"radio\" id=\"newsTimeE\"/>\n                <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].textalign + "\">End of the day</span>\n                <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].checkmark + "\"></span>\n              </label>\n              <label class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].radiolabel + "\">\n                <input type=\"radio\" class=\"radio\" checked name=\"radio\"/>\n                <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].textalign + "\">Set a preferred time </span>\n                <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].checkmark + "\"></span>\n              </label>\n              <select class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].datecontrol + "\" id=\"newsTimeD\">\n                <option selected>9:00 am</option>\n                <option>10:00 am</option>\n                <option>11:00 am</option>\n                <option>12:00 am</option>\n                <option>1:00 pm</option>\n                <option>2:00 pm</option>\n                <option>3:00 pm</option>\n                <option>4:00 pm</option>\n                <option>5:00 pm</option>\n              </select>\n              <span class=\"chevron-down\"></span>  <!--added here-->\n            </form><br/>\n\n              </div>\n          </div>\n\n            <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].row2 + "\">\n            <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].column1 + "\">\n              <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].title + "\">Events & trainings</span>\n            </div>\n\n <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].column2 + "\">\n  <button type=\"button\" class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].showmore + "\" id=\"showEnT\">Show Events & trainings</button>\n            <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].switcht + "\">\n              <label class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].switch + "\">\n                <input type=\"checkbox\" class=\"toggleEntTimeClass\" checked id=\"toggleEntTime\"/>\n                <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].slider + "\"></span>\n              </label>\n              <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].newsupdates + "\">Send notifications about new events & training</span>\n            </div>\n            <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].notify + "\">Notify me at</div>\n            <form class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].allradio + "\">\n              <label class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].radiolabel + "\">\n                <input type=\"radio\" name=\"radio\"  value=\"5:00 PM\" id=\"entTimeB\" class=\"radio1\"/>\n                <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].textalign + "\">Beginning of the day</span>\n                <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].checkmark + "\"></span>\n              </label>\n              <label class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].radiolabel + "\">\n                <input type=\"radio\" name=\"radio\" value=\"10:00 PM\" id=\"entTimeE\" class=\"radio1\"/>\n                <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].textalign + "\">End of the day</span>\n                <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].checkmark + "\"></span>\n              </label>\n              <label class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].radiolabel + "\">\n                <input type=\"radio\" checked name=\"radio\" class=\"radio1\"/>\n                <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].textalign + "\">Set a preferred time </span>\n                <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].checkmark + "\"></span>\n              </label>\n              <select class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].datecontrol + "\" id=\"entTimeD\">\n              <option selected>9:00 am</option>\n              <option>10:00 am</option>\n              <option>11:00 am</option>\n              <option>12:00 am</option>\n              <option>1:00 pm</option>\n              <option>2:00 pm</option>\n              <option>3:00 pm</option>\n              <option>4:00 pm</option>\n              <option>5:00 pm</option>\n              </select>\n              <span class=\"chevron-down\"></span>  <!--added here-->\n            </form> <br/>\n\n            </div>\n              </div>\n\n              <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].row3 + "\">\n            <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].column1 + "\">\n              <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].title + "\">Task reminders</span>\n            </div>\n\n <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].column2 + "\">\n  <button type=\"button\" class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].showmore + "\" id=\"showTask\">Show Task reminders</button>\n            <div class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].notify + "\" id=\"notifyTask\">Notify me at</div>\n\n            <form class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].allradio + "\">\n              <label class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].radiolabel + "\">\n                <input type=\"radio\" checked name=\"radio\"  value=\"10:00 PM\" id=\"taskTimeB\"/>\n                <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].textalign + "\">Beginning of the day</span>\n                <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].checkmark + "\"></span>\n              </label>\n              <label class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].radiolabel + "\">\n                <input type=\"radio\" name=\"radio\"  value=\"5:00 PM\" id=\"taskTimeE\"/>\n                <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].textalign + "\">End of the day</span>\n                <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].checkmark + "\"></span>\n              </label>\n              <label class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].radiolabel + "\">\n                <input type=\"radio\" name=\"radio\"/>\n                <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].textalign + "\">Set a preferred time </span>\n                <span class=\"" + _PreferenceWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].checkmark + "\"></span>\n              </label>\n            </form><br/>\n\n            </div>\n              </div>\n\n            </div>\n\n        </div>\n      </div>\n      ";
        this._saveButtonEventHandlers(intersectionCategory);
    };
    Object.defineProperty(PreferencesTabWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Version"].parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    PreferencesTabWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: PreferenceWebPartStrings__WEBPACK_IMPORTED_MODULE_4__["PropertyPaneDescription"]
                    },
                    groups: [
                        {
                            groupName: PreferenceWebPartStrings__WEBPACK_IMPORTED_MODULE_4__["BasicGroupName"],
                            groupFields: [
                                Object(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__["PropertyPaneTextField"])("description", {
                                    label: PreferenceWebPartStrings__WEBPACK_IMPORTED_MODULE_4__["DescriptionFieldLabel"]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return PreferencesTabWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (PreferencesTabWebPart);


/***/ }),

/***/ "./lib/webparts/preference/PreferenceWebPart.module.css":
/*!**************************************************************!*\
  !*** ./lib/webparts/preference/PreferenceWebPart.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!./PreferenceWebPart.module.css */ "./node_modules/css-loader/index.js?!./lib/webparts/preference/PreferenceWebPart.module.css");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "./lib/webparts/preference/PreferenceWebPart.module.scss.js":
/*!******************************************************************!*\
  !*** ./lib/webparts/preference/PreferenceWebPart.module.scss.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./PreferenceWebPart.module.css */ "./lib/webparts/preference/PreferenceWebPart.module.css");
var styles = {
    preferencesTab: 'preferencesTab_318b4111',
    container: 'container_318b4111',
    row: 'row_318b4111',
    row2: 'row2_318b4111',
    row3: 'row3_318b4111',
    column1: 'column1_318b4111',
    'ms-Grid': 'ms-Grid_318b4111',
    column2: 'column2_318b4111',
    rules: 'rules_318b4111',
    title: 'title_318b4111',
    subTitle: 'subTitle_318b4111',
    showmore: 'showmore_318b4111',
    columnheight: 'columnheight_318b4111',
    img1: 'img1_318b4111',
    tick: 'tick_318b4111',
    name: 'name_318b4111',
    explore: 'explore_318b4111',
    switcht: 'switcht_318b4111',
    switch: 'switch_318b4111',
    switchinput: 'switchinput_318b4111',
    slider: 'slider_318b4111',
    newsupdates: 'newsupdates_318b4111',
    notify: 'notify_318b4111',
    allradio: 'allradio_318b4111',
    radiolabel: 'radiolabel_318b4111',
    checkmark: 'checkmark_318b4111',
    textalign: 'textalign_318b4111',
    datecontrol: 'datecontrol_318b4111'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


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

/***/ "./node_modules/css-loader/index.js?!./lib/webparts/preference/PreferenceWebPart.module.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./lib/webparts/preference/PreferenceWebPart.module.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:Teams Assets;src:url(https://github.com/Abhijit-MSFT/EmployeeConnect/blob/master/SharepointComponents/TaskTab/dist/fonts/TeamsAssets-Light.woff) format(\"woff\"),url(https://github.com/Abhijit-MSFT/EmployeeConnect/blob/master/SharepointComponents/TaskTab/dist/fonts/TeamsAssets-Light.woff) format(\"woff2\");font-style:normal}.preferencesTab_318b4111 .container_318b4111{width:100%;padding:15px 0 0 15px;margin:auto}.preferencesTab_318b4111 .row2_318b4111,.preferencesTab_318b4111 .row_318b4111:first-child{margin:0 -8px;-webkit-box-sizing:border-box;box-sizing:border-box;color:\"[theme:white, default: #ffffff]\";padding:20px;border-bottom:5px solid #f3f2f1;margin:0!important}.preferencesTab_318b4111 .row2_318b4111:after,.preferencesTab_318b4111 .row2_318b4111:before,.preferencesTab_318b4111 .row_318b4111:first-child:after,.preferencesTab_318b4111 .row_318b4111:first-child:before{display:table;content:\"\";line-height:0}.preferencesTab_318b4111 .row2_318b4111:after,.preferencesTab_318b4111 .row_318b4111:first-child:after{clear:both}.preferencesTab_318b4111 .row3_318b4111{margin:0 -8px;-webkit-box-sizing:border-box;box-sizing:border-box;color:\"[theme:white, default: #ffffff]\";padding:20px;margin:0!important}.preferencesTab_318b4111 .row3_318b4111:after,.preferencesTab_318b4111 .row3_318b4111:before{display:table;content:\"\";line-height:0}.preferencesTab_318b4111 .row3_318b4111:after{clear:both}.preferencesTab_318b4111 .column1_318b4111{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}[dir=ltr] .preferencesTab_318b4111 .column1_318b4111{float:left}[dir=rtl] .preferencesTab_318b4111 .column1_318b4111{float:right}.preferencesTab_318b4111 .column1_318b4111 .ms-Grid_318b4111{padding:0}@media (min-width:640px){.preferencesTab_318b4111 .column1_318b4111{width:16.666666666666664%}}.preferencesTab_318b4111 .column2_318b4111{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}[dir=ltr] .preferencesTab_318b4111 .column2_318b4111{float:left}[dir=rtl] .preferencesTab_318b4111 .column2_318b4111{float:right}.preferencesTab_318b4111 .column2_318b4111 .ms-Grid_318b4111{padding:0}@media (min-width:640px){.preferencesTab_318b4111 .column2_318b4111{width:83.33333333333334%}}.preferencesTab_318b4111 .rules_318b4111{color:#969595;font-size:16px;font-weight:400;font-family:Segoe UI}.preferencesTab_318b4111 .title_318b4111{font-size:21px;font-weight:100;color:#000}.preferencesTab_318b4111 .subTitle_318b4111{font-size:17px;font-weight:300;color:\"[theme:white, default: #ffffff]\"}.preferencesTab_318b4111 .showmore_318b4111{height:25px;width:auto;color:#fff;background-color:#6264a7;font-family:Segoe UI;font-size:12px;font-weight:500;text-align:center;border:1px solid rgba(37,36,36,.15);border-radius:2px;-webkit-box-shadow:0 2px 4px -.75px rgba(0,0,0,.1);box-shadow:0 2px 4px -.75px rgba(0,0,0,.1);float:right}.preferencesTab_318b4111 .columnheight_318b4111{position:relative;top:10px;display:inline}.preferencesTab_318b4111 .img1_318b4111{display:inline;height:90px;width:90px;border-radius:10px;cursor:pointer;opacity:.9}.preferencesTab_318b4111 .tick_318b4111{position:absolute;top:0;left:5px;height:100%;width:calc(100% - 20px);padding:0 10px;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;border-radius:500px}.preferencesTab_318b4111 .name_318b4111{position:relative;color:#fff;top:20px;float:left;font-weight:400;font-family:Segoe UI;outline-color:#000;font-size:14px}.preferencesTab_318b4111 .columnheight_318b4111 input:checked+.tick_318b4111:after{content:\"\\2713\";position:absolute;left:100%;width:22%;height:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-148%);color:#fff;background-color:#7fba00;font-size:12px;text-align:center;border-radius:50%}.preferencesTab_318b4111 input{display:none}.preferencesTab_318b4111 .explore_318b4111{color:#6264a7;position:relative;padding-top:10px;cursor:pointer;font-weight:500}.preferencesTab_318b4111 .switcht_318b4111{padding-top:10px}.preferencesTab_318b4111 .switch_318b4111{position:relative;display:inline-block;width:48px;height:25px}.preferencesTab_318b4111 .switchinput_318b4111{opacity:0;width:0;height:0}.preferencesTab_318b4111 input:checked+.slider_318b4111{background-color:#92c353}.preferencesTab_318b4111 input:checked+.slider_318b4111:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px)}.preferencesTab_318b4111 .slider_318b4111:before{position:absolute;content:\"\";height:18px;width:18px;left:2px;bottom:4px;background-color:#fff;-webkit-transition:.4s;transition:.4s;border-radius:50%}.preferencesTab_318b4111 .slider_318b4111{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s;border-radius:50px}.preferencesTab_318b4111 .newsupdates_318b4111{position:relative;font-size:16px;font-weight:500;margin-left:5px;color:#000;vertical-align:top}.preferencesTab_318b4111 .notify_318b4111{position:relative;margin-left:50px;color:#5f5e5e;font-family:Segoe UI}.preferencesTab_318b4111 .allradio_318b4111{position:relative;top:15px;margin-left:50px}.preferencesTab_318b4111 .radiolabel_318b4111{display:block;position:relative;padding-left:25px;cursor:pointer;font-size:16px}.preferencesTab_318b4111 .radiolabel_318b4111 input{position:absolute;opacity:0;cursor:pointer;border:1px solid}.preferencesTab_318b4111 .checkmark_318b4111{position:absolute;top:0;left:0;height:15px;width:15px;background-color:#fff;border-radius:50%}.preferencesTab_318b4111 .radiolabel_318b4111 input:checked~.checkmark_318b4111{background-color:#6264a7}.preferencesTab_318b4111 input[type=checkbox],.preferencesTab_318b4111 input[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;padding:0}.preferencesTab_318b4111 .radiolabel_318b4111 .checkmark_318b4111:after{top:9px;left:9px;width:8px;height:8px;border-radius:50%}.preferencesTab_318b4111 .radiolabel_318b4111 input~.checkmark_318b4111{border:1px solid grey}.preferencesTab_318b4111 span.textalign_318b4111{position:relative;bottom:5px;color:#aeadad}.preferencesTab_318b4111 :checked+.textalign_318b4111{color:#000}.preferencesTab_318b4111 .datecontrol_318b4111{width:200px;height:35px;padding-left:10px;-webkit-appearance:none;-moz-appearance:none;-o-appearance:none;appearance:none;background-color:#f3f2f1!important;color:#000;border-radius:3px;position:relative;left:14px;border:none;cursor:pointer}@media (max-width:425px){.preferencesTab_318b4111 button{display:none}}", ""]);

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

/***/ "PreferenceWebPartStrings":
/*!*******************************************!*\
  !*** external "PreferenceWebPartStrings" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_PreferenceWebPartStrings__;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ })

/******/ })});;
//# sourceMappingURL=preference-web-part.js.map