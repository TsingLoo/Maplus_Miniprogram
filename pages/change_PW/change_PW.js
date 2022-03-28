const app = getApp();
Page({


data: {
  userPassword:"",
  newPassword:"",
  newPassword2:"",
  newPasswordStatus:"",
  newPassword2Status:""
},

inputuserPassword:function(event){
  this.setData({
    userPassword:event.detail.value
  })

  console.log(app.globalData.id)
  console.log("userPassword: " + this.data.userPassword)
},
  
inputnewPassword:function(event){
  this.setData({
    newPassword:event.detail.value
  })

  if(this.data.newPassword.length == 0)
  {
    this.setData({
      newPasswordStatus:"",
      //newPasswordCheck:fals
    })
  }else if(0<this.data.newPassword.length && this.data.newPassword.length <=12)
  {
    this.setData({
      newPasswordStatus:"Sound Password",
      //newPasswordCheck:true
    })
  }else
  {
    this.setData({
      newPasswordStatus:"Only 12 characters is allowed",
      //userPasswordCheck:false
    })
  }
  console.log("newPassword: " + this.data.newPassword)
},

inputnewPassword2:function(event){
  this.setData({
    newPassword2:event.detail.value
  })
  console.log("newPassword2: " + this.data.newPassword2)
  if(this.data.newPassword == this.data.newPassword2)
  {
    this.setData({
      newPassword2Status: "Check"      
    })
  }else
  {
    this.setData({
      newPassword2Status:"Plz retype in the new password"      
    })
  }
},

submit:function(event){     
var old = this.data.userPassword;
var new1 = this.data.newPassword;
var new2 = this.data.newPassword2;
console.log(event)
if(old == '' || new1 == '' || new2 == ''){
wx.showToast({
title: '密码不能为空！',
icon:'error',
duration:1000
})
}else if(old == new1){
  wx.showToast({
  title: '新旧密码一致！',
  icon:'error',
  duration:1000
  })
}else if(new1 != new2){
wx.showToast({
title: '两次密码不一致！',
icon:'error',
duration:1000
})
}else{
wx.request({
url: 'http://localhost:8080/changePsw',
method: 'post',
data:{
userPassword:this.data.newPassword,
}
})
wx.request({
url: 'http://localhost:8080/changePsw',
method: 'get',
}) 
var a = this.data.request;
if(a == true){
wx.showToast({
title: '修改成功！',
icon:'success',
duration:1000
})
}else if(a == false){
wx.showToast({
title: '异常请重试！',
icon:'error',
duration:1000
})
}
}
}
})
