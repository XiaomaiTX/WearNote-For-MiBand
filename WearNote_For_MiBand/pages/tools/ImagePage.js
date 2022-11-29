import { gettext } from 'i18n';

try {
    Page({
        onInit(param) {
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
            const language = hmSetting.getLanguage();
            if (language == 0 || language == 1) {
                var language_gb = '返回';
            } else {
                var language_gb = 'go back';
            }
            */
            /*------------------------------
            | 其他配置                      |
            ------------------------------*/
            var path = param.toString().replace("/storage/", "../../../../../");
            const f = hmFS.open_asset(path, hmFS.O_RDONLY);
            const header = new Uint8Array(18);
            hmFS.seek(f, 0, hmFS.SEEK_SET);
            hmFS.read(f, header.buffer, 0, 18);
            hmFS.close(f);
            const width = (header[13] << 8) + header[12];
            const height = (header[15] << 8) + header[14];
            //hmUI.showToast({ text: width + "x" + height });
            /*------------------------------
            | 显示界面                      |
            ------------------------------*/
            /*
            const fh_button = hmUI.createWidget(hmUI.widget.BUTTON, {
                x: 45,
                y: 408,
                w: 102,
                h: 72,
                press_color: 0x4f4f54,
                normal_color: 0x1e1e20,
                radius: 36,
                text: language_gb,
                text_size: 30,
                color: 0xffffff,
                click_func: () => hmApp.goBack()
            })
            */
            hmUI.createWidget(hmUI.widget.IMG, {
                x: (192 - width) / 2,
                y: (490 - height) / 2,
                src: path
            });
        }
    });
} catch (error) {
    Page({ build() { try { hmApp.goBack(); } catch (error) { }; } });
}
