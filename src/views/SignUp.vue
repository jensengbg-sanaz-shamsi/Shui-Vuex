<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/reds.svg" alt="" />
    </div>
    <header>
      <div class="content">
        <img src="../assets/s.svg" alt="" />
        <h1>SHUI</h1>
        <h3>Flow Freely</h3>
      </div>
      <NewUsers />
      <p @click="goTo">Have you already account?</p>
    </header>
    <footer>
      <img class="wave" src="../assets/wave.svg" alt="" />
    </footer>
  </div>
</template>

<script>
import NewUsers from "../components/NewUsers"
export default {
  name: "SignUp",
  components: {
    NewUsers
  },
  methods: {
      goTo() {
        this.$router.push('/login')
      }
  }
}
</script>

<style scoped>
.login {
  background-color: #082756;
  display: flex;
  flex-direction: column;
  margin: 0;
}
.logo {
  position: absolute;
  height: 24.85px;
  left: 40px;
  top: 34px;

  transform: rotate(-180deg);
}
.content {
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
}

p {
  color: #ffffff;
}

h1 {
  margin-bottom: 0;
  font-family: Cantarell;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 50px;
  letter-spacing: -0.03em;

  color: #ffffff;
}

h3 {
  height: 23px;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.2em;
  color: rgba(0, 178, 255, 0.8);
}
.wave {
  width: 100%;
}
</style>
