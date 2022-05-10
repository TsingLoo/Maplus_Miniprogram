const app = getApp();

Page({
  data: {
    userName:"",
    userPassword:""
  },

inputuserName:function(e){
  this.setData({
    userName:e.detail.value
  })
  console.log("userName: " + this.data.userName)
},

inputuserNickname:function(e){
  this.setData({
    userNickname:e.detail.value
  })
  console.log("userNickname: " + this.data.userNickname)
},

inputuserPassword:function(e){
  this.setData({
    userPassword:e.detail.value
  })
    console.log("userPassword: " + this.data.userPassword)
  },

login:function(){
  



  var that = this
  that.setData({
    requestUrl: app.globalData.UrlHead+ app.globalData.domainPort +"/login/" + that.data.userName +"/" + that.data.userPassword
  })
  wx.request({
    url: that.data.requestUrl,
    method: 'POST',
    success:function(res)
    {
      console.log(res.data);
      if(res.data[0] == -1)
      {
        wx.showToast({
          title: '昵称密码不匹配',
          icon:'error',
          duration:1000
        }) 
      }else
      {
        wx.showToast({
          title: '登录成功',
          icon:'success',
          duration:1000,
          success: function()
          {
            setTimeout(() => {
              wx.navigateTo({
                url: '/pages/personal2/personal2',
              })
            }, 1000);
          }
          
        }) 

      

        wx.setStorageSync('bufferUserName', that.data.userName)
        wx.setStorageSync('bufferId', res.data[0])
        wx.setStorageSync('bufferUserGroup', res.data[1])
        wx.setStorageSync('bufferLogged', true)

        // wx.setStorage({
        //   bufferUserName: that.data.userName,
        //   bufferId: res.data[0],
        //   bufferUserGroup: res.data[1],
        //   bufferLogged : true
        // })
        console.log("Login Correct!" + res.data)
        app.globalData.userName = that.data.userName
        app.globalData.id = res.data[0]
        app.globalData.userGroup = res.data[1]
        app.globalData.logged = true
      }
      
    },
  

  })
}

})
