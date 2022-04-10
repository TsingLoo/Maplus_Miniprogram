var util = require('../../utils/util.js')
var app = getApp()

Page({
  data: {
    activityId:'',
    articleTitle:'',
    activityDesc:'',
    hot:'',
    },

    get: function () {
      var that = this;
      wx.request({
      url:'//localhost:8080/registerActivity/{username}',
      method:'GET',
      success: function(res) {
      var articleTitle = res.data.titValue;
      var activityDesc = res.data.activityDescValue;
      this.data.titValue = articleTitle;
      this.data.activityDescValue = activityDesc;
      }
      })
  
     wx.request({
     url: '//localhost:8080/registerActivity/{username}',
     method:'GET',
     success: function(res){
     var hot = res.data.hot;
     this.data.hot = hot;
     }
     })
  
    }


})