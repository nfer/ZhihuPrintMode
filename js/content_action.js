
function hideWWWElement () {
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

    // replace multi break line to one break line
    var $zm_editable_content = $("div.zm-item-answer div.zm-item-rich-text .zm-editable-content");
    $zm_editable_content.html( $zm_editable_content.html().replace(/<br><br>(<br>)+/g, "<br><br>") );
}

function hideZhuanLanElement () {
    console.log('hideZhuanLanElement')
    // hide header-holder
    $("#header-holder").hide();

    // hide included-pc
    $(".included-pc").hide();

    // hide recommend-posts
    $(".recommend-posts").hide();

    // hide comment-box
    $(".comment-box").hide();

    // hide entry-controls
    $(".entry-controls").hide();

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
