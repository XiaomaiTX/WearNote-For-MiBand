import { gettext } from "i18n";

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
        /*
                0	zh-CN	简体中文
                1	zh-TW	繁体中文（中国台湾）
                2	en-US	英语（美国）
                */
        const language = hmSetting.getLanguage();
        switch (language) {
          case 0:
            var Title_Text = "新建";
            break;
          case 1:
            var Title_Text = "新建";
            break;
          case 2:
            var Title_Text = "New";
            break;
        }

        /*------------------------------
        | 其他配置                      |
        ------------------------------*/
        var keyboardStatus = 0;
        var i = 0;
        /*------------------------------
        | 显示界面                      |
        ------------------------------*/

        //顶部按钮图片
        const TopButton = hmUI.createWidget(hmUI.widget.IMG, {
          x: 46,
          y: 10,
          src: "img/New-TopButton.png",
        });

        //顶部按钮监听
        TopButton.addEventListener(hmUI.event.CLICK_DOWN, function (info) {
          hmApp.goBack();
        });
        0x262626;

        //DEBUG BUTTON
        const debugButton = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 56,
          y: 100,
          w: 80,
          h: 40,
          radius: 40,
          normal_color: 0x262626,
          press_color: 0x333333,
          text: "Hello",
          click_func: () => {
          },
        });
        debugButton.addEventListener(hmUI.event.CLICK_DOWN, function (info) {
          //控件注册事件监听
          /*
          debugButton.setProperty(hmUI.prop.MORE, {
            text: "zeppos",
          });
          KEY_1.setProperty(hmUI.prop.MORE, {
            text: i,
          });
          i++;
          //*/
          hmApp.goBack();
      })
        //DEBUG TEXT
        const debugTEXT = hmUI.createWidget(hmUI.widget.TEXT, {
          x: 56,
          y: 140,
          w: 80,
          h: 40,
          text: keyboardStatus + "  _  " + i,
        });

        //键盘

        //TEXT CHOOSE
        //BOARD KEYS
        const KEY_1 = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 16,
          y: 240,
          w: 50,
          h: 50,
          radius: 10,
          normal_color: 0x262626,
          press_color: 0x333333,
          text: "1",
        });
        const KEY_2 = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 71,
          y: 240,
          w: 50,
          h: 50,
          radius: 10,
          normal_color: 0x262626,
          press_color: 0x333333,
          text: "2",
        });
        const KEY_3 = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 126,
          y: 240,
          w: 50,
          h: 50,
          radius: 10,
          normal_color: 0x262626,
          press_color: 0x333333,
          text: "3",
        });
        /*
        const BoardKeys = hmUI.createWidget(hmUI.widget.GROUP, {
          x: 16,
          y: 240,
          w: 160,
          h: 215,
        });

        const KEY_1 = BoardKeys.createWidget(hmUI.widget.BUTTON, {
          x: 0,
          y: 0,
          w: 50,
          h: 50,
          radius: 10,
          normal_color: 0x262626,
          press_color: 0x333333,
          text: "1",
        });
        const KEY_2 = BoardKeys.createWidget(hmUI.widget.BUTTON, {
          x: 55,
          y: 0,
          w: 50,
          h: 50,
          radius: 10,
          normal_color: 0x262626,
          press_color: 0x333333,
          text: "2",
        });
        const KEY_3 = BoardKeys.createWidget(hmUI.widget.BUTTON, {
          x: 110,
          y: 0,
          w: 50,
          h: 50,
          radius: 10,
          normal_color: 0x262626,
          press_color: 0x333333,
          text: "3",
        });
        const KEY_4 = BoardKeys.createWidget(hmUI.widget.BUTTON, {
          x: 0,
          y: 55,
          w: 50,
          h: 50,
          radius: 10,
          normal_color: 0x262626,
          press_color: 0x333333,
          text: "",
        });
        const KEY_5 = BoardKeys.createWidget(hmUI.widget.BUTTON, {
          x: 55,
          y: 55,
          w: 50,
          h: 50,
          radius: 10,
          normal_color: 0x262626,
          press_color: 0x333333,
          text: "",
        });
        const KEY_6 = BoardKeys.createWidget(hmUI.widget.BUTTON, {
          x: 110,
          y: 55,
          w: 50,
          h: 50,
          radius: 10,
          normal_color: 0x262626,
          press_color: 0x333333,
          text: "",
        });
        const KEY_7 = BoardKeys.createWidget(hmUI.widget.BUTTON, {
          x: 0,
          y: 110,
          w: 50,
          h: 50,
          radius: 10,
          normal_color: 0x262626,
          press_color: 0x333333,
          text: "",
        });
        const KEY_8 = BoardKeys.createWidget(hmUI.widget.BUTTON, {
          x: 55,
          y: 110,
          w: 50,
          h: 50,
          radius: 10,
          normal_color: 0x262626,
          press_color: 0x333333,
          text: "",
        });
        const KEY_9 = BoardKeys.createWidget(hmUI.widget.BUTTON, {
          x: 110,
          y: 110,
          w: 50,
          h: 50,
          radius: 10,
          normal_color: 0x262626,
          press_color: 0x333333,
          text: "",
        });
        const KEY_10 = BoardKeys.createWidget(hmUI.widget.BUTTON, {
          x: 0,
          y: 165,
          w: 50,
          h: 50,
          radius: 10,
          normal_color: 0x262626,
          press_color: 0x333333,
          text: "",
        });
        const KEY_11 = BoardKeys.createWidget(hmUI.widget.BUTTON, {
          x: 55,
          y: 165,
          w: 50,
          h: 50,
          radius: 10,
          normal_color: 0x262626,
          press_color: 0x333333,
          text: "",
        });
        const KEY_12 = BoardKeys.createWidget(hmUI.widget.BUTTON, {
          x: 110,
          y: 165,
          w: 50,
          h: 50,
          radius: 10,
          normal_color: 0x262626,
          press_color: 0x333333,
          text: "",
        });
        //*/
        //KEY BOARD STATUS UPDATE
        /*
          KEY BOARD STATUS
          0 = English
          1 = Numbers
          2 = Punctuation
          3 = Menu
          */
        //SET BOARD KEYS TEXT
        function SetBoardKeysText(keyboardStatus) {
          switch (keyboardStatus) {
            case 0:
              var KEY_1_TEXT = ".,?!";
              var KEY_2_TEXT = "abc";
              var KEY_3_TEXT = "def";
              var KEY_4_TEXT = "ghi";
              var KEY_5_TEXT = "jkl";
              var KEY_6_TEXT = "mno";
              var KEY_7_TEXT = "pqrs";
              var KEY_8_TEXT = "tuv";
              var KEY_9_TEXT = "wxyz";
              var KEY_10_TEXT = "Menu";
              var KEY_11_TEXT = "___";
              var KEY_12_TEXT = "中/En";
              break;
            case 1:
              var KEY_1_TEXT = "1";
              var KEY_2_TEXT = "2";
              var KEY_3_TEXT = "3";
              var KEY_4_TEXT = "4";
              var KEY_5_TEXT = "5";
              var KEY_6_TEXT = "6";
              var KEY_7_TEXT = "7";
              var KEY_8_TEXT = "8";
              var KEY_9_TEXT = "9";
              var KEY_10_TEXT = "Menu";
              var KEY_11_TEXT = "0";
              var KEY_12_TEXT = "___";
              break;
            case 2:
              var KEY_1_TEXT = "，";
              var KEY_2_TEXT = "。";
              var KEY_3_TEXT = "？";
              var KEY_4_TEXT = "！";
              var KEY_5_TEXT = "、";
              var KEY_6_TEXT = "......";
              var KEY_7_TEXT = "@";
              var KEY_8_TEXT = "：";
              var KEY_9_TEXT = "；";
              var KEY_10_TEXT = "Menu";
              var KEY_11_TEXT = "Left";
              var KEY_12_TEXT = "Right";
              break;
            case 3:
              var KEY_1_TEXT = "中文";
              var KEY_2_TEXT = "En";
              var KEY_3_TEXT = "123";
              var KEY_4_TEXT = "符号";
              var KEY_5_TEXT = "-";
              var KEY_6_TEXT = "-";
              var KEY_7_TEXT = "-";
              var KEY_8_TEXT = "-";
              var KEY_9_TEXT = "-";
              var KEY_10_TEXT = "Back";
              var KEY_11_TEXT = "-";
              var KEY_12_TEXT = "Setting";
              break;
          }
          Key_1.setProperty(hmUI.prop.MORE, { text: KEY_1_TEXT });
          Key_2.setProperty(hmUI.prop.MORE, { text: KEY_2_TEXT });
          Key_3.setProperty(hmUI.prop.MORE, { text: KEY_3_TEXT });
          Key_4.setProperty(hmUI.prop.MORE, { text: KEY_4_TEXT });
          Key_5.setProperty(hmUI.prop.MORE, { text: KEY_5_TEXT });
          Key_6.setProperty(hmUI.prop.MORE, { text: KEY_6_TEXT });
          Key_7.setProperty(hmUI.prop.MORE, { text: KEY_7_TEXT });
          Key_8.setProperty(hmUI.prop.MORE, { text: KEY_8_TEXT });
          Key_9.setProperty(hmUI.prop.MORE, { text: KEY_9_TEXT });
          Key_10.setProperty(hmUI.prop.MORE, { text: KEY_10_TEXT });
          Key_11.setProperty(hmUI.prop.MORE, { text: KEY_11_TEXT });
          Key_12.setProperty(hmUI.prop.MORE, { text: KEY_12_TEXT });
        }

        /*------------------------------
        | 其他函数                      |
        ------------------------------*/
        //
        //创建timer，延时500ms触发，之后每1000ms执行一次
        const timer1 = timer.createTimer(
          500,
          1000,
          function (option) {
            //回调
            if (keyboardStatus >= 3) {
              keyboardStatus = 0;
              1;
            }
            SetBoardKeysText(keyboardStatus);
            debugTEXT.setProperty(hmUI.prop.MORE, { text: keyboardStatus });
            keyboardStatus = keyboardStatus + 1;
          },
          {}
        );

        //停止timer1
        timer.stopTimer(timer1);
      } catch (error) {
        hmApp.goBack();
      }
    },
  });
} catch (error) {
  Page({
    build() {
      try {
        hmApp.goBack();
      } catch (error) {}
    },
  });
}
