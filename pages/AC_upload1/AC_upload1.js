
Page({

  data:{
    array: ['CB','MA','MB','IBSS','GYM'],
    index: 0,
    activityTitle:"",
    activityDesc:"",
    activityDetail:"",
    building:"",
  },




  getbuilding: function(e) {
    this.setData({
      index: e.detail.value,   
      building: this.data.array[this.data.index]
    })
    console.log('选择改变，携带值为' + this.data.building)
  },

inputactivityTitle: function(e){
    this.setData
    {
      console.log("activityTitle: " + e.detail.value)
      activityTitle: e.detail.value
    }
},

inputactivityDesc: function(e){
  this.setData
    {
      console.log("activityDesc: " + e.detail.value)
      activityDesc: e.detail.value
    }
},

inputactivityDetail: function(e){
  this.setData
    {
      
      activityDetail: e.detail.value
    }
    console.log("activityDetail: " + this.data.activityDetail)
},
  

  go_to_AC_upload2(event){
    
    console.log(this.data.activityDesc) 
    let info1 = 
         {
          activityTitle:that.data.activityTitle,
          activityDesc:that.data.activityDesc,
          activityDetail:that.data.activityDetail,
           building:that.data.building
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