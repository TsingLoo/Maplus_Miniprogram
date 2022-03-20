// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    "clubName":"basketball club",
    "publisher":"Zheqi li",
    "beginTime": "2022_03_19 10:00:00",
    "endTime":"2022_03_19 14:00:00",
    "activityTitle":"basketball match",
    "activityDesc": "This is a sport activity",
    "building":"CB",
    "room":"G13W",
    "estimateNum":100,
    "targetPeople":"XJTLU student",
    "registryNum":0,
    "hot":0
  }
})
