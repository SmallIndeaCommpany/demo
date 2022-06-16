<template>
  <div class="container">
    <div class="navbar">
      <LogoSiteVue></LogoSiteVue>
      <div class="navigNav">
        <button @click="$router.push('/')">
           <t2>Home</t2> 
        </button>
        <button @click="$router.push('/categories')">
            <t2>Categories</t2>
        </button>
        <button @click="$router.push('/collection')">
            <t2>My Collections</t2>
        </button>
        <button @click="$router.push('/blog')">
            <t2>Blog</t2>
        </button>
    
      </div>
      <div class="loginNav">
        <button class="loginBtn" @click="$router.push('/auth')">
          <t2>Login</t2>  
        </button>
        
        <button class="singUpBtn" @click="$router.push('/auth')">
          <t2>Sing up</t2>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import LogoSiteVue from './logoSite.vue';
export default { components: { LogoSiteVue } };
</script>

<style scoped>
button{
    border: none;
}
.navbar{
    height: 50px;
    margin-top: 30px;
}
.navigNav{
    display: flex;
    gap: 20px;
    height: 100%;
}
.loginNav{
    display: flex;
    gap: 30px ;
    height: 100%;
}

.singUpBtn{
    background: #FF6E30;
    border-radius: 8px;
    height: 100%;
    width: 150px;
}
.singUpBtn t2{
    color: #FDF5FF;
}
</style>