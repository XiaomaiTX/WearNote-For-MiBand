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
                    var language_title_text = '小程序管理';
                    var language_kg1 = '页面使用缓存加速';
                } else {
                    var language_title_text = 'App Management';
                    var language_kg1 = 'Cache on';
                }
                /*------------------------------
                | 其他配置                      |
                ------------------------------*/
                var AppManger_cache = hmFS.SysProGetBool('AppManger_cache');
                if (AppManger_cache == undefined) {
                    hmFS.SysProSetBool('AppManger_cache', true);
                    AppManger_cache = true;
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
                    checked: AppManger_cache,
                    checked_change_func: (slideSwitch, checked) => {
                        changes_cache(checked);
                    }
                });
                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                function changes_cache(checked) {
                    hmFS.SysProSetBool('AppManger_cache', checked);
                }
            } catch (error) {
                hmApp.goBack();
            }
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}
