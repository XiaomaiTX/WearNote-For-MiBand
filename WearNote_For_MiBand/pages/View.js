import { gettext } from 'i18n';

try {
    Page({
        build(Title_Text) {
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

                const Title = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 10,
                    y: 80,
                    w: 172,
                    h: 50,
                    color: 0xffffff,
                    text_size: 40,
                    text: hmFS.SysProGetInt('clickItemIndex')
                })




                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                // TODO 
            } catch (error) {
                hmApp.goBack();
            }
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}