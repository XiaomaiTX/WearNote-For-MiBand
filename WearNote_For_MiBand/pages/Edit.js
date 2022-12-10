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
                // TODO 全局下滑事件用来退出键盘？
                /*
                hmApp.registerGestureEvent(function (event) {
                    switch (event) {
                        case hmApp.gesture.UP:
                            // TODO 这里用临时变量判断键盘是否处于激活状态，若是则退出键盘
                            break
                        case hmApp.gesture.DOWN:

                            break
                        case hmApp.gesture.LEFT:

                            break
                        case hmApp.gesture.RIGHT:

                            break
                        default:

                            break
                    }
                    //不跳过默认手势
                    return false
                })
                */

                /*------------------------------
                | 设置语言                      |
                ------------------------------*/
                /*
                0	zh-CN	简体中文
                1	zh-TW	繁体中文（中国台湾）
                2	en-US	英语（美国）
                */
                const language = hmSetting.getLanguage();
                switch (language) {
                    case 0:

                        break;
                    case 1:

                        break;
                    case 2:

                        break;
                }

                /*------------------------------
                | 其他配置                      |
                ------------------------------*/

                /*------------------------------
                | 显示界面                      |
                ------------------------------*/
                const text = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 96,
                    y: 120,
                    w: 288,
                    h: 46,
                    color: 0xffffff,
                    text_size: 36,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.NONE,
                    text: 'HELLO ZEPPOS'
                })


                /*------------------------------
                | 其他函数                      |
                ------------------------------*/

            } catch (error) {
                hmApp.goBack();
            }
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}