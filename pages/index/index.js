const app = getApp()
Page({
  data: {
    imgUrls: [{
      link: "../order/order",
      url: '../images/LunBo/lunbo1.jpg'
    }, {
      link: '/pages/contact/contact',
      url: '../images/LunBo/lunbo2.jpg'
    }, {
      link: '/pages/taocan/taocan',
      url: '../images/LunBo/lunbo3.jpg'
    }],
    indicatorDots: true, //小点
    autoplay: true, //是否自动轮播
    interval: 3000, //间隔时间
    duration: 3000, //滑动时间

    'headLineList': [{
        'title': '美发咨询...',
        'source': '美发咨询网',
        'date': '2019-X-X'
      }, {
        'title': '美发咨询...',
        'source': '美发咨询网',
        'date': '2019-X-X'
      }, {
        'title': '美发咨询...',
        'source': '美发咨询网',
        'date': '2019-X-X'
      }, {
        'title': '美发咨询...',
        'source': '美发咨询网',
        'date': '2019-X-X'
      },
      {
        'title': '美发咨询...',
        'source': '美发咨询网',
        'date': '2019-X-X'
      },
      {
        'title': '美发咨询...',
        'source': '美发咨询网',
        'date': '2019-X-X'
      },
    ],
  },
})