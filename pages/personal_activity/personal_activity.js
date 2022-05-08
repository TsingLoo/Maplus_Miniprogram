var app = getApp()

Page({

  data: {
    feed: [],
    feed_length: 0
  },

  onLoad: function () {
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
    app.globalData.PageNum = e.currentTarget.dataset.activityid
    wx.navigateTo({
      url: '/pages/DetailPage/DetailPage',
      success: res =>
      {
        res.eventChannel.emit('readActivityID',activityID)
      }
    }) 
  },

  //使用本地 fake 数据实现刷新效果
  refresh: function(){
    let that = this
    
    wx.request({
      url: app.globalData.UrlHead+ app.globalData.domainPort +'/registerActivity/' + app.globalData.userName,
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




