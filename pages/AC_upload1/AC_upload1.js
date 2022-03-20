// pages/AC_upload1/AC_upload1.js
Page({

  data: {
    
  },

  getInput:function(event)
  {
    console.log(event.data)
  },
  
  

  go_to_AC_upload2(event){
    wx.navigateTo({
      url:'/pages/AC_upload2/AC_upload2',
    })
  }
})