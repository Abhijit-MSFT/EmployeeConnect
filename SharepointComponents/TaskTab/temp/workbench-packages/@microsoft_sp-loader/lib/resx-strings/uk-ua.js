define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Сталася помилка під час завантаження сценарію налагодження. Переконайтеся, що сервер працює та що URL-адресу в параметрі \"{0}\" указано правильно.",
      "errorLoadingDebugScriptHTTP": "Сталася помилка під час завантаження сценарію налагодження. Переконайтеся, що сервер працює, що URL-адресу в параметрі \"{0}\" указано правильно та що дозволено завантаження небезпечних сценаріїв. Також радимо використовувати сертифікат розробки та виконувати сценарії налагодження через HTTPS.",
      "errorLoadingDebugScriptMalformed": "Сталася помилка під час завантаження сценарію налагодження. URL-адресу налагодження ({0}) указано неправильно.",
      "errorLoadingDebugScriptUnknown": "Сталася невідома помилка під час завантаження сценарію налагодження.",
      "errorLoadingDebugLoaderTitle": "Помилка під час завантаження завантажувача налагодження.",
      "errorLoadingDebugManifestTitle": "Помилка під час завантаження маніфестів налагодження.",
      "errorLoadingUnknownTitle": "Помилка під час завантаження сценаріїв налагодження."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Відсутня функція компонента або ініціалізатора.",
      "closeDeveloperToolsAriaLabel": "Закрити інструменти розробника."
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
      "loaderUserFriendlyError": "Не вдалося завантажити програму на цій сторінці. Натисніть кнопку \"Назад\" у браузері, щоб спробувати ще раз. Якщо проблема не зникне, зверніться до адміністратора сайту та надайте йому дані з розділу \"Технічні відомості\".",
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
      "warningHeading": "Увага!",
      "warningLine1": "Використання цього інструмента пов’язано з потенційними загрозами безпеки, внаслідок яких інші можуть отримати доступ до ваших особистих даних Office 365 (документів, електронних листів, розмов тощо). Перш ніж продовжити, переконайтеся, що особі або організації, які попросили вас скористатися цим інструментом, можна довіряти.",
      "warningLine2": "Докладні відомості див. тут: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Сталася помилка під час завантаження маніфестів налагодження.",
      "debugManifestErrorDismissButtonText": "Закрити"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Дозволити сценарії налагодження?",
      "allowDebugLoaderTitle": "Дозволити завантажувач налагодження?",
      "allowDebugLoaderAndManifestsTitle": "Дозволити завантажувач налагодження та сценарії налагодження?",
      "debugManifestLoadingWarning": "УВАГА! Ця сторінка містить потенційно небезпечні сценарії. Якщо їх завантажити, вони можуть зашкодити вашому комп’ютеру. Продовжуйте, лише якщо довіряєте розробнику та розумієте ризики.",
      "debugManifestLoadingWarning2": "Якщо ви не впевнені, натисніть кнопку \"{0}\".",
      "debugManifestLoadingConfirm": "Завантажити сценарії налагодження",
      "debugManifestLoadingCancel": "Не завантажувати сценарії налагодження",
      "debugManifestLoadingCalloutText": "Якщо ви не знаєте, що робити, натисніть цю кнопку."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Завантаження…",
      "developerToolsTabLoadingUnknownError": "Сталася невідома помилка під час завантаження модуля інструментів розробника."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Продуктивність",
      "ErrorAccessingPerfDataErrorMessage": "Не вдалось отримати дані про продуктивність: об’єкт невизначений або має Null-значення.",
      "ErrorAccessingRedirectDataErrorMessage": "Виникла проблема під час доступу до даних про продуктивність переспрямування HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "Під час обробки отриманих даних про затримку виявлено помилку.",
      "ErrorParsingApiDataErrorMessage": "Під час обробки даних API виявлено помилку.",
      "UnkownPerformanceDataErrorMessage": "Сталася невідома помилка: {0}",
      "DefaultWebPartName": "Веб-частина",
      "ServerResponseLabel": "Відповідь сервера",
      "ApplicationInitializationLabel": "Ініціалізація програми",
      "ScriptFetchEvalLabel": "Отримання та оцінювання сценаріїв",
      "SpLoaderStartLabel": "Ініціалізація SPFx",
      "PageRenderLabel": "Відтворення сторінки",
      "LeftNavRenderLabel": "Відтворення лівої панелі переходів",
      "CanvasRenderLabel": "Відтворення полотна",
      "LayoutRenderLabel": "Відтворення макета",
      "RedirectResponseLabel": "Відповідь переспрямування",
      "AppLoadLabel": "Завантаження програми",
      "RenderWebPartsLabel": "Відтворення веб-частин",
      "TotalRenderTimeLabel": "Підсумок",
      "GeneralErrorMessage": "На жаль, сталася помилка під час отримання даних про продуктивність.",
      "ErrorMessagePrefix": "Повідомлення про помилку: {0}",
      "PerformanceDataHint": "Примітка. Додавши або видаливши веб-частину, оновіть сторінку, щоб переглянути оновлені дані про продуктивність.",
      "ModulesLoadedLegendLabel": "Завантажені модулі",
      "InitializationLegendLabel": "Ініціалізація",
      "RenderTimeLegendLabel": "Час відтворення",
      "InitializationTimeLabel": "Час ініціалізації",
      "ModuleLoadingTimeLabel": "Час завантаження модуля",
      "ModuleLazyLoadingDelayLabel": "Затримка завантаження модуля",
      "DataFetchTimeLabel": "Час отримання даних",
      "DataFetchLegendLabel": "Отримання даних",
      "ItemsColumnHeader": "Елементи",
      "DurationColumnHeader": "Тривалість",
      "MillisecondsUnitLabel": "{0} мс",
      "NAPlaceholder": "Н/д"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Маніфести",
      "noManifestSelected": "Маніфест не вибрано"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Трасування",
      "EmptyTraceData": "Трасування не завантажено.",
      "ExportCSVButtonLabel": "Експортувати у CSV",
      "LevelHeaderLabel": "Рівень",
      "MessageHeaderLabel": "Повідомлення",
      "ScopeHeaderLabel": "Область",
      "SourceHeaderLabel": "Джерело",
      "TimestampHeaderLabel": "Позначка часу",
      "TimestampFormat": "{2}.{1}.{0}, {3}:{4}:{5}.{6}"
    }
  };

  strings.default = strings;
  return strings;
});