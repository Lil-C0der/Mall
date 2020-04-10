<template>
  <div v-if="Object.keys(goods).length !== 0" class="goods-info">
    <div class="info-title">
      <p>{{ goods.title }}</p>
    </div>
    <div class="info-price">
      <span class="now-price">{{ goods.nowPrice }}</span>
      <span class="old-price">{{ goods.oldPrice }}</span>
      <span class="discount-tip" v-if="goods.discount">{{
        goods.discount
      }}</span>
    </div>
    <div class="info-other">
      <span v-for="(n, i) in goods.columns" :key="i">{{ n }}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="(n, i) in goods.services" :key="i">
        <img v-if="n.icon" :src="n.icon" class="service-icon" />
        <span>{{ n.name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Object,
      default: () => {}
    }
  },
  components: {}
};
</script>

<style scoped>
.goods-info {
  padding: 10px 10px 0;
  background-color: #fff;
  border-bottom: 10px solid #f6f6f6;
}

.info-title {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 400;
  color: #222;
  line-height: 1.5;
}
.info-price {
  margin-bottom: 15px;
}
.info-price .now-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.info-price .old-price {
  font-size: 14px;
  color: #999999;
  text-decoration-line: line-through;
  margin-left: 7px;
}
.info-price .discount-tip {
  font-size: 12px;
  color: #fff;
  margin: 4px;
  padding: 2px 5px;
  border-radius: 8px;
  background-color: var(--color-high-text);
  position: relative;
  top: -8px;
}
.info-other {
  color: #999999;
  line-height: 30px;
  display: flex;
  font-size: 14px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
}
.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.info-service .info-service-item {
  flex: 1;
  flex-wrap: nowrap;
  white-space: nowrap;
  text-align: center;
  /* margin: 0 10px; */
}
.info-service .service-icon {
  width: 12px;
  height: 12px;
  vertical-align: middle;
  margin-right: 2px;
}
.info-service-item span {
  font-size: 12px;
  color: #333;
}
</style>
