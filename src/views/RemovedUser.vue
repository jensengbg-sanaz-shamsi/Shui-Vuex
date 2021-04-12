<template>
  <div class="landing">
    <header @click="goTo" >
      <img src="../assets/reds.svg" alt="" />
    </header>
    <main>
      <div class="mainDiv">
        <h2> You no longer exists in Shui system</h2>
      </div>
    </main>
    <footer>
      <img class="wave" src="../assets/wave.svg" alt="" />
    </footer>
  </div>
</template>

<script>
export default {
  name: "RemovedUser",
    methods: {
      goTo() {
           this.$router.push('/register')
      }
  }
};
</script>

<style scoped>
.landing {
  background-color: #082756;
  display: flex;
  flex-direction: column;
}
header {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.mainDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  margin-bottom: 0;
  font-family: Cantarell;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 50px;
  letter-spacing: -0.03em;

  color: #ffffff;
}
.wave {
  width: 100%;
}
</style>