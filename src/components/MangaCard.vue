<template>
  <router-link
    :to="`/mangadetail?slug=${manga.slug}`"
  >
    <div class="bg-white shadow-md m-2">
      <img class="w-full" :src="manga.imgUrl" alt="" />
      <div class="text-center">
        <p>{{ manga.title }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "mangaCard",
  data() {
    return {
      //   data: {}
    };
  },
  props: ["manga"],
  created: function () {
    // console.log(this.manga);
  },
};
</script>