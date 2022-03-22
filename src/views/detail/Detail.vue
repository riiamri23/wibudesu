<template>
  <div class="min-h-screen bg-indigo-50">
    <Header-Nav />
    <main class="flex items-center p-10 w-full h-full bg-white">
      <div class="border-t border-b pt-16 grid grid-cols-2 gap-8">
        <div class="flex flex-col justify-start">
          <div
            class="
              flex flex-col
              w-full
              object-cover
              h-4/6
              justify-items-start
              border
              rounded-lg
              overflow-hidden
            "
            style="min-heigth: 320px"
          >
            <img
              class="w-full h-full object-cover"
              v-bind:src="animeDetail.imgUrl"
              alt="Anime Image"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col gap-4">
            <h1 class="capitalize text-4xl font-extrabold">{{animeDetail.title}}</h1>
            <!-- <div v-html="title">
              {{animeDetail.info}}
            </div> -->
            <Info-Detail :info="animeDetail.info" />
            <List-Episode :listeps="animeListEpisode" />

          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderNav from "../layouts/HeaderNav.vue";
import InfoDetail from "../../components/InfoDetail.vue";
import ListEpisode from "../../components/ListEpisode.vue";

export default {
  components: { HeaderNav, InfoDetail, ListEpisode },
  name: "Detail",
  data() {
    return {
      animeDetail: {},
      animeListEpisode: [],
    };
  },
  beforeMount() {
    this.getAnime();
  },
  methods: {
    async getAnime() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const slug = urlParams.get('slug');

      const res = await fetch(
        `http://172.16.9.43:3000/detail?slug=${slug}`
      );
      const data = await res.json();
      this.animeDetail = data["data"][0];
      this.animeListEpisode = data["listEpisode"];
      console.log(this.animeListEpisode);
    },
  },
};
</script>