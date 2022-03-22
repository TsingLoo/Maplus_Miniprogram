
Page({

  data:{
    array: ['CB','MA','MB','IBSS','GYM'],
    index: 0,
    activityTitle:"",
    activityDesc:"",
    activityDetail:"",
    building:"CB",
  },

  getModifyId: function(e){
    this.setData({
      activityid: e.detail.value,
      requestUrl: "http://localhost:8080/preModifyActivity/" + e.detail.value
    })
  },

  checkModify: function(event){
    var that = this
    wx.request({
      url: this.data.requestUrl,
      method: 'GET',
      success:function(res)
      {
        var findIndex =  (that.data.array || {}).findIndex((item) => item === res.data.building);
        console.log(res.data)
        that.setData({
          
          activityTitle: res.data.activityTitle,
          activityDesc: res.data.activityDesc,
          //activityDetail: res.data.activityDetail,
          room: res.data.room,
     
          index: findIndex,
         
          clubName: res.data.clubName,
          publisher: res.data.publisher,
          estimateNum: res.data.estimateNum,
          targetPeople: res.data.targetPeople
        })
      },
      fail:function(res)
      {
        console.log(res.data)
      }
      
    })



  },



  getbuilding: function(e) {
    this.setData({
      index: e.detail.value,   
      building: this.data.array[e.detail.value]
    })

    console.log(this.data.index + '选择改变，携带值为' + this.data.building)
  },

inputactivityTitle: function(e){

    this.setData(
      {
        activityTitle: e.detail.value
      }
    )
    console.log("activityTitle: " + this.data.activityTitle)
},

inputactivityDesc: function(e){
  this.setData(
    {
      activityDesc: e.detail.value
    }
    )
    console.log("activityDesc: " + this.data.activityDesc)
    
},

inputroom:function(event)
{
  this.setData
  ({
      room: event.detail.value
    })
    console.log("room: " + this.data.room)
},

inputactivityDetail: function(e){

  this.setData
  ({
      activityDetail: e.detail.value
    })
    console.log("activityDetail: " + this.data.activityDetail)
},
  


  go_to_AC_upload2(event){
    
   
    let info1 = 
         {
          activityTitle:this.data.activityTitle,
          activityDesc:this.data.activityDesc,
          //activityDetail:this.data.activityDetail,
          building:this.data.building,
          room:this.data.room,
          clubName : this.data.clubName,
          publisher : this.data.publisher,
          estimateNum : this.data.estimateNum,
          targetPeople : this.data.targetPeople,
          id:this.data.activityid
         }

    console.log(info1)     

    wx.navigateTo({
      url:'/pages/AC_upload2/AC_upload2',
      success: function(res)
      {
        res.eventChannel.emit("page1to2",info1)
      }
    })
  }
})