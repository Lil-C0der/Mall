<template>
  <nav-bar id="detail-navbar">
    <template v-slot:left>
      <div class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" class="back-pic" alt="" />
      </div>
    </template>

    <template v-slot:center>
      <tab-control :titles="titles" class="detail-tab-control"></tab-control>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import tabControl from "components/content/tabControl/TabControl";

export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"]
    };
  },
  components: {
    NavBar,
    tabControl
  },
  methods: {
    backClick() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.detail-tab-control {
  font-size: 14px;
}
#detail-navbar .back-pic {
  transform: translateY(50%);
  margin-bottom: 11px;
}
</style>
