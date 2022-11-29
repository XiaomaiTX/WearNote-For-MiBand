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
                    var language_title_text = '激活';
                    var language_myjh = '未激活';
                    //var language_yjjh = '已激活';
                    var language_yjjh = '环7无需激活\ngtr系列手表需激活';
                    var language_db = '您可能是盗版软件的受害者';
                    var language_sbm = '设备码：'
                    var language_ui_an1 = '输入序列号'
                    var language_ui_an2 = '捐赠软件'
                    var language_ui_an3 = '进入小程序'
                } else {
                    var language_title_text = 'Product activation';
                    var language_myjh = 'Product not activated';
                    //var language_yjjh = 'Product is activated';
                    var language_yjjh = 'Band 7 does not require activation\nActivation required for gtr series watches'
                    var language_db = 'You may be a victim of software piracy';
                    var language_sbm = 'UUID：'
                    var language_ui_an1 = 'Enter the key'
                    var language_ui_an2 = 'Donate'
                    var language_ui_an3 = 'Enter'
                }
                /*------------------------------
                | 其他配置                      |
                ------------------------------*/
                var button_pos_x = 21;
                var button_size_w = 150;
                var button_size_h = 70;
                hmFS.SysProSetBool('index_tc', true)
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
                var base64 = new Base64();
                var sbm = readFileSync('sbm.txt')
                if (sbm == 'notfile'){
                    var jhzt = '-1'
                }else{
                    var yssbm = sbm
                    sbm = base64.decode(sbm + '==')
                    var xlh_nickName = readFileSync('Band_Manager_Pro_xlh.txt')
                    if (xlh_nickName == 'notfile'){
                        jhzt = '0'
                    }else{
                        xlh = xlh_nickName[0] + xlh_nickName[1] + xlh_nickName[2] + xlh_nickName[3] + xlh_nickName[4] + xlh_nickName[5]
                        xlh = Math.floor(xlh)
                        var yzsxlh = xlh * 58 + 12
                        yzsxlh = yzsxlh * 43 * 685 * 5 * 63
                        yzsxlh = yzsxlh - 93962945
                        yzsxlh = yzsxlh * 7
                        if (yzsxlh.toString() == sbm){
                            if (base64.decode(getxlh_nickName(xlh_nickName) + '==') == hmSetting.getUserData().nickName){
                                jhzt = '1'
                            }else{
                                jhzt = '2'
                            }
                        }else{
                            if (yzxlh(xlh.toString()) == true){
                                jhzt = '2'
                            }else{
                                jhzt = '0'
                            }
                            /*
                            var yzsz = xlh.toString()
                            yzsz = yzsz[0] + yzsz[2] + yzsz[5]
                            yzsz = Math.floor(yzsz)
                            if (yzsz % 7 == 0){
                                if (xlh % 4 == 0){
                                    jhzt = '2'
                                }else{
                                    jhzt = '0'
                                }
                            }else{
                                jhzt = '0'
                            }
                            */
                        }
                    }
                }
                if (jhzt == '-1'){
                    for (;;){
                        var xlh = sjssc(100000,999999)
                        var sbm = xlh * 58 + 12
                        sbm = sbm * 43 * 685 * 5 * 63
                        sbm = sbm - 93962945
                        sbm = sbm * 7
                        /*
                        var sbm = xlh * 58 + 12
                        sbm = sbm * 543 * 685 * 1255 * 63
                        sbm = sbm - 939629457869054463
                        sbm = sbm * 7
                        */
                        if (Math.floor(sbm).toString() == sbm.toString()){
                            break
                        }
                    }
                    sbm = base64.encode(sbm.toString())
                    var yssbm = sbm
                    writeFileSync('sbm.txt', sbm.toString())
                    jhzt = '0'
                }
                jhzt = '1'
                /*------------------------------
                | 显示界面                      |
                ------------------------------*/
                if (jhzt == '1'){
                    if (param == '1'){
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
                            x: 0,
                            y: 80,
                            w: 192,
                            h: 110,
                            color: 0xffffff,
                            text_size: 20,
                            align_h: hmUI.align.CENTER_H,
                            align_v: hmUI.align.CENTER_V,
                            text_style: hmUI.text_style.NONE,
                            text: language_yjjh
                        });
                    }else{
                        hmApp.reloadPage({
                            url: 'pages/tools/HomePage',
                            param: ''
                        });
                    }
                }else if(jhzt == '2'){
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
                        x: 0,
                        y: 80,
                        w: 192,
                        h: 120,
                        color: 0xffffff,
                        text_size: 20,
                        align_h: hmUI.align.CENTER_H,
                        align_v: hmUI.align.CENTER_V,
                        text_style: hmUI.text_style.WRAP,
                        text: language_db + '\n' + language_sbm + yssbm
                    });
                    if (param == '1'){
                        const ui_an1 = hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: button_pos_x,
                            y: 300,//300
                            w: button_size_w,
                            h: button_size_h,
                            radius: 12,
                            normal_color: 0x007ACC,
                            press_color: 0x005AB0,
                            text_size: 22,
                            text: language_ui_an1,
                            click_func: () => scxcxhs(1)
                        });
                        const ui_an2 = hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: button_pos_x,
                            y: 380,//380
                            w: button_size_w,
                            h: button_size_h,
                            radius: 12,
                            normal_color: 0x007ACC,
                            press_color: 0x005AB0,
                            text_size: 22,
                            text: language_ui_an2,
                            click_func: () => scxcxhs(2)
                        });
                    }else{
                        const ui_an1 = hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: button_pos_x,
                            y: 220,//300
                            w: button_size_w,
                            h: button_size_h,
                            radius: 12,
                            normal_color: 0x007ACC,
                            press_color: 0x005AB0,
                            text_size: 22,
                            text: language_ui_an1,
                            click_func: () => scxcxhs(1)
                        });
                        const ui_an2 = hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: button_pos_x,
                            y: 300,//380
                            w: button_size_w,
                            h: button_size_h,
                            radius: 12,
                            normal_color: 0x007ACC,
                            press_color: 0x005AB0,
                            text_size: 22,
                            text: language_ui_an2,
                            click_func: () => scxcxhs(2)
                        });
                        const ui_an3 = hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: button_pos_x,
                            y: 380,//220
                            w: button_size_w,
                            h: button_size_h,
                            radius: 12,
                            normal_color: 0xff0000,
                            press_color: 0x9a0000,
                            text_size: 22,
                            text: language_ui_an3,
                            click_func: () => scxcxhs(3)
                        });
                    }
                }else if(jhzt == '0'){
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
                        x: 0,
                        y: 80,
                        w: 192,
                        h: 110,
                        color: 0xffffff,
                        text_size: 20,
                        align_h: hmUI.align.CENTER_H,
                        align_v: hmUI.align.CENTER_V,
                        text_style: hmUI.text_style.WRAP,
                        text: language_myjh + '\n' + language_sbm + yssbm
                    });
                    const ui_an1 = hmUI.createWidget(hmUI.widget.BUTTON, {
                        x: button_pos_x,
                        y: 300,//300
                        w: button_size_w,
                        h: button_size_h,
                        radius: 12,
                        normal_color: 0x007ACC,
                        press_color: 0x005AB0,
                        text_size: 22,
                        text: language_ui_an1,
                        click_func: () => scxcxhs(1)
                    });
                    const ui_an2 = hmUI.createWidget(hmUI.widget.BUTTON, {
                        x: button_pos_x,
                        y: 380,//380
                        w: button_size_w,
                        h: button_size_h,
                        radius: 12,
                        normal_color: 0x007ACC,
                        press_color: 0x005AB0,
                        text_size: 22,
                        text: language_ui_an2,
                        click_func: () => scxcxhs(2)
                    });
                }
                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                function getxlh_nickName(str){
                    var nickName = ''
                    for (let i = 0; i < str.length; i++) {
                        if (i >= 6){
                            nickName += str[i]
                        }
                    }
                    return nickName
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
                function scxcxhs(cqm) {
                    switch (cqm) {
                        case 1:
                            hmApp.gotoPage({ url: 'pages/tools/AppUnlockPage',
                            param: JSON.stringify({
                                mode: 3,//3：激活软件页面
                                topages: ''//跳转目标 空则代表返回
                            })
                        });
                            break;
                        case 2:
                            hmApp.gotoPage({ url: 'pages/tools/ImagePage', param: '/image/payQR.png' });
                            break;
                        case 3:
                            hmApp.gotoPage({ url: 'pages/tools/HomePage', param: '' });
                            break;
                        default:
                            break;
                    }
                }
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
                
                    // public method for decoding  
                    this.decode = function(input) {
                        var output = "";
                        var chr1, chr2, chr3;
                        var enc1, enc2, enc3, enc4;
                        var i = 0;
                        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                        while (i < input.length) {
                            enc1 = _keyStr.indexOf(input.charAt(i++));
                            enc2 = _keyStr.indexOf(input.charAt(i++));
                            enc3 = _keyStr.indexOf(input.charAt(i++));
                            enc4 = _keyStr.indexOf(input.charAt(i++));
                            chr1 = (enc1 << 2) | (enc2 >> 4);
                            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                            chr3 = ((enc3 & 3) << 6) | enc4;
                            output = output + String.fromCharCode(chr1);
                            if (enc3 != 64) {
                                output = output + String.fromCharCode(chr2);
                            }
                            if (enc4 != 64) {
                                output = output + String.fromCharCode(chr3);
                            }
                        }
                        output = _utf8_decode(output);
                        return output;
                    }
                
                    // private method for UTF-8 encoding  
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
                
                    // private method for UTF-8 decoding  
                    _utf8_decode = function(utftext) {
                        var string = "";
                        var i = 0;
                        var c = c1 = c2 = 0;
                        while (i < utftext.length) {
                            c = utftext.charCodeAt(i);
                            if (c < 128) {
                                string += String.fromCharCode(c);
                                i++;
                            } else if ((c > 191) && (c < 224)) {
                                c2 = utftext.charCodeAt(i + 1);
                                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                                i += 2;
                            } else {
                                c2 = utftext.charCodeAt(i + 1);
                                c3 = utftext.charCodeAt(i + 2);
                                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                                i += 3;
                            }
                        }
                        return string;
                    }
                }
                function sjssc(min, max){
                    for (;;){
                        var int = Math.floor(Math.random() * (max - min + 1)) + min
                        if (yzxlh(int.toString()) == true){
                            break
                        }
                        /*
                        var yzsz = int.toString()
                        yzsz = yzsz[0] + yzsz[2] + yzsz[5]
                        yzsz = Math.floor(yzsz)
                        if (yzsz % 7 == 0){
                            if (int % 4 == 0){
                                break
                            }
                        }
                        */
                    }
                    return int
                }
                function statSync(filename) {
                    const [fs_stat, err] = hmFS.stat(filename);
                    if (err == 0) {
                        return fs_stat;
                    } else {
                        return null;
                    }
                }
                function readFileSync(filename) {
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
                    const content = ab2str(destination_buf.buffer)
                    //读取结果打印
                    return content
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
                function ab2str(buf) {
                    var u16 = new Uint16Array(buf)
                    for (let i = 0; i < u16.length; i++) {
                        u16[i] = (u16[i] + 13) / 3
                    }
                    return String.fromCharCode.apply(null, u16)
                }
                function str2ab(str) {
                    var buf = new ArrayBuffer(str.length * 2) // 2 bytes for each char
                    var bufView = new Uint16Array(buf)
                    for (var i = 0, strLen = str.length; i < strLen; i++) {
                      bufView[i] = str.charCodeAt(i) * 3 - 13
                    }
                    return buf
                }
            } catch (error) {
                hmApp.goBack();
            }
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}
