define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "載入偵錯指令碼時發生錯誤。請確定伺服器正在執行且 \"{0}\" 參數 URL 正確無誤。",
      "errorLoadingDebugScriptHTTP": "載入偵錯指令碼時發生錯誤。請確定伺服器正在執行、\"{0}\" 參數 URL 正確無誤，且允許載入不安全的指令碼。另請考慮使用開發憑證和透過 HTTPS 提供偵錯指令碼。",
      "errorLoadingDebugScriptMalformed": "載入偵錯指令碼時發生錯誤。偵錯 URL ({0}) 的格式似乎不正確。",
      "errorLoadingDebugScriptUnknown": "載入偵錯指令碼時發生未知錯誤。",
      "errorLoadingDebugLoaderTitle": "載入偵錯載入器時發生錯誤。",
      "errorLoadingDebugManifestTitle": "載入偵錯資訊清單時發生錯誤。",
      "errorLoadingUnknownTitle": "載入偵錯指令碼時發生錯誤。"
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "遺漏元件或初始設定式函數。",
      "closeDeveloperToolsAriaLabel": "關閉開發人員工具。"
    },
    "_HyNcqqy05+791EWZRJ/Erg": {
      "listSeparator": "、",
      "loadComponentError": "Failed to load component \"{0}\" ({1}). Original error: {2}",
      "loadComponentDependencyError": "Failed to load component dependency \"{0}\" from component \"{1}\" ({2}). Original error: {3}",
      "loadComponentDependencyFailoverPathError": "Failed to load component dependency \"{0}\" with failover path \"{1}\" from component \"{2}\" ({3}). Original error: {4}",
      "loadPathDependencyError": "Failed to load path dependency \"{0}\" from component \"{1}\" ({2}). Original error: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Failed to load path dependency \"{0}\" from component \"{1}\" ({2}) due to another dependency that failed to load.",
      "loadEntryPointError": "Failed to load entry point from component \"{0}\" ({1}). Original error: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() returned an empty object for component \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() returned an object with an empty default property for component \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "The entry point for component \"{0}\" ({1}) has a dependency on \"{2}\" that is not declared in the manifest.",
      "loadScriptWithStringError": "loadScript function doesn't allow a string as 2nd parameter. Use ILoadScriptOptions instead.",
      "urlStatusLocalhostFileNotFoundError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server. Make sure that you are running 'gulp serve'.",
      "urlStatusFileNotFoundError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server.",
      "urlStatusForbiddenError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The access to the file is forbidden.",
      "urlStatusClientErrorError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was an error requesting the file.",
      "urlStatusServerErrorError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a problem in the server.",
      "urlStatusLocalhostNetworkErrorError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem. Make sure that you are running 'gulp serve' and you have run 'gulp trust-dev-cert'.",
      "urlStatusHttpsNetworkErrorError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem. This may be a problem with a HTTPS certificate. Make sure you have the right certificate.",
      "urlStatusNetworkErrorError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.",
      "urlStatusUndefinedError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}) because of unknown problems.",
      "failedToCreateGlobalVariableError": "Failed to create global variable \"{0}\" from script \"{1}\"",
      "dependencyLoadError": "Failed to load module '{0}' because dependency {1} was not loaded",
      "missingPathDependencyError": "Missing path dependency \"{0}\" from component \"{1}\" ({2}). Existing path dependencies: {3}"
    },
    "_F4HRA/FKfb0X6JapWo2vTw": {
      "loadComponentLog": "Loading component \"{0}\" ({1}).",
      "loadComponentEndLog": "Component \"{0}\" ({1}) loaded.",
      "loadComponentRetryLog": "Loading component \"{0}\" ({1}). Attempt {2} of {3}.",
      "loadPathDependencyLog": "Loading path dependency \"{0}\" from component \"{1}\" ({2})",
      "isUndefinedValidateError": "The value for \"{0}\" must not be undefined"
    },
    "_fVUay/3ENa56/o3BfjRdrw": {
      "loadComponentMaxRetriesError": "Attempted to load component \"{0}\" ({1}) {2} times without success.",
      "manifestNotFoundError": "Manifest not found for component id \"{0}\" and version \"{1}\"."
    },
    "_ZZX3HYmO09A0dtXnoncSkA": {
      "tooManyComponentsError": "Too many components found for id \"{0}\".",
      "deleteComponentLog": "Deleting component \"{0}\" version \"{1}\" from the store.",
      "noComponentFoundError": "No component found for id \"{0}\".",
      "manifestNotFoundByIdError": "Manifest not found for component id \"{0}\".",
      "tooManyManifestsError": "{0} manifests (versions {1}) found for component \"{2}\".",
      "tooManyCompatibleVersionsError": "{0} compatible versions ({1}) found for component \"{2}\" version \"{3}\"."
    },
    "_C14mR9Diz4DseFaa7aiq6A": {
      "browserNotSupportedError": "This version of your browser is not supported. Please update your browser to the latest version.",
      "loaderUserFriendlyError": "無法在此頁面上載入應用程式。您可以使用瀏覽器的 [上一頁] 按鈕以重試。如果問題持續發生，請連絡網站的系統管理員，並提供技術詳細資料給他們。",
      "invalidPreloadedDataError": "Invalid preloaded data."
    },
    "_a4wKXyUGuAbOcWmuhzMXpg": {
      "systemConfigDisabledError": "System.config() is not supported. Use a manifest to specify the configuration."
    },
    "_KuTfBwDffam4eyPQEJupWw": {
      "ie9OrOlderNotSupportedError": "This page does not support Internet Explorer releases older than version 10. Please update your web browser.",
      "firefox43OrOlderNotSupportedError": "This page does not support Mozilla Firefox releases older than version 44. Please update your web browser.",
      "platformFailedToLoadError": "Platform failed to load. Id: \"{0}\", name: \"{1}\"",
      "platformFailedToLoadWithMessageError": "Platform failed to load. Id: \"{0}\", name: \"{1}\". Error: {2}",
      "applicationFailedToInitializeError": "Error initializing application. Error: {0}",
      "resourceNotFoundError": "Resource \"{0}\" not found in loader configuration of manifest for component \"{1}\" ({2}).",
      "noFailoverPathError": "Cannot call resolveAddress() on a component with no failover path"
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "警告!",
      "warningLine1": "使用此工具會使您暴露在潛在安全性威脅之中，這可能會導致其他人獲得您個人 Office 365 資料 (文件、電子郵件、交談等等) 的存取權。請先確定您信任要求您存取此工具的人員或組織，然後再繼續。",
      "warningLine2": "在這裡深入了解: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "載入偵錯資訊清單時發生錯誤。",
      "debugManifestErrorDismissButtonText": "關閉"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "是否允許偵錯指令碼?",
      "allowDebugLoaderTitle": "是否允許偵錯載入器?",
      "allowDebugLoaderAndManifestsTitle": "是否允許偵錯載入器和偵錯指令碼?",
      "debugManifestLoadingWarning": "警告: 此頁面包含不安全的指令碼，如果載入則可能會傷害您的電腦。除非您信任開發人員並了解相關風險，否則請勿繼續執行。",
      "debugManifestLoadingWarning2": "若您無法確定，請按一下 [{0}]。",
      "debugManifestLoadingConfirm": "載入偵錯指令碼",
      "debugManifestLoadingCancel": "不載入偵錯指令碼",
      "debugManifestLoadingCalloutText": "如果您不知道該怎麼做，請按一下這裡。"
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "正在載入...",
      "developerToolsTabLoadingUnknownError": "載入開發人員工具模組時發生未知的錯誤。"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "效能",
      "ErrorAccessingPerfDataErrorMessage": "無法擷取效能資料: 物件為 Null 或未定義。",
      "ErrorAccessingRedirectDataErrorMessage": "存取 HTTP 重新導向效能資料時發生問題。",
      "ErrorParsingPercievedLatencyErrorMessage": "剖析認知延遲資料時發現錯誤。",
      "ErrorParsingApiDataErrorMessage": "剖析 API 資料時發現錯誤。",
      "UnkownPerformanceDataErrorMessage": "發生未知的錯誤: {0}",
      "DefaultWebPartName": "網頁組件",
      "ServerResponseLabel": "伺服器回應",
      "ApplicationInitializationLabel": "應用程式初始化",
      "ScriptFetchEvalLabel": "指令碼擷取和評估",
      "SpLoaderStartLabel": "SPFx 初始化",
      "PageRenderLabel": "網頁轉譯",
      "LeftNavRenderLabel": "左方瀏覽轉譯",
      "CanvasRenderLabel": "畫布轉譯",
      "LayoutRenderLabel": "版面配置轉譯",
      "RedirectResponseLabel": "重新導向回應",
      "AppLoadLabel": "應用程式載入",
      "RenderWebPartsLabel": "網頁組件轉譯",
      "TotalRenderTimeLabel": "總計",
      "GeneralErrorMessage": "很抱歉，擷取效能資料時發生錯誤。",
      "ErrorMessagePrefix": "錯誤訊息: {0}",
      "PerformanceDataHint": "注意: 新增或移除網頁組件後，請重新整理頁面以查看更新後的效能資料。",
      "ModulesLoadedLegendLabel": "已載入模組",
      "InitializationLegendLabel": "初始化",
      "RenderTimeLegendLabel": "轉譯時間",
      "InitializationTimeLabel": "初始化時間",
      "ModuleLoadingTimeLabel": "模組載入時間",
      "ModuleLazyLoadingDelayLabel": "模組載入延遲",
      "DataFetchTimeLabel": "資料擷取時間",
      "DataFetchLegendLabel": "資料擷取",
      "ItemsColumnHeader": "項目",
      "DurationColumnHeader": "持續時間",
      "MillisecondsUnitLabel": "{0} 毫秒",
      "NAPlaceholder": "無"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "資訊清單",
      "noManifestSelected": "未選取資訊清單"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "追蹤",
      "EmptyTraceData": "未載入任何追蹤。",
      "ExportCSVButtonLabel": "匯出 CSV",
      "LevelHeaderLabel": "層級",
      "MessageHeaderLabel": "訊息",
      "ScopeHeaderLabel": "範圍",
      "SourceHeaderLabel": "來源",
      "TimestampHeaderLabel": "時間戳記",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}"
    }
  };

  strings.default = strings;
  return strings;
});