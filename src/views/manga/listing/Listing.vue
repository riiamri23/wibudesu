<template>
  <main v-if="!isLoading" class="flex flex-col m-6">
    <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
      <Manga-Card v-for="(data, i) in mangaList" :key="i" :manga="data" />
    </div>
  </main>

  <div class="flex justify-center items-center h-screen" v-else>
    <img src="../../../assets/loading.gif" alt="Loading" />
  </div>
</template>


<script>
import MangaCard from "../../../components/MangaCard.vue";
import { URL } from "../../../utils/constants";

export default {
  name: "Manga",
  components: {MangaCard},
  data() {
    return {
      mangaList: [],
      //set default loading true
      isLoading: true,
    };
  },

  created: function () {
    this.getMangaList();
    this.$watch(
      () => this.$route.params,
      () => {
        this.getMangaList();
      }
    );
  },
  methods: {
    async getMangaList() {
      this.isLoading = true;
      const res = await fetch(`${URL}/mangalist`);
      const data = await res.json();

      this.mangaList = data["data"];

      this.isLoading = false;
    },
  },
};
</script>