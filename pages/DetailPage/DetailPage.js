const app = getApp();
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
    jobId:''
  },

  clickSign(e){
    if(app.globalData.logged == false)
    {
      wx.showToast({
        title: '请先登录',
        icon:'error',
      });
    }else
    {
      if(!this.data.isClick == true){
        let jobData = this.data.jobStorage;
        jobData.push({
          jobid:jobData.length,
          id:this.data.job.id
        })
        wx.setStorageSync('jobData', jobData);
    
  
        let requestUrl = "http://" + app.globalData.domainPort + "/addStar/" + app.globalData.userName+"/" + this.data.acid
  
        let that = this
  
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
        wx.showToast({
          title: '已取消收藏',
        })
      }
      this.setData({
        isClick:!this.data.isClick
      })
    }

  },

  clickStar(e){
    if(app.globalData.logged == false)
    {
      wx.showToast({
        title: '请先登录',
        icon:'error',
      });
    }else
    {
      if(!this.data.isClick == true){
        let jobData = this.data.jobStorage;
        jobData.push({
          jobid:jobData.length,
          id:this.data.job.id
        })
        wx.setStorageSync('jobData', jobData);
    
  
        let requestUrl = "http://" + app.globalData.domainPort + "/addStar/" + app.globalData.userName+"/" + this.data.acid
  
        let that = this
  
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
        wx.showToast({
          title: '已取消收藏',
        })
      }
      this.setData({
        isClick:!this.data.isClick
      })
    }

  },



  confirmComment:function(event)
  {
    console.log("activityID: " + this.data.acid),
    console.log("comtext: " + this.data.comment),
    console.log("userName: " + app.globalData.userName)
    

    wx.request({
      url: 'http://'+ app.globalData.domainPort +'/addComment',
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

    this.setData({
      comment:""      
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let eventChannel = this.getOpenerEventChannel()
    eventChannel.once('readActivityID',(activityID)=>
    {
 
      this.setData({
        acid: activityID.acid || {},
      })
    });



    //真机调试无法通过，此处this.data.acid值在真机调试中为-1,猜测是 eventChannel所致，未验证。
    console.log("acid is " + this.data.acid)
    let that = this
    let requestUrl = "http://"+ app.globalData.domainPort +"/preModifyActivity/" + this.data.acid
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

    requestUrl = 'http://' + app.globalData.domainPort + '/addHot/' + this.data.acid
    wx.request({
      url: requestUrl,
      method: 'GET'
    })



  },



  inputComment:function(event)
  {
    this.setData({
      comment:event.detail.value
    })
  }
})