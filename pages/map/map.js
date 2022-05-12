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
    /*this.setData({
      minScale:16.16,
      complete:function(e){}
  })*/
    console.log(this.data.minScale)

  },
  onHide:function(){},



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
    }),
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
    maxScale:18,
    isShowPosition: false,

    
    
    markers: [{
      id:1,
      iconPath:'place.png',
      latitude: 31.274659,
      longitude: 120.738168,
      width:30,
      height:30,
      callout:{
        content:"FB"
      }

    },{
      id:2,
      iconPath:'place.png',
      latitude:31.272885,
      longitude:120.739997,
      width:30,
      height:30,
      callout:{
        content:"SA-SD"
      }

    },{
      id:3,
      iconPath:'place.png',
      latitude:31.273212,
      longitude:120.738176,
      width:30,
      height:30,
      callout:{
        content:"CB"
      }

    },{
      id:4,
      iconPath:'place.png',
      latitude:31.273525,
      longitude:120.740925,
      width:30,
      height:30,
      callout:{
        content:"PB"
      }

    },{
      id:5,
      iconPath:'place.png',
      latitude:31.272183,
      longitude:120.740925,
      width:30,
      height:30,
      callout:{
        content:"EE"
      }

    },{
      id:6,
      iconPath:'place.png',
      latitude:31.272481,
      longitude:120.742313,
      width:30,
      height:30,
      callout:{
        content:"EB"
      }

    },{
      id:7,
      iconPath:'place.png',
      latitude:31.270958,
      longitude:120.739936,
      width:30,
      height:30,
      callout:{
        content:"IR"
      }

    },{
      id:8,
      iconPath:'place.png',
      latitude:31.270967,
      longitude:120.741374,
      width:30,
      height:30,
      callout:{
        content:"IA"
      }

    },{
      id:9,
      iconPath:'place.png',
      latitude:31.269911,
      longitude:120.741374,
      width:30,
      height:30,
      callout:{
        content:"HS"
      }

    },{
      id:10,
      iconPath:'place.png',
      latitude:31.269978,
      longitude:120.73943,
      width:30,
      height:30,
      callout:{
        content:"BS"
      }

    },{
      id:11,
      iconPath:'place.png',
      latitude:31.268904,
      longitude:120.741374,
      width:30,
      height:30,
      callout:{
        content:"DB"
      }

    },{
      id:12,
      iconPath:'place.png',
      latitude:31.268805,
      longitude:120.740046,
      width:30,
      height:30,
      callout:{
        content:"ES"
      }

    },{
      id:13,
      iconPath:'place.png',
      latitude:31.271222,
      longitude:120.73896,
      width:30,
      height:30,
      callout:{
        content:"AS"
      }

    },{
      id:14,
      iconPath:'place.png',
      latitude:31.27366,
      longitude:120.74194,
      width:30,
      height:30,
      callout:{
        content:"MA"
      }

    },{
      id:15,
      iconPath:'place.png',
      latitude:31.273149,
      longitude:120.74194,
      width:30,
      height:30,
      callout:{
        content:"MB"
      }

    },{
      id:16,
      iconPath:'place.png',
      latitude:31.270917,
      longitude:120.742919,
      width:30,
      height:30,
      callout:{
        content:"GYM"
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
    enablePoi:false,
    list:[],
    
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
  bindupdated:function(e){
    this.setData({
      minScale:17,
      scale:17, 
      complete:function(e){} 
                           
  }),
  this.mapCtx=wx.createMapContext('map')
  wx.request({
    url: 'https://' + app.globalData.domainPort + '/checkBuildingActivity',
    method: 'GET',
    success:(res)=>{
      this.setData({
        list:res.data
      })
          //若无活动，移除marker
  
  for(var i=0;i<16;i++){
    if(!this.data.list[i]){
      this.mapCtx.removeMarkers({
        markerIds:[i+1],
        complete:function(e){},
      })
    }
  }
      
    },
  })
  
  },
  	// 激活定位控件
    onChangeShowPosition:function (event) { 
      var that=this 
          const {value} = event.detail 
          if (true) { 
              wx.getLocation({ 
                  type: 'gcj02', 
                  success: (res) => { 
                      const {latitude, longitude} = res; 
                      this.setData({ 
                          location: { 
                              latitude, 
                              longitude 
                          } 
            }); 
            
            if(latitude>31.279598||latitude<31.268347||longitude>120.746592||longitude<120.734742){ 
              wx.showToast({ 
                title: '您在地图显示范围外\r\nyou may outside map', 
                icon: 'none',     
                duration: 4000      
              })   
            }else{ 
              this.mapCtx.moveToLocation({ 
              latitude: latitude, 
              longitude: longitude, 
              complete: function(e){}, 
         
            })}
   
          }, 
          
              }); 
      } 
   
          this.setData({ 
              showPosition: true 
          }); 
      }, 

  
  submit() {   // 点击预览
    this.refresh();
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
    for(var i=0; i<16; i++){
    var id = this.data.markers[i].id
    if(id == 1){
      wx.request({
        url: 'https://www.tsingloo.com:4433/buildingActivity/FB',
        method: 'GET',
        success:function(res){
          console.log(res.data)
          that.setData({
              feed: res.data,
              feed_length: res.data.length
            })
        }
      })
    }

      if(id == 2){
        wx.request({
          url: 'https://www.tsingloo.com:4433/buildingActivity/SA-SD',
          method: 'GET',
          success:function(res){
            console.log(res.data)
            that.setData({
                feed: res.data,
                feed_length: res.data.length
              })
          }
        })
      }

    if(id == 3){
    wx.request({
      url: 'https://www.tsingloo.com:4433/buildingActivity/CB',
      method: 'GET',
      success:function(res){
        console.log(res.data)
        that.setData({
            feed: res.data,
            feed_length: res.data.length
          })
      }
    })
  }

    if(id == 4){
      wx.request({
        url: 'https://www.tsingloo.com:4433/buildingActivity/PB',
     method: 'GET',
     success:function(res){
       console.log(res.data)
       that.setData({
          feed: res.data,
         feed_length: res.data.length
         })
        }
      })}

      if(id == 5){
        wx.request({
      url: 'https://www.tsingloo.com:4433/buildingActivity/EE',
       method: 'GET',
       success:function(res){
       console.log(res.data)
         that.setData({
          feed: res.data,
         feed_length: res.data.length
         })
          }
        })}

        if(id == 6){
          wx.request({
       url: 'https://www.tsingloo.com:4433/buildingActivity/EB',
        method: 'GET',
        success:function(res){
         console.log(res.data)
        that.setData({
          feed: res.data,
          feed_length: res.data.length
          })
            }
          })}

    if(id == 7){
    wx.request({
    url: 'https://www.tsingloo.com:4433/buildingActivity/IR',
    method: 'GET',
     success:function(res){
     console.log(res.data)
     that.setData({
      feed: res.data,
   feed_length: res.data.length
       })
    }
     })}

     if(id == 8){
      wx.request({
       url: 'https://www.tsingloo.com:4433/buildingActivity/IA',
        method: 'GET',
       success:function(res){
        console.log(res.data)
        that.setData({
         feed: res.data,
         feed_length: res.data.length
         })
        }
      })}

      if(id == 9){
        wx.request({
         url: 'https://www.tsingloo.com:4433/buildingActivity/HS',
          method: 'GET',
         success:function(res){
          console.log(res.data)
          that.setData({
           feed: res.data,
           feed_length: res.data.length
           })
          }
        })}

        if(id == 10){
          wx.request({
           url: 'https://www.tsingloo.com:4433/buildingActivity/BS',
            method: 'GET',
           success:function(res){
            console.log(res.data)
            that.setData({
             feed: res.data,
             feed_length: res.data.length
             })
            }
          })}

          if(id == 11){
            wx.request({
             url: 'https://www.tsingloo.com:4433/buildingActivity/DB',
              method: 'GET',
             success:function(res){
              console.log(res.data)
              that.setData({
               feed: res.data,
               feed_length: res.data.length
               })
              }
            })}

            if(id == 12){
              wx.request({
               url: 'https://www.tsingloo.com:4433/buildingActivity/ES',
                method: 'GET',
               success:function(res){
                console.log(res.data)
                that.setData({
                 feed: res.data,
                 feed_length: res.data.length
                 })
                }
              })}

     if(id == 13){
       wx.request({
       url: 'https://www.tsingloo.com:4433/buildingActivity/AS',
        method: 'GET',
       success:function(res){
      console.log(res.data)
      that.setData({
       feed: res.data,
       feed_length: res.data.length
       })
      }
      })}
       
      if(id == 14){
        wx.request({
          url: 'https://www.tsingloo.com:4433/buildingActivity/MA',
          method: 'GET',
          success:function(res){
            console.log(res.data)
            that.setData({
                feed: res.data,
                feed_length: res.data.length
              })
          }
        })}

        if(id == 15){
          wx.request({
            url: 'https://www.tsingloo.com:4433/buildingActivity/MB',
            method: 'GET',
            success:function(res){
              console.log(res.data)
              that.setData({
                  feed: res.data,
                  feed_length: res.data.length
                })
            }
          })}

    if(id == 16){
      wx.request({
        url: 'https://www.tsingloo.com:4433/buildingActivity/GYM',
        method: 'GET',
        success:function(res){
          console.log(res.data)
          that.setData({
              feed: res.data,
              feed_length: res.data.length
            })
        }
      })}
    }

  }
})
