var app = getApp()
Page({
  onShareAppMessage() {
    return {
      title: 'map',
      path: 'packageComponent/pages/map/map/map'
    }
  },
  
  getScale:function(){
    this.mapCtx.getScale({
      success:function(res){
      console.log(res.scale)
      }
    })
  },

  onLoad:function() {
    this.mapCtx=wx.createMapContext('map')
    
    this.mapCtx.setBoundary({
      southwest:{
        longitude:120.734742,
        latitude:31.268347,
      },
      northeast:{
        longitude:120.746592,
        latitude:31.279598,
      },
      
      complete: function(e){},
    },
    
    )
    this.mapCtx.addGroundOverlay({
      id:0,
      src:"https://6465-developtest-8gz91yrw88cb744c-1306661972.tcb.qcloud.la/articeSrc/map.jpg?sign=0c93002db71ceae54134c7174b16e723&t=1651416228",
      bounds:{
        southwest:{
          longitude:120.734742,
          latitude:31.268347,
        },
        northeast:{
          longitude:120.746592,
          latitude:31.279598,
        }
      },
      complete: function(e){},
    }) 

    this.mapCtx.moveToLocation({
      latitude: 31.274659,
      longitude: 120.738168,
      complete: function(e){},

    })
    

    
},

  data: {
    feed: [],
    feed_length: 0,
    theme: 'light',
    latitude: 31.274659,
    longitude: 120.738168,
    minScale:16.5,
    maxScale:18,
    showLocation:false,

    scale:17,
    
    markers: [{
      id:1,
      latitude: 31.274659,
      longitude: 120.738168,
      width:30,
      height:30,
      callout:{
        content:"list of activities in FB"
      }

    },{
      id:2,
      latitude:31.268947,
      longitude:120.738650,
      width:30,
      height:30,
      callout:{
        content:"test marker"
      }

    }],
    
    subKey: '4EYBZ-7Y7Y5-EQRIG-QUCXB-GDWCE-3IFDN',
    enable3d: false,
    showCompass: false,
    
    enableOverlooking: false,
    enableZoom: true,
    enableScroll: true,
    enableRotate: false,
    drawPolygon: false,
    enableSatellite: false,
    enableTraffic: false,
    enablePoi:false
  },
  toggle3d() {
    this.setData({
      enable3d: !this.data.enable3d
    })
  },
  toggleShowCompass() {
    this.setData({
      showCompass: !this.data.showCompass
    })
  },
  toggleOverlooking() {
    this.setData({
      enableOverlooking: !this.data.enableOverlooking
    })
  },
  toggleZoom() {
    this.setData({
      enableZoom: !this.data.enableZoom
    })
  },
  toggleScroll() {
    this.setData({
      enableScroll: !this.data.enableScroll
    })
  },
  toggleRotate() {
    this.setData({
      enableRotate: !this.data.enableRotate
    })
  },
  togglePolygon() {
    this.setData({
      drawPolygon: !this.data.drawPolygon
    })
  },
  toggleSatellite() {
    this.setData({
      enableSatellite: !this.data.enableSatellite
    })
  },
  toggleTraffic() {
    this.setData({
      enableTraffic: !this.data.enableTraffic
    })
  },



  
  submit() {   // 点击预览
    this.setData({
      ylShow: true
    })
var temp = this

    this.setData({
      article: temp,

    })
  },
  onClose(){  // 关闭预览
    this.setData({
      ylShow: false
    })
  },
  lower: function (e) {
    wx.showNavigationBarLoading();
    var that = this;
    //setTimeout(function(){wx.hideNavigationBarLoading();that.nextLoad();}, 1000);
    console.log("lower")
  },
  
bindItemTap:function(e) {
    //console.log(e.currentTarget.dataset.activityid),
    let activityID = {
      acid: e.currentTarget.dataset.activityid
    };
    app.globalData.PageNum = e.currentTarget.dataset.activityid
    wx.navigateTo({
      url: '/pages/DetailPage/DetailPage',
      success: res =>
      {
        res.eventChannel.emit('readActivityID',activityID)
      }
    }) 
  },
  refresh: function(){
    let that = this
    //var feed = {}
    
    wx.request({

      url: 'http://' + app.globalData.domainPort + '/activity',

      method: 'GET',
      success:function(res)
      {
        console.log(res.data)
        that.setData(
          {
            feed: res.data,
            feed_length: res.data.length
          }
        )
        //console.log("that.data.trueFeed.data is " + that.data.trueFeed.data)
      }
    })}
  
})
