import Vue from "vue";
import VueRouter from "vue-router";
import VueHead from "vue-head";
import Home from "../views/Home.vue";
import Start from "../views/Start.vue";
import Signin from "../views/Signin.vue";
import Search from "../views/Search.vue";
import Live from "../views/Live.vue";
import Notice from "../views/Notice.vue";
import Profile from "../views/Profile.vue";
import Artist from "../views/Artist.vue";
import Event from "../views/Event.vue";
import Ticket from "../views/Ticket.vue";

Vue.use(VueRouter);
Vue.use(VueHead);

const route = "/";
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
    path: `${route}` + `live`,
    name: "Live",
    component: Live,
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
    path: `${route}` + `search/:artistId`,
    name: "Artist",
    component: Artist,
    props: (route) => ({ artistId: Number(route.params.artistId) }),
  },
  {
    path: `${route}` + `event/:eventId`,
    name: "Event",
    component: Event,
    props: (route) => ({ eventId: Number(route.params.eventId) }),
  },
  {
    path: `${route}` + `live/:eventId`,
    name: "Ticket",
    component: Ticket,
    props: (route) => ({ eventId: Number(route.params.eventId) }),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
