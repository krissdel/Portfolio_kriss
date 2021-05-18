<template>
  <div class="container_about">
    <Name />

    <!-- -------------------------------- -->
    <div class="container_about_text">
      <div class="container_text">
        <div class="card">
          <div class="card-body">
            <p class="card-text">
              Développeur web ayant la capacité et les compétences nécessaires à
              la mise en oeuvre de nouveaux projets, je serais fier de mettre
              mon savoir faire à votre service
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <p class="card-text">
              Web developer with the ability and the skills needed to
              implementation of new projects, I would be proud to put my
              knowledge at your service
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- <p class="text_about">let's make something special...</p> -->

    <!-- <MouseMove /> -->
  </div>
</template>

<script>
import Name from "@/components/Name.vue";

// import MouseMove from "@/components/MouseMove.vue";

export default {
  name: "about",
  components: {
    Name,
    // MouseMove,
  },
};
</script>

<style scoped>
.container_about_text {
  padding-left: 80px;
  display: flex;
    justify-content: center;
}
.container_text {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  text-align: left;
  /* padding: 30%; */
  width: 50%;
}
/* p.text_about {
  font-size: 2rem;
  font-family: "Libre Baskerville", serif;
  color: white;
  width: 100%;
  padding-top: 6pc;
  padding-left: 20pc;
  padding-right: 20pc;
  text-align: left;
} */
.card-text {
  font-size: 1.5rem;
  font-family: "Libre Baskerville", serif;
  color: wheat;
  background-color: #060b0e;
}
.card {
  margin-bottom: 6pc;
  border-color: #060b0e;
}
.card-body {
  padding: 0rem 0rem;
}
</style>
