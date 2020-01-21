declare interface IPreferenceWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module "PreferenceWebPartStrings" {
  const strings: IPreferenceWebPartStrings;
  export = strings;
}
