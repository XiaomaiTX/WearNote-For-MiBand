import { gettext } from 'i18n';

try {
    Page({
        onInit(param) {
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
                    var language_ui_text = '请选择您的操作';
                    var language_czywc = '操作已完成';
                    var language_qd = '确定';
                    var language_ui_an2 = '以文本打开';
                    var language_ui_an3 = '删除文件';
                    var language_ui_an4 = '以照片打开';
                } else {
                    var language_ui_text = 'Please select your action';
                    var language_czywc = 'Operation completed';
                    var language_qd = 'OK';
                    var language_ui_an2 = 'Open as text';
                    var language_ui_an3 = 'Delete file';
                    var language_ui_an4 = 'Open as Image';
                }
                /*------------------------------
                | 其他配置                      |
                ------------------------------*/
                var button_pos_x = 21;
                var button_size_w = 150;
                var button_size_h = 70;
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
                hmUI.createWidget(hmUI.widget.FILL_RECT, {
                    x: 0,
                    y: 0,
                    w: 192,
                    h: 60,
                    radius: 0,
                    color: zyaj_normal_color
                });
                const title_text = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 40,
                    y: 0,
                    w: 112,
                    h: 70,
                    color: 0xffffff,
                    text_size: 20,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.NONE,
                    text: param.toString()
                });
                const ui_text = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 0,
                    y: 90,
                    w: 192,
                    h: 60,
                    color: 0xffffff,
                    text_size: 25,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.CHAR_WRAP,
                    text: language_ui_text
                });
                const ui_an2 = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: button_pos_x,
                    y: 300,
                    w: button_size_w,
                    h: button_size_h,
                    radius: 12,
                    normal_color: 0x007ACC,
                    press_color: 0x005AB0,
                    text_size: 22,
                    text: language_ui_an2,
                    click_func: () => scxcxhs(1)
                });
                const ui_an3 = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: button_pos_x,
                    y: 380,
                    w: button_size_w,
                    h: button_size_h,
                    radius: 12,
                    normal_color: 0xff0000,
                    press_color: 0x9a0000,
                    text_size: 22,
                    text: language_ui_an3,
                    click_func: () => scxcxhs(2)
                });
                const ui_an4 = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: button_pos_x,
                    y: 220,
                    w: button_size_w,
                    h: button_size_h,
                    radius: 12,
                    normal_color: 0x007ACC,
                    press_color: 0x005AB0,
                    text_size: 22,
                    text: language_ui_an4,
                    click_func: () => scxcxhs(3)
                });
                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                function scxcxhs(cqm) {
                    var ey = param.toString();
                    switch (cqm) {
                        case 1:
                            //hmApp.goBack()
                            hmApp.gotoPage({ url: 'pages/tools/NotepadPage', param: param });
                            break;
                        case 2:
                            hmFS.remove(ey.toString());
                            hmFS.SysProSetChars(ey, JSON.stringify(hmFS.readdir(ey.toString())[0]));
                            finishShow();
                            break;
                        case 3:
                            hmApp.gotoPage({ url: 'pages/tools/ImagePage', param: param });
                            break;
                        default:
                            break;
                    }
                }
                function finishShow() {
                    ui_an2.setProperty(hmUI.prop.VISIBLE, false);
                    ui_an3.setProperty(hmUI.prop.VISIBLE, false);
                    ui_an4.setProperty(hmUI.prop.VISIBLE, false);
                    ui_text.setProperty(hmUI.prop.MORE, {
                        x: 0,
                        y: 65,
                        w: 192,
                        h: 340,
                        color: 0x00ff00,
                        text_size: 25,
                        align_h: hmUI.align.CENTER_H,
                        align_v: hmUI.align.CENTER_V,
                        text_style: hmUI.text_style.CHAR_WRAP,
                        text: language_czywc
                    });
                    var ui_botton_a1 = hmUI.createWidget(hmUI.widget.BUTTON, {
                        x: button_pos_x,
                        y: 380,
                        w: button_size_w,
                        h: button_size_h,
                        radius: 12,
                        normal_color: zyaj_normal_color,
                        press_color: zyaj_press_color,
                        text_size: 20,
                        text: language_qd,
                        click_func: () => {
                            hmApp.goBack();
                        }
                    });
                }
            } catch (error) {
                hmApp.goBack();
            }
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}
