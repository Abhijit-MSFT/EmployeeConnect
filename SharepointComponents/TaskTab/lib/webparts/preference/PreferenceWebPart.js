var __extends = (this && this.__extends) || (function () {
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
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart, PropertyPaneTextField } from "@microsoft/sp-webpart-base";
import { SPHttpClient } from "@microsoft/sp-http";
import styles from "./PreferenceWebPart.module.scss";
import * as strings from "PreferenceWebPartStrings";
import * as microsoftTeams from "@microsoft/teams-js";
import { SPComponentLoader } from "@microsoft/sp-loader";
import * as $ from "jquery";
microsoftTeams.initialize();
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
        SPComponentLoader.loadCss("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
        $(document).ready(function () {
            $(".toggleClassNews").click(function () {
                debugger;
                console.log($(_this).prop("checked"));
                if ($(".toggleClassNews").prop("checked") == true) {
                    $(".radio, #newsTimeD").prop("disabled", false);
                }
                else if ($(".toggleClassNews").prop("checked") == false) {
                    $(".radio, #newsTimeD").prop("disabled", true);
                }
            });
            $(".toggleEntTimeClass").click(function () {
                debugger;
                console.log($(".toggleEntTimeClass").prop("checked"));
                if ($(".toggleEntTimeClass").prop("checked") == true) {
                    $(".radio1, #entTimeD").prop("disabled", false);
                }
                else if ($(".toggleEntTimeClass").prop("checked") == false) {
                    $(".radio1, #entTimeD").prop("disabled", true);
                }
            });
            _this._renderListAsync();
        });
        microsoftTeams.initialize();
        microsoftTeams.getContext(function (context) {
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
                .get(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('PreferencesList')/items?$orderby=Id desc&$top=1&$select=id", SPHttpClient.configurations.v1, {
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
            return _this.context.spHttpClient.get(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('PreferencesList')/items(" + latestItemId + ")?$select=Title,Id", SPHttpClient.configurations.v1, {
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
                .post(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists(guid%27e8937172-f3f3-478e-97bb-d5699f8d8945%27)/items(" + latestItemId + ")", SPHttpClient.configurations.v1, {
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
            .get(requestURL + "/_api/web/lists/GetByTitle('PreferencesList')/items", SPHttpClient.configurations.v1)
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
        microsoftTeams.executeDeepLink("https://teams.microsoft.com/_#/apps/1744460c-4cc8-4935-9abb-8fb42acf0008/sections/currNews?slug=28:bf0fb57b-4fe9-42b2-8c9f-b996159d2963");
        location.href = url;
    };
    PreferencesTabWebPart.prototype.showET = function () {
        var url = "/ShowEnT?userName=" + existingUser;
        microsoftTeams.executeDeepLink("https://teams.microsoft.com/_#/apps/1744460c-4cc8-4935-9abb-8fb42acf0008/sections/EandT?slug=28:bf0fb57b-4fe9-42b2-8c9f-b996159d2963");
        location.href = url;
    };
    PreferencesTabWebPart.prototype.showTask = function () {
        var url = "/ShowTask?userName=" + existingUser;
        microsoftTeams.executeDeepLink("https://teams.microsoft.com/_#/apps/1744460c-4cc8-4935-9abb-8fb42acf0008/sections/tasks?slug=28:bf0fb57b-4fe9-42b2-8c9f-b996159d2963");
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
        $("#newsTimeD").change(function () {
            var newsTime = $("#newsTimeD").prop("value");
            updatePrefObj.NewsNotificationTime = newsTime;
            _this.updateItem(updatePrefObj.NewsNotificationTime);
        });
        $("#entTimeD").change(function () {
            var entTime = $("#entTimeD").prop("value");
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
        $("#toggleEntTime").click(function (event) {
            if ($("#toggleEntTime").prop("checked") == true) {
                $(".radio1, #entTimeD").prop("disabled", false);
                updatePrefObj.NotifyMe = "True";
                updatePrefObj.EnTNotificationFlag = "True";
                _this.updateItem(updatePrefObj.NotifyMe);
            }
            else if ($("#toggleEntTime").prop("checked") == false) {
                $(".radio1, #entTimeD").prop("disabled", true);
                updatePrefObj.NotifyMe = "False";
                updatePrefObj.EnTNotificationFlag = "False";
                _this.updateItem(updatePrefObj.NotifyMe);
            }
        });
        $("#toggleNews").click(function (event) {
            if ($("#toggleNews").prop("checked") == true) {
                $(".radio, #newsTimeD").prop("disabled", false);
                updatePrefObj.NewsNotifyMe = "True";
                updatePrefObj.NewsnotificationFlag = "True";
                _this.updateItem(updatePrefObj.NewsNotifyMe);
            }
            else if ($("#toggleNews").prop("checked") == false) {
                $(".radio, #newsTimeD").prop("disabled", true);
                updatePrefObj.NewsNotifyMe = "False";
                updatePrefObj.NewsnotificationFlag = "False";
                _this.updateItem(updatePrefObj.NewsNotifyMe);
            }
        });
        $("#showNews").click(function () {
            _this.showNews();
        });
        $("#showEnT").click(function () {
            _this.showET();
        });
        $("#showTask").click(function () {
            _this.showTask();
        });
        //this._renderListAsync();
    };
    PreferencesTabWebPart.prototype.render = function () {
        console.log("Inside Render");
        console.log(intersectionCategory);
        newsCategory.push(intersectionCategory);
        this.domElement.innerHTML = "\n      <div class=\"" + styles.preferencesTab + "\">\n        <div class=\"" + styles.container + "\">\n          <div class=\"" + styles.row + "\">\n            <div class=\"" + styles.column1 + "\">\n              <span class=\"" + styles.title + "\">News</span>\n            </div>\n\n            <div class=\"" + styles.column2 + "\" id=\"Allcategories\">\n              <div class=\"" + styles.rules + "\">Pick 5 or more topics for news updates\n              </div>\n               <button type=\"button\" class=\"" + styles.showmore + "\" id=\"showNews\">Show News</button>\n\n             <div class=\"" + styles.columnheight + "\">\n                <label for=\"Business\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Business.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" name=\"Business\" " + (intersectionCategory.indexOf("Business") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " id=\"Business\" class=\"category\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Business</div>\n                    </div>\n              </div>\n\n               <div class=\"" + styles.columnheight + "\">\n                <label for=\"AI\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Travel.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("AI") > -1
            ? "checked"
            : console.log(intersectionCategory)) + "  name=\"AI\" id=\"AI\" class=\"category\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">AI</div>\n                    </div>\n              </div>\n\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Design\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Design.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Design") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Design\"  id=\"Design\" class=\"category\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Design</div>\n                    </div>\n              </div>\n\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Technology\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Technology.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Technology") > -1
            ? "checked"
            : console.log(intersectionCategory)) + "  name=\"Technology\" id=\"Technology\" class=\"category\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Technology</div>\n                    </div>\n              </div>\n\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Media\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Media.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Media") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Media\" id=\"Media\" class=\"category\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Media</div>\n                    </div>\n              </div>\n\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Economy\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Economy.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Economy") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Economy\" id=\"Economy\" class=\"category\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Economy</div>\n                    </div>\n              </div>\n\n               <div class=\"" + styles.columnheight + "\">\n                <label for=\"CS\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/CS.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("CS") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"CS\" id=\"CS\" class=\"category\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">CS</div>\n                    </div>\n              </div>\n\n               <div class=\"" + styles.columnheight + "\">\n                <label for=\"Market\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Market.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\"  " + (intersectionCategory.indexOf("Market") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Market\" id=\"Market\" class=\"category\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Market</div>\n                    </div>\n              </div>\n\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Finance\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Finance.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Finance") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Finance\" id=\"Finance\" class=\"category\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Finance</div>\n                    </div>\n              </div>\n               <br/>\n\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Enterprise\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Enterprise.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Enterprise") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Enterprise\" id=\"Enterprise\" class=\"category\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Enterprise</div>\n                    </div>\n              </div>\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Software\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Software.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Software") > -1
            ? "checked"
            : console.log(intersectionCategory)) + "  name=\"Software\" id=\"Software\" class=\"category\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Software</div>\n                    </div>\n              </div>\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Art\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Art.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Art") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Art\" id=\"Art\" class=\"category\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Art</div>\n                    </div>\n              </div>\n\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Animation\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Animation.gif\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Animation") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Animation\" id=\"Animation\" class=\"category\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Animation</div>\n                    </div>\n              </div>\n\n               <div class=\"" + styles.columnheight + "\">\n                <label for=\"Culture\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Culture.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Culture") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Culture\" id=\"Culture\" class=\"category\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Culture</div>\n                    </div>\n              </div>\n\n               <div class=\"" + styles.columnheight + "\">\n                <label for=\"Health\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Health.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Health") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Health\" id=\"Health\" class=\"category\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Health</div>\n                    </div>\n              </div>\n\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Creative\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Creative.png\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Creative") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Creative\" id=\"Creative\" class=\"category\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Creative</div>\n                    </div>\n              </div>\n\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"IT\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/IT.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("IT") > -1
            ? "checked"
            : console.log(intersectionCategory)) + "  name=\"IT\" id=\"IT\" class=\"category\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">IT</div>\n                    </div>\n              </div>\n              <div class=\"" + styles.columnheight + "\">\n                <label for=\"Data\">\n                    <img src=\"https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Data.jpg\" class=\"" + styles.img1 + "\">\n                  </label>\n                  <input type=\"checkbox\" " + (intersectionCategory.indexOf("Data") > -1
            ? "checked"
            : console.log(intersectionCategory)) + " name=\"Data\" id=\"Data\" class=\"category\"/>\n                    <div class=\"" + styles.tick + "\">\n                      <div class=\"" + styles.name + "\">Data</div>\n                    </div>\n              </div>\n              <div class=\"" + styles.explore + "\">Explore more categories</div>\n              <div class=\"" + styles.switcht + "\">\n              <label class=\"" + styles.switch + "\">\n                <input type=\"checkbox\" class=\"toggleClassNews\" checked id=\"toggleNews\"/>\n                <span class=\"" + styles.slider + "\"></span>\n              </label>\n              <span class=\"" + styles.newsupdates + "\">Send notifications about news updates</span>\n            </div>\n            <div class=\"" + styles.notify + "\"  id=\"notifyNews\">Notify me at</div>\n\n            <form class=\"" + styles.allradio + "\" id=\"radioButtonTask\">\n              <label class=\"" + styles.radiolabel + "\">\n                <input type=\"radio\" class=\"radio\" name=\"radio\" value=\"10:00 AM\" id=\"newsTimeB\"/>\n                <span class=\"" + styles.textalign + "\">Beginning of the day</span>\n                <span class=\"" + styles.checkmark + "\"></span>\n              </label>\n              <label class=\"" + styles.radiolabel + "\">\n                <input type=\"radio\" class=\"radio\" name=\"radio\" id=\"newsTimeE\"/>\n                <span class=\"" + styles.textalign + "\">End of the day</span>\n                <span class=\"" + styles.checkmark + "\"></span>\n              </label>\n              <label class=\"" + styles.radiolabel + "\">\n                <input type=\"radio\" class=\"radio\" checked name=\"radio\"/>\n                <span class=\"" + styles.textalign + "\">Set a preferred time </span>\n                <span class=\"" + styles.checkmark + "\"></span>\n              </label>\n              <select class=\"" + styles.datecontrol + "\" id=\"newsTimeD\">\n                <option selected>9:00 am</option>\n                <option>10:00 am</option>\n                <option>11:00 am</option>\n                <option>12:00 am</option>\n                <option>1:00 pm</option>\n                <option>2:00 pm</option>\n                <option>3:00 pm</option>\n                <option>4:00 pm</option>\n                <option>5:00 pm</option>\n              </select>\n              <span class=\"chevron-down\"></span>  <!--added here-->\n            </form><br/>\n\n              </div>\n          </div>\n\n            <div class=\"" + styles.row2 + "\">\n            <div class=\"" + styles.column1 + "\">\n              <span class=\"" + styles.title + "\">Events & trainings</span>\n            </div>\n\n <div class=\"" + styles.column2 + "\">\n  <button type=\"button\" class=\"" + styles.showmore + "\" id=\"showEnT\">Show Events & trainings</button>\n            <div class=\"" + styles.switcht + "\">\n              <label class=\"" + styles.switch + "\">\n                <input type=\"checkbox\" class=\"toggleEntTimeClass\" checked id=\"toggleEntTime\"/>\n                <span class=\"" + styles.slider + "\"></span>\n              </label>\n              <span class=\"" + styles.newsupdates + "\">Send notifications about new events & training</span>\n            </div>\n            <div class=\"" + styles.notify + "\">Notify me at</div>\n            <form class=\"" + styles.allradio + "\">\n              <label class=\"" + styles.radiolabel + "\">\n                <input type=\"radio\" name=\"radio\"  value=\"5:00 PM\" id=\"entTimeB\" class=\"radio1\"/>\n                <span class=\"" + styles.textalign + "\">Beginning of the day</span>\n                <span class=\"" + styles.checkmark + "\"></span>\n              </label>\n              <label class=\"" + styles.radiolabel + "\">\n                <input type=\"radio\" name=\"radio\" value=\"10:00 PM\" id=\"entTimeE\" class=\"radio1\"/>\n                <span class=\"" + styles.textalign + "\">End of the day</span>\n                <span class=\"" + styles.checkmark + "\"></span>\n              </label>\n              <label class=\"" + styles.radiolabel + "\">\n                <input type=\"radio\" checked name=\"radio\" class=\"radio1\"/>\n                <span class=\"" + styles.textalign + "\">Set a preferred time </span>\n                <span class=\"" + styles.checkmark + "\"></span>\n              </label>\n              <select class=\"" + styles.datecontrol + "\" id=\"entTimeD\">\n              <option selected>9:00 am</option>\n              <option>10:00 am</option>\n              <option>11:00 am</option>\n              <option>12:00 am</option>\n              <option>1:00 pm</option>\n              <option>2:00 pm</option>\n              <option>3:00 pm</option>\n              <option>4:00 pm</option>\n              <option>5:00 pm</option>\n              </select>\n              <span class=\"chevron-down\"></span>  <!--added here-->\n            </form> <br/>\n\n            </div>\n              </div>\n\n              <div class=\"" + styles.row3 + "\">\n            <div class=\"" + styles.column1 + "\">\n              <span class=\"" + styles.title + "\">Task reminders</span>\n            </div>\n\n <div class=\"" + styles.column2 + "\">\n  <button type=\"button\" class=\"" + styles.showmore + "\" id=\"showTask\">Show Task reminders</button>\n            <div class=\"" + styles.notify + "\" id=\"notifyTask\">Notify me at</div>\n\n            <form class=\"" + styles.allradio + "\">\n              <label class=\"" + styles.radiolabel + "\">\n                <input type=\"radio\" checked name=\"radio\"  value=\"10:00 PM\" id=\"taskTimeB\"/>\n                <span class=\"" + styles.textalign + "\">Beginning of the day</span>\n                <span class=\"" + styles.checkmark + "\"></span>\n              </label>\n              <label class=\"" + styles.radiolabel + "\">\n                <input type=\"radio\" name=\"radio\"  value=\"5:00 PM\" id=\"taskTimeE\"/>\n                <span class=\"" + styles.textalign + "\">End of the day</span>\n                <span class=\"" + styles.checkmark + "\"></span>\n              </label>\n              <label class=\"" + styles.radiolabel + "\">\n                <input type=\"radio\" name=\"radio\"/>\n                <span class=\"" + styles.textalign + "\">Set a preferred time </span>\n                <span class=\"" + styles.checkmark + "\"></span>\n              </label>\n            </form><br/>\n\n            </div>\n              </div>\n\n            </div>\n\n        </div>\n      </div>\n      ";
        this._saveButtonEventHandlers(intersectionCategory);
    };
    Object.defineProperty(PreferencesTabWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    PreferencesTabWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField("description", {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return PreferencesTabWebPart;
}(BaseClientSideWebPart));
export default PreferencesTabWebPart;
//# sourceMappingURL=PreferenceWebPart.js.map