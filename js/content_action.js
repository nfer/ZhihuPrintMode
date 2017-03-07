
function hideWWWElement () {
    // remove topbar
    $(".zu-top").remove();
    $(".zu-global-notify").remove();

    // remove slidebar
    $(".zu-main-sidebar").remove();

    // remove votebar
    $(".zm-votebar").remove();

    // remove comment
    $(".zm-item-comment-el").remove();

    // remove more answer
    $(".more-awesome").remove();
    $(".awesome-answer-list").remove();
    $(".zh-answers-title").remove();

    // replace multi break line to one break line
    var $zm_editable_content = $("div.zm-item-answer div.zm-item-rich-text .zm-editable-content");
    $zm_editable_content.html( $zm_editable_content.html().replace(/<br><br>(<br>)+/g, "<br><br>") );
}

function hideZhuanLanElement () {
    console.log('hideZhuanLanElement')
    // remove header-holder
    $("#header-holder").remove();

    // remove included-pc
    $(".included-pc").remove();

    // remove recommend-posts
    $(".recommend-posts").remove();

    // remove comment-box
    $(".comment-box").remove();

    // remove entry-controls
    $(".entry-controls").remove();

    // remove full-screen-cover
    $(".full-screen-cover").removeClass("full-screen-cover");

    // replace multi break line to one break line
    var $zm_editable_content = $("div.zm-item-answer div.zm-item-rich-text .zm-editable-content");
    $zm_editable_content.html( $zm_editable_content.html().replace(/<br><br>(<br>)+/g, "<br><br>") );
}

chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.functiontoInvoke == "hideWWWElement") {
        hideWWWElement();
    }
    else if (message.functiontoInvoke == "hideZhuanLanElement") {
        hideZhuanLanElement();
    }
});
