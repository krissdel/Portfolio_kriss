<template>
  <div class="homeLogo">
    <div id="wrapper">
      <About />
      <Arrow />
    </div>
    <span class="tags1"> 𓀾 𓀿 𓁀 𓁁 𓁂 𓁃 𓁄 𓁅 </span>
    <div id="slide1" class="slide">
      <Words />
      <Arrow />
    </div>

    <div id="slide2" class="slide">
      <Projects />
      <Arrow />
    </div>

    <div id="slide3" class="slide">
      <Contact />
    </div>
  </div>
</template>

<script>
import Words from "@/components/Words.vue";
import Arrow from "@/components/Arrow.vue";

import Projects from "./Projects.vue";
import Contact from "./Contact.vue";
import About from "./About.vue";
// import Skills from "./Skills.vue";

export default {
  name: "homeLogo",

  components: {
    Words,
    Projects,
    Contact,
    About,
    Arrow,
  },
  props: {},
};
</script>


<style scoped>
/* -----[]--------------------------- */
#wrapper {
  text-align: center;
  font-family: "Libre Baskerville", serif;
  /* margin-top: 10vh; */
  /* background-image: url("../assets/922574.jpg"); */
}
#wrapper h1 {
  white-space: normal;
  display: inline-block;
  font-size: 3em;
  font-weight: 200;
  color: #11ece5;
  text-shadow: #11ece5 1px 0 10px;
  /* background-clip: text; */
  /* -webkit-background-clip: text; */
  position: relative;
  margin-top: 2vh;
}

/* --------[gliph]-------------------------- */

.tags1 {
  font-size: 20px;
  font-family: "La Belle Aurore", cursive;
  bottom: auto;
  top: 0;
  display: flex;
  color: #515152;
}

/* ---[parallax]------------------------------ */

.slide {
  position: relative;
  padding: 25vh 10%;
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.7);
  transform-style: inherit;
}
</style>


