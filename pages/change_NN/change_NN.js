const app = getApp();
Page({
data:{
userNickname:"",
},
    
inputuserNickname:function(e){
this.setData({
userNickname:e.detail.value
})
console.log("userNickname: " + this.data.userNickname)
},

submit:function(){
wx.request({
url: 'http://localhost:8080/changeNickname',
method: 'post',
data:{
userNickname:this.data.userNickname,
},
})
wx.request({
  url: 'http://localhost:8080/changeNickname',
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
},
})