<template>
    <div class="container-fluid"></div>
    <div class="container">
        <div class="botline">

            <div class="logo">
                <LogoSiteVue></LogoSiteVue>
                <t2 class="special">Copyright 2022. Antools</t2>
                <t2>Antool is a web collection of<br>information on paid or free Design<br>and Development tools</t2>
            </div>
            <div>
                <t1>Contact Us</t1>
                <t2>+621987463</t2>
                <t2>M Building, No.10 A</t2>
                <t2>antools@awesome.com</t2>
            </div>
            <div>
                <t1>Categories</t1>
                <t2>Design</t2>
                <t2>Development</t2>
            </div>
            <div>
                <t1>Company Info</t1>
                <t2>About Us</t2>
                <t2>Our Partners</t2>
                <t2>Blog</t2>
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

.botline t1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 20px;

    color: rgba(255, 255, 255, 0.9);
}

.botline t2 {
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
</style>