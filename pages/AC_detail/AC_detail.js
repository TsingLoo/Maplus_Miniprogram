// pages/AC_detail/AC_detail.js
Page({
  data:{
      clubName: null,
      publisher: null,
      beginTime: null,
      endTime: null,
      endTime: null,
      activityTitle:null,
      activityDesc:null,
      building:null,
      room:null,
      estimateNum:0,
      targetPeople:null,
      registryNum:0,
      hot:0,
  },

  go_to_revise1 (){
    wx.navigateTo({
      url: '/pages/revise1/revise1',
    })
  }
})