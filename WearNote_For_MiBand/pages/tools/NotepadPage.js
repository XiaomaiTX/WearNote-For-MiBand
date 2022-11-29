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
                    var language_dqsb = '文件读取失败';
                    var language_dyy = '已经是第一页了';
                    var language_zhyy = '已经是最后一页了';
                    var language_d = '第';
                    var language_y = '页';
                } else {
                    var language_dqsb = 'File read failure';
                    var language_dyy = 'It is the first page already';
                    var language_zhyy = 'It is the last page already';
                    var language_d = 'Page ';
                    var language_y = '';
                }
                /*------------------------------
                | 其他配置                      |
                ------------------------------*/
                var size = 150;
                var zdz = readFiles2_getMaxIndex(param, size);
                var fdys = 1;
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
                    text: param.toString()
                });
                const strxz = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 0,
                    y: 100,
                    w: 192,
                    h: 340,
                    color: 16777215,
                    text_size: 20,
                    //align_h: hmUI.align.CENTER_H,
                    //align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.WRAP,
                    text: main()
                });
                //状态栏
                const strym = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 40,
                    y: 440,
                    w: 112,
                    h: 40,
                    color: 0xffffff,
                    text_size: 17,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.NONE,
                    text: language_d + fdys.toString() + '/' + zdz.toString() + language_y
                });
                //向上翻页按钮
                hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: 0,
                    y: 62,
                    w: 95,
                    h: 36,
                    radius: 0,
                    normal_color: zyaj_normal_color,
                    press_color: zyaj_press_color,
                    text: "←",
                    click_func: () => sffh()
                });
                //向下翻页按钮
                const xfan = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: 97,
                    y: 62,
                    w: 95,
                    h: 36,
                    radius: 0,
                    normal_color: zyaj_normal_color,
                    press_color: zyaj_press_color,
                    text: "→",
                    click_func: () => xffh()
                });
                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                function readFiles2(filepath, size, index) {
                    var back = '';
                    index--;
                    var size2 = 0;
                    var path2 = filepath.toString().replace("/storage/", "../../../../../");
                    var [a, b] = hmFS.stat_asset(path2);
                    if (b == 0 && a.size > 0) {
                        size2 = a.size;
                        var array = new Uint8Array(size);
                        var buy2 = size2 / size;
                        if (buy2 % size == 0) buy2++;
                        if (index < buy2) {
                            var offset = 0 + index * size;
                            if (offset <= size2) {
                                var file = hmFS.open(path2, hmFS.O_RDONLY);
                                hmFS.seek(file, offset, hmFS.SEEK_SET);
                                hmFS.read(file, array.buffer, 0, array.length);
                                hmFS.close(file);
                                //解析开始
                                if (!array)
                                    back = 'err4';
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
                                        back = 'err4';
                                    }
                                    let char = String.fromCharCode(code);
                                    result += char;
                                }
                                return result;
                                //解析结束
                            } else {
                                back = 'err3';
                            }
                        } else {
                            back = 'err2';
                        }
                    } else {
                        back = 'err1';
                    }
                    return language_dqsb + '(' + back + ')';
                }
                function readFiles2_getMaxIndex(filepath, size) {
                    var size2 = 0;
                    var path2 = filepath.toString().replace("/storage/", "../../../../../");
                    var [a, b] = hmFS.stat_asset(path2);
                    if (b == 0 && a.size > 0) {
                        size2 = a.size;
                        var array = new Uint8Array(size);
                        var buy2 = size2 / size;
                        if (buy2 % size == 0) buy2++;
                        buy2++;
                        return parseInt(buy2, 10);
                    } else {
                        return 1;
                    }
                }
                //修改为默认从1开始
                //开始必须运行，为主程序
                function main() {
                    var wjnr = readFiles2(param, size, fdys).toString();
                    //var wjnr = param.toString()
                    return wjnr;
                }
                function sffh() {
                    if (fdys > 1) {
                        fdys--;
                        strxz.setProperty(hmUI.prop.TEXT, readFiles2(param, size, fdys).toString());
                    } else {
                        hmUI.showToast({
                            text: language_dyy
                        });
                    }
                    ztl();
                }
                function xffh() {
                    if (fdys < zdz) {
                        fdys++;
                        strxz.setProperty(hmUI.prop.TEXT, readFiles2(param, size, fdys).toString());
                    } else {
                        hmUI.showToast({
                            text: language_zhyy
                        });
                    }
                    ztl();
                }
                function ztl() {
                    strym.setProperty(hmUI.prop.TEXT, language_d + fdys.toString() + '/' + zdz.toString() + language_y);
                }
            } catch (error) {
                hmApp.goBack();
            }
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}
