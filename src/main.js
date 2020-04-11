import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./store";
import toast from "components/common/toast";

import FastClick from "fastclick";
import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false;

// 添加事件总线对象
Vue.prototype.$bus = new Vue();

Vue.use(toast);

Vue.use(VueLazyLoad);
// 300ms
FastClick.attach(document.body);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
