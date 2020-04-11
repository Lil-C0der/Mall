<template>
  <div>
    <li>
      <div class="item-pic" @click="itemClick">
        <img v-lazy="showImg" alt="" @load="imgLoad" />
      </div>

      <span class="item-info">
        <p class="item-title">{{ goodsItem.title }}</p>
        <div class="item-detail">
          <span class="item-price">{{ goodsItem.price }}</span>
          <span class="item-fav">{{ goodsItem.cfav }}</span>
        </div>
      </span>
    </li>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  data() {
    return {};
  },
  props: {
    goodsItem: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("itemImgLoad");
    },
    itemClick() {
      this.$router.push({ path: `detail/${this.goodsItem.iid}` });
    }
  },
  components: {}
};
</script>

<style scoped>
li {
  padding: 0 0 4px;
  margin: 4px 0 10px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
}
.item-pic {
  margin-bottom: 4px;
}
img {
  width: 100%;
  vertical-align: bottom;
}
.item-info .item-title {
  font-size: 14px;
  color: #666;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 1.5;
}
.item-info .item-detail {
  line-height: 1.5;
}
.item-detail .item-price {
  font-size: 12px;
  margin-right: 24px;
  color: var(--color-high-text);
}
.item-price::before {
  content: "￥";
}
.item-detail .item-fav {
  font-size: 12px;
  margin-left: 20px;
  position: relative;
}
.item-fav::before {
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  left: -18px;
  top: -3px;
  background: url("~assets/img/common/collect.svg") center no-repeat;
  background-size: 16px;
}
</style>
