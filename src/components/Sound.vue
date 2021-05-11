<template>
   <!-- <figure>
    <audio
        controls
        src="./audio/remember to breathe.mp3">
    </audio>
</figure> -->

    
    
    <!-- <button type="button" class="btn btn-white btn- animate">play sound</button> -->
     
     
     
     <div class="text-box">
      <a href="#" class="btn btn-white btn- animate"><span style="font-size: 1.5em; color: white">
          <i class="fas fa-music"></i>
        </span></a>
    </div>
</template>

<script>
// var myTrack = new audio('audio/remember to breathe.mp3')


export default {
name: "Sound",
}
</script>

<style>
/* -----[button soft skills]--------------- */

  a.btn.btn-white.btn-.animate {
  font-family: "Libre Baskerville", serif;
  border-color: rgb(17, 236, 229);
background: rgb(17, 236, 229); 
 box-shadow: rgb(17 236 229) 0px 0px 6px 0.4px;
} 
 /* .btn-animate {
  font-family: "Libre Baskerville", serif;
  border-color: rgb(17, 236, 229);
background: rgb(17, 236, 229); 
 box-shadow: rgb(17 236 229) 0px 0px 6px 0.7px;
}  */

 /* body {
  background-color: #060b0e;
  font-weight: bold;
  width: 900px;
}  */
 
/* .text-box {
  margin-left: -11vw;
  margin-top: 21vh;
 
} */

.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  /* padding: 15px 40px; */
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

/* .btn-white {
  background-color: #ffffff;
  color: #777;
} */

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
} 
</style>