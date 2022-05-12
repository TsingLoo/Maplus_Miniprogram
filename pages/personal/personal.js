const util = require("../../utils/util")
const app = getApp()

Page({

  data:{
    condition:"登录"
  },
  onShow:function () {
    
      if(app.globalData.logged == true){
        this.setData({
          condition:"注销"
        })
      }
   
  },


  go_to_PS_L() {
    

    if (app.globalData.logged == false){


      wx.navigateTo({
        url: '/pages/PS_2L/PS_L',
      })
    }else{
      wx.showToast({
        title: '已注销',
        icon:'success',
        duration:1000
      })
      this.setData({
        condition:"登录"
      })
      wx.setStorageSync('bufferUserName', "")
      wx.setStorageSync('bufferId', -1)
      wx.setStorageSync('bufferUserGroup', 0)
      wx.setStorageSync('bufferLogged', false)
      app.globalData.userName = ""
      app.globalData.id = -1
      app.globalData.userGroup = 0
      app.globalData.logged = false
    }


 
  },

go_to_PS_R(){
  wx.navigateTo({
    url: '/pages/PS_1R/PS_R',
  })
},

go_to_change_PW(){

  if(app.globalData.logged == false)
  {
    util.notLog();
  }else
  {
    wx.navigateTo({
      url: '/pages/change_PW/change_PW',
    })
  }

},


go_to_change_NN(){

  if(app.globalData.logged == false)
  {
    util.notLog();
  }else
  {
  wx.navigateTo({
    url: '/pages/change_NN/change_NN',
  })
  }
},

go_to_collection(){
  if(app.globalData.logged == false)
  {
   util.notLog();
  }else
  {
    wx.navigateTo({
      url: '/pages/collection/collection',
    })
  }
},



go_to_personal_activity(){
  if(app.globalData.logged == false)
  {
    util.notLog();
  }else
  {
  wx.navigateTo({
    url: '/pages/personal_activity/personal_activity',
  })
}
}



})