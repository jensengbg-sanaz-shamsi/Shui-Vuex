<template>
  <div class="login">
    <div class="logored">
      <img src="../assets/reds.svg" alt="" />
    </div>
    <header>
      <div class="mainDiv">
        <img src="../assets/s.svg" alt="" />
        <h1>SHUI</h1>
        <h3>FLOW FREELY</h3>
      </div>
      <NewCredentials />
      <p @click="goTo">Har du redan konto?</p>
    </header>
    <footer>
      <img class="wave" src="../assets/wave.svg" alt="" />
    </footer>
  </div>
</template>

<script>
import NewCredentials from "../components/NewCredentials"
export default {
  name: "SignUp",
  components: {
    NewCredentials
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
.logored {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.mainDiv {
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
}
p {
    color: #ffffff98;
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
  font-family: PT Sans;
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
