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

                        break;
                    case 1:
                        
                        break;
                    case 2:

                        break;
                }

                if (language == 0 || language == 1) {
                    var TopTitle = '环管Pro';
                    var language_bottom_title1 = '实用工具';
                    var language_bottom_title2 = '快捷方式';
                    var language_bottom_title3 = '应用设置';
                    var language_ui_botton_a1 = '小程序管理';
                    var language_ui_botton_a2 = '文件管理';
                    var language_ui_botton_a5 = '应用锁';
                    var language_ui_botton_a3 = '屏幕检测';
                    var language_ui_botton_a4 = '系统信息';
                    var language_ui_botton_b6 = '应用顺序调节'
                    var language_ui_botton_b1 = '遥控拍照';
                    var language_ui_botton_b2 = '亮度调节';
                    var language_ui_botton_b3 = '系统设置';
                    var language_ui_botton_b4 = '手电筒';
                    var language_ui_botton_b5 = '关机';
                    var language_ui_botton_c7 = '主题修改';
                    var language_ui_botton_c8 = '自动修复';
                    var language_ui_botton_c1 = '捐赠';
                    var language_ui_botton_c2 = '小程序管理设置';
                    var language_ui_botton_c3 = '文件管理设置';
                    var language_ui_botton_c4 = '伪装模式';
                    var language_ui_botton_c5 = '应用锁设置';
                    var language_ui_botton_c6 = '关于我们';
                    var language_ui_botton_c9 = '激活';
                    var language_zbkf = '暂不开放';
                } else {
                    var TopTitle = 'Band Manager Pro';
                    var language_bottom_title1 = 'Tools';
                    var language_bottom_title2 = 'Shortcut';
                    var language_bottom_title3 = 'Settings';
                    var language_ui_botton_a1 = 'App Management';
                    var language_ui_botton_a2 = 'File Management';
                    var language_ui_botton_a3 = 'Screen Detection';
                    var language_ui_botton_a4 = 'System Info';
                    var language_ui_botton_a5 = 'App Lock';
                    var language_ui_botton_b6 = 'App list sort(Not done, please use)'
                    var language_ui_botton_b1 = 'Photo shoot';
                    var language_ui_botton_b2 = 'Brightness adjustment';
                    var language_ui_botton_b3 = 'System Setting';
                    var language_ui_botton_b4 = 'Flashlight';
                    var language_ui_botton_b5 = 'Power Off';
                    var language_ui_botton_c7 = 'ThemePage change';
                    var language_ui_botton_c8 = 'Automatic repairPage';
                    var language_ui_botton_c1 = 'Donation';
                    var language_ui_botton_c2 = 'App Management setting';
                    var language_ui_botton_c3 = 'File Management setting';
                    var language_ui_botton_c4 = 'Mask Mode';
                    var language_ui_botton_c5 = 'App Lock setting';
                    var language_ui_botton_c6 = 'About Us';
                    var language_ui_botton_c9 = 'Activation';
                    var language_zbkf = 'Access denied';
                }
                /*------------------------------
                | 其他配置                      |
                ------------------------------*/
                var pages = 1;
                var yhscbl_lscs_jldjcs = 1;
                if (hmFS.SysProGetInt('index_pages') != null) pages = hmFS.SysProGetInt('index_pages');
                const pagesMax = 3;
                hmFS.SysProSetBool('index_tc', true);
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
                    text: TopTitle//环管Pro
                });
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
                        hmFS.SysProSetInt('index_pages', pages);
                        //hmUI.deleteWidget(ui_SCROLL_LIST)
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
                        hmFS.SysProSetInt('index_pages', pages);
                        //hmUI.deleteWidget(ui_SCROLL_LIST)
                        update();
                    }
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
                    y: 103,
                    h: 332,
                    w: ui_SCROLL_LIST_w,
                    item_space: 10,
                    item_config: item_config,
                    item_config_count: 1,
                    data_array: n,
                    data_count: n.length,
                    item_click_func: (e, i) => {
                        chik(i + 1);
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
                function update() {
                    var n = getList();
                    ui_SCROLL_LIST.setProperty(hmUI.prop.UPDATE_DATA, {
                        data_type_config: [
                            {
                                start: 0,
                                type_id: 1
                            },
                        ],
                        data_type_config_count: 1,
                        data_array: n,
                        data_count: n.length,
                        on_page: 0
                    });
                }
                function getList() {
                    var n = [];
                    var text = '';
                    switch (pages) {
                        case 1:
                            //实用工具
                            text = language_bottom_title1;
                            n.push({ text: language_ui_botton_a5, icon: "〉" });
                            n.push({ text: language_ui_botton_a1, icon: "〉" });
                            n.push({ text: language_ui_botton_a2, icon: "〉" });
                            n.push({ text: language_ui_botton_a3, icon: "〉" });
                            n.push({ text: language_ui_botton_a4, icon: "〉" });
                            break;
                        case 2:
                            text = language_bottom_title2;
                            //快捷方式
                            n.push({ text: language_ui_botton_b6, icon: "〉" });
                            n.push({ text: language_ui_botton_b1, icon: "〉" });
                            n.push({ text: language_ui_botton_b2, icon: "〉" });
                            n.push({ text: language_ui_botton_b3, icon: "〉" });
                            n.push({ text: language_ui_botton_b4, icon: "〉" });
                            n.push({ text: language_ui_botton_b5, icon: "〉" });
                            break;
                        case 3:
                            text = language_bottom_title3;
                            //应用设置
                            n.push({ text: language_ui_botton_c1, icon: "〉" });
                            n.push({ text: language_ui_botton_c5, icon: "〉" });
                            n.push({ text: language_ui_botton_c2, icon: "〉" });
                            n.push({ text: language_ui_botton_c3, icon: "〉" });
                            n.push({ text: language_ui_botton_c7, icon: "〉" });
                            n.push({ text: language_ui_botton_c4, icon: "〉" });
                            n.push({ text: language_ui_botton_c8, icon: "〉" });
                            n.push({ text: language_ui_botton_c9, icon: "〉" });
                            n.push({ text: language_ui_botton_c6, icon: "〉" });
                            break;
                    }
                    ui_title_a1.setProperty(hmUI.prop.TEXT, '[' + pages + '/' + pagesMax + '] ' + text);
                    return n;
                }
                function chik(ii) {
                    hmFS.SysProSetBool('index_tc', false);
                    switch (pages) {
                        case 1:
                            switch (ii) {
                                case 2:
                                    hmApp.gotoPage({
                                        url: 'pages/tools/AppMangerPage',
                                        param: '0'
                                    });
                                    break;
                                case 3:
                                    hmApp.gotoPage({
                                        url: 'pages/tools/FileMangerListPage',
                                        param: JSON.stringify({
                                            path: '',
                                            key: ''
                                        })
                                    });
                                    break;
                                case 4:
                                    hmApp.gotoPage({
                                        url: 'pages/tools/ScreenTestPage',
                                        param: ''
                                    });
                                    break;
                                case 5:
                                    hmApp.gotoPage({
                                        url: 'pages/tools/SuperSystemConfigPage',
                                        param: ''
                                    });
                                    break;
                                case 1:
                                    hmApp.gotoPage({
                                        url: 'pages/tools/ApplicationLockListPage',
                                        param: ''
                                    });
                                    break;
                            }
                            break;
                        case 2:
                            switch (ii) {
                                case 1:
                                    hmApp.startApp({
                                        url: "Settings_applistSortScreen",
                                        native: true
                                    });
                                    break;
                                case 2:
                                    hmApp.startApp({
                                        url: "HidcameraScreen",
                                        native: true
                                    });
                                    break;
                                case 3:
                                    hmApp.startApp({
                                        url: "Settings_lightAdjustScreen",
                                        native: true
                                    });
                                    break;
                                case 4:
                                    hmApp.startApp({
                                        url: "Settings_homeScreen",
                                        native: true
                                    });
                                    break;
                                case 5:
                                    hmApp.startApp({
                                        url: "FlashLightScreen",
                                        native: true
                                    });
                                    break;
                                case 6:
                                    hmApp.startApp({
                                        url: "HmReStartScreen",
                                        native: true
                                    });
                                    break;
                            }
                            break;
                        case 3:
                            switch (ii) {
                                case 1:
                                    hmApp.gotoPage({
                                        url: 'pages/config/PayForUsPage',
                                        param: ''
                                    });
                                    break;
                                case 2:
                                    hmApp.gotoPage({
                                        url: 'pages/config/AppLockMorePage',
                                        param: ''
                                    });
                                    break;
                                case 3:
                                    hmApp.gotoPage({
                                        url: 'pages/config/AppMangerMorePage',
                                        param: ''
                                    });
                                    break;
                                case 4:
                                    hmApp.gotoPage({
                                        url: 'pages/config/FileMangerMorePage',
                                        param: ''
                                    });
                                    break;
                                case 5:
                                    if (yhscbl_lscs_jldjcs == 10){
                                        hmApp.gotoPage({
                                            url: 'pages/config/themePage',
                                            param: ''
                                        });
                                    }else{
                                        hmFS.SysProSetBool('index_tc', true);
                                        hmUI.showToast({
                                            text: language_zbkf
                                        });
                                        yhscbl_lscs_jldjcs = yhscbl_lscs_jldjcs + 1
                                    }
                                    break;
                                case 6:
                                    hmApp.gotoPage({
                                        url: 'pages/config/MaskMorePage',
                                        param: ''
                                    });
                                    break;
                                case 7:
                                    hmApp.gotoPage({
                                        url: 'pages/config/Automatic_repairPage',
                                        param: ''
                                    });
                                    break;
                                case 8:
                                    hmApp.gotoPage({
                                        url: 'pages/config/ActivatePage',
                                        param: '1'
                                    });
                                    break;
                                case 9:
                                    hmApp.gotoPage({
                                        url: 'pages/config/AboutPage',
                                        param: ''
                                    });
                                    break;
                            }
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