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
        'title': '额头高适合什么刘海 额头高女生刘海发型造型',
        'source': '美发咨询网',
        'date': '2019-11-20'
      }, {
        'title': '齐刘海适合什么脸型 分分钟秒变女神',
        'source': '美发咨询网',
        'date': '2019-11-21'
      }, {
        'title': '菱形脸适合什么刘海',
        'source': '美发咨询网',
        'date': '2019-11-13'
      }, {
        'title': '最近最流行的男士造型合集',
        'source': '美发咨询网',
        'date': '2019-11-12'
      },
      {
        'title': '最帅男生造型 秒变男神',
        'source': '美发咨询网',
        'date': '2019-11-15'
      },
      {
        'title': '女神造型合集 最美2019',
        'source': '美发咨询网',
        'date': '2019-11-20'
      },
    ],
  },
})