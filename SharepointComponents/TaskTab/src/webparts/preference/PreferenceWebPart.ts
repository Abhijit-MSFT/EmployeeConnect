//Tarak File
import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";
import {
  SPHttpClient,
  SPHttpClientResponse,
  SPHttpClientConfiguration
} from "@microsoft/sp-http";
import styles from "./PreferenceWebPart.module.scss";
import * as strings from "PreferenceWebPartStrings";
import * as microsoftTeams from "@microsoft/teams-js";
import { SPComponentLoader } from "@microsoft/sp-loader";
import * as $ from "jquery";
import { string, func, bool } from "prop-types";
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
export interface IPreferencesTabWebPartProps {
  description: string;
  listName: string;
}

export interface PreferenceModel {
  value: userInfo[];
}
var existingUser: string;
export interface userInfo {
  UserName: string;
  Uni_ID: string;
  TenantID: string;
  ServiceURL: string;
  SelectedCategories: [""];
  NotificationFlag: string;
  NotificaitionTime: string;
  NotifyMe: string;
  Item: string;
  EnTNotificationTime: string;
  NewsNotificationTime: string;
  TaskNotificationTime: string;
  EnTNotificationFlag: string;
  NewsnotificationFlag: string;
  // TaskNotificationFlag: string;
  NewsNotifyMe: string;
  TaskNotifyMe: string;
}
var SPCategory: any;
var intersectionCategory = ["Business"];
let categoriesArray = {
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
let renderFlag = true;

export default class PreferencesTabWebPart extends BaseClientSideWebPart<
  IPreferencesTabWebPartProps
> {
  public constructor() {
    super();
    SPComponentLoader.loadCss(
      "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    );

    $(document).ready(() => {
      $(".toggleClassNews").click(() => {
        debugger;
        console.log($(this).prop("checked"));
        if ($(".toggleClassNews").prop("checked") == true) {
          $(".radio, #newsTimeD").prop("disabled", false);
        } else if ($(".toggleClassNews").prop("checked") == false) {
          $(".radio, #newsTimeD").prop("disabled", true);
        }
      });

      $(".toggleEntTimeClass").click(() => {
        debugger;
        console.log($(".toggleEntTimeClass").prop("checked"));
        if ($(".toggleEntTimeClass").prop("checked") == true) {
          $(".radio1, #entTimeD").prop("disabled", false);
        } else if ($(".toggleEntTimeClass").prop("checked") == false) {
          $(".radio1, #entTimeD").prop("disabled", true);
        }
      });
      this._renderListAsync();
    });

    microsoftTeams.initialize();
    microsoftTeams.getContext(context => {
      updatePrefObj.UserName = context.userPrincipalName;
      updatePrefObj.TenantID = context.userObjectId;
      updatePrefObj.Uni_ID = context.tid;
      existingUser = updatePrefObj.UserName;
    });
    //this._renderListAsync();
  }

  public getLatestItemId(): Promise<number> {
    return new Promise<number>(
      (
        resolve: (itemId: number) => void,
        reject: (error: any) => void
      ): void => {
        this.context.spHttpClient
          .get(
            `${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('PreferencesList')/items?$orderby=Id desc&$top=1&$select=id`,
            SPHttpClient.configurations.v1,
            {
              headers: {
                Accept: "application/json;odata=nometadata",
                "odata-version": ""
              }
            }
          )
          .then(
            (
              response: SPHttpClientResponse
            ): Promise<{ value: { Id: number }[] }> => {
              return response.json();
            },
            (error: any): void => {
              reject(error);
            }
          )
          .then((response: { value: { Id: number }[] }): void => {
            if (response.value.length === 0) {
              resolve(-1);
            } else {
              resolve(response.value[0].Id);
            }
          });
      }
    );
  }

  //Update preferences data
  public updateItem(updateObj): void {
    let latestItemId: number = undefined;
    this.getLatestItemId()
      .then(
        (itemId: number): Promise<SPHttpClientResponse> => {
          if (itemId === -1) {
            throw new Error("No items found in the list");
          }

          latestItemId = itemId;
          console.log(`Loading information about item ID: ${itemId}...`);

          return this.context.spHttpClient.get(
            `${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('PreferencesList')/items(${latestItemId})?$select=Title,Id`,
            SPHttpClient.configurations.v1,
            {
              headers: {
                Accept: "application/json;odata=nometadata",
                "odata-version": ""
              }
            }
          );
        }
      )
      .then(
        (response: SPHttpClientResponse): Promise<userInfo> => {
          return response.json();
        }
      )
      .then((item: userInfo): void => {
        //  console.log(`Item ID1: ${item.Id}, Title: ${item.Title}`);
        //item.NotificaitionTime = updateObj;
        const body: string = JSON.stringify({
          Title: `Updated Item`,
          UserName: updatePrefObj.UserName,
          Uni_ID: updatePrefObj.Uni_ID,
          TenantID: updatePrefObj.TenantID,
          SelectedCategories: `${updatePrefObj.SelectedCategories}`,
          //  Item: `${updatePrefObj.Item}`,
          EnTNotificationTime: `${updatePrefObj.EnTNotificationTime}`,
          NewsNotificationTime: `${updatePrefObj.NewsNotificationTime}`,
          TaskNotificationTime: `${updatePrefObj.TaskNotificationTime}`,
          NewsNotificationFlag: `${updatePrefObj.NewsnotificationFlag}`,
          // TaskNotificationFlag: `${updatePrefObj.TaskNotificationFlag}`,
          EnTNotificationFlag: `${updatePrefObj.EnTNotificationFlag}`,
          NewsNotifyMe: `${updatePrefObj.NewsNotifyMe}`,
          EnTNotifyMe: `${updatePrefObj.NotifyMe}`
        });
        console.log(body);
        this.context.spHttpClient
          .post(
            `${this.context.pageContext.web.absoluteUrl}/_api/web/lists(guid%27e8937172-f3f3-478e-97bb-d5699f8d8945%27)/items(${latestItemId})`,
            SPHttpClient.configurations.v1,
            {
              headers: {
                Accept: "application/json;odata=nometadata",
                "Content-type": "application/json;odata=nometadata",
                "odata-version": "",
                "IF-MATCH": "*",
                "X-HTTP-Method": "MERGE"
              },
              body: body
            }
          )
          .then(
            (response: SPHttpClientResponse): void => {
              console.log(`Item with ID: ${latestItemId} successfully updated`);
            },
            (error: any): void => {
              console.log(`Error updating item: ${error}`);
            }
          );
      });
  }

  public _getUserInfoData(): Promise<PreferenceModel> {
    //Rest API to call SharePoint list
    var requestURL = this.context.pageContext.web.absoluteUrl;
    return this.context.spHttpClient
      .get(
        requestURL + `/_api/web/lists/GetByTitle('PreferencesList')/items`,
        SPHttpClient.configurations.v1
      )
      .then((response: SPHttpClientResponse) => {
        return response.json();
      });
  }

  public _renderUserListData(PrefItems: userInfo[]): void {
    for (var readItem = 0; readItem < PrefItems.length; readItem++) {
      if (PrefItems[readItem].UserName == existingUser) {
        updatePrefObj.SelectedCategories =
          PrefItems[readItem].SelectedCategories;

        SPCategory = PrefItems[readItem].SelectedCategories.toString().split(
          ","
        );
        intersectionCategory = categoriesArray.readCatArr.filter(e => {
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
  }
  //Read Preferences from list and show selecte categories
  public _renderListAsync(): void {
    this._getUserInfoData().then(response => {
      this._renderUserListData(response.value);
    });
    //}
  }

  private showNews() {
    var url = "/showNews?userName=" + existingUser;
    //var url =  url = "microsoftTeams.executeDeepLink('https://teams.microsoft.com/l/entity/@(EmployeeConnect.Helper.ApplicationSettings.AppId)/Preference')"
    microsoftTeams.executeDeepLink(
      "https://teams.microsoft.com/_#/apps/1744460c-4cc8-4935-9abb-8fb42acf0008/sections/currNews?slug=28:bf0fb57b-4fe9-42b2-8c9f-b996159d2963"
    );
    location.href = url;
  }
  private showET() {
    var url = "/ShowEnT?userName=" + existingUser;
    microsoftTeams.executeDeepLink(
      "https://teams.microsoft.com/_#/apps/1744460c-4cc8-4935-9abb-8fb42acf0008/sections/EandT?slug=28:bf0fb57b-4fe9-42b2-8c9f-b996159d2963"
    );
    location.href = url;
  }

  private showTask() {
    var url = "/ShowTask?userName=" + existingUser;
    microsoftTeams.executeDeepLink(
      "https://teams.microsoft.com/_#/apps/1744460c-4cc8-4935-9abb-8fb42acf0008/sections/tasks?slug=28:bf0fb57b-4fe9-42b2-8c9f-b996159d2963"
    );
    location.href = url;
  }

  public _saveButtonEventHandlers(intersectionCategoryEvent: any): void {
    newsCategory = intersectionCategoryEvent;
    console.log(newsCategory);
    let business = document.querySelector("#Business");
    let AI = document.querySelector("#AI");
    let Design = document.querySelector("#Design");
    let Technology = document.querySelector("#Technology");
    let Media = document.querySelector("#Media");
    let Economy = document.querySelector("#Economy");
    let Market = document.querySelector("#Market");
    let Finance = document.querySelector("#Finance");
    let Art = document.querySelector("#Art");
    let Enterprise = document.querySelector("#Enterprise");
    let Creative = document.querySelector("#Creative");
    let CS = document.querySelector("#CS");
    let Health = document.querySelector("#Health");
    let Culture = document.querySelector("#Culture");
    let AnimationID = document.querySelector("#Animation");
    let Software = document.querySelector("#Software");
    let IT = document.querySelector("#IT");
    let Data = document.querySelector("#Data");
    let newsTimeB = document.querySelector("#newsTimeB");
    let entTimeB = document.querySelector("#entTimeB");
    let taskTimeB = document.querySelector("#taskTimeB");
    let newsTimeE = document.querySelector("#newsTimeE");
    let entTimeE = document.querySelector("#entTimeE");
    let taskTimeE = document.querySelector("#taskTimeE");
    let newsTimeD = document.querySelector("#newsTimeD");
    let entTimeD = document.querySelector("#entTimeD");

    // let updatedNewsTime = document.querySelector("#NewsNotificationTime");

    newsTimeD.addEventListener("click", event => {
      updatePrefObj.EnTNotificationTime = "10:00 AM";
      this.updateItem(updatePrefObj.EnTNotificationTime);
    });
    entTimeD.addEventListener("click", event => {
      updatePrefObj.TaskNotificationTime = "10:00 AM";
      this.updateItem(updatePrefObj.TaskNotificationTime);
    });

    entTimeB.addEventListener("click", event => {
      updatePrefObj.EnTNotificationTime = "10:00 AM";
      this.updateItem(updatePrefObj.EnTNotificationTime);
    });
    taskTimeB.addEventListener("click", event => {
      updatePrefObj.TaskNotificationTime = "10:00 AM";
      this.updateItem(updatePrefObj.TaskNotificationTime);
    });
    newsTimeB.addEventListener("click", event => {
      updatePrefObj.NewsNotificationTime = "10:00 AM";
      this.updateItem(updatePrefObj.NewsNotificationTime);
    });

    entTimeE.addEventListener("click", event => {
      updatePrefObj.EnTNotificationTime = "5:00 PM";
      this.updateItem(updatePrefObj.EnTNotificationTime);
    });

    taskTimeE.addEventListener("click", event => {
      updatePrefObj.TaskNotificationTime = "5:00 PM";
      this.updateItem(updatePrefObj.TaskNotificationTime);
    });
    newsTimeE.addEventListener("click", event => {
      updatePrefObj.NewsNotificationTime = "5:00 PM";
      this.updateItem(updatePrefObj.NewsNotificationTime);
    });

    $("#newsTimeD").change(() => {
      var newsTime = $("#newsTimeD").prop("value");
      updatePrefObj.NewsNotificationTime = newsTime;
      this.updateItem(updatePrefObj.NewsNotificationTime);
    });
    $("#entTimeD").change(() => {
      var entTime = $("#entTimeD").prop("value");
      updatePrefObj.EnTNotificationTime = entTime;
      this.updateItem(updatePrefObj.EnTNotificationTime);
    });

    business.addEventListener("click", event => {
      console.log(newsCategory);
      if (newsCategory.indexOf("Business") == -1) {
        newsCategory.push("Business");
        updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      } else {
        updatePrefObj.SelectedCategories = newsCategory;
        var index = updatePrefObj.SelectedCategories.indexOf("Business");
        updatePrefObj.SelectedCategories.splice(index, 1);
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      }
    });

    Economy.addEventListener("click", event => {
      if (newsCategory.indexOf("Economy") == -1) {
        newsCategory.push("Economy");
        updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      } else {
        var index = updatePrefObj.SelectedCategories.indexOf("Economy");
        updatePrefObj.SelectedCategories.splice(index, 1);
        //updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      }
    });
    Finance.addEventListener("click", event => {
      if (newsCategory.indexOf("Finance") == -1) {
        newsCategory.push("Finance");
        updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      } else {
        var index = updatePrefObj.SelectedCategories.indexOf("Finance");
        updatePrefObj.SelectedCategories.splice(index, 1);
        //  updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      }
    });
    AnimationID.addEventListener("click", event => {
      if (newsCategory.indexOf("AnimationID") == -1) {
        newsCategory.push("AnimationID");
        updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      } else {
        var index = updatePrefObj.SelectedCategories.indexOf("AnimationID");
        updatePrefObj.SelectedCategories.splice(index, 1);
        //updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      }
    });
    Software.addEventListener("click", event => {
      if (newsCategory.indexOf("Software") == -1) {
        newsCategory.push("Software");
        updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      } else {
        var index = updatePrefObj.SelectedCategories.indexOf("Software");
        updatePrefObj.SelectedCategories.splice(index, 1);
        // updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      }
    });
    Enterprise.addEventListener("click", event => {
      if (newsCategory.indexOf("Enterprise") == -1) {
        newsCategory.push("Enterprise");
        updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      } else {
        var index = updatePrefObj.SelectedCategories.indexOf("Enterprise");
        updatePrefObj.SelectedCategories.splice(index, 1);
        // updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      }
    });
    Media.addEventListener("click", event => {
      if (newsCategory.indexOf("Media") == -1) {
        newsCategory.push("Media");
        updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      } else {
        var index = updatePrefObj.SelectedCategories.indexOf("Media");
        updatePrefObj.SelectedCategories.splice(index, 1);
        // updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      }
    });
    Market.addEventListener("click", event => {
      if (newsCategory.indexOf("Market") == -1) {
        newsCategory.push("Market");
        updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      } else {
        var index = updatePrefObj.SelectedCategories.indexOf("Market");
        updatePrefObj.SelectedCategories.splice(index, 1);
        // updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      }
    });
    Creative.addEventListener("click", event => {
      if (newsCategory.indexOf("Creative") == -1) {
        newsCategory.push("Creative");
        updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      } else {
        var index = updatePrefObj.SelectedCategories.indexOf("Creative");
        updatePrefObj.SelectedCategories.splice(index, 1);
        // updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      }
    });
    Design.addEventListener("click", event => {
      if (newsCategory.indexOf("Design") == -1) {
        newsCategory.push("Design");
        updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      } else {
        var index = updatePrefObj.SelectedCategories.indexOf("Design");
        updatePrefObj.SelectedCategories.splice(index, 1);
        //updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      }
    });
    Art.addEventListener("click", event => {
      if (newsCategory.indexOf("Art") == -1) {
        newsCategory.push("Art");
        updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      } else {
        var index = updatePrefObj.SelectedCategories.indexOf("Art");
        updatePrefObj.SelectedCategories.splice(index, 1);
        //updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      }
    });
    Data.addEventListener("click", event => {
      if (newsCategory.indexOf("Data") == -1) {
        newsCategory.push("Data");
        updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      } else {
        var index = updatePrefObj.SelectedCategories.indexOf("Data");
        updatePrefObj.SelectedCategories.splice(index, 1);
        //updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      }
    });
    Culture.addEventListener("click", event => {
      if (newsCategory.indexOf("Culture") == -1) {
        newsCategory.push("Culture");
        updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      } else {
        var index = updatePrefObj.SelectedCategories.indexOf("Culture");
        updatePrefObj.SelectedCategories.splice(index, 1);
        // updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      }
    });
    Technology.addEventListener("click", event => {
      if (newsCategory.indexOf("Technology") == -1) {
        newsCategory.push("Technology");
        updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      } else {
        var index = updatePrefObj.SelectedCategories.indexOf("Technology");
        updatePrefObj.SelectedCategories.splice(index, 1);
        //  updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      }
    });
    CS.addEventListener("click", event => {
      if (newsCategory.indexOf("CS") == -1) {
        newsCategory.push("CS");
        updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      } else {
        var index = updatePrefObj.SelectedCategories.indexOf("CS");
        updatePrefObj.SelectedCategories.splice(index, 1);
        //updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      }
    });
    Health.addEventListener("click", event => {
      if (newsCategory.indexOf("Health") == -1) {
        newsCategory.push("Health");
        updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      } else {
        var index = updatePrefObj.SelectedCategories.indexOf("Health");
        updatePrefObj.SelectedCategories.splice(index, 1);
        //updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      }
    });
    IT.addEventListener("click", event => {
      if (newsCategory.indexOf("IT") == -1) {
        newsCategory.push("IT");
        updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      } else {
        var index = updatePrefObj.SelectedCategories.indexOf("IT");
        updatePrefObj.SelectedCategories.splice(index, 1);
        //updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      }
    });
    AI.addEventListener("click", event => {
      if (newsCategory.indexOf("AI") == -1) {
        newsCategory.push("AI");
        updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      } else {
        var index = updatePrefObj.SelectedCategories.indexOf("AI");
        updatePrefObj.SelectedCategories.splice(index, 1);
        // updatePrefObj.SelectedCategories = newsCategory;
        this.updateItem(updatePrefObj.SelectedCategories.toString());
      }
    });

    $("#toggleEntTime").click(event => {
      if ($("#toggleEntTime").prop("checked") == true) {
        $(".radio1, #entTimeD").prop("disabled", false);
        updatePrefObj.NotifyMe = "True";
        updatePrefObj.EnTNotificationFlag = "True";
        this.updateItem(updatePrefObj.NotifyMe);
      } else if ($("#toggleEntTime").prop("checked") == false) {
        $(".radio1, #entTimeD").prop("disabled", true);
        updatePrefObj.NotifyMe = "False";
        updatePrefObj.EnTNotificationFlag = "False";
        this.updateItem(updatePrefObj.NotifyMe);
      }
    });
    $("#toggleNews").click(event => {
      if ($("#toggleNews").prop("checked") == true) {
        $(".radio, #newsTimeD").prop("disabled", false);
        updatePrefObj.NewsNotifyMe = "True";
        updatePrefObj.NewsnotificationFlag = "True";
        this.updateItem(updatePrefObj.NewsNotifyMe);
      } else if ($("#toggleNews").prop("checked") == false) {
        $(".radio, #newsTimeD").prop("disabled", true);
        updatePrefObj.NewsNotifyMe = "False";
        updatePrefObj.NewsnotificationFlag = "False";
        this.updateItem(updatePrefObj.NewsNotifyMe);
      }
    });

    $("#showNews").click(() => {
      this.showNews();
    });
    $("#showEnT").click(() => {
      this.showET();
    });
    $("#showTask").click(() => {
      this.showTask();
    });

    //this._renderListAsync();
  }
  public render(): void {
    console.log("Inside Render");
    console.log(intersectionCategory);
    newsCategory.push(intersectionCategory);

    this.domElement.innerHTML = `
      <div class="${styles.preferencesTab}">
        <div class="${styles.container}">
          <div class="${styles.row}">
            <div class="${styles.column1}">
              <span class="${styles.title}">News</span>
            </div>

            <div class="${styles.column2}" id="Allcategories">
              <div class="${
                styles.rules
              }">Pick 5 or more topics for news updates
              </div>
               <button type="button" class="${
                 styles.showmore
               }" id="showNews">Show News</button>

             <div class="${styles.columnheight}">
                <label for="Business">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Business.jpg" class="${
                      styles.img1
                    }">
                  </label>
                  <input type="checkbox" name="Business" ${
                    intersectionCategory.indexOf("Business") > -1
                      ? "checked"
                      : console.log(intersectionCategory)
                  } id="Business" class="category"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Business</div>
                    </div>
              </div>

               <div class="${styles.columnheight}">
                <label for="AI">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Travel.jpg" class="${
                      styles.img1
                    }">
                  </label>
                  <input type="checkbox" ${
                    intersectionCategory.indexOf("AI") > -1
                      ? "checked"
                      : console.log(intersectionCategory)
                  }  name="AI" id="AI" class="category"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">AI</div>
                    </div>
              </div>

              <div class="${styles.columnheight}">
                <label for="Design">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Design.jpg" class="${
                      styles.img1
                    }">
                  </label>
                  <input type="checkbox" ${
                    intersectionCategory.indexOf("Design") > -1
                      ? "checked"
                      : console.log(intersectionCategory)
                  } name="Design"  id="Design" class="category"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Design</div>
                    </div>
              </div>

              <div class="${styles.columnheight}">
                <label for="Technology">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Technology.jpg" class="${
                      styles.img1
                    }">
                  </label>
                  <input type="checkbox" ${
                    intersectionCategory.indexOf("Technology") > -1
                      ? "checked"
                      : console.log(intersectionCategory)
                  }  name="Technology" id="Technology" class="category"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Technology</div>
                    </div>
              </div>

              <div class="${styles.columnheight}">
                <label for="Media">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Media.jpg" class="${
                      styles.img1
                    }">
                  </label>
                  <input type="checkbox" ${
                    intersectionCategory.indexOf("Media") > -1
                      ? "checked"
                      : console.log(intersectionCategory)
                  } name="Media" id="Media" class="category"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Media</div>
                    </div>
              </div>

              <div class="${styles.columnheight}">
                <label for="Economy">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Economy.jpg" class="${
                      styles.img1
                    }">
                  </label>
                  <input type="checkbox" ${
                    intersectionCategory.indexOf("Economy") > -1
                      ? "checked"
                      : console.log(intersectionCategory)
                  } name="Economy" id="Economy" class="category"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Economy</div>
                    </div>
              </div>

               <div class="${styles.columnheight}">
                <label for="CS">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/CS.jpg" class="${
                      styles.img1
                    }">
                  </label>
                  <input type="checkbox" ${
                    intersectionCategory.indexOf("CS") > -1
                      ? "checked"
                      : console.log(intersectionCategory)
                  } name="CS" id="CS" class="category"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">CS</div>
                    </div>
              </div>

               <div class="${styles.columnheight}">
                <label for="Market">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Market.jpg" class="${
                      styles.img1
                    }">
                  </label>
                  <input type="checkbox"  ${
                    intersectionCategory.indexOf("Market") > -1
                      ? "checked"
                      : console.log(intersectionCategory)
                  } name="Market" id="Market" class="category"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Market</div>
                    </div>
              </div>

              <div class="${styles.columnheight}">
                <label for="Finance">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Finance.jpg" class="${
                      styles.img1
                    }">
                  </label>
                  <input type="checkbox" ${
                    intersectionCategory.indexOf("Finance") > -1
                      ? "checked"
                      : console.log(intersectionCategory)
                  } name="Finance" id="Finance" class="category"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Finance</div>
                    </div>
              </div>
               <br/>

              <div class="${styles.columnheight}">
                <label for="Enterprise">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Enterprise.jpg" class="${
                      styles.img1
                    }">
                  </label>
                  <input type="checkbox" ${
                    intersectionCategory.indexOf("Enterprise") > -1
                      ? "checked"
                      : console.log(intersectionCategory)
                  } name="Enterprise" id="Enterprise" class="category"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Enterprise</div>
                    </div>
              </div>
              <div class="${styles.columnheight}">
                <label for="Software">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Software.jpg" class="${
                      styles.img1
                    }">
                  </label>
                  <input type="checkbox" ${
                    intersectionCategory.indexOf("Software") > -1
                      ? "checked"
                      : console.log(intersectionCategory)
                  }  name="Software" id="Software" class="category"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Software</div>
                    </div>
              </div>
              <div class="${styles.columnheight}">
                <label for="Art">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Art.jpg" class="${
                      styles.img1
                    }">
                  </label>
                  <input type="checkbox" ${
                    intersectionCategory.indexOf("Art") > -1
                      ? "checked"
                      : console.log(intersectionCategory)
                  } name="Art" id="Art" class="category"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Art</div>
                    </div>
              </div>

              <div class="${styles.columnheight}">
                <label for="Animation">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Animation.gif" class="${
                      styles.img1
                    }">
                  </label>
                  <input type="checkbox" ${
                    intersectionCategory.indexOf("Animation") > -1
                      ? "checked"
                      : console.log(intersectionCategory)
                  } name="Animation" id="Animation" class="category"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Animation</div>
                    </div>
              </div>

               <div class="${styles.columnheight}">
                <label for="Culture">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Culture.jpg" class="${
                      styles.img1
                    }">
                  </label>
                  <input type="checkbox" ${
                    intersectionCategory.indexOf("Culture") > -1
                      ? "checked"
                      : console.log(intersectionCategory)
                  } name="Culture" id="Culture" class="category"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Culture</div>
                    </div>
              </div>

               <div class="${styles.columnheight}">
                <label for="Health">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Health.jpg" class="${
                      styles.img1
                    }">
                  </label>
                  <input type="checkbox" ${
                    intersectionCategory.indexOf("Health") > -1
                      ? "checked"
                      : console.log(intersectionCategory)
                  } name="Health" id="Health" class="category"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Health</div>
                    </div>
              </div>

              <div class="${styles.columnheight}">
                <label for="Creative">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Creative.png" class="${
                      styles.img1
                    }">
                  </label>
                  <input type="checkbox" ${
                    intersectionCategory.indexOf("Creative") > -1
                      ? "checked"
                      : console.log(intersectionCategory)
                  } name="Creative" id="Creative" class="category"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Creative</div>
                    </div>
              </div>

              <div class="${styles.columnheight}">
                <label for="IT">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/IT.jpg" class="${
                      styles.img1
                    }">
                  </label>
                  <input type="checkbox" ${
                    intersectionCategory.indexOf("IT") > -1
                      ? "checked"
                      : console.log(intersectionCategory)
                  }  name="IT" id="IT" class="category"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">IT</div>
                    </div>
              </div>
              <div class="${styles.columnheight}">
                <label for="Data">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Data.jpg" class="${
                      styles.img1
                    }">
                  </label>
                  <input type="checkbox" ${
                    intersectionCategory.indexOf("Data") > -1
                      ? "checked"
                      : console.log(intersectionCategory)
                  } name="Data" id="Data" class="category"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Data</div>
                    </div>
              </div>
              <div class="${styles.explore}">Explore more categories</div>
              <div class="${styles.switcht}">
              <label class="${styles.switch}">
                <input type="checkbox" class="toggleClassNews" checked id="toggleNews"/>
                <span class="${styles.slider}"></span>
              </label>
              <span class="${
                styles.newsupdates
              }">Send notifications about news updates</span>
            </div>
            <div class="${styles.notify}"  id="notifyNews">Notify me at</div>

            <form class="${styles.allradio}" id="radioButtonTask">
              <label class="${styles.radiolabel}">
                <input type="radio" class="radio" name="radio" value="10:00 AM" id="newsTimeB"/>
                <span class="${styles.textalign}">Beginning of the day</span>
                <span class="${styles.checkmark}"></span>
              </label>
              <label class="${styles.radiolabel}">
                <input type="radio" class="radio" name="radio" id="newsTimeE"/>
                <span class="${styles.textalign}">End of the day</span>
                <span class="${styles.checkmark}"></span>
              </label>
              <label class="${styles.radiolabel}">
                <input type="radio" class="radio" checked name="radio"/>
                <span class="${styles.textalign}">Set a preferred time </span>
                <span class="${styles.checkmark}"></span>
              </label>
              <select class="${styles.datecontrol}" id="newsTimeD">
                <option selected>9:00 am</option>
                <option>10:00 am</option>
                <option>11:00 am</option>
                <option>12:00 am</option>
                <option>1:00 pm</option>
                <option>2:00 pm</option>
                <option>3:00 pm</option>
                <option>4:00 pm</option>
                <option>5:00 pm</option>
              </select>
              <span class="chevron-down"></span>  <!--added here-->
            </form><br/>

              </div>
          </div>

            <div class="${styles.row2}">
            <div class="${styles.column1}">
              <span class="${styles.title}">Events & trainings</span>
            </div>

 <div class="${styles.column2}">
  <button type="button" class="${
    styles.showmore
  }" id="showEnT">Show Events & trainings</button>
            <div class="${styles.switcht}">
              <label class="${styles.switch}">
                <input type="checkbox" class="toggleEntTimeClass" checked id="toggleEntTime"/>
                <span class="${styles.slider}"></span>
              </label>
              <span class="${
                styles.newsupdates
              }">Send notifications about new events & training</span>
            </div>
            <div class="${styles.notify}">Notify me at</div>
            <form class="${styles.allradio}">
              <label class="${styles.radiolabel}">
                <input type="radio" name="radio"  value="5:00 PM" id="entTimeB" class="radio1"/>
                <span class="${styles.textalign}">Beginning of the day</span>
                <span class="${styles.checkmark}"></span>
              </label>
              <label class="${styles.radiolabel}">
                <input type="radio" name="radio" value="10:00 PM" id="entTimeE" class="radio1"/>
                <span class="${styles.textalign}">End of the day</span>
                <span class="${styles.checkmark}"></span>
              </label>
              <label class="${styles.radiolabel}">
                <input type="radio" checked name="radio" class="radio1"/>
                <span class="${styles.textalign}">Set a preferred time </span>
                <span class="${styles.checkmark}"></span>
              </label>
              <select class="${styles.datecontrol}" id="entTimeD">
              <option selected>9:00 am</option>
              <option>10:00 am</option>
              <option>11:00 am</option>
              <option>12:00 am</option>
              <option>1:00 pm</option>
              <option>2:00 pm</option>
              <option>3:00 pm</option>
              <option>4:00 pm</option>
              <option>5:00 pm</option>
              </select>
              <span class="chevron-down"></span>  <!--added here-->
            </form> <br/>

            </div>
              </div>

              <div class="${styles.row3}">
            <div class="${styles.column1}">
              <span class="${styles.title}">Task reminders</span>
            </div>

 <div class="${styles.column2}">
  <button type="button" class="${
    styles.showmore
  }" id="showTask">Show Task reminders</button>
            <div class="${styles.notify}" id="notifyTask">Notify me at</div>

            <form class="${styles.allradio}">
              <label class="${styles.radiolabel}">
                <input type="radio" checked name="radio"  value="10:00 PM" id="taskTimeB"/>
                <span class="${styles.textalign}">Beginning of the day</span>
                <span class="${styles.checkmark}"></span>
              </label>
              <label class="${styles.radiolabel}">
                <input type="radio" name="radio"  value="5:00 PM" id="taskTimeE"/>
                <span class="${styles.textalign}">End of the day</span>
                <span class="${styles.checkmark}"></span>
              </label>
              <label class="${styles.radiolabel}">
                <input type="radio" name="radio"/>
                <span class="${styles.textalign}">Set a preferred time </span>
                <span class="${styles.checkmark}"></span>
              </label>
            </form><br/>

            </div>
              </div>

            </div>

        </div>
      </div>
      `;

    this._saveButtonEventHandlers(intersectionCategory);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
