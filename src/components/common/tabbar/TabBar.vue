<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scoped>
#tab-bar {
  width: 100%;
  height: 49px;
  justify-content: center;
  align-content: center;
  display: flex;
  text-align: center;
  position: fixed;
  bottom: 0px;
  background-color: #e5e5e5;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.2);
}
</style>
