<template>
  <div class="view_port">
  <!-- <div class="polling_message">
  </div> -->
  <div class="cylon_eye"></div>
</div>
</template>

<script>
export default {
name: "k2000",
}
</script>

<style scoped>
/* .polling_message {
  color: white;
  float: left;
  margin-right: 2%;
} */

.view_port {
  background-color: black;
  height: 4px;
  width: 100%;
  overflow: hidden;
}

.cylon_eye {
  background-color: #11ece5;
  background-image:         linear-gradient(to right, rgba( 0,0,0,0.9 ) 25%, rgba( 0,0,0,0.1 ) 50%, rgba( 0,0,0,0.9 ) 75%);
  color: white;
  height: 100%;
  width: 10%;

  -webkit-animation: 4s linear 0s infinite alternate move_eye;
          animation: 4s linear 0s infinite alternate move_eye;
}

@-webkit-keyframes move_eye { from { margin-left:-20%; } to { margin-left:100%; }  }
        @keyframes move_eye { from { margin-left:-20%; } to { margin-left:100%; }  }
</style>