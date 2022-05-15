const util = require('../../utils/util.js');
var WxParse = require('../components/wxParse/wxParse.js');
var date = new Date();
var currentHours = date.getHours();
var currentMinute = date.getMinutes();

const app = getApp();
Page({
  data: {
    startDate: "请选择日期",
    multiArray: [['今天', '明天', '3-2', '3-3', '3-4', '3-5'], [0, 1, 2, 3, 4, 5, 6], [0, 10, 20]],
    multiIndex: [0, 0, 0],
    //radio: '商务合作',
    html: '', // 实时富文本html结构
    element: '', // 
    ylShow: false, // 预览弹层
    article: '',  // 要解析的html结构数据
    titValue: '',  // 文章标题
    publisherValue: '', //活动发布者
    clubNameValue: '', // 活动所属俱乐部    ？
    activityDescValue: '', //活动简介
    timeValue: '', //活动时间
    array: ['AS','CB','DB','EB','EE','ES','FB','GYM','HS',
    'IA','IBSS','IR','PB','MA','MB','SA-SD'],
    index: 0,
    buildingValue: 'CB',//活动建筑物
    roomValue: '', //活动和房间
    targetPeopleValue: '', //目标人群
    estimateNumValue: '', //报名人数
    url: '',        // 上传图片url
    radioV: '',    // 单选按钮所选
    mlList: '',    // 目录列表/所有单选
    canRelease: true
  },

  

  getbuilding: function(e) {
    this.setData({
      index: e.detail.value,   
      building: this.data.array[e.detail.value]
    })
    console.log(this.data.index + '选择改变，携带值为' + this.data.building)
  },

  inputroom:function(event){
  this.setData({
  room: event.detail.value
  })
  console.log("room: " + this.data.room)
},

pickerTap:function() {
  date = new Date();

  var monthDay = ['今天','明天'];
  var hours = [];
  var minute = [];
  
  currentHours = date.getHours();
  currentMinute = date.getMinutes();

  // 月-日
  for (var i = 2; i <= 28; i++) {
    var date1 = new Date(date);
    date1.setDate(date.getDate() + i);
    var md = (date1.getMonth() + 1) + "-" + date1.getDate();
    monthDay.push(md);
  }

  var data = {
    multiArray: this.data.multiArray,
    multiIndex: this.data.multiIndex
  };

  if(data.multiIndex[0] === 0) {
    if(data.multiIndex[1] === 0) {
      this.loadData(hours, minute);
    } else {
      this.loadMinute(hours, minute);
    }
  } else {
    this.loadHoursMinute(hours, minute);
  }

  data.multiArray[0] = monthDay;
  data.multiArray[1] = hours;
  data.multiArray[2] = minute;

  this.setData(data);
},




bindMultiPickerColumnChange:function(e) {
  date = new Date();

  var that = this;

  var monthDay = ['今天', '明天'];
  var hours = [];
  var minute = [];

  currentHours = date.getHours();
  currentMinute = date.getMinutes();

  var data = {
    multiArray: this.data.multiArray,
    multiIndex: this.data.multiIndex
  };
  // 把选择的对应值赋值给 multiIndex
  data.multiIndex[e.detail.column] = e.detail.value;

  // 然后再判断当前改变的是哪一列,如果是第1列改变
  if (e.detail.column === 0) {
    // 如果第一列滚动到第一行
    if (e.detail.value === 0) {

      that.loadData(hours, minute);
      
    } else {
      that.loadHoursMinute(hours, minute);
    }

    data.multiIndex[1] = 0;
    data.multiIndex[2] = 0;

    // 如果是第2列改变
  } else if (e.detail.column === 1) {

    // 如果第一列为今天
    if (data.multiIndex[0] === 0) {
      if (e.detail.value === 0) {
        that.loadData(hours, minute);
      } else {
        that.loadMinute(hours, minute);
      }
      // 第一列不为今天
    } else {
      that.loadHoursMinute(hours, minute);
    }
    data.multiIndex[2] = 0;

    // 如果是第3列改变
  } else {
    // 如果第一列为'今天'
    if (data.multiIndex[0] === 0) {

      // 如果第一列为 '今天'并且第二列为当前时间
      if(data.multiIndex[1] === 0) {
        that.loadData(hours, minute);
      } else {
        that.loadMinute(hours, minute);
      }
    } else {
      that.loadHoursMinute(hours, minute);
    }
  }
  data.multiArray[1] = hours;
  data.multiArray[2] = minute;
  this.setData(data);
},

loadData: function (hours, minute) {

  var minuteIndex;
  if (currentMinute > 0 && currentMinute <= 10) {
    minuteIndex = 10;
  } else if (currentMinute > 10 && currentMinute <= 20) {
    minuteIndex = 20;
  } else if (currentMinute > 20 && currentMinute <= 30) {
    minuteIndex = 30;
  } else if (currentMinute > 30 && currentMinute <= 40) {
    minuteIndex = 40;
  } else if (currentMinute > 40 && currentMinute <= 50) {
    minuteIndex = 50;
  } else {
    minuteIndex = 60;
  }

  if (minuteIndex == 60) {
    // 时
    for (var i = currentHours + 1; i < 24; i++) {
      hours.push(i);
    }
    // 分
    for (var i = 0; i < 60; i += 10) {
      minute.push(i);
    }
  } else {
    // 时
    for (var i = currentHours; i < 24; i++) {
      hours.push(i);
    }
    // 分
    for (var i = minuteIndex; i < 60; i += 10) {
      minute.push(i);
    }
  }
},

loadHoursMinute: function (hours, minute){
  // 时
  for (var i = 0; i < 24; i++) {
    hours.push(i);
  }
  // 分
  for (var i = 0; i < 60; i += 10) {
    minute.push(i);
  }
},

loadMinute: function (hours, minute) {
  var minuteIndex;
  if (currentMinute > 0 && currentMinute <= 10) {
    minuteIndex = 10;
  } else if (currentMinute > 10 && currentMinute <= 20) {
    minuteIndex = 20;
  } else if (currentMinute > 20 && currentMinute <= 30) {
    minuteIndex = 30;
  } else if (currentMinute > 30 && currentMinute <= 40) {
    minuteIndex = 40;
  } else if (currentMinute > 40 && currentMinute <= 50) {
    minuteIndex = 50;
  } else {
    minuteIndex = 60;
  }

  if (minuteIndex == 60) {
    // 时
    for (var i = currentHours + 1; i < 24; i++) {
      hours.push(i);
    }
  } else {
    // 时
    for (var i = currentHours; i < 24; i++) {
      hours.push(i);
    }
  }
  // 分
  for (var i = 0; i < 60; i += 10) {
    minute.push(i);
  }
},

bindStartMultiPickerChange: function (e) {
  var that = this;
  var monthDay = that.data.multiArray[0][e.detail.value[0]];
  var hours = that.data.multiArray[1][e.detail.value[1]];
  var minute = that.data.multiArray[2][e.detail.value[2]];
  var month;
  var day;

  if (monthDay === "今天") {
    month = date.getMonth()+1;
    day = date.getDate();
    monthDay = month + "月" + day + "日";
  } else if (monthDay === "明天") {
    var date1 = new Date(date);
    date1.setDate(date.getDate() + 1);
    monthDay = (date1.getMonth() + 1) + "月" + date1.getDate() + "日";

  } else {
    month = monthDay.split("-")[0]; // 返回月
    day = monthDay.split("-")[1]; // 返回日
    monthDay = month + "月" + day + "日";
  }

  console.log("month is " + this.addZero(month))
  console.log("day is " + day)
  console.log("hours is " + hours)
  console.log("minute is " + minute)
  //2022_03_19 10:00:00

  var startDate = monthDay + " " + hours + ":" + minute;
  that.setData({
    startDate: startDate,
    activityDate: this.strintToDate(month,day,hours,minute)
  })
  console.log(that.data.activityDate)
},

  strintToDate:function(monthd,dayd,hoursd,minutesd)
  {
    let fullYear = date.getFullYear();
    let month = this.addZero(monthd);
    let day = this.addZero(dayd);
    let hours = this.addZero(hoursd);
    let minutes = this.addZero(minutesd);
    return fullYear+"_"+month+"_"+day+" "+hours+":"+minutes+":"+"00"
  },

  addZero:function(num)
  {
    if(0<= num && num<10)
    {
      num = "0" + num
      return num;
    }else
    {
      return num;
    }
  },

  getHtml(e) {  // 获取实时富文本
    this.setData({
      // html:e.detail.content.html
      element: `<p style="text-align: center;"><strong>${this.data.titValue}</strong></p>
      <p style="text-align: center;"><br></p>
      <p style="text-align: left;"><em>${this.data.clubNameValue}</em></p>
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
    //console.log(this.data.element);
  },
  submit() {   // 点击预览
    this.setData({
      ylShow: true
    })
    var temp = WxParse.wxParse('article', 'html', this.data.element+this.data.html, this, 5);

    this.setData({
      article: temp,

    })
  },



  uploadContent(){  // 点击发布

  
    if(this.data.html == ''){
      wx.showToast({
        title: "详情不可为空",
        icon: 'none',
        duration: 1000
      })
    } else {
      if(!this.data.canRelease)
      {
        return;
      }
      var nowTime = new Date().toJSON().substring(0, 10)
   
      wx.request({
        url: app.globalData.UrlHead + app.globalData.domainPort + '/createActivity',
        method: "POST",
        data:
        {
          activityTitle: this.data.titValue,
          activityDesc: this.data.activityDescValue,
          clubName: this.data.clubNameValue,
          publisher: this.data.publisherValue,
          activityDetail: this.data.html, 
          building: this.data.buildingValue,
          room: this.data.roomValue,
          estimateNum: this.data.estimateNumValue,
          targetPeople: this.data.targetPeopleValue,
          beginTime: this.data.activityDate,
          endTime:"2032_03_19 14:00:00",
          registryNum:0,
          hot:0
        },

        success:(res)=>
        {
          console.log(res.data)
          if(res.data>=0)
          {
            wx.showToast({
              title: "活动发布成功",
              icon: 'none',
              duration: 2000
            })   
            this.setData({
              canRelease:false
            })
            setTimeout(function () {
              wx.navigateBack()
            }, 2000)
  
       
          }else
          {
            wx.showToast({
              title: '活动信息有误！',
              icon:'error',
              duration:2000
           }) 
          }

        },
        fail:(res)=>
        {
          wx.showToast({
            title: '活动信息有误！',
            icon:'error',
            duration:2000
         }) 
        }
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
    wx.cloud.init();
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