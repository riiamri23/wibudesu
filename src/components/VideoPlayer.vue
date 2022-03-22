<template>
  <div>
    <iframe
      width="760"
      height="500"
      :src="animeDetail.streamUrl"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  data() {
    return {
      //   data: {}
    };
  },
  props: ["animeDetail"],
  created: function () {
    // console.log(this.info);
  },
};
</script>
