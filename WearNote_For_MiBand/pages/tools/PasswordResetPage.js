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
                    var language_title_text = '重置密码';
                    var language_true = '重置成功';
                    var language_error = '重置失败';
                } else {
                    var language_title_text = 'Password Reset';
                    var language_true = 'Reset Success';
                    var language_error = 'Reset Fail';
                }
                /*------------------------------
                | 其他配置                      |
                ------------------------------*/
                //设置主题，经典为0，暗黑为1，zt为主题变量，为str
                var zt = hmFS.SysProGetChars('Band_Manager_Pro_zt')
                if (zt == undefined){
                    hmFS.SysProSetChars('Band_Manager_Pro_zt', '0');
                    zt = '0'
                }
                //设置左右按钮主题，经典为0，暗黑为1，zt为主题变量，为str
                if(zt == '1'){
                    var zyaj_normal_color = 0x000000
                    //var zyaj_press_color = 0x262626
                }else{
                    var zyaj_normal_color = 0x262626
                    //var zyaj_press_color = 0x101010
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
                    text: language_title_text
                });
                if (hmApp.packageInfo().appId.toString() == '49897') {
                    hmFS.SysProSetChars('applock_password', '');
                    hmFS.SysProSetBool('wgprolock', false);
                    hmUI.createWidget(hmUI.widget.TEXT, {
                        x: 0,
                        y: 70,
                        w: 192,
                        h: 52,
                        color: 0x219900,
                        text_size: 25,
                        align_h: hmUI.align.CENTER_H,
                        align_v: hmUI.align.CENTER_V,
                        text_style: hmUI.text_style.NONE,
                        text: language_true
                    });
                } else {
                    hmUI.createWidget(hmUI.widget.TEXT, {
                        x: 0,
                        y: 70,
                        w: 192,
                        h: 52,
                        color: 0xff0000,
                        text_size: 25,
                        align_h: hmUI.align.CENTER_H,
                        align_v: hmUI.align.CENTER_V,
                        text_style: hmUI.text_style.NONE,
                        text: language_error
                    });
                }
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
