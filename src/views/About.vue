

<template>
  <div class="about">
    <K2000 />
    <!-- <h1>
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
    </h1> -->
    <img src="../assets/moi.png" alt="Image moi" class="img" />
 <h2>Hi! i'm christian Delorme </h2>
    <p>Welcome to my portfolio</p>
    <p>i'm a web developper front / back </p>
    
    <TagsBall />

  </div>
</template>

<script>
import K2000 from '@/components/K2000.vue'
import TagsBall from '@/components/TagsBall.vue'

export default {
  name: "about",

  components: {
    K2000,
    TagsBall
  },
  props: {

  }
};
</script>


<style scoped>
h1 {
 color: rgb(17, 236, 229);
}
img {
  vertical-align: middle;
  /* border-style: none; */
  max-width: 125px;
  border-image: linear-gradient(#f6b73c, #4d9f0c) 30;
}
</style>


