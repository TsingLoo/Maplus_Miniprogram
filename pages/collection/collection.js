// pages/collection/collection.js
var app = getApp()

Page({

  data: {
    feed: [],
    feed_length: 0
  },

  onShow: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    this.refresh();
  },

  bindItemTap:function(e) {
    //console.log(e.currentTarget.dataset.activityid),
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

  refresh: function(){
    let that = this
    
    wx.request({

      url: app.globalData.UrlHead+ app.globalData.domainPort +'/Staractivity/' + app.globalData.userName,

      method: 'GET',
      success:function(res)
      {
        console.log(res.data)
        that.setData(
          {
            feed: res.data,
            feed_length: res.data.length
          }
        )
      }
    })

    console.log("success")

  },
})
