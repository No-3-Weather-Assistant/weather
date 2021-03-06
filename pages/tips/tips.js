// pages/tips/tips.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cond_code_d:0,
    basic:{},
    today:{},
    movie_share:[{
      icon1:'../imgs/movie/1.1.jpg',
      name1:'《小森林-夏秋篇》',
      brief1:' 无法融入喧嚣浮躁的大都会，女孩市子(桥本爱饰)回到了位于东北地区的老家小森村，在这个几乎与世隔绝的村落里渡过了宁静岁月。她每日里在稻田里忙活，间或采集季节性的山珍烹饪美食，生活平淡却多彩。某天，一封信件送到市子手中，寄信人竟是五年前某个雪天突然失踪的母亲福子(桐島かれん饰)。市子按照母亲留下的菜谱做出道道美味，同时思索着自己对于母亲究竟是怎样的存在。在好友纪子(松冈茉优 饰)和青梅竹马裕太(三浦贵大饰)的陪伴下，年轻人们度过了漫长的冬天。冰雪消融，新一年的耕作即将开始。此时此刻，市子却对自己的未来产生了迷惑…… ',
      icon2:'../imgs/movie/1.2.jpg',
      name2:'《海街日记》',
      brief2:'临海古都镰仓，顺山而成的小镇，不起眼的角落里生活着香田家四姐妹。她们的父亲早年和情人离家出走，母亲则干脆将女儿们抛给了外婆照顾。外婆去世后，外孙女们继承了这栋有着悠久历史的大房子。过早担负起家庭重任的大姐香田幸（绫濑遥 饰），尽心尽力照顾着两个妹妹佳乃（长泽雅美 饰）、千佳（夏帆 饰）健康成长。这一天，父亲去世的消息传到姐妹手中。她们结伴而行参加了父亲的葬礼，并且结识了从未谋面的异母妹妹浅野铃（广濑丝丝 饰）。许是血缘中的亲近之感，幸在临行前邀请铃搬来镰仓同住。未过多久，抱着对姐姐们的憧憬，铃迈入了父亲曾经生活过的房子。四季流转，姐妹们的故事悄然上演…… 　　本片根据吉田秋生的同名漫画改编。',
      icon3:'../imgs/movie/1.3.jpg',
      name3:'《菊次郎的夏天》',
      brief3:'暑假到来，自幼丧父的小学三年级学生正男（关口雄介饰），如今和奶奶生活在一起，暑假特别无聊。他拿出母亲从外地寄回的信，准备自己一个人去爱知县丰桥市看望母亲。 邻居阿姨（岸本加世子饰）发现后，决定帮正男完成心愿。她拿出一笔钱做为旅费，还安排游手好闲的老公菊次郎（北野武饰）陪伴正男一起踏上寻母之途。可是在第一天，菊次郎就把老婆给的钱全部输光，于是两个人只好步行前往爱知。 一路搭顺风车，惹了不少麻烦后，菊次郎终于带着正男到了他母亲的家，但小男孩却十分沮丧。归途中，菊次郎努力安慰他，二人过得十分愉快，夏天就这么过去了。'
    },
    
    {
      icon1:'../imgs/movie/1.1.jpg',
      name1:'《小森林-夏秋篇》',
      brief1:' 无法融入喧嚣浮躁的大都会，女孩市子(桥本爱饰)回到了位于东北地区的老家小森村，在这个几乎与世隔绝的村落里渡过了宁静岁月。她每日里在稻田里忙活，间或采集季节性的山珍烹饪美食，生活平淡却多彩。某天，一封信件送到市子手中，寄信人竟是五年前某个雪天突然失踪的母亲福子(桐島かれん饰)。市子按照母亲留下的菜谱做出道道美味，同时思索着自己对于母亲究竟是怎样的存在。在好友纪子(松冈茉优 饰)和青梅竹马裕太(三浦贵大饰)的陪伴下，年轻人们度过了漫长的冬天。冰雪消融，新一年的耕作即将开始。此时此刻，市子却对自己的未来产生了迷惑…… ',
      icon2:'../imgs/movie/1.2.jpg',
      name2:'《海街日记》',
      brief2:'临海古都镰仓，顺山而成的小镇，不起眼的角落里生活着香田家四姐妹。她们的父亲早年和情人离家出走，母亲则干脆将女儿们抛给了外婆照顾。外婆去世后，外孙女们继承了这栋有着悠久历史的大房子。过早担负起家庭重任的大姐香田幸（绫濑遥 饰），尽心尽力照顾着两个妹妹佳乃（长泽雅美 饰）、千佳（夏帆 饰）健康成长。这一天，父亲去世的消息传到姐妹手中。她们结伴而行参加了父亲的葬礼，并且结识了从未谋面的异母妹妹浅野铃（广濑丝丝 饰）。许是血缘中的亲近之感，幸在临行前邀请铃搬来镰仓同住。未过多久，抱着对姐姐们的憧憬，铃迈入了父亲曾经生活过的房子。四季流转，姐妹们的故事悄然上演…… 　　本片根据吉田秋生的同名漫画改编。',
      icon3:'../imgs/movie/1.3.jpg',
      name3:'《菊次郎的夏天》',
      brief3:'暑假到来，自幼丧父的小学三年级学生正男（关口雄介饰），如今和奶奶生活在一起，暑假特别无聊。他拿出母亲从外地寄回的信，准备自己一个人去爱知县丰桥市看望母亲。 邻居阿姨（岸本加世子饰）发现后，决定帮正男完成心愿。她拿出一笔钱做为旅费，还安排游手好闲的老公菊次郎（北野武饰）陪伴正男一起踏上寻母之途。可是在第一天，菊次郎就把老婆给的钱全部输光，于是两个人只好步行前往爱知。 一路搭顺风车，惹了不少麻烦后，菊次郎终于带着正男到了他母亲的家，但小男孩却十分沮丧。归途中，菊次郎努力安慰他，二人过得十分愉快，夏天就这么过去了。'
    },
    {
      icon1:'../imgs/movie/2.1.jpg',
      name1:'《星运里的错》',
      brief1:'海泽尔（谢琳·伍德蕾 Shailene Woodley 饰）是一名十六岁的美丽少女，正处在黄金年代的她本该和其他同龄人一样尽情享受生命和青春带来的快乐与希望，但无情的病魔找上了海泽尔，她是一名肺癌患者。 尽管最近病情有所好转，但海泽尔的心情却并没有因此而轻松半分，癌症随时可能复发的阴影和无法中断的治疗如影随形，让海泽尔对生命几乎失去了所有的热情和希望。一次偶然中，海泽尔在癌友互助会中结识了名叫奥古斯都（安塞尔·埃尔格特 Ansel Elgort 饰）的英俊男孩，他所患的是骨癌。两个境遇相似的年轻人很快就越走越近，他们在一起，探索着上帝留给他们的小小的一片世界，海泽尔也因此看到了未来和希望。 ',
      icon2:'../imgs/movie/2.2.jpg',
      name2:'《木乃伊》',
      brief2:'埃及城市哈姆纳塔是历代法老墓地，相传此处拥有法老留下的大量珍奇异宝，源源不断的人前往掘金，但却生还者寥寥。哈姆纳塔因此成为谜样的所在，获名“亡灵之城”。 图书管理员伊芙琳（Rachel Weisz 瑞切尔·薇茨饰）偶然得到一张哈姆纳塔的地图，大为兴奋的她决定和哥哥一起去那儿考古，他们找到曾经的幸存者欧康诺（Brendan Fraser 布兰登·弗雷泽饰），三人结伴前往。 一段惊险旅途后，伊芙琳一行与其他人终于抵达哈姆纳塔，可是最恐怖的事情发生了：三千年前赛提一世的大祭司伊莫顿犯下罪行，受到最严厉的诅咒被做成木乃伊封缄在石棺里，他的灵魂却不慎被唤醒，拥有了无比法力的伊莫顿即将血洗埃及，给世界带来无边灾难……',
      icon3:'../imgs/movie/2.3.jpg',
      name3:'《the fall》',
      brief3:'电影特技演员罗伊沃克（Lee Pace 饰）在拍摄一组骑马从桥上一跃而下的镜头时严重受伤，导致下半身瘫痪失去知觉。此时的他极度绝望，万念俱灰，只想一死了之。正当罗伊沮丧之际，因摔断胳膊住进医院的5岁小女孩亚历珊卓（Catinca Untaru 饰）闯入了罗伊的世界。 这两个年龄悬殊的病友就此交上了朋友，亚历珊卓每天来罗伊的病房报到，只为听朋友讲那个玄幻神奇的故事。而罗伊用这个顺口编出的故事吸引小女孩，却想完成借机完成他的自杀计划…… 本片荣获2007年柏林影展玻璃熊特别表扬-最佳影片奖、Sitges - Catalonian International Film Festival的最佳影片奖、2008年奥斯汀影评人协会奖最佳剧本。'
    },
    {
      icon1:'../imgs/movie/3.1.jpg',
      name1:'《岁月的童话》',
      brief1:' 妙子今年27岁了，她向公司请了十天的假，到乡间享受向往已久的乡村生活。自此，她便常常想起了她五年级那一年的往事。一路上不断回想五年级时发生的往事，到达目的地后，迎接她的是一名乡村小伙子，比她小2岁的俊雄。她开始了农民的生活，并乐在其中，向俊雄分享她小时候的点点滴滴，在乡间看到的景色都能勾起美好的回忆。两人相处甚欢，一起感受岁月流逝的痕迹。正在她要离开的前一天晚上，俊雄的奶奶竟向妙子建议与俊雄结婚，顿时又牵起了妙子的回忆……',
      icon2:'../imgs/movie/3.2.jpg',
      name2:'《言叶之庭》',
      brief2:'一心想当一名制鞋师的高中生秋月孝雄，在下雨的早晨像往常一样逃课了，他一如往常在一座日本庭园风格的公园里画鞋的素描。一日，孝雄邂逅了在喝罐装饮料的神秘年长女性雪野百香里。于是，两人心有灵犀总是在落雨的时间不约而同的相聚。渐渐的两人的心靠近了。孝雄想为居无定所的雪野制作一双可以走的很远的鞋。如六月的天时晴时雨，两人的恋情能否如梅雨初晴呢？',
      icon3:'../imgs/movie/3.3.jpg',
      name3:'《哪啊哪啊神去村》',
      brief3:'因为考大学失败，刚刚告别高中时代的都市青年平野勇气（染谷将太 饰）站在人生的十字路口。他偶然被林业培训生宣传材料上的美丽女孩所吸引，于是脑瓜一热来到三重县一个连手机信号都没有的偏僻小山村接受为期一年的林业培训课程。一开始他吊儿郎当，毫无干劲儿，因此饱受前辈饭田与喜（伊藤英明 饰）的斥责。正当勇气准备逃离之际，与封面美女石井直纪（长泽雅美 饰）不期而遇让他鬼使神差地又回到宿舍。前期培训结束，勇气随着饭田前辈来到神去村，跟随师父（光石研 饰）开始实地修行与学习。严苛的环境打磨着这个都市青年的骄傲和浮躁，不知不觉中他已成长为足以独当一面的优秀伐木工…… 本片根据三浦紫苑的同名原作改编。'
    },
    
    {
      icon1:'../imgs/movie/4.1.jpg',
      name1:'《南极料理人》',
      brief1:'本片改编自曾任日本南极观测队厨师的西村淳根据自身经历创作的散文集《有趣的南极料理人》。本是海员厨师的西村淳（堺雅人 饰）被派往冰天雪地的南极圆顶富士基地为七名考察队员担任厨师，妻子（西田尚美 饰）只好独自抚养8岁的女儿和刚出生不久的幼子。在冰天雪地的南极寒地，吃，是考察队七位成员——冰河学助手川村泰士（高良健吾 饰）、气象学家平林雅彦（小浜正宽 饰）、通讯员西平亮（黑田大辅 饰）、医生福田正志（丰原功补 饰）、气象学家兼队长金田浩（古关安广 饰）、机师御子柴健（古馆宽治 饰）和冰河学家本山秀行（生濑胜久 饰）——枯燥生活中的最大乐趣。西村淳想尽办法烹饪各种各样的美味料理，而围绕着吃，八个寂寞的男人也演出无数令人忍俊不禁的生活趣事。 　 ',
      icon2:'../imgs/movie/4.2.jpg',
      name2:'《海蒂和爷爷》',
      brief2:'海蒂（阿努克·斯戴芬 Anuk Steffen 饰）很小就失去了父母，无依无靠伶仃飘零，所幸得到了姨妈的收留，然而，这照顾却不能够持久，最终，海蒂来到了阿尔卑斯山，投奔住在那里的爷爷（布鲁诺·甘茨 Bruno Ganz 饰）。在村民们眼中，爷爷是个倔强而又古怪的老头，对其敬而远之，然而海蒂那双天真无邪的眼睛发现了爷爷深藏在内心的柔情，一老一少两人卸下心防，相依为命。 一个名为皮特放羊男孩成为了海蒂的新朋友，两人之间结下的深厚的友谊。可是好景不长，海蒂被迫离开了爷爷和皮特，来到了富家小姐克劳拉（伊莎贝尔·奥特曼 Isabelle Ottmann 饰）家中，做她的玩伴。克劳拉的双腿生来不能行走，个性亦因此而内向怪癖，海蒂的到来替她打开了新世界的大门，找回了久违的快乐。',
      icon3:'../imgs/movie/4.3.jpg',
      name3:'《小森林-冬春篇》',
      brief3:'由于无法融入喧嚣吵闹的大城市，平凡女孩市子（桥本爱 饰）选择回到自幼生长的老家——位于日本东北地区的小森村。这里没有过多时尚文明的色彩，当地人过着日出而作日落而息的传统生活，他们靠天吃饭，靠着双手经营人生。生活虽不富裕，心中则是满满的充实和欢喜。受妈妈（桐島かれん 饰） 影响，市子似乎对亲手制作各种美味而廉价的料理有着格外浓厚的兴趣。妈妈失踪已经很久，对料理的回忆与再现成为母女间别具特色的交流方式。更何况还有取自大自然的各种食材，又怎能暴殄天物浪费了大好的韶光？在好友纪子（松冈茉优 饰）和裕太（三浦贵大 饰）的陪伴下，市子静静地走过了春夏秋冬…… 本片根据漫画家五十岚大介的原作改编。'
    },
    {
      icon1:'../imgs/movie/5.1.jpg',
      name1:'《2012》',
      brief1:'太阳活动异常，地球内部的能量平衡系统面临崩溃，玛雅人的预言即将实现，人类将遭遇灭顶之灾。各国政府已经联手开始秘密制造方舟，希望能躲过这一浩劫。以写科幻小说谋生的杰克逊（约翰·库萨克 John Cusack 饰）在带孩子们到黄石公园渡周末时发生一连串怪事，而且遇到了神经兮兮的查理（伍迪·哈里森 Woody Harrelson 饰)，查理告诉他世界末日即将来临。伴随着火山爆发，强烈地震以及海啸，杰克逊带领自己的家人驾驶一架临时租来的飞机冲出被死神阴霾瞬间笼罩的城市上空，开始寻找查理口中各国政府正在联合秘密制造的方舟。在生死攸关的时刻，一些伟大的鬼魂将脱颖而出，而一些自私的心灵将无所遁形，当千千万万个生灵通过各种方法来到方舟制造基地之时，方舟有限的容纳数量引发前所未有的恐慌。最终，仅存的人们用互爱和对生命的尊重渡过了难关。', 
      icon2:'../imgs/movie/5.2.jpg',
      name2:'《幽灵公主》',
      brief2:'为了拯救危难中的村民，阿斯达卡的右手中了凶煞神的诅咒。达卡只好离开亲人往西方流浪以寻找解除诅咒的方法。旅途中他遇到了由幻姬大人带领的穷苦村民在麒麟兽的森林里开采铁矿，提炼矿石。 白狼神莫娜和她养大的人类女孩“幽灵公主”’桑对幻姬恨之入骨，因为她们觉得幻姬带领众人破坏了森林。想帮助人类的阿斯达卡被桑深深吸引，他理解她，但为了帮助穷人又不得不和她作战。一次战斗中，阿斯达卡被麒麟兽所救，他的立场更加摇摆不定。 这时，以疙瘩和尚为首的一群人来杀麒麟兽，幻姬以火枪击毙了麒麟，麒麟的头被疙瘩和尚抢走。愤怒的麒麟的灵魂为夺回自己的头，大肆破坏着森林。阿斯达卡和桑联手决定帮麒麟夺回头颅。',
     icon3:'../imgs/movie/5.3.jpg',
      name3:'《美人鱼》',
      brief3:'刘轩的地产计划涉及填海工程，威胁靠海以为生的居民。背负家族秘密的珊被派遣前往阻止。二人在交手过程中互生情愫，虽然轩最终因为爱上珊而停止填海工作，但她因意外受伤而消失于大海。'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getLocation();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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
      var basic = res.data.HeWeather6[0].basic;
      _this.setData({
        basic:basic,
        today: daily_forecast_today,
        cond_code_d:parseInt(daily_forecast_today.cond_code_d)/100,
        });
    }
  })
},
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})