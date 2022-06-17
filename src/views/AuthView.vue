<template>

  <NavBarVue></NavBarVue>
  <AuthBlock></AuthBlock>
  <BotLine></BotLine>

</template>

<script>
import NavBarVue from '@/components/NavBar.vue';
import BotLine from '@/components/BotLine.vue';
import AuthBlock from '@/components/authBlock.vue';




export default {
components: { NavBarVue, BotLine, AuthBlock },
 
  
}
</script>
<style scoped>

</style>