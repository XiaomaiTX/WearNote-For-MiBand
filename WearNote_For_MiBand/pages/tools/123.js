import { gettext } from 'i18n';

Page({
    build() {
        hmApp.startApp({
            appid: 49897,
            url: 'pages/tools/AppUnlockPage',
            param: hmApp.packageInfo().appId.toString()
        })
    }
})