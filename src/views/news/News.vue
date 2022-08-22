<template>
  <!-- <h1>{{this.animeNewsList}}</h1> -->
  <main v-if="!isLoading" class="flex flex-col m-6">
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2">
      <div class="bg-white shadow-md m-2" v-for="(data, i) in animeNewsList" :key="i">
        <img class="w-full" :src="data.imgUrl" alt="" />
        <div class="text-center">
          <p>{{ data.title }}</p>
        </div>
      </div>
    </div>
  </main>

  <div class="flex justify-center items-center h-screen" v-else>
    <img src="../../assets/loading.gif" alt="Loading" />
  </div>
</template>


<script>
import { URL } from "../../utils/constants";

export default {
  name: "News",
  data() {
    return {
      animeNewsList: {},
      //set default loading true
      isLoading: true,
    };
  },
  // beforeMount() {
  //   this.getAnimeNews();
  // },

  created: function () {
    this.getAnimeNews();
    this.$watch(
      () => this.$route.params,
      () => {
        this.getAnimeNews();
      }
    );
  },
  methods: {
    async getAnimeNews() {
      this.isLoading = true;
      const res = await fetch(`${URL}/animenews`);
      const data = await res.json();

      this.animeNewsList = data["data"];

      this.isLoading = false;
    },
  },
};
</script>