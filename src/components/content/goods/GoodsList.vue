<template>
  <div>
    <ul>
      <goods-list-item
        class="list-item"
        v-for="(item, i) in goodsList"
        :key="i"
        :goodsItem="item"
      />
    </ul>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  data() {
    return {};
  },
  props: {
    goodsList: {
      type: Array,
      default: () => []
    },
    listScrollY: {
      type: Array,
      default: () => []
    }
  },
  methods: {},
  components: {
    GoodsListItem
  }
};
</script>

<style scoped>
ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.list-item {
  width: 48%;
  background-color: #f6f6f6;
}
.list-item:nth-child(2n-1) {
  padding-left: 4px;
}
.list-item:nth-child(2n) {
  padding-right: 4px;
}
</style>
