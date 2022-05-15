var app = getApp()

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
};


var fake = require('../data/FakeComText.js')
var mainPage = require('../data/data_mainPage.js')
var mainPage_next = require('../data/data_mainPage_next.js')
var collection = require('../data/data_collection.js')
var collection_next = require('../data/data_collection_next.js')

function getData(url){
  return new Promise(function(resolve, reject){
    wx.request({
      url: url,
      data: {},
      header: {
        //'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log("success")
        resolve(res)
      },
      fail: function (res) {
        reject(res)
        console.log("failed")
      }
    })
  })
}

function compare(property) {
  return function (a, b) {
    var value1 = a[property];
    var value2 = b[property];
    return value2 - value1;
  }
}


function notLog()
{
    wx.showToast({
      title: '请先登录！',
      icon:'error',
      duration:1000
   }) 
   setTimeout(function () { 
    wx.showModal({
      title: '请先登录',
      content: '是否立即登录？',
      showCancel: true,
      cancelText:"否",
      cancelColor:'skyblue',
      confirmText:"是",
      confirmColor: 'skyblue',
      success: function (res) {
       if (res.cancel) {
       } else {
        wx.navigateTo({
        url: '/pages/PS_2L/PS_L',
        })}
      }
    })}, 1050)
}

function getComment()
{
  return fake.fakeText;
}

function getDiscovery(){
  return mainPage.mainPage;
}

function discoveryNext(){
  return mainPage_next.next;
}

function getCollection() {
  return collection.collection
}

function collectionNext() {
  return collection_next.next
}

module.exports.compare = compare;
module.exports.notLog = notLog;
module.exports.getComment = getComment;
module.exports.getDiscovery = getDiscovery;
module.exports.discoveryNext = discoveryNext;
module.exports.getCollection = getCollection;
module.exports.collectionNext = collectionNext;




