// pages/AC_upload3/AC_upload3.js
Page({

  
  data: {

  },

  onLoad:function(option)
  {
    let eventChannel = this.getOpenerEventChannel()
    eventChannel.on('page2to3',(info2) =>
    {
      this.setData({  
      	info2: info2 || {},
        estimateNum: info2.estimateNum,
        targetPeople: info2.targetPeople
      })
    })
  },

  inputestimateNum:function(event)
  {
    this.setData({
      estimateNum: event.detail.value
    })
    console.log("estimateNum: " + this.data.estimateNum)
  },

  inputtargetPeople:function(event)
  {
    this.setData({
      targetPeople: event.detail.value
    })
    console.log("targetPeople: "+ this.data.targetPeople)
  },

  createActivity:function()
  {
    if(this.data.info2.id)
    {
      let requestUrlModify = "http://localhost:8080/submitModifyActivity/" + this.data.info2.id
      console.log(requestUrlModify)

      wx.request({
        url:requestUrlModify,
        method:"POST",
        data:
      {
        activityTitle: this.data.info2.activityTitle,
        activityDesc: this.data.info2.activityDesc,
        activityDetail: this.data.info2.activityDetail,
        building: this.data.info2.building,
        room: this.data.info2.building,
        clubName: this.data.info2.clubName,
        publisher: this.data.info2.publisher,
        estimateNum: this.data.estimateNum,
        targetPeople: this.data.targetPeople,
        beginTime: "2022_03_19 10:00:00",
        endTime:"2022_03_19 14:00:00",
        registryNum:0,
        hot:0
      },

      success:(res)=>
      {
  
        console.log(res.data);
      },
      fail:(res)=>
      {
    
      }

      })
      
    }else{

    console.log("A new activity pulished!")
    wx.request({
      url: 'http://127.0.0.1:8080/createActivity',
      method: 'post',
      data:
      {
        activityTitle: this.data.info2.activityTitle,
        activityDesc: this.data.info2.activityDesc,
        activityDetail: this.data.info2.activityDetail,
        building: this.data.info2.building,
        room: this.data.info2.building,
        clubName: this.data.info2.clubName,
        publisher: this.data.info2.publisher,
        estimateNum: this.data.estimateNum,
        targetPeople: this.data.targetPeople,
        beginTime: "2022_03_19 10:00:00",
        endTime:"2022_03_19 14:00:00",
        registryNum:0,
        hot:0
      },

     
      success:(res)=>{
        console.log(res.data);
      },
      fail:(res)=>{
    
      }
    
    })}
  }

  
})
