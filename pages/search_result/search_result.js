var app = getApp()

Page({
  data: {
    feed: [],
    feed_length: 0
  },

  onShow: function () {
    console.log('onLoad')
    this.getResult();
  },

  bindItemTap:function(e) {
    let activityID = {
      acid: e.currentTarget.dataset.activityid
    };
    wx.navigateTo({
      url: '/pages/DetailPage/DetailPage',
      success: res =>
      {
        res.eventChannel.emit('readActivityID',activityID)
      }
    }) 
  },

    getResult: function(){
    let that = this
    let content = require('../../pages/search_history/search_history.js')
    wx.request({
    url: 'https://www.tsingloo.com:4433/searchActivity/' + content.inputValue,
    method: 'GET',
    success:function(res)
    {
    console.log(res.data)
    that.setData({
    feed: res.data,
    feed_length: res.data.length
    })
    }
    })
    console.log("success")
    }
})