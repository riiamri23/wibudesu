<template>
  <div class="min-h-screen bg-indigo-50">

    <Header-Nav />

    <slot></slot>
  </div>
</template>

<script>
import HeaderNav from './HeaderNav.vue'

export default {
  components: {
      HeaderNav,
  }
}
</script>