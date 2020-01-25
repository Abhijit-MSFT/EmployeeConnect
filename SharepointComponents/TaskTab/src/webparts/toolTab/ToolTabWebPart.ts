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
      <div class="${styles.toolTab}" id="accordion">
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
                          <div class=${styles.cbody} id="createTicket">
                            <span
                              alt-name="create letter"
                              class=${styles.ticketcreation}
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
                              class=${styles.leaverequest}
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
                              class=${styles.policies}
                            ></span>
                            <div class="${styles.CBL}">View policies</div>
                            <p class="${styles.CBLdes}">
                            Identify the purpose and objectives of HR department.
                            </p>
                          </div>
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
                            class=${styles.downloadpayslip}
                          ></span>
                          <div class="${styles.CBL}">Download payslip</div>
                          <p class="${styles.CBLdes}">
                          View online pay slips and full payment histories.
                          </p>
                        </div>
                        </div>

                        <div class="${styles.card} ${styles.shadowsm}">
                          <div class=${styles.cbody}>
                            <span
                              alt-name="create letter"
                              class=${styles.createfinancetkt}
                            ></span>
                            <div class="${styles.CBL}">Create finance ticket</div>
                            <p class="${styles.CBLdes}">
                            Open a support ticket with the Finance and Operations support.
                            </p>
                          </div>
                          </div>

                          <div class="${styles.card} ${styles.shadowsm}">
                          <div class=${styles.cbody}>
                            <span
                              alt-name="create letter"
                              class=${styles.submitbenefits}
                            ></span>
                            <div class="${styles.CBL}">Submit benefits claim</div>
                            <p class="${styles.CBLdes}">
                            Submit a claim from your account to start the process.
                            </p>
                          </div>
                          </div>

                          <div class="${styles.card} ${styles.shadowsm}">
                          <div class=${styles.cbody}>
                            <span
                              alt-name="create letter"
                              class=${styles.viewbenefits}
                            ></span>
                            <div class="${styles.CBL}">View benefits policies</div>
                            <p class="${styles.CBLdes}">
                            Read common queries about servicing your policy.
                            </p>
                          </div>
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
                                class=${styles.support}
                              ></span>
                              <div class="${styles.CBL}">Raise IT Support Ticket</div>
                              <p class="${styles.CBLdes}">
                              Submit your support case to review and respond.
                              </p>
                            </div>
                            </div>

                            <div class="${styles.card} ${styles.shadowsm}">
                              <div class=${styles.cbody} id="visitorRequest">
                                <span
                                  alt-name="create letter"
                                  class=${styles.wiferequest}
                                ></span>
                                <div class="${styles.CBL}">Submit Visitor Request</div>
                                <p class="${styles.CBLdes}">
                                Fill a request form for short-term visitors.
                                </p>
                              </div>
                              </div>

                              <div class="${styles.card} ${styles.shadowsm}">
                              <div class=${styles.cbody}>
                                <span
                                  alt-name="create letter"
                                  class=${styles.eventsupport}
                                ></span>
                                <div class="${styles.CBL}">Event IT Support request</div>
                                <p class="${styles.CBLdes}">
                                Fill out this form to request any equiepment for events.
                                </p>
                              </div>
                              </div>

                              <div class="${styles.card} ${styles.shadowsm}">
                              <div class=${styles.cbody}>
                                <span
                                  alt-name="create letter"
                                  class=${styles.cafeservice}
                                ></span>
                                <div class="${styles.CBL}">Cafeteria service app</div>
                                <p class="${styles.CBLdes}">
                                Emloyee can order and pay here without waiting in long queue. </p>
                              </div>
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
                                      class=${styles.Inventory}
                                    ></span>
                                    <div class="${styles.CBL}">Inventory request</div>
                                    <p class="${styles.CBLdes}">
                                    Inventory form to request supplies.
                                    </p>
                                  </div>
                                  </div>

                                  <div class="${styles.card} ${styles.shadowsm}">
                                    <div class=${styles.cbody}>
                                      <span
                                        alt-name="create letter"
                                        class=${styles.ROtimesheet}
                                      ></span>
                                      <div class="${styles.CBL}">Timesheet</div>
                                      <p class="${styles.CBLdes}">
                                      Weekly Timesheet setup.
                                        </p>
                                    </div>
                                    </div>

                                    <div class="${styles.card} ${styles.shadowsm}">
                                    <div class=${styles.cbody}>
                                      <span
                                        alt-name="create letter"
                                        class=${styles.RoSI}
                                      ></span>
                                      <div class="${styles.CBL}">Store info</div>
                                      <p class="${styles.CBLdes}">
                                      Your store information.
                                      </p>
                                    </div>
                                    </div>
                                    </div>

              </div>
          </div>
          </div>
      </div>`;
    this._setButtonEventHandlers();
  }

  public _setButtonEventHandlers(): void {
    this.domElement
      .querySelector("#createTicket")
      .addEventListener("click", () => {
        this.createTicket();
      });
    this.domElement
      .querySelector("#visitorRequest")
      .addEventListener("click", () => {
        this.visitorRequest();
      });
  }
  private createTicket() {
    microsoftTeams.initialize();
    let taskInfo = {
      title: null,
      height: null,
      width: null,
      url: null,
      card: null,
      fallbackUrl: null,
      completionBotId: null
    };

    taskInfo.url =
      "https://employeeconnect-9566.azurewebsites.net/createticket";
    taskInfo.title = "Create Ticket";
    taskInfo.height = 510;
    taskInfo.width = 430;
    taskInfo.fallbackUrl = taskInfo.url;
    microsoftTeams.tasks.startTask(taskInfo, this.submitHandler);
  }
  private visitorRequest() {
    microsoftTeams.initialize();
    let taskInfo = {
      title: null,
      height: null,
      width: null,
      url: null,
      card: null,
      fallbackUrl: null,
      completionBotId: null
    };

    taskInfo.url =
      "https://employeeconnect-9566.azurewebsites.net/visitorregistration";
    taskInfo.title = "Visitor Request";
    taskInfo.height = 510;
    taskInfo.width = 430;
    taskInfo.fallbackUrl = taskInfo.url;
    microsoftTeams.tasks.startTask(taskInfo, this.submitHandler);
  }

  public submitHandler(err, result) {
    if (result.action == "ticketcomplete") {
      let taskInfo = {
        height: null,
        width: null,
        url: null,
        fallbackUrl: null
      };
      taskInfo.url =
        "https://employeeconnect-9566.azurewebsites.net/ticketcomplete?ticketNoId=" +
        result.ticketNo +
        "&description=" +
        result.TDescription +
        "&category=" +
        result.TCategory +
        "&priority=" +
        result.TPriority;
      taskInfo.height = 510;
      taskInfo.width = 430;
      taskInfo.fallbackUrl = taskInfo.url;
      microsoftTeams.tasks.startTask(taskInfo);
    }
    if (result.action == "createTicket") {
      let taskInfo = {
        height: null,
        width: null,
        url: null,
        fallbackUrl: null
      };
      taskInfo.url =
        "https://employeeconnect-9566.azurewebsites.net/createticket";
      taskInfo.height = "medium";
      taskInfo.width = "medium";
      taskInfo.fallbackUrl = taskInfo.url;
      microsoftTeams.tasks.startTask(taskInfo, this.submitHandler);
    }
    if (result.action == "sendrequest") {
      let taskInfo = {
        height: null,
        width: null,
        url: null,
        fallbackUrl: null
      };
      taskInfo.url =
        "https://employeeconnect-9566.azurewebsites.net/sendrequest?=" +
        result.vDate +
        "&Time=" +
        result.vTime;
      taskInfo.height = "medium";
      taskInfo.width = "medium";
      taskInfo.fallbackUrl = taskInfo.url;
      microsoftTeams.tasks.startTask(taskInfo);
    }
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
