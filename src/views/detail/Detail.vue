<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll
      :probe-type="3"
      @scroll="contentScroll"
      class="detail-scroll-wrapper"
      ref="scroll"
    >
      <detail-swiper :img="topImg" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info
        :detail-info="detailInfo"
        v-if="detailInfo.detailImage"
        @imgLoad="imgLoad"
      />
      <detail-params-info ref="params" :params="goodsParams" />
      <detail-comment ref="comment" :comment="comment" />
      <detail-recommend ref="recommend" :recommend-list="recommendList" />
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backTop" />
    <detail-bottom-bar @addToCart="addToCart" />

    <!-- <toast :msg="toastMsg" :show="toastShow"></toast> -->
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

import DetailNavBar from "./childCPNT/DetailNavBar";
import DetailSwiper from "./childCPNT/DetailSwiper";
import DetailBaseInfo from "./childCPNT/DetailBaseInfo";
import DetailShopInfo from "./childCPNT/DetailShopInfo";
import DetailGoodsInfo from "./childCPNT/DetailGoodsInfo";
import DetailParamsInfo from "./childCPNT/DetailParamsInfo";
import DetailComment from "./childCPNT/DetailComment";
import DetailRecommend from "./childCPNT/DetailRecommend";
import DetailBottomBar from "./childCPNT/DetailBottomBar";

import { imgListenerMixin, backTopMixin } from "common/mixin";

import { mapActions } from "vuex";

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParams
} from "network/detail";

import debounce from "common/utils";

export default {
  name: "Detail",
  data() {
    return {
      iid: {
        type: String,
        default: null
      },
      goods: {},
      topImg: [],
      shop: {},
      detailInfo: {},
      goodsParams: {},
      comment: {},
      recommendList: [],
      themeOffsetTop: [0],
      currentIndex: 0,
      toastShow: false,
      toastMsg: ""
    };
  },
  mixins: [imgListenerMixin, backTopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailComment,
    DetailRecommend,
    Scroll,
    DetailBottomBar
  },
  methods: {
    ...mapActions(["addCart"]),
    getDetail(iid) {
      getDetail(iid).then(res => {
        const data = res.result;
        console.log(data);

        this.topImg = data.itemInfo.topImages;
        // 获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
          // TODO 商品规格 data.skuInfo
        );
        // 获取店铺信息
        this.shop = new Shop(data.shopInfo);
        // 获取更多商品描述
        this.detailInfo = data.detailInfo;
        // 加载商品参数等
        this.goodsParams = new GoodsParams(data.itemParams);
        // 获取评论信息
        if (data.rate.cRate) {
          this.comment = data.rate.list[0];
        }
      });
    },
    // 获取推荐商品数据
    getRecommend() {
      getRecommend().then(res => {
        this.recommendList = res.data.list;
      });
    },
    // 商品详情中所有图片加载完成以后刷新一次页面
    imgLoad() {
      this.$refs.scroll.refresh();
      // 所有图片加载完成 获取各个选项的高度偏移
      this.themeOffsetTop.push(this.$refs.params.$el.offsetTop);
      this.themeOffsetTop.push(this.$refs.comment.$el.offsetTop);
      this.themeOffsetTop.push(this.$refs.recommend.$el.offsetTop);
      // FIXME 导航栏44px高度bug
      this.themeOffsetTop = this.themeOffsetTop.map((n, i) => n > 0 && n - 44);
    },
    // 锚点定位
    scrollTo(i) {
      this.$refs.scroll.scrollTo(0, -this.themeOffsetTop[i], 500);
    },
    // 监听页面滚动
    contentScroll(y) {
      // 是否显示BackTop
      this.showBackTop(y);
      // 顶部Tab标签随滚动高度变换
      if (-y >= this.themeOffsetTop[3]) {
        this.currentIndex = 3;
      } else if (-y >= this.themeOffsetTop[2]) {
        this.currentIndex = 2;
      } else if (-y >= this.themeOffsetTop[1]) {
        this.currentIndex = 1;
      } else if (-y >= this.themeOffsetTop[0]) {
        this.currentIndex = 0;
      }
    },
    // 添加到购物车
    addToCart() {
      const product = {};
      product.count = 1;
      product.iid = this.iid;
      product.img = this.topImg[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.nowPrice;
      product.realPrice = this.goods.realPrice;

      // this.$store.dispatch("addCart", product).then(() => {
      //   console.log("dddd");
      // });
      this.addCart(product).then(res => {
        // this.toastMsg = res;
        // this.toastShow = true;
        // setTimeout(() => {
        //   this.toastShow = false;
        // }, 500);
        this.$toast.show(res, 1200);
      });
    }
  },
  created() {
    // 发送请求 根据id获取商品数据
    this.iid = this.$route.params.iid;
    this.getDetail(this.iid);
    this.getRecommend();
  },
  mounted() {
    this.$bus.$on("tabClick", i => {
      this.scrollTo(i);
    });
  },
  beforeDestroy() {
    this.$bus.$off("tabClick");
  },
  watch: {
    currentIndex: function(currentIndex) {
      this.$bus.$emit("tabActive", this.currentIndex);
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 999;
  background-color: #fff;
  height: 100vh;
}
#detail .detail-scroll-wrapper {
  overflow: hidden;
  height: calc(100% - 44px - 66px);
  background-color: #f6f6f6;
}
</style>
