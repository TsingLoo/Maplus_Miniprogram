// pages/change_PW_wrong/change_PW_wrong.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:"",
    userPassword:"",
    newPassword:""
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

  /**
   * 以下是模仿的逻辑
   */

  inputuserName:function(e){
    this.setData({
    userName:e.detail.value
    })
    console.log("userName: " + this.data.userName)
    },
    
    inputuserPassword:function(e){
    this.setData({
    userPassword:e.detail.value
    })
    console.log("userPassword: " + this.data.userPassword)
    },
    
    inputnewPassword:function(e){
      this.setData({
      newPassword:e.detail.value
      })
      console.log("newPassword: " + this.data.newPassword)
      },

      submit:function(){
        console.log(this.data.userName+"" +this.data.userPassword+""+this.data.newPassword);
        
        wx.request({
        url: 'http://127.0.0.1:8080/createActivity',
        method: 'post',
        data:{
        userName:this.data.userName, 
        userPassword:this.data.userPassword,
        newPassword:this.data.newPassword
        },
        
        success:(res)=>{
          console.log(res.data);
        },
        fail:(res)=>{
        }
        
        })
        
        }
})