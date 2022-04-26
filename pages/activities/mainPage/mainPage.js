var app = getApp()
Page({
  data: {
    feed: [],
    feed_length: 0
  },

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
  }else{
   wx.navigateTo({
    url: '/pages/AC_detail/AC_detail',
  })}},

  lower: function (e) {
    wx.showNavigationBarLoading();
    var that = this;
    //setTimeout(function(){wx.hideNavigationBarLoading();that.nextLoad();}, 1000);
    console.log("lower")
  },
  
bindItemTap:function(e) {
    //console.log(e.currentTarget.dataset.activityid),
    console.log("aaaaa");
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

  //使用本地 fake 数据实现刷新效果
  refresh: function(){
    let that = this
    //var feed = {}
    
    wx.request({

      url: 'http://' + app.globalData.domainPort + '/activity',

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
  }
  }
)

