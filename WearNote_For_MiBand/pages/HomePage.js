import { gettext } from 'i18n';

try {
  Page({
    build(dataList) {
      try {
        /*------------------------------
        | 初始化                        |
        ------------------------------*/
        hmUI.setLayerScrolling(false);
        hmApp.setScreenKeep(true);
        hmApp.registerGestureEvent(function (event) {
          switch (event) {
            case hmApp.gesture.RIGHT:
              hmApp.exit();
              break
            default:
              break
          }
          //不跳过默认手势
          return ture
        })
        //修改APP全局变量，使得HomePage返回时返回到小程序列表，而不是在index被循环
        getApp()._options.globalData.ifBack = 'true'
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
            var Title_Text = "笔记"
            break;
          case 1:
            var Title_Text = "笔记"
            break;
          case 2:
            var Title_Text = "Notes"
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
          text: Title_Text
        })

        //底部按钮图片
        const ButtomButtonImg = hmUI.createWidget(hmUI.widget.IMG, {
          x: 76,
          y: 360,
          src: 'menu.png'
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
          normal_color: 0x0986d4,
          press_color: 0x043658,
          text: '',
          click_func: (button_widget) => {
            hmApp.gotoPage({
              url: "pages/Setting",
              param: ''
            });

          }
        })

        //创建数据列表
        const ItemList = hmUI.createWidget(hmUI.widget.SCROLL_LIST, {

          x: 10,
          y: 132,
          w: 172,
          h: 0,// 初始化为0
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
          data_array: dataList,
          data_count: dataList.length,
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
              end: dataList.length - 1,
              type_id: 2
            }
          ],
          data_type_config_count: 2
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