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
import * as $ from "jquery";

microsoftTeams.initialize();

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

    // tslint:disable-next-line:no-function-expression
    $(document).ready(function() {
  $("#news-update").click(function() {
    if ($(this).prop("checked") == true) {
      $(".radio, #drop1").prop("disabled", false);
    } else if ($(this).prop("checked") == false) {
      $(".radio,#drop1").prop("disabled", true);
    }
  });

  $("#news-update2").click(function() {
    if ($(this).prop("checked") == true) {
      $(".radio1, #drop2").prop("disabled", false);
    } else if ($(this).prop("checked") == false) {
      $(".radio1, #drop2").prop("disabled", true);
    }
  });
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
                <input type="checkbox" id='news-update' checked />
                <span class="${styles.slider}"></span>
              </label>
              <span class="${styles.newsupdates}" id='news-update'>Send notifications about news updates</span>
            </div>
            <div class="${styles.notify}">Notify me at</div>

            <form class="${styles.allradio}" id="radioButtonTask"'>
              <label class="${styles.radiolabel}">
                <input type="radio" name="radio" class="radio"/>
                <span class="${styles.textalign}">Beginning of the day</span>
                <span class="${styles.checkmark}"></span>
              </label>
              <label class="${styles.radiolabel}">
                <input type="radio" name="radio" class="radio"/>
                <span class="${styles.textalign}">End of the day</span>
                <span class="${styles.checkmark}"></span>
              </label>
              <label class="${styles.radiolabel}">
                <input type="radio" checked name="radio" class="radio"/>
                <span class="${styles.textalign}">Set a preferred time </span>
                <span class="${styles.checkmark}"></span>
              </label>
              <select class="${styles.datecontrol}" id='drop1'>
                <option selected>9:00 am</option>
                <option>Option 2</option>
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
  <button type="button" class="${styles.showmore}">Show Events & trainings</button>
            <div class="${styles.switcht}">
              <label class="${styles.switch}">
                <input type="checkbox" id='news-update2' checked />
                <span class="${styles.slider}"></span>
              </label>
              <span class="${styles.newsupdates}">Send notifications about new events & training</span>
            </div>
            <div class="${styles.notify}">Notify me at</div>

            <form class="${styles.allradio}">
              <label class="${styles.radiolabel}">
                <input type="radio" name="radio" class="radio1"/>
                <span class="${styles.textalign}">Beginning of the day</span>
                <span class="${styles.checkmark}"></span>
              </label>
              <label class="${styles.radiolabel}">
                <input type="radio" name="radio" class="radio1"/>
                <span class="${styles.textalign}">End of the day</span>
                <span class="${styles.checkmark}"></span>
              </label>
              <label class="${styles.radiolabel}">
                <input type="radio" checked name="radio" class="radio1"/>
                <span class="${styles.textalign}">Set a preferred time </span>
                <span class="${styles.checkmark}"></span>
              </label>
              <select class="${styles.datecontrol}" id="drop2">
                <option selected>4:30 pm</option>
                <option>Option 2</option>
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
