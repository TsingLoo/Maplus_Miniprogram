var app = getApp()
Page({
  feed: [],
  feed_length: 0,

  onShow: function () {
    console.log('onShow')
    var that = this

    this.refresh();
  },


  upper: function () {
   //现在是发布新活动的按钮。
   //导向活动发布页1
   if(app.globalData.logged == false)  {
    wx.showToast({
      title: '请先登录！',
      icon:'error',
      duration:1000
   })
   setTimeout(function () { 
    wx.showModal({
      title: '请先登录',
      content: '是否立即登录？',
      showCancel: true,
      cancelText:"否",
      cancelColor:'skyblue',
      confirmText:"是",
      confirmColor: 'skyblue',
      success: function (res) {
       if (res.cancel) {
       } else {
        wx.navigateTo({
        url: '/pages/PS_2L/PS_L',
        })}
      }
    })}, 1050)
  }
  console.log(app.globalData.userGroup);
  if(app.globalData.userGroup == 1){
    wx.showToast({
      title: '此账号没有发布权限',
      icon:'error',
      duration:1000
   })
  }
  if(app.globalData.userGroup == 2 || app.globalData.userGroup == 3){
   wx.navigateTo({
    url: '/pages/AC_detail/AC_detail',
  })
}
},

  lower: function (e) {
    wx.showNavigationBarLoading();
    var that = this;
    //setTimeout(function(){wx.hideNavigationBarLoading();that.nextLoad();}, 1000);
    console.log("lower")
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
    //var feed = {}
    
    wx.request({

      url: app.globalData.UrlHead + app.globalData.domainPort + '/activity',

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
        //console.log("that.data.trueFeed.data is " + that.data.trueFeed.data)
      }
    })
  },

  go_to_search:function(){
    wx.navigateTo({
      url: '/pages/search_history/search_history',
    })
  }
  })
