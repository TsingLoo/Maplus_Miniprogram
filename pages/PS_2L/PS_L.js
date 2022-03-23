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

login(){
console.log(this.data.userName+"" +this.data.userNickname+""+this.data.userPassword);
}

})