<template>
    <nav>
      <div
        class="
          w-full
          bg- bg-gradient-to-tr
          from-indigo-600
          to-purple-600
          py-6
          flex
          items-center
          justify-between
          px-6
          md:px-20
          xl:px-60
        "
      >
        <h1 class="text-white text-2xl font-semibold">WibuDesu</h1>
        <div class="flex items-center space-x-10">
          <!--div class="hidden lg:block">
          <span class="text-xl text-white font-thin cursor-pointer">Search:</span>
          <input type="text" class="py-1 px-2 outline-none rounded-md w-60" />
        </div>
        <button class="border border-white px-4 py-1 rounded-md text-white text-xl">Create Recipe</button--->
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: "HeaderNav",
  data() {
    return {
    //   data: {}
    }
  },
  // props: ['anime'],
  created: function (){
      // console.log(this.anime);
  }
};
</script>