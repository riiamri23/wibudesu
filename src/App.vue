<template>

  <div class="min-h-screen bg-indigo-50">
    <Header-Nav />
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from "./views/home/Home.vue";
// import HelloWorld from './components/HelloWorld.vue'
import HeaderNav from "./views/layouts/HeaderNav.vue";

export default {
  components: { HeaderNav },
  name: "App",
  // components: {
  //   HelloWorld
  // }
};
</script>

<style>
</style>
