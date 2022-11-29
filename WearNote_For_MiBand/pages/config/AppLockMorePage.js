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
                    var language_title_text = '应用锁';
                    var language_kg1 = '锁定环管Pro';
                    var language_tj1 = '配置';
                    var language_an1 = '设置密码';
                    var language_an1s = '更改密码';
                    //var language_an2 = '重置密码';
                    var language_error = '请先设置密码';
                } else {
                    var language_title_text = 'App Lock';
                    var language_kg1 = 'Lock Band Manager Pro';
                    var language_tj1 = 'Configure';
                    var language_an1 = 'Set Password';
                    var language_an1s = 'Change Password';
                    //var language_an2 = 'Reset Password';
                    var language_error = 'Please set the password first';
                }
                /*------------------------------
                | 其他配置                      |
                ------------------------------*/
                const button_pos_x = 21;
                const button_size_w = 150;
                const button_size_h = 70;
                var an_text = language_an1s;
                var wgprolock = hmFS.SysProGetBool('wgprolock');
                if (wgprolock == undefined) {
                    hmFS.SysProSetBool('wgprolock', false);
                    wgprolock = false;
                }
                var pass = true;
                var applock_password = hmFS.SysProGetChars('applock_password');
                if (applock_password == undefined || applock_password == '') {
                    pass = false;
                    an_text = language_an1;
                }
                const jstime = hmSensor.createSensor(hmSensor.id.TIME);
                //设置主题，经典为0，暗黑为1，zt为主题变量，为str
                var zt = hmFS.SysProGetChars('Band_Manager_Pro_zt')
                if (zt == undefined){
                    hmFS.SysProSetChars('Band_Manager_Pro_zt', '0');
                    zt = '0'
                }
                //设置左右按钮主题，经典为0，暗黑为1，zt为主题变量，为str
                if(zt == '1'){
                    var zyaj_normal_color = 0x000000
                }else{
                    var zyaj_normal_color = 0x262626
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
                const text = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 5,
                    y: 65,
                    w: 182,
                    h: 30,
                    color: 0xffffff,
                    text_size: 20,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.NONE,
                    text: language_kg1
                });
                const slide_switch = hmUI.createWidget(hmUI.widget.SLIDE_SWITCH, {
                    x: 50,
                    y: 100,
                    w: 92,
                    h: 52,
                    select_bg: 'image/switch_on.png',
                    un_select_bg: 'image/switch_off.png',
                    slide_src: '',
                    slide_select_x: 0,
                    slide_un_select_x: 0,
                    checked: wgprolock,
                    checked_change_func: (slideSwitch, checked) => {
                        changes_cache(checked);
                    }
                });
                const slide_switch_text = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 0,
                    y: 100,
                    w: 192,
                    h: 52,
                    color: 0xff0000,
                    text_size: 25,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.NONE,
                    text: language_error
                });
                const text2 = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 5,
                    y: 160,
                    w: 182,
                    h: 30,
                    color: 0xffffff,
                    text_size: 20,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.NONE,
                    text: language_tj1
                });
                const an1 = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: button_pos_x,
                    y: 196,
                    w: button_size_w,
                    h: button_size_h,
                    radius: 12,
                    normal_color: 0x007ACC,
                    press_color: 0x005AB0,
                    text_size: 25,
                    text: an_text,
                    click_func: () => {
                        hmApp.gotoPage({
                            url: "pages/tools/AppUnlockPage",
                            param: JSON.stringify({
                                mode: -1,//-1：设置密码 空则代表解锁
                                topages: ''//跳转目标 空则代表返回
                            })
                        });
                    }
                });
                /*
                const an2 = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: button_pos_x,
                    y: 276,
                    w: button_size_w,
                    h: button_size_h,
                    radius: 12,
                    normal_color: 0x007ACC,
                    press_color: 0x005AB0,
                    text_size: 25,
                    text: language_an2,
                    click_func: () => {
                        /*hmApp.gotoPage({
                            url: "pages/tools/PasswordResetPage",
                            param: ''
                        });
                        hmApp.gotoPage({
                            url: "pages/tools/AppUnlockPage",
                            param: JSON.stringify({
                                mode: '1',//-1：设置密码，1：解锁，2：解锁未加密小程序，3解锁加密小程序
                                topages: 'pages/tools/PasswordResetPage'//跳转目标 空则代表返回
                            })
                        });
                        /*hmFS.SysProSetChars('applock_password', '');
                        hmFS.SysProSetBool('wgprolock', false);
                        hmApp.reloadPage({
                            url: "pages/config/AppLockMorePage",
                            param: ''
                        });
                    }
                });
                */
                csh();
                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                function csh() {
                    if (pass) {
                        slide_switch.setProperty(hmUI.prop.VISIBLE, true);
                        slide_switch_text.setProperty(hmUI.prop.VISIBLE, false);
                        //an2.setProperty(hmUI.prop.VISIBLE, true);
                    } else {
                        slide_switch.setProperty(hmUI.prop.VISIBLE, false);
                        slide_switch_text.setProperty(hmUI.prop.VISIBLE, true);
                        //an2.setProperty(hmUI.prop.VISIBLE, false);
                    }
                }
                function changes_cache(checked) {
                    if (checked) {
                        if (pass) {
                            hmFS.SysProSetBool('wgprolock', true);
                        } else {
                            hmFS.SysProSetBool('wgprolock', false);
                        }
                    } else hmFS.SysProSetBool('wgprolock', false);
                }
            } catch (error) {
                hmApp.goBack();
            }
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}
