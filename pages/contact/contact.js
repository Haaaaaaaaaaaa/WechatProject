const app = getApp()
Page({
  data: {
    imgUrls: [{
      link: "../order/order",
      url: '../images/Contact/Shinei1.jpg'
    }, {
      link: '/pages/contact/contact',
        url: '../images/Contact/Shinei3.jpg'
    }, {
      link: '/pages/taocan/taocan',
        url: '../images/Contact/Shinei3.jpg'
    },
      {
        link: '/pages/taocan/taocan',
        url: '../images/Contact/Shinei4.jpg'
      }],
    indicatorDots: true, //小点
    autoplay: true, //是否自动轮播
    interval: 3000, //间隔时间
    duration: 3000, //滑动时间
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    other_list: ["总部：济南大学美发沙龙有限公司", "地址：济南市市中区南辛庄西路336号", "联系电话：400-123123123", "意见反馈","投诉举报"]
  }
})