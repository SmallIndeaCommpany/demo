<template>
    <div class="container-fluid"></div>
    <div class="container">
        <div class="botline">

            <div class="logo">
                <LogoSiteVue></LogoSiteVue>
                <h2 class="special">Copyright 2022. Antools</h2>
                <h2>Antool is a web collection of<br>information on paid or free Design<br>and Development tools</h2>
            </div>
            <div class="stand">
                <h1>Contact Us</h1>
                <h2>+621987463</h2>
                <h2>M Building, No.10 A</h2>
                <h2>antools@awesome.com</h2>
            </div>
            <div class="stand">
                <h1>Categories</h1>
                <h2>Design</h2>
                <h2>Development</h2>
            </div>
            <div class="stand">
                <h1>Company Info</h1>
                <h2>About Us</h2>
                <h2>Our Partners</h2>
                <h2>Blog</h2>
            </div>
        </div>
    </div>


</template>

<script>
import LogoSiteVue from './logoSite.vue';
export default {
    components: { LogoSiteVue }
}
</script>

<style scoped>
.container-fluid{
    border-top: 0.5px solid rgba(255, 255, 255, 0.15);
    margin-top: 250px;
}
.botline {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: space-between;
    padding-top: 70px;
    
    
    margin-bottom: 100px;
}


.botline div {
    display: flex;
    flex-direction: column;
    text-align: center;
    
}

.botline h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 20px;

    color: rgba(255, 255, 255, 0.9);
}

.botline h2 {
    text-align: left;
    margin-bottom: 10px;
}

.botline .logo {
    text-align: left;
}

.special {
    color: #fff;
    margin-bottom: 20px;
    margin-top: 20px;
}
.stand{
    margin-left: auto;
}
</style>