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
                    var language_title_text = '主题修改';
                    var language_mr = '默认'
                    var language_ah = '暗黑'
                    var language_xgcg = '主题修改成功'
                    var language_ts = '当前主题为:'
                } else {
                    var language_title_text = '主题修改';
                    var language_mr = '默认'
                    var language_ah = '暗黑'
                    var language_xgcg = '主题修改成功'
                    var language_ts = '当前主题为:'
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
                    var ztsc = language_ah
                    var zyaj_normal_color = 0x000000
                    //var zyaj_press_color = 0x262626
                }else{
                    var ztsc = language_mr
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
                    text: language_ts + ztsc
                });
                var n = getList();
                //设置主题，经典为0，暗黑为1，zt为主题变量，为str
                if (zt == '1'){
                    var item_config = [{
                        type_id: 1,
                        item_bg_color: 0x101010,
                        item_bg_radius: 15,
                        text_view: [{
                            x: 10,
                            y: 0,
                            w: 150,
                            h: 75,
                            key: "text",
                            text_size: 23,
                            align_h: hmUI.align.LEFT,
                            align_v: hmUI.align.CENTER_V,
                            text_style: hmUI.text_style.NONE,
                            color: 0xffffff
                        }, {
                            x: 162,
                            y: 0,
                            w: 20,
                            h: 75,
                            key: "icon",
                            text_size: 23,
                            align_h: hmUI.align.CENTER_H,
                            align_v: hmUI.align.CENTER_V,
                            text_style: hmUI.text_style.NONE,
                            color: 0xbbbbbb
                        }],
                        text_view_count: 2,
                        item_height: 75
                    }]
                    var ui_SCROLL_LIST_x = 5
                    var ui_SCROLL_LIST_w = 182
                }else{
                    var item_config = [{
                        type_id: 1,
                        item_bg_color: 0x262626,
                        item_bg_radius: 12,
                        text_view: [{
                            x: 10,
                            y: 0,
                            w: 140,
                            h: 70,
                            key: "text",
                            text_size: 21,
                            align_h: hmUI.align.CENTER_H,
                            align_v: hmUI.align.CENTER_V,
                            text_style: hmUI.text_style.NONE,
                            color: 0xffffff
                        }],
                        text_view_count: 1,
                        item_height: 70
                    }]
                    var ui_SCROLL_LIST_x = 16
                    var ui_SCROLL_LIST_w = 160
                }
                var ui_SCROLL_LIST = hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
                    x: ui_SCROLL_LIST_x,
                    y: 95,
                    h: 332,
                    w: ui_SCROLL_LIST_w,
                    item_space: 10,
                    item_config: item_config,
                    item_config_count: 1,
                    data_array: n,
                    data_count: n.length,
                    item_click_func: (e, i) => {
                        chik(i);
                    },
                    data_type_config: [{
                        start: 0,
                        type_id: 1
                    }],
                    data_type_config_count: 1
                });
                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                function getList() {
                    var n = [];
                    //设置主题，经典为0，暗黑为1，zt为主题变量，为str
                    if (zt == '1'){
                        n.push({ text: language_mr, icon: "〉" });
                        n.push({ text: language_ah, icon: "〉" });
                    }else{
                        n.push({ text: language_mr });
                        n.push({ text: language_ah });
                    }
                    return n
                }
                function chik(index){
                    switch (index){
                        case 0:
                            hmFS.SysProSetChars('Band_Manager_Pro_zt', '0');
                            hmUI.showToast({
                                text: language_xgcg
                            });
                            hmApp.reloadPage({
                                url: 'pages/config/themePage',
                                param: ''
                            });
                            break;
                        case 1:
                            hmFS.SysProSetChars('Band_Manager_Pro_zt', '1');
                            hmUI.showToast({
                                text: language_xgcg
                            });
                            hmApp.reloadPage({
                                url: 'pages/config/themePage',
                                param: ''
                            });
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
