/* Test if needed - Enable WASM */
user_pref("javascript.options.wasm", true);

/* Enable DRM content */
user_pref("media.eme.enabled", true);
user_pref("browser.eme.ui.enabled", true);

/* Clear on shutdown fixes */
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", false);
user_pref("privacy.clearOnShutdown_v2.siteSettings", false);
user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", false);
user_pref("privacy.clearOnShutdown_v2.downloads", false);
user_pref("privacy.clearOnShutdown.openWindows", false);

/* Enable Favicon saving */
user_pref("browser.chrome.site_icons", true);

/* Enable Searching Via The URL Bar ***/
user_pref("keyword.enabled", true);

/* Enable Session Restore */
user_pref("browser.startup.page", 3);
user_pref("browser.sessionstore.privacy_level", 0);
user_pref("browser.privatebrowsing.autostart", false);
user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.cpd.history", false);

/* Enable DRM ***/
user_pref("media.eme.enabled", true);


/* Keybinds ***/
/* Disable ALT Keybind ***/
user_pref("ui.key.menuAccessKeyFocuses", false);

/* Disable ALT + Scroll Up/Down as Forward/Back page hotkeys***/
user_pref("mousewheel.with_alt.action", 0);
