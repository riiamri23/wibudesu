<template>
  <div class="bg-white p-6 shadow-md rounded-md">
    <div>
      <img :src="anime.imgUrl" alt="" />
    </div>
    <h3 class="text-xl text-gray-800 font-semibold mb-2">
      {{ anime.title }}
    </h3>
    <p>{{ anime.episode }}</p>
    <p>{{ anime.hari }}, {{ anime.date }}</p>
    <router-link
      class="
        text-lg
        font-semibold
        text-gray-700
        bg-indigo-100
        px-4
        py-1
        block
        mx-auto
        rounded-md
      "
      :to="`/detail?slug=${anime.slug}`"
    >
      Nonton</router-link
    >
  </div>
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
    console.log(this.anime);
  },
};
</script>