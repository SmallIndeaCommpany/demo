<template>
  <div>
    <nav-bar></nav-bar>
    <first-block-vue></first-block-vue>
    <main-preview-vue></main-preview-vue>
  </div>
</template>

<script>

import MainPreviewVue from '@/components/mainPreview.vue'
import FirstBlockVue from '@/components/FirstBlock.vue'
import NavBar from '@/components/NavBar.vue'
  export default {
    components:{  MainPreviewVue, FirstBlockVue, NavBar }
  }
</script>

        