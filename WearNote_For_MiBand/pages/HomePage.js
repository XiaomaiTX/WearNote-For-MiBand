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
                const text = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 96,
                    y: 120,
                    w: 288,
                    h: 46,
                    color: 0xffffff,
                    text_size: 36,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.NONE,
                    text: 'HELLO ZEPPOS'
                })

                hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: (480 - 400) / 2,
                    y: 240,
                    w: 50,
                    h: 20,
                    radius: 12,
                    normal_color: 0x0986d4,
                    press_color: 0x0986d4,
                    text: '+',
                    click_func: (button_widget) => {
                        hmApp.gotoPage({
                            url: "pages/New",
                            param: ''
                        });

                    }
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