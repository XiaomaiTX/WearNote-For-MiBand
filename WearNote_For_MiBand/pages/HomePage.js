import { gettext } from "i18n";

try {
  Page({
    build(indexData) {
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
          y: 80,
          w: 172,
          h: 50,
          color: 0xffffff,
          text_size: 40,
          text: Title_Text,
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
          //text: JSON.stringify(getApp()._options.globalData.indexList[1]),
          text: "Hello Notes",
        });

        /*
        //创建数据列表
        const itemList = hmUI.createWidget(hmUI.widget.SCROLL_LIST, {

          x: 10,
          y: 132,
          w: 172,
          h: 400,// 初始化为0
          item_space: 10,// 每个item之间的间距
          item_config: [
            {
              type_id: 1,
              item_bg_color: 0x333333,
              item_bg_radius: 25,
              item_height: 50,
              image_view: [
                //相对位置
                { x: 69, y: 8, w: 34, h: 34, key: 'CreateButtonImg' }
              ],
              image_view_count: 1
            },
            {
              type_id: 2,
              item_bg_color: 0x333333,
              item_bg_radius: 10,
              text_view: [
                //相对位置
                { x: 22, y: 14, w: 140, h: 39, key: 'Title', color: 0xffffff, text_size: 28 },
                { x: 22, y: 53, w: 140, h: 33, key: 'Abstract', color: 0x808080, text_size: 24 }
              ],
              text_view_count: 2,
              item_height: 100
            }
          ],
          item_config_count: 2,
          data_array: indexData,
          data_count: indexData.length,
          item_click_func: (item, index) => {
            console.log(`scrollListItemClick index=${index}`)// TODO 删掉console.log 
            switch (index) {
              case 0:
                hmApp.gotoPage({
                  url: "pages/New",
                  param: ''
                });
                break
              // TODO 跳转View界面
              default:
                hmFS.SysProSetInt('clickItemImdex', index)
                hmApp.gotoPage({
                  url: "pages/View",
                  param: index
                });

              break

            }
          },
          data_type_config: [
            {
              start: 0,
              end: 0,
              type_id: 1
            },
            {
              start: 1,
              end: indexData.length - 1,
              type_id: 2
            }
          ],
          data_type_config_count: 2
        })

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
