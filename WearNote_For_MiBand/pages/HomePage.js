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
        hmApp.registerGestureEvent(function (event) {
          switch (event) {
            case hmApp.gesture.RIGHT:
              hmApp.gotoHome();
              break;
            default:
              break;
          }
          // 跳过默认手势
          return true;
        });
        indexData = getApp()._options.globalData.indexList
        // 修改APP全局变量，使得HomePage返回时返回到小程序列表，而不是在index被循环
        //getApp()._options.globalData.ifBack = 'true'
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
            var Title_Text = "笔记";
            break;
          case 1:
            var Title_Text = "笔记";
            break;
          case 2:
            var Title_Text = "Notes";
            break;
        }

        /*------------------------------
        | 其他配置                      |
        ------------------------------*/

        /*------------------------------
        | 显示界面                      |
        ------------------------------*/

        //标题
        const Title = hmUI.createWidget(hmUI.widget.TEXT, {
          x: 10,
          y: 70,
          w: 172,
          h: 50,
          color: 0xffffff,
          text_size: 40,
          align_h: hmUI.align.LEFT,
          align_v: hmUI.align.TOP,
          text: Title_Text,
        });

        //新建笔记按钮图片
        const NewNote = hmUI.createWidget(hmUI.widget.IMG, {
          x: 10,
          y: 130,
          src: "img/HomePage-NewNoteIcon.png",
        });

        //新建笔记按钮监听
        NewNote.addEventListener(hmUI.event.CLICK_DOWN, function (info) {
          hmApp.gotoPage({
            url: "pages/New",
            param: "",
          });
        });

        //底部按钮图片
        const ButtomButton = hmUI.createWidget(hmUI.widget.IMG, {
          x: 46,
          y: 410,
          src: "img/HomePage-ButtomButton.png",
        });

        //底部按钮监听
        ButtomButton.addEventListener(hmUI.event.CLICK_DOWN, function (info) {
          hmApp.gotoPage({
            url: "pages/Setting",
            param: "",
          });
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
          //text: JSON.stringify(getApp()._options.globalData.indexList[0]),
          text: JSON.stringify(indexData[0]),
        });
        //*/

        //创建数据列表
        const itemList = hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
          x: 10,
          y: 192,
          w: 172,
          h: 210, // 初始化为0
          item_space: 10, // 每个item之间的间距
          item_config: [
            {
              type_id: 1,
              item_bg_color: 0x262626,
              item_bg_radius: 15,
              text_view: [
                //相对位置
                {
                  x: 10,
                  y: 14,
                  w: 140,
                  h: 39,
                  key: "Title",
                  color: 0xffffff,
                  text_size: 28,
                },
                {
                  x: 10,
                  y: 53,
                  w: 140,
                  h: 33,
                  key: "Abstract",
                  color: 0x808080,
                  text_size: 24,
                },
              ],
              text_view_count: 2,
              item_height: 100,
            }
          ],
          item_config_count: 1,
          data_array: indexData,
          data_count: indexData.length,
          item_click_func: (item, index) => {
            console.log(`scrollListItemClick index=${index}`); // TODO 删掉console.log
            switch (index) {
              default:
                hmFS.SysProSetInt("clickItemIndex", index);
                hmApp.gotoPage({
                  url: "pages/View",
                  param: "",
                });
                break;
            }
          },
          data_type_config: [
            {
              start: 0,
              end: indexData.length - 1,
              type_id: 1,
            },
          ],
          data_type_config_count: 1,
        });

        /*------------------------------
        | 其他函数                      |
        ------------------------------*/
      } catch (error) {
        hmApp.gotoHome();
      }
    },
  });
} catch (error) {
  Page({
    build() {
      try {
        hmApp.gotoHome();
      } catch (error) {}
    },
  });
}
