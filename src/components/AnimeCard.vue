<template>
  <router-link
    :to="`/detail?slug=${anime.slug}`"
  >
    <div class="bg-white shadow-md m-2">
      <img class="w-full" :src="anime.imgUrl" alt="" />
      <div class="text-center">
        <p>{{ anime.title }}</p>
        <p>{{ anime.episode }}</p>
        <p>{{ anime.hari }}, {{ anime.date }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "AnimeCard",
  data() {
    return {
      //   data: {}
    };
  },
  props: ["anime"],
  created: function () {
    // console.log(this.anime);
  },
};
</script>