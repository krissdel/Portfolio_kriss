<template>
  <div>
    <!-- <figure>
      <audio controls src="../audio/music.mp3"></audio>
    </figure> -->

    <!-- <div class="text-box"> -->

    <!-- <button class="sound"
        ><span style="font-size: 1.5em; color: white">
          <i class="fas fa-music"></i></span
      ></button> -->

    <!-- <div>
      <button v-if="musicPlayed" @click="playMusic()" class="btn">
        <span style="font-size: 1.5em; color: white">
          <i class="fas fa-music"></i
        ></span>
      </button>
    </div> -->
    <button @click="playMusic()" class="btn">
      <span style="font-size: 1.5em; color: red">
        <i class="fas fa-music"></i>
      </span>
    </button>

    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "Sound",
    // data() {
    //   return { musicPlayed: true };
    // },

  methods: {
    playMusic() {
      //   console.log(this.musicPlayed);
      let myTrack = new Audio(require("../audio/music.mp3"));
      let musicPlayed = false;

      if (musicPlayed == false) {
        myTrack.play();

        console.log(myTrack);
        console.log(musicPlayed);
        console.log("myTrack", typeof myTrack);
        console.log("musicPlayed", typeof musicPlayed);

      } else (musicPlayed !== false); {
        //    let musicPlayed = false;
        console.log("hjklkjh");
        myTrack.pause();
        myTrack.currentTime = 0;
// console.log(musicPlayed)
        console.log("myTrack2", typeof myTrack);
      }
    },
  },
};
//  if(this.musicPlayed){
//       setTimeout(function () {
//     myTrack.play();
// }, 150);

//  }
//  else{
//      myTrack.pause();
//  }

//       if (playPromise) {

//       myTrack.play();

//         console.log(myTrack.play);
//    }

//   if (this.musicPlayed=== false) {

//          myTrack.pause();
//      myTrack.currentTime = 0;

//            }
//   else if (this.musicPlayed !== false) {
//     myTrack.pause();
//     myTrack.currentTime = 0;
//     this.musicPlayed = false;
//   }
// },
//   },

//  methods: {
//     playMusic () {
//       if(musicPlayed) {
//         var myTrack = new Audio("../audio/music.mp3");
//         myTrack.play();
//       }
//     }
//   }
// };
</script>

<style>
/* -----[button sound]--------------- */

.btn {
  border-color: rgb(17, 236, 229);
  background: rgb(17, 236, 229);
  box-shadow: rgb(17 236 229) 0px 0px 6px 0.4px;
  border-radius: 100px;
}
.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* body {
  background-color: #060b0e;
  font-weight: bold;
  width: 900px;
}  */

/* .text-box {
  margin-left: -11vw;
  margin-top: 21vh;
 
} */

/* .btn:link,
.btn:visited {
  padding: 15px 40px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
  position: absolute;
} */

/* .btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
} */

/* .btn-white {
  background-color: #ffffff;
  color: #777;
} */

/* .btn::after {
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
} */

/* .btn-white::after {
  background-color: #fff;
} */

/* .btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
} */

/* .btn-animated {
  animation: moveInBottom 5s ease-out;
  animation-fill-mode: backwards;
} */

/* @keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
} */
</style>