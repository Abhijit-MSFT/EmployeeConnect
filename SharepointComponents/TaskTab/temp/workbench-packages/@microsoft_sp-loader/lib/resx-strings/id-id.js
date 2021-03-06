define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Kesalahan saat memuat skrip debug. Pastikan server berjalan dan URL parameter \"{0}\" benar.",
      "errorLoadingDebugScriptHTTP": "Kesalahan saat memuat skrip debug. Pastikan server berjalan dan URL parameter \"{0}\" sudah benar, serta pemuatan skrip yang tidak aman diizinkan. Pertimbangkan juga untuk menggunakan sertifikat pengembangan dan menjalankan skrip debug melalui HTTPS.",
      "errorLoadingDebugScriptMalformed": "Kesalahan saat memuat skrip debug. Format URL debug ({0}) sepertinya salah.",
      "errorLoadingDebugScriptUnknown": "Kesalahan tidak diketahui saat memuat skrip debug.",
      "errorLoadingDebugLoaderTitle": "Kesalahan saat memuat pemuat debug.",
      "errorLoadingDebugManifestTitle": "Kesalahan saat memuat manifes debug.",
      "errorLoadingUnknownTitle": "Kesalahan saat memuat skrip debug."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Fungsi komponen atau penginisialisasi tidak ada.",
      "closeDeveloperToolsAriaLabel": "Tutup alat pengembang."
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
      "loaderUserFriendlyError": "Tidak dapat memuat aplikasi pada halaman ini. Gunakan tombol Kembali browser untuk mencoba lagi. Jika masalah tetap muncul, hubungi administrator situs dan berikan mereka informasi di Detail Teknis.",
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
      "warningHeading": "Peringatan!",
      "warningLine1": "Penggunaan alat ini akan memperlihatkan ancaman keamanan potensial yang dapat menyebabkan orang lain memperoleh akses ke data Office 365 pribadi Anda (dokumen, email, percakapan dan lainnya). Sebelum melanjutkan, pastikan Anda memercayai orang atau organisasi yang meminta untuk mengakses alat ini.",
      "warningLine2": "Pelajari selengkapnya di sini: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Terjadi kesalahan saat memuat manifes debug.",
      "debugManifestErrorDismissButtonText": "Tutup"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Izinkan skrip debug?",
      "allowDebugLoaderTitle": "Izinkan pemuat debug?",
      "allowDebugLoaderAndManifestsTitle": "Izinkan pemuat dan skrip debug?",
      "debugManifestLoadingWarning": "PERINGATAN: Halaman ini berisi skrip yang tidak aman dan berpotensi membahayakan komputer jika dimuat. Jangan lanjutkan, kecuali jika Anda memercayai pengembang tersebut dan memahami risikonya.",
      "debugManifestLoadingWarning2": "Jika Anda tidak yakin, klik {0}.",
      "debugManifestLoadingConfirm": "Muat skrip debug",
      "debugManifestLoadingCancel": "Jangan muat skrip debug",
      "debugManifestLoadingCalloutText": "Jika Anda tidak tahu apa yang harus dilakukan, klik di sini."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Sedang memuat...",
      "developerToolsTabLoadingUnknownError": "Kesalahan tidak diketahui saat memuat modul alat pengembang."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Kinerja",
      "ErrorAccessingPerfDataErrorMessage": "Tidak dapat mengambil data kinerja: objek null atau tidak terdefinisi.",
      "ErrorAccessingRedirectDataErrorMessage": "Terjadi masalah saat mengakses data kinerja pengalihan HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "Terjadi kesalahan saat menguraikan data latensi yang diketahui.",
      "ErrorParsingApiDataErrorMessage": "Terjadi kesalahan saat menguraikan data API.",
      "UnkownPerformanceDataErrorMessage": "Terjadi kesalahan yang tidak diketahui: {0}",
      "DefaultWebPartName": "Komponen Web",
      "ServerResponseLabel": "Waktu Respons Server",
      "ApplicationInitializationLabel": "Waktu Inisialisasi Aplikasi",
      "ScriptFetchEvalLabel": "Pengambilan skrip dan evaluasi",
      "SpLoaderStartLabel": "Inisialisasi SPFx",
      "PageRenderLabel": "Waktu Render Halaman",
      "LeftNavRenderLabel": "Waktu Render Navigasi Kiri",
      "CanvasRenderLabel": "Waktu Render Kanvas",
      "LayoutRenderLabel": "Render Tata Letak",
      "RedirectResponseLabel": "Alihkan Respons",
      "AppLoadLabel": "Waktu Muat Aplikasi",
      "RenderWebPartsLabel": "Waktu Render Komponen Web",
      "TotalRenderTimeLabel": "Total",
      "GeneralErrorMessage": "Maaf, terjadi kesalahan saat mengambil data kinerja.",
      "ErrorMessagePrefix": "Pesan Kesalahan: {0}",
      "PerformanceDataHint": "Catatan: Setelah menambahkan atau menghapus komponen web, refresh halaman untuk melihat data kinerja yang diperbarui.",
      "ModulesLoadedLegendLabel": "Modul Dimuat",
      "InitializationLegendLabel": "Inisialisasi",
      "RenderTimeLegendLabel": "Waktu Render",
      "InitializationTimeLabel": "Waktu inisialisasi",
      "ModuleLoadingTimeLabel": "Waktu pemuatan modul",
      "ModuleLazyLoadingDelayLabel": "Pemuatan modul tertunda",
      "DataFetchTimeLabel": "Waktu pengambilan data",
      "DataFetchLegendLabel": "Pengambilan Data",
      "ItemsColumnHeader": "Item",
      "DurationColumnHeader": "Durasi",
      "MillisecondsUnitLabel": "{0} mdtk",
      "NAPlaceholder": "N/A"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifes",
      "noManifestSelected": "Tidak ada manifes yang dipilih"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Jejak",
      "EmptyTraceData": "Jejak tidak dimuat.",
      "ExportCSVButtonLabel": "Ekspor CSV",
      "LevelHeaderLabel": "Tingkat",
      "MessageHeaderLabel": "Pesan",
      "ScopeHeaderLabel": "Lingkup",
      "SourceHeaderLabel": "Sumber",
      "TimestampHeaderLabel": "Stempel waktu",
      "TimestampFormat": "{2}/{1}/{0} {3}:{4}:{5}.{6}"
    }
  };

  strings.default = strings;
  return strings;
});