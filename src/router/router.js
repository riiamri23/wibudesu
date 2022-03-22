import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/Home.vue";
import Detail from "@/views/detail/Detail.vue";
import Watch from "@/views/watch/Watch.vue";
// import Contact from "@/views/Contact.vue";

const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: "/",
        name: 'home',
        component: Home,
      },
      {
        path: '/detail',
        name: 'detail',
        component: Detail
      },
      // {
      //   path: '/watch',
      //   component: Watch
      // }
      {
        path: '/watch',
        name: 'watch',
        component: Watch,
        props: true
      }
    ],
  });
  export default router;