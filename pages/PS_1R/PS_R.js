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

  wx.request({
    url: 'http://localhost:8080/userCheck',
    method: 'POST',
    data:
    {
      userName:  this.data.userName
    },
    success:function(res)
    {
      console.log(res.data);
    }
  })



},
  
CheckForm:function(){undefined
 

 if(contain(oContain.value," ^[^!@#$%^&*.()-=+]+$ ")){undefined
    //非法
 alert("对不起!\n您输入的是非法字符!请重新输入!");
  return false;
}else{undefined
 //合法
 alert("恭喜您!\n输入的字符合法!");
  return true;

}

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
var a = this.data.userName;
var b = this.data.userNickname;
var c = this.data.userPassword;
if(a == '' || b == '' || c == ''){
wx.showToast({
title: '信息不得为空！',
icon:'error',
duration:1000
}) 
}
// wx.request({
// url: 'http://localhost:8080/userRegister',
// method: 'post',
// data:{
// userName:this.data.userName, 
// userNickname:this.data.userNickname,
// userPassword:this.data.userPassword
// },
// })
// wx.request({
// url: 'http://localhost:8080/userRegister',
// method: 'get',
// })
// var a = this.data.request;
// if(a == true){
// wx.showToast({
// title: '注册成功！',
// icon:'success',
// duration:1000
// })
// }else if( a == false){
// wx.showToast({
// title: '该用户名已存在！',
// icon:'error',
// duration:1000
// })
// } 
}
})
