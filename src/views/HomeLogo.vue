<template>
  <div class="homeLogo">
    <About />

    <!-- <Arrow /> -->
    <span class="tags1"> 𓀾 𓀿 𓁀 𓁁 𓁂 𓁃 𓁄 𓁅 </span>
    <div id="slide1" class="slide">
      <Skills />
    </div>
    <!-- <Arrow /> -->
    <div id="slide2" class="slide">
      <Projects />
    </div>
    <!-- <Arrow /> -->
    <div id="slide3" class="slide">
      <Contact />
    </div>
  </div>
</template>

<script>
import About from "./About.vue";
import Skills from "./Skills.vue";

// import Words from "@/components/Words.vue";
// import Arrow from "@/components/Arrow.vue";

import Projects from "./Projects.vue";
import Contact from "./Contact.vue";

export default {
  name: "homeLogo",

  components: {
    About,
    Skills,
    // Words,
    Projects,
    Contact,

    // Arrow
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
  background-clip: text;
  -webkit-background-clip: text;
  position: relative;
  margin-top: 2vh;
}
.skills {
  text-align: center;
  font-family: "Libre Baskerville", serif;
  margin-top: 10vh;
  margin-bottom: 10vh;
}
.skills h1 {
  white-space: normal;
  /* width: 26%; */
  display: inline-block;
  font-size: 3em;
  font-weight: 200;
  color: #11ece5;
  text-shadow: #11ece5 1px 0 10px;
  background-clip: text;
  -webkit-background-clip: text;
  position: relative;
  margin-top: 2vh;
}
/* -----[animation letters]----------------------- */
h1 span {
  opacity: 0;
}

.letter01 {
  animation: letters 1s ease 0000ms forwards;
}
.letter02 {
  animation: letters 1s ease 0200ms forwards;
}
.letter03 {
  animation: letters 1s ease 0400ms forwards;
}
.letter04 {
  animation: letters 1s ease 0600ms forwards;
}
.letter05 {
  animation: letters 1s ease 0800ms forwards;
}
.letter06 {
  animation: letters 1s ease 1000ms forwards;
}

@keyframes letters {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/* -----[souslignage]---------------------------------------- */

h1::after {
  content: "";
  display: block;
  background: linear-gradient(
    45deg,
    #11ece5,
    #11ece5,
    #11ece5,
    #11ece5,
    #11ece5
  );
  height: 2px;
  box-shadow: rgb(17 236 229) 0px 0px 6px 0.7px;
  width: 0%;
  opacity: 0;
  margin-top: 0.2em;
  animation: lineWidth 2s ease-in-out forwards;
}
@keyframes lineWidth {
  0% {
    width: 0%;
    opacity: 0;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
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

/* ---[slide]------------------------------ */

.slide {
  position: relative;
  /* padding: 25vh 10%; */
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.7);
  transform-style: inherit;
  /* padding-left: 80px; */
}
</style>


