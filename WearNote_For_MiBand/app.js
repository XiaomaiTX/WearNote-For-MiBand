App({
  globalData: {
    ifBack :'false',
    keyboard_x:16,
    keyboard_y:240,
    },
  onCreate(options) {
    console.log('app on create invoke')
  },

  onShow(options) {
    console.log('app on show invoke')
  },

  onHide(options) {
    console.log('app on hide invoke')
  },

  onDestroy(options) {
    console.log('app on destroy invoke')
  },

  onError(error) {
    console.log('app on error invoke')
  },

  onPageNotFound(obj) {
    console.log('app on page not found invoke')
  },

  onUnhandledRejection(obj) {
    console.log('app on un handle rejection invoke')
  }
})