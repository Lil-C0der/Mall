<template>
  <div class="tab">
    <div
      class="tab-item"
      @click="itemClick(i)"
      v-for="(n, i) in titles"
      :key="i"
    >
      <span class="tab-item-text" :class="{ Active: currentIndex === i }">{{
        n
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    itemClick(i) {
      // 获取对应列表的数据
      this.$emit("tabClick", this.currentIndex, i);
      this.currentIndex = i;
      this.$bus.$emit("tabClick", i);
    }
  },
  mounted() {
    this.$bus.$on("tabActive", index => {
      this.currentIndex = index;
    });
  },
  beforeUpdate() {},
  deactivated() {
    this.$bus.$off("tabActive");
  },

  components: {}
};
</script>

<style scoped>
.tab {
  width: 100%;
  display: flex;
  height: 38px;
  line-height: 38px;
  justify-content: center;
  font-size: 14px;
  background-color: #fff;
}
.tab .tab-item {
  flex: 1;
  display: flex;
  justify-content: center;
}
.tab-item .tab-item-text {
  display: block;
  align-content: center;
  width: 40px;
  height: 30px;
  line-height: 30px;
  margin: 4px 0;
}
.tab-item-text.Active {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-tint);
}
</style>
