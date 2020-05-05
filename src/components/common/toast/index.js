import Toast from "./Toast.vue";

const obj = {};
obj.install = function(Vue) {
  // 创建组件的构造器
  const toastConstructor = Vue.extend(Toast);
  // 创建一个toast实例对象
  const toast = new toastConstructor();
  // 将toast实例挂载到一个元素上
  toast.$mount(document.createElement("div"));
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast;
};

export default obj;
