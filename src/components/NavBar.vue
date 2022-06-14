<template>
  <div class="container">
    <div class="navbar">
      <div class="logoNav">
        <img src="../assets/Logo.svg" alt="" />
        <t1>antools.</t1>
      </div>
      <div class="navigNav">
        <button>
           <t2>Home</t2> 
        </button>
        <button>
            <t2>Categories</t2>
        </button>
        <button>
            <t2>My Collections</t2>
        </button>
        <button>
            <t2>Blog</t2>
        </button>
    
      </div>
      <div class="loginNav">
        <button class="loginBtn">
          <t2>Login</t2>  
        </button>
        
        <button class="singUpBtn">
          <t2>Sing up</t2>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
button{
    border: none;
}
.navbar{
    height: 50px;
    margin-top: 30px;
}
.logoNav{
    display: flex;
    gap: 12px;
    height: 100%;
    -moz-user-select: none;
    user-select: none;
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