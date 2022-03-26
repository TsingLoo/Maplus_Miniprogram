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
  wx.navigateTo({
    url: '/pages/change_PW/change_PW',
  })
},

go_to_change_NN(){
  wx.navigateTo({
    url: '/pages/change_NN/change_NN',
  })
}
})