// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    mername:"详情",
    num:9,
    w:1
  },
  dashang:function(e){
    var num=this.data.num+1;
    this.setData({
      num:num
    })
  },
  addclass:function(e){
    console.log(e.target.dataset)
    this.setData({
      w: e.target.dataset.w
    })
    setTimeout(() => {
      this.setData({
        w:1
      })
    },1000)
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({//动态修改标题  未传参？？？
      title: '详情',
    })
  },
  jiarshuj: function() {
    wx.showToast({
      title: '已加入书架',
      icon: 'none',
      duration: 1000
    })
    setTimeout(() => {
      wx.hideToast(); //隐藏
    }, 3000)
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

  },
  showAllAction: function () {
    this.setData({
      isShowAllContent: !this.data.isShowAllContent
    })
  }
})