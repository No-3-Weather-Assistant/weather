//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    cond_code_d:0,
    lifestyle:[{
     id:0,
     icon:'../imgs/weather/1.png',
     txt:'无'
    },
    {
     id:1,
     icon:'../imgs/weather/1.png',
     txt: '今天天气很棒，适合出游哦！快叫上亲朋好友一起。'
    },
    {
      id:2,
      icon:'../imgs/weather/2.png',
      txt:'弱不禁风的你可能会被大风刮走的，千万别出门 。' 
     },
     {
      id:3,
      icon:'../imgs/weather/3.png',
      txt:'想被淋成落汤鸡吗？出门居然不带伞。你以为雨天很浪漫吗？' 
     },
     {
      id:4,
      icon:'../imgs/weather/4.png',
      txt:'下雪了好美啊！慢着！万一下大了怎么办' 
     },
     {
      id:5,
      icon:'../imgs/weather/5.png',
      txt:'答应我，珍爱生命！不要出门。' 
     }],
    modalHidden:true,
    update: '',
    basic:{},
    today:{},
    tomorrow:{},
    afterTomor:{},
    todyIcon:'../imgs/weather/999.png',
    tomorrowIcon:'../imgs/weather/999.png',
    afterTomorIcon:'../imgs/weather/999.png'
  },
  //按钮与弹窗控制
  buttonTap:function(){
  this.setData({
    modalHidden:false
  })
  },
  modalCandel:function(){
    this.setData({
      modalHidden:true
    })
  },
  modalConfirm:function(){
    this.setData({
      modalHidden:true
    })
  },
  onShow: function () {
    this.getLocation();
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  //获取位置信息
  getLocation:function(){
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        that.getWeatherInfo(latitude, longitude);
      }
    })
  },
  
  //右上角分享功能
  onShareAppMessage: function (res) {
   var that = this;
   wx.showShareMenu({
     withShareTicket:true
   })
   return {
     title: '快来看看今日的天气',
     path: '/pages/index/index?id=' + that.data.scratchId,
     imageUrl: 'http://img.wxcha.com/file/201811/27/001978cc3f.jpeg',
     success: function (res) {
       // 转发成功
       console.log("转发成功:" + JSON.stringify(res));
       that.shareClick();
     },
     fail: function (res) {
       // 转发失败
       console.log("转发失败:" + JSON.stringify(res));
     }
   }
 },

  // 获取天气信息（以下不能改）
  getWeatherInfo: function (latitude, longitude){
    var _this = this;
    var key = 'bb23e9852bcf472cbf70a0cc0814a691';
    //需要在微信公众号的设置-开发设置中配置服务器域名
    var url = 'https://free-api.heweather.net/s6/weather?key='+key+'&location=' + longitude + ',' + latitude;
    wx.request({
      url: url, 
      data: {},
      method: 'GET',
      success: function (res) {
        var daily_forecast_today = res.data.HeWeather6[0].daily_forecast[0];//今天预报
        var daily_forecast_tomorrow = res.data.HeWeather6[0].daily_forecast[1];//明天天预报
        var daily_forecast_afterTomor = res.data.HeWeather6[0].daily_forecast[2];//后天预报
        var basic = res.data.HeWeather6[0].basic;
        var update = res.data.HeWeather6[0].update.loc;//更新时间
        _this.setData({
          update:update,
          basic:basic,
          today: daily_forecast_today,
          tomorrow:daily_forecast_tomorrow,
          afterTomor: daily_forecast_afterTomor,
          cond_code_d:parseInt(daily_forecast_today.cond_code_d)/100,
          todyIcon: '../imgs/weather/' + daily_forecast_today.cond_code_d+'.png', //在和风天气中下载天气的icon图标，根据cond_code_d显示相应的图标
          tomorrowIcon: '../imgs/weather/' + daily_forecast_tomorrow.cond_code_d+'.png',
          afterTomorIcon: '../imgs/weather/' + daily_forecast_afterTomor.cond_code_d+'.png'
        });
      }
    })
  }
  })