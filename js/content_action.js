
function hideElement () {
    // hide topbar
    $(".zu-top").hide();
    $(".zu-global-notify").hide();

    // hide slidebar
    $(".zu-main-sidebar").hide();

    // hide votebar
    $(".zm-votebar").hide();

    // hide comment
    $(".zm-item-comment-el").hide();

    // hide more answer
    $(".more-awesome").hide();
    $(".awesome-answer-list").hide();
    $(".zh-answers-title").hide();
}

chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.functiontoInvoke == "hideElement") {
        hideElement();
    }
});
