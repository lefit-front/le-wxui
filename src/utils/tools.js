let tools = {}

/**
 * 设置标题
 * @param {String} str 页面标题
 */
tools.setTitle = (str) => {
  if (str) {
    wx.setNavigationBarTitle({
      title: str
    })
  }
}
/**
 * toast
 * @param {String} str toast内容
 * @param {String} icon toastIcon
 * @param {String} time toast显示时间
 */
tools.toast = (str, icon = 'none', time = 2000) => {
  wx.showToast({
    title: str,
    icon: icon,
    duration: time
  })
}
/**
 * alert
 * @param {Object} obj showModal对象
 */
tools.alert = (obj) => {
  return new Promise((resolve) => {
    wx.showModal({
      title: obj.title || '提示',
      content: obj.content,
      confirmColor: obj.confirmColor || '#ff4e00',
      cancelColor: obj.cancelColor || '#333',
      confirmText: obj.confirmText || '取消',
      cancelText: obj.cancelText || '取消',
      showCancel: obj.showCancel || false,
      success: (res) => {
        if (res.confirm) {
          resolve(true)
          console.log('用户点击确定')
        } else if (res.cancel) {
          resolve(false)
          console.log('用户点击取消')
        }
      }
    })
  })
}
