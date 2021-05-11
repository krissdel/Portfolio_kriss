

<template>
  <!-- <div class="about"> -->
     <div class="hello">
    <!-- <K2000 /> -->
    
    <img src="../assets/moi.png" alt="Image moi" class="img" />
 <h2>I'm christian Delorme </h2>
    <p>Welcome to my portfolio</p>
    <p>i'm a web developper front / back </p>
    
    
    <div class="tags">
      <span class="tags1"> 𓀾 𓀿 𓁀 𓁁 𓁂 𓁃 𓁄 𓁅 </span>
      <span class="tags2"> 𓁆 𓁇 𓁈 𓁉 𓁍 𓁎 𓁏 </span>
    </div>


    <span class="tags5"> 𓁆 𓁇 𓁈 𓁉 𓁍 𓁎 𓁏 </span>
    <cloud :data="words" :fontSizeMapper="fontSizeMapper" />


    <div>
      <span class="tags4"> 𓁆 𓁇 𓁈 𓁉 𓁍 𓁎 𓁏 </span>
    </div>
    <TagsBall />

    <span class="tags6"> 𓁆 𓁇 𓁈 𓁉 𓁍 𓁎 𓁏 </span>
  


    
  </div>
</template>

<script>
// import K2000 from '@/components/K2000.vue'
import TagsBall from '@/components/TagsBall.vue'

export default {
  name: "about",

  components: {
    // K2000,
    TagsBall
  },
  props: {

  }
};
</script>


<style scoped>
/* h1 {
 color: rgb(17, 236, 229);
} */
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



</style>


