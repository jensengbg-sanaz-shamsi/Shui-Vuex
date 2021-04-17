<template>
  <main>
    <section class="login">
      <input v-model="username" type="text" placeholder="username" />
      <input v-model="password" type="password" placeholder="password" />
      <button @click="create">Register</button>
    </section>
  </main>
</template>

<script>
export default {
  name: "NewUsers",
  data() {
    return {
      username: '',
      password:''
    }
  },
  methods: {
    create() {
      this.$store.dispatch('signUp', {
        username: this.username,
        password: this.password
      })
    },
      goTo() {
          this.$router.push('/login')
      }
  }
};
</script>

<style>
main {
  margin: 3rem auto;
}
.login {
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  
}
input {
  width: 310px;
  height: 72px;
  background-color: #082756;
  border: 1px solid #ffffff;
  color: #ffffff;
  box-sizing: border-box;
  border-radius: 3px;
  margin-bottom: 1rem;
  text-align: center;
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
}
::-webkit-input-placeholder {
  text-align: center;
  color: #ffffff;
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.3em;
}
:-moz-placeholder {
  text-align: center;
}
button {
  width: 310px;
  height: 72px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 3px;
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 31px;
  align-items: center;
  text-align: center;

  color: #000000;
}
</style>