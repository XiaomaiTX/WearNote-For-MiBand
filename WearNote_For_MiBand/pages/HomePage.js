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
                        var Title_Text = "笔记"
                        break;
                    case 1:
                        var Title_Text = "笔记"
                        break;
                    case 2:
                        var Title_Text = "Notes"
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
                const TopButtonImg = hmUI.createWidget(hmUI.widget.IMG, {
                    x: 76,
                    y: 20,
                    src: 'menu.png'
                })
                const ButtomButtonImg = hmUI.createWidget(hmUI.widget.IMG, {
                    x: 76,
                    y: 20,
                    src: 'plus.png'
                })
                TopButtonImg.setEnable(false)
                ButtomButtonImg.setEnable(false)
                const TopButton = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: 46,
                    y: 10,
                    w: 100,
                    h: 60,
                    radius: 50,
                    normal_color: 0x212121,
                    press_color: 0x0D0D0D,
                    text: '',
                    click_func: (button_widget) => {
                        hmApp.gotoPage({
                            url: "pages/Setting",
                            param: ''
                        });
                    }
                })
                const ButtomButton = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: 46,
                    y: 350,
                    w: 100,
                    h: 60,
                    radius: 50,
                    normal_color: 0x0986d4,
                    press_color: 0x043658,
                    text: '',
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