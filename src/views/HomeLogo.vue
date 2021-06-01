<template>
  <div class="homeLogo">
    <About />
    <!-- <Arrow /> -->
    <!-- <span class="tags1"> 𓀾 𓀿 𓁀 𓁁 𓁂 𓁃 𓁄 𓁅 </span> -->
    <div id="slide1" class="slide">
      <Skill />
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
import Skill from "./Skill.vue";

// import Arrow from "@/components/Arrow.vue";

import Projects from "./Projects.vue";
import Contact from "./Contact.vue";

export default {
  name: "homeLogo",

  components: {
    About,
    Skill,
    Projects,
    Contact,

    // Arrow
  },
  props: {},
};
</script>


<style scoped>

/* ---[slide]------------------------------ */

.slide {
  position: relative;
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.7);
  transform-style: inherit;
}
</style>


