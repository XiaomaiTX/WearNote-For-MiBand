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
                    var language_title_text = '文件管理';
                    var language_kg1 = '页面使用缓存加速';
                    var language_tj1 = '缓存大小';
                } else {
                    var language_title_text = 'File Management';
                    var language_kg1 = 'Chche on';
                    var language_tj1 = 'Cache size';
                }
                /*------------------------------
                | 其他配置                      |
                ------------------------------*/
                var File_Management_cache = hmFS.SysProGetBool('File_Management_cache');
                if (File_Management_cache == undefined) {
                    hmFS.SysProSetBool('File_Management_cache', false);
                    File_Management_cache = false;
                }
                var value = hmFS.SysProGetInt('File_Management_cache_size');
                var valueMax = 20;
                var valueMin = 3;
                if (value == undefined) {
                    hmFS.SysProSetInt('File_Management_cache_size', valueMin);
                    value = valueMin;
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
                const anjian = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: 10,
                    y: 196,
                    w: 50,
                    h: 50,
                    radius: 12,
                    normal_color: 0x007ACC,
                    press_color: 0x005AB0,
                    text_size: 25,
                    text: '-',
                    click_func: () => {
                        if (value > valueMin) value--;
                        else value = valueMax;
                        update();
                    }
                });
                const anjia = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: 132,
                    y: 196,
                    w: 50,
                    h: 50,
                    radius: 12,
                    normal_color: 0x007ACC,
                    press_color: 0x005AB0,
                    text_size: 25,
                    text: '+',
                    click_func: () => {
                        if (value < valueMax) value++;
                        else value = valueMin;
                        update();
                    }
                });
                const shu = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 65,
                    y: 196,
                    w: 62,
                    h: 50,
                    color: 0xffffff,
                    text_size: 25,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.NONE,
                    text: value
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
                    checked: File_Management_cache,
                    checked_change_func: (slideSwitch, checked) => {
                        changes_cache(checked);
                    }
                });
                csh();
                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                function changes_cache(checked) {
                    hmFS.SysProSetBool('File_Management_cache', checked);
                    if (checked == false) {
                        text2.setProperty(hmUI.prop.VISIBLE, false);
                        shu.setProperty(hmUI.prop.VISIBLE, false);
                        anjian.setProperty(hmUI.prop.VISIBLE, false);
                        anjia.setProperty(hmUI.prop.VISIBLE, false);
                    } else {
                        text2.setProperty(hmUI.prop.VISIBLE, true);
                        shu.setProperty(hmUI.prop.VISIBLE, true);
                        anjian.setProperty(hmUI.prop.VISIBLE, true);
                        anjia.setProperty(hmUI.prop.VISIBLE, true);
                    }
                }
                function csh() {
                    if (File_Management_cache == false) {
                        text2.setProperty(hmUI.prop.VISIBLE, false);
                        shu.setProperty(hmUI.prop.VISIBLE, false);
                        anjian.setProperty(hmUI.prop.VISIBLE, false);
                        anjia.setProperty(hmUI.prop.VISIBLE, false);
                    }
                }
                function update() {
                    hmFS.SysProSetInt('File_Management_cache_size', value);
                    shu.setProperty(hmUI.prop.MORE, {
                        text: value
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
