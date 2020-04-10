<template>
  <div class="check-button" :class="{ 'selector-active': isChecked }"></div>
</template>

<script>
export default {
  name: "CheckButton",
  data() {
    return {};
  },
  components: {},
  methods: {},
  props: {
    isChecked: {
      type: Boolean,
      default: true
      // default: false
    }
  }
};
</script>

<style scoped>
.check-button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #ccc;
}
.selector-active {
  background: url(~assets/img/shopcart/tick.svg) no-repeat center;
  background-color: var(--color-tint);
  border: transparent;
}
</style>
