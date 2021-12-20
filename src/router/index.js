import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Start from "../views/Start.vue";
import Signin from "../views/Signin.vue";
import Search from "../views/Search.vue";
import Notice from "../views/Notice.vue";
import Profile from "../views/Profile.vue";
import Artists from "../views/Artists.vue";

Vue.use(VueRouter);

const route = "/ecc/msatou/raict_app/";
// /ecc/msatou/raict_app

const routes = [
  {
    path: `${route}`,
    name: "Start",
    component: Start,
  },
  {
    path: `${route}` + `home`,
    name: "Home",
    component: Home,
  },
  {
    path: `${route}` + `signin`,
    name: "Signin",
    component: Signin,
  },
  {
    path: `${route}` + `search`,
    name: "Search",
    component: Search,
  },
  {
    path: `${route}` + `notice`,
    name: "Notice",
    component: Notice,
  },
  {
    path: `${route}` + `profile`,
    name: "Profile",
    component: Profile,
  },
  {
    path: `${route}` + `artists`,
    name: "Artists",
    component: Artists,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
