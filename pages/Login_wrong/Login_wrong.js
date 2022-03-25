// pages/Login_wrong/Login_wrong.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:"",
    userNickname:"",
    userPassword:""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

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