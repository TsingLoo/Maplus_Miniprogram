const app = getApp();
Page({
  data:{
    userNickname:"",
    userNicknameStatus:""
  },
    
inputuserNickname:function(e){
  this.setData({
    userNickname:e.detail.value
  })
  console.log("userNickname: " + this.data.userNickname)

  if(this.data.userNickname.length == 0)
  {
    this.setData({
      userNicknameStatus:"",
      userNicknameCheck:false
    })
  }else if(0<this.data.userNickname.length && this.data.userNickname.length <=12)
  {
    this.setData({
      userNicknameStatus:"Sound Nickname",
      userNicknameCheck:true
    })
  }else
  {
    this.setData({
      userNicknameStatus:"Only 12 characters is allowed",
      userNicknameCheck:false
    })
  }



},

submit:function(){
  var N = this.data.userNickname;
  if(N == ''){
    wx.showToast({
      title: '昵称不得为空！',
      icon:'error',
      duration:1000
    }) 
  }

  this.setData({
    requestUrl: 'http://' + app.globalData.domainPort + '/changeNickname/' + app.globalData.userName + '/' + this.data.userNickname
  })


  var that = this

  wx.request({
    url: that.data.requestUrl,
    method: 'post',
    success:function(res)
    {
      if(res.data == true)
      {
        console.log("Nickname Changed")
      }else
      {
        wx.showToast({
          title: '异常请重试！',
          icon:'error',
          duration:1000
        })
      }
    }
  })
},
})