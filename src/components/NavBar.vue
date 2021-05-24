<template>
  <div id="nav_bar">
    <nav class="nav_bar_icons">
      <router-link to="/homeLogo">
        <img src="../assets/image/Ellipse 1.png" alt="Image logo" class="img" />
      </router-link>
      <!-- <b>Home</b> -->
      <router-link to="/">
        <span id="icon" @click="colorOn" style="font-size: 1.5em; color: white">
          <i class="fas fa-home"></i>
        </span>
      </router-link>
      <!-- <b>About</b> -->
      <router-link to="/about">
        <span style="font-size: 1.5em; color: white">
          <i class="fas fa-user"></i>
        </span>
      </router-link>
      <!-- <b>Skills</b> -->
      <router-link to="/skills">
        <span style="font-size: 1.5em; color: white">
          <i class="fas fa-eye"></i>
        </span>
      </router-link>
      <!-- <b>My Projects</b> -->
      <router-link to="/projects">
        <span style="font-size: 1.5em; color: white">
          <i class="fas fa-briefcase"></i>
        </span>
      </router-link>
      <!-- <b>Contact</b>  -->
      <router-link to="/contact">
        <span style="font-size: 1.5em; color: white">
          <i class="fas fa-envelope"></i> </span
      ></router-link>

      <div style="top: 0px; left: 100%; width: 2%" class="GlowingLine1"></div>

      <div class="GlowingLine2" style="top: 10pc; left: 100%; width: 2%"></div>
      <div class="GlowingLine2" style="top: 35pc; left: 100%; width: 2%"></div>
      <div class="GlowingLine3" style="top: 25pc; left: 100%; width: 2%"></div>
      <div class="GlowingLine4" style="top: 45pc; left: 100%; width: 2%"></div>
      <div class="GlowingLine4" style="top: 80pc; left: 100%; width: 2%"></div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {
    colorOn() {

    },
  },
};
</script>

<style scoped>
/* -----[nav bar]--------------------- */

#nav_bar {
  background: #0f1724;
  width: 80px;
  height: 100%;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 3;
  min-height: 500px;
  border: 1px solid rgb(42 97 95);
}

/* -----[icons]------------------------------------- */
.nav_bar_icons {
  background: #181818;
  width: 80px;
  height: 100%;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 3;
  min-height: 500px;
}
/* -----[icons:hover]----------------------------------- */
.fa-home:hover {
  color: rgb(17, 236, 229);
}
.fa-user:hover {
  color: rgb(17, 236, 229);
}
.fa-eye:hover {
  color: rgb(17, 236, 229);
}
.fa-briefcase:hover {
  color: rgb(17, 236, 229);
}
.fa-envelope:hover {
  color: rgb(17, 236, 229);
}
/* -----[icons:active]----------------------------------- */
/* 
.fa-home:active {
  color: rgb(17, 236, 229);
}
.fa-user:active {
  color: rgb(17, 236, 229);
}
.fa-eye:active {
  color: rgb(17, 236, 229);
}
.fa-briefcase:active {
  color: rgb(17, 236, 229);
}
.fa-envelope:active {
  color: rgb(17, 236, 229);
} */

.img {
  padding: 10px;
  height: 40px;
}
/* =====[icones hover]============================ */
/* .nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
}
.nav li {
  font-size: 12pt;
  display: block;
  float: left;
  height: 90px;
  width: 145px; 
  text-align: center; 
  transition: all 0.2s ease-in-out;
} */
/* .nav .home {
    background: #a3d39c;
}
.nav .about {
    background: #7accc8;
}
.nav .projects {
    background: #4aaaa5;
}
.nav .contact {
    background: #35404f;
} */
/* .nav li a {
  font-family: FontAwesome;
  color: #eee;
  font-size: 22pt;
  text-decoration: none;
  display: block;
  padding: 15px;
} */
/* .nav li i {
  color: #fff;
  padding: 0 10px;
}
.nav li b {
  padding: 15px 0;
  display: none;
}
.nav a:hover {
  color: #fff;
}
.nav a:hover i {
  display: none;
}
.nav a:hover b {
  display: block;
} */
/* ::after {
  box-sizing: border-box; 
  box-sizing: content-box;
} */
/* id="nav_bar" */
/* * */
/* #nav_bar {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

#nav_bar:before,
:after {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
} */
/* =====[glowing lines]================================== */
.GlowingLine1 {
  position: absolute;
  height: 63px;
  background: rgb(17, 236, 229);
  box-shadow: rgb(17 236 229) 0px 0px 6px 0.7px;
}
.GlowingLine2 {
  position: absolute;
  height: 20px;
  background: rgb(17, 236, 229);
  box-shadow: rgb(17 236 229) 0px 0px 6px 0.7px;
}
.GlowingLine3 {
  position: absolute;
  height: 108px;
  background: rgb(17, 236, 229);
  box-shadow: rgb(17 236 229) 0px 0px 6px 0.7px;
}
.GlowingLine4 {
  position: absolute;
  height: 115px;
  background: rgb(17, 236, 229);
  box-shadow: rgb(17 236 229) 0px 0px 6px 0.7px;
}
/* ====================================================== */
</style>