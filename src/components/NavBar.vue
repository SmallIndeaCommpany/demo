<template>
  <div class="container">
    <div class="navbar">
      <LogoSiteVue></LogoSiteVue>
      <div class="navigNav">
        <button @click="$router.push('/')">
          <h2>Home</h2>
        </button>
        <button @click="$router.push('/categories')">
          <h2>Categories</h2>
        </button>
        <button @click="$router.push('/collection')">
          <h2>My Collections</h2>
        </button>
        <button @click="$router.push('/blog')">
          <h2>Blog</h2>
        </button>

      </div>
      <div class="loginNav">
        <template v-if="loginUser != null">
          <button class="loginBtn">
            <h2>{{ loginUser.displayName }}</h2>
          </button>
          <button class="loginBtn" @click="logOut">
            <h2>Log Out</h2>
          </button>
        </template>
        <template v-else>
          <button class="loginBtn" @click="$router.push('/auth/registration')">
            <h2>Login</h2>
          </button>

          <button class="singUpBtn" @click="$router.push('/auth/sing')">
            <h2>Sing up</h2>
          </button>
        </template>

      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import { getAuth } from '@firebase/auth';
import LogoSiteVue from './logoSite.vue';

export default {
  components: { LogoSiteVue },
  computed: {
    loginUser: function () {
      return store.state.loginUser
    }
  },


  methods: {
    logOut() {
      const auth = getAuth()
      auth.signOut().then(() => store.commit('setLogin', auth.currentUser))
    }
  }
};


</script>

