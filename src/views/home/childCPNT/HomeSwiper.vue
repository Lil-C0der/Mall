<template>
  <!-- <swiper :banners="banners"> -->
  <swiper :is-img-load="isAllImgLoad">
    <swiper-item v-for="(img, i) in banners" :key="i">
      <a :href="img.link">
        <img :src="img.image" alt="" @load="imgLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  data() {
    return {
      isLoad: false,
      isAllImgLoad: false,
      counter: 0
    };
  },
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    // 所有图片加载完成以后再给轮播图创建indicator
    imgLoad() {
      this.counter++;
      if (this.counter === this.banners.length) {
        this.isAllImgLoad = true;
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
a {
  display: block;
  height: 100%;
}
img {
  vertical-align: bottom;
}
</style>
