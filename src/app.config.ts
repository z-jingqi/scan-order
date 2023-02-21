export default defineAppConfig({
  pages: [
    "pages/index/Index",
    "pages/ordering/Ordering",
    "pages/orders/Orders",
    "pages/mine/Mine",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/index/Index",
        text: "首页",
      },
      {
        pagePath: "pages/ordering/Ordering",
        text: "点餐",
      },
      {
        pagePath: "pages/orders/Orders",
        text: "订单",
      },
      {
        pagePath: "pages/mine/Mine",
        text: "我的",
      },
    ],
  },
});
