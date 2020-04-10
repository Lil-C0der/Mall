<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import bScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
      isShow: false
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  methods: {
    scrollTo(x, y, duration = 300) {
      this.scroll && this.scroll.scrollTo(x, y, duration);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
      // console.log("refresh");
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    getScrollY() {
      return this.scroll.y ? this.scroll.y : null;
    }
  },
  mounted() {
    this.scroll = new bScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad
    });

    // 监听滚动距离
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", pos => {
        this.$emit("scroll", pos.y);
      });
    }
    // TODO 上拉加载相关
    // 上拉加载;
    // if (this.pullUpLoad) {
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
    // }
  }
};
</script>

<style scoped></style>
