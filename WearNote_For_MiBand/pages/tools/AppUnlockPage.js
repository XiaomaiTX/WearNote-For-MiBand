import { gettext } from 'i18n';

Page({
    onInit(param) {
        try {
            /*------------------------------
            | 初始化                        |
            ------------------------------*/
            hmUI.setLayerScrolling(false);
            hmApp.unregisterGestureEvent();
            /*------------------------------
            | 设置语言                      |
            ------------------------------*/
            const language = hmSetting.getLanguage();
            if (language == 0 || language == 1) {
                var language_text_bottom = '退格';
                var language_exit = '退出';
                var language_mmcw = '密码错误';
                var language_mmszcg = '设置成功';
                var language_mmggcg = '更改成功';
                var language_mm1 = '请输入密码';
                var language_mm2 = '请输入旧密码';
                var language_mm3 = '请输入新密码';
                var language_mm4 = '请再次输入新密码';
                var language_mm5 = '请输入序列号';
				//var language_cxss = '环管Pro出错\n请使用自动修复修复';
				var language_cxzkfz = '解锁出错2\n请联系开发者';
                var language_jhcg = '激活成功'
                var language_xlhcw = '序列号错误'
            } else {
                var language_text_bottom = 'Back';
                var language_exit = 'Go back';
                var language_mmcw = 'Password Error';
                var language_mmszcg = 'Set Successfully';
                var language_mmggcg = 'Change succeeded';
                var language_mm1 = 'Please input a password';
                var language_mm2 = 'Please enter your old password';
                var language_mm3 = 'Please enter a new password';
                var language_mm4 = 'Please enter the new password again';
                var language_mm5 = 'Please enter the KEY';
				//var language_cxss = 'Software error\nPlease use the automatic repair fix';
				var language_cxzkfz = 'Error unlocking(2)\nPlease contact developer';
                var language_jhcg = 'Successful activation'
                var language_xlhcw = 'KEY error'
            }
            /*------------------------------
            | 其他配置                      |
            ------------------------------*/
            hmApp.unregisterGestureEvent()
            const num_size = 25;
            const num_round = 10;
            const num_x_l = 10;
            const num_x_r = 102;
            const num_w = 80;
            const num_h = 60;
            const vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE);
            var textShow = '';
            var new_password = '';
            var old_password = '';
            const paramsObj = JSON.parse(param);
            var tcjl = 1
            var {
                mode,
                topages,
                appid
            } = paramsObj;
            var tc = hmFS.SysProGetBool('index_tc');
            if (tc == undefined) tc = false;
            var zjtc = 0
            if (mode == undefined) {
                if (tc == true) {
                    zjtc = 1
                } else {
                    try {
                        appid = paramsObj
                        var AppUnlock_appid = readFileSync("AppUnlock_appid.txt")
                        if (AppUnlock_appid == "notfile") {
                            zjtc = 2
                        } else {
                            AppUnlock_appid = JSON.parse(AppUnlock_appid)
                            if (AppUnlock_appid[appid.toString()] == undefined){
                                zjtc = 2
                            }else{
                                if (AppUnlock_appid[appid.toString()]['type'] == "False") zjtc = 4
                                topages = AppUnlock_appid[appid.toString()]['url']
                                if (topages == undefined) zjtc = 2
                                hmFS.SysProSetBool('index_tc', true);
                            }
                        }
                        mode = 2
                    } catch (error) {
                        hmApp.registerGestureEvent(function (RIGHT) {
                            hmApp.unregisterGestureEvent()
                            hmApp.gotoHome()
                            return false;
                        });
                        zjtc = 3;
                        //var bcnr = error.toString()
                        hmUI.createWidget(hmUI.widget.TEXT, {
                            x: 0,
                            y: 100,
                            w: 192,
                            h: 300,
                            color: 16777215,
                            text_size: 20,
                            align_h: hmUI.align.CENTER_H,
                            align_v: hmUI.align.CENTER_V,
                            text_style: hmUI.text_style.WRAP,
                            text: error.toString()
                        });
                    }
                }
            }
            var pass = true;
            if (mode !== 3){
                var applock_password = hmFS.SysProGetChars('applock_password');
                if (applock_password == undefined || applock_password == '') pass = false;
            }else{
                applock_password = 'lhyz'
                language_mm1 = language_mm5
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
                var zyaj_szxsbl_color = 0x101010
            }else{
                var zyaj_normal_color = 0x262626
                var zyaj_press_color = 0x101010
                var zyaj_szxsbl_color = 0x262626
            }
            /*------------------------------
            | 显示界面                      |
            ------------------------------*/
            if (zjtc == 1) {
                hmFS.SysProSetBool('index_tc', false);
                hmApp.gotoHome();
            } else if (zjtc == 2) {
                /*
                hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 0,
                    y: 100,
                    w: 192,
                    h: 300,
                    color: 16777215,
                    text_size: 20,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.WRAP,
                    text: language_cxss
                });
                */
                hmApp.reloadPage({
                    url: 'pages/config/Automatic_repairPage',
                    param: '1'
                });
            } else if (zjtc == 4){
                if (appid != '' && topages != '') {
                    hmApp.startApp({
                        appid: appid,
                        url: topages
                    });
                } else hmApp.gotoHome();
            } else if (zjtc == 3) {} else if (tc == true && mode == 1 && topages == 'pages/config/ActivatePage' && hmApp.packageInfo().appId.toString() == '49897') {
                //tc = false
                //hmFS.SysProSetBool('index_tc', false);
                hmApp.goBack();
            } else {
                hmApp.registerGestureEvent(function (RIGHT) {
                    hmApp.unregisterGestureEvent()
                    if (mode == 2 || topages == 'pages/config/ActivatePage'){
                        hmFS.SysProSetBool('index_tc', false);
                        hmApp.gotoHome()
                    }
                    return false;
                });
                //if (mode == 1 && topages == 'pages/config/ActivatePage' && hmApp.packageInfo().appId.toString() == '49897') hmFS.SysProSetBool('index_tc', true);
                var title_background = hmUI.createWidget(hmUI.widget.FILL_RECT, {
                    x: 0,
                    y: 0,
                    w: 192,
                    h: 70,
                    radius: 0,
                    color: zyaj_normal_color
                });
                var title_text = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 27,
                    y: 20,
                    w: 138,
                    h: 50,
                    color: 0xffffff,
                    text_size: 15,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.NONE,
                    text: '○ ○ ○ ○ ○ ○'
                });
                const num1 = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: num_x_l,
                    y: 80, //80
                    w: num_w,
                    h: num_h,
                    radius: num_round,
                    normal_color: zyaj_szxsbl_color,
                    press_color: zyaj_press_color,
                    text_size: num_size,
                    text: '1',
                    click_func: () => input('1')
                });
                const num2 = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: num_x_r,
                    y: 80, //80
                    w: num_w,
                    h: num_h,
                    radius: num_round,
                    normal_color: zyaj_szxsbl_color,
                    press_color: zyaj_press_color,
                    text_size: num_size,
                    text: '2',
                    click_func: () => input('2')
                });
                const num3 = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: num_x_l,
                    y: 150, //80
                    w: num_w,
                    h: num_h,
                    radius: num_round,
                    normal_color: zyaj_szxsbl_color,
                    press_color: zyaj_press_color,
                    text_size: num_size,
                    text: '3',
                    click_func: () => input('3')
                });
                const num4 = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: num_x_r,
                    y: 150, //80
                    w: num_w,
                    h: num_h,
                    radius: num_round,
                    normal_color: zyaj_szxsbl_color,
                    press_color: zyaj_press_color,
                    text_size: num_size,
                    text: '4',
                    click_func: () => input('4')
                });
                const num5 = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: num_x_l,
                    y: 220, //80
                    w: num_w,
                    h: num_h,
                    radius: num_round,
                    normal_color: zyaj_szxsbl_color,
                    press_color: zyaj_press_color,
                    text_size: num_size,
                    text: '5',
                    click_func: () => input('5')
                });
                const num6 = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: num_x_r,
                    y: 220, //80
                    w: num_w,
                    h: num_h,
                    radius: num_round,
                    normal_color: zyaj_szxsbl_color,
                    press_color: zyaj_press_color,
                    text_size: num_size,
                    text: '6',
                    click_func: () => input('6')
                });
                const num7 = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: num_x_l,
                    y: 290, //80
                    w: num_w,
                    h: num_h,
                    radius: num_round,
                    normal_color: zyaj_szxsbl_color,
                    press_color: zyaj_press_color,
                    text_size: num_size,
                    text: '7',
                    click_func: () => input('7')
                });
                const num8 = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: num_x_r,
                    y: 290, //80
                    w: num_w,
                    h: num_h,
                    radius: num_round,
                    normal_color: zyaj_szxsbl_color,
                    press_color: zyaj_press_color,
                    text_size: num_size,
                    text: '8',
                    click_func: () => input('8')
                });
                const num9 = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: num_x_l,
                    y: 360, //80
                    w: num_w,
                    h: num_h,
                    radius: num_round,
                    normal_color: zyaj_szxsbl_color,
                    press_color: zyaj_press_color,
                    text_size: num_size,
                    text: '9',
                    click_func: () => input('9')
                });
                const num0 = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: num_x_r,
                    y: 360, //80
                    w: num_w,
                    h: num_h,
                    radius: num_round,
                    normal_color: zyaj_szxsbl_color,
                    press_color: zyaj_press_color,
                    text_size: num_size,
                    text: '0',
                    click_func: () => input('0')
                });
                var bottom_text = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: 0,
                    y: 430,
                    w: 192,
                    h: 50,
                    color: 0xffffff,
                    text_size: 25,
                    radius: 0,
                    normal_color: 0x000000,
                    press_color: 0x000000,
                    text: language_exit,
                    click_func: () => backspace()
                });
                csh();
            }
            /*------------------------------
            | 其他函数                      |
            ------------------------------*/
            function Base64() {
                // private property  
                _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                // public method for encoding  
                this.encode = function(input) {
                    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                    var output = "";
                    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
                    var i = 0;
                    input = _utf8_encode(input);
                    while (i < input.length) {
                        chr1 = input.charCodeAt(i++);
                        chr2 = input.charCodeAt(i++);
                        chr3 = input.charCodeAt(i++);
                        enc1 = chr1 >> 2;
                        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                        enc4 = chr3 & 63;
                        if (isNaN(chr2)) {
                            enc3 = enc4 = 64;
                        } else if (isNaN(chr3)) {
                            enc4 = 64;
                        }
                        output = output +
                            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
                            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
                    }
                    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    return output;
                }
                _utf8_encode = function(string) {
                    string = string.replace(/\r\n/g, "\n");
                    var utftext = "";
                    for (var n = 0; n < string.length; n++) {
                        var c = string.charCodeAt(n);
                        if (c < 128) {
                            utftext += String.fromCharCode(c);
                        } else if ((c > 127) && (c < 2048)) {
                            utftext += String.fromCharCode((c >> 6) | 192);
                            utftext += String.fromCharCode((c & 63) | 128);
                        } else {
                            utftext += String.fromCharCode((c >> 12) | 224);
                            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                            utftext += String.fromCharCode((c & 63) | 128);
                        }
            
                    }
                    return utftext;
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

            function statSync(filename) {
                //获取文件信息
                const [fs_stat, err] = hmFS.stat(filename);
                if (err == 0) {
                    return fs_stat;
                } else {
                    return null;
                }
            }
            function csh() {
                if (mode == -1) {
                    if (pass) title_text.setProperty(hmUI.prop.MORE, {
                        color: 0xffffff,
                        text_size: 20,
                        text: language_mm2
                    });
                    else title_text.setProperty(hmUI.prop.MORE, {
                        color: 0xffffff,
                        text_size: 20,
                        text: language_mm3
                    });
                } else {
                    title_text.setProperty(hmUI.prop.MORE, {
                        color: 0xffffff,
                        text_size: 20,
                        text: language_mm1
                    });
                }
            }

            function input(num) {
                tcjl = 0
                bottom_text.setProperty(hmUI.prop.MORE, {
                    x: 0,
                    y: 430,
                    w: 192,
                    h: 50,
                    text: language_text_bottom
                })
                vibrate.stop();
                vibrate.scene = 23;
                vibrate.start();
                addNum(num);
                if (textShow.length == 6) var timer1 = timer.createTimer(500, null, function() {
                    result();
                }, null);
            }

            function backspace() {
                vibrate.stop();
                vibrate.scene = 23;
                vibrate.start();
                delNum();
            }

            function addNum(num) {
                if (textShow.length < 6) textShow += num;
                else textShow = textShow;
                changeNumShow();
            }

            function delNum() {
                if (textShow.length > 0) textShow = textShow.toString().substring(0, textShow.length - 1);
                else textShow = '';
                changeNumShow();
            }

            function result() {
                tcjl = 1
                bottom_text.setProperty(hmUI.prop.MORE, {
                    x: 0,
                    y: 430,
                    w: 192,
                    h: 50,
                    text: language_exit
                })
                if (mode == -1) {
                    if (pass) {
                        if (old_password == '') {
                            //输入旧密码
                            if (textShow == applock_password) {
                                //输入旧密码正确
                                old_password = textShow;
                                textShow = '';
                                title_text.setProperty(hmUI.prop.MORE, {
                                    color: 0xffffff,
                                    text_size: 20,
                                    text: language_mm3 //请输入新密码
                                });
                            } else {
                                //输入旧密码错误
                                vibrate.stop();
                                vibrate.scene = 0;
                                vibrate.start();
                                textShow = '';
                                title_text.setProperty(hmUI.prop.MORE, {
                                    color: 0xffffff,
                                    text_size: 20,
                                    text: language_mm2 //请输入旧密码
                                });
                                hmUI.showToast({
                                    text: language_mmcw
                                });
                            }
                        } else {
                            //输入新密码
                            if (new_password == '') {
                                //记录新密码
                                new_password = textShow;
                                textShow = '';
                                title_text.setProperty(hmUI.prop.MORE, {
                                    color: 0xffffff,
                                    text_size: 20,
                                    text: language_mm4 //再次输入新密码
                                });
                            } else {
                                if (textShow == new_password) {
                                    //再次输入新密码正确
                                    hmFS.SysProSetChars('applock_password', new_password);
                                    textShow = '';
                                    title_text.setProperty(hmUI.prop.MORE, {
                                        color: 0x219900,
                                        text_size: 20,
                                        text: language_mmggcg //密码更改成功
                                    });
                                    var timer2 = timer.createTimer(1000, null, function() {
                                        hmApp.goBack();
                                        timer.stopTimer(timer2);
                                    }, null);
                                } else {
                                    //再次输入新密码错误
                                    vibrate.stop();
                                    vibrate.scene = 0;
                                    vibrate.start();
                                    textShow = '';
                                    title_text.setProperty(hmUI.prop.MORE, {
                                        color: 0xffffff,
                                        text_size: 20,
                                        text: language_mm4 //再次输入新密码
                                    });
                                    hmUI.showToast({
                                        text: language_mmcw
                                    });
                                }
                            }
                        }
                    } else {
                        //输入新密码
                        if (new_password == '') {
                            //记录新密码
                            new_password = textShow;
                            textShow = '';
                            title_text.setProperty(hmUI.prop.MORE, {
                                color: 0xffffff,
                                text_size: 20,
                                text: language_mm4 //再次输入新密码
                            });
                        } else {
                            if (textShow == new_password) {
                                //再次输入新密码正确
                                hmFS.SysProSetChars('applock_password', new_password);
                                textShow = '';
                                title_text.setProperty(hmUI.prop.MORE, {
                                    color: 0x219900,
                                    text_size: 20,
                                    text: language_mmszcg //密码设置成功
                                });
                                var timer2 = timer.createTimer(1000, null, function() {
                                    hmApp.goBack();
                                    timer.stopTimer(timer2);
                                }, null);
                            } else {
                                //再次输入新密码错误
                                vibrate.stop();
                                vibrate.scene = 0;
                                vibrate.start();
                                textShow = '';
                                title_text.setProperty(hmUI.prop.MORE, {
                                    color: 0xffffff,
                                    text_size: 20,
                                    text: language_mm4 //再次输入新密码
                                });
                                hmUI.showToast({
                                    text: language_mmcw
                                });
                            }
                        }
                    }
                } else {
                    if (textShow == applock_password) {
                        //密码正确
                        if (mode == 1) {
                            //环管Pro内置
                            if (topages != '') {
                                if (topages == 'pages/tools/PasswordResetPage') {
                                    hmApp.goBack();
                                    hmApp.gotoPage({
                                        url: topages,
                                        param: ''
                                    });
                                } else hmApp.gotoPage({
                                    url: topages,
                                    param: ''
                                });
                            } else hmApp.goBack();
                        } else if (mode == 2) {
                            //未加密小程序
                            hmFS.SysProSetBool('index_tc', true);
                            if (appid != '' && topages != '') {
                                hmApp.startApp({
                                    appid: appid,
                                    url: topages
                                });
                            } else hmApp.goBack();
                        } else {
                            hmFS.SysProSetBool('index_tc', false);
                            hmApp.goBack();
                        }
                        timer.stopTimer(timer1);
                    } else if (applock_password == 'lhyz'){
                        //激活
                        if (yzxlh(textShow) == true){
                            hmUI.showToast({
                                text: language_jhcg
                            });
                            var base64 = new Base64();
                            writeFileSync('Band_Manager_Pro_xlh.txt', textShow.toString() + base64.encode(hmSetting.getUserData().nickName))
                            hmApp.goBack();
                        }else{
                            vibrate.stop();
                            vibrate.scene = 0;
                            vibrate.start();
                            textShow = '';
                            title_text.setProperty(hmUI.prop.MORE, {
                                color: 0xff0000,
                                text_size: 20,
                                text: language_xlhcw
                            });
                            timer.stopTimer(timer1);
                        }
                    } else {
                        vibrate.stop();
                        vibrate.scene = 0;
                        vibrate.start();
                        textShow = '';
                        title_text.setProperty(hmUI.prop.MORE, {
                            color: 0xff0000,
                            text_size: 20,
                            text: language_mmcw
                        });
                        timer.stopTimer(timer1);
                    }
                }
            }

            function yzxlh(str){
                try{
                    var yzsz = str.toString()
                    yzsz = yzsz[0] + yzsz[2] + yzsz[5]
                    yzsz = Math.floor(yzsz)
                    if (str != '000000') if (yzsz % 7 == 0) if (Math.floor(str) % 4 == 0) return true
                    return false
                } catch (error) {return false}
            }

            function writeFileSync(filename, data) {
                const stringBuffer = str2ab(data)
                const source_buf = new Uint8Array(stringBuffer)
                //打开/创建文件
                const file = hmFS.open(filename, hmFS.O_CREAT | hmFS.O_RDWR | hmFS.O_TRUNC)
                //定位到文件开始位置
                hmFS.seek(file, 0, hmFS.SEEK_SET)
                //写入buffer
                hmFS.write(file, source_buf.buffer, 0, source_buf.length)
                //关闭文件
                hmFS.close(file)
            }

            function str2ab(str) {
                var buf = new ArrayBuffer(str.length * 2) // 2 bytes for each char
                var bufView = new Uint16Array(buf)
                for (var i = 0, strLen = str.length; i < strLen; i++) {
                  bufView[i] = str.charCodeAt(i) * 3 - 13
                }
                return buf
            }

            function changeNumShow() {
                var text = '○ ○ ○ ○ ○ ○';
                const key = textShow.length;
                switch (key) {
                    case 1:
                        text = '● ○ ○ ○ ○ ○';
                        break;
                    case 2:
                        text = '● ● ○ ○ ○ ○';
                        break;
                    case 3:
                        text = '● ● ● ○ ○ ○';
                        break;
                    case 4:
                        text = '● ● ● ● ○ ○';
                        break;
                    case 5:
                        text = '● ● ● ● ● ○';
                        break;
                    case 6:
                        text = '● ● ● ● ● ●';
                        break;
                    default:
                        if (tcjl == 1) {
                            text = '○ ○ ○ ○ ○ ○';
                            if (mode == 2 || topages == 'pages/config/ActivatePage'){
                                hmFS.SysProSetBool('index_tc', false);
                                hmApp.gotoHome();
                            }else{
                                hmApp.goBack();
                            }
                            return true
                        } else {
                            text = '○ ○ ○ ○ ○ ○';
                            tcjl = 1
                            bottom_text.setProperty(hmUI.prop.MORE, {
                                x: 0,
                                y: 430,
                                w: 192,
                                h: 50,
                                text: language_exit
                            })
                        }
                        break;
                }
                title_text.setProperty(hmUI.prop.MORE, {
                    color: 0xffffff,
                    text_size: 15,
                    text: text
                });
            }
        } catch (error) {
            hmUI.createWidget(hmUI.widget.TEXT, {
                x: 0,
                y: 100,
                w: 192,
                h: 300,
                color: 16777215,
                text_size: 20,
                align_h: hmUI.align.CENTER_H,
                align_v: hmUI.align.CENTER_V,
                text_style: hmUI.text_style.WRAP,
                text: language_cxzkfz
            });
            //hmFS.SysProSetBool('index_tc', false);
            //hmApp.goBack();
        }
    }
});
