define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "डीबग सूची स्क्रिप्ट लोड करने में त्रुटि. सुनिश्चित करें कि सर्वर चल रहा है और \"{0}\" पैरामीटर URL सही है.",
      "errorLoadingDebugScriptHTTP": "डीबग स्क्रिप्ट लोड करने में त्रुटि. सुनिश्चित करें कि सर्वर चल रहा है, \"{0}\" पैरामीटर URL सही है और असुरक्षित स्क्रिप्ट्स लोड करने की अनुमति है. डेवलपमेंट प्रमाण पत्र का उपयोग करने और HTTPS पर डीबग स्क्रिप्ट्स सर्व करने पर विचार करें.",
      "errorLoadingDebugScriptMalformed": "डीबग स्क्रिप्ट लोड करने में त्रुटि. डीबग URL ({0}) विकृत लग रहा है.",
      "errorLoadingDebugScriptUnknown": "डीबग स्क्रिप्ट लोड करते समय अज्ञात त्रुटि.",
      "errorLoadingDebugLoaderTitle": "डीबग लोडर को लोड करने में त्रुटि.",
      "errorLoadingDebugManifestTitle": "डीबग सूचियाँ लोड करने में त्रुटि.",
      "errorLoadingUnknownTitle": "डीबग स्क्रिप्ट लोड करने में त्रुटि."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "घटक या आरंभक फ़ंक्शन गुम है.",
      "closeDeveloperToolsAriaLabel": "डेवलपर उपकरण बंद करें."
    },
    "_HyNcqqy05+791EWZRJ/Erg": {
      "listSeparator": ", ",
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
      "loaderUserFriendlyError": "इस पृष्ठ पर एप्लिकेशन लोड नहीं कर सकते. पुनर्प्रयास करने के लिए ब्राउज़र के वापस जाएँ बटन का उपयोग करें. अगर समस्या बनी रहती है, तो साइट के व्यवस्थापक से संपर्क करें और उन्हें तकनीकी विवरण में जानकारी दें.",
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
      "warningHeading": "चेतावनी!",
      "warningLine1": "इस उपकरण का उपयोग आपके समक्ष ऐसे संभावित सुरक्षा जोख़िमों को उजागर करता है जिसका परिणाम अन्य लोगों द्वारा आपके व्यक्तिगत Office 365 डेटा (दस्तावेज़, ईमेल्स, वार्तालाप इत्यादि) की पहुँच प्राप्त करना हो सकता है. आगे बढ़ने से पहले सुनिश्चित करें कि जिस व्यक्ति या संगठन ने इस उपकरण पर पहुँचने की आपसे अनुमति माँगी है, उस पर आपको विश्वास है.",
      "warningLine2": "यहाँ अधिक जानें: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "डीबग सूचियाँ लोड करते समय कोई त्रुटि उत्पन्न हुई.",
      "debugManifestErrorDismissButtonText": "ख़ारिज करें"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "डीबग स्क्रिप्ट्स की अनुमति दें?",
      "allowDebugLoaderTitle": "डीबग लोडर की अनुमति दें?",
      "allowDebugLoaderAndManifestsTitle": "डीबग लोडर और डीबग स्क्रिप्ट की अनुमति दें?",
      "debugManifestLoadingWarning": "चेतावनी: इस पृष्ठ में ऐसी असुरक्षित स्क्रिप्ट्स हैं, जिन्हें अगर लोड किया गया, तो संभवतः आपके कंप्यूटर को नुकसान पहुँच सकता है. जब तक आपको डेवलपर पर विश्वास न हो और आप जोखिमों को न समझते हों, तब तक आगे न बढ़ें.",
      "debugManifestLoadingWarning2": "अगर आप आश्वस्त नहीं हैं, तो {0} क्लिक करें.",
      "debugManifestLoadingConfirm": "डीबग स्क्रिप्ट लोड करें",
      "debugManifestLoadingCancel": "डीबग स्क्रिप्ट लोड नहीं करें",
      "debugManifestLoadingCalloutText": "यदि आप नहीं जानते कि क्या करना है, तो यहाँ क्लिक करें."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "लोड हो रहा है...",
      "developerToolsTabLoadingUnknownError": "डेवलपर उपकरण मॉड्यूल लोड करते समय अज्ञात त्रुटि."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "प्रदर्शन",
      "ErrorAccessingPerfDataErrorMessage": "प्रदर्शन डेटा पुनर्प्राप्त करने में असमर्थ: ऑब्जेक्ट नल या अनिर्धारित है.",
      "ErrorAccessingRedirectDataErrorMessage": "HTTP रीडायरेक्ट प्रदर्शन डेटा तक पहुँचने में कोई समस्या थी.",
      "ErrorParsingPercievedLatencyErrorMessage": "माना गया लेटेंसी डेटा पार्स करते समय कोई त्रुटि मिली.",
      "ErrorParsingApiDataErrorMessage": "API डेटा पार्स करते समय कोई त्रुटि मिली.",
      "UnkownPerformanceDataErrorMessage": "कोई अज्ञात त्रुटि हुई: {0}",
      "DefaultWebPartName": "वेब पार्ट",
      "ServerResponseLabel": "सर्वर प्रतिसाद",
      "ApplicationInitializationLabel": "ऐप्लिकेशन प्रारंभ करना",
      "ScriptFetchEvalLabel": "स्क्रिप्ट फ़ेच और मूल्यांकन",
      "SpLoaderStartLabel": "SPFx प्रारंभन",
      "PageRenderLabel": "पृष्ठ रेंडर",
      "LeftNavRenderLabel": "बायाँ नेविगेशन रेंडर",
      "CanvasRenderLabel": "कैनवास रेंडर",
      "LayoutRenderLabel": "लेआउट रेंडर",
      "RedirectResponseLabel": "प्रतिसाद रीडायरेक्ट करें",
      "AppLoadLabel": "एप्लिकेशन लोड",
      "RenderWebPartsLabel": "वेब पार्ट रेंडर करना",
      "TotalRenderTimeLabel": "कुल योग",
      "GeneralErrorMessage": "क्षमा करें, निष्पादन डेटा प्राप्त करते समय कुछ गलत हुआ.",
      "ErrorMessagePrefix": "त्रुटि संदेश: {0}",
      "PerformanceDataHint": "नोट: किसी वेब पार्ट को जोड़ने या निकालने के बाद, अद्यतन किया गया प्रदर्शन डेटा देखने के लिए पृष्ठ को ताज़ा करें.",
      "ModulesLoadedLegendLabel": "मॉड्यूल्स लोड किए गए",
      "InitializationLegendLabel": "प्रारंभन",
      "RenderTimeLegendLabel": "समय रेंडर करें",
      "InitializationTimeLabel": "प्रारंभ समय",
      "ModuleLoadingTimeLabel": "मॉड्यूल लोडिंग का मय",
      "ModuleLazyLoadingDelayLabel": "मॉड्यूल लोड करने में विलंब हुआ",
      "DataFetchTimeLabel": "डेटा प्राप्ति समय",
      "DataFetchLegendLabel": "डेटा प्राप्ति",
      "ItemsColumnHeader": "आइटम",
      "DurationColumnHeader": "अवधि",
      "MillisecondsUnitLabel": "{0} मिसे",
      "NAPlaceholder": "N/A"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "सूचियाँ",
      "noManifestSelected": "कोई सूची चयनित नहीं"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "ट्रेस करें",
      "EmptyTraceData": "कोई ट्रेस लोड नहीं किया गया.",
      "ExportCSVButtonLabel": "CSV निर्यात करें",
      "LevelHeaderLabel": "स्तर",
      "MessageHeaderLabel": "संदेश",
      "ScopeHeaderLabel": "क्षेत्र",
      "SourceHeaderLabel": "स्रोत",
      "TimestampHeaderLabel": "Timestamp",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}"
    }
  };

  strings.default = strings;
  return strings;
});