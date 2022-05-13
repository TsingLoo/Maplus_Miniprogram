var app = getApp()

Page({
  data: {
    feed: [],
    feed_length: 0
  },

  onShow: function () {
    console.log('onLoad')
    this.setData({
      feed: app.globalData.searchresult,
      feed_length: app.globalData.searchresult.length
    })
  },

  bindItemTap:function(e) {
    let activityID = {
      acid: e.currentTarget.dataset.activityid
    };
    app.globalData.PageNum = e.currentTarget.dataset.activityid
    wx.navigateTo({
      url: '/pages/DetailPage/DetailPage',
    }) 
  },

  // getResult: function(){ 
  //   let that = this
  //   let content = require('../../pages/search_history/search_history.js')
  //   wx.request({
  //   url: app.globalData.UrlHead + app.globalData.domainPort +  '/searchActivity/' + content.inputValue,
  //   method: 'GET',
  //   success:function(res)
  //   {
  //     console.log("This is from search_result page" )
  //     console.log(app.globalData.searchresult)
  //     console.log("This is from search_result page bottom")

  //     that.setData({
  //       feed: app.globalData.searchresult,
  //       feed_length: app.globalData.searchresult.length
  //     })
  //   }
  //   })
  //   console.log("success")
  //   }
})