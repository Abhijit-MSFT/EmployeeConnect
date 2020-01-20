import {
  Version,
  Environment,
  EnvironmentType
} from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import styles from "./TaskWebPart.module.scss";
import * as strings from "TaskWebPartStrings";

import * as microsoftTeams from "@microsoft/teams-js";
import { SPComponentLoader } from "@microsoft/sp-loader";
microsoftTeams.initialize();
import "jquery";
import "bootstrap";
require("bootstrap");

export interface ITaskTabWebPartProps {
  description: string;
}

// // //Getting the  SharePoint list data
export interface ISPTaskLists {
  value: ISPTaskList[];
}

export interface ISPTaskList {
  PoNumber: string;
  Description: string;
  InvoiceNo: string;
  VendorName: string;
  VendorNo: string;
  TotalAmount: string;
  PoStatus: string;
  // Review;
}

export interface ISPInvoiceLists {
  value: ISInvoiceList[];
}

export interface ISInvoiceList {
  Invoiceno_x002e_: string;
  POno_x002e_: string;
  Description: string;
  Vendorname: string;
  Vendorno_x002e_: string;
  PoStatus: string;
  Amount: string;
  // Review;
}
export default class TaskTabWebPart extends BaseClientSideWebPart<
  ITaskTabWebPartProps
