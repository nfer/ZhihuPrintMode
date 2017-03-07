
function removeWWWElement () {
    $('body').css('padding-top', '0')
    $('body').css('padding-bottom', '0')
    $('#zh-question-answer-wrap').css('padding-top', '40px')

    // -------------------global elements------------------- //
    // remove topbar
    removeElement('.zu-top')
    removeElement('.zu-global-notify')

    // remove slidebar
    removeElement('.zu-main-sidebar')

    // remove footer
    removeElement('.zh-footer')

    // remove feedback button
    removeElement('.FeedbackButton-button-3waL')

    // remove answers title
    removeElement('.zh-answers-title')

    // remove not the first answer(in /question/xxx page)
    removeElement('.zm-item-answer:gt(0)')

    // remove more answers button(in /question/xxx page)
    removeElement('.zu-button-more')

    // remove more answer tip(in /question/xxx/answer/xxx page)
    removeElement('.more-awesome')

    // remove more answers(in /question/xxx/answer/xxx page)
    removeElement('.awesome-answer-list')

    // remove collap answers
    removeElement('.zu-question-collap-title')

    // remove answer wrap
    removeElement('.zh-question-answer-form-wrap')
    // -------------------global elements------------------- //

    // -------------------question elements----------------- //
    // remove question edit button
    removeElement('.zu-edit-button')

    // remove question editable tip
    removeElement('.zm-editable-tip')

    // remove question comment
    removeElement('.zm-item-comment-el')
    // -------------------question elements----------------- //

    // -------------------answer elements------------------- //
    // remove votebar
    removeElement('.zm-votebar')

    // remove user avatar
    removeElement('.zm-item-link-avatar')

    // remove vote info
    removeElement('.zm-item-vote-info')

    // remove zm-meta-panel except answer-date-link
    removeElement('.zm-meta-panel *:gt(0)')

    // remove answer comment
    removeElement('.comment-app-holder')
    // -------------------answer elements------------------- //

    // replace multi break line to one break line
    var $zm_editable_content = $("div.zm-item-answer div.zm-item-rich-text .zm-editable-content");
    $zm_editable_content.html( $zm_editable_content.html().replace(/<br><br>(<br>)+/g, "<br><br>") );
}

function removeZhuanLanElement () {
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

function removeElement(selector) {
    $element = $(selector)
    if ($element.length) {
        console.log('remove element with selector:', selector)
        $element.remove()
    }
}

chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.functiontoInvoke == "removeWWWElement") {
        removeWWWElement();
    }
    else if (message.functiontoInvoke == "removeZhuanLanElement") {
        removeZhuanLanElement();
    }
});
