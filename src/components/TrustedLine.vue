<template>
    <div class="container">
        <div class="trusted">
            <span class="eclipse"></span>
            <t1>Trusted more than 150+ brand</t1>
            <div>
                <img src="@/assets/logos_microsoft.svg" alt="">
                <img src="@/assets/logos_google.svg" alt="">
                <img src="@/assets/logos_slack.svg" alt="">
                <img src="@/assets/logos_wordpress.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
*{background: none;}

.trusted {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 200px;
    position: relative;
    overflow: hidden;
    background: rgba(44, 53, 61, 0.2);
    backdrop-filter: blur(50px);
    border-radius: 25px;
    padding-top: 50px;
    padding-bottom: 50px;
}

.trusted div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
}

.trusted t1 {
    text-align: center;
}
.eclipse{
    position: absolute;
    background:#FF484266 ;
    width: 159px;
    height: 159px;
    top: -75px;
    left: -75px;
    filter: blur(50px);
    
}
</style>