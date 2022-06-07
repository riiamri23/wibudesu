<template>
  <div class="min-h-screen bg-indigo-50">
    <Header-Nav />
    <main v-if="!isLoading" class="flex flex-col m-6 max-w-3xl">
      <!--- Anime Player --->
      <Video-Player :animeDetail="animeDetail" />
      <!-- Another Information for title and nav -->
      <div class="flex justify-between">
        <h1 class="text-xl md:text-lg font-bold">{{ animeDetail.title }}</h1>
        <div>
          <router-link :to="`/watch?slug=${n.slug}`" v-for="n in animeNav" :key="n.name">
            <button
              class="
                bg-blue-500
                hover:bg-blue-400
                text-white
                py-1
                px-1
                border-b-4 border-blue-700
                hover:border-blue-500
                rounded
                mx-1
              "
            >
              {{n.name}}
            </button>
          </router-link>
        </div>
      </div>
      <!-- Another Information for download link -->
      <div class="mt-5">
        <h1 class="text-xl md:text-lg">Download Link</h1>
        <div class="flex">
          <a class="m-2" :href="n.link" target="_blank" v-for="n in animeDownload" :key="n.type">{{n.type}}</a>
        </div>
      </div>
    </main>

    <div class="flex justify-center items-center h-screen" v-else>
      <img src="../../assets/loading.gif" alt="Loading" />
    </div>
  </div>
</template>

<script>
import HeaderNav from "../layouts/HeaderNav.vue";
import VideoPlayer from "../../components/VideoPlayer.vue";
import { URL } from "../../utils/constants";

export default {
  components: { HeaderNav, VideoPlayer },
  name: "Watch",

  data() {
    return {
      animeDetail: {},
      animeNav: {},
      animeDownload:{},
      isLoading: true,
    };
  },
  props: ["watchAnime"],
  created: function () {
    this.getWatch();
    this.$watch(
      () => this.$route.params,
      () => {
        this.getWatch();
      }
    );
  },
  methods: {
    async getWatch() {
      this.isLoading = true;

      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const slug = urlParams.get("slug");


      await fetch(`${URL}/anime?slug=${slug}`)
        .then((response) => response.json())
        .then((data) => {
          this.animeDetail = data["data"][0];
          this.animeNav = data["nav"];
          this.animeDownload = data["download"];
        });
      this.isLoading = false;
    },
  },
};
</script>