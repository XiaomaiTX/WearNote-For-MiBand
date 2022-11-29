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
                    var language_title_text = '文件管理';
                    var language_title_text2 = '提示';
                    var language_gml = '已在根目录';
                    var language_jzcz = '高风险\n禁止操作';
                    var language_cxyc = '出现异常\n请退出重试';
                } else {
                    var language_title_text = 'File Management';
                    var language_title_text2 = 'Tips';
                    var language_gml = 'Already in the root';
                    var language_jzcz = 'Prohibit operation';
                    var language_cxyc = 'error\nplease exit and try again';
                }
                /*------------------------------
                | 其他配置                      |
                ------------------------------*/
                const paramsObj = JSON.parse(param);
                const { path, key } = paramsObj;
                var path_Max = hmFS.SysProGetInt('File_Management_cache_size');
                if (path_Max == undefined) {
                    hmFS.SysProSetInt('File_Management_cache_size', 3);
                    path_Max = 3;
                }
                var folderpath = '/storage';
                if (path != '') folderpath = path.toString();
                var dataList = [];
                var n1 = [];
                var n2 = [];
                var fileNameArr = hqjz(folderpath);
                for (i = 0; i < fileNameArr.length; i++) {
                    var path2 = folderpath + '/' + fileNameArr[i];
                    path2 = path2.toString().replace("/storage/", "../../../../../");
                    var [a, b] = hmFS.stat_asset(path2);
                    if (b == 0 && a.size > 0) {
                        n1.push({ 'name': fileNameArr[i], 'path': folderpath + '/' + fileNameArr[i], 'type': 2 });
                    } else {
                        n2.push({ 'name': fileNameArr[i], 'path': folderpath + '/' + fileNameArr[i], 'type': 1 });
                    }
                }
                for (r = 0; r < n2.length; r++) dataList.push(n2[r]);
                for (r = 0; r < n1.length; r++) dataList.push(n1[r]);
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
                        text: "../",
                        click_func: () => {
                            if (folderpath == '/storage') {
                                hmUI.showToast({
                                    text: language_gml
                                });
                            } else {
                                //返回上层文件夹
                                var a = folderpath.toString();
                                a = a.substring(0, a.lastIndexOf("/"));
                                var crparam = get_key();
                                hmApp.reloadPage({
                                    url: 'pages/tools/FileMangerListPage',
                                    param: JSON.stringify({
                                        path: a.toString(),
                                        key: crparam
                                    })
                                });
                            }
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
                        text: "...",
                        click_func: () => {
                            if (folderpath == '/storage') {
                                hmUI.showToast({
                                    text: language_jzcz
                                });
                            } else {
                                hmApp.gotoPage({ url: 'pages/tools/FileMangerEditPage', param: path.toString() });
                            }
                        }
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
                        //text_style: hmUI.text_style.WRAP,
                        text: folderpath
                    });
                    hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
                        x: 16,
                        y: 103,
                        h: 332,
                        w: 160,
                        item_space: 10,
                        item_config: [
                            {
                                type_id: 1,
                                item_bg_color: 0x007ACC,
                                item_bg_radius: 12,
                                text_view: [{
                                    x: 10,
                                    y: 0,
                                    w: 140,
                                    h: 70,
                                    key: 'name',
                                    color: 0xffffff,
                                    align_h: hmUI.align.CENTER_H,
                                    align_v: hmUI.align.CENTER_V,
                                    text_style: hmUI.text_style.NONE,
                                    text_size: 21
                                }],
                                text_view_count: 1,
                                item_height: 70
                            },
                            {
                                type_id: 2,
                                item_bg_color: 0x262626,
                                item_bg_radius: 12,
                                text_view: [{
                                    x: 10,
                                    y: 0,
                                    w: 140,
                                    h: 70,
                                    key: 'name',
                                    color: 0xffffff,
                                    align_h: hmUI.align.CENTER_H,
                                    align_v: hmUI.align.CENTER_V,
                                    text_style: hmUI.text_style.NONE,
                                    text_size: 21
                                }],
                                text_view_count: 1,
                                item_height: 70
                            }
                        ],
                        item_config_count: 2,
                        data_array: dataList,
                        data_count: dataList.length,
                        item_click_func: (item, index) => {
                            djitem(index);
                        },
                        data_type_config: [
                            {
                                start: 0,
                                end: n2.length,
                                type_id: 1
                            },
                            {
                                start: n2.length,
                                end: dataList.length - 1,
                                type_id: 2
                            }
                        ],
                        data_type_config_count: 2
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
                        x: 40,
                        y: 0,
                        w: 112,
                        h: 70,
                        color: 0xffffff,
                        text_size: 20,
                        align_h: hmUI.align.CENTER_H,
                        align_v: hmUI.align.CENTER_V,
                        text_style: hmUI.text_style.NONE,
                        text: language_title_text2
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
                        text: language_cxyc
                    });
                }
                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                function fhscwjj() {
                    var a = folderpath.toString();
                    a = a.substring(0, a.lastIndexOf("/"));
                    var crparam = '';
                    hmApp.reloadPage({
                        url: 'pages/tools/FileMangerListPage',
                        param: JSON.stringify({
                            path: a.toString(),
                            key: crparam
                        })
                    });
                }
                function hqjz(path) {
                    var File_Management_cache = hmFS.SysProGetBool('File_Management_cache');
                    var fileNameArr = hmFS.SysProGetChars(path);
                    if (File_Management_cache == true) {
                        if (path == '/storage') {
                            return hmFS.readdir(path)[0];
                        } else if (fileNameArr == undefined || fileNameArr == '') {
                            var lsbl = hmFS.SysProGetChars('File_Management_temp');
                            if (lsbl == undefined) {
                                lsbl = [path];
                                hmFS.SysProSetChars('File_Management_temp', JSON.stringify(lsbl));
                            } else {
                                lsbl = JSON.parse(lsbl);
                                if (lsbl.length >= path_Max) {
                                    hmFS.SysProSetChars(lsbl.shift(), '');
                                }
                                lsbl.push(path);
                                hmFS.SysProSetChars('File_Management_temp', JSON.stringify(lsbl));
                            }
                            fileNameArr = hmFS.readdir(path)[0];
                            hmFS.SysProSetChars(path, JSON.stringify(fileNameArr));
                        } else {
                            fileNameArr = JSON.parse(fileNameArr);
                        }
                    } else {
                        var fileNameArr = hmFS.readdir(path)[0];
                    }
                    if (fileNameArr == 'File_Management_go_back') {
                        fhscwjj()
                        return {}
                    }
                    return fileNameArr;
                }
                function get_key() {
                    /*var mm = 49897000
                    var dqsj = (jstime.hour * 3600 + jstime.minute * 60) - mm
                    var crparam = dqsj * mm
                    crparam = crparam.toString()
                    return crparam*/
                    return '';
                }
                function djitem(index) {
                    if (dataList[index]['type'] == 2) {
                        //进入子文件
                        hmApp.gotoPage({ url: 'pages/tools/FileMangerOpenPage', param: dataList[index]['path'] });
                    }
                    else if (dataList[index]['type'] == 0) {
                        //返回上层文件夹
                        fhscwjj();
                    } else {
                        //进入子文件夹
                        var crparam = get_key();
                        hmApp.reloadPage({
                            url: 'pages/tools/FileMangerListPage',
                            param: JSON.stringify({
                                path: dataList[index]['path'].toString(),
                                key: crparam
                            })
                        });
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
