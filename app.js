// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    this.globalData.id = wx.getStorageSync('bufferId')
    this.globalData.userName = wx.getStorageSync('bufferUserName')
    this.globalData.userGroup = wx.getStorageSync('bufferUserGroup')
    this.globalData.logged = wx.getStorageSync('bufferLogged')
    this.globalData.userNickname = wx.getStorageSync('bufferNickname')

    console.log("current id is " + this.globalData.id)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    PageNum: -1,
    UrlHead: "https://",
    domainPort: "www.tsingloo.com:4433",
    id: -1, 
    userName: "",
    userNickName: "",
    logged: false
  }
})