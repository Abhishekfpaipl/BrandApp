import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PoNew from "@/components/PO/PoNew.vue";
import PoOrder from "@/components/PO/PoOrder.vue";
import PoReady from "@/components/PO/PoReady.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path:'/PoNew',
    name:'PoNew',
    component:PoNew,
  },
  {
    path:'/PoReady',
    name:'PoReady',
    component:PoReady,
  },
  {
    path:'/PoOrder',
    name:'PoOrder',
    component:PoOrder,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
