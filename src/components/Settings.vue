<template>
  <div class="settings">
    <h1>streams</h1>
    <article class="hashArt" > 
      <div v-for="(followed, index) in followds.data" :key="index" :hashtag="followed" class="followedHashtags">{{ followed }} 
        <p class="remove" @click="removeHashtag(followed)">X</p>
      </div>
    </article>
    <article class="hashArticle">
      <input v-model="hashtag" class="hashtag" placeholder="#hashtags"/>
      <div class="checkDiv">
        <img src="../assets/check.svg" @click="addHashtag(hashtag)" class="check" alt="">
      </div>
    </article>
    <button @click="deleteUser">Shit, theyre on to me!</button>
  </div>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
      hashtag: '',
      followed: ''
    };
  },
  methods: {
    deleteUser() {
      this.$store.dispatch("deleteUser");
    },
    addHashtag(hashtagValue) {
      this.$store.dispatch("addHashtag", hashtagValue);
      this.$store.dispatch("followedHashtags");
      this.$store.dispatch("fetchFlows");
    },
    removeHashtag(index) {
      this.$store.dispatch("removeHashtag", index);  
      this.$store.dispatch("followedHashtags");
      this.$store.dispatch("fetchFlows");
    }
  },
  beforeMount() {
     this.$store.dispatch('followedHashtags');
  },
  computed: {
    allHashtags() {
      return this.$store.getters.allHashtags;
    },
    followds() {
      return this.$store.state.followed
    },
  },
};
</script>

<style scoped>
.settings {
  width: 100%;
  background-color: #ef4343;
}
h1 {
  width: 347px;
  height: 48px;
  left: 32px;
  top: 74px;

  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-left: 2rem;
}
button {
  width: 347px;
  height: 72px;
  left: 32px;
  top: 499px;
  margin: 1rem;
  background: #ef4343;
  border-radius: 4px;
  color: #ffffff;
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 150%;
}
.hashArt {
  display: grid;
  grid-template-columns: 160px 160px;
  width: 131px;
  margin-left: 20%;
}
.followedHashtags {
  min-width: 10px;
  margin: 1rem;
  padding-left: 0.5rem;
  display: flex;
  background-color: rgba(255, 255, 255, 0.1);
  text-align: center;
  justify-content: space-between;;
  align-items: center;
  border-radius: 4px;
}
.hashArticle {
  height: 72px;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkDiv {
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: white;
  height: 72px;
  border: 2px solid #FFFFFF;
  border-radius: 0px 4px 4px 0px;
  width: 50px;
}

.remove {
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0.5rem;
  padding: 0.5rem;
  background-color:  rgba(255, 255, 255, 0.2);
  border-radius: 0px 4px 4px 0px;
}
input {
  margin-top: 1rem;
  width: 300px;
  height: 72px;
  background-color: #ef4343;
  border: 1px solid #ffffff;
  color: #ffffff;
  box-sizing: border-box;
  border-radius: 3px;
  margin-bottom: 1rem;
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
</style>