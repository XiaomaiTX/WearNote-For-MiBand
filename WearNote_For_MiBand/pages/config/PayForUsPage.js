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
                const language = hmSetting.getLanguage();
                if (language == 0 || language == 1) {
                    var language_title = '捐赠';
                    var language_wx = '微信钱包';
                    var language_zfb = '支付宝';
                    var language_bottom = '感谢您对本程序的支持';
                } else {
                    var language_title = 'Donation';
                    var language_wx = 'WeChat Pay';
                    var language_zfb = 'Alipay';
                    var language_bottom = 'Thank you for your support of this program';
                }
                /*------------------------------
                | 其他配置                      |
                ------------------------------*/
                var pages = 1;
                const pagesMax = 2;
                var zt = hmFS.SysProGetChars('Band_Manager_Pro_zt')
                if (zt == undefined){
                    hmFS.SysProSetChars('Band_Manager_Pro_zt', '0');
                    zt = '0'
                }
                //设置主题，经典为0，暗黑为1，zt为主题变量，为str
                var zt = hmFS.SysProGetChars('Band_Manager_Pro_zt')
                if (zt == undefined){
                    hmFS.SysProSetChars('Band_Manager_Pro_zt', '0');
                    zt = '0'
                }
                //设置左右按钮主题，经典为0，暗黑为1，zt为主题变量，为str
                if(zt == '1'){
                    var zyaj_normal_color = 0x000000
                    var zyaj_press_color = 0x262626
                }else{
                    var zyaj_normal_color = 0x262626
                    var zyaj_press_color = 0x101010
                }
                /*------------------------------
                | 显示界面                      |
                ------------------------------*/
                var title_background = hmUI.createWidget(hmUI.widget.FILL_RECT, {
                    x: 0,
                    y: 0,
                    w: 192,
                    h: 60,
                    radius: 0,
                    color: zyaj_normal_color
                });
                var title_text = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 40,
                    y: 0,
                    w: 112,
                    h: 70,
                    color: 0xffffff,
                    text_size: 20,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.NONE,
                    text: language_title
                });
                const ui_text = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 0,
                    y: 346,
                    w: 192,
                    h: 89,
                    color: 0xffffff,
                    text_size: 20,
                    text_size: 25,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.CHAR_WRAP,
                    text: ''
                });
                const ui_title_left = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: 0,
                    y: 62,
                    w: 95,
                    h: 36,
                    radius: 0,
                    normal_color: zyaj_normal_color,
                    press_color: zyaj_press_color,
                    text: "←",
                    click_func: () => {
                        if (pages > 1) pages--;
                        else pages = pagesMax;
                        update();
                    }
                });
                const ui_title_right = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: 97,
                    y: 62,
                    w: 95,
                    h: 36,
                    radius: 0,
                    normal_color: zyaj_normal_color,
                    press_color: zyaj_press_color,
                    text: "→",
                    click_func: () => {
                        if (pages < pagesMax) pages++;
                        else pages = 1;
                        update();
                    }
                });
                const img = hmUI.createWidget(hmUI.widget.IMG, {
                    x: 0,
                    y: 149,
                    w: 192,
                    h: 192,
                    src: ''
                });
                update();
                var ui_title_a1 = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 40,
                    y: 440,
                    w: 112,
                    h: 40,
                    color: 0xffffff,
                    text_size: 17,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.NONE,
                    //text_style: hmUI.text_style.WRAP,
                    text: language_bottom
                });
                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                function update() {
                    switch (pages) {
                        case 1:
                            img.setProperty(hmUI.prop.SRC, 'image/pay/1.png');
                            ui_text.setProperty(hmUI.prop.TEXT, language_wx);
                            break;
                        case 2:
                            img.setProperty(hmUI.prop.SRC, 'image/pay/2.png');
                            ui_text.setProperty(hmUI.prop.TEXT, language_zfb);
                            break;
                    }
                }
            } catch (error) {
                hmApp.goBack();
            }
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}
