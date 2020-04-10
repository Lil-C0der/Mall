<template>
  <div class="bottom-bar">
    <div class="bar-item-wrap bar-left">
      <div class="bar-item">
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div class="bar-item">
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div class="bar-item">
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item-wrap bar-right">
      <div class="bar-item cart" @click="addToCart">
        <span class="text">
          加入购物车
        </span>
      </div>
      <div class="bar-item buy">
        <span class="text">
          购&nbsp;买
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  data() {
    return {};
  },
  components: {},
  methods: {
    addToCart() {
      this.$emit("addToCart");
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  width: 100%;
  height: 66px;
  background-color: #fff;
  border-top: 1px solid #f1f1f1;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
}
.bar-item-wrap {
  display: flex;
  flex: 1;
}
.bar-right {
  padding: 16px 4px;
  padding-left: 0;
  display: flex;
}
.bar-item-wrap .bar-item {
  flex: 1;
}
.bar-left .bar-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.bar-left .text {
  font-size: 13px;
}
.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 0 auto 4px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.bar-left .service {
  background-position: 0 -54px;
}
.bar-left .shop {
  background-position: 0 -98px;
}
.bar-right {
  color: #fff;
  line-height: 58px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px;
}
.bar-right .cart {
  background-color: #f0e36c;
  color: #fff;
  border-radius: 40px 0 0 40px;
  flex: 0.6;
}

.bar-right .buy {
  background-color: #f18498;
  border-radius: 0 40px 40px 0;
  flex: 0.4;
}
.bar-right .bar-item .text {
  display: block;
  text-align: center;
  line-height: 34px;
}
</style>
