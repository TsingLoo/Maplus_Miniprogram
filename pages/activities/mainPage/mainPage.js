//index.js

var util = require('../../../utils/util.js')
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


  // //事件处理函数
  // bindItemTap: function() {
  //   wx.navigateTo({
  //     url: '../answer/answer'
  //   })
  // },
  // bindQueTap: function() {
  //   wx.navigateTo({
  //     url: '../question/question'
  //   })
  // },
  // onLoad: function () {
  //   console.log('onLoad')
  //   var that = this
  //   //调用应用实例的方法获取全局数据
  //   this.getData();
  // },
  upper: function () {
   //现在是发布新活动的按钮。

   //导向活动发布页1
   wx.navigateTo({
    url: '/pages/AC_detail/AC_detail',
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
    //setTimeout(function(){wx.hideNavigationBarLoading();that.nextLoad();}, 1000);
    console.log("lower")
  },
  //scroll: function (e) {
  //  console.log("scroll")
  //},

  //网络请求数据, 实现首页刷新
  // refresh0: function(){
  //   var index_api = '';
  //   util.getData(index_api)
  //       .then(function(data){
  //         //this.setData({
  //         //
  //         //});
  //         console.log(data);
  //       });
  // },

  //使用本地 fake 数据实现刷新效果
  // getData: function(){
  //   var feed = util.getData2();
  //   console.log("loaddata");
  //   var feed_data = feed.data;
  //   this.setData({
  //     feed:feed_data,
  //     feed_length: feed_data.length
  //   });
  // },
  // refresh: function(){
  //   wx.showToast({
  //     title: '刷新中',
  //     icon: 'loading',
  //     duration: 3000
  //   });
  //   //var feed = util.getData2();
  //   console.log("loaddata");
  //   var feed_data = feed.data;
  //   this.setData({
  //     feed:feed_data,
  //     feed_length: feed_data.length
  //   });
  //   setTimeout(function(){
  //     wx.showToast({
  //       title: '刷新成功',
  //       icon: 'success',
  //       duration: 2000
  //     })
  //   },3000)

  // },

  // //使用本地 fake 数据实现继续加载效果
  // nextLoad: function(){
  //   wx.showToast({
  //     title: '加载中',
  //     icon: 'loading',
  //     duration: 4000
  //   })
  //   var next = util.getNext();
  //   console.log("continueload");
  //   var next_data = next.data;
  //   this.setData({
  //     feed: this.data.feed.concat(next_data),
  //     feed_length: this.data.feed_length + next_data.length
  //   });
  //   setTimeout(function(){
  //     wx.showToast({
  //       title: '加载成功',
  //       icon: 'success',
  //       duration: 2000
  //     })
  //   },3000)
  // },



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

  //使用本地 fake 数据实现刷新效果
  refresh: function(){
    let that = this
    //var feed = {}
    
    wx.request({
      url: 'http://localhost:8080/activity',
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


    console.log("hiashdoa ishjdal jsdlak jsldjka lsdkj alkjs")

    //console.log("this.data.trueFeed.data is "+  this.data.trueFeed.data)

    // var feed = util.getDiscovery();
    
    // var feed_data = feed.data;
    // console.log("feed_data is " + this.data.feed.data);
    
    // this.setData({
    //   feed:this.data.trueFeed.data,
    //   feed_length: this.data.trueFeed.data.length
    // });
  }


    //console.log("this.data.trueFeed.data is "+  this.data.trueFeed.data)

    // var feed = util.getDiscovery();
    
    // var feed_data = feed.data;
    // console.log("feed_data is " + this.data.feed.data);
    
    // this.setData({
    //   feed:this.data.trueFeed.data,
    //   feed_length: this.data.trueFeed.data.length
    // });
  }


)
