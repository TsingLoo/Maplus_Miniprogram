// pages/collection/collection.js
var util = require('../../../utils/util.js')
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    feed: [],
    feed_length: 0

  },

  upper: function () {
    //现在是发布新活动的按钮。
 
    //导向活动发布页1
    wx.navigateTo({
     url: '/pages/AC_upload1/AC_upload1',
   })
 
 
   
    
    
    
     //原用于刷新
     // wx.showNavigationBarLoading()
     // this.refresh();
     // console.log("upper");
     // setTimeout(function(){wx.hideNavigationBarLoading();wx.stopPullDownRefresh();}, 2000);
   },
   lower: function (e) {
     wx.showNavigationBarLoading();
     var that = this;
     setTimeout(function(){wx.hideNavigationBarLoading();that.nextLoad();}, 1000);
     console.log("lower")
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    this.refresh();
  },



  bindItemTap:function() {
    wx.navigateTo({
      url: '/pages/AC_detail/AC_detail',
    }) 
  },

   //使用本地 fake 数据实现刷新效果
  refresh: function(){
    var feed = util.getDiscovery();
    console.log("loaddata");
    var feed_data = feed.data;
    this.setData({
      feed:feed_data,
      feed_length: feed_data.length
    });
  },

  //使用本地 fake 数据实现继续加载效果
  nextLoad: function(){
    var next = util.discoveryNext();
    console.log("continueload");
    var next_data = next.data;
    this.setData({
      feed: this.data.feed.concat(next_data),
      feed_length: this.data.feed_length + next_data.length
    });
  }

  


})