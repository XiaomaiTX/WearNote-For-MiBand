import { gettext } from 'i18n';

try {
    Page({
        build() {
            try {
                /*------------------------------
                | 初始化                        |
                ------------------------------*/
                hmUI.setLayerScrolling(false);
                hmApp.setScreenKeep(true);
                hmApp.unregisterGestureEvent();
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
                        var Title_Text = "新建笔记"
                        break;
                    case 1:
                        var Title_Text = "新建笔记"
                        break;
                    case 2:
                        var Title_Text = "New"
                        break;
                }

                /*------------------------------
                | 其他配置                      |
                ------------------------------*/

                /*------------------------------
                | 显示界面                      |
                ------------------------------*/
                const Title = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 10,
                    y: 80,
                    w: 150,
                    h: 52,
                    color: 0xffffff,
                    text_size: 42,
                    text: Title_Text
                })


                /*------------------------------
                | 其他函数                      |
                ------------------------------*/

            } catch (error) {
                hmApp.goBack();
            }
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}