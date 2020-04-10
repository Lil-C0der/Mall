<template>
  <div id="detail-info">
    <div class="info-desc clearfix">
      <div class="start left"></div>
      <div class="info-text">
        <span>
          {{ detailInfo.desc }}
        </span>
      </div>
      <div class="end right"></div>
    </div>
    <div class="info-key">
      <span>
        {{ detailInfo.detailImage[0].key }}
      </span>
    </div>
    <div class="info-pic">
      <div class="info-pic-wrap">
        <img
          alt=""
          v-for="(n, i) in detailInfo.detailImage[0].list"
          :key="i"
          :src="n"
          @load="imgLoad"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  data() {
    return {
      counter: 0
    };
  },
  props: {
    detailInfo: {
      type: Object,
      default: () => {}
    }
  },
  components: {},
  methods: {
    imgLoad() {
      // 商品详情中所有图片加载完成时refresh页面 重新计算高度
      if (++this.counter === this.imgListNum) {
        this.$emit("imgLoad");
      }
    }
  },
  computed: {
    imgListNum: function() {
      return this.detailInfo.detailImage[0].list.length;
    }
  },
  mounted() {}
};
</script>

<style scoped>
#detail-info {
  border-bottom: 10px solid #f6f6f6;
  padding-top: 25px;
  background-color: #fff;
}

.info-key,
.info-desc {
  padding: 0 15px;
  margin-bottom: 20px;
  width: 100%;
}
.info-desc .start,
.info-desc .end {
  width: 30%;
  height: 1px;
  background-color: #000;
  position: relative;
}
.start::before,
.end::before {
  content: "";
  width: 5px;
  height: 5px;
  position: absolute;
  right: 0;
  top: -5px;
  background-color: #000;
}
.start::before {
  left: 0;
  top: 0;
}
.info-desc .info-text {
  padding: 15px;
  font-size: 14px;
  font-size: 14px;
  color: #666;
}
.info-pic-wrap img {
  width: 100%;
  padding: 0 4px;
}
</style>
