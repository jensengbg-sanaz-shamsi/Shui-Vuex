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
      <OldUsers />
    </header>
    <footer>
      <img class="wave" src="../assets/wave.svg" alt="" />
    </footer>
  </div>
</template>

<script>
import OldUsers from "../components/OldUsers"
export default {
  name: "Login",
  components: {
    OldUsers,
  },
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
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .content {
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
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
