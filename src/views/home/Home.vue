<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot：center class="center"
        ><span slot="center" class="center">购物街</span>
      </template>
    </nav-bar>

    <tab-control
      ref="tabControlClone"
      @tabClick="tabClick"
      class="tab-control tab-control-fake"
      v-show="isTabShow"
      :titles="['流行', '新款', '精选']"
    ></tab-control>
    <scroll
      class="scroll-wrapper"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />

      <tab-control
        ref="tabControl"
        @tabClick="tabClick"
        class="tab-control"
        :titles="['流行', '新款', '精选']"
      ></tab-control>

      <good-list class="good-list" :goods-list="showGoods"></good-list>
    </scroll>

    <back-top v-show="isShowBackTop" @click.native="backTop" />
  </div>
</template>

<script>
import HomeSwiper from "./childCPNT/HomeSwiper";
import RecommendView from "./childCPNT/RecommendView";
import FeatureView from "./childCPNT/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodsList";

import { imgListenerMixin, backTopMixin } from "common/mixin";
import { POP, NEW, SELL } from "common/const";
import { getMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      keywords: [],
      currentType: POP,
      index: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      isTabShow: false,
      tabOffsetTop: 0,
      saveY: 0,
      listY: null,
      prevIndex: 0
    };
  },
  mixins: [imgListenerMixin, backTopMixin],
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodList,
    Scroll
    // BackTop,
  },
  // 组件创建之后请求首页数据
  created() {
    // 轮播图数据
    this.getMultidata();
    // 商品列表数据
    this.getHomeGoods(POP);
    this.getHomeGoods(NEW);
    this.getHomeGoods(SELL);
  },
  mounted() {},
  updated() {
    // 获取tabControl的高度偏移
    this.$nextTick(() => {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      this.$refs.scroll.refresh();
    });
  },
  deactivated() {
    // 离开时保存当前滚动的高度
    this.saveY = this.$refs.scroll.getScrollY();
  },
  activated() {
    this.$refs.scroll.refresh();
    this.saveY && this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  beforeDestroy() {
    this.listY = [];
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  watch: {
    tabOffsetTop: function() {
      // 初始化GoodsList滚动高度
      this.listY = [-this.tabOffsetTop, -this.tabOffsetTop, -this.tabOffsetTop];
    }
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    // tab栏点击 获取数据 滚动到上次停留的位置
    tabClick(prevIndex, currentIndex) {
      this.leaveTab(prevIndex);
      this.getData(currentIndex);
    },
    // BUG 可能有BUG!!!
    //保留GoodsList组件滚动位置
    leaveTab(i) {
      this.prevIndex = i;
      this.listY[this.prevIndex] = this.$refs.scroll.getScrollY();
    },
    // 获取三个标签页中的数据
    getData(i) {
      switch (i) {
        case 0:
          this.currentType = POP;
          break;
        case 1:
          this.currentType = NEW;
          break;
        case 2:
          this.currentType = SELL;
          break;
      }
      // 回到上次离开时的高度 第一次进入则回到顶部
      if (this.listY[i]) {
        this.$refs.scroll.scrollTo(0, this.listY[i], 500);
      } else {
        this.$refs.scroll.scrollTo(0, -this.tabOffsetTop, 500);
      }
      // 同步两个tab的currentIndex
      this.$refs.tabControl.currentIndex = this.$refs.tabControlClone.currentIndex = i;
    },
    // 监听页面滚动
    contentScroll(y) {
      // 显示BackTop
      this.showBackTop(y);
      // 吸顶效果
      this.isTabShow = Math.abs(y) > this.tabOffsetTop;
    },
    loadMore() {
      this.$refs.scroll.refresh();
      this.getHomeGoods(this.currentType);
    },

    /**
     * 网络请求相关方法
     */
    getMultidata() {
      // 请求轮播图以及推荐模块的数据
      getMultidata()
        .then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
        .catch();
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
        this.$refs.scroll.refresh();
      });
    }
  }
};
</script>

<style scoped>
#home {
  width: 100%;
  height: 100vh;
  text-align: center;
  line-height: 44px;
  background-color: #f6f6f6;
  position: relative;
}
#home .scroll-wrapper {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
#home .center {
  font-size: 22px;
  font-weight: 500;
  color: #fff;
}
#home .home-nav {
  background-color: var(--color-tint);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}
.tab-control {
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 999;
  position: relative;
}

.good-list {
  background-color: #f6f6f6;
}
</style>
