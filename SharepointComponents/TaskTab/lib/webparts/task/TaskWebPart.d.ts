import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from "@microsoft/sp-webpart-base";
export interface ITaskTabWebPartProps {
    description: string;
    POLength: number;
    InvoiceLentgh: number;
}
export interface ISPPOLists {
    value: ISPPODetail[];
}
export interface ISPPODetail {
    PONumber: string;
    InvoiceNo: string;
    ItemCode: string;
    ItemDescription: string;
    UnitPrice: string;
    Quantity: string;
}
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
    Title?: string;
    Id: number;
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
    Amount: string;
    Title?: string;
    Id: number;
}
export default class TaskTabWebPart extends BaseClientSideWebPart<ITaskTabWebPartProps> {
    constructor();
    private _getTaskListData;
    private _getPODetailList;
    private _getInvoiceListData;
    private _renderTaskList;
    private _renderInvoiceList;
    private _renderListAsync;
    private _renderInvoiceListAsync;
    render(): void;
    private _setButtonEventHandlers;
    private pendingDates;
    private submitPurchaseOrder;
    private getLatestItemId;
    private UpdateListItem;
    private deleteItem;
    submitHandler(err: any, result: any): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=TaskWebPart.d.ts.map