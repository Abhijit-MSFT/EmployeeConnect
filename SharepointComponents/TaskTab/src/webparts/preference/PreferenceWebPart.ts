import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";
import styles from "./PreferenceWebPart.module.scss";
import * as strings from "PreferenceWebPartStrings";
import * as microsoftTeams from "@microsoft/teams-js";
import { SPComponentLoader } from "@microsoft/sp-loader";

microsoftTeams.initialize();
import * as bootstrap from "bootstrap";

export interface IPreferencesTabWebPartProps {
  description: string;
}

export default class PreferencesTabWebPart extends BaseClientSideWebPart<
  IPreferencesTabWebPartProps
> {
  public constructor() {
    super();
    SPComponentLoader.loadCss(
      "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    );
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

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.preferencesTab}">
        <div class="${styles.container}">
          <div class="${styles.row}">
            <div class="${styles.column1}">
              <span class="${styles.title}">News</span>
            </div>

            <div class="${styles.column2}">
              <div class="${styles.rules}">Pick 5 or more topics for news updates
              </div>
               <button type="button" class="${styles.showmore}">Show News</button>

             <div class="${styles.columnheight}">
                <label for="Business">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Business.jpg" class="${styles.img1}">
                  </label>
                  <input type="checkbox" checked name="Business" id="Business"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Business</div>
                    </div>
              </div>

               <div class="${styles.columnheight}">
                <label for="Travel">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Travel.jpg" class="${styles.img1}">
                  </label>
                  <input type="checkbox" name="Travel" id="Travel"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Travel</div>
                    </div>
              </div>

              <div class="${styles.columnheight}">
                <label for="Design">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Design.jpg" class="${styles.img1}">
                  </label>
                  <input type="checkbox" name="Design" id="Design"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Design</div>
                    </div>
              </div>

              <div class="${styles.columnheight}">
                <label for="Technology">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Technology.jpg" class="${styles.img1}">
                  </label>
                  <input type="checkbox" checked name="Technology" id="Technology"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Technology</div>
                    </div>
              </div>

              <div class="${styles.columnheight}">
                <label for="Media">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Media.jpg" class="${styles.img1}">
                  </label>
                  <input type="checkbox" name="Media" id="Media"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Media</div>
                    </div>
              </div>

              <div class="${styles.columnheight}">
                <label for="Economy">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Economy.jpg" class="${styles.img1}">
                  </label>
                  <input type="checkbox" name="Economy" id="Economy"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Economy</div>
                    </div>
              </div>

               <div class="${styles.columnheight}">
                <label for="CS">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/CS.jpg" class="${styles.img1}">
                  </label>
                  <input type="checkbox" name="CS" id="CS"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">CS</div>
                    </div>
              </div>

               <div class="${styles.columnheight}">
                <label for="Market">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Market.jpg" class="${styles.img1}">
                  </label>
                  <input type="checkbox" name="Market" id="Market"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Market</div>
                    </div>
              </div>

              <div class="${styles.columnheight}">
                <label for="Finance">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Finance.jpg" class="${styles.img1}">
                  </label>
                  <input type="checkbox" name="Finance" id="Finance"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Finance</div>
                    </div>
              </div>
               <br/>

              <div class="${styles.columnheight}">
                <label for="Enterprise">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Enterprise.jpg" class="${styles.img1}">
                  </label>
                  <input type="checkbox" name="Enterprise" id="Enterprise"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Enterprise</div>
                    </div>
              </div>

              <div class="${styles.columnheight}">
                <label for="Software">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Software.jpg" class="${styles.img1}">
                  </label>
                  <input type="checkbox" checked name="Software" id="Software"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Software</div>
                    </div>
              </div>

              <div class="${styles.columnheight}">
                <label for="Art">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Art.jpg" class="${styles.img1}">
                  </label>
                  <input type="checkbox" name="Art" id="Art"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Art</div>
                    </div>
              </div>

              <div class="${styles.columnheight}">
                <label for="Animation">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Animation.gif" class="${styles.img1}">
                  </label>
                  <input type="checkbox" name="Animation" id="Animation"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Animation</div>
                    </div>
              </div>

               <div class="${styles.columnheight}">
                <label for="Culture">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Culture.jpg" class="${styles.img1}">
                  </label>
                  <input type="checkbox" checked name="Culture" id="Culture"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Culture</div>
                    </div>
              </div>

               <div class="${styles.columnheight}">
                <label for="Health">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Health.jpg" class="${styles.img1}">
                  </label>
                  <input type="checkbox" name="Health" id="Health"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Health</div>
                    </div>
              </div>

              <div class="${styles.columnheight}">
                <label for="Creative">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Creative.png" class="${styles.img1}">
                  </label>
                  <input type="checkbox" name="Creative" id="Creative"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Creative</div>
                    </div>
              </div>

              <div class="${styles.columnheight}">
                <label for="IT">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/IT.jpg" class="${styles.img1}">
                  </label>
                  <input type="checkbox" name="IT" id="IT"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">IT</div>
                    </div>
              </div>

              <div class="${styles.columnheight}">
                <label for="Data">
                    <img src="https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/Shared%20Documents/img/Data.jpg" class="${styles.img1}">
                  </label>
                  <input type="checkbox" name="Data" id="Data"/>
                    <div class="${styles.tick}">
                      <div class="${styles.name}">Data</div>
                    </div>
              </div>
              <div class="${styles.explore}">Explore more categories</div>
              <div class="${styles.switcht}">
              <label class="${styles.switch}">
                <input type="checkbox" checked />
                <span class="${styles.slider}"></span>
              </label>
              <span class="${styles.newsupdates}">Send notifications about news updates</span>
            </div>
            <div class="${styles.notify}">Notify me at</div>

            <form class="${styles.allradio}">
              <label class="${styles.radiolabel}">
                <input type="radio" name="radio" />
                <span class="${styles.textalign}">Beginning of the day</span>
                <span class="${styles.checkmark}"></span>
              </label>
              <label class="${styles.radiolabel}">
                <input type="radio" name="radio" />
                <span class="${styles.textalign}">End of the day</span>
                <span class="${styles.checkmark}"></span>
              </label>
              <label class="${styles.radiolabel}">
                <input type="radio" checked name="radio" />
                <span class="${styles.textalign}">Set a preferred time </span>
                <span class="${styles.checkmark}"></span>
              </label>
              <span class="${styles.chevron}">
              </span>
              <select class="${styles.datecontrol}" id="newsTimeD">
                <option selected>9:00 am</option>
                <option>Option 2</option>
              </select>

                <!--added here-->
            </form><br/>

              </div>
          </div>

            <div class="${styles.row2}">
            <div class="${styles.column1}">
              <span class="${styles.title}">Events & trainings</span>
            </div>

 <div class="${styles.column2}">
  <button type="button" class="${styles.showmore}">Show Events & trainings</button>
            <div class="${styles.switcht}">
              <label class="${styles.switch}">
                <input type="checkbox" checked />
                <span class="${styles.slider}"></span>
              </label>
              <span class="${styles.newsupdates}">Send notifications about new events & training</span>
            </div>
            <div class="${styles.notify}">Notify me at</div>

            <form class="${styles.allradio}">
              <label class="${styles.radiolabel}">
                <input type="radio" name="radio" />
                <span class="${styles.textalign}">Beginning of the day</span>
                <span class="${styles.checkmark}"></span>
              </label>
              <label class="${styles.radiolabel}">
                <input type="radio" name="radio" />
                <span class="${styles.textalign}">End of the day</span>
                <span class="${styles.checkmark}"></span>
              </label>
              <label class="${styles.radiolabel}">
                <input type="radio" checked name="radio" />
                <span class="${styles.textalign}">Set a preferred time </span>
                <span class="${styles.checkmark}"></span>
              </label>
              <span class="${styles.chevron}">
              </span>
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
  <button type="button" class="${styles.showmore}">Show Task reminders</button>
            <div class="${styles.notify}">Notify me at</div>

            <form class="${styles.allradio}">
              <label class="${styles.radiolabel}">
                <input type="radio" checked name="radio" />
                <span class="${styles.textalign}">Beginning of the day</span>
                <span class="${styles.checkmark}"></span>
              </label>
              <label class="${styles.radiolabel}">
                <input type="radio" name="radio" />
                <span class="${styles.textalign}">End of the day</span>
                <span class="${styles.checkmark}"></span>
              </label>
              <label class="${styles.radiolabel}">
                <input type="radio" name="radio" />
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
