<template>
  <div id="app">
    <Sound />
    <NavBar />
    <!-- <SoftSkills msg="Christian DELORME "/> -->

    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Sound from "./components/Sound.vue";

// import Map from './components/Map.vue'

export default {
  name: "App",

  components: {
    NavBar,
    Sound,
    // Map
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #060b0e;
  font-weight: bold;
  /* width: max-content; */
  /* width: auto; */
  /* margin: 0 auto; */
  /* flex-direction: initial;
    display: flex;
    flex-wrap: wrap;
    width: 723px;
    max-width: 900px;
    margin: auto; */
}
</style>
