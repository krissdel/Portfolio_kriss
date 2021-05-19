<template>
  <!-- <div class="about"> -->
  <div class="home">
    <div id="wrapper">
      <About />
    </div>

    <div class="tags">
      <span class="tags1"> 𓀾 𓀿 𓁀 𓁁 𓁂 𓁃 𓁄 𓁅 </span>
    </div>

    <!-- --------------------- -->
    <div id="title" class="slide header">
      <Words />
    </div>

    <div id="slide1" class="slide">
      <Projects />
      <!-- <div class="title">
        <h1>Slide 1</h1>
        <p></p>
      </div> -->
      <!-- <span class="tags1"> 𓁆 𓁇 𓁈 𓁉 𓁍 𓁎 𓁏 </span> -->
    </div>

    <div id="slide2" class="slide">
      <Contact />



    <!-- <div id="slide3" class="slide">
      <div class="title">
        <h1>Slide 3</h1>
        <p></p>
      </div>
      <span class="tags5"> 𓁆 𓁇 𓁈 𓁉 𓁍 𓁎 𓁏 </span>
    </div>

    <div id="slide4" class="slide header"> -->
      <!-- <span class="tags4"> 𓁆 𓁇 𓁈 𓁉 𓁍 𓁎 𓁏 </span> -->
    </div>

    <!-- --------------------- -->

    <!-- <TagsBall /> -->
  </div>
</template>

<script>
// import TagsBall from '@/components/TagsBall.vue'
import Words from "@/components/Words.vue";

import Projects from "./Projects.vue";
import Contact from "./Contact.vue";
import About from "./About.vue";
// import Skills from "./Skills.vue";

// import Skills from "./Skills.vue";

export default {
  name: "homeLogo",

  components: {
    // TagsBall,
    Words,
    Projects,
    Contact,
    About,
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

img {
  vertical-align: middle;
  /* border-style: none; */
  max-width: 125px;
  border-image: linear-gradient(#f6b73c, #4d9f0c) 30;
  margin-top: 21vh;
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
.tags2 {
  font-size: 20px;
  font-family: "La Belle Aurore", cursive;
  bottom: 50px;
  top: 0;
  display: flex;
  justify-content: flex-end;
  color: #515152;
}
.tags4 {
  font-size: 20px;
  font-family: "La Belle Aurore", cursive;
  display: flex;
  top: 0;
  color: #515152;
  margin-left: 18vw;
  margin-top: 21vh;
}
.tags5 {
  font-size: 20px;
  font-family: "La Belle Aurore", cursive;
  bottom: 50px;
  top: 0;
  display: flex;
  color: #515152;
  margin-left: 66vw;
  margin-top: 21vh;
}
.tags6 {
  font-size: 20px;
  font-family: "La Belle Aurore", cursive;
  bottom: 50px;
  top: 0;
  display: flex;
  color: #515152;
  margin-left: 80vw;
  margin-top: 21vh;
}
/* ---[parallax]------------------------------ */

html {
  height: 100%;
  overflow: hidden;
}

body {
  margin: 0;
  padding: 0;
  perspective: 1px;
  transform-style: preserve-3d;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

p {
  font-size: 140%;
  line-height: 150%;
  color: #333;
}

.slide {
  position: relative;
  padding: 25vh 10%;
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.7);
  transform-style: inherit;
}

img {
  position: absolute;
  top: 50%;
  left: 35%;
  width: 320px;
  height: 240px;
  transform: translateZ(0.25px) scale(0.75) translateX(-94%) translateY(-100%)
    rotate(2deg);
  padding: 10px;
  border-radius: 5px;
  background: rgba(240, 230, 220, 0.7);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
}

img:last-of-type {
  transform: translateZ(0.4px) scale(0.6) translateX(-104%) translateY(-40%)
    rotate(-5deg);
}

/* .slide:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.7);
} */

.title {
  width: 50%;
  padding: 5%;
  border-radius: 5px;
  background: rgba(240, 230, 220, 0.7);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
}

.slide:nth-child(2n) .title {
  margin-left: 0;
  margin-right: auto;
}

.slide:nth-child(2n + 1) .title {
  margin-left: auto;
  margin-right: 0;
}

.slide,
.slide:before {
  background: 50% 50% / cover;
}

.header {
  text-align: center;
  font-size: 175%;
  color: #fff;
  text-shadow: 0 2px 2px #000;
}

#title {
  /* background-image: url("../assets/image/922574.jpg"); */

  /* <img src="../assets/947346.jpg" alt="Image" class="img" /> */
  z-index: 2;
}

#title h1 {
  transform: translateZ(0.25px) scale(0.75);
  transform-origin: 50% 100%;
}

#slide1:before {
  /* background-image: url("../assets/image/blue-technology-background.jpg"); */
  transform: translateZ(-1px) scale(2);
}

#slide2 {
  /* background-image: url("http://192.168.0.11:8080/about"); */
  z-index: 2;
}

#slide3:before {
  /* background-image: url("https://lorempixel.com/640/480/abstract/5/"); */
  transform: translateZ(-1px) scale(2);
}

#slide4 {
  background: #222;
}
</style>


