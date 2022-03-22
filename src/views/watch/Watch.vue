<template>
  <div>
    <Header-Nav />
    <Video-Player :animeDetail="animeDetail" />
  </div>
</template>

<script>
import HeaderNav from "../layouts/HeaderNav.vue";
import VideoPlayer from "../../components/VideoPlayer.vue";

export default {
  components: { HeaderNav, VideoPlayer },
  name: "Watch",

  data() {
    return {
      animeDetail: {},
    };
  },
  props: ["watchAnime"],
  created: function () {
    this.getWatch();
  },

  methods: {
    async getWatch() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const slug = urlParams.get('slug');

      const res = await fetch(
        `http://172.16.9.43:3000/anime?slug=${slug}`
      );
      const data = await res.json();
      this.animeDetail = data["data"][0];
      console.log(this.animeDetail);
    },
  },
  
};
</script>