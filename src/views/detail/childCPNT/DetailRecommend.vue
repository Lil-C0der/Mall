<template>
  <div class="detail-recommend">
    <div class="recommend-hd">
      <span>热门推荐</span>
    </div>

    <div class="recommend-bd">
      <goods-list :goodsList="recommendList"></goods-list>
    </div>
  </div>
</template>

<script>
import GoodsList from "components/content/goods/GoodsList/";

export default {
  name: "DetailRecommend",
  data() {
    return {};
  },
  props: {
    recommendList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    GoodsList
  }
};
</script>

<style scoped>
.detail-recommend {
  background-color: #fff;
}
.detail-recommend .recommend-hd {
  background-color: #fff;
  border-top: 10px solid #f6f6f6;
  padding: 20px 15px 10px;
}
.recommend-bd {
  background-color: #f6f6f6;
}
</style>
