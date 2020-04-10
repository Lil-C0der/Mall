<template>
  <div class="shopcart">
    <nav-bar class="shopcart-nav-bar">
      <template v-slot:center>
        <span class="shopcart-title">购物车&nbsp;({{ sum }}) </span>
      </template>
    </nav-bar>
    <cart-list> </cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childCPNT/CartList";
import CartBottomBar from "./childCPNT/CartBottomBar";

import { mapGetters } from "vuex";

export default {
  name: "Shopcart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  activated() {},
  computed: {
    ...mapGetters(["sum"])
  }
};
</script>
<style scoped>
.shopcart-nav-bar {
  background-color: var(--color-tint);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}
.shopcart-nav-bar .shopcart-title {
  font-size: 22px;
  font-weight: 500;
  color: #fff;
}
</style>
