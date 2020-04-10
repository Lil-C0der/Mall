<template>
  <swiper :is-img-load="isAllImgLoad" class="swiper-container">
    <swiper-item v-for="(img, i) in img" :key="i">
      <img :src="img" alt="" @load="imgLoad" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
  data() {
    return {
      counter: 0,
      isAllImgLoad: false
    };
  },
  props: {
    img: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    imgLoad() {
      this.counter++;
      // 所有图片加载完成以后再给轮播图创建indicator
      if (this.counter === this.img.length) {
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
  width: 100%;
  vertical-align: bottom;
}
.swiper-container {
  height: 326px;
}
</style>
