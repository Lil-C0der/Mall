<template>
  <div class="recommend">
    <div v-for="n in recommends" :key="n.acm" class="recommend-item">
      <a :href="n.link">
        <div class="recommend-item-pic"><img :src="n.image" alt="" /></div>
        <span class="recommend-item-text">{{ n.title }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  data() {
    return {};
  },
  props: {
    recommends: {
      type: Array,
      default: () => []
    }
  },
  components: {}
};
</script>

<style scoped>
.recommend {
  /* margin: 10px 0 0; */
  padding: 10px 0 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff;
}
.recommend .recommend-item {
  flex: 1;
  padding: 0 8px;
  width: 80px;
}
.recommend-item a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.recommend-item .recommend-item-pic {
  flex: 1;
  width: 80px;
}
.recommend .recommend-item-pic img {
  height: 100%;
  width: 100%;
  display: block;
}
.recommend-item .recommend-item-text {
  line-height: 24px;
  font-size: 14px;
  color: #333;
}
</style>
