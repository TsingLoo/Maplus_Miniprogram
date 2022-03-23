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
        console.log(this.data.userName+"" +this.data.userNickname+""+this.data.userPassword);
        
        wx.request({
        url: 'http://127.0.0.1:8080/createActivity',
        method: 'post',
        data:{
        userName:this.data.userName, 
        userNickname:this.data.userNickname,
        userPassword:this.data.userPassword
        },
        
        success:(res)=>{
          console.log(res.data);
        },
        fail:(res)=>{
        }
        
        })
        
        }
        })
