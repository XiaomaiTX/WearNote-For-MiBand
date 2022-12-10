import { gettext } from 'i18n';

try {
    Page({
        build(NoteIndex) {
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
                // 顶部按钮图片
                const TopButtonImg = hmUI.createWidget(hmUI.widget.IMG, {
                    x: 76,
                    y: 20,
                    src: 'menu.png'
                })

                // TopButtonImg取消事件
                TopButtonImg.setEnable(false)

                // 顶部按钮
                const TopButton = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: 46,
                    y: 10,
                    w: 100,
                    h: 60,
                    radius: 50,
                    normal_color: 0x333333,
                    press_color: 0x333333,
                    text: '',
                    click_func: (button_widget) => {
                        // TODO 笔记View中的Menu
                    }
                })

                //底部按钮图片
                const ButtomButtonImg = hmUI.createWidget(hmUI.widget.IMG, {
                    x: 76,
                    y: 360,
                    src: 'edit-2.png'
                })

                //ButtomButtonImg取消事件
                ButtomButtonImg.setEnable(false)

                //底部按钮
                const ButtomButton = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: 46,
                    y: 350,
                    w: 100,
                    h: 60,
                    radius: 50,
                    normal_color: 0x333333,
                    press_color: 0x333333,
                    text: '',
                    click_func: (button_widget) => {
                        hmApp.gotoPage({
                            url: "pages/Edit",
                            param: NoteIndex
                        });

                    }
                })
                const Title = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 10,
                    y: 80,
                    w: 172,
                    h: 50,
                    color: 0xffffff,
                    text_size: 40,
                    text: Title_Text
                })




                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                // TODO 
            } catch (error) {
                hmApp.goBack();
            }
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}