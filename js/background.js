function handlePrint(info, tab) {
    var isZhuanlan = /^http(s)?:\/\/zhuanlan/;
    var isAnswer = /.*\/question\/[0-9]*\/answer\/[0-9]*$/;
    var isQuestion = /.*\/question\/[0-9]*$/;
    var isJianshu = /.*jianshu.com.*/;
    var isSegmentfault = /.*segmentfault.com.*/;
    var message = {
        type: 'none'
    };

    if (isZhuanlan.test(info.pageUrl)) {
        message = {
            type: 'zhuanlan'
        };
    } else if (isAnswer.test(info.pageUrl)) {
        message = {
            type: 'answer'
        };
    } else if (isQuestion.test(info.pageUrl)) {
        message = {
            type: 'question'
        };
    } else if (isJianshu.test(info.pageUrl)) {
        message = {
            type: 'jianshu'
        };
    } else if (isSegmentfault.test(info.pageUrl)) {
        message = {
            type: 'segmentfault'
        };
    } else {
        // do nothing
    }

    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message);
    });
}

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId == "print-context") {
        handlePrint(info, tab)
    }
});

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        "title": "打印视图模式",
        "contexts": ["page"],
        "id": "print-context",
        "documentUrlPatterns": ["*://*.zhihu.com/*", "*://*.jianshu.com/*", "*://segmentfault.com/*"]
    });
});
