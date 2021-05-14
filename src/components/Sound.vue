<template>
  <div>

    <!-- <div class="controls"> -->
    <!-- <button class="btn" v-if="!isPlaying" @click="play">
      <span style="font-size: 1.5em; color: red">
        <i class="fas fa-music"></i>
      </span>
    </button>

    <button class="btn" @click="pause" v-else>
      <span style="font-size: 1.5em; color: white">
        <i class="fas fa-music"></i
      ></span>
    </button> -->
    <!-- </div> -->

    <button
      class="btn "
      @click.prevent="audio.isPlaying ? pause(audio) : play(audio)"
      v-for="audio in audios"
      :key="audio.id"
    >
      <span style="font-size: 1.5em; color: white">
        <i class="fas fa-music"></i
      ></span> <br /> {{ audio.isPlaying ? "ON" : "OFF" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Sound",

  // ----------------------------------------------------
//   data() {
//     return {
//       current: {},
//       index: 0,
//       songs: [
//         {
//           src: require("../assets/audio/music.mp3"),
//         },
//       ],
//       sound: new Audio(),
//     };
//   },
//   methods: {
//     play(song) {
//       if (typeof song.src != "undefined") {
//         this.current = song;

//         this.sound.src = this.current.src;
//       }
//       this.sound.play();
//       this.isplaying = true;
//     },
//     pause() {
//       this.sound.pause();
//       this.sound.currentTime = 0;
//       this.isplaying = false;
//     },
//   },
//   created() {
//     this.current = this.songs[this.index];
//     this.sound.src = this.current.src;
//   },

// ============================
  data() {
    return {
    audios: [
      {
        id: 'muscle-car',
        // name: 'Muscle Car',
        file:  new Audio(require("../assets/audio/SOUND.mp3")),
        isPlaying: false
      }
    ]
  }
   },
  methods: {
    play (audio) {
      audio.isPlaying = true;
      audio.file.play();
    },
    
    pause (audio) {
      audio.isPlaying = false;
      audio.file.pause();
    //   audio.file.currentTime = 0;
    }
  }


  // -------------------------------------------------------------------

  //   methods: {
  //     play() {
  //       //   console.log(this.musicPlayed);
  //       let myTrack = new Audio(require("../assets/audio/music.mp3"));
  //       this.isPlaying = true;
  //       myTrack.play();
  //     },
  //     pause() {
  //       let myTrack = this.isPlaying;
  //       this.isplaying = false;
  //     //   this.myTrack.pause();
  //       this.isplaying.pause();
  //       myTrack.currentTime = 0;
  //     },
  //   },
};
</script>

<style>
/* -----[button sound]--------------- */

.btn {
     font-family: "Libre Baskerville", serif;
  border-color: rgb(17, 236, 229);
  background: rgb(17, 236, 229);
  box-shadow: rgb(17 236 229) 0px 0px 6px 0.4px;
  width: 75px;
  border-radius: 100px;

}
.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

</style>