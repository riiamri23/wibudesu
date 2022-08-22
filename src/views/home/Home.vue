<template>
  <main v-if="!isLoading">
    <div class="container w-full mx-auto">
      <h1>232 Anime(s)</h1>
      <div
        class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2"
      >
        <Anime-Card v-for="(data, i) in animeList" :key="i" :anime="data" />
      </div>
    </div>
  </main>

  <div class="flex justify-center items-center h-screen" v-else>
    <img src="../../assets/loading.gif" alt="Loading" />
  </div>
</template>

<script>
import AnimeCard from "../../components/AnimeCard.vue";
import { URL } from "../../utils/constants";

export default {
  components: { AnimeCard },
  name: "Home",
  data() {
    return {
      animeList: {},
      //set default loading true
      isLoading: true,
    };
  },
  beforeMount() {
    this.getAnime();
  },
  methods: {
    async getAnime() {
      this.isLoading = true;
      const res = await fetch(`${URL}/category?cat=ongoing`);
      const data = await res.json();
      this.animeList = data["data"];

      this.isLoading = false;
      //   console.log(this.animeList);
    },
  },
};
</script>

<style>
.intersecting-circles-spinner,
.intersecting-circles-spinner * {
  box-sizing: border-box;
}

.intersecting-circles-spinner {
  height: 70px;
  width: 70px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.intersecting-circles-spinner .spinnerBlock {
  animation: intersecting-circles-spinners-animation 1200ms linear infinite;
  transform-origin: center;
  display: block;
  height: 35px;
  width: 35px;
}

.intersecting-circles-spinner .circle {
  display: block;
  border: 2px solid #ff1d5e;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.intersecting-circles-spinner .circle:nth-child(1) {
  left: 0;
  top: 0;
}

.intersecting-circles-spinner .circle:nth-child(2) {
  left: calc(35px * -0.36);
  top: calc(35px * 0.2);
}

.intersecting-circles-spinner .circle:nth-child(3) {
  left: calc(35px * -0.36);
  top: calc(35px * -0.2);
}

.intersecting-circles-spinner .circle:nth-child(4) {
  left: 0;
  top: calc(35px * -0.36);
}

.intersecting-circles-spinner .circle:nth-child(5) {
  left: calc(35px * 0.36);
  top: calc(35px * -0.2);
}

.intersecting-circles-spinner .circle:nth-child(6) {
  left: calc(35px * 0.36);
  top: calc(35px * 0.2);
}

.intersecting-circles-spinner .circle:nth-child(7) {
  left: 0;
  top: calc(35px * 0.36);
}

@keyframes intersecting-circles-spinners-animation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
