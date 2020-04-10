<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.nav-bar {
  width: 100%;
  height: 44px;
  line-height: 44px;
  display: flex;
}
.nav-bar .center,
.nav-bar .left,
.nav-bar .right {
  text-align: center;
  line-height: 44px;
}
.nav-bar .center {
  flex: 1;
}
.nav-bar .left,
.nav-bar .right {
  width: 60px;
}
</style>
