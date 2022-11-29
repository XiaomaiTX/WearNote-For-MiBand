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
                const timer1 = timer.createTimer(250, null,
                    function (option) {
                        hmApp.gotoPage({
                            url: "pages/tools/AppUnlockPage",
                            param: JSON.stringify({
                                mode: '1',//-1：设置密码，1：解锁，2：解锁未加密小程序，3解锁加密小程序
                                topages: 'pages/config/ActivatePage'//跳转目标 空则代表返回
                            })
                        });                    }, null);

            } catch (error) {
                hmApp.goBack();
            }
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}