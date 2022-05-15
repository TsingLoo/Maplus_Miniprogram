const util = require("../../utils/util");
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
   if(app.globalData.logged == false){
    util.notLog();
  }
  console.log(app.globalData.userGroup);
  if(app.globalData.userGroup == 1){
    wx.showToast({
      title: '无发布权限',
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
    // let activityID = {
    //   acid: e.currentTarget.dataset.activityid
    // };
    app.globalData.PageNum = e.currentTarget.dataset.activityid
    wx.navigateTo({
      url: '/pages/DetailPage/DetailPage',
      // success: res =>
      // {
      //   res.eventChannel.emit('readActivityID',activityID)
      // }
    }) 
  },

  compare: function(hot)
  {
    return function(a,b)
    {
      let value1 = a[hot];
      let value2 = b[hot];

      return value1 - value2;

    }
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
            feed: res.data.sort(util.compare("hot")),
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
