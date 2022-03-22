<template>
    <div v-html="info">
    </div>
</template>


<script>
export default {
  name: "InfoDetail",
  data() {
    return {
      //   data: {}
    };
  },
  props: ["info"],
  created: function () {
    // console.log(this.info);
  },
};
</script>