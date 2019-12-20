import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";
import styles from "./ToolTabWebPart.module.scss";
import * as microsoftTeams from "@microsoft/teams-js";
import * as strings from "ToolTabWebPartStrings";
import { SPComponentLoader } from "@microsoft/sp-loader";
import "jquery";
require("bootstrap");

export interface IToolTabWebPartProps {
  description: string;
}

export default class ToolTabWebPart extends BaseClientSideWebPart<
  IToolTabWebPartProps
> {
  [x: string]: any;
  public render(): void {
    let cssURL =
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";

    SPComponentLoader.loadCss(cssURL);

    this.domElement.innerHTML = `
      <div class="${styles.toolTab} id="accordion"">
        <div class="${styles.row}">
        <div class="col-12" >
          <div class="${styles.HR} ar accordion-toggle"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  data-target="#HRtools" aria-expanded="false"
                  >Human Resources
                </div>
          <div class="${styles.P10} panel-collapse" id="HRtools">
            <div class="${styles.card} ${styles.shadowsm}">
              <div class=${styles.cbody}>
                <span
                  alt-name="create letter"
                  class=${styles.createicon}
                ></span>
                <div class="${styles.CBL}">Create business letter</div>
                <p class="${styles.CBLdes}">
                  Create a business letter within a predesigned color and
                  template.
                </p>
              </div>
              </div>

            <div class="${styles.card} ${styles.shadowsm}">
              <div class=${styles.cbody}>
                <span
                  alt-name="create letter"
                  class=${styles.createicon}
                ></span>
                <div class="${styles.CBL}">Create ticket</div>
                <p class="${styles.CBLdes}">
                For all HR tickets, the ticket type is being set as Employee Support.
                </p>
              </div>
              </div>

              <div class="${styles.card} ${styles.shadowsm}">
              <div class=${styles.cbody}>
                <span
                  alt-name="create letter"
                  class=${styles.createicon}
                ></span>
                <div class="${styles.CBL}">Request leave</div>
                <p class="${styles.CBLdes}">
                Request leave and check your status in the Leave application.
                </p>
              </div>
              </div>

              <div class="${styles.card} ${styles.shadowsm}">
              <div class=${styles.cbody}>
                <span
                  alt-name="create letter"
                  class=${styles.createicon}
                ></span>
                <div class="${styles.CBL}">View policies</div>
                <p class="${styles.CBLdes}">
                Identify the purpose and objectives of Humana Resources department.
                </p>
              </div>
              </div>


              <div class="${styles.HR} ar accordion-toggle"
              data-toggle="collapse"
              data-parent="#accordion"
              data-target="#Pay-benefits" aria-expanded="false"
              >Pay and benefits
            </div>
      <div class="${styles.P10} panel-collapse" id="Pay-benefits">
        <div class="${styles.card} ${styles.shadowsm}">
          <div class=${styles.cbody}>
            <span
              alt-name="create letter"
              class=${styles.createicon}
            ></span>
            <div class="${styles.CBL}">Download payslip</div>
            <p class="${styles.CBLdes}">
            Create a business letter within a predesigned color and template.
            </p>
          </div>
          </div>

        <div class="${styles.card} ${styles.shadowsm}">
          <div class=${styles.cbody}>
            <span
              alt-name="create letter"
              class=${styles.createicon}
            ></span>
            <div class="${styles.CBL}">Create finance ticket</div>
            <p class="${styles.CBLdes}">
            For all HR tickets, the ticket type is being set as Employee Support.
            </p>
          </div>
          </div>

          <div class="${styles.card} ${styles.shadowsm}">
          <div class=${styles.cbody}>
            <span
              alt-name="create letter"
              class=${styles.createicon}
            ></span>
            <div class="${styles.CBL}">Submit benefits claim</div>
            <p class="${styles.CBLdes}">
            Request leave and check your status in the Leave application.
            </p>
          </div>
          </div>

          <div class="${styles.card} ${styles.shadowsm}">
          <div class=${styles.cbody}>
            <span
              alt-name="create letter"
              class=${styles.createicon}
            ></span>
            <div class="${styles.CBL}">View benefits policies</div>
            <p class="${styles.CBLdes}">
            Identify the purpose and objectives of Humana Resources department.
            </p>
          </div>
          </div>


          <div class="${styles.HR} ar accordion-toggle"
          data-toggle="collapse"
          data-parent="#accordion"
          data-target="#itandfacilities" aria-expanded="false"
          >IT and facilities
        </div>
  <div class="${styles.P10} panel-collapse" id="itandfacilities">
    <div class="${styles.card} ${styles.shadowsm}">
      <div class=${styles.cbody}>
        <span
          alt-name="create letter"
          class=${styles.createicon}
        ></span>
        <div class="${styles.CBL}">Raise IT Support Ticket</div>
        <p class="${styles.CBLdes}">
        Create a business letter within a predesigned color and template.
        </p>
      </div>
      </div>

    <div class="${styles.card} ${styles.shadowsm}">
      <div class=${styles.cbody}>
        <span
          alt-name="create letter"
          class=${styles.createicon}
        ></span>
        <div class="${styles.CBL}">Visitor wi-fi request</div>
        <p class="${styles.CBLdes}">
        For all HR tickets, the ticket type is being set as Employee Support.
        </p>
      </div>
      </div>

      <div class="${styles.card} ${styles.shadowsm}">
      <div class=${styles.cbody}>
        <span
          alt-name="create letter"
          class=${styles.createicon}
        ></span>
        <div class="${styles.CBL}">Event IT Support request</div>
        <p class="${styles.CBLdes}">
        Request leave and check your status in the Leave application.
        </p>
      </div>
      </div>

      <div class="${styles.card} ${styles.shadowsm}">
      <div class=${styles.cbody}>
        <span
          alt-name="create letter"
          class=${styles.createicon}
        ></span>
        <div class="${styles.CBL}">Cafeteria service app</div>
        <p class="${styles.CBLdes}">
        Identify the purpose and objectives of Humana Resources department.
        </p>
      </div>
      </div>


      <div class="${styles.HR} ar accordion-toggle"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  data-target="#retail-operations" aria-expanded="false"
                  >Retail operations
                </div>
          <div class="${styles.P10} panel-collapse" id="retail-operations">
            <div class="${styles.card} ${styles.shadowsm}">
              <div class=${styles.cbody}>
                <span
                  alt-name="create letter"
                  class=${styles.createicon}
                ></span>
                <div class="${styles.CBL}">Inventory request</div>
                <p class="${styles.CBLdes}">
                Create a business letter within a predesigned color and template.
                </p>
              </div>
              </div>

            <div class="${styles.card} ${styles.shadowsm}">
              <div class=${styles.cbody}>
                <span
                  alt-name="create letter"
                  class=${styles.createicon}
                ></span>
                <div class="${styles.CBL}">Timesheet</div>
                <p class="${styles.CBLdes}">
                For all HR tickets, the ticket type is being set as Employee Support.
                </p>
              </div>
              </div>

              <div class="${styles.card} ${styles.shadowsm}">
              <div class=${styles.cbody}>
                <span
                  alt-name="create letter"
                  class=${styles.createicon}
                ></span>
                <div class="${styles.CBL}">Store info</div>
                <p class="${styles.CBLdes}">
                Request leave and check your status in the Leave application.
                </p>
              </div>
              </div>

              </div>
          </div>
          </div>
      </div>`;
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
