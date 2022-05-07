const app = getApp();
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    acid: -1,
    clubName: "",
    beginTime: "",
    endTime: "",
    activityTitle:"",
    activityDesc:"",
    activityDetail:"",
    building:"",
    room:"",
    estimateNum: -1,
    targetPeople:"",
    registryNum: -1,
    comment:"",

    job:[],
    jobList:[],
    id:'',
    isClick:false,
    isSigned:false,
    jobStorage:[],
    jobId:'',

    fakeComment:'',
  },

  refresh:function()
  {

    let that = this
    let requestUrl = app.globalData.UrlHead+ app.globalData.domainPort +"/preModifyActivity/" + this.data.acid
    console.log(requestUrl);
    wx.request({
      url: requestUrl,
      method: 'GET',
      success:function(res)
      {
        that.setData({
          clubName: res.data.clubName,
          beginTime: res.data.beginTime,
          endTime: res.data.endTime,
          activityTitle:res.data.activityTitle,
          activityDesc:res.data.activityDesc,
          activityDetail:res.data.activityDetail,
          building:res.data.building,
          room:res.data.room,
          estimateNum: res.data.estimateNum,
          targetPeople:res.data.targetPeople,
          registryNum: res.data.registryNum,
        })
        console.log(res);
      }
      
    })
  },

  clickSign(e){
    let that = this
    if(app.globalData.logged == false)
    {
      this.popNotLogin();
      return;
    }
      if(!this.data.isSigned == true){
        let jobData = this.data.jobStorage;
        jobData.push({
          jobid:jobData.length,
          id:this.data.job.id
        })
        wx.setStorageSync('jobData', jobData);
    
        let requestUrl = app.globalData.UrlHead + app.globalData.domainPort + "/addRegister/" + app.globalData.userName+"/" + this.data.acid
        console.log("request register url is" + requestUrl)
        
              wx.request({
                url: requestUrl,
                method: 'GET',
                success:function(res)
                {
                  if(res.data == true)
            {
              console.log(res.data)
              wx.showToast({
                title: '已报名',
              });
              that.refresh()
            }else
            {
              console.log("Register 请求成功发起， 但是返回值是false")
              wx.showToast({
                title: '报名失败，请重试',
              });
            }    
                },
                fail:function(res)
          {
            console.log("Register 请求发起失败")
            wx.showToast({
              title: '报名失败，请重试',
            });
          }
              })
      }else{
        
        let deleteRegisterUrl = app.globalData.UrlHead + app.globalData.domainPort + "/deleteRegister/" + app.globalData.userName + "/" + this.data.acid
        
        wx.request({
          url: deleteRegisterUrl,
          method: 'GET',
          success:function(res)
          {
       
          }
        })
        wx.showToast({
          title: '已取消报名',
        })
        that.refresh()
      }
      that.setData({
        isSigned:!that.data.isSigned
      })
     
    

  },

  popNotLogin()
  {
   
      wx.showToast({
        title: '请先登录',
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
        return;
    
  },

  clickStar(e){
    let that = this
    if(app.globalData.logged == false)
    {
      this.popNotLogin();
      return;
    }
    
      if(!this.data.isClick == true){
        let jobData = this.data.jobStorage;
        jobData.push({
          jobid:jobData.length,
          id:this.data.job.id
        })
        wx.setStorageSync('jobData', jobData);
    
        let requestUrl = app.globalData.UrlHead + app.globalData.domainPort + "/addStar/" + app.globalData.userName+"/" + this.data.acid
        console.log("request star url is" + requestUrl)
        
              wx.request({
                url: requestUrl,
                method: 'GET',
                success:function(res)
                {
                  if(res.data == true)
            {
              console.log(res.data)
              wx.showToast({
                title: '已收藏',
              });
              that.refresh()
            }else
            {
              wx.showToast({
                title: '收藏失败',
              });
            }    
                },
                fail:function(res)
          {
            wx.showToast({
              title: '收藏失败',
            });
          }
              })
            
          
        
      }else{
        
        let deleteStarUrl = app.globalData.UrlHead + app.globalData.domainPort + "/deleteStar/" + app.globalData.userName + "/" + this.data.acid
        
        wx.request({
          url: deleteStarUrl,
          method: 'GET',
          success:function(res)
          {
       
          }
        })
        wx.showToast({
          title: '已取消收藏',
        })
        that.refresh()
      }
      that.setData({
        isClick:!that.data.isClick
      })
     
    

  },

  // clickDoComment:function(event)
  // {

    
  //   this.setData()
  //   {
  //     activityID: this.acid
  //     userName: app.globalData.userName
  //     comtext: this.comment
  //   }
  //   let that =this
  //   let addCommentUrl = app.globalData.UrlHead + app.globalData.domainPort + '/addComment'
  //   wx.request({
  //     url: addCommentUrl,
  //     method: "POST",
  //     data:{
  //       activityID: that.activityID,
  //       userName: that.userName,
  //       comtext: that.comment
  //     },
  //     success: function(res)
  //     {
  //       console.log("提交了评价")
  //     }


  //   })

  // },

  confirmComment:function(event)
  {
    if(app.globalData.logged == false)
    {
      this.popNotLogin();
      return;
    }

    if(this.data.comment == "" )
    {
      wx.showToast({
        title: '评论不可为空',
        icon:'error',
        duration:1000
      })

      return;
    }
    console.log("activityID: " + this.data.acid),
    console.log("comtext: " + this.data.comment),
    console.log("userName: " + app.globalData.userName)
    wx.request({
      url: app.globalData.UrlHead+ app.globalData.domainPort +'/addComment',
      method:'POST',
      data:{
        activityID: this.data.acid,
        userName: app.globalData.userName,
        comtext: this.data.comment
      },
      success:function(res)
      {

      },
      fail:function(res)
      {

     }
    })

    wx.showToast({
      title: '发布成功',
      icon:'success',
      duration:1000
   })

    this.setData({
      comment:""      
    })
  },

  onLoad:function()
  {
    this.setData({
      acid: app.globalData.PageNum      
    })
  //   let that = this
  //   let tmp
  //   let eventChannel = this.getOpenerEventChannel()
  //   new Promise((resolve, reject) => {
      
  //     //let eventChannel = this.getOpenerEventChannel()
  //     eventChannel.on('readActivityID', function (data) {
  //        tmp = data
  //       resolve(tmp)
  //     })
  //     that.setData({ acid: tmp.acid })
  //     console.log("tmp activityId" + tmp.acid)
  //     //this.setData({acid:tmp.acid || {}})
  //   }).then((res) => {
  //     //that.setData({ acid: that.tmp.acid })

  //   });
  //   //console.log(this.acid)
  //   //let eventChannel = this.getOpenerEventChannel()
  

  //  console.log(this.acid)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    
    let that = this
    let checkStarUrl = app.globalData.UrlHead + app.globalData.domainPort + "/checkStar/"  + app.globalData.userName + "/" + this.data.acid
    let checkRegisterUrl = app.globalData.UrlHead + app.globalData.domainPort + "/checkStar/"  + app.globalData.userName + "/" + this.data.acid
    console.log("acid from show" + this.data.acid)

    console.log(checkStarUrl)
    if(app.globalData.logged)
    {
      wx.request({
        url: checkStarUrl,
        method: 'GET',
        success:function(res)
        {
          console.log("checkStarUrl: " + res.data)
          that.setData({
            isClick:res.data
          })
          console.log("isClick in checkStarUrl: " + that.data.isClick)
        },
        fail:function(res)
        {
          console.log("fail to check star")
        }
      })

      wx.request({
        url: checkRegisterUrl,
        method: 'GET',
        success:function(res)
        {
          console.log("checkRegisterUrl: " + res.data)
          that.setData({
            isSigned:res.data
          })
          console.log("isClick in checkRegisterUrl: " + that.data.isSigned)
        },
        fail:function(res)
        {
          console.log("fail to check register")
        }
      })      
    }

    console.log("isSigned after checkStar: " + that.data.isSigned)

    //真机调试无法通过，此处this.data.acid值在真机调试中为-1,猜测是 eventChannel所致，未验证。
    console.log("acid is " + this.data.acid)

   this.refresh()    

    let addHotUrl = app.globalData.UrlHead + app.globalData.domainPort + '/addHot/' + this.data.acid
    wx.request({
      url: addHotUrl,
      method: 'GET'
    })

    let getCommentUrl = app.globalData.UrlHead + app.globalData.domainPort + '/getComments/' + this.data.acid
    wx.request({
      url: getCommentUrl,
      method: 'GET',
      success:function(res)
        {
          console.log(res.data)

          that.setData({
            fake:res.data,
            fake_length: res.data.length
          })
        },
        fail:function(res)
        {
         
        }
    })
    
    // var fake = util.getComment();

    // var fake_data = fake.data;
    // this.setData({
    //   fake:fake_data,
    //   fake_length: fake_data.length
    // });

  },



  GetInputComment:function(event)
  {
    this.setData({
      comment:event.detail
    })    
    
    console.log(this.data.comment);
  }
})






