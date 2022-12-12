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
                var keyboard_enterkeys_display=['.,?!','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
                var keyboard_menuKeys_display=['.,?!','abc','def']
                
                /*------------------------------
                | 显示界面                      |
                ------------------------------*/
                const keyboard_keys = hmUI.createWidget(hmUI.widget.GROUP, {
                    x: 16,
                    y: 240,
                    w: 160,
                    h: 215
                })
                const key1 = keyboard_keys.createWidget(hmUI.widget.BUTTON, {
                    x: 55*0,//0
                    y: 55*0,//0
                    w: 50,
                    h: 50,
                    radius: 10,
                    normal_color: 0x333333,
                    press_color: 0xffffff,
                    text: '',
                    color:0xffffff,
                    click_func: () => {
                    }
                  })
                  const key2 = keyboard_keys.createWidget(hmUI.widget.BUTTON, {
                    x: 55*1,
                    y: 55*0,
                    w: 50,
                    h: 50,
                    radius: 10,
                    normal_color: 0x333333,
                    press_color: 0xffffff,
                    text: '',
                    color:0xffffff,
                    click_func: () => {
                    }
                  })
                  const key3 = keyboard_keys.createWidget(hmUI.widget.BUTTON, {
                    x: 55*2,
                    y: 55*0,
                    w: 50,
                    h: 50,
                    radius: 10,
                    normal_color: 0x333333,
                    press_color: 0xffffff,
                    text: '',
                    color:0xffffff,
                    click_func: () => {
                    }
                  })
                  const key4 = keyboard_keys.createWidget(hmUI.widget.BUTTON, {
                    x: 55*0,
                    y: 55*1,
                    w: 50,
                    h: 50,
                    radius: 10,
                    normal_color: 0x333333,
                    press_color: 0xffffff,
                    text: '',
                    color:0xffffff,
                    click_func: () => {
                    }
                  })
                  const key5 = keyboard_keys.createWidget(hmUI.widget.BUTTON, {
                    x: 55*1,
                    y: 55*1,
                    w: 50,
                    h: 50,
                    radius: 10,
                    normal_color: 0x333333,
                    press_color: 0xffffff,
                    text: '',
                    color:0xffffff,
                    click_func: () => {
                    }
                  })
                  const key6 = keyboard_keys.createWidget(hmUI.widget.BUTTON, {
                    x: 55*2,
                    y: 55*1,
                    w: 50,
                    h: 50,
                    radius: 10,
                    normal_color: 0x333333,
                    press_color: 0xffffff,
                    text: '',
                    color:0xffffff,
                    click_func: () => {
                    }
                  })
                  const key7 = keyboard_keys.createWidget(hmUI.widget.BUTTON, {
                    x: 55*0,
                    y: 55*2,
                    w: 50,
                    h: 50,
                    radius: 10,
                    normal_color: 0x333333,
                    press_color: 0xffffff,
                    text: '',
                    color:0xffffff,
                    click_func: () => {
                    }
                  })
                  const key8 = keyboard_keys.createWidget(hmUI.widget.BUTTON, {
                    x: 55*1,
                    y: 55*2,
                    w: 50,
                    h: 50,
                    radius: 10,
                    normal_color: 0x333333,
                    press_color: 0xffffff,
                    text: '',
                    color:0xffffff,
                    click_func: () => {
                    }
                  })
                  const key9 = keyboard_keys.createWidget(hmUI.widget.BUTTON, {
                    x: 55*2,
                    y: 55*2,
                    w: 50,
                    h: 50,
                    radius: 10,
                    normal_color: 0x333333,
                    press_color: 0xffffff,
                    text: '',
                    color:0xffffff,
                    click_func: () => {
                    }
                  })
                  const key10 = keyboard_keys.createWidget(hmUI.widget.BUTTON, {
                    x: 55*0,
                    y: 55*3,
                    w: 50,
                    h: 50,
                    radius: 10,
                    normal_color: 0x333333,
                    press_color: 0xffffff,
                    text: '',
                    color:0xffffff,
                    click_func: () => {
                    }
                  })
                  const key11 = keyboard_keys.createWidget(hmUI.widget.BUTTON, {
                    x: 55*1,
                    y: 55*3,
                    w: 50,
                    h: 50,
                    radius: 10,
                    normal_color: 0x333333,
                    press_color: 0xffffff,
                    text: '',
                    color:0xffffff,
                    click_func: () => {
                    }
                  })
                  const key12 = keyboard_keys.createWidget(hmUI.widget.BUTTON, {
                    x: 55*2,
                    y: 55*3,
                    w: 50,
                    h: 50,
                    radius: 10,
                    normal_color: 0x333333,
                    press_color: 0xffffff,
                    text: '',
                    color:0xffffff,
                    click_func: () => {
                    }
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