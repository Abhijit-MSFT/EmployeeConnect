define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Error loading debug script. Ensure the server is running and the \"{0}\" parameter URL is correct.",
      "errorLoadingDebugScriptHTTP": "Error loading debug script. Ensure the server is running, the \"{0}\" parameter URL is correct, and loading unsafe scripts is allowed. Also consider using a development certificate and serving debug scripts over HTTPS.",
      "errorLoadingDebugScriptMalformed": "Error loading debug script. The debug URL ({0}) appears to be malformed.",
      "errorLoadingDebugScriptUnknown": "Unknown error loading a debug script.",
      "errorLoadingDebugLoaderTitle": "Error loading debug loader.",
      "errorLoadingDebugManifestTitle": "Error loading debug manifests.",
      "errorLoadingUnknownTitle": "Error loading debug scripts."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Missing component or initializer function.",
      "closeDeveloperToolsAriaLabel": "Close developer tools."
    },
    "_HyNcqqy05+791EWZRJ/Erg": {
      "listSeparator": ", ",
      "loadComponentError": "***Failed to load component \"{0}\" ({1}). Original error: {2}",
      "loadComponentDependencyError": "***Failed to load component dependency \"{0}\" from component \"{1}\" ({2}). Original error: {3}",
      "loadComponentDependencyFailoverPathError": "***Failed to load component dependency \"{0}\" with failover path \"{1}\" from component \"{2}\" ({3}). Original error: {4}",
      "loadPathDependencyError": "***Failed to load path dependency \"{0}\" from component \"{1}\" ({2}). Original error: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "***Failed to load path dependency \"{0}\" from component \"{1}\" ({2}) due to another dependency that failed to load.",
      "loadEntryPointError": "***Failed to load entry point from component \"{0}\" ({1}). Original error: {2}",
      "loadComponentReturnsEmptyError": "***loadComponent() returned an empty object for component \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "***loadComponent() returned an object with an empty default property for component \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "***The entry point for component \"{0}\" ({1}) has a dependency on \"{2}\" that is not declared in the manifest.",
      "loadScriptWithStringError": "***loadScript function doesn't allow a string as 2nd parameter. Use ILoadScriptOptions instead.",
      "urlStatusLocalhostFileNotFoundError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server. Make sure that you are running 'gulp serve'.",
      "urlStatusFileNotFoundError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server.",
      "urlStatusForbiddenError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The access to the file is forbidden.",
      "urlStatusClientErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was an error requesting the file.",
      "urlStatusServerErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a problem in the server.",
      "urlStatusLocalhostNetworkErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem. Make sure that you are running 'gulp serve' and you have run 'gulp trust-dev-cert'.",
      "urlStatusHttpsNetworkErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem. This may be a problem with a HTTPS certificate. Make sure you have the right certificate.",
      "urlStatusNetworkErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.",
      "urlStatusUndefinedError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}) because of unknown problems.",
      "failedToCreateGlobalVariableError": "***Failed to create global variable \"{0}\" from script \"{1}\"",
      "dependencyLoadError": "***Failed to load module '{0}' because dependency {1} was not loaded",
      "missingPathDependencyError": "***Missing path dependency \"{0}\" from component \"{1}\" ({2}). Existing path dependencies: {3}"
    },
    "_F4HRA/FKfb0X6JapWo2vTw": {
      "loadComponentLog": "***Loading component \"{0}\" ({1}).",
      "loadComponentEndLog": "***Component \"{0}\" ({1}) loaded.",
      "loadComponentRetryLog": "***Loading component \"{0}\" ({1}). Attempt {2} of {3}.",
      "loadPathDependencyLog": "***Loading path dependency \"{0}\" from component \"{1}\" ({2})",
      "isUndefinedValidateError": "***The value for \"{0}\" must not be undefined"
    },
    "_fVUay/3ENa56/o3BfjRdrw": {
      "loadComponentMaxRetriesError": "***Attempted to load component \"{0}\" ({1}) {2} times without success.",
      "manifestNotFoundError": "***Manifest not found for component id \"{0}\" and version \"{1}\"."
    },
    "_ZZX3HYmO09A0dtXnoncSkA": {
      "tooManyComponentsError": "***Too many components found for id \"{0}\".",
      "deleteComponentLog": "***Deleting component \"{0}\" version \"{1}\" from the store.",
      "noComponentFoundError": "***No component found for id \"{0}\".",
      "manifestNotFoundByIdError": "***Manifest not found for component id \"{0}\".",
      "tooManyManifestsError": "***{0} manifests (versions {1}) found for component \"{2}\".",
      "tooManyCompatibleVersionsError": "***{0} compatible versions ({1}) found for component \"{2}\" version \"{3}\"."
    },
    "_C14mR9Diz4DseFaa7aiq6A": {
      "browserNotSupportedError": "***This version of your browser is not supported. Please update your browser to the latest version.",
      "loaderUserFriendlyError": "Can't load the application on this page. Use the browser Back button to retry. If the problem persists, contact the administrator of the site and give them the information in Technical Details.",
      "invalidPreloadedDataError": "***Invalid preloaded data."
    },
    "_a4wKXyUGuAbOcWmuhzMXpg": {
      "systemConfigDisabledError": "***System.config() is not supported. Use a manifest to specify the configuration."
    },
    "_KuTfBwDffam4eyPQEJupWw": {
      "ie9OrOlderNotSupportedError": "***This page does not support Internet Explorer releases older than version 10. Please update your web browser.",
      "firefox43OrOlderNotSupportedError": "***This page does not support Mozilla Firefox releases older than version 44. Please update your web browser.",
      "platformFailedToLoadError": "***Platform failed to load. Id: \"{0}\", name: \"{1}\"",
      "platformFailedToLoadWithMessageError": "***Platform failed to load. Id: \"{0}\", name: \"{1}\". Error: {2}",
      "applicationFailedToInitializeError": "***Error initializing application. Error: {0}",
      "resourceNotFoundError": "***Resource \"{0}\" not found in loader configuration of manifest for component \"{1}\" ({2}).",
      "noFailoverPathError": "***Cannot call resolveAddress() on a component with no failover path"
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Warning!",
      "warningLine1": "Use of this tool exposes you to potential security threats which can result in others gaining access to your personal Office 365 data (documents, emails, conversations and more). Make sure you trust the person or organization that asked you to access this tool before proceeding.",
      "warningLine2": "Learn more here: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "An error occured loading debug manifests.",
      "debugManifestErrorDismissButtonText": "Dismiss"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Allow debug scripts?",
      "allowDebugLoaderTitle": "Allow debug loader?",
      "allowDebugLoaderAndManifestsTitle": "Allow debug loader and debug scripts?",
      "debugManifestLoadingWarning": "WARNING: This page contains unsafe scripts that, if loaded, could potentially harm your computer. Do not proceed unless you trust the developer and understand the risks.",
      "debugManifestLoadingWarning2": "If you are unsure, click {0}.",
      "debugManifestLoadingConfirm": "Load debug scripts",
      "debugManifestLoadingCancel": "Don't load debug scripts",
      "debugManifestLoadingCalloutText": "If you don't know what to do, click here."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Loading...",
      "developerToolsTabLoadingUnknownError": "Unknown error loading developer tools module."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Performance",
      "ErrorAccessingPerfDataErrorMessage": "Unable to retrieve performance data: object is null or undefined.",
      "ErrorAccessingRedirectDataErrorMessage": "There was a problem accessing the HTTP redirect performance data.",
      "ErrorParsingPercievedLatencyErrorMessage": "An error was caught when parsing the percieved latency data.",
      "ErrorParsingApiDataErrorMessage": "An error was caught when parsing the API data.",
      "UnkownPerformanceDataErrorMessage": "An unknown error has occured: {0}",
      "DefaultWebPartName": "Web Part",
      "ServerResponseLabel": "Server Response",
      "ApplicationInitializationLabel": "Application Initialization",
      "ScriptFetchEvalLabel": "Script fetch and evaluation",
      "SpLoaderStartLabel": "SPFx initialization",
      "PageRenderLabel": "Page Render",
      "LeftNavRenderLabel": "Left Navigation Render",
      "CanvasRenderLabel": "Canvas Render",
      "LayoutRenderLabel": "Layout Render",
      "RedirectResponseLabel": "Redirect Response",
      "AppLoadLabel": "Application Load",
      "RenderWebPartsLabel": "Web Parts Render",
      "TotalRenderTimeLabel": "Total",
      "GeneralErrorMessage": "Sorry, something went wrong while retrieving the performance data.",
      "ErrorMessagePrefix": "Error Message: {0}",
      "PerformanceDataHint": "Note: After adding or removing a web part, refresh the page to see updated performance data.",
      "ModulesLoadedLegendLabel": "Modules Loaded",
      "InitializationLegendLabel": "Initialization",
      "RenderTimeLegendLabel": "Render Time",
      "InitializationTimeLabel": "Initialization time",
      "ModuleLoadingTimeLabel": "Module loading time",
      "ModuleLazyLoadingDelayLabel": "Module loading delayed",
      "DataFetchTimeLabel": "Data fetch time",
      "DataFetchLegendLabel": "Data Fetch",
      "ItemsColumnHeader": "Items",
      "DurationColumnHeader": "Duration",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "N/A"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifests",
      "noManifestSelected": "No manifest selected"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Trace",
      "EmptyTraceData": "No traces loaded.",
      "ExportCSVButtonLabel": "Export CSV",
      "LevelHeaderLabel": "Level",
      "MessageHeaderLabel": "Message",
      "ScopeHeaderLabel": "Scope",
      "SourceHeaderLabel": "Source",
      "TimestampHeaderLabel": "Timestamp",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}"
    }
  };

  strings.default = strings;
  return strings;
});