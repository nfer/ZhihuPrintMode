
function hideWWWElement () {
    // reset body padding-top
    $("body").css("padding-top", "0")
    $("body").css("padding-bottom", "0")

    // remove topbar
    $(".zu-top").remove();
    $(".zu-global-notify").remove();

    // remove slidebar
    $(".zu-main-sidebar").remove();

    // remove votebar
    $(".zm-votebar").remove();
    $(".zm-item-link-avatar").remove();
    $(".zm-item-vote-info").remove();

    // remove zm-meta-panel except answer-date-link
    $('.zm-meta-panel *:gt(0)').remove();

    // remove comment
    $(".zm-item-comment-el").remove();

    // remove more answer
    $(".more-awesome").remove();
    $(".awesome-answer-list").remove();
    $(".zh-answers-title").remove();

    $(".zu-button-more").remove()

    $(".zh-question-answer-form-wrap").remove()
    $(".zh-footer").remove()
    $(".FeedbackButton-button-3waL").remove()

    // remove not the first answer
    $('div.zm-item-answer:gt(0)').remove();

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