> {
  public constructor() {
    super();
    SPComponentLoader.loadCss(
      "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    );
  }
  //Rendering TaskList data
  private _getTaskListData(): Promise<ISPTaskLists> {
    //Rest API to call SharePoint list
    var requestURL = this.context.pageContext.web.absoluteUrl;
    return this.context.spHttpClient
      .get(
        requestURL + `/_api/web/lists/GetByTitle('PurchaseOrders')/items`,
        SPHttpClient.configurations.v1
      )
      .then((response: SPHttpClientResponse) => {
        return response.json();
      });
  }

  //Get PO Details List

  // private _getPODetailList(): Promise<ISPPODetail> {
  //   //Rest API to call SharePoint list
  //   var requestURL = this.context.pageContext.web.absoluteUrl;
  //   return this.context.spHttpClient
  //     .get(
  //       requestURL + `/_api/web/lists/GetByTitle('PODetails')/items`,
  //       SPHttpClient.configurations.v1
  //     )
  //     .then((response: SPHttpClientResponse) => {
  //       return response.json();
  //     });
  // }

  //Getting Invoice List Data
  private _getInvoiceListData(): Promise<ISPInvoiceLists> {
    //Rest API to call SharePoint list
    var requestURL = this.context.pageContext.web.absoluteUrl;
    return this.context.spHttpClient
      .get(
        requestURL + `/_api/web/lists/GetByTitle('InvoiceList')/items`,
        SPHttpClient.configurations.v1
      )
      .then((response: SPHttpClientResponse) => {
        return response.json();
      });
  }
  private updatePOStatus(items: ISPTaskList[]): void {
    items.forEach((item: ISPTaskList) => {
      if (item.PoStatus == "Approved") {
        item.PoStatus = "Declined";
      } else if (item.PoStatus == "Pending") {
        item.PoStatus = "Declined";
      }
    });
  }

  //Rendering task List
  private _renderTaskList(items: ISPTaskList[]): void {
    let html: string = "";
    let poNumber = this.domElement.getElementsByTagName("tr");
    let vendorNo = this.domElement.getElementsByTagName("tr");
    //  poCount = items.length;
    items.forEach((item: ISPTaskList) => {
      if (item.PoStatus == "pending") {
        html += `
            <tr>
              <td scope="row" class="poNumber">${item.PoNumber}</td>
              <td>${item.Description}</td>
              <td>${item.VendorName}</td>
              <td id="vendorNo">${item.InvoiceNo}</td>
              <td>&#8377; ${item.TotalAmount}</td>
              <td id="buttonReview" name="buttonReview" value=${item.PoNumber} alt=${item.InvoiceNo} class="${styles.review} reviewButton" id='review'>Review</td>
              </tr>
`;
        //this._setButtonEventHandlers();
      }
    });

    //const reviewButton:Element = this.domElement.querySelector(".reviewButton");

    const listContainer: Element = this.domElement.querySelector(
      "#spTaskListContainer"
    );

    console.log(html);
    console.log(listContainer.innerHTML);
    listContainer.innerHTML = html;
    listContainer.addEventListener("click", () => {
      //this.showEvent(this);
      this.submitPurchaseOrder(event);
    });
  }

  //Rendering Invoice List
  private _renderInvoiceList(items: ISInvoiceList[]): void {
    let html: string = "";
    // invoiceCount = items.length;
    items.forEach((item: ISInvoiceList) => {
      if (item.PoStatus == "pending") {
        html += `
            <tr>
              <td scope="row">${item.Invoiceno_x002e_}</td>
              <td id="poNumber">${item.POno_x002e_}</td>
              <td>${item.Description}</td>
              <td>${item.Vendorname}</td>
              <td id="vendorNo">${item.Vendorno_x002e_}</td>
               <td>&#8377; ${item.Amount}</td>

               <td id="buttonReview" name="buttonReview"  value = ${item.POno_x002e_} alt=${item.Vendorno_x002e_} class="${styles.review} reviewButton" id='review'>Review</td>

               </tr>
`;
        //this._setButtonEventHandlers();
      }
    });

    //const reviewButton:Element = this.domElement.querySelector(".reviewButton");

    const listContainer: Element = this.domElement.querySelector(
      "#spInvoiceListContainer"
    );

    console.log(html);
    console.log(listContainer.innerHTML);
    listContainer.innerHTML = html;
    listContainer.addEventListener("click", () => {
      //this.showEvent(this);
      this.submitPurchaseOrder(event);
    });

    //this._setButtonEventHandlers();
  }

  private _renderListAsync(): void {
    this._getTaskListData().then(response => {
      this._renderTaskList(response.value);
      this.updatePOStatus(response.value);
    });
    //}
  }

  private _renderInvoiceListAsync(): void {
    this._getInvoiceListData().then(response => {
      this._renderInvoiceList(response.value);
      //this.updatePOStatus(response.value);
    });
    //}
  }

  public render(): void {
    let cssURL =
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
    SPComponentLoader.loadCss(cssURL);
    this.domElement.innerHTML = `
     <div class="${styles.taskTab}">
           <div class="${styles.heading}"> Pending Submissions </div>
              <div class="${styles.row}">
                <div class="${styles.grid1}">
                  <span class="${
                    styles.title
                  }">12 Days of pending timesheet</span>
                  <div>
                  <div class="${styles.button}">
                    <span class="${
                      styles.label
                    }" id="full-timesheet">Timesheet</span>
                  </div>
                  </div>
                </div>
                 <div class="${styles.grid2}">
                  <span class="${
                    styles.title
                  }">$25,000 Unreconciled expenses</span>
                  <div>
                  <a href="https://aka.ms/spfx" class="${styles.button}">
                    <span class="${styles.label}">Expenses</span>
                  </a>
                  </div>
                </div>
              </div>
              <div class="${styles.row}">
              <div class="${styles.heading}"> Pending Approvals </div>
   <div class="panel-group" id="accordion">
                <div class="${styles.panel}">
                      <div class="${
                        styles.subheading
                      }" data-toggle="collapse" data-parent="#accordion" href="#collapse1">Purchased Orders</div>
                  <div id="collapse1" class="panel-collapse collapse">
                    <div>
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">PoNumber</th>
                          <th scope="col">Description</th>
                          <th scope="col">VendorName</th>
                          <th scope="col">VendorNo</th>
                          <th scope="col">TotalAmount</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                        <tbody id="spTaskListContainer">
                          ${this._renderListAsync()}
                        </tbody>
                    </table>
                    </div>
                    </div>
       </div>
                    <div class="${styles.panel}">
                          <div class="${
                            styles.subheading
                          }" data-toggle="collapse" data-parent="#accordion" href="#collapse2">Invoice
          </div>
                      <div id="collapse2" class="panel-collapse collapse in">
                        <div>
                          <table class="table table-bordered" style="position:relative;top:-16px;">
                          <thead>
                            <tr>
                              <th scope="col">InvoiceNo</th>
                              <th scope="col">PoNumber</th>
                              <th scope="col">Description</th>
                              <th scope="col">VendorName</th>
                              <th scope="col">VendorNo</th>
                              <th scope="col">Amount</th>
                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody id="spInvoiceListContainer">
                            ${this._renderInvoiceListAsync()}
                          </tbody>
                        </table>
                        </div>
                      </div>
                    </div>
            <div class="${styles.panel}">
                   <div class="${
                     styles.subheading
                   }" data-toggle="collapse" data-parent="#accordion" href="#collapse3">Inventory (0)</div>
              <div id="collapse3" class="panel-collapse collapse">
                <div>
                <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">InvoiceNo</th>
                              <th scope="col">PoNumber</th>
                              <th scope="col">Description</th>
                              <th scope="col">VendorName</th>
                              <th scope="col">VendorNo</th>
                              <th scope="col">Amount</th>
                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody id="spInvoiceListContainer">
                            ${this._renderInvoiceListAsync()}
                          </tbody>
                        </table>
                </div>
              </div>
            </div>
   </div>
   </div>
   </div>
 </div>`;
  }
  private _setButtonEventHandlers(): void {
    let button = document.body.querySelector("#full-timesheet");
    button.addEventListener("click", () => {
      this.pendingDates();
    });
  }
  private pendingDates() {
    let taskInfoObj = {
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
    microsoftTeams.tasks.startTask(taskInfoObj, this.submitHandler);
  }
  private submitPurchaseOrder(event) {
    console.log(event);
    let PONumber = event.srcElement.attributes[2].value;
    let vendorNo = event.srcElement.attributes[3].value;
    let taskInfo = {
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
    microsoftTeams.tasks.startTask(taskInfo, this.submitHandler);
    //this.updatePOStatus();
  }

  private getLatestItemId(): Promise<number> {
    return new Promise<number>(
      (
        resolve: (itemId: number) => void,
        reject: (error: any) => void
      ): void => {
        this.context.spHttpClient
          .get(
            `${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('PurchaseOrders')/items?$orderby=Id desc&$top=1&$select=id`,
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
  //Update Po Status
  public updatePoStatus(updateObj): void {
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
            `${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('PurchaseOrders')/items(${latestItemId})?$select=Title,Id`,
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
        (response: SPHttpClientResponse): Promise<ISPTaskList> => {
          return response.json();
        }
      )
      .then((item: ISPTaskList): void => {
        //  console.log(`Item ID1: ${item.Id}, Title: ${item.Title}`);
        //item.NotificaitionTime = updateObj;
        const body: string = JSON.stringify({
          PoStatus: updateObj.PoStatus
        });

        console.log(body);
        this.context.spHttpClient
          .post(
            `${this.context.pageContext.web.absoluteUrl}/_api/web/lists(guid%27326cdbd1-840e-4ee7-be55-4019301c2126%27)/items(${latestItemId})`,
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
  public submitHandler(err, result) {
    this.updatePoStatus(result.PoStatus);
    if (result.action == "podecline") {
      let taskInfo = {
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
      microsoftTeams.tasks.startTask(taskInfo);
      // this.updatePOStatus(result.action);
    }

    if (result.action == "cancelPo") {
      microsoftTeams.tasks.submitTask();
    }

    if (result.action == "closePending") {
      microsoftTeams.tasks.submitTask();
    }
    if (result.action == "donedecline") {
      microsoftTeams.tasks.submitTask();
    } else {
      microsoftTeams.tasks.submitTask();
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
