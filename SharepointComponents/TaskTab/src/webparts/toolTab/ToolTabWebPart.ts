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
  public render(): void {
    let cssURL =
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
    SPComponentLoader.loadCss(cssURL);

    this.domElement.innerHTML = `
      <div class="${styles.toolTab}">
        <div class="${styles.container}">
        <div class="${styles.row}">
        <div class="${styles.column}" id="accordion">
          <div class="HR ar accordion-toggle"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  data-target="#HRtools" aria-expanded="false"
                  >Human Resources
                </div>
          <div class="P-10 panel-collapse" id="HRtools">
            <div class="card shadow-sm custom-card-first-row">
              <div class="card-body">
                <span
                  alt-name="create letter"
                  class="HR-tabs create-icon"
                ></span>
                <div class="CBL">Create business letter</div>
                <p class="CBL-des">
                  Create a business letter within a predesigned color and
                  template.
                </p>
              </div>
            </div>
            <div class="card shadow-sm custom-card-first-row-one" data-toggle="modal"
                data-target="#create-ticket">
              <div class="card-body">
                <span
                  alt-name="ticket-creation"
                  class="HR-tabs ticket-creation"
                >
                </span>
                <div class="CT">Create ticket</div>
                <p class="CT-des">
                  For all HR tickets, the ticket type is being set as Employee
                  Support.
                </p>
              </div>
            </div>
            <div class="card shadow-sm custom-card-first-row-two">
              <div class="card-body">
                <span
                  alt-name="leave-request"
                  class="HR-tabs leave-request"
                ></span>
                <div class="RL">Request leave</div>
                <p class="RL-des">
                  Request leave and check your status in the Leave application.
                </p>
              </div>
            </div>
            <div class="card shadow-sm custom-card-first-row-three">
              <div class="card-body">
                <span alt-name="policies" class="HR-tabs policies"></span>
                <div class="VP">View policies</div>
                <p class="VP-des">
                  Identify the purpose and objectives of Humana Resources
                  department.
                </p>
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
