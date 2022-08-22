import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/Home.vue";
import Detail from "@/views/detail/Detail.vue";
import Watch from "@/views/watch/Watch.vue";
import News from "@/views/news/News.vue";
import MangaListing from '@/views/manga/listing/Listing';
import MangaDetail from '@/views/manga/detail/Detail';
import MangaWatcher from '@/views/manga/watcher/Watcher';
// import Contact from "@/views/Contact.vue";


const router = createRouter({
    history: createWebHistory(),
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
      {
        path: '/watch',
        name: 'watch',
        component: Watch,
        props: true
      },
      {
        path: '/news',
        name: 'news',
        component: News,
      },
      {
        path: '/manga',
        name: 'manga',
        component: MangaListing,
      },
      {
        path: '/mangadetail',
        name: 'mangadetail',
        component: MangaDetail,
      },
      {
        path: '/mangawatch',
        name: 'mangawatch',
        component: MangaWatcher,
      }
    ],
  });
  export default router;