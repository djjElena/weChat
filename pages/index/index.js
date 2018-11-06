//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    fen:40,
    miao:59,
    awdx1: "#fff",
    bg1: "#ED424B",
    awdx2:"",
    bg2:"",
    awdx3: "",
    bg3: "",
    awdx4: "",
    bg4: "",
  },
  awdxs1: function () {
    this.setData({
      awdx1: "#fff",
      bg1: "#ED424B",
      awdx2: "",
      bg2: "",
      awdx3: "",
      bg3: "",
      awdx4: "",
      bg4: "",
    })
  },
  awdxs2:function(){
    this.setData({
      awdx1: "",
      bg1: "",
      awdx2: "#fff",
      bg2: "#ED424B",
      awdx3: "",
      bg3: "",
      awdx4: "",
      bg4: "",
    })
  },
  awdxs3: function () {
    this.setData({
      awdx1: "",
      bg1: "",
      awdx2: "",
      bg2: "",
      awdx3: "#fff",
      bg3: "#ED424B",
      awdx4: "",
      bg4: "",
    })
  },
  awdxs4: function () {
    this.setData({
      awdx1: "",
      bg1: "",
      awdx2: "",
      bg2: "",
      awdx3: "",
      bg3: "",
      awdx4: "#fff",
      bg4: "#ED424B",
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    setInterval(()=>{
      var f = --this.data.fen;
      if(f==0){f=59}
      this.setData({
        fen:f
      })
    },6000)
    setInterval(() => {
      var m = --this.data.miao;
      if (m == 0) { m = 59 }
      this.setData({
        miao: m
      })
    }, 1000)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showFl:function(e){
    wx.navigateTo({
      url:"/pages/class/class"
    })
  },
  showDs:function(e){
    wx.navigateTo({
      url:"/pages/dashen/dashen"
    })
  },
  showPhb:function(e){
    wx.navigateTo({
      url: '/pages/paihangb/paihangb',
    })
  },
  showsous:function (e) {
    wx.navigateTo({
      url: '/pages/sous/sous',
    })
  },
  showxianq: function (e) {
    wx.navigateTo({
      url: '/pages/details/details',
    })
  },
  //返回顶部
  fanhui: function () {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  }
})
