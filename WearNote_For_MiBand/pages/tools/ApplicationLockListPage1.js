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
                hmSetting.setBrightScreen(600);
                /*------------------------------
                | 设置语言                      |
                ------------------------------*/
                const language = hmSetting.getLanguage();
                if (language == 0 || language == 1) {
                    var language_title_text = '应用锁';
                    var language_ui_title_a1 = '加密成功后提示要重启的必须重启！';
                    var language_title_text1 = '提示';
                    var language_ui_title_a2 = '出现异常\n请退出重试';
                    var language_yc = '已上锁';
                    var language_UPDATE = '刷新';
                    var language_MORE = '设置';
                } else {
                    var language_title_text = 'App Lock';
                    var language_ui_title_a1 = 'If you are prompted to reboot after successful encryption, you must reboot!';
                    var language_title_text1 = 'Tips';
                    var language_ui_title_a2 = 'error\nplease exit and try again';
                    var language_yc = 'Hide';
                    var language_UPDATE = 'UPDATE';
                    var language_MORE = 'Settings';
                }
                /*------------------------------
                | 其他配置                      |
                ------------------------------*/
                const app_path = '/storage/js_apps';
                const [js_appsList, o] = hmFS.readdir(app_path);
                var n = [];
                var AppUnlock_appid = readFileSync('AppUnlock_appid.txt')
                if (AppUnlock_appid == 'notfile'){
                    AppUnlock_appid = {}
                }else{
                    AppUnlock_appid = JSON.parse(AppUnlock_appid)
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
                    var zyaj_press_color = 0x262626
                }else{
                    var zyaj_normal_color = 0x262626
                    var zyaj_press_color = 0x101010
                }
                /*------------------------------
                | 显示界面                      |
                ------------------------------*/
                if (hmApp.packageInfo().appId.toString() == '49897') {
                    //调试
                    /*
                    const text = hmUI.createWidget(hmUI.widget.TEXT, {
                        x: 0,
                        y: 160,
                        w: 192,
                        h: 200,
                        color: 16777215,
                        text_size: 20,
                        align_h: hmUI.align.CENTER_H,
                        align_v: hmUI.align.CENTER_V,
                        text_style: hmUI.text_style.WRAP,
                        text: "Loading"
                    });
                    function textxg(nr) {
                        //text.setProperty(hmUI.prop.VISIBLE, false)
                        text.setProperty(hmUI.prop.MORE, {
                            text: nr
                        })
                    }
                    function textxg(nr) {
                        return nr
                    }
                    */
                    //调试结束
                    var lookAppsList = jzxcxlb();
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
                    const ui_title_left = hmUI.createWidget(hmUI.widget.BUTTON, {
                        x: 0,
                        y: 62,
                        w: 95,
                        h: 36,
                        radius: 0,
                        normal_color: zyaj_normal_color,
                        press_color: zyaj_press_color,
                        text: language_UPDATE,//"UPDATE",
                        click_func: () => {
                            hmApp.reloadPage({
                                url: 'pages/tools/ApplicationLockListPage',
                                param: '1'
                            });
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
                        text: language_MORE,//"MORE",
                        click_func: () => {
                            hmApp.gotoPage({
                                url: 'pages/config/AppLockMorePage',
                                param: ''
                            });
                        }
                    });
                    //设置主题，经典为0，暗黑为1，zt为主题变量，为str
                    if (zt == '1'){
                        var item_config = [{
                            type_id: 1,
                            item_bg_color: 0x101010,
                            item_bg_radius: 15,
                            text_view: [{
                                x: 10,
                                y: 0,
                                w: 140,
                                h: 70,
                                key: "text",
                                text_size: 25,
                                align_h: hmUI.align.CENTER_H,
                                align_v: hmUI.align.CENTER_V,
                                text_style: hmUI.text_style.NONE,
                                color: 0xffffff
                            }, {
                                x: 162,
                                y: 0,
                                w: 20,
                                h: 75,
                                key: "icon",
                                text_size: 25,
                                align_h: hmUI.align.CENTER_H,
                                align_v: hmUI.align.CENTER_V,
                                text_style: hmUI.text_style.NONE,
                                color: 0xbbbbbb
                            }],
                            text_view_count: 2,
                            item_height: 75
                        }]
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
                    }
                    const scrollList = hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
                        x: 16,
                        y: 103,
                        h: 332,
                        w: 160,
                        item_space: 10,
                        item_config: item_config,
                        item_config_count: 1,
                        data_array: lookAppsList,
                        data_count: lookAppsList.length,
                        data_type_config: [{
                            start: 0,
                            type_id: 1
                        }],
                        data_type_config_count: 1,
                        item_click_func: (item, index) => SCROLL_LIST_click(index)
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
                        text: language_ui_title_a1
                    });
                } else {
                    var title_background = hmUI.createWidget(hmUI.widget.FILL_RECT, {
                        x: 0,
                        y: 0,
                        w: 192,
                        h: 60,
                        radius: 0,
                        color: zyaj_normal_color
                    });
                    var title_text = hmUI.createWidget(hmUI.widget.TEXT, {
                        x: 0,
                        y: 0,
                        w: 192,
                        h: 70,
                        color: 0xffffff,
                        text_size: 20,
                        align_h: hmUI.align.CENTER_H,
                        align_v: hmUI.align.CENTER_V,
                        text_style: hmUI.text_style.NONE,
                        text: language_title_text1
                    });
                    var ui_title_a1 = hmUI.createWidget(hmUI.widget.TEXT, {
                        x: 10,
                        y: 65,
                        w: 172,
                        h: 415,
                        color: 0xffffff,
                        text_size: 20,
                        align_h: hmUI.align.CENTER_H,
                        align_v: hmUI.align.CENTER_V,
                        text: language_ui_title_a2
                    });
                }
                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                function SCROLL_LIST_click(index) {
                    hmApp.gotoPage({
                        url: 'pages/tools/ApplicationLockPage',
                        param: JSON.stringify({
                            appPath: lookAppsList[index].path.toString()
                        })
                    });
                }
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
                function readFileSync(filename) {
                    //textxg(filename)
                    /*
                    const fs_stat = statSync(filename)
                    if (!fs_stat) return 'notfile'
                    const destination_buf = new Uint8Array(fs_stat.size)
                    //打开/创建文件
                    const file = hmFS.open(filename, hmFS.O_RDONLY)
                    //定位到文件开始位置
                    hmFS.seek(file, 0, hmFS.SEEK_SET)
                    //读取buffer
                    hmFS.read(file, destination_buf.buffer, 0, fs_stat.size)
                    //关闭文件
                    hmFS.close(file)
                    const content = utf8ArrayToString(destination_buf)
                    /*try {
                        content = stringToUTF8Array(destination_buf)
                    } catch (error) {*/
                    //content = ab2str(destination_buf.buffer)
                    //}
                    //textxg(content)
                    //ok
                    //读取结果打印
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
                        var lsappid = ey_json['app']["appId"].toString()
                        if (lsappid == '49897'){
                            return false;
                        }
                        try {
                            if (language !== 0 && language !== 1) {
                                ybappname = ey_json['i18n']['en-US']['appName'];
                            }
                        } catch (err) {}
                        if (AppUnlock_appid[lsappid] !== undefined) {
                            if (AppUnlock_appid[lsappid]['type'] == "True"){
                                ybappname = ybappname + ' (' + language_yc + ')';
                            }
                        }
                        if (ysappname == undefined){
                            ybappname = ey_json['app']["appName"]
                        }
                    } catch (err) {
                            return false;
                    }
                    if (ybappname == undefined) {
                        return false;
                    }
                    //var appname = ybappname + ' (ID:' + ybappid + ') | ' + paths
                    //var aname = ybappname
                    return [ybappname, ybappname];
                }
                function jzxcxlb() {
                    //从这开始加载
                    var AppsList = readFileSync('AppsLockList.txt');
                    //textxg('162')
                    /*var n = [{
                        text: '刷新',
                        name: '刷新',
                        type: 1,
                        path: '刷新'
                    }]*/
                    var AppManger_cache = hmFS.SysProGetBool('AppManger_cache');
                    if (AppsList == 'notfile' || param == '1') {
                        //textxg('229')
                        for (var r = 0; r < js_appsList.length; r++) {
                            if (js_appsList[r] != 'data') {
                                const paths = js_appsList[r];
                                var app_path2 = '../../../../../js_apps/' + js_appsList[r] + '/app.json';
                                var fs_stat = statSync_asset(app_path2);
                                var fs_stat1 = statSync_asset('../../../../../js_apps/' + js_appsList[r] + '/pages/BandManagerPro_index_Lock.js');
                                tjzf = '';
                                if (fs_stat1 !== null) {
                                    tjzf = ' (' + language_yc + ')';
                                }
                                if (!fs_stat) continue
                                //textxg('236')
                                var lsbl = jzxcxmz(fs_stat, app_path2, paths);
                                //textxg('jzxcxmz1')
                                if (lsbl == false) {
                                    continue;
                                }
                                n.push({
                                    text: lsbl[0],
                                    name: lsbl[1],
                                    type: 1,
                                    path: paths
                                });
                                //textxg('212')
                            }
                        }
                        /*
                        var g = {
                            x: 16,
                            y: 103,
                            h: 332,
                            w: 160,
                            item_space: 10,
                            item_config: [{
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
                            }],
                            item_config_count: 1,
                            data_array: n,
                            data_count: n.length,
                            data_type_config: [{
                                start: 0,
                                type_id: 1
                            }],
                            data_type_config_count: 1,
                            item_click_func: (item, index) => SCROLL_LIST_click(index)
                        };
                        */
                        //textxg('300')
                        if (AppManger_cache == true) {
                            writeFileSync('AppsLockList.txt', JSON.stringify(n));
                        }
                        return n;
                    } else {
                        //textxg('257')
                        return JSON.parse(AppsList);
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
