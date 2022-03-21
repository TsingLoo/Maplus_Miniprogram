let isInitSelfShow = true;
let app = getApp();
Page({

  data:{
    array: ['CB','MA','MB','IBSS','GYM'],
    index: 0,
    activityTitle:"",
    activityDesc:"",
    activityDetail:"",
    building:""
  },

  onLoad()
  {
    console.log('选择改变，携带值为' + this.data.array[this.data.index])
  },

  getbuilding: function(e) {
    this.setData({
      index: e.detail.value   
    })
    console.log('选择改变，携带值为' + this.data.array[this.data.index])
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
      console.log("activityDetail: " + e.detail.value)
      activityDetail: e.detail.value
    }
},
  

  go_to_AC_upload2(event){
    wx.navigateTo({
      url:'/pages/AC_upload2/AC_upload2',
    })
  }
})