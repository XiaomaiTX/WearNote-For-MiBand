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
                hmSetting.setBrightScreen(600);
                /*------------------------------
                | 设置语言                      |
                ------------------------------*/
                //...
                /*------------------------------
                | 其他配置                      |
                ------------------------------*/
                var dqld = hmSetting.getBrightness();
                var xzld = dqld;
                var i = 0;
                var color = 0xff0000;
                var jltc = 0
                const cfzxjs = timer.createTimer(
                    10,
                    50,
                    function () { ldzd(); }
                );
                /*------------------------------
                | 显示界面                      |
                ------------------------------*/
                var ui_background = hmUI.createWidget(hmUI.widget.FILL_RECT, {
                    x: 0,
                    y: 0,
                    w: 192,
                    h: 480,
                    radius: 0,
                    color: color
                });
                var background = hmUI.createWidget(hmUI.widget.IMG, {
                    x: 0,
                    y: 0,
                    src: 'image/background.png'
                });
                hmApp.registerGestureEvent(function (RIGHT) {
                    jltc = 1
                    tcdqjs()
                    return true
                });
                background.addEventListener(hmUI.event.CLICK_DOWN, () => {
                    switch (i) {
                        case 0:
                            i = 1;
                            color = 0x00ff00;
                            break;
                        case 1:
                            i = 2;
                            color = 0x0000ff;
                            break;
                        case 2:
                            i = 3;
                            color = 0xffffff;
                            break;
                        case 3:
                            i = 4;
                            color = 0x000000;
                            break;
                        case 4:
                            i = 0;
                            tcdqjs();
                            break;
                        default:
                            break;
                    }
                    if (jltc !== 1){
                        ui_background.setProperty(hmUI.prop.COLOR, color);
                    }
                });
                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                function tcdqjs() {
                    hmApp.unregisterGestureEvent()
                    timer.stopTimer(cfzxjs);
                    hmSetting.setBrightness(dqld);
                    hmApp.goBack();
                }
                function ldzd() {
                    if (xzld == 101) {
                        timer.stopTimer(cfzxjs);
                    }
                    xzld = xzld + 1;
                    const result = hmSetting.setBrightness(xzld);
                }
            } catch (error) {
                hmApp.goBack();
            }
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}
