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
                    var language_czwc = '操作已完成';
                    var language_qd = '确定';
                    var language_qdcz = '请选择您的操作';
                    var language_sczwj = '仅删除子文件';
                    var language_scqb = '删除全部';
                    //var language_cg = '成功、';
                    //var language_jr = '进入';
                    //var language_wjj = '文件夹、';
                    //var language_wjjcg = '文件夹成功、';
                    //var language_wjjsbdm = '文件夹失败，错误代码:';
                    //var language_sbbm = '失败，错误代码:';
                    //var language_zbdwj = '找不到文件';
                } else {
                    var language_czwc = 'Operation completed';
                    var language_qd = 'OK';
                    var language_qdcz = 'Please select your action';
                    var language_sczwj = 'Delete only subfiles';
                    var language_scqb = 'Delete all';
                    //var language_cg = 'Success、';
                    //var language_jr = 'enter';
                    //var language_wjj = 'Folders、';
                    //var language_wjjcg = 'Folder Success、';
                    //var language_wjjsbdm = 'Folder failure, error code:';
                    //var language_sbbm = 'Failed, error code:';
                    //var language_zbdwj = 'File not found';
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
                    y: 65,
                    w: 192,
                    h: 260,
                    color: 0xffffff,
                    text_size: 20,
                    text_size: 25,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.CHAR_WRAP,
                    text: language_qdcz
                });
                const ui_an2 = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: button_pos_x,
                    y: 300,
                    w: button_size_w,
                    h: button_size_h,
                    radius: 12,
                    normal_color: 0x007ACC,
                    press_color: 0x005AB0,
                    text_size: 20,
                    text: language_sczwj,
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
                    text_size: 20,
                    text: language_scqb,
                    click_func: () => scxcxhs(2)
                });
                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                function scxcxhs(cqm) {
                    var ey = param.toString();
                    var app_path = ey.toString().replace("/storage/", "../../../../../");
                    switch (cqm) {
                        case 1:
                            rm(app_path);
                            hmFS.SysProSetChars(ey, JSON.stringify(hmFS.readdir(ey)[0]));
                            break;
                        case 2:
                            wjjsc(ey);
                            var a = ey;
                            a = a.substring(0, a.lastIndexOf("/"));
                            hmFS.SysProSetChars(a, JSON.stringify(hmFS.readdir(a)[0]));
                            hmFS.SysProSetChars(ey, 'File_Management_go_back');
                            break;
                        default:
                            break;
                    }
                    finishShow();
                }
                function finishShow() {
                    ui_an2.setProperty(hmUI.prop.VISIBLE, false);
                    ui_an3.setProperty(hmUI.prop.VISIBLE, false);
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
                        text: language_czwc
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
                function rm(app_path2) {
                    var [k, o] = hmFS.readdir(app_path2.toString().replace("../../../../../", "/storage/"));
                    for (var r = 0; r < k.length; r++) {
                        var app_path3 = app_path2 + '/' + k[r];
                        var [ll, ii] = hmFS.stat_asset(app_path3);
                        if (ll.size != 0) {
                            hmFS.remove(app_path3.toString().replace("../../../../../", "/storage/"));
                        } else {
                            rm(app_path3);
                        }
                    }
                }
                function wjjsc(path) {
                    var result = 0;
                    var [fileNameArr, err] = hmFS.readdir(path);
                    if (err == -2) {
                        for (i = 0; i < fileNameArr.length; i++) {
                            result = hmFS.remove(path + '/' + fileNameArr[i]);
                            if (result == 0) {
                            } else if (result == -7) {
                                wjjsc(path + '/' + fileNameArr[i]);
                                var [fileNameArr, err] = hmFS.readdir(path);
                            }
                        }
                    }
                    result = hmFS.remove(path);
                    if (result == 0) {
                        return '';
                    } else if (result == -4) {
                        return '';
                    } else {
                        wjjsc(path);
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
