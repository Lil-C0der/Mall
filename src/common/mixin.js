import debounce from "./utils";
import { BACKTOP_DISTANCE } from "./const";

import BackTop from "components/content/backTop/BackTop";

export const imgListenerMixin = {
  mounted() {
    // 利用事件总线监听item中图片加载
    const refresh = debounce(this.$refs.scroll.refresh, 300);
    // 用一个变量存放$on中的回调函数 离开时方便$off
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("itemImgLoad", this.itemImgListener);
    console.log("mixin");
  },
  deactivated() {
    // 离开时移除监听
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
  beforeDestroy() {
    // 组件销毁时移除监听
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  }
};

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    };
  },
  components: {
    BackTop
  },
  methods: {
    // 回到顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    showBackTop(y) {
      // 显示BackTop按钮
      //   this.isShowBackTop = Math.abs(y) > 1000;
      this.isShowBackTop = -y > BACKTOP_DISTANCE;
    }
  }
};
