const app = getApp();
Page({


data: {
  userPassword:"",
  newPassword:"",
  newPassword2:"",
  newPasswordStatus:"",
  newPassword2Status:"",
  check:false
},

inputuserPassword:function(event){
  this.setData({
    userPassword:event.detail.value
  })

  //console.log(app.globalData.id)
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
    newPassword2:event.detail.value,
    check:false
  })
  console.log("newPassword2: " + this.data.newPassword2)
  if(this.data.newPassword == this.data.newPassword2)
  {
    this.setData({
      newPassword2Status: "Check",      
      check: true
    })
  }else
  {
    this.setData({
      newPassword2Status:"Plz retype in the new password"      
    })
  }
},

submit:function(event){     

  if(this.data.check == false)
  {
    wx.showToast({
      title: '重复密码错误',
      icon:'error',
      duration:1000
    })
  }else
  {
    this.setData({
      requestUrl:"http://" + app.globalData.domainPort + "/changePsw/" + app.globalData.userName +"/" + this.data.userPassword +"/" +this.data.newPassword
    })

    console.log(this.data.requestUrl)
    wx.request({
      url: this.data.requestUrl,
      method:'POST',
      success(res)
      {
        if(res.data == true)
        {
          console.log(res.data)
          console.log("修改成功")
        }else
        {
          wx.showToast({
            title: '原密码错误',
            icon:'error',
            duration:1000
          })
        }
      },
      fail:function(res)
      {
        console.log("Failed" + res.data)
      }
      
    })
  }

}

})
