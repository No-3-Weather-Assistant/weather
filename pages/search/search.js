//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    update: '',
    basic:{},
    today:{},
    tomorrow:{},
    afterTomor:{},
    todyIcon:'../imgs/weather/999.png',
    tomorrowIcon:'../imgs/weather/999.png',
    afterTomorIcon:'../imgs/weather/999.png',
    inpVal:"",
    flag : 1, // 

    //markers: [], 
    latitude: "", 
    longitude: "", 
    city:"",
   // rgcData: {}

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

  // 获取天气信息
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
          todyIcon: '../imgs/weather/' + daily_forecast_today.cond_code_d+'.png', 
          tomorrowIcon: '../imgs/weather/' + daily_forecast_tomorrow.cond_code_d+'.png',
          afterTomorIcon: '../imgs/weather/' + daily_forecast_afterTomor.cond_code_d+'.png'
        });
      }
    })
  },

  //获取输入框的值
  input_event: function(event){
    var val =event.detail.value;
    this.setData({
      inpVal:val,
      flag:1
    })
  },

  //获取inpVal的值
  tap_event : function(){
    //判断
    var that=this;
    if(this.data.inpVal.length==0){
      return ;
    }
    this.setData({
      city:this.data.inpVal,
    })
    console.log("输入框",this.data.city);
    that.getCityData(this.data.city);
    // that.catchError(this.data.flag);
  },

getCityData: function (city){
  var _this = this;
  var key = 'bb23e9852bcf472cbf70a0cc0814a691';
  //需要在微信公众号的设置-开发设置中配置服务器域名
  var url = 'https://free-api.heweather.net/s6/weather?key='+key+'&location=' + city;
  wx.request({
    url: url, 
    data: {},
    method: 'GET',
    success: function (res) {
      console.log(res.data);
      var daily_forecast_today = res.data.HeWeather6[0].daily_forecast[0];//今天预报
      var daily_forecast_tomorrow = res.data.HeWeather6[0].daily_forecast[1];//明天天预报
      var daily_forecast_afterTomor = res.data.HeWeather6[0].daily_forecast[2];//后天预报
      var basic = res.data.HeWeather6[0].basic;
      var update = res.data.HeWeather6[0].update.loc;//更新时间
      _this.setData({
        flag : 1,
        update:update,
        basic:basic,
        today: daily_forecast_today,
        tomorrow:daily_forecast_tomorrow,
        afterTomor: daily_forecast_afterTomor,
        todyIcon: '../imgs/weather/' + daily_forecast_today.cond_code_d+'.png', 
        tomorrowIcon: '../imgs/weather/' + daily_forecast_tomorrow.cond_code_d+'.png',
        afterTomorIcon: '../imgs/weather/' + daily_forecast_afterTomor.cond_code_d+'.png'
      });
    },

  })
  console.log(this.data.flag)
  _this.catchError(this.data.flag);
},

//输入错误
catchError(err){
    if(err==1){}
    else{
      wx.showToast({
        title : '城市输入无效',
        icon : 'none'
      });
    };
    this.setData({
       flag: 0,
    })
}
})