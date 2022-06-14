<template>
  <div class="container">
    <div class="block">
      <div class="content">
        <t3>Awesome tools for<br />Designer & Developer
          <t3 style="color: #ff6e30">.</t3>
        </t3>

        <t2 class="subtext">Antool is a web collection of information on paid or <br />
          Design and Development tools</t2>
        <div class="serch">
          <img src="../assets/search.svg" alt="" />
          <input placeholder="find more than 430+ tools..." />
          <button>
            <t2>Search</t2>
          </button>
        </div>
        <div class="social">
          <img src="../assets/facebook.svg" alt="" />
          <img src="../assets/instagram.svg" alt="" />
          <img src="../assets/twitter.svg" alt="" />
        </div>
      </div>
      <div class="ilustration">
        <img src="../assets/Illustration.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subtext: ``,
    };
  },
};
</script>

<style scoped>
.block {
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
}

.content {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 45%;
  -moz-user-select: none;
  user-select: none;
}

.subtext {
  margin-top: 30px;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.55);
}

.serch {
  display: flex;
  margin-top: 60px;
  background: #283036;
  border-radius: 15px;
  height: 64px;
}

.serch button {
  border: none;
  background: #ff6e30;
  width: 130px;
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-right: 10px;
}

.serch img {
  background: none;
  margin-left: 21px;
}

.serch input {
  background: none;
  border: none;
  margin: auto;
  margin-left: 15px;
  margin-right: 100px;
  width: 100%;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: rgba(255, 255, 255, 0.9);
}

.serch t2 {
  color: #ffffff;
}

.social {
  display: flex;
  margin-top: 120px;
  gap: 40px;
}

.social img {
  background: none;
}

.ilustration {
  position: absolute;
  left: 700px;
}
</style>