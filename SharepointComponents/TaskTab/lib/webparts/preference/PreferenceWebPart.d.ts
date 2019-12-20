import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from "@microsoft/sp-webpart-base";
export interface IPreferencesTabWebPartProps {
    description: string;
    listName: string;
}
export interface PreferenceModel {
    value: userInfo[];
}
export interface userInfo {
    UserName: string;
    UniqueID0: string;
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
    NewsNotifyMe: string;
    TaskNotifyMe: string;
}
export default class PreferencesTabWebPart extends BaseClientSideWebPart<IPreferencesTabWebPartProps> {
    constructor();
    getLatestItemId(): Promise<number>;
    updateItem(updateObj: any): void;
    _getUserInfoData(): Promise<PreferenceModel>;
    _renderUserListData(PrefItems: userInfo[]): void;
    _renderListAsync(): void;
    private showNews;
    private showET;
    private showTask;
    _saveButtonEventHandlers(intersectionCategoryEvent: any): void;
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=PreferenceWebPart.d.ts.map