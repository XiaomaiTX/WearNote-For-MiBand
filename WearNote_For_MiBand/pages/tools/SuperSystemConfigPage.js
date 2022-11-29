import { gettext } from 'i18n';

try {
    Page({
        build() {
            try {
                /*------------------------------
                | 初始化                        |
                ------------------------------*/
                hmUI.setLayerScrolling(true);
                hmApp.setScreenKeep(true);
                hmApp.unregisterGestureEvent();
                hmSetting.setBrightScreen(600);
                /*------------------------------
                | 设置语言                      |
                ------------------------------*/
                const languagexz = hmSetting.getLanguage();
                if (languagexz == 0 || languagexz == 1) {
                    var language_title_text = '系统信息';
                    var language_ui_title_a1 = '屏幕信息';
                    var language_v5_1 = '方屏';
                    var language_v5_2 = '圆屏';
                    var language_v5_3 = '无效值';
                    var language_zdld = '自动亮度';
                    var language_pmld = '屏幕亮度';
                    var language_pmkd = '屏幕宽度';
                    var language_pmgd = '屏幕高度';
                    var language_pmxz = '屏幕形状';
                    var language_ui_title_a2 = '账户信息';
                    var language_ui_title_a3 = '存储信息';
                    var language_ui_title_a4 = '设备信息';
                } else {
                    var language_title_text = 'System Info';
                    var language_ui_title_a1 = 'Screen Info';
                    var language_v5_1 = 'Square Screen';
                    var language_v5_2 = 'Round screen';
                    var language_v5_3 = 'Invalid value';
                    var language_zdld = 'Auto Brightness';
                    var language_pmld = 'Screen brightness';
                    var language_pmkd = 'Screen width';
                    var language_pmgd = 'Screen height';
                    var language_pmxz = 'Screen shape';
                    var language_ui_title_a2 = 'Account Info';
                    var language_ui_title_a3 = 'Storage Information';
                    var language_ui_title_a4 = 'Device Information';
                }
                /*------------------------------
                | 其他配置                      |
                ------------------------------*/
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
                    text: language_title_text//系统信息
                });
                var bottom = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 0,
                    y: 2099,
                    w: 192,
                    h: 1
                });
                //屏幕相关
                var ui_title_a1 = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 0,
                    y: 60,
                    w: 192,
                    h: 30,
                    color: 0x00ff00,
                    text_size: 17,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.WRAP,
                    text: language_ui_title_a1//屏幕信息
                });
                var ui_strokeRect_a1 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
                    x: 6,
                    y: 95,
                    w: 180,
                    h: 370,
                    radius: 15,
                    line_width: 4,
                    color: 0x262626
                });
                var ui_text_a1 = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 15,
                    y: 104,
                    w: 162,
                    h: 352,
                    color: 0xffffff,
                    text_size: 17,
                    /*align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,*/
                    align_h: hmUI.align.LEFT,
                    align_v: hmUI.align.TOP,
                    text_style: hmUI.text_style.WRAP,
                    text: 'Loading...'
                });
                var v1 = hmSetting.getScreenAutoBright();
                var v2 = hmSetting.getBrightness();
                var v3 = hmSetting.getDeviceInfo().width;
                var v4 = hmSetting.getDeviceInfo().height;
                var v5 = hmSetting.getDeviceInfo().screenShape;
                switch (v5) {
                    case 0:
                        v5 = language_v5_1;//方屏
                        break;
                    case 1:
                        v5 = language_v5_2;//圆屏
                        break;
                    default:
                        v5 = language_v5_3;//无效值
                        break;
                }
                var text = language_zdld + ':\n' + v1 + '\n\n' + language_pmld + ':\n' + v2 + '/100\n\n' + language_pmkd + ':\n' + v3 + '\n\n' + language_pmgd + ':\n' + v4 + '\n\n' + language_pmxz + ':\n' + v5;
                ui_text_a1.setProperty(hmUI.prop.TEXT, text);
                //账户信息
                var ui_title_a2 = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 0,
                    y: 470,//+10
                    w: 192,
                    h: 30,
                    color: 0x00ff00,
                    text_size: 17,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.WRAP,
                    text: language_ui_title_a2//账户信息
                });
                var ui_strokeRect_a2 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
                    x: 6,
                    y: 505,//+35
                    w: 180,
                    h: 820,
                    radius: 15,
                    line_width: 4,
                    color: 0x262626
                });
                var ui_text_a2 = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 15,
                    y: 514,//+9
                    w: 162,
                    h: 802,//-18
                    color: 0xffffff,
                    text_size: 17,
                    align_h: hmUI.align.LEFT,
                    align_v: hmUI.align.TOP,
                    text_style: hmUI.text_style.WRAP,
                    text: 'Loading...'
                });
                var nickName = hmSetting.getUserData().nickName;
                var gender = hmSetting.getUserData().gender;
                var age = hmSetting.getUserData().age;
                var height = returnFloat(hmSetting.getUserData().height);
                var weight = returnFloat(hmSetting.getUserData().weight);
                var mileageUnit = hmSetting.getMileageUnit();
                var targetWeight = returnFloat(hmSetting.getWeightTarget());
                var targetSleep = returnFloat(hmSetting.getSleepTarget() / 60);
                var language = hmSetting.getLanguage();
                var timeFormat = hmSetting.getTimeFormat();
                var dateFormat = hmSetting.getDateFormat();
                var heightMile = '';
                var weightMile = '';
                if (languagexz == 0 || languagexz == 1) {
                    //中文
                    switch (gender) {
                        case 0:
                            gender = '男';
                            break;
                        case 1:
                            gender = '女';
                            break;
                        case 2:
                            gender = '未知';
                            break;
                        default:
                            gender = '无效值';
                            break;
                    }
                    switch (mileageUnit) {
                        case 0:
                            mileageUnit = '公制';
                            heightMile = 'm';
                            weightMile = 'kg';
                            break;
                        case 0:
                            mileageUnit = '英制';
                            break;
                        default:
                            mileageUnit = '无效值';
                            break;
                    }
                    switch (language) {
                        case 0:
                            language = 'zh-CN 简体中文';
                            break;
                        case 1:
                            language = 'zh-TW 繁体中文';
                            break;
                        case 2:
                            language = 'en-US 英语';
                            break;
                        default:
                            language = '其他';
                            break;
                    }
                    switch (timeFormat) {
                        case 0:
                            timeFormat = '12小时制';
                            break;
                        case 1:
                            timeFormat = '24小时制';
                            break;
                        default:
                            timeFormat = '无效值';
                            break;
                    }
                    switch (dateFormat) {
                        case 0:
                            dateFormat = '年-月-日';
                            break;
                        case 1:
                            dateFormat = '日-月-年';
                            break;
                        case 2:
                            dateFormat = '月-日-年';
                            break;
                        default:
                            dateFormat = '无效值';
                            break;
                    }
                    var text = '昵称:\n' + nickName + '\n\n性别:\n' + gender + '\n\n年龄:\n' + age + '\n\n身高:\n' + height + heightMile + '\n\n体重:\n' + weight + weightMile + '\n\n目标体重:\n' + targetWeight + weightMile + '\n\n目标睡眠:\n' + targetSleep + 'h\n\n单位:\n' + mileageUnit + '\n\n语言:\n' + language + '\n\n时间格式:\n' + timeFormat + '\n\n日期格式:\n' + dateFormat;
                } else {
                    //其他语言
                    switch (gender) {
                        case 0:
                            gender = 'male';
                            break;
                        case 1:
                            gender = 'female';
                            break;
                        case 2:
                            gender = 'unknow';
                            break;
                        default:
                            gender = 'invalid value';
                            break;
                    }
                    switch (mileageUnit) {
                        case 0:
                            mileageUnit = 'Metric System';
                            heightMile = 'm';
                            weightMile = 'kg';
                            break;
                        case 0:
                            mileageUnit = 'Imperial System';
                            break;
                        default:
                            mileageUnit = 'invalid value';
                            break;
                    }
                    switch (language) {
                        case 0:
                            language = 'zh-CN Simplified Chinese';
                            break;
                        case 1:
                            language = 'zh-TW Traditional Chinese';
                            break;
                        case 2:
                            language = 'en-US English';
                            break;
                        default:
                            language = 'other';
                            break;
                    }
                    switch (timeFormat) {
                        case 0:
                            timeFormat = '12 hour system';
                            break;
                        case 1:
                            timeFormat = '24 hour system';
                            break;
                        default:
                            timeFormat = 'invalid value';
                            break;
                    }
                    switch (dateFormat) {
                        case 0:
                            dateFormat = 'year-month-day';
                            break;
                        case 1:
                            dateFormat = 'day-month-year';
                            break;
                        case 2:
                            dateFormat = 'month-day-year';
                            break;
                        default:
                            dateFormat = 'invalid value';
                            break;
                    }
                    var text = 'Nick:\n' + nickName + '\n\nGender:\n' + gender + '\n\nAge:\n' + age + '\n\nHeight:\n' + height + heightMile + '\n\nWeight:\n' + weight + weightMile + '\n\nTarget Weight:\n' + targetWeight + weightMile + '\n\nTarget Sleep:\n' + targetSleep + 'h\n\nMileage Unit:\n' + mileageUnit + '\n\nlanguage:\n' + language + '\n\nTime Format:\n' + timeFormat + '\n\nDate Format:\n' + dateFormat;
                }
                ui_text_a2.setProperty(hmUI.prop.TEXT, text);
                //存储信息
                var ui_title_a3 = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 0,
                    y: 1326,//+10
                    w: 192,
                    h: 30,
                    color: 0x00ff00,
                    text_size: 17,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.WRAP,
                    text: language_ui_title_a3//存储信息
                });
                var ui_strokeRect_a3 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
                    x: 6,
                    y: 1361,//+35
                    w: 180,
                    h: 380,
                    radius: 15,
                    line_width: 4,
                    color: 0x262626
                });
                var ui_text_a3 = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 15,
                    y: 1370,//+9
                    w: 162,
                    h: 362,//-18
                    color: 0xffffff,
                    text_size: 17,
                    align_h: hmUI.align.LEFT,
                    align_v: hmUI.align.TOP,
                    text_style: hmUI.text_style.WRAP,
                    text: 'Loading...'
                });
                var v1 = returnFloat(hmSetting.getDiskInfo().total / 1024 / 1024);
                var v2 = returnFloat(hmSetting.getDiskInfo().free / 1024 / 1024);
                var v3 = returnFloat(hmSetting.getDiskInfo().watchface / 1024 / 1024);
                var v4 = returnFloat(hmSetting.getDiskInfo().app / 1024 / 1024);
                var v5 = returnFloat(hmSetting.getDiskInfo().system / 1024 / 1024);
                //var v4 = v1 - v3 - v5
                if (languagexz == 0 || languagexz == 1) {
                    //中文
                    var text = '总空间:\n' + v1 + 'MB\n\n可用空间:\n' + v2 + 'MB\n\n表盘占用空间:\n' + v3 + 'MB\n\n应用占用空间:\n' + v4 + 'MB\n\n系统占用空间:\n' + v5 + 'MB';
                } else {
                    //其他语言
                    var text = 'Total Space:\n' + v1 + 'MB\n\nFree Space:\n' + v2 + 'MB\n\nWatchface Space:\n' + v3 + 'MB\n\nApp Space:\n' + v4 + 'MB\n\nSystem Space:\n' + v5 + 'MB';
                }
                ui_text_a3.setProperty(hmUI.prop.TEXT, text);
                //设备信息
                var ui_title_a4 = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 0,
                    y: 1742,//+10
                    w: 192,
                    h: 30,
                    color: 0x00ff00,
                    text_size: 17,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.WRAP,
                    text: language_ui_title_a4//设备信息
                });
                var ui_strokeRect_a4 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
                    x: 6,
                    y: 1777,//+35
                    w: 180,
                    h: 230,
                    radius: 15,
                    line_width: 4,
                    color: 0x262626
                });
                var ui_text_a4 = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 15,
                    y: 1786,//+9
                    w: 162,
                    h: 212,//-18
                    color: 0xffffff,
                    text_size: 17,
                    align_h: hmUI.align.LEFT,
                    align_v: hmUI.align.TOP,
                    text_style: hmUI.text_style.WRAP,
                    text: 'Loading...'
                });
                var v1 = hmSetting.getDeviceInfo().devicceName;
                var v2 = hmSetting.getDeviceInfo().keyNumber;
                var v3 = hmSetting.getDeviceInfo().deviceSource;
                if (languagexz == 0 || languagexz == 1) {
                    //中文
                    var text = '设备名称:\n' + v1 + '\n\n按键数目:\n' + v2 + '\n\n设备代号:\n' + v3;
                } else {
                    //其他语言
                    var text = 'Device Name:\n' + v1 + '\n\nKey Number:\n' + v2 + '\n\nDevice Source:\n' + v3;
                }
                ui_text_a4.setProperty(hmUI.prop.TEXT, text);
                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                function returnFloat(value) {
                    var xsd = value.toString().split(".");
                    if (xsd.length == 1) {
                        value = value.toString() + ".00";
                        return value;
                    }
                    if (xsd.length > 1) {
                        if (xsd[1].length < 2) {
                            value = value.toString() + "0";
                        } else {
                            value = value.toString().substr(0, value.toString().indexOf(".") + 3);
                        }
                        return value;
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
