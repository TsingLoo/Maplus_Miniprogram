// pages/change_NN/change_NN.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:"",
    userNickname:"",
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
    

      submit:function(){
        console.log(this.data.userName+"" +this.data.userNickname);
        
        wx.request({
        url: 'http://127.0.0.1:8080/createActivity',
        method: 'post',
        data:{
        userName:this.data.userName, 
        userNickname:this.data.userNickname,
        },
        
        success:(res)=>{
          console.log(res.data);
        },
        fail:(res)=>{
        }
        
        })
        
        }
})