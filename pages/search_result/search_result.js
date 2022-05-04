var app = getApp()

Page({

  data: {
    feed: [],
    feed_length: 0
  },

  onShow: function () {
    console.log('onLoad')
    this.refresh();
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
    wx.request({
    url: 'http://' + app.globalData.domainPort + '/searchActivity' + app.globalData.content,
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