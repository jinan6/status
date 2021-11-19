// 配置
window.Config = {

  // 站点名
  SiteName: '仅安の网站监控',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm785868570-fc15ca8eacff2276178a9ad6',
    'm785868591-9d6a41e81d4ad68093c7d55a'
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
//    {
//       text: '个人主页',
//       url: 'https://blog.jinan6.vip/'
//     },
    {
      text: '博客',
      url: 'https://jinan6.vip/'
    }
  ]
};
