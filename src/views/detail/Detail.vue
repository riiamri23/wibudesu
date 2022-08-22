<template>
  <main class="flex items-center p-10 w-full h-full bg-white" v-if="!isLoading">
    <div class="border-t border-b pt-16 md:grid grid-cols-2 gap-8">
      <div
        class="
          flex flex-col
          w-full
          object-cover
          sm:max-h-96
          justify-items-start
          border
          rounded-lg
          overflow-hidden
        "
      >
        <img
          class="w-full h-full object-cover"
          v-bind:src="animeDetail.imgUrl"
          alt="Anime Image"
        />
      </div>
      <div class="flex flex-col">
        <div class="flex flex-col gap-4">
          <h1 class="capitalize text-4xl font-extrabold">
            {{ animeDetail.title }}
          </h1>
          <!-- <div v-html="title">
              {{animeDetail.info}}
            </div> -->
          <Info-Detail :info="animeDetail.info" />
          <List-Episode :listeps="animeListEpisode" />
        </div>
      </div>
    </div>
  </main>
  <div class="flex justify-center items-center h-screen" v-else>
    <img src="../../assets/loading.gif" alt="Loading" />
  </div>
</template>

<script>
import InfoDetail from "../../components/InfoDetail.vue";
import ListEpisode from "../../components/ListEpisode.vue";
import { URL } from "../../utils/constants";

export default {
  components: { InfoDetail, ListEpisode },
  name: "Detail",
  data() {
    return {
      animeDetail: {},
      animeListEpisode: [],
      isLoading: true,
    };
  },
  beforeMount() {
    this.getAnime();
  },
  methods: {
    async getAnime() {
      this.isLoading = true;
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const slug = urlParams.get("slug");
      await fetch(`${URL}/detail?slug=${slug}`)
        .then((response) => response.json())
        .then((data) => {
          this.animeDetail = data["data"][0];
          this.animeListEpisode = data["listEpisode"];
        });
      this.isLoading = false;
    },
  },
};
</script>