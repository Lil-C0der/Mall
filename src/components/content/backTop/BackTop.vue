<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.back-top {
  width: 43px;
  height: 43px;
  position: fixed;
  right: 10px;
  bottom: 80px;
}
.back-top img {
  width: 100%;
  height: 100%;
  vertical-align: bottom;
}
</style>
