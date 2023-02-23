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
  },
  tabBar: {
    selectedColor: "#f90",
    list: [
      {
        pagePath: "pages/index/Index",
        text: "首页",
        iconPath: "../assets/tab-bar/index.png",
        selectedIconPath: "../assets/tab-bar/index-selected.png",
      },
      {
        pagePath: "pages/ordering/Ordering",
        text: "点餐",
        iconPath: "../assets/tab-bar/ordering.png",
        selectedIconPath: "../assets/tab-bar/ordering-selected.png",
      },
      {
        pagePath: "pages/orders/Orders",
        text: "订单",
        iconPath: "../assets/tab-bar/orders.png",
        selectedIconPath: "../assets/tab-bar/orders-selected.png",
      },
      {
        pagePath: "pages/user/User",
        text: "我的",
        iconPath: "../assets/tab-bar/user.png",
        selectedIconPath: "../assets/tab-bar/user-selected.png",
      },
    ],
  },
});
