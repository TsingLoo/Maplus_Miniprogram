let app = getApp();

// pages/AC_upload2/AC_upload2.js
Page({
  data: {

  },

  onLoad:function(option)
  {
    let eventChannel = this.getOpenerEventChannel()
    eventChannel.on('page1to2',(info1) =>
    {
      this.setData({  
      	info1: info1 || {},
        publisher: info1.publisher,
        clubName: info1.clubName
      })
    })

  
  },
  
  inputclubName: function(event)
  {
    this.setData({
      clubName: event.detail.value
    })
    console.log("clubName: " +this.data.clubName)
  },

  inputpublisher: function(event)
  {
    this.setData({
      publisher: event.detail.value      
    })
    console.log("publisher: " + this.data.publisher)
  },

  go_to_AC_upload3(){

    let info2 = 
    {
      activityTitle:this.data.info1.activityTitle,
      activityDesc:this.data.info1.activityDesc,
      activityDetail:this.data.info1.activityDetail,
      building:this.data.info1.building,
      room: this.data.info1.room,
      clubName:this.data.clubName,
      publisher:this.data.publisher,
      estimateNum: this.data.info1.estimateNum,
      targetPeople: this.data.info1.targetPeople,
      id:this.data.info1.id
    }

    console.log(info2)

    wx.navigateTo({
      url: '/pages/AC_upload3/AC_upload3',
      success: function(res)
      {
        res.eventChannel.emit("page2to3",info2)
      }
    })
  }
})