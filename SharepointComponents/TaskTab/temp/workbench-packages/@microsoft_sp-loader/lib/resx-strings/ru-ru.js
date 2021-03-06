define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Ошибка при загрузке сценария отладки. Убедитесь, что сервер запущен и параметр {0} содержит правильный URL-адрес.",
      "errorLoadingDebugScriptHTTP": "Ошибка при загрузке сценария отладки. Убедитесь, что сервер запущен, параметр {0} содержит правильный URL-адрес и разрешена загрузка небезопасных сценариев. Также рассмотрите возможность использования сертификата разработки и обслуживания сценариев отладки по протоколу HTTPS.",
      "errorLoadingDebugScriptMalformed": "Ошибка при загрузке сценария отладки. Вероятно, URL-адрес отладки ({0}) имеет неправильный формат.",
      "errorLoadingDebugScriptUnknown": "Неизвестная ошибка при загрузке сценария отладки.",
      "errorLoadingDebugLoaderTitle": "Ошибка при загрузке загрузчика отладки.",
      "errorLoadingDebugManifestTitle": "Ошибка при загрузке манифестов отладки.",
      "errorLoadingUnknownTitle": "Ошибка при загрузке сценариев отладки."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Отсутствует компонент или функция инициализатора.",
      "closeDeveloperToolsAriaLabel": "Закрыть средства разработчика."
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
      "loaderUserFriendlyError": "Не удается загрузить приложение на этой странице. Используйте кнопку \"Назад\" в браузере, чтобы повторить попытку. Если проблема сохранится, обратитесь к администратору сайта и предоставьте данные из раздела \"Технические подробности\".",
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
      "warningHeading": "Предупреждение.",
      "warningLine1": "Использование этого средства сопряжено с потенциальными угрозами безопасности ваших личных данных в Office 365 (документов, почты, бесед и т. д.). К этим данным могут получить доступ другие люди. Продолжайте, только если вы доверяете человеку или организации, которые попросили вас воспользоваться этим средством.",
      "warningLine2": "Подробнее: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Произошла ошибка при загрузке манифестов отладки.",
      "debugManifestErrorDismissButtonText": "Закрыть"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Разрешить сценарии отладки?",
      "allowDebugLoaderTitle": "Разрешить загрузчик отладки?",
      "allowDebugLoaderAndManifestsTitle": "Разрешить загрузчик отладки и сценарии отладки?",
      "debugManifestLoadingWarning": "ПРЕДУПРЕЖДЕНИЕ. Эта страница содержит небезопасные сценарии, которые в результате загрузки могут нанести вред компьютеру. Продолжайте работу, только если доверяете разработчику и осознаете риски.",
      "debugManifestLoadingWarning2": "Если вы не уверены, нажмите кнопку \"{0}\".",
      "debugManifestLoadingConfirm": "Загрузить сценарии отладки",
      "debugManifestLoadingCancel": "Не загружать сценарии отладки",
      "debugManifestLoadingCalloutText": "Если вы не знаете, что делать, щелкните здесь."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Загрузка...",
      "developerToolsTabLoadingUnknownError": "Неизвестная ошибка при загрузке модуля средств разработчика."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Производительность",
      "ErrorAccessingPerfDataErrorMessage": "Не удалось получить данные о производительности: объект имеет нулевое значение или не определен.",
      "ErrorAccessingRedirectDataErrorMessage": "При доступе к данным о производительности перенаправления HTTP возникла проблема.",
      "ErrorParsingPercievedLatencyErrorMessage": "При анализе в полученных данных о задержках обнаружена ошибка.",
      "ErrorParsingApiDataErrorMessage": "При анализе в данных API обнаружена ошибка.",
      "UnkownPerformanceDataErrorMessage": "Произошла неизвестная ошибка: {0}",
      "DefaultWebPartName": "Веб-часть",
      "ServerResponseLabel": "Отклик сервера",
      "ApplicationInitializationLabel": "Инициализация приложения",
      "ScriptFetchEvalLabel": "Получение и оценка сценариев",
      "SpLoaderStartLabel": "Инициализация SPFx",
      "PageRenderLabel": "Отрисовка страницы",
      "LeftNavRenderLabel": "Отрисовка левой области навигации",
      "CanvasRenderLabel": "Отрисовка холста",
      "LayoutRenderLabel": "Отрисовка макета",
      "RedirectResponseLabel": "Отклик перенаправления",
      "AppLoadLabel": "Загрузка приложения",
      "RenderWebPartsLabel": "Отрисовка веб-частей",
      "TotalRenderTimeLabel": "Всего",
      "GeneralErrorMessage": "К сожалению, при получении данных о производительности что-то пошло не так.",
      "ErrorMessagePrefix": "Сообщение об ошибке: {0}",
      "PerformanceDataHint": "Примечание. После добавления или удаления веб-части обновите страницу, чтобы увидеть обновленные данные производительности.",
      "ModulesLoadedLegendLabel": "Модули загружены",
      "InitializationLegendLabel": "Инициализация",
      "RenderTimeLegendLabel": "Время отрисовки",
      "InitializationTimeLabel": "Время инициализации",
      "ModuleLoadingTimeLabel": "Время загрузки модуля",
      "ModuleLazyLoadingDelayLabel": "Задержка загрузки модулей",
      "DataFetchTimeLabel": "Время получения данных",
      "DataFetchLegendLabel": "Получение данных",
      "ItemsColumnHeader": "Элементы",
      "DurationColumnHeader": "Длительность",
      "MillisecondsUnitLabel": "{0} мс",
      "NAPlaceholder": "Н/Д"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Манифесты",
      "noManifestSelected": "Манифест не выбран"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Трассировка",
      "EmptyTraceData": "Трассировки не загружены.",
      "ExportCSVButtonLabel": "Экспорт CSV",
      "LevelHeaderLabel": "Уровень",
      "MessageHeaderLabel": "Сообщение",
      "ScopeHeaderLabel": "Область",
      "SourceHeaderLabel": "Источник",
      "TimestampHeaderLabel": "Метка времени",
      "TimestampFormat": "{2}.{1}.{0} {3}:{4}:{5}.{6}"
    }
  };

  strings.default = strings;
  return strings;
});