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
          v-bind:src="mangaDetail.imgUrl"
          alt="Anime Image"
        />
      </div>
      <div class="flex flex-col">
        <div class="flex flex-col gap-4">
          <h1 class="capitalize text-4xl font-extrabold">
            {{ mangaDetail.description["Judul Alternatif"] }}
          </h1>
          <div class="flex">
            <ul class="bg-white rounded-lg w-96 text-gray-900">
              <li
                class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"
                v-for="(data, i) in mangaDetail.mangaList"
                :key="i"
              >
                <router-link :to="`mangawatch?slug=${data.slug}`">{{
                  data.chapter
                }}</router-link>
              </li>
            </ul>
          </div>
          <!-- <div v-html="title">
              {{animeDetail.info}}
            </div> -->
          <!-- <Info-Detail :info="animeDetail.info" />
          <List-Episode :listeps="animeListEpisode" /> -->
        </div>
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
  name: "Mangadetail",
  // components: {MangaCard},
  data() {
    return {
      mangaDetail: [],
      //set default loading true
      isLoading: true,
    };
  },

  created: function () {
    this.getMangaDetail();
    this.$watch(
      () => this.$route.params,
      () => {
        this.getMangaDetail();
      }
    );
  },
  methods: {
    async getMangaDetail() {
      this.isLoading = true;
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const slug = urlParams.get("slug");
      const res = await fetch(`${URL}/manga/detail?slug=${slug}`);
      const data = await res.json();

      this.mangaDetail = data["data"];
      console.log(this.manga);

      this.isLoading = false;
    },
  },
};
</script>