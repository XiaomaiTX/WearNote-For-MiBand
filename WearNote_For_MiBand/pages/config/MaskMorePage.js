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
                    var language_title_text = '伪装模式';
                    var language_kg1 = '启用伪装模式(重启生效)';
                    var language_tj1 = '快捷方式';
                    var language_an1 = '重启';
                } else {
                    var language_title_text = 'Mask Mode';
                    var language_kg1 = 'Enable Mask Mode(Restart effective)';
                    var language_tj1 = 'Shortcut';
                    var language_an1 = 'Reboot';
                }
                /*------------------------------
                | 其他配置                      |
                ------------------------------*/
                const button_pos_x = 21;
                const button_size_w = 150;
                const button_size_h = 70;
                var index_state = hmFS.SysProGetBool('index_state');
                if (index_state == undefined) {
                    hmFS.SysProSetBool('index_state', false);
                    index_state = false;
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
                    //var zyaj_press_color = 0x262626
                }else{
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
                    text: language_kg1
                });
                const slide_switch = hmUI.createWidget(hmUI.widget.SLIDE_SWITCH, {
                    x: 50,
                    y: 100,
                    w: 92,
                    h: 52,
                    select_bg: 'image/switch_on.png',
                    un_select_bg: 'image/switch_off.png',
                    slide_src: '',
                    slide_select_x: 0,
                    slide_un_select_x: 0,
                    checked: index_state,
                    checked_change_func: (slideSwitch, checked) => {
                        changes_cache(checked);
                    }
                });
                const text2 = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 5,
                    y: 160,
                    w: 182,
                    h: 30,
                    color: 0xffffff,
                    text_size: 20,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.NONE,
                    text: language_tj1
                });
                const an1 = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: button_pos_x,
                    y: 196,
                    w: button_size_w,
                    h: button_size_h,
                    radius: 12,
                    normal_color: 0x007ACC,
                    press_color: 0x005AB0,
                    text_size: 25,
                    text: language_an1,
                    click_func: () => {
                        hmApp.startApp({
                            url: "Settings_systemScreen",
                            native: true
                        });
                    }
                });
                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                function changes_cache(checked) {
                    hmFS.SysProSetBool('index_state', checked);
                    changeState(checked);
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
                function writeFileSync(filename, data) {
                    const source_buf = stringToUTF8Array(data);
                    const file = hmFS.open(filename, hmFS.O_CREAT | hmFS.O_RDWR | hmFS.O_TRUNC);
                    hmFS.seek(file, 0, hmFS.SEEK_SET);
                    hmFS.write(file, source_buf.buffer, 0, source_buf.length);
                    hmFS.close(file);
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
                function copyFile(filename1, filename2) {
                    const fs_stat = statSync1(filename1);
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
                function statSync1(filename) {
                    const [fs_stat, err] = hmFS.stat_asset(filename);
                    if (err == 0) {
                        return fs_stat;
                    } else {
                        return null;
                    }
                }
                function statSync(filename) {
                    const [fs_stat, err] = hmFS.stat(filename);
                    if (err == 0) {
                        return fs_stat;
                    } else {
                        return null;
                    }
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
            } catch (error) {
                hmApp.goBack();
            }
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}
