var util = require('../../../utils/util.js')
var app = getApp()
Page({
  data: {
  activityId:'',
  articleTitle:'',
  activityDesc:'',
  hot:'',
  },

  upper: function () {
   //点击笔图标发布新活动
   wx.navigateTo({
    url: '/pages/AC_detail/AC_detail',
  })
  },

  get: function () {
    var that = this;
    wx.request({
    url:'//localhost:8080/activity',
    method:'GET',
    success: function(res) {
    var articleTitle = res.data.titValue;
    var activityDesc = res.data.activityDescValue;
    this.data.titValue = articleTitle;
    this.data.activityDescValue = activityDesc;
    }
    })

   wx.request({
   url: '//localhost:8080/addHot/{id}',
   method:'GET',
   success: function(res){
   var hot = res.data.hot;
   this.data.hot = hot;
   }
   })

  }
  
})