const app = getApp();
Page({
data: {
userPassword:"",
newPassword:"",
newPassword2:""
},

inputuserPassword:function(event){
this.setData({
userPassword:event.detail.value
})
console.log("userPassword: " + this.data.userPassword)
},
  
inputnewPassword:function(event){
this.setData({
newPassword:event.detail.value
})
console.log("newPassword: " + this.data.newPassword)
},

inputnewPassword2:function(event){
this.setData({
newPassword2:event.detail.value
})
console.log("newPassword2: " + this.data.newPassword2)
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
