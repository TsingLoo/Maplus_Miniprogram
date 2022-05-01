var app = getApp()
Page({
  onShareAppMessage() {
    return {
      title: 'map',
      path: 'packageComponent/pages/map/map/map'
    }
  },

  data: {
    feed: [],
    feed_length: 0,
    theme: 'light',
    latitude: 31.275,
    longitude: 120.74,
    markers: [{
      id:1,
      latitude: 31.274659,
      longitude: 120.738168,
      width:30,
      height:30,
      callout:{
        content:"list of activities in FB"
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

    

  onLoad:function() {
    this.mapCtx=wx.createMapContext('map')
    this.mapCtx.setBoundary({
      southwest:{
        longitude:120.736773,
        latitude:31.267817,
      },
      northeast:{
        longitude:120.743739,
        latitude:31.277354,
      },
      complete: function(e){},
    },
    
    )
    this.mapCtx.addGroundOverlay({
      id:0,
      src:"/icon/map.jpg",
      bounds:{
        southwest:{
          longitude:120.736773,
          latitude:31.267817,
        },
        northeast:{
          longitude:120.743739,
          latitude:31.277354,
        }
      },
      complete: function(e){},
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
