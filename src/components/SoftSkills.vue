<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->

    <div id="wrapper">
      <h1>
        <span class="letter01">C</span><span class="letter02">h</span
        ><span class="letter03">r</span><span class="letter04">i</span
        ><span class="letter05">s</span><span class="letter06">t</span
        ><span class="letter07">i</span><span class="letter08">a</span>
        <span class="letter09">n</span>
        &nbsp;
        <span class="letter11">D</span>
        <span class="letter12">e</span><span class="letter13">l</span>
        <span class="letter14">o</span><span class="letter15">r</span>
        <span class="letter16">m</span><span class="letter17">e</span>
      </h1>
    </div>

    <div class="tags">
      <span class="tags1"> 𓀾 𓀿 𓁀 𓁁 𓁂 𓁃 𓁄 𓁅 </span>
      <span class="tags2"> 𓁆 𓁇 𓁈 𓁉 𓁍 𓁎 𓁏 </span>
    </div>

    <!-- <router-link to="/Projects"> -->
    <!-- <button type="button" class="btn btn-white btn- animate">projects</button> -->
    <!-- <div class="text-box">
      <a href="#" class="btn btn-white btn- animate"> soft</a>
    </div> -->

    <span class="tags5"> 𓁆 𓁇 𓁈 𓁉 𓁍 𓁎 𓁏 </span>
    <cloud :data="words" :fontSizeMapper="fontSizeMapper" />

    <!-- </router-link>  -->

    <div>
      <span class="tags4"> 𓁆 𓁇 𓁈 𓁉 𓁍 𓁎 𓁏 </span>
    </div>
    <span class="tags6"> 𓁆 𓁇 𓁈 𓁉 𓁍 𓁎 𓁏 </span>
  </div>
</template>

<script>
import Cloud from "vue-d3-cloud";

export default {
  name: "Home",
  data() {
    return {
      words: [
        { text: "Vue.js", value: 1000 },
        { text: "node.js", value: 200 },
        { text: "express", value: 800 },
        { text: "Javascript", value: 1000000 },
        { text: "SQL", value: 100 },
        { text: "Sass", value: 200 },
        { text: "HTML", value: 800 },
        { text: "GitHub", value: 10000 },
        { text: "CSS", value: 100 },
      ],
      fontSizeMapper: (word) => Math.log2(word.value) * 5,
    };
  },
  components: {
    Cloud,
  },
  props: {
    msg: String,
  },

  mounted() {},

  methods: {},
};
</script>


<style lang="css" scoped>
/* .hello {
    padding-left: 60px;
} */

/* *************************************************** */


/* Réglages du bloc de texte général */
#wrapper {
  text-align: center;
  font-family: "Libre Baskerville", serif;
  /* margin-top:20vh;  */

}
#wrapper h1 {
  white-space: normal;
  /* width: 26%; */
  display: inline-block;
  font-size: 2em;
  font-weight: 200;
  color: #11ece5;
  text-shadow: #11ece5 1px 0 10px;
  background-clip: text;
  -webkit-background-clip: text;
  position: relative;
}

/* Animations des lettres */
h1 span {
  opacity: 0;
}
.letter01 {
  animation: letters 3s ease 0000ms forwards;
}
.letter02 {
  animation: letters 3s ease 0300ms forwards;
}
.letter03 {
  animation: letters 3s ease 600ms forwards;
}
.letter04 {
  animation: letters 3s ease 900ms forwards;
}
.letter05 {
  animation: letters 3s ease 1200ms forwards;
}
.letter06 {
  animation: letters 3s ease 1500ms forwards;
}
.letter07 {
  animation: letters 3s ease 1800ms forwards;
}
.letter08 {
  animation: letters 3s ease 2100ms forwards;
}
.letter09 {
  animation: letters 3s ease 2400ms forwards;
}

/* .letter10 {
  animation: letters 3s ease 2700ms forwards;
} */

.letter11 {
  animation: letters 1s ease 3000ms forwards;
}
.letter12 {
  animation: letters 1s ease 3300ms forwards;
}
.letter13 {
  animation: letters 1s ease 3600ms forwards;
}
.letter14 {
  animation: letters 1s ease 3900ms forwards;
}
.letter15 {
  animation: letters 1s ease 4200ms forwards;
}
.letter16 {
  animation: letters 1s ease 4500ms forwards;
}
.letter17 {
  animation: letters 1s ease 4800ms forwards;
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
  height: 0.5px;
  box-shadow: rgb(17 236 229) 0px 0px 6px 0.7px;
  width: 0%;
  opacity: 0;
  margin-top: 0.2em;
  animation: lineWidth 7s ease-in-out forwards;
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
/* ------------------------ */



/* h1::before {content:"Christian Delorme"; color:transparent; display:block; position:absolute; width:100%; animation:scintillement 5s ease-in 7s infinite;}
@keyframes scintillement {
	0% {background:radial-gradient(circle farthest-side at -2em -4em, rgba(229,214,2242,0) 99%, rgba(229,214,2242,.8) 99%, rgba(229,214,2242,0) 100%) no-repeat; background-position:-10em 0;}
	10% {background:radial-gradient(circle farthest-side at -2em -4em, rgba(229,214,2242,0) 99%, rgba(229,214,2242,.8) 99%, rgba(229,214,2242,0) 100%) no-repeat; background-position:5em 0;}
} */


/* *********************************************** */
h1 {
  font-family: "Libre Baskerville", serif;
  color: rgb(17, 236, 229);
  /* padding-left: 60px; */
}
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
/* .tags3 {
  font-size: 20px;
  font-family: "La Belle Aurore", cursive;
  top: 0;
  color: #515152;
   margin-left: -29vw;
  margin-top: 21vh;
} */
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

/* -----[button soft skills]--------------- */

/* a.btn.btn-white.btn-.animate {
  font-family: "Libre Baskerville", serif;
  border-color: rgb(17, 236, 229); */
/* background: rgb(17, 236, 229); */
/* box-shadow: rgb(17 236 229) 0px 0px 6px 0.7px;
} */
/* body {
  background-color: #060b0e;
  font-weight: bold;
  width: 900px;
} */
/* 
.text-box {
  margin-left: -11vw;
  margin-top: 21vh;
}

.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 40px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
  position: absolute;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn-white {
  background-color: #ffffff;
  color: #777;
}

.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}

.btn-white::after {
  background-color: #fff;
}

.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

.btn-animated {
  animation: moveInBottom 5s ease-out;
  animation-fill-mode: backwards;
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
} */

/* -----[keyword cloud]------------------------- */

#tagsphere {
  background: url("/images/background.png") top center no-repeat;
  height: 230px;
  width: 380px;
  padding: 10px;
  margin: 10px;
  margin: 0 auto;
}
ul li a,
ul li a:visited {
  color: #e29154;
  font-weight: bold;
  text-decoration: none;
}
ul li a:hover,
ul li.link1 a:hover,
ul li.link2 a:hover,
ul li.link3 a:hover {
  color: #4eb6bf;
}
ul li.link1 a {
  color: #d8b596;
}
ul li.link2 a {
  color: #eaaf84;
}
ul li.link3 a {
  color: #ff8000;
}
</style>
