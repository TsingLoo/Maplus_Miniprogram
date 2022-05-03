const app = getApp();
// pages/PS_L&R/PS_L&R.js
Page({
data: {
  userName:"",
  userNickname:"",
  userPassword:"",
  userNameStatus: "",
  userNicknameStatus: "",
  userPasswordStatus:"",
  userNameCheck: false,
  userNicknameCheck: false,
  userPasswordCheck: false
},

inputuserName:function(e){
  //获取用户输入的用户名
  this.setData({
    userName:e.detail.value,
    userNameCheck: false
  })
  console.log("userName: " + this.data.userName)
  //如果用户没有输入字符，等待输入
  if(this.data.userName.length == 0)
  {
    this.setData({
      userNameStatus: ""
    })
    
    //如果用户输入的字符在12个字符以内，执行检验的逻辑
  }else if(this.data.userName.length <= 12)
  {
    //判断字符串是否只由英文和数字构成
    if(!this.alphanumeric(this.data.userName))
    {
    //如果不是报错
      this.setData({
        userNameStatus: "Invalid Character Detected"
      })
    }else
    {
    //如果是，那么向服务器发起验重请求
      this.setData({
        userNameStatus: "Valid UserName,waiting for check",
        requestUrl :  app.globalData.UrlHead+ app.globalData.domainPort +'/userCheck/' + this.data.userName
      })
      //发起验重请求
      var that = this
  
      console.log(this.data.requestUrl)
      wx.request({
        url: this.data.requestUrl,
        method: 'POST',
        success:function(res)
        {
          console.log(res.data)
          //如果用户名重复
          if(res.data == (-1))
          {
            console.log("Valid UserName, Repeated Name"),
            that.setData({
              userNameStatus: "Repeated Username"
              
            })
          }else
          {
            //如果用户名没有重复，userName检验完成
            console.log("Valid UserName,No repeat")
            that.setData({
              userNameStatus: "Valid UserName",
              userNameCheck: true
            })
          }
        }
      })
    }
  }else
  {
    this.setData({
      userNameStatus: "Only 12 characters is allowed"
    })
  }
},

alphanumeric:function(str)
{
  var letterNumber = /^[0-9a-zA-Z]+$/
  if(str.match(letterNumber))
  {
   return true;
  }
else
  { 
   return false; 
  }
},

inputuserNickname:function(e){
  this.setData({
    userNickname:e.detail.value,
    userNicknameCheck:false
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
    
inputuserPassword:function(e){
  this.setData({
    userPassword:e.detail.value,
    userPasswordCheck:false
  })
  console.log("userPassword: " + this.data.userPassword)

  if(this.data.userPassword.length == 0)
  {
    this.setData({
      userPasswordStatus:"",
      userPasswordCheck:false
    })
  }else if(0<this.data.userPassword.length && this.data.userPassword.length <=12)
  {
    this.setData({
      userPasswordStatus:"Sound Password",
      userPasswordCheck:true
    })
  }else
  {
    this.setData({
      userPasswordStatus:"Only 12 characters is allowed",
      userPasswordCheck:false
    })
  }
},

submit:function(){
  console.log(this.data.userNameCheck)
  console.log(this.data.userNicknameCheck)
  console.log(this.data.userPasswordCheck)

  if(this.data.userNameCheck&&this.data.userNicknameCheck&&this.data.userPasswordCheck)
  {
    var that = this
    wx.request({
      url: app.globalData.UrlHead+ app.globalData.domainPort +'/userRegister',
      method:'POST',
      data:{
        userName: this.data.userName,
        userNickname: this.data.userNickname,
        userPassword: this.data.userPassword
      },
      success:function(res)
      {
        app.globalData.id = res.data
        app.globalData.userName = that.data.userName
        app.globalData.logged = true
        console.log("Regist success, my id is" +res.data)
      },
      fail:function(res)
      {
        console.log("Failed to regist")
      }
      
    })
  }else
  {
    wx.showToast({
       title: '注册信息有误！',
       icon:'error',
       duration:1000
    }) 
  }
}
})
