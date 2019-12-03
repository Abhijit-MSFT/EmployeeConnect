import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from "@microsoft/sp-webpart-base";
export interface IPreferencesTabWebPartProps {
    description: string;
}
export default class PreferencesTabWebPart extends BaseClientSideWebPart<IPreferencesTabWebPartProps> {
    constructor();
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=PreferenceWebPart.d.ts.map