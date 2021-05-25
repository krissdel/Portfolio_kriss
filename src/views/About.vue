<template>
  <div class="container_about">
    <Name />
    <!-- <Loader /> -->
    <!-- --------[tape words]--------------------------------------------------------------- -->

    <!-- ----------------------------------------------------------------------- -->

    <div class="container_about_text">
      <div class="container_text">
        <p class="text-md-start">
          Développeur web ayant la capacité et les compétences nécessaires à la
          mise en oeuvre de nouveaux projets, je serais fier de mettre mon
          savoir faire à votre service
        </p>

        <!-- <div class="card">
          <div class="card-body">
            <p class="card-text">
              Développeur web ayant la capacité et les compétences nécessaires à
              la mise en oeuvre de nouveaux projets, je serais fier de mettre
              mon savoir faire à votre service
            </p>
          </div>
        </div> -->
        <p class="text-md-start">
          Web developer with the ability and the skills needed to implementation
          of new projects, I would be proud to put my knowledge at your service
        </p>
        <!-- <div class="card">
          <div class="card-body">
            
            <p class="card-text">
              Web developer with the ability and the skills needed to
              implementation of new projects, I would be proud to put my
              knowledge at your service
            </p>
          </div>
        </div> -->
      </div>
    </div>
    <span class="tags2"> 𓁆 𓁇 𓁈 𓁉 𓁍 𓁎 𓁏 </span>
  </div>
</template>

<script>
import Name from "@/components/Name.vue";
// import Loader from '../components/Loader.vue';

export default {
  name: "about",

  components: {
    Name,
    // Loader,
  },
};
</script>








<style scoped>
.container_about_text {
  display: flex;
  justify-content: center;
  padding-left: 80px;
}
.container_text {
  display: flex;
  flex-direction: column;
  text-align: justify;
  width: 70%;
  /* padding-left: 80px; */
}
.text-md-start {
   font-size: 1rem;
  font-family: "Libre Baskerville", serif;
  color: wheat;
  padding-bottom: 50px;
}

.card {
  margin-bottom: 6pc;
  border-color: #060b0e;
}
.card-body {
  padding: 0rem 0rem;
}

/* --------[gliph]-------------------------- */
.tags2 {
  font-size: 20px;
  font-family: "La Belle Aurore", cursive;
  bottom: 50px;
  top: 0;
  display: flex;
  justify-content: flex-end;
  color: #515152;
}

/* -----[tape words]-------------------------------------------- */
</style>
