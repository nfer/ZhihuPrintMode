# 知乎打印视图模式

## 简介
在打印知乎回答的时候，会有一些不要打印的信息，该扩展就是用来隐藏这些信息的。

隐藏的信息包括：

 - 顶部菜单：zu-top和zu-global-notify
 - 边栏：zu-main-sidebar
 - 投票按钮：zm-votebar
 - 注释部分：zm-item-comment-el
 - 更多回答：more-awesome、awesome-answer-list、zh-answers-title

增加：
[可否将多行空行删减为一行啊，空行太多的浪费纸张啊](https://github.com/nfer/ZhihuPrintMode/issues/1)

## 如果使用

因为该扩展并没有上传到chrome的应用商店，因此只能自行下载下来并使用开发者模式加载，具体步骤如下：

 - 下载该应用的代码，并解压
 - 在浏览器中输入"chrome://extensions/"打开“扩展程序”页面
 - 点击“加载已解压的扩展程序...”按钮，在弹出的文件选择器中选择刚才解压的文件夹(选择到文件夹即可)

或点击[链接](https://github.com/nfer/ZhihuPrintMode/raw/master/release/ZhihuPrint_1.0.crx)下载打包好的crx文件，然后拖动该crx文件到chrome的“扩展程序”页面进行安装

按照上述步骤，你就已经安装了该扩展应用，正确的使用方法是：

 - 打开需要打印的页面
 - 点击右键，选择“知乎打印模式”, 即可隐藏不需要打印的元素
 - 根据需要以及自己电脑上的打印机设备进行下一步操作

**注意：**本扩展默认是打印第一个答案，因此最好的使用方式是从该用户的回答列表进去，这样需要打印的答案肯定是排在第一位。
