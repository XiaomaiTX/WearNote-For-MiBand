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
                /*------------------------------
                | 设置语言                      |
                ------------------------------*/
                /*
                0	zh-CN	简体中文
                1	zh-TW	繁体中文（中国台湾）
                2	en-US	英语（美国）
                */
                hmUI.showToast({
                    text: 'Hello\nZepp OS'
                  })
                const language = hmSetting.getLanguage();
                switch (language) {
                    case 0:
                        var language_text = '测试界面';
                        var Debug_Text = 'X';
                        break;
                    case 1:
                        var language_text = '測試頁面';
                        var Debug_Text = 'X';
                        break;
                    case 2:
                        var language_text = 'Test page';
                        var Debug_Text = 'X';
                        break;
                }
                /*------------------------------
                | 其他配置                      |
                ------------------------------*/
                var n=[1, 1, 1, 2, 3, 4, 5, 6, 7, 9, 11, 13, 15, 17, 19, 22, 24, 27, 29, 32, 35, 38, 41, 44, 48, 51, 54, 58, 61, 64, 67, 71, 74, 77, 81, 84, 87, 90, 93, 96, 99, 102, 104, 107, 109, 111, 114, 116, 118, 119, 121, 122, 124, 125, 126, 126, 127, 127, 128, 128]
                /*------------------------------
                | 创建UI                        |
                ------------------------------*/
                const LOGO = hmUI.createWidget(hmUI.widget.IMG, {
                    x: 46,
                    y: 50,
                    src: 'image/icon/app.png'
                });
                const NonLinearUI_Test = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
                    x: 0,
                    y: 150,
                    w: 192,
                    h: 100,
                    radius: 20,
                    line_width: 4,
                    color: 0xfc6950
                  })
                const DebugText = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 0,
                    y: 250,//100
                    w: 192,
                    h: 300,
                    color: 16777215,
                    text_size: 20,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.WRAP,
                    text: Debug_Text
                });

                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                //...
                function non_linear(init,target){
                        var n=[];
                        var r=(target-init)/3.1415;
                        for (var i=1;i<31;i++){ 
                            dn=r-r*Math.cos(180/60*i)
                            n.push(Math.round(dn))
                        }
                        for (var i=1;i<31;i++){ 
                            dn=r+r*Math.sin(180/60*i)
                            n.push(Math.round(dn))
                        }
                        return n
                }
                function paintUI(n){
                        NonLinearUI_Test.setProperty(hmUI.prop.MORE, {
                            h: 100+n[option.i]
                          })
                }
                
                DebugText.addEventListener(hmUI.event.CLICK_DOWN, () => {
                    setTimeout(function(){
                        paintUI(n);
                    }, 500); //单位是毫秒
                    
                })
                NonLinearUI_Test.addEventListener(hmUI.event.CLICK_DOWN, () => {
                    //var n=non_linear(100,300)
                    NonLinearUI_Test.setProperty(hmUI.prop.MORE, {
                        h: 100+n[option.i]
                      })
        //非线性动画计算
                    //const NonLinearUI_X = NonLinearUI_Test.getProperty(hmUI.prop.x)
                    //const NonLinearUI_Y = NonLinearUI_Test.getProperty(hmUI.prop.y)
                    //const NonLinearUI_W = NonLinearUI_Test.getProperty(hmUI.prop.w)
                    //const NonLinearUI_H = NonLinearUI_Test.getProperty(hmUI.prop.h)

                  })
            } catch (error) {
                hmApp.goBack();
            }
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}