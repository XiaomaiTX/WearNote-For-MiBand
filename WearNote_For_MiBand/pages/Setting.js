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
                        var TEXT = '设置';
                        var WarningText = '警告！！！\n实验性界面含有开发中内容！\n可能会导致未知的后果！\n请谨慎选择是否进入！\n后果自负！';
                        var TipToast1 = '再点击';
                        var TipToast2 = '次进入实验界面';
                       break;
                    case 1:
                        var TEXT = '設定';
                        var WarningText = '警告！ ！ ！ \n實驗性界面含有開發中內容！\n可能會導致未知的後果！\n請謹慎選擇是否進入！\n後果自負！';
                        var TipToast1 = '再點擊';
                        var TipToast2 = '次進入實驗界面';
                         break;
                    case 2:
                        var TEXT = 'Settings';
                        var WarningText = 'WARNING! ! ! \nExperimental interface contains content in development! \nMay lead to unknown consequences! \nPlease choose carefully whether to enter! \nUse at your own risk!'
                        var TipToast1 = 'Click ';
                        var TipToast2 = ' more times to enter the experiment interface';
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
                    text: TEXT
                });
                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                //...
                var n = 3
                logo.addEventListener(hmUI.event.CLICK_DOWN, function () {
                    n -= 1
                    hmUI.showToast({
                        text: TipToast1+n+TipToast2
                      })
                if (n==1){
                        info.setProperty(hmUI.prop.MORE, {
                            text: WarningText,
                            color: 0xFF0000,
                          })
                }
                if (n==0){
                    n=3
                    hmApp.gotoPage({ url: 'pages/config/DebugPage', param: '' })
                    }
                })

            } catch (error) {
                hmApp.goBack();
            }
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}