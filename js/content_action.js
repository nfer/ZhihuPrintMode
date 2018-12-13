function removeAnswerElement() {
    // 删除头部
    $('header').remove()
    // 删除边栏
    $('.Question-sideColumn').remove()
    // 调整主栏的宽度
    $('.Question-mainColumn').css('width', '100%');
    // 删除更多回答部分
    $('.Card.MoreAnswers').remove()
    // 删除查看全部回答
    $('[data-za-detail-view-path-module="MessageItem"]').remove()
    // 删除问题的操作部分(fix在底部，打印的时候每页都会存在)
    $('.ContentItem-actions').remove()
    // 删除右下角的按钮
    $('.CornerButtons').remove()

    // 单独调整一下图片
    $('.ztext figure .origin_image').css('margin', 0);
}

function removeQuestionElement() {
    // 先禁止滚动加载
    window.addEventListener('scroll', function (event) {
        event.stopPropagation();
    }, true);
    // 然后删除非首个回答
    $('.List-item').not(':first').remove()

    // 删除头部
    $('header').remove()
    // 删除边栏
    $('.Question-sideColumn').remove()
    // 调整主栏的宽度
    $('.Question-mainColumn').css('width', '100%');
    // 删除右下角的按钮
    $('.CornerButtons').remove()
    // 删除回答的头部，e.g. “243个回答/默认排序...”
    $('.List-header').remove()
    // 删除问题的操作部分(fix在底部，打印的时候每页都会存在)
    $('.ContentItem-actions').remove()

    // 单独调整一下图片
    $('.ztext figure .origin_image').css('margin', 0);
}

function removeZhuanLanElement() {
    // 删除头部
    $('.ColumnPageHeader-Wrapper').remove()
    // 删除推荐阅读
    $('.Recommendations-Main').remove()
    // 删除评论
    $('.Comments-container').remove()
    // 删除问题的操作部分(fix在底部，打印的时候每页都会存在)
    $('.RichContent-actions').remove()
    // 删除“文章被以下专栏收录”
    $('.PostIndex-Contributes').remove()

    // 删除右下角的按钮
    $('.CornerButtons').remove()
}

function removeJianshuWWWElement () {
    removeElement('#note-fixed-ad-container')
    removeElement('#free-reward-panel')
    removeElement('.show-foot')
    removeElement('.meta-bottom')
    removeElement('.follow-detail')
    removeElement('#web-note-ad-1')
    removeElement('#comment-list')
    removeElement('.note-bottom')
    removeElement('.side-tool')

    var css = document.createElement('style');
    css.textContent = `
    .note .post {
        width: 1024px;
    }
    @media print {
        a[href]:after {
            content: ""
        }
    }
    `
    document.head.appendChild(css);
}

function removeSegmentfaultWWWElement () {
    removeElement('#footer')
    removeElement('.global-nav')
    removeElement('#paradigm-article-related')
    removeElement('.comments--article')
    removeElement('.main > h4:contains("你可能感兴趣的")')
    removeElement('.main > div:has("#mainLike")')
    removeElement('.main > div:has(".article-operation")')
}

function removeRuanyifengWWWElement () {
    removeElement('#header')
    removeElement('.asset-header')
    removeElement('.entry-sponsor')
    removeElement('.asset-footer')
    removeElement('#related_entries')
    removeElement('#cre')
    removeElement('#comments')
    removeElement('#footer')
}

function removeElement(selector) {
    $element = $(selector)
    if ($element.length) {
        console.log('remove element with selector:', selector)
        $element.remove()
    }
}

chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.type == "answer") {
        removeAnswerElement();
    } else if (message.type == "question") {
        removeQuestionElement();
    } else if (message.type == "zhuanlan") {
        removeZhuanLanElement();
    } else if (message.type == "jianshu") {
        removeJianshuWWWElement();
    } else if (message.type == "segmentfault") {
        removeSegmentfaultWWWElement();
    } else if (message.type == "ruanyifeng") {
        removeRuanyifengWWWElement();
    } else {
        alert('该页面暂不支持打印模式')
    }
});
