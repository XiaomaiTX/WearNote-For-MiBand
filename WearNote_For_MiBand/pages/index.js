import { gettext } from 'i18n';

try {
    Page({
        build() {
            try {
                /*------------------------------
                | 初始化                        |
                ------------------------------*/
                hmApp.setScreenKeep(true);
                hmApp.unregisterGestureEvent();
                //const isVertical = false //横向滚动
                //hmUI.setScrollView(true, px(480), 20, isVertical)
                /*------------------------------
                | 设置语言                      |
                ------------------------------*/
                /*
                0	zh-CN	简体中文
                1	zh-TW	繁体中文（中国台湾）
                2	en-US	英语（美国）
                */
                const language = hmSetting.getLanguage();
                switch (language) {
                    case 0:

                        break;
                    case 1:

                        break;
                    case 2:

                        break;
                }

                /*------------------------------
                | 其他配置                      |
                ------------------------------*/
                /*------------------------------
                | 显示界面                      |
                ------------------------------*/
                const icon = hmUI.createWidget(hmUI.widget.IMG, {
                    x: 46,
                    y: 195,
                    src: 'icon.png'
                });

                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                const timer1 = timer.createTimer(150, null,
                    function (option) {
                        hmApp.gotoPage({
                            url: "pages/HomePage",
                            param: ''
                        });
                    }, null);

            } catch (error) {
                hmApp.goBack();
            }
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}