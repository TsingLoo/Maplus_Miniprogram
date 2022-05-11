const util = require("../../utils/util")
const app = getApp()

Page({

  data:{

  },

  go_to_PS_L(){
    wx.navigateTo({
      url: '/pages/PS_2L/PS_L',
    })
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

logout: function()
{
  if(app.globalData.logged == false)
  {
   util.notLog();
  }else
  {
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