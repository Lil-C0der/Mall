<template>
  <div v-show="isShow" class="toast">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      msg: "",
      isShow: false
    };
  },
  components: {},
  methods: {
    show(msg, duration = 1000) {
      this.isShow = true;
      this.msg = msg;

      setTimeout(() => {
        this.isShow = false;
      }, duration);
    }
  }
};
</script>

<style scoped>
.toast {
  width: 200px;
  height: 40px;
  border-radius: 10px;
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  margin-top: -20px;
  margin-left: -100px;
  line-height: 40px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 22px;
}
</style>
