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
                /*------------------------------
                | 设置语言                      |
                ------------------------------*/
                const language = hmSetting.getLanguage();
                if (language == 0 || language == 1) {
                    var language_title_text = '自动修复';
                    var language_kg1 = '环管Pro自动修复';
                    var language_tj1 = '此功能可以自动修复\n环管Pro和手环\n的各种问题';
                    var language_tj2 = '环管Pro出现错误\n需要修复';
                    var language_an_text = '点我修复';
                    var language_xfcg = '自动修复成功\n请重启';
                    var language_cq = '重启';
                } else {
                    var language_title_text = 'Automatic repair';
                    var language_kg1 = 'Automatic repair';
                    var language_tj1 = 'This feature can automatically fix various problems with/nBandManagePro and the MiBand7';
                    var language_tj2 = 'BandManagePro has an error that needs to be fixed';
                    var language_an_text = 'Fix it';
                    var language_xfcg = 'Automatic repair success\nPlease reboot your MiBand';
                    var language_cq = 'Reboot';
                }
                /*------------------------------
                | 其他配置                      |
                ------------------------------*/
                const button_pos_x = 21;
                const button_size_w = 150;
                const button_size_h = 70;
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
                if (param == '1'){
                    hmApp.registerGestureEvent(function (RIGHT) {
                        hmApp.unregisterGestureEvent()
                        hmApp.gotoHome()
                        return false;
                    });
                    var tsnrjg = language_tj2
                }else{
                    var tsnrjg = language_tj1
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
                const an1 = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: button_pos_x,
                    y: 100,
                    w: button_size_w,
                    h: button_size_h,
                    radius: 12,
                    normal_color: 0x007ACC,
                    press_color: 0x005AB0,
                    text_size: 25,
                    text: language_an_text,
                    click_func: () => {
                        zdxf()
                    }
                });
                const text2 = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 5,
                    y: 185,
                    w: 182,
                    h: 80,
                    color: 0xffffff,
                    text_size: 20,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.NONE,
                    text: tsnrjg
                });
                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                function statSync(filename) {
                    const [fs_stat, err] = hmFS.stat(filename);
                    if (err == 0) {
                        return fs_stat;
                    } else {
                        return null;
                    }
                }
                function statSync_asset(filename) {
                    const [fs_stat, err] = hmFS.stat_asset(filename);
                    if (err == 0) {
                        return fs_stat;
                    } else {
                        return null;
                    }
                }
                function readFileSync(filename) {
                    const fs_stat = statSync(filename);
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
                function copyFile(filename1, filename2) {
                    const fs_stat = statSync_asset(filename1);
                    if (!fs_stat) return 'notfile';
                    var test_buf = new Uint8Array(fs_stat.size);
                    var file1 = hmFS.open_asset(filename1, hmFS.O_RDONLY);
                    hmFS.read(file1, test_buf.buffer, 0, test_buf.length);
                    hmFS.close(file1);
                    var file2 = hmFS.open_asset(filename2, hmFS.O_CREAT | hmFS.O_RDWR | hmFS.O_TRUNC);
                    hmFS.seek(file2, 0, hmFS.SEEK_SET);
                    hmFS.write(file2, test_buf.buffer, 0, test_buf.length);
                    hmFS.close(file2);
                }
                function changeState(sta) {
                    const n1 = '环管Pro';
                    const n2 = 'Band Manager Pro';
                    const mn1 = '手电筒';
                    const mn2 = 'Flashlight';
                    var path = '../../../../../js_apps/0000C2E9/app.json';
                    var img_app = 'image/icon/app.png';
                    var img_mask = 'image/icon/mask.png';
                    var img = 'icon.png';
                    var e = readFileSync(path);
                    if (sta) {
                        copyFile(img_mask, img);
                        if (e.toString().indexOf(n1) != -1) {
                            e = e.toString().replace(n1, mn1);
                            e = e.toString().replace(n2, mn2);
                            writeFileSync(path, e);
                        }
                    } else {
                        copyFile(img_app, img);
                        if (e.toString().indexOf(mn1) != -1) {
                            e = e.toString().replace(mn1, n1);
                            e = e.toString().replace(mn2, n2);
                            writeFileSync(path, e);
                        }
                    }
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
                        var ybappid = ey_json['app']["appId"];
                        try {
                            var startAppym = ey_json["targets"]["gtr3-pro"]["module"]["page"]["pages"][1];
                        } catch (err) {
                            try {
                                var startAppym = ey_json["module"]["page"]["pages"][1];
                            } catch (err) {
                                return false
                            }
                        }
                    } catch (err) {
                        return false
                    }
                    return [ybappid, startAppym];
                }
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
                function zdxf() {
                    hmFS.remove('/storage/js_apps/data/0000C2E9/AppsList.txt');
                    hmFS.remove('/storage/js_apps/data/0000C2E9/AppsLockList.txt');
                    hmFS.remove('/storage/js_apps/data/0000C2E9/hideappList.txt');
                    const app_path = '/storage/js_apps';
                    const watchfaces_path = '/storage/js_watchfaces';
                    const [js_appsList, o] = hmFS.readdir(app_path);
                    const js_watchfacesList = hmFS.readdir(watchfaces_path)[0];
                    var index_state = hmFS.SysProGetBool('index_state');
                    if (index_state == undefined) {
                        hmFS.SysProSetBool('index_state', false);
                        index_state = false;
                    }
                    changeState(index_state)
                    var AppUnlock_appid = readFileSync('AppUnlock_appid.txt')
                    if (AppUnlock_appid == 'notfile'){
                        AppUnlock_appid = {}
                    }else{
                        AppUnlock_appid = JSON.parse(AppUnlock_appid)
                    }
                    for (var r = 0; r < js_appsList.length; r++) {
                        if (js_appsList[r] != 'data') {
                            /*
                            var app_path4 = '../../../../../js_apps/' + js_appsList[r] + '/app.json.bak';
                            var fs_stat_app_path4 = statSync_asset(app_path4);
                            if (fs_stat_app_path4 !== null){
                                var app_path4_oldPath = '/storage/js_apps/' + js_appsList[r] + '/app.json.bak';
                                var app_path4_newPath = '/storage/js_apps/' + js_appsList[r] + '/app.json';
                                hmFS.rename(app_path4_oldPath, app_path4_newPath);
                            }
                            */
                            var app_path3 = '../../../../../js_apps/' + js_appsList[r] + '/app.json';
                            var fs_stat = statSync_asset(app_path3);
                            if (!fs_stat){
                                var app_path5 = '../../../../../js_apps/' + js_appsList[r] + '/app.json.bak'
                                var fs_stat = statSync_asset(app_path5);
                                if (!fs_stat){
                                    wjjsc('/storage/js_apps/' + js_appsList[r])
                                }
                                continue
                            }
                            var app_path2 = '../../../../../js_apps/' + js_appsList[r] + '/pages/BandManagerPro_index_Lock.js';
                            var fs_stat = statSync_asset(app_path2);
                            if (fs_stat != null){
                                var app_path6 = '../../../../../js_apps/' + js_appsList[r] + '/app.json';
                                var fs_stat = statSync(app_path6);
                                if (!fs_stat) {
                                    app_path6 = '../../../../../js_apps/' + js_appsList[r] + '/app.json.bak';
                                    var fs_stat = statSync(app_path6);
                                    if (!fs_stat) continue
                                }
                                var appInfo = jzxcxmz(fs_stat, app_path6, js_appsList[r])
                                if (appInfo !== false){
                                    if (AppUnlock_appid[appInfo[0].toString()] == undefined){
                                        AppUnlock_appid[appInfo[0].toString()] = {"type":"False","url":appInfo[1]}
                                    }else{
                                        AppUnlock_appid[appInfo[0].toString()]["url"] = appInfo[1]
                                    }
                                }
                            }
                        }else{
                            continue
                        }
                    }
                    for (var r = 0; r < js_watchfacesList.length; r++) {
                        if (js_appsList[r] != 'data' && js_appsList[r] != 'list.dat') {
                            var watchfaces_path1 = '../../../../../js_watchfaces/' + js_watchfacesList[r] + '/app.json';
                            var fs_stat = statSync_asset(watchfaces_path1);
                            if (!fs_stat){
                                wjjsc('/storage/js_watchfaces/' + js_watchfacesList[r])
                            }
                        }
                    }
                    writeFileSync('AppUnlock_appid.txt', JSON.stringify(AppUnlock_appid))
                    finishShow(language_xfcg)
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
                function finishShow(te) {
                    title_background.setProperty(hmUI.prop.VISIBLE, false);
                    title_text.setProperty(hmUI.prop.VISIBLE, false);
                    text.setProperty(hmUI.prop.VISIBLE, false);
                    an1.setProperty(hmUI.prop.VISIBLE, false);
                    text2.setProperty(hmUI.prop.VISIBLE, false);
                    hmUI.createWidget(hmUI.widget.TEXT, {
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
                    hmApp.registerGestureEvent(function (RIGHT) { return true; });
                    hmUI.createWidget(hmUI.widget.BUTTON, {
                        x: button_pos_x,
                        y: 380,//300
                        w: button_size_w,
                        h: button_size_h,
                        radius: 12,
                        normal_color: 0x007ACC,
                        press_color: 0x005AB0,
                        text_size: 20,
                        text: language_cq,
                        click_func: () => {
                            hmApp.unregisterGestureEvent()
                            hmFS.SysProSetBool('index_tc', false);
                            hmApp.startApp({
                                url: "Settings_systemScreen",
                                native: true
                            });
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
