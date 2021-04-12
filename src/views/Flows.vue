<template>
  <div class="flowDiv">
    <div class="settingsClick">
      <img @click="isHidden = !isHidden" src="../assets/reds.svg" alt="" />
    </div>
    <header>
      <Settings v-if="!isHidden"/>
    </header>
    <Flow v-for="flow in getflows" :key="flow.flowID" :flowItem="flow" />
    <div class="penImg">
      <img v-if="isHidden" @click="goTo" class="pen" src="../assets/pen.svg" alt="">
    </div>
  </div>
</template>

<script>
import Flow from '../components/Flow'
import Settings from '../components/Settings'
export default {
    name: "Flows",
    data() {
      return {
        isHidden: true,
        flows: ''
      }
    }, 
    components: {
      Flow, Settings
    },
    computed: {
     getflows() {
        return this.$store.state.flows;
      }
    },
    beforeMount(){
      this.$store.dispatch('fetchFlows')
    },
    methods: {
      goTo() {
        this.$router.push('/newFlow')
      }
    }
}
</script>

<style scoped>
.settingsClick {
  display: flex;
}
h1 {
  margin-left: 1rem;
}
header {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.flowDiv {
  background-color: #082756;
}
.flow {
  border: 1px solid black;
  background-color: #fff;
  margin: 1rem;
  margin-bottom: 2rem;
}

Settings {
   width: 100px;
  height: auto;
  background-color: rgb(111, 153, 139);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: .4rem 0 .4rem 0;
  padding: .4rem 0 .4rem 0;
  background-color: #f05e5e;
}
.penImg {
  padding: 1em;
  margin: 1em;
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center
} 
.pen {
  margin: 1rem;
}
</style>