import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// 路由懒加载
const Home = () => import("views/home/Home");
const Category = () => import("views/category/Category");
const Shopcart = () => import("views/shopcart/Shopcart");
const Profile = () => import("views/profile/Profile");
const Detail = () => import("views/detail/Detail");

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/shopcart",
    component: Shopcart,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/detail/:iid",
    component: Detail,
  },
];

export default new Router({
  routes,
  mode: "history",
});
