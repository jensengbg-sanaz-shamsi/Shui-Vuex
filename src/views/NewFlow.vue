<template>
  <div>
    <article>
      <textarea v-model="info" type="text" name="" id="" />
      <input
        v-model="hashtags"
        type="text"
        placeholder="#hashtag"
        name=""
        id=""
      />
      <p class="errorMsg">{{ errorMsg }}</p>
      <button @click="publishFlow">Publicera</button>
    </article>
  </div>
</template>

<script>
export default {
  name: "NewFlow",
  data() {
    return {
      info: '',
      hashtags: '',
      errorMsg: ''
    };
  },
  methods: {
    publishFlow() {
      if (this.info >= 0) {
        this.errorMsg = 'Kan inte skicka tom info'
      } else {
      let hashtagArray = this.hashtags.split(',')
      this.$store.dispatch("createdflow", {
        info: this.info,
        hashtags: hashtagArray,
      });
      }
      
    },
  },
};
</script>

<style scoped>
.errorMsg {
  color: #ef4343;
  font-weight: bolder;
}
div {
  background-color: #082756;
}
article {
  margin: 1rem;
}
textarea {
  width: 379px;
  height: 182px;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
input {
  width: 379px;
  height: 72px;
  background-color: #082756;
  left: 16px;
  top: 722px;
  border-radius: 4px;
  border: white solid 1px;
  color: #ffffff;
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
  margin: 1rem;
  width: 379px;
  height: 72px;
  left: 16px;
  top: 722px;
  background: #ef4343;
  border-radius: 4px;
  border: 0;
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 31px;
}
</style>