<template>
  <div class="cart-list">
    <scroll ref="scroll" class="shop-cart-scroll">
      <ul>
        <cart-list-item
          v-for="(n, i) in $store.state.cartList"
          :key="i"
          :item-info="n"
        ></cart-list-item>
      </ul>
    </scroll>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";

import Scroll from "components/common/scroll/Scroll";

import { mapGetters } from "vuex";
import { mapState } from "vuex";

export default {
  name: "cartList",
  data() {
    return {};
  },
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    // ...mapGetters(["cartList"])
    // ...mapState(["cartList"])
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.cart-list {
  position: relative;
  height: calc(100vh - 49px - 44px - 54px);
}
.shop-cart-scroll {
  position: absolute;
  height: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
