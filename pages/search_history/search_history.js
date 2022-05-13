const App = getApp()
Page({
  data: {
    SearchIcon: "/icon/search.png",
    DeleteIcon: "/icon/ash-bin.png",
    historyStorage: [],
    historyStorageShow: false,
    inputValue: "",
    replaceValue: "",
    searchresult: false,
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
  
  searchbegin: function (e) {
    let that = this
    var data = e.currentTarget.dataset;
    that.data.replaceValue = e.currentTarget.dataset.content
    wx.setStorage({
    key: 'historyStorage',
    data: that.data.historyStorage.concat(that.data.inputValue).reverse(),
    data: that.data.historyStorage.concat(that.data.replaceValue).reverse()
    })

    if (data['content'] == '') {
    wx.showToast({
    title: '请先输入搜索内容',
    icon: 'none',
    duration:1300
    })}else{
    wx.request({
    url: 'https://www.tsingloo.com:4433/searchActivity/' + this.data.inputValue,
    method: 'GET',
    success:function(res){
    if(res.data == ''){
    wx.showToast({
    title: '暂无相关活动',
    icon: 'none',
    duration:1300
    })}else{
    wx.navigateTo({
    url: '/pages/search_result/search_result',
    })}}})}},
 
  onLoad: function (options) {
    let that = this;
    that.searchtype = options.searchtype;
    wx.getStorage({
    key: 'historyStorage',
    success: function (res) {
    that.setData({
    historyStorageShow: true,
    historyStorage: res.data
    })}})
    this.setData({
    inputValue: options.inputValue
    })
    this.data.inputValue = options.inputValue
  }
})