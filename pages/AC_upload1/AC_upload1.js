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

  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value   
    })
    console.log('选择改变，携带值为' + this.data.array[this.data.index])
  },

input1: function(e){
    this.setData
    {
      console.log("activityTitle: " + e.detail.value)
      activityTitle: e.detail.value
    }
},

input2: function(e){
  this.setData
    {
      console.log("activityDesc: " + e.detail.value)
      activityDesc: e.detail.value
    }
},

input3: function(e){
  this.setData
    {
      console.log("activityDetail: " + e.detail.value)
      activityDetail: e.detail.value
    }
},
  
input4: function(e){
  this.setData
  {
    console.log("building: " + e.detail.value)
    activityDetail: e.detail.value
  }
},

  go_to_AC_upload2(event){
    wx.navigateTo({
      url:'/pages/AC_upload2/AC_upload2',
    })
  }
})