// pages/PS_L&R/PS_L&R.js
Page({
data: {
userName:"",
userNickname:"",
userPassword:"",
userNameStatus: "fine",
userNicknameStatus: "fine",
userPasswordStatus:"fine"
},

inputuserName:function(e){
  //获取用户输入的用户名
  this.setData({
    userName:e.detail.value
  })
  console.log("userName: " + this.data.userName)
  //检查用户名中是否含有特殊字符
  if(this.data.userName.length == 0)
  {
    this.setData({
      userNameStatus: ""
    })
  }else if(this.data.userName.length <= 12)
  {
    if(!this.alphanumeric(this.data.userName))
    {
    //如果有，那么报错
      this.setData({
        userNameStatus: "Invalid Character Detected"
      })
    }else
    {
    //如果没有，那么向服务器发起验重请求
      this.setData({
        userNameStatus: "Valid Username"
      })

      var that = this 
      wx.request({
        url: 'http://localhost:8080/userCheck',
        method: 'POST',
        data:
        { 
          userName:  this.data.userName
        },
        success:function(res)
        {
          //如果用户名重复
          if(res.data == (-1))
          {
            console.log("Valid UserName, Repeated Name"),
            that.setData({
              userNameStatus: "Reeated Username"
            })
          }else
          {
            console.log("Valid UserName,No repeat")
            that.setData({
              userNameStatus: "Valid UserName"
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

  // if(!this.alphanumeric(this.data.userName))
  // {
  //   //如果有，那么报错
  //   this.setData({
  //     userNameStatus: "Invalid Character Detected"
  //   })
  // }else
  // {
  //   //如果没有，那么向服务器发起验重请求
  //   this.setData({
  //     userNameStatus: "Valid Username"
  //   })

  //   var that = this 
  //   wx.request({
  //     url: 'http://localhost:8080/userCheck',
  //     method: 'POST',
  //     data:
  //     {
  //       userName:  this.data.userName
  //     },
  //     success:function(res)
  //     {
  //       //如果用户名重复
  //       if(res.data == (-1))
  //       {
  //         console.log("Valid UserName, Repeated Name"),
  //         that.setData({
      
  //           userNameStatus: "Reeated Username"
  //         })
  //       }else
  //       {
  //         console.log("Valid UserName,No repeat")
  //         that.setData({
  //           userNameStatus: "Valid UserName"
  //         })
  //       }
      
  //     }
  //   })
  // }

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


// contain:function(str,charset){undefined

//   var i;
//   for(i=0; i<charset.length; i++)
//     if(str.indexOf(charset.charAt(i))>=0)
//   return true;
// },

  
// CheckForm:function(str){undefined
//   if(this.contain(str," ^[^!@#$%^&*.()-=+]+$ ")){undefined
//     //非法
//       console.log("对不起!\n您输入的是非法字符!请重新输入!");
//     return false;
//   }else{undefined
//       //合法
//       console.log("恭喜您!\n输入的字符合法!");
//     return true;
//   }
// },



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
