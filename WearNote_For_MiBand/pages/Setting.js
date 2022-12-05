import { gettext } from 'i18n';

try {
    Page({
        build() {
            try {
                /*------------------------------
                | 初始化                        |
                ------------------------------*/
                hmUI.setLayerScrolling(true);
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
                        var DevelopersInfo = '设置';
                        break;
                    case 1:
                        var DevelopersInfo = '設定';
                        break;
                    case 2:
                        var DevelopersInfo = 'Settings';
                        break;
                }
                /*------------------------------
                | 其他配置                      |
                ------------------------------*/
                /*------------------------------
                | 显示界面                      |
                ------------------------------*/
                const logo = hmUI.createWidget(hmUI.widget.IMG, {
                    x: 46,
                    y: 50,
                    src: 'icon.png'
                });
                const info = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 0,
                    y: 150,//100
                    w: 192,
                    h: 300,
                    color: 16777215,
                    text_size: 20,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.WRAP,
                    text: DevelopersInfo
                });
                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                //...
            } catch (error) {
                hmApp.goBack();
            }
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}