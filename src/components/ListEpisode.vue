<template>
  <div class="flex">
    <ul class="bg-white rounded-lg w-96 text-gray-900">
      <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg" v-for="(data, i) in listeps" :key="i">
          <router-link :to="`/watch?slug=${data.slug}`">{{data.titleEp}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListEpisode",
  data() {
    return {
    };
  },
  props: ["listeps"],
  created: function () {
    console.log(this.listeps);
  },
};
</script>
