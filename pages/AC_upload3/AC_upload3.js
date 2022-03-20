// pages/AC_upload3/AC_upload3.js
Page({

  
  data: {

  },

  createActivity:function(event)
  {
    console.log("A new activity pulished!")


    wx.request({
      url: 'http://127.0.0.1:8080/createActivity',
      method: 'post',
      data:
      {
        "clubName":"t31234 xcasd",
        "publisher":"xiaonan.pan",
        "beginTime": "2022_03_19 10:00:00",
        "endTime":"2022_03_19 14:00:00",
        "activityTitle":"pxn",
        "activityDesc": "This is for test",
        "building":"Szxasd",
        "room":"203",
        "estimateNum":233,
        "targetPeople":"Teachers",
        "registryNum":0,
        "hot":0
      },
      success:(res)=>
      {
        console.log(res.data);
      }
    })
  }

  
})
