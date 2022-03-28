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
  wx.request({
    url: 'http://localhost:8080/login',
    method: 'POST',
    data:{
      userName:this.data.userName, 
      userPassword:this.data.userPassword
    },
    success:function(res)
    {
      if(res.data == false)
      {
        wx.showToast({
          title: '昵称密码不匹配',
          icon:'error',
          duration:1000
        }) 
      }else
      {
        console.log("Login Correct!")
      }
      
    },
  

  })
}

})
