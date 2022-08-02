<template>
    <div class="container">
        <div class="contribution">
            <h3>Become a contributor?</h3>
            <h2>Join us and get tips & tricks to become a great<br>Designer and Developer</h2>
            <div class="enter">
                <input placeholder="Enter your email..." />
                <button>
                    <h2>Join Us</h2>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
.contribution {
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    text-align: center;
}

.contribution h2 {
    margin-top: 10px;
    margin-bottom: 100px;
    -moz-user-select: none;
    user-select: none;
}

.contribution h3{
    -moz-user-select: none;
    user-select: none;
}

.enter{
    margin: auto;
    display: flex;
    width: 549px;
    height: 64px;
    background: #283036;border-radius: 15px;
}
.enter input {
    background: none;
    border: none;
    margin: auto;
    margin-left: 15px;
    margin-right: 15px;
    width: 100%;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: rgba(255, 255, 255, 0.9);
}

.enter button {
    border: none;
    background: #ff6e30;
    width: 130px;
    border-radius: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-right: 10px;
}

.enter h2 {
    color: #fff;
}
</style>