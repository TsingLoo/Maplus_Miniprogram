Page({
  data: {
    inputValue: '',
    Record: []
  },
  
  getHistory: function() {
  this.setData({
  Record: wx.getStorageSync('Record') || []
  })
  },
  
  HistoryDelete: function() {
  wx.clearStorageSync('Record')
  this.setData({
  Record: []
  })
  },

  onSearch: function(e) {
  var inputValue = e.detail;
  var Record = this.data.Record;
  
  if(inputValue == '') {
  return false
  } else {
  if(Record.length < 10) {
  Record.unshift({
  value: inputValue,
  id: Record.length,
  url: ''
  })
  } else {
  Record.pop()
  Record.unshift({
  value: inputValue,
  id: Record.length,
  url: ''
  })
  }
   wx.setStorageSync('Record', Record)
  }
  },

  CheckResult: function(){
    var search = this.data.inputValue;
    if(search == ''){
      wx.showToast({
        title: '请输入内容！',
        icon:'error',
        duration:1300
      }) 
    }
    else{
    wx.request({
    url: 'http://' + app.globalData.domainPort + '/searchActivity' + app.globalData.content,
    method: 'GET',
    success:function(res){
    if(res.data == ''){
     wx.showToast({
     title: '暂无相关结果',
     content: '请更改搜索内容后再次尝试',
     duration:1100
     })
    }else{
     wx.navigateTo({
     url: '/pages/search_result/search_result',
     }) 
    }
    }
    })
    }
  }

})