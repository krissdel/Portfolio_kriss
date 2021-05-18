<template>
  <div id="wrapper">
       <div>
      <span class="tags4"> 𓁆 𓁇 𓁈 𓁉 𓁍 𓁎 𓁏 </span>
    </div>
    <div id="skills">
      <h1>
        <span class="letter01">S</span>
        <span class="letter02">k</span>
        <span class="letter03">i</span>
        <span class="letter04">l</span>
        <span class="letter05">l</span>
        <span class="letter06">s</span>
      </h1>
    </div>

    <Skills />
  </div>
</template>

<script>
import Skills from "@/components/Skills.vue";

export default {
  name: "home",

  components: {
    Skills,
  },
};
</script>

<style scoped>


#skills {
  text-align: center;
  font-family: "Libre Baskerville", serif;
  margin-top: 10vh;
  margin-bottom: 10vh;
}
#skills h1 {
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
/* -----[glyph]----------------------------------- */
.tags4 {
  font-size: 20px;
  font-family: "La Belle Aurore", cursive;
  display: flex;
  top: 0;
  color: #515152;
  margin-left: 18vw;
  /* margin-top: 21vh; */
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

/* *********************************************** */
h1 {
  font-family: "Libre Baskerville", serif;
  color: rgb(17, 236, 229);
}
</style>