<template>
<!-- <div>
  <loader object="#11ece5" color1="#11ece5" color2="#11ece5" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="100" disableScrolling="false" name="circular"></loader>
  
    </div>  -->
    <div class="loading">
 
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
</template>

<script>
// import circular from "./loaders/circular";
export default {
    name: 'loader',
    components:{
        // circular : circular,
    },
    // props: ['object','color1','color2','size','speed','opacity','bg','objectbg','name','disableScrolling'],
}
</script>

<style>
    /* body.overflowHidden {
        overflow: hidden !important;
    } */
/* body {
  background: #222;
  text-align: center;
  padding: 20%;
} */


/*
 * Loading Dots
 * Can we use pseudo elements here instead :after?
 */
.loading span {
  display: inline-block;
  vertical-align: middle;
  width: .6em;
  height: .6em;
  margin: .19em;
  background: #007DB6;
  border-radius: .6em;
  animation: loading 1s infinite alternate;
}

/*
 * Dots Colors
 * Smarter targeting vs nth-of-type?
 */
.loading span:nth-of-type(2) {
  background: #11ece5;
  animation-delay: 0.2s;
}
.loading span:nth-of-type(3) {
  background: #11ece5;
  animation-delay: 0.4s;
}
.loading span:nth-of-type(4) {
  background: #11ece5;
  animation-delay: 0.6s;
}
.loading span:nth-of-type(5) {
  background: #11ece5;
  animation-delay: 0.8s;
}
.loading span:nth-of-type(6) {
  background: #11ece5;
  animation-delay: 1.0s;
}
.loading span:nth-of-type(7) {
  background: #11ece5;
  animation-delay: 1.2s;
}

/*
 * Animation keyframes
 * Use transition opacity instead of keyframes?
 */
@keyframes loading {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>