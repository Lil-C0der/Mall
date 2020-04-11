<template>
  <tab-bar class="tab-bar">
    <tab-bar-item link="/home" activeColor="#FF5777">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/home_active.svg"
        alt
      />
      <span slot="item-text">首页</span>
    </tab-bar-item>
    <tab-bar-item link="/category" activeColor="#FF5777">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/category_active.svg"
        alt
      />
      <span slot="item-text">分类</span>
    </tab-bar-item>

    <tab-bar-item link="/shopcart" activeColor="#FF5777">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/shopcart_active.svg"
        alt
      />
      <span slot="item-text">购物车</span>
    </tab-bar-item>

    <tab-bar-item link="/profile" activeColor="#FF5777">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/profile_active.svg"
        alt
      />
      <span slot="item-text">我的</span>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  data() {
    return {
      publicPath: process.env.BASE_URL,
      items: [
        {
          key: "home",
          src: "img/tabbar/home.svg",
          src_active: "img/tabbar/home_active.svg",
          text: "首页"
        },
        {
          key: "category",
          src: "img/tabbar/category.svg",
          src_active: "img/tabbar/category_active.svg",
          text: "分类"
        },
        {
          key: "shopcart",
          src: "img/tabbar/shopcart.svg",
          src_active: "img/tabbar/shopcart_active.svg",
          text: "购物车"
        },
        {
          key: "profile",
          src: "img/tabbar/profile.svg",
          src_active: "img/tabbar/profile_active.svg",
          text: "档案"
        }
      ]
    };
  },
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style scoped>
.tab-bar {
  z-index: 99;
}
</style>
