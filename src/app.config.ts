export default defineAppConfig({
  pages: [
    "pages/index/Index",
    "pages/ordering/Ordering",
    "pages/orders/Orders",
    "pages/user/User",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    backgroundColor: "#fff",
  },
  tabBar: {
    selectedColor: "#f90",
    list: [
      {
        pagePath: "pages/index/Index",
        text: "首页",
        iconPath: "assets/index.png",
        selectedIconPath: "assets/index-selected.png",
      },
      {
        pagePath: "pages/ordering/Ordering",
        text: "点餐",
        iconPath: "assets/ordering.png",
        selectedIconPath: "assets/ordering-selected.png",
      },
      {
        pagePath: "pages/orders/Orders",
        text: "订单",
        iconPath: "assets/orders.png",
        selectedIconPath: "assets/orders-selected.png",
      },
      {
        pagePath: "pages/user/User",
        text: "我的",
        iconPath: "assets/user.png",
        selectedIconPath: "assets/user-selected.png",
      },
    ],
  },
});
