<template>
  <div>
    <nav-bar></nav-bar>
    <first-block-vue></first-block-vue>
    <main-preview-vue></main-preview-vue>
    <trusted-line-vue></trusted-line-vue>
    <newcomer-tools-vue></newcomer-tools-vue>
    <dev-slider-vue></dev-slider-vue>
    <contribution-line-vue></contribution-line-vue>
    <bot-line-vue></bot-line-vue>
  </div>
</template>

<script>

import MainPreviewVue from '@/components/mainPreview.vue'
import FirstBlockVue from '@/components/FirstBlock.vue'
import NavBar from '@/components/NavBar.vue'
import BotLineVue from '@/components/BotLine.vue'
import TrustedLineVue from '@/components/TrustedLine.vue'
import NewcomerToolsVue from '@/components/NewcomerTools.vue'
import DevSliderVue from '@/components/DevSlider.vue'
import ContributionLineVue from '../components/ContributionLine.vue'

  export default {
    components:{ MainPreviewVue, FirstBlockVue, NavBar, BotLineVue, TrustedLineVue, NewcomerToolsVue, DevSliderVue, ContributionLineVue }
  }
</script>

        