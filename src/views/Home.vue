<template>
  <div class="homepage">
    <header>
      <img src="../assets/reds.svg" alt="" />
    </header>
    <main>
      <div class="content">
        <img src="../assets/s.svg" alt="" />
        <h1>SHUI</h1>
      </div>
    </main>
    <footer>
      <img src="../assets/wave.svg" alt="" />
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
    mounted() {
      setTimeout(() => {
        this.$router.replace("/register");
      }, 2000);
  },
};
</script>

<style scoped>
  .homepage {
    background-color: #082756;
    display: flex;
    flex-direction: column;
  }
  header {
    position: absolute;
    width: 19.76px;
    height: 24.85px;
    left: 66px;
    top: 28px;

    background: #082756;
    transform: rotate(90deg);
  }
  .content {
    display: flex;
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
    font-family: PT Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.2em;
    color: rgba(0, 178, 255, 0.8);
  }
</style>
