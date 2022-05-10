<template>
  <div class="min-h-screen bg-indigo-50">
    <Header-Nav />
    <main>
      <div class="container w-full md:px-40 mx-auto py-20">
        <div
          class="
            md:grid
            lg:grid-cols-3
            md:grid-cols-2
            mlg:grid-cols-3
            md:gap-10
            space-y-6
            md:space-y-0
            px-10
            md:px-0
            mx-auto
          "
        >
          <Anime-Card v-for="(data, i) in animeList" :key="i" :anime="data" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import AnimeCard from "../../components/AnimeCard.vue";
import HeaderNav from "../layouts/HeaderNav.vue";

export default {
  components: { AnimeCard, HeaderNav },
  name: "Home",
  data() {
    return {
      animeList: {},
    };
  },
  beforeMount() {
    this.getAnime();
  },
  methods: {
    async getAnime() {
      const res = await fetch("https://true-record-280507.uc.r.appspot.com/category?cat=ongoing");
      const data = await res.json();
      this.animeList = data['data'];
    //   console.log(this.animeList);
    },
  },
};
</script>

<style>
</style>
