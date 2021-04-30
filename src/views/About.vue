

<template>
  <div class="about">
    <K2000 />
    <h1>About Me</h1>
    <img src="../assets/moi.png" alt="Image moi" class="img" />
  </div>
</template>

<script>
import K2000 from '@/components/K2000.vue'

export default {
  name: "about",

  components: {
    K2000,
  },
};
</script>


<style scoped>
h1 {
 color: rgb(17, 236, 229);
}
img {
  vertical-align: middle;
  border-style: none;
  max-width: 125px;
}
</style>>


