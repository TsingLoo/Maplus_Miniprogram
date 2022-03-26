// pages/PS_L&R/PS_L&R.js
Page({
data: {
userName:"",
userNickname:"",
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

submit:function(){
wx.request({
url: 'http://localhost:8080/userRegister',
method: 'post',
data:{
userName:this.data.userName, 
userNickname:this.data.userNickname,
userPassword:this.data.userPassword
},
})
wx.request({
url: 'http://localhost:8080/userRegister',
method: 'get',
})
var a = this.data.request;
if(a == true){
wx.showToast({
title: '注册成功！',
icon:'success',
duration:1000
})
}else if( a == false){
wx.showToast({
title: '该用户名已存在！',
icon:'error',
duration:1000
})
} 
}
})
