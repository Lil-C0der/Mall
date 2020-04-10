<template>
  <div class="cart-bottom-bar">
    <div class="select-all">
      <check-button
        :isChecked="isSelectAll"
        @click.native="selectAll"
        class="select-all-btn left"
      ></check-button>
      <span class="select-all-text left">全选</span>
    </div>

    <span class="total-price left">合计:￥{{ totalPrice }}</span>
    <div class="check-product right">
      <span class="check-product-text"
        >去结算 &#40;{{ selectedCount }}&#41;</span
      >
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";

import * as types from "store/types";

import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar",
  data() {
    return {};
  },
  components: { CheckButton },
  activated() {},
  computed: {
    ...mapGetters(["isSelectAll", "totalPrice", "selectedCount"])
  },
  methods: {
    selectAll() {
      if (this.isSelectAll) {
        this.$store.commit(types.UNSELECTALL);
      } else this.$store.commit(types.SELECTALL);
    }
  }
};
</script>

<style scoped>
.cart-bottom-bar {
  width: 100%;
  height: 54px;
  line-height: 54px;
  z-index: 1;
  position: fixed;
  bottom: 49px;
  background: linear-gradient(to bottom, #fff 0%, #e5e5e5 100%);
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
  padding-left: 5px;
}
.cart-bottom-bar .select-all-text {
  color: #888;
  font-size: 16px;
  margin-right: 16px;
}
.cart-bottom-bar .select-all-btn {
  margin: 17px 8px 0 0;
}
.total-price {
  color: #666;
}
.check-product {
  background-color: #f18498;
  padding: 0 38px;
}
.check-product-text {
  color: #fff;
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 700;
}
</style>
