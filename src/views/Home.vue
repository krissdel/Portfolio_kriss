<template>
  <div class="home">
    <MouseMove />
  <SoftSkills msg=""/>
  </div>
</template>

<script>
// @ is an alias to /src

import SoftSkills from '@/components/SoftSkills.vue'
import MouseMove from '@/components/MouseMove.vue'

export default {
  name: 'home',
  components: {
    SoftSkills,
    MouseMove
  }
}
</script>

<style scoped>

</style>
