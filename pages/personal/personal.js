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
   setTimeout(function () { 
    wx.showModal({
      title: '请先登录',
      content: '是否立即登录？',
      showCancel: true,
      cancelText:"否",
      cancelColor:'skyblue',
      confirmText:"是",
      confirmColor: 'skyblue',
      success: function (res) {
       if (res.cancel) {
       } else {
        wx.navigateTo({
        url: '/pages/PS_2L/PS_L',
        })}
      }
    })}, 1050)
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
   setTimeout(function () { 
    wx.showModal({
      title: '请先登录',
      content: '是否立即登录？',
      showCancel: true,
      cancelText:"否",
      cancelColor:'skyblue',
      confirmText:"是",
      confirmColor: 'skyblue',
      success: function (res) {
       if (res.cancel) {
       } else {
        wx.navigateTo({
        url: '/pages/PS_2L/PS_L',
        })}
      }
    })}, 1050)
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
    wx.showToast({
      title: '请先登录！',
      icon:'error',
      duration:1000
   }) 
   setTimeout(function () { 
    wx.showModal({
      title: '请先登录',
      content: '是否立即登录？',
      showCancel: true,
      cancelText:"否",
      cancelColor:'skyblue',
      confirmText:"是",
      confirmColor: 'skyblue',
      success: function (res) {
       if (res.cancel) {
       } else {
        wx.navigateTo({
        url: '/pages/PS_2L/PS_L',
        })}
      }
    })}, 1050)
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
    wx.showToast({
      title: '请先登录！',
      icon:'error',
      duration:1000
   })
   setTimeout(function () { 
    wx.showModal({
      title: '请先登录',
      content: '是否立即登录？',
      showCancel: true,
      cancelText:"否",
      cancelColor:'skyblue',
      confirmText:"是",
      confirmColor: 'skyblue',
      success: function (res) {
       if (res.cancel) {
       } else {
        wx.navigateTo({
        url: '/pages/PS_2L/PS_L',
        })}
      }
    })}, 1050)    
  }else
  {
  wx.navigateTo({
    url: '/pages/personal_activity/personal_activity',
  })
}
}
})


