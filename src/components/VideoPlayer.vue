<template>
  <div id="video-player" ref="videoPlayer" class="w-full max-w-3xl">
    <iframe
      :width="this.widthVideo"
      :height="this.lengthVideo"
      :src="animeDetail.streamUrl"
      frameborder="0"
      allowfullscreen
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  data() {
    return {
      //   data: {}
      widthVideo: "100%",
      lengthVideo: 500,
    };
  },
  props: ["animeDetail"],
  created() {
    // this.lengthVideo = window.currentTarget.innerWidth / 1.5;
    // console.log(this.$refs.videoPlayer)
    window.addEventListener("resize", this.myEventHandler);
  },
  unmounted() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler(e) {
      // your code for handling resize...
      if (e.currentTarget.innerWidth < 720) {
        // this.widthVideo = e.currentTarget.innerWidth - 100;
        this.lengthVideo = e.currentTarget.innerWidth / 1.5;
      }
    },
  },
};
</script>
