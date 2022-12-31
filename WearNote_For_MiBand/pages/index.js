import { gettext } from 'i18n';

try {
    Page({
        build() {
            try {
                /*------------------------------
                | 初始化                        |
                ------------------------------*/
                hmApp.setScreenKeep(true);
                hmApp.unregisterGestureEvent();
                //const isVertical = false //横向滚动
                //hmUI.setScrollView(true, px(480), 20, isVertical)
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
                
                const icon = hmUI.createWidget(hmUI.widget.IMG, {
                    x: 46,
                    y: 195,
                    src: 'icon.png'
                });
                
                /*
                const text = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 0,
                    y: 200,
                    w: 192,
                    h: 46,
                    color: 0xffffff,
                    text_size: 36,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.NONE,
                    text: JSON.stringify(getApp()._options.globalData.indexList[0]),
                  });
                  
                /*------------------------------
                | 其他函数                      |
                ------------------------------*/
                //判断是否从上一页返回，返回到小程序列表
                /*
                if (getApp()._options.globalData.ifBack == 'true') {
                    hmApp.goBack();
                }
                */
                // TODO 判断是否首次启动

                // TODO 载入索引文件
                var indexData = getApp()._options.globalData.indexList

                // TEST DATA
                indexData.push({ Title: 'Note 1', Abstract: 'test text' });
                indexData.push({ Title: 'TEST 1', Abstract: '1TEST TEXT' });
                /*
                const dataList = [
                    { Title: 'Note 1', Abstract: 'test text' },
                    { Title: 'TEST 1', Abstract: '1TEST TEXT' }
                ]
                */
                // 开屏LOGO，时长150ms
                // TODO 后续按照索引大小决定LOGO时长，避免等待时间太久
                const timer1 = timer.createTimer(150, null,
                    function (option) {
                        hmApp.gotoPage({
                            url: "pages/HomePage",
                            param: ''
                        });
                    }, null);

            } catch (error) {
                hmApp.goBack();
            }
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}