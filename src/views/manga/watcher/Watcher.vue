<template>
  <main v-if="!isLoading" class="flex flex-col m-6 max-w-3xl">
    <div>
      <div v-for="(data, i) in manga.img" :key="i">
        <img :src="data" alt="">
      </div>
    </div>
  </main>

  <div class="flex justify-center items-center h-screen" v-else>
    <img src="../../../assets/loading.gif" alt="Loading" />
  </div>
</template>

<script>
// import MangaCard from "../../../components/MangaCard.vue";
import { URL } from "../../../utils/constants";

export default {
  name: "Mangawatcher",
  // components: {MangaCard},
  data() {
    return {
      manga: [],
      //set default loading true
      isLoading: true,
    };
  },

  created: function () {
    this.getMangaWatch();
    this.$watch(
      () => this.$route.params,
      () => {
        this.getMangaWatch();
      }
    );
  },
  methods: {
    async getMangaWatch() {
      this.isLoading = true;
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const slug = urlParams.get("slug");
      const res = await fetch(`${URL}/manga/watcher?slug=${slug}`);
      const data = await res.json();
      console.log(data);

      this.manga = data["data"];

      this.isLoading = false;
    },
  },
};
</script>