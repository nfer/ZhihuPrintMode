
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if ( info.menuItemId == "zhihuprint-context-www" ) {
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "hideWWWElement"
        });
    });
  }
  else if ( info.menuItemId == "zhihuprint-context-zhuanlan" ) {
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "hideZhuanLanElement"
        });
    });
  }
});

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({"title": "知乎打印模式", "contexts":["page"], "id": "zhihuprint-context-www", "documentUrlPatterns":["*://www.zhihu.com/*"]});
    chrome.contextMenus.create({"title": "知乎打印模式", "contexts":["page"], "id": "zhihuprint-context-zhuanlan", "documentUrlPatterns":["*://zhuanlan.zhihu.com/*"]});
});
