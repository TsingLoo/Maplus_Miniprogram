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
    wx.showToast({
      title: '请先登录！',
      icon:'error',
      duration:1000
   }) 
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
    wx.showToast({
      title: '请先登录！',
      icon:'error',
      duration:1000
   }) 
  }else
  {
  wx.navigateTo({
    url: '/pages/change_NN/change_NN',
  })
  }
},

go_to_collection(){
  wx.navigateTo({
    url: '/pages/collection/collection',
  })
},

go_to_personal_activity(){
  wx.navigateTo({
    url: '/pages/personal_activity/personal_activity',
  })
}
})