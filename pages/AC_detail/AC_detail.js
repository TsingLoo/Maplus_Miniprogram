var WxParse = require('../components/wxParse/wxParse.js');
Page({
  data: {
    radio: '商务合作',
    html: '', // 实时富文本html结构
    element: '',
    ylShow: false, // 预览弹层
    article: '',  // 要解析的html结构数据
    titValue: '',  // 文章标题
    publisherValue: '', //活动发布者
    activityDescValue: '', //活动简介
    timeValue: '', //活动时间
    roomValue: '', //活动地点
    targetPeopleValue: '', //目标人群
    estimateNumValue: '', //报名人数
    url: '',        // 上传图片url
    radioV: '',    // 单选按钮所选
    mlList: '',    // 目录列表/所有单选
  },
  onLoad: function(options) {
    
  },
  onChange(val){  // 单选按钮发生变化
    this.setData({
      radioV: val.detail
    })
  },
  getHtml(e) {  // 获取实时富文本
    this.setData({
      // html:e.detail.content.html
      element: `<p style="text-align: center;"><strong>${this.data.titValue}</strong></p>
      <p style="text-align: center;"><br></p>
      <p style="text-align: left;"><em>${this.data.publisherValue}</em></p>
      <p style="text-align: center;"><br></p>
      <p style="text-align: left;"><em>${this.data.activityDescValue}</em></p> 
      <p style="text-align: center;"><br></p>
      <p style="text-align: left;"><em>${this.data.timeValue}</em></p> 
      <p style="text-align: center;"><br></p>
      <p style="text-align: left;"><em>${this.data.roomValue}</em></p> 
      <p style="text-align: center;"><br></p>
      <p style="text-align: left;"><em>${this.data.targetPeopleValue}</em></p> 
      <p style="text-align: center;"><br></p>
      <p style="text-align: left;"><em>${this.data.estimateNumValue}</em></p> 
      <p style="text-align: center;"><br></p>`,
      html: `
      ${e.detail.content.html}`
    })
    console.log(this.data.html);
    console.log(this.data.element);
  },
  submit() {   // 点击预览
    this.setData({
      ylShow: true
    })
   WxParse.wxParse('article', 'html', this.data.element+this.data.html, this, 5);


  },
  uploadContent(){  // 点击发布
    if(this.data.html == ''){
      wx.showToast({
        title: "文章不可为空",
        icon: 'none',
        duration: 1000
      })
    } else {
      var nowTime = new Date().toJSON().substring(0, 10)
      wx.cloud.database().collection('uploadContentList')
      .add({
        data: {
          articleTitle: this.data.titValue,
          publisher: this.data.publisherValue,
          activityDesc: this.data.activityDescValue,
          time: this.data.timeValue,
          buildingRoom: this.data.roomValue,
          targetPeople: this.data.targetPeopleValue,
          estimateNum: this.data.estimateNumValue,
          type: this.data.radioV,
          htmlContent: this.data.html,
          url: this.data.url,
          nowTime: nowTime,
        }
      }).then(res => {
          wx.switchTab({
            url: '/pages/shop/shop',
          }) 
          wx.showToast({
            title: "文章发布成功",
            icon: 'none',
            duration: 2000
          })   
      }).catch(err => {
        console.log('添加失败',err);
      })
    }
  },
  onClose(){  // 关闭预览
    this.setData({
      ylShow: false
    })
  },
  insertImage(){ // 选择图片，将本地图片路径插入显示文本中 暂时显示
    wx.chooseImage({
      count: 1,
      success: res => {
        this.uploadMage(res.tempFilePaths[0])
      }
    })
  },
  uploadMage(article){  // 将图片上传到云存储
    let suffix = /\.\w+$/.exec(article)[0]      
    wx.cloud.uploadFile({
      cloudPath: 'articeSrc/' + Date.now() + '-' + Math.random() * 1000000 + suffix,         // 云存储路径
      filePath: article                   // 要上传的文件资源路径(本地)
    }).then(res => {
      let imgUrl = res.fileID
      this.setData({
        url: imgUrl
      })
      this.selectComponent('#hf_editor').insertSrc(imgUrl); // 将云存储图片路径插入文本中
      // console.log(res);
    }).catch(error => {
      console.log(error);
    })
  },
})