import { gettext } from 'i18n';

try {
    Page({
        onInit(param) {
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
                var language_xcxsc = '应用锁';
                var language_yc = '已上锁';
                //var language_czyc = '操作异常';
                //var language_ycyywfdk = '隐藏的应用暂无法打开';
                //var language_dk = '打开';
                var language_qd = '确定';
                var language_jm = '上锁';
                var language_yjm = '解锁'
                //var language_sccq = '已删除,重启生效';
                var language_cq = '重启';
                //var language_xcxyc = '隐藏';
                //var language_xcxxs = '显示';
                var language_name = '名称：';
                var language_version = '版本：';
                var language_vender = '作者：';
                //var language_wz = '未知';
                //var language_yc_t = '隐藏成功,重启生效';
                //var language_yc_f = '取消隐藏成功,重启生效';
				var language_xcxbzct3 = '小程序不支持3';
				var language_finishnow = '上锁成功\n立即生效';
				var language_nopassword = '请先设置密码';
				var language_wjds = '文件丢失';
				var language_finishrt = '上锁成功\n重启生效';
				//var language_qxjmcg = '取消加密成功';
				var language_jssbo = '解锁失败1';
				var language_jscgnow = '解锁成功\n立即生效';
				//var language_jssbt = '解锁失败2';
				var language_xcxbzco = '小程序不支持1';
				var language_xcxbzct2 = '小程序不支持2';
				var language_xcxbzcth = '小程序不支持3';
            } else {
                var language_xcxsc = 'Apps Lock';
                var language_yc = 'Hide';
                //var language_czyc = 'Abnormal operation';
                //var language_ycyywfdk = 'Hidden apps cannot be opened temporarily';
                //var language_dk = 'Open';
                var language_jm = 'Encryption';
                var language_yjm = 'Unlock'
                var language_qd = 'OK';
                //var language_jsc = 'Delete only';
                //var language_sccq = 'Deleted, restart effective';
                var language_cq = 'Reboot';
                //var language_xcxyc = 'Hide';
                //var language_xcxxs = 'Unhide';
                var language_name = 'Name：';
                var language_version = 'Version：';
                var language_vender = 'Venders：';
                //var language_wz = 'Unknown';
                //var language_yc_t = 'Hidden successfully, restart takes effect';
                //var language_yc_f = 'Unhide succeeded, restart takes effect';
				var language_xcxbzct3 = 'The applet does not support (3)';
				var language_finishnow = 'Locked successfully\neffective immediately';
				var language_nopassword = 'Please set your password first';
				var language_wjds = 'Lost documents';
				var language_finishrt = 'Locked successfully\neboot effective';
				//var language_qxjmcg = 'Cancellation of encryption successful';
				var language_jssbo = 'Failed to unlock (1)';
				var language_jscgnow = 'Unlocked successfully\neffective immediately';
				//var language_jssbt = 'Unlock Failure （2）';
				var language_xcxbzco = 'Not supported by the applet1';
				var language_xcxbzct2 = 'Not supported by the applet2';
				var language_xcxbzcth = 'Not supported by the applet3';


            }
            /*------------------------------
            | 其他配置                      |
            ------------------------------*/
            hmApp.unregisterGestureEvent()
            const paramsObj = JSON.parse(param);
            const { appPath } = paramsObj;
            var app_path2 = '../../../../../js_apps/' + appPath + '/app.json';
            var fs_stat = statSync(app_path2);
            if (!fs_stat) {
                app_path2 = '../../../../../js_apps/' + appPath + '/app.json.bak';
                fs_stat = statSync(app_path2);
                if (!fs_stat) finishShow(1, language_xcxbzct2);
            }
            var appInfo = jzxcxmz(fs_stat, app_path2, appPath);
            var AppUnlock_appid = readFileSync('AppUnlock_appid.txt')
            if (AppUnlock_appid == 'notfile'){
                AppUnlock_appid = {}
            }else{
                AppUnlock_appid = JSON.parse(AppUnlock_appid)
            }
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
                var zyaj_press_color = 0x262626
            }else{
                var zyaj_normal_color = 0x262626
                var zyaj_press_color = 0x101010
            }
            //const button_pos_x2_l = 21;
            //const button_pos_x2_r = 101;
            //const button_size_w2 = 70;
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
                src: '../../../../../js_apps/' + appPath + '/assets/' + appInfo[3]
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
                text: language_name + appInfo[0] + '\nAPPID：' + appInfo[1] + '\n' + language_version + appInfo[4] + '\n' + language_vender + appInfo[2]
            });
            const ui_an1 = hmUI.createWidget(hmUI.widget.BUTTON, {
                x: button_pos_x,
                y: 380,//460
                w: button_size_w,
                h: button_size_h,
                radius: 12,
                normal_color: 0xff0000,
                press_color: 0x9a0000,
                text_size: 22,
                text: language_jm,
                click_func: () => xcxjm()
            });
            const ui_an1_s = hmUI.createWidget(hmUI.widget.BUTTON, {
                x: button_pos_x,
                y: 380,//460
                w: button_size_w,
                h: button_size_h,
                radius: 12,
                normal_color: 0xff0000,
                press_color: 0x9a0000,
                text_size: 22,
                text: language_yjm,
                click_func: () => qxxcxjm()
            });
            var fs_stat1 = statSync('../../../../../js_apps/' + appPath + '/pages/BandManagerPro_index_Lock.js');
            if (fs_stat1 == null) {
                ui_an1_s.setProperty(hmUI.prop.VISIBLE, false);
            }else{
                if (AppUnlock_appid[appInfo[1].toString()]['type'] == "True"){
                    ui_an1.setProperty(hmUI.prop.VISIBLE, false);
                }else{
                    ui_an1_s.setProperty(hmUI.prop.VISIBLE, false);
                }
            }
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
            function xrjcbin(){
                const [fs_stat3, err] = hmFS.stat_asset('BandManagerPro_index_Lock.bin');
                if (err !== 0) {
                    return false
                }
                var size2 = fs_stat.size;
                var test_buf = new Uint8Array(size2);
                const file = hmFS.open_asset('BandManagerPro_index_Lock.bin', hmFS.O_RDONLY);
                hmFS.read(file, test_buf.buffer, 0, test_buf.length);
                hmFS.close(file);
                const source_buf = test_buf
                const file1 = hmFS.open('../../../../../js_apps/' + appPath + '/pages/BandManagerPro_index_Lock.bin', hmFS.O_CREAT | hmFS.O_RDWR | hmFS.O_TRUNC);
                hmFS.seek(file1, 0, hmFS.SEEK_SET);
                hmFS.write(file1, source_buf.buffer, 0, source_buf.length);
                hmFS.close(file1);
                return true
            }
            function xcxjm() {
                if (AppUnlock_appid[appInfo[1].toString()] !== undefined){
                    AppUnlock_appid[appInfo[1].toString()]['type'] = "True"
                    writeFileSync('AppUnlock_appid.txt', JSON.stringify(AppUnlock_appid))
                    finishShow(1, language_finishnow)
                }else{
                    var applock_password = hmFS.SysProGetChars('applock_password');
                    if (applock_password == undefined || applock_password == '') {
                        finishShow(1, language_nopassword);
                        return 0
                    }
                    hmFS.mkdir('/storage/js_apps/' + appPath + '/pages')
                    if (xrjcbin() == false){
                        finishShow(1, language_wjds);
                        return 0
                    }
                    var jrbl = 'try{(()=>{var e=__$$hmAppManager$$__.currentApp;function p(){return e.app}const t=e.current,{px:a}=(new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(e,t)),p().__globals__);p().__globals__.gettext,t.module=DeviceRuntimeCore.Page({build(){hmApp.startApp({appid:49897,url:"pages/tools/AppUnlockPage",param:hmApp.packageInfo().appId.toString()})}})})()}catch(e){console.log(e)}'
                    writeFileSync('../../../../../js_apps/' + appPath + '/pages/BandManagerPro_index_Lock.js', jrbl)
                    var file_json = appInfo[7]
                    if (appInfo[6] == 1){
                        file_json["targets"]["gtr3-pro"]["module"]["page"]["pages"].unshift("pages/BandManagerPro_index_Lock")
                    }else if(appInfo[6] == 2){
                        file_json["module"]["page"]["pages"].unshift("pages/BandManagerPro_index_Lock")
                    }
                    var app_path2 = '../../../../../js_apps/' + appPath + '/app.json';
                    var fs_stat = statSync(app_path2);
                    var lsbl = 1
                    if (!fs_stat) {
                        app_path2 = '../../../../../js_apps/' + appPath + '/app.json.bak';
                        lsbl = 2
                        fs_stat = statSync(app_path2);
                        if (!fs_stat) finishShow(1, language_xcxbzct3);
                    }
                    if (lsbl == 1){
                        hmFS.rename('/storage/js_apps/' + appPath + '/app.json', '/storage/js_apps/' + appPath + '/appwjm.json.bak')
                    }else if (lsbl == 2){
                        hmFS.rename('/storage/js_apps/' + appPath + '/app.json.bak', '/storage/js_apps/' + appPath + '/appwjm.json.bak')
                    }
                    writeFileSync(app_path2, JSON.stringify(file_json))
                    AppUnlock_appid[appInfo[1].toString()] = {"type":"True","url":appInfo[5]}
                    writeFileSync('AppUnlock_appid.txt', JSON.stringify(AppUnlock_appid))
                    finishShow(2, language_finishrt)
                }
                var xgapplocklist = readFileSync('AppsLockList.txt');
                if (xgapplocklist.toString().indexOf(appInfo[0]) != -1) {
                    xgapplocklist = xgapplocklist.toString().replace(appInfo[0], appInfo[0] + ' (' + language_yc + ')');
                    writeFileSync('AppsLockList.txt', xgapplocklist);
                }
            }
            function qxxcxjm(){
                //writeFileSync('AppsLockList.txt', 'notfile');
                /*
                var app_path2 = '../../../../../js_apps/' + appPath + '/app.json';
                var fs_stat = statSync(app_path2);
                var lsbl = 1
                if (!fs_stat) {
                    app_path2 = '../../../../../js_apps/' + appPath + '/app.json.bak';
                    lsbl = 2
                    fs_stat = statSync(app_path2);
                    if (!fs_stat) finishShow(1, language_xcxbzct2);
                }
                hmFS.remove('/storage/js_apps/' + appPath + '/pages/BandManagerPro_index_Lock.js')
                hmFS.remove('/storage/js_apps/' + appPath + '/pages/BandManagerPro_index_Lock.bin')
                hmFS.remove('/storage/js_apps/' + appPath + '/app.json')
                hmFS.remove('/storage/js_apps/' + appPath + '/app.json.bak')
                if (lsbl == 1){
                    hmFS.rename('/storage/js_apps/' + appPath + '/appwjm.json.bak', '/storage/js_apps/' + appPath + '/app.json')
                }else if (lsbl == 2){
                    hmFS.rename('/storage/js_apps/' + appPath + '/appwjm.json.bak', '/storage/js_apps/' + appPath + '/app.json.bak')
                }
                finishShow(2, language_qxjmcg)
                */
                if (AppUnlock_appid == {}){
                    finishShow(1, language_jssbo)
                }
                if (AppUnlock_appid[appInfo[1].toString()] !== undefined){
                    AppUnlock_appid[appInfo[1].toString()]['type'] = "False"
                }else{
                    AppUnlock_appid[appInfo[1].toString()] = {"type":"False","url":appInfo[5]}
                }
                writeFileSync('AppUnlock_appid.txt', JSON.stringify(AppUnlock_appid))
                var xgapplocklist = readFileSync('AppsLockList.txt');
                if (xgapplocklist.toString().indexOf(appInfo[0] + ' (' + language_yc + ')') != -1) {
                    xgapplocklist = xgapplocklist.toString().replace(appInfo[0] + ' (' + language_yc + ')', appInfo[0]);
                    writeFileSync('AppsLockList.txt', xgapplocklist);
                }
                finishShow(1, language_jscgnow)
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
                    var ybappiconpath = ey_json['app']["icon"];
                    var ybappversion = ey_json['app']["version"]["name"];
                    try {
                        var startAppym = ey_json["targets"]["gtr3-pro"]["module"]["page"]["pages"][0];
                        var xzng = 1
                    } catch (err) {
                        try {
                            var startAppym = ey_json["module"]["page"]["pages"][0];
                            var xzng = 2
                        } catch (err) {
                            finishShow(1, language_xcxbzcth)
                            return language_xcxbzcth
							
                        }
                    }
                } catch (err) {
                    finishShow(1, language_xcxbzct)
                    return language_xcxbzcot
                }
                if (ybappname == undefined) {
                    finishShow(1, language_xcxbzco)
                    return language_xcxbzco
                }
                //var appname = ybappname + ' (ID:' + ybappid + ') | ' + paths
                //var aname = ybappname
                return [ybappname, ybappid, ybappvender, ybappiconpath, ybappversion, startAppym, xzng, ey_json];
            }
            function finishShow(z, te) {
                ui_icon.setProperty(hmUI.prop.VISIBLE, false);
                ui_an1.setProperty(hmUI.prop.VISIBLE, false);
                ui_an1_s.setProperty(hmUI.prop.VISIBLE, false);
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
                if (z == 1) {
                    hmUI.createWidget(hmUI.widget.BUTTON, {
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
                } else if (z == 2) {
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
                } else {
                }
            }
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}
