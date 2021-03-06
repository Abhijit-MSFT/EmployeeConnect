define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Error al cargar el script de depuración. Asegúrese de que se está ejecutando el servidor y la URL del parámetro \"{0}\" es correcta.",
      "errorLoadingDebugScriptHTTP": "Error al cargar el script de depuración. Asegúrese de que el servidor se está ejecutando, la URL del parámetro \"{0}\" es correcta, y se permite cargar scripts peligrosos. Considere también el uso de un certificado de desarrollo y proporcione los scripts de depuración a través de HTTPS.",
      "errorLoadingDebugScriptMalformed": "Error al cargar el script de depuración. La URL de depuración ({0}) parece tener un formato incorrecto.",
      "errorLoadingDebugScriptUnknown": "Error desconocido al cargar un script de depuración.",
      "errorLoadingDebugLoaderTitle": "Error al cargar el cargador de depuración.",
      "errorLoadingDebugManifestTitle": "Error al cargar los manifiestos de depuración.",
      "errorLoadingUnknownTitle": "Error al cargar los scripts de depuración."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Falta la función de componente o inicializador.",
      "closeDeveloperToolsAriaLabel": "Cierre las herramientas de desarrollo."
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
      "loaderUserFriendlyError": "No se puede cargar la aplicación en esta página. Use el botón Atrás del explorador para intentarlo de nuevo. Si el problema persiste, póngase en contacto con el administrador del sitio y proporciónele la información que aparece en Detalles técnicos.",
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
      "warningHeading": "Advertencia",
      "warningLine1": "El uso de esta herramienta le expone a amenazas de seguridad potenciales que pueden provocar que otros usuarios obtengan acceso a sus datos personales de Office 365 (documentos, correos electrónicos, conversaciones y mucho más). Asegúrese de que confía en la persona o en la organización que le ha pedido que obtenga acceso a esta herramienta antes de continuar.",
      "warningLine2": "Obtenga más información aquí: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Error al cargar los manifiestos de depuración.",
      "debugManifestErrorDismissButtonText": "Descartar"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "¿Desea permitir los scripts de depuración?",
      "allowDebugLoaderTitle": "¿Permitir cargador de depuración?",
      "allowDebugLoaderAndManifestsTitle": "¿Permitir cargador de depuración y scripts de depuración?",
      "debugManifestLoadingWarning": "ADVERTENCIA: Esta página contiene scripts no seguros que, si se cargan, podrían dañar el equipo. No continúe a menos que confíe en el desarrollador y comprenda los riesgos.",
      "debugManifestLoadingWarning2": "Si no lo tiene claro, haga clic en {0}.",
      "debugManifestLoadingConfirm": "Cargar scripts de depuración",
      "debugManifestLoadingCancel": "No cargar scripts de depuración",
      "debugManifestLoadingCalloutText": "Si no sabe lo que hacer, haga clic aquí."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Cargando...",
      "developerToolsTabLoadingUnknownError": "Se ha producido un error desconocido al cargar el módulo de herramientas de desarrollo."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Rendimiento",
      "ErrorAccessingPerfDataErrorMessage": "No se pueden recuperar los datos de rendimiento: el objeto es nulo o no se ha definido.",
      "ErrorAccessingRedirectDataErrorMessage": "No se pudo obtener acceso a los datos de rendimiento de redireccionamiento HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "Se detectó un error al analizar los datos de latencia observados.",
      "ErrorParsingApiDataErrorMessage": "Se detectó un error al analizar los datos de la API.",
      "UnkownPerformanceDataErrorMessage": "Se ha producido un error desconocido: {0}",
      "DefaultWebPartName": "Elemento web",
      "ServerResponseLabel": "Respuesta del servidor",
      "ApplicationInitializationLabel": "Inicialización de aplicaciones",
      "ScriptFetchEvalLabel": "Obtención y evaluación de scripts",
      "SpLoaderStartLabel": "Inicialización de SPFx",
      "PageRenderLabel": "Representación de la página",
      "LeftNavRenderLabel": "Representación de navegación izquierda",
      "CanvasRenderLabel": "Representación de lienzo",
      "LayoutRenderLabel": "Representación del diseño",
      "RedirectResponseLabel": "Respuesta de redireccionamiento",
      "AppLoadLabel": "Carga de aplicaciones",
      "RenderWebPartsLabel": "Representación de elementos web",
      "TotalRenderTimeLabel": "Total",
      "GeneralErrorMessage": "Se produjo un error al recuperar los datos de rendimiento.",
      "ErrorMessagePrefix": "Mensaje de error: {0}",
      "PerformanceDataHint": "Nota: Después de agregar o quitar un elemento web, actualice la página para ver los datos de rendimiento actualizados.",
      "ModulesLoadedLegendLabel": "Módulos cargados",
      "InitializationLegendLabel": "Inicialización",
      "RenderTimeLegendLabel": "Tiempo de representación",
      "InitializationTimeLabel": "Tiempo de inicialización",
      "ModuleLoadingTimeLabel": "Tiempo de carga del módulo",
      "ModuleLazyLoadingDelayLabel": "Carga del módulo retrasada",
      "DataFetchTimeLabel": "Tiempo de captura de datos",
      "DataFetchLegendLabel": "Captura de datos",
      "ItemsColumnHeader": "Elementos",
      "DurationColumnHeader": "Duración",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "N/D"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifiestos",
      "noManifestSelected": "No se ha seleccionado ningún manifiesto"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Seguimiento",
      "EmptyTraceData": "No se ha cargado ningún seguimiento.",
      "ExportCSVButtonLabel": "Exportar CSV",
      "LevelHeaderLabel": "Nivel",
      "MessageHeaderLabel": "Mensaje",
      "ScopeHeaderLabel": "Ámbito",
      "SourceHeaderLabel": "Origen",
      "TimestampHeaderLabel": "Marca de tiempo",
      "TimestampFormat": "{2}/{1}/{0} a las {3}:{4}:{5}:{6}"
    }
  };

  strings.default = strings;
  return strings;
});