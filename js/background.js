
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if ( info.menuItemId == "zhihuprint-context-page" ) {
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "hideElement"
        });
    });
  }
});

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({"title": "知乎打印模式", "contexts":["page"], "id": "zhihuprint-context-page", "documentUrlPatterns":["*://*.zhihu.com/*"]});
});
