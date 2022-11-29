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
                    //var language_xcxycyywfdk = '隐藏的应用暂无法打开';
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
                    //var language_xcxyc_t = '隐藏成功,重启生效';
                    //var language_xcxyc_f = '取消隐藏成功,重启生效';
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
                    //var language_xcxycyywfdk = 'Hidden apps cannot be opened temporarily';
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
                    //var language_xcxyc_t = 'Hidden successfully, restart takes effect';
                    //var language_xcxyc_f = 'Unhide succeeded, restart takes effect';
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
                var yccs_wjj = 0
                var yccs_wj = 0
                const paramsObj = JSON.parse(param);
                const { appDelPath } = paramsObj;
                var app_path2 = '../../../../../js_apps/' + appDelPath + '/app.json';
                var fs_stat = statSync(app_path2);
                if (!fs_stat) {
                    app_path2 = '../../../../../js_apps/data/0000C2E9/' + appDelPath + '/app.json';
                    fs_stat = statSync(app_path2);
                    if (!fs_stat) hmApp.goBack();
                }
                var appDelInfo = jzxcxmz(fs_stat, app_path2);
                var jlwjfz = []
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
                    src: get_ui_icon()
                });
                const ui_text = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 0,
                    y: 100,
                    w: 192,
                    h: 260,
                    color: 16777215,
                    text_size: 17,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
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
                        if (appDelInfo[1] != '49897') xcxyc('1');
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
                        if (appDelInfo[1] != '49897') xcxyc('1');
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
                    click_func: () => scxcxhs('1')
                });
                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                function jcsfcf(str){
                    for (let i = 0; i < jlwjfz.length; i++) {
                        if (jlwjfz[i] == str){
                            return true
                        }
                    }
                    jlwjfz.push(str)
                    return false
                }
                function get_ui_icon(){
                    var get_ui_icon_path = '../../../../../js_apps/' + appDelPath + '/assets/' + appDelInfo[3]
                    var fs_stat = statSync(get_ui_icon_path);
                    if (!fs_stat) {
                        get_ui_icon_path = '../../../../../js_apps/data/0000C2E9/' + appDelPath + '/assets/' + appDelInfo[3]
                        fs_stat = statSync(get_ui_icon_path);
                        if (!fs_stat) return ''
                    }
                    return get_ui_icon_path
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
                function jzxcxmz(ll, app_path2) {
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
                                var ybappname = '环管Pro';
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
                    return e
                }
                function copywjj(old_path, new_path) {
                    try {
                        var fileNameArr = hmFS.readdir(old_path)[0];
                        for (i = 0; i < fileNameArr.length; i++) {
                            try {
                                var path1 = old_path + '/' + fileNameArr[i];
                                path1 = path1.toString().replace("/storage/", "../../../../../");
                                var [a, b] = hmFS.stat_asset(path1);
                                if (jcsfcf(old_path + '/' + fileNameArr[i]) == true) {
                                    continue;
                                } else {
                                    hmFS.mkdir(new_path);
                                    if (b == 0) {
                                        var path2 = new_path + '/' + fileNameArr[i];
                                        path2 = path2.toString().replace("/storage/", "../../../../../");
                                        copyFile(path1, path2, a)
                                    } else {
                                        copywjj(old_path + '/' + fileNameArr[i], new_path + '/' + fileNameArr[i]);
                                        yccs_wjj = yccs_wjj + 1;
                                    }
                                }
                            } catch (err) {
                                continue;
                            }
                        }
                    } catch (err) {
                        //copywjj(old_path, new_path)
                    }
                    return true
                }
                
                function copyFile(filename1, filename2, fs_stat) {
                    var test_buf = new Uint8Array(fs_stat.size);
                    var file1 = hmFS.open_asset(filename1, hmFS.O_RDONLY);
                    hmFS.read(file1, test_buf.buffer, 0, test_buf.length);
                    hmFS.close(file1);
                    var file2 = hmFS.open_asset(filename2, hmFS.O_CREAT | hmFS.O_RDWR | hmFS.O_TRUNC);
                    hmFS.seek(file2, 0, hmFS.SEEK_SET);
                    hmFS.write(file2, test_buf.buffer, 0, test_buf.length);
                    hmFS.close(file2);
                    yccs_wj = yccs_wj + 1
                }
/*
                function copyFile(filename1, filename2, size) {
                    //var jlrz = '    进入复制文件函数，开始复制文件'
                    //filename1 = filenameys1.toString().replace("/storage/", "../../../../../");
                    //filename2 = filenameys2.toString().replace("/storage/", "../../../../../");
                    //jlrz = jlrz + '    filenameys1为：' + filenameys1 + '    filenameys2为：' + filenameys2 + '    filename1为：' + filename1 + '    filename2为：' + filename2
                    var test_buf = new Uint8Array(size);
                    var file1 = hmFS.open_asset(filename1, hmFS.O_RDONLY);
                    hmFS.read(file1, test_buf.buffer, 0, test_buf.length);
                    hmFS.close(file1);
                    var file2 = hmFS.open_asset(filename2, hmFS.O_CREAT | hmFS.O_RDWR | hmFS.O_TRUNC);
                    hmFS.seek(file2, 0, hmFS.SEEK_SET);
                    hmFS.write(file2, test_buf.buffer, 0, test_buf.length);
                    hmFS.close(file2);
                    //jlrz = jlrz + '    复制完成'
                    yccs_wj = yccs_wj + 1
                    return ''
                }
*/
                function xcxyc(sfsc) {
                    var jideList = readFileSync('hideappList.txt');
                    if (jideList == 'notfile'){
                        jideList = {}
                        jideList[appDelInfo[1].toString()] = {"appName":appDelInfo[0], "appDelPath":appDelPath, "sbqy":'0'}
                    }else{
                        jideList = JSON.parse(jideList);
                        if (jideList[appDelInfo[1].toString()] == undefined){
                            jideList[appDelInfo[1].toString()] = {"appName":appDelInfo[0], "appDelPath":appDelPath, "sbqy":'0'}
                        }else{
                            jideList[appDelInfo[1].toString()]["appName"] == appDelInfo[0]
                        }
                    }
                    var xgapplocklist = readFileSync('AppsList.txt');
                    if (jideList[appDelInfo[1].toString()]["sbqy"] == '0'){
                        //隐藏小程序
                        copywjj('/storage/js_apps/' + appDelPath ,'/storage/js_apps/data/0000C2E9/' + appDelPath)
                        /*
                        if (sbsb == false){
                            hmFS.SysProSetChars('/storage/js_apps/data/0000C2E9' + appDelPath, '');
                            wjjsc('/storage/js_apps/data/0000C2E9/' + appDelPath);
                            finishShow(1, '隐藏小程序失败\n已尝试恢复小程序');
                            return false
                        }
                        */
                        //writeFileSync('copywjj.log', sbsb)
                        scxcxhs('0')
                        if (xgapplocklist.toString().indexOf(appDelInfo[0]) != -1) {
                            xgapplocklist = xgapplocklist.toString().replace(appDelInfo[0], appDelInfo[0] + ' (' + language_xcxyc + ')');
                        }
                        jideList[appDelInfo[1].toString()]["sbqy"] = '1'
                        writeFileSync('AppsList.txt', xgapplocklist);
                        writeFileSync('hideappList.txt', JSON.stringify(jideList));
                        if (language == 0 || language == 1) {
                            finishShow(2, '隐藏成功\n复制文件夹' + yccs_wjj + '个\n文件' + yccs_wj + '个')
                        }else{
                            finishShow(2, 'Hidden successfully\ncopy folder' + yccs_wjj + '\nFiles' + yccs_wj)
                        }
                    }else if (jideList[appDelInfo[1].toString()]["sbqy"] == '1'){
                        //解除隐藏小程序
                        if (sfsc == '1'){
                            copywjj('/storage/js_apps/data/0000C2E9/' + appDelPath ,'/storage/js_apps/' + appDelPath)
                        }
                        if (xgapplocklist.toString().indexOf(appDelInfo[0] + ' (' + language_xcxyc + ')') != -1) {
                            xgapplocklist = xgapplocklist.toString().replace(appDelInfo[0] + ' (' + language_xcxyc + ')', appDelInfo[0]);
                        }
                        //writeFileSync('copywjj.log', sbsb)
                        hmFS.SysProSetChars('/storage/js_apps/data/0000C2E9' + appDelPath, '');
                        wjjsc('/storage/js_apps/data/0000C2E9/' + appDelPath);
                        jideList[appDelInfo[1].toString()]["sbqy"] = '0'
                        writeFileSync('AppsList.txt', xgapplocklist);
                        writeFileSync('hideappList.txt', JSON.stringify(jideList));
                        if (language == 0 || language == 1) {
                            finishShow(2, '显示成功\n复制文件夹' + yccs_wjj.toString() + '个\n文件' + yccs_wj.toString() + '个')
                        }else{
                            finishShow(2, 'Unhide succeeded\ncopy folder' + yccs_wjj.toString() + '\nfiles' + yccs_wj.toString())
                        }
                    }
                }
                function xcxzt() {
                    /*
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
                    */
                    var jideList = readFileSync('hideappList.txt');
                    if (jideList == 'notfile'){
                        jideList = {}
                        jideList[appDelInfo[1].toString()] = {"sbqy":'0'}
                    }else{
                        jideList = JSON.parse(jideList);
                        if (jideList[appDelInfo[1].toString()] == undefined){
                            jideList[appDelInfo[1].toString()] = {"sbqy":'0'}
                        }
                    }
                    if (jideList[appDelInfo[1].toString()]["sbqy"] == '0'){
                        //显示中，需隐藏
                        return language_xcxyc;
                    }else if (jideList[appDelInfo[1].toString()]["sbqy"] == '1'){
                        //隐藏中，需显示
                        return language_xcxxs;
                    }
                }
                function scxcxhs(dataqc) {
                    var ey = appDelPath.toString();
                    hmFS.SysProSetChars('/storage/js_apps', '');
                    wjjsc('/storage/js_apps/' + ey);
                    var fs_stat = statSync('../../../../../js_apps/' + appDelPath + '/app.json');
                    if (!fs_stat) {
                        xcxyc('1');
                    }
                    if (dataqc == '1'){
                        wjjsc('/storage/js_apps/data/' + ey);
                        writeFileSync('AppsList.txt', 'notfile');
                        finishShow(2, language_sccq);
                    }
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
