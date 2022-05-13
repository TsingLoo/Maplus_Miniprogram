const app = getApp()
Page({
  data: {
    SearchIcon: "/icon/search.png",
    DeleteIcon: "/icon/ash-bin.png",
    historyStorage: [],
    historyStorageShow: false,
    inputValue: "",
    replaceValue: ""
  },

  delete:function(){
  var that = this
  wx.showModal({
  content: '确认清除所有历史记录?',
  success: function (res) {
  if (res.confirm) {
  wx.removeStorage({
  key: 'historyStorage',
  success: function (res) {
  that.setData({
  historyStorage: []
  })
    wx.setStorageSync("historyStorage", [])
  },
  })} else {}}})},
 
getInputValue(e){
  this.setData({
    inputValue: e.detail.value
  })
},

getHistoryText(e)
{
  let that = this
  that.setData({
    inputValue: e.currentTarget.dataset.content
  })
  that.doSearch(that.data.inputValue)
},

doSearch(str)
{
  let that = this
  wx.request({
    url: app.globalData.UrlHead + app.globalData.domainPort+ '/searchActivity/' + str,
    method: 'GET',
    success:function(res){
      console.log(res.data)
      if(res.data == ''){
        wx.showToast({
          title: '暂无相关活动',
          icon: 'none',
          duration:1300
        })
      }else{
        app.globalData.searchresult = res.data
        wx.navigateTo({
          url: '/pages/search_result/search_result',
        })
      }
    }
  })
},


searchbegin: function (e) {
  let that = this
  var data = e.currentTarget.dataset;
  that.data.replaceValue = e.currentTarget.dataset.content
  //console.log("The replaceValue is" + that.data.replaceValue)
  if(that.data.historyStorage.indexOf(that.data.replaceValue) == -1)
  {
    //console.log("将"+ that.data.replaceValue + "加入本地存储")
    wx.setStorage({
      key: 'historyStorage',
      //data: that.data.historyStorage.concat(that.data.inputValue).reverse(),
      data: that.data.historyStorage.concat(that.data.replaceValue).reverse()
    })
  }

  if (data['content'] == '') {
    wx.showToast({
      title: '请先输入搜索内容',
      icon: 'none',
      duration:1300
    })
  }else{
    that.doSearch(that.data.inputValue)
  }
},

  onShow:function(options)
  {
    let that = this;
    wx.getStorage({
      key: 'historyStorage',
      success: function (res) {
        that.setData({
          historyStorageShow: true,
          historyStorage: res.data
        })
      }
    })
  },
 
  onLoad: function (options) {
    let that = this;
    that.searchtype = options.searchtype;
   
    this.setData({
      inputValue: options.inputValue
    })
    this.data.inputValue = options.inputValue
  }
})