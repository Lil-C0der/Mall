<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 黑色图标 -->
    <div v-show="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <!-- 粉色图标 -->
    <div v-show="isActive">
      <slot name="item-icon-active"></slot>
    </div>

    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  methods: {
    itemClick() {
      this.$router.push(this.link);
    }
  },
  props: {
    link: String,
    activeColor: { type: String, default: "#000" }
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      // 活跃路由路径中包含目标item的link 则indexOf不为-1 表示图标被选中 则返回true
      return this.$route.path.indexOf(this.link) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 6px;
}
.tab-bar-item img {
  height: 20px;
  flex: 1;
  vertical-align: middle;
}
.tab-bar-item span {
  font-size: 14px;
}
</style>
