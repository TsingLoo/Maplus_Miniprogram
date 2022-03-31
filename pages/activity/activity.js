// pages/activity/activity.js
Page({

 
  data: {

  },


    /**
   * 这是活动主页面publish按钮绑定的bindtap事件
   */
  go_AC_upload() {
    wx.navigateTo({
      url: '/pages/AC_upload1/AC_upload1',
    })
  },

  go_1_Detail() {
    wx.navigateTo({
      url: '/pages/AC_detail/AC_detail',
    })
  }

})