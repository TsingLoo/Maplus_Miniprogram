let app = getApp();

// pages/AC_upload2/AC_upload2.js
Page({
  data: {

  },

  onLoad:function(option)
  {
    
    let eventChannel = this.getOpenerEventChannel()
    eventChannel.on('page1to2',(info1) =>
    {
      this.setData({  
      	info1: info1 || {},
      })
    })
    let arr = JSON.parse(this.data.info1)
    console.log(arr)
  },
  
  go_to_AC_upload3(){
    wx.navigateTo({
      url: '/pages/AC_upload3/AC_upload3',
     
    })
  }
})