<template>
  <div class="hello">
    <div class="tags">
      <span class="tags2"> 𓁆 𓁇 𓁈 𓁉 𓁍 𓁎 𓁏 </span>
    </div>

    <span class="tags5"> 𓁆 𓁇 𓁈 𓁉 𓁍 𓁎 𓁏 </span>
    <cloud :data="words" :fontSizeMapper="fontSizeMapper" />
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
        { text: "CSS", value: 300 },
        { text: "NPM", value: 200 },
        { text: "BEM", value: 400 },
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
};
</script>


<style lang="css" scoped>
h1 {
  font-family: "Libre Baskerville", serif;
  color: rgb(17, 236, 229);
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
</style>
