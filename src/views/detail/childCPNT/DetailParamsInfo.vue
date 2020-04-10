<template>
  <div class="params-info">
    <div class="rule-wrap">
      <table class="params-rule-table">
        <tr v-for="(n, i) in params.rule" :key="i">
          <td v-for="(val, index) in n" :key="index">
            <span class="params-text">{{ val }}</span>
          </td>
        </tr>
      </table>
    </div>

    <div class="split-bar"></div>

    <div class="info-wrap">
      <table class="params-info-table">
        <tr v-for="(n, i) in params.info" :key="i">
          <td>
            <span class="params-text">{{ n.key }}</span>
          </td>
          <td>
            <span class="params-text" style="color: #eb4868;">{{
              n.value
            }}</span>
          </td>
        </tr>
      </table>

      <div v-if="params.img" class="info-img">
        <img :src="params.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  data() {
    return {};
  },
  props: {
    params: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {},
  components: {}
};
</script>

<style scoped>
.params-info {
  background-color: #fff;
  border-top: 10px solid #f6f6f6;
}
.rule-wrap,
.info-wrap {
  padding: 25px 15px;
  font-size: 14px;
}
.params-info table {
  border-collapse: collapse;
  width: 100%;
}

tr td {
  padding: 16px 10px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
td .params-text {
  display: block;
  max-width: 300px;
  text-align: left;
  color: #666;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.split-bar {
  height: 0;
  width: 100%;
  border-bottom: 10px solid #f6f6f6;
}
.info-img img {
  width: 100%;
}
</style>
