module.exports = {
  base: '/zaobao/',
  title: "每日时报",
  description:
    "科技新闻日报，偏向前端系。以文章、工具、新闻、视频等需求分类。",
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'images/'
      }
    }
  },
  themeConfig: {
    repo: "wubaiqing/zaobao",
    lastUpdated: 'Last Updated',
    docsDir: 'docs',
    algolia: {},
    sidebarDepth: 2,
    sidebar: [
      ["/", "1. 介绍"],
      {
        title: "2018 年 12 月",
        collapsable: false,
        children: [
          ["/2018/12/25", "2018年12月25日"],
          ["/2018/12/24", "2018年12月24日"],
          ["/2018/12/20", "2018年12月20日"],
          ["/2018/12/17", "2018年12月17日"],
          ["/2018/12/14", "2018年12月14日"],
          ["/2018/12/11", "2018年12月11日"],
          ["/2018/12/06", "2018年12月06日"],
          ["/2018/12/05", "2018年12月05日"],
        ]
      }, {
        title: "2018 年 11 月",
        collapsable: false,
        children: [
          ["/2018/11/27", "2018年11月27日"],
          ["/2018/11/26", "2018年11月26日"],
          ["/2018/11/22", "2018年11月22日"],
          ["/2018/11/20", "2018年11月20日"],
          ["/2018/11/15", "2018年11月15日"],
          ["/2018/11/13", "2018年11月13日"],
          ["/2018/11/08", "2018年11月08日"],
          ["/2018/11/06", "2018年11月06日"],
          ["/2018/11/05", "2018年11月05日"],
          ["/2018/11/02", "2018年11月02日"],
        ]
      }, {
        title: "2018 年 10 月",
        collapsable: true,
        children: [
          ["/2018/10/31", "2018年10月31日"],
          ["/2018/10/29", "2018年10月29日"],
          ["/2018/10/25", "2018年10月25日"],
          ["/2018/10/24", "2018年10月24日"],
          ["/2018/10/23", "2018年10月23日"],
          ["/2018/10/22", "2018年10月22日"],
          ["/2018/10/19", "2018年10月19日"],
          ["/2018/10/18", "2018年10月18日"],
          ["/2018/10/16", "2018年10月16日"],
          ["/2018/10/15", "2018年10月15日"],
          ["/2018/10/11", "2018年10月11日"],
          ["/2018/10/10", "2018年10月10日"],
          ["/2018/10/08", "2018年10月08日"],
        ]
      }, {
        title: "2018 年 09 月",
        collapsable: true,
        children: [
          ["/2018/09/29", "2018年09月29日"],
          ["/2018/09/28", "2018年09月28日"],
          ["/2018/09/27", "2018年09月27日"],
          ["/2018/09/22", "2018年09月22日"],
          ["/2018/09/21", "2018年09月21日"],
          ["/2018/09/20", "2018年09月20日"],
          ["/2018/09/19", "2018年09月19日"],
          ["/2018/09/18", "2018年09月18日"],
          ["/2018/09/17", "2018年09月17日"],
          ["/2018/09/15", "2018年09月15日"],
          ["/2018/09/14", "2018年09月14日"],
          ["/2018/09/13", "2018年09月13日"],
          ["/2018/09/12", "2018年09月12日"],
          ["/2018/09/11", "2018年09月11日"],
          ["/2018/09/10", "2018年09月10日"],
          ["/2018/09/08", "2018年09月08日"],
          ["/2018/09/07", "2018年09月07日"],
          ["/2018/09/06", "2018年09月06日"],
          ["/2018/09/05", "2018年09月05日"],
          ["/2018/09/04", "2018年09月04日"],
          ["/2018/09/02", "2018年09月02日"],
          ["/2018/09/01", "2018年09月01日"],
        ]
      }, {
        title: "2018 年 08 月",
        collapsable: true,
        children: [
          ["/2018/08/31", "2018年08月31日"],
          ["/2018/08/30", "2018年08月30日"],
          ["/2018/08/29", "2018年08月29日"],
          ["/2018/08/28", "2018年08月28日"],
          ["/2018/08/27", "2018年08月27日"],
          ["/2018/08/26", "2018年08月26日"],
          ["/2018/08/24", "2018年08月24日"],
        ]
      }
    ],
  }
};
