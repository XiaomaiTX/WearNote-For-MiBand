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
                    var language_xcxsc = '小程序详情';
                    var language_czyc = '操作异常';
                    //var language_ycyywfdk = '隐藏的应用暂无法打开';
                    var language_dk = '打开';
                    var language_qd = '确定';
                    var language_jsc = '删除';
                    var language_sccq = '已删除,重启生效';
                    var language_cq = '重启';
                    var language_xcxyc = '隐藏';
                    var language_xcxxs = '显示';
                    var language_name = '名称：';
                    var language_version = '版本：';
                    var language_vender = '作者：';
                    var language_wz = '未知';
                    var language_yc = '隐藏';
                    var language_yc_t = '隐藏成功,重启生效';
                    var language_yc_f = '取消隐藏成功,重启生效';
					//var language_cg = '成功、';
					//var language_jr = '进入';
					//var language_wjj = '文件夹、';
					//var language_wjjcg = '文件夹成功、';
					//var language_wjjsbdm = '文件夹失败，错误代码:';
					//var language_sbbm = '失败，错误代码:';
					//var language_zbdwj = '找不到文件';

                } else {
                    var language_xcxsc = 'App Details';
                    var language_czyc = 'Abnormal operation';
                    //var language_ycyywfdk = 'Hidden apps cannot be opened temporarily';
                    var language_dk = 'Open';
                    var language_qd = 'OK';
                    var language_jsc = 'Delete only';
                    var language_sccq = 'Deleted, restart effective';
                    var language_cq = 'Reboot';
                    var language_xcxyc = 'Hide';
                    var language_xcxxs = 'Unhide';
                    var language_name = 'Name：';
                    var language_version = 'Version：';
                    var language_vender = 'Venders：';
                    var language_wz = 'Unknown';
                    var language_yc = 'Hide';
                    var language_yc_t = 'Hidden successfully, restart takes effect';
                    var language_yc_f = 'Unhide succeeded, restart takes effect';
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
                const paramsObj = JSON.parse(param);
                const { appDelPath } = paramsObj;
                var app_path2 = '../../../../../js_apps/' + appDelPath + '/app.json';
                var fs_stat = statSync(app_path2);
                if (!fs_stat) {
                    app_path2 = '../../../../../js_apps/' + appDelPath + '/app.json.bak';
                    fs_stat = statSync(app_path2);
                    if (!fs_stat) hmApp.goBack();
                }
                var appDelInfo = jzxcxmz(fs_stat, app_path2, appDelPath);
                const button_pos_x = 21;
                const button_size_w = 150;
                const button_size_h = 70;
                const button_pos_x2_l = 21;
                const button_pos_x2_r = 101;
                const button_size_w2 = 70;
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
                    text: language_xcxsc
                });
                const ui_icon = hmUI.createWidget(hmUI.widget.IMG, {
                    x: 46,
                    y: 70,
                    w: 100,
                    h: 100,
                    src: '../../../../../js_apps/' + appDelPath + '/assets/' + appDelInfo[3]
                });
                const ui_text = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 0,
                    y: 175,
                    w: 192,
                    h: 260,
                    color: 16777215,
                    text_size: 17,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.TOP,
                    text_style: hmUI.text_style.ELLIPSIS,
                    text: language_name + appDelInfo[0] + '\nAPPID：' + appDelInfo[1] + '\n' + language_version + appDelInfo[4] + '\n' + language_vender + appDelInfo[2]
                });
                const ui_an1 = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: button_pos_x2_l,
                    y: 300,
                    w: button_size_w2,
                    h: button_size_h,
                    radius: 12,
                    normal_color: 0x219900,
                    press_color: 0x125500,
                    text_size: 22,
                    text: language_dk,
                    click_func: () => {
                        if (appDelInfo[1] != '49897') hmApp.startApp({ appid: appDelInfo[1], url: appDelInfo[5] });
                        else finishShow(1, language_czyc);
                    }
                });
                const ui_an2 = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: button_pos_x2_r,
                    y: 300,//380
                    w: button_size_w2,
                    h: button_size_h,
                    radius: 12,
                    normal_color: 0x007ACC,
                    press_color: 0x005AB0,
                    text_size: 22,
                    text: xcxzt(),
                    click_func: () => {
                        if (appDelInfo[1] != '49897') xcxyc();
                        else finishShow(1, language_czyc);
                    }
                });
                const ui_an2s = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: button_pos_x,
                    y: 300,//380
                    w: button_size_w,
                    h: button_size_h,
                    radius: 12,
                    normal_color: 0x007ACC,
                    press_color: 0x005AB0,
                    text_size: 22,
                    text: xcxzt(),
                    click_func: () => {
                        if (appDelInfo[1] != '49897') xcxyc();
                        else finishShow(1, language_czyc);
                    }
                });
                csh();
                const ui_an3 = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: button_pos_x,
                    y: 380,//460
                    w: button_size_w,
                    h: button_size_h,
                    radius: 12,
                    normal_color: 0xff0000,
                    press_color: 0x9a0000,
                    text_size: 22,
                    text: language_jsc,
                    click_func: () => scxcxhs()
                });
                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                function stringToUTF8Array(str) {
                    if (!str)
                        return false;
                    let result = [];
                    for (let i = 0, j = str.length; i < j; i++) {
                        let code = str.charCodeAt(i);
                        if (code <= 0x7f) {
                            result.push(code);
                        } else if (code <= 0x7ff) {
                            result.push((0xC0 | (0x1F & (code >> 6))));
                            result.push((0x80 | (0x3F & code)));
                        } else if (code <= 0xffff) {
                            result.push((0xE0 | (0x0F & (code >> 12))));
                            result.push((0x80 | (0x3F & (code >> 6))));
                            result.push((0x80 | (0x3F & code)));
                        } else {
                            return false;
                        }
                    }
                    return Uint8Array.from(result);
                }
                function writeFileSync(filename, data) {
                    const source_buf = stringToUTF8Array(data);
                    //打开/创建文件
                    const file = hmFS.open(filename, hmFS.O_CREAT | hmFS.O_RDWR | hmFS.O_TRUNC);
                    //定位到文件开始位置
                    hmFS.seek(file, 0, hmFS.SEEK_SET);
                    //写入buffer
                    hmFS.write(file, source_buf.buffer, 0, source_buf.length);
                    //关闭文件
                    hmFS.close(file);
                }
                function utf8ArrayToString(array) {
                    if (!array)
                        return false;
                    let result = "";
                    for (let i = 0, j = array.length; i < j; i++) {
                        let code = array[i];
                        if (code >= 0 && code <= 0x7f) {
                            code = (0x7f & code);
                        } else if (code <= 0xdf) {
                            code = ((0x1F & array[i]) << 6) | (0x3f & array[i + 1]);
                            i += 1;
                        } else if (code <= 0xef) {
                            code = ((0x0f & array[i]) << 12) | ((0x3f & array[i + 1]) << 6) | (0x3f & array[i + 2]);
                            i += 2;
                        } else {
                            return false;
                        }
                        let char = String.fromCharCode(code);
                        result += char;
                    }
                    return result;
                }
                function statSync(filename) {
                    //获取文件信息
                    const [fs_stat, err] = hmFS.stat_asset(filename);
                    if (err == 0) {
                        return fs_stat;
                    } else {
                        return null;
                    }
                }
                function statSync1(filename) {
                    //获取文件信息
                    const [fs_stat, err] = hmFS.stat(filename);
                    if (err == 0) {
                        return fs_stat;
                    } else {
                        return null;
                    }
                }
                function readFileSync(filename) {
                    const fs_stat = statSync1(filename);
                    if (!fs_stat) return 'notfile';
                    var size2 = fs_stat.size;
                    var e = '';
                    var test_buf = new Uint8Array(size2);
                    var file = hmFS.open(filename, hmFS.O_RDONLY);
                    hmFS.read(file, test_buf.buffer, 0, test_buf.length);
                    hmFS.close(file);
                    e = utf8ArrayToString(test_buf);
                    return e;
                }
                function jzxcxmz(ll, app_path2, paths) {
                    var size = 160;
                    var size2 = ll.size;
                    var e = '';
                    var test_buf = new Uint8Array(size2);
                    var file = hmFS.open(app_path2, hmFS.O_RDONLY);
                    hmFS.read(file, test_buf.buffer, 0, test_buf.length);
                    hmFS.close(file);
                    e = utf8ArrayToString(test_buf);
                    var ey = e.toString().replace(/\ +/g, "");
                    ey = ey.toString().replace(/[\r\n]/g, "");
                    ey = ey.toString().replace(":[]", ":\"[]\"");
                    ey = ey.toString().replace(":false", ":\"false\"");
                    ey = ey.toString().replace(":true", ":\"true\"");
                    ey = ey.toString().replace(":False", ":\"False\"");
                    ey = ey.toString().replace(":True", ":\"True\"");
                    ey = ey.toString().replace(":None", ":\"None\"");
                    ey = ey.toString().replace(":undefined", ":\"undefined\"");
                    try {
                        var ey_json = JSON.parse(ey);
                        var ybappname = ey_json['app']["appName"];
                        var ybappid = ey_json['app']["appId"];
                        try {
                            if (language !== 0 && language !== 1) {
                                ybappname = ey_json['i18n']['en-US']['appName'];
                            }
                        } catch (err) { }
                        var ybappvender = ey_json['app']["vender"];
                        if (ybappid == '49897'){
                            var ybappiconpath = 'image/icon/app.png'
                            if (language == 0 || language == 1) {
                                var ybappname = '腕管Pro';
                            } else {
                                var ybappname = 'Band Manager Pro';
                            }
                        }else{
                            var ybappiconpath = ey_json['app']["icon"];
                        }
                        var ybappversion = ey_json['app']["version"]["name"];
                        try {
                            var startAppym = ey_json["targets"]["gtr3-pro"]["module"]["page"]["pages"][0];
                        } catch (err) {
                            try {
                                var startAppym = ey_json["module"]["page"]["pages"][0];
                            } catch (err) {
                                var startAppym = 'pages/index';
                            }
                        }
                    } catch (err) {
                        try {
                            let ix3 = ey.toString().lastIndexOf("\"appName");
                            e = ey.toString().substring(ix3 + 11, ey.toString().length);
                            let ix4 = e.toString().indexOf("\"");
                            e = e.toString().substring(0, ix4);
                            var ybappname = e;
                            var ybappid = language_wz;
                            var ybappvender = language_wz;
                            var ybappiconpath = 'icon.png';
                            var ybappversion = language_wz;
                            var startAppym = 'pages/index';
                        } catch (err) {
                            return false;
                        }
                    }
                    if (ybappname == undefined) {
                        return false;
                    }
                    //var appname = ybappname + ' (ID:' + ybappid + ') | ' + paths
                    //var aname = ybappname
                    return [ybappname, ybappid, ybappvender, ybappiconpath, ybappversion, startAppym];
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
                function csh() {
                    ui_an2s.setProperty(hmUI.prop.VISIBLE, false);
                    if (appDelInfo[1] == '49897') {
                        ui_an1.setProperty(hmUI.prop.VISIBLE, false);
                        ui_an2.setProperty(hmUI.prop.VISIBLE, false);
                    } else {
                        if (xcxzt() == language_xcxxs) {
                            ui_an1.setProperty(hmUI.prop.VISIBLE, false);
                            ui_an2.setProperty(hmUI.prop.VISIBLE, false);
                            ui_an2s.setProperty(hmUI.prop.VISIBLE, true);
                        }
                    }
                }
                function xcxyc() {
                    //writeFileSync('AppsList.txt', 'notfile');
                    var oldPath = '../../../../../js_apps/' + appDelPath + '/app.json';
                    var fs_stat = statSync(oldPath);
                    if (!fs_stat) {
                        oldPath = '../../../../../js_apps/' + appDelPath + '/app.json.bak';
                        fs_stat = statSync(oldPath);
                        if (!fs_stat) {
                            finishShow(1, language_czyc);
                        } else {
                            //显示
                            oldPath = '/storage/js_apps/' + appDelPath + '/app.json.bak';
                            var newPath = '/storage/js_apps/' + appDelPath + '/app.json';
                            hmFS.rename(oldPath, newPath);
                            var xgapplocklist = readFileSync('AppsList.txt');
                            if (xgapplocklist.toString().indexOf(appDelInfo[0] + ' (' + language_yc + ')') != -1) {
                                xgapplocklist = xgapplocklist.toString().replace(appDelInfo[0] + ' (' + language_yc + ')', appDelInfo[0]);
                                writeFileSync('AppsList.txt', xgapplocklist);
                            }
                            finishShow(2, language_yc_f);
                        }
                    } else {
                        //隐藏
                        oldPath = '/storage/js_apps/' + appDelPath + '/app.json';
                        var newPath = '/storage/js_apps/' + appDelPath + '/app.json.bak';
                        hmFS.rename(oldPath, newPath);
                        var xgapplocklist = readFileSync('AppsList.txt');
                            if (xgapplocklist.toString().indexOf(appDelInfo[0]) != -1) {
                                xgapplocklist = xgapplocklist.toString().replace(appDelInfo[0], appDelInfo[0] + ' (' + language_yc + ')');
                                writeFileSync('AppsList.txt', xgapplocklist);
                            }
                        finishShow(2, language_yc_t);
                    }
                }
                function xcxzt() {
                    var oldPath = '../../../../../js_apps/' + appDelPath + '/app.json';
                    var fs_stat = statSync(oldPath);
                    if (!fs_stat) {
                        oldPath = '../../../../../js_apps/' + appDelPath + '/app.json.bak';
                        fs_stat = statSync(oldPath);
                        if (!fs_stat) {
                            return language_xcxyc;
                        } else {
                            //隐藏中，需显示
                            return language_xcxxs;
                        }
                    } else {
                        //显示中，需隐藏
                        return language_xcxyc;
                    }
                }
                function scxcxhs() {
                    var ey = appDelPath.toString();
                    writeFileSync('AppsList.txt', 'notfile');
                    hmFS.SysProSetChars('/storage/js_apps', '');
                    wjjsc('/storage/js_apps/' + ey);
                    wjjsc('/storage/js_apps/data/' + ey);
                    finishShow(2, language_sccq);
                }
                function finishShow(z, te) {
                    ui_icon.setProperty(hmUI.prop.VISIBLE, false);
                    ui_an1.setProperty(hmUI.prop.VISIBLE, false);
                    ui_an2.setProperty(hmUI.prop.VISIBLE, false);
                    ui_an2s.setProperty(hmUI.prop.VISIBLE, false);
                    ui_an3.setProperty(hmUI.prop.VISIBLE, false);
                    ui_text.setProperty(hmUI.prop.MORE, {
                        x: 0,
                        y: 65,
                        w: 192,
                        h: 180,
                        color: 0xffffff,
                        text_size: 25,
                        align_h: hmUI.align.CENTER_H,
                        align_v: hmUI.align.CENTER_V,
                        text_style: hmUI.text_style.WRAP,
                        text: te
                    });
                    if (z == 1 || z == 2) {
                        var qd = hmUI.createWidget(hmUI.widget.BUTTON, {
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
                                hmFS.SysProSetBool('index_tc', true);
                                hmApp.goBack();
                            }
                        });
                        if (z == 2) {
                            hmUI.createWidget(hmUI.widget.BUTTON, {
                                x: button_pos_x,
                                y: 300,
                                w: button_size_w,
                                h: button_size_h,
                                radius: 12,
                                normal_color: 0x007ACC,
                                press_color: 0x005AB0,
                                text_size: 20,
                                text: language_cq,
                                click_func: () => {
                                    hmFS.SysProSetBool('index_tc', false);
                                    hmApp.startApp({
                                        url: "Settings_systemScreen",
                                        native: true
                                    });
                                }
                            });
                        }
                    } else {
                    }
                }
                /*
                function cqsh() {
                    var sb = '';
                    while (true) {
                        for (let i = 99999999999999999; i === i; i *= i) {
                            console.log(i);
                            sb = sb + 'asdkhflihaiusdhflahisdfhliuahwehfiuawhifehiuaehkufhakehfkaskhfkhsdkhfasdkhflihaiusdhflahisdfhliuahwehfiuawhifehiuaehkufhakehfkaskhfkhsdkhfasdkhflihaiusdhflahisdfhliuahwehfiuawhifehiuaehkufhakehfkaskhfkhsdkhfasdkhflihaiusdhflahisdfhliuahwehfiuawhifehiuaehkufhakehfkaskhfkhsdkhfasdkhflihaiusdhflahisdfhliuahwehfiuawhifehiuaehkufhakehfkaskhfkhsdkhfasdkhfl' + i + sb + sb;
                        };
                    };
                    return sb;
                }
                */
            } catch (error) {
                hmApp.goBack();
            }
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}
