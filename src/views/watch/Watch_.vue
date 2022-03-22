<template>
  <div class="min-h-screen bg-indigo-50">
    <Header-Nav />
    <main>
      <div
        class="container mx-auto flex justify-center flex-wrap md:flex-no-wrap px-4 py-10"
      >
        <div class="w-1/2">
          <video width="100%" controls>
            <source src="mov_bbb.mp4" type="video/mp4" />
            <source src="mov_bbb.ogg" type="video/ogg" />
            Your browser does not support HTML video.
          </video>
        </div>
        <div class="w-1/4">
          <ul
            class="
              bg-white
              rounded-lg
              border border-gray-200
              w-96
              text-gray-900
            "
          >
            <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
              An item
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">
              A second item
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">
              A third item
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">
              A fourth item
            </li>
            <li class="px-6 py-2 w-full rounded-b-lg">And a fifth one</li>
          </ul>
        </div>
        <!-- <Anime-Card v-for="(data, i) in animeList" :key="i" :anime="data" /> -->
      </div>
    </main>
  </div>
</template>

<script>
import HeaderNav from "../layouts/HeaderNav.vue";

export default {
  components: { HeaderNav },
  name: "Watch",

  props: ["watchAnime"],
  created: function () {
    console.log(this.watchAnime);
  },
};
</script>