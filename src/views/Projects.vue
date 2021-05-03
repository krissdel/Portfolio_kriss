<template>
  <div class="wrapper">
    <!-- <div class="tarjetas">


      <div class="tarjetas__item">
        <h2 class="tarjetas__titulo">One Page</h2>
        <div class="tarjetas__info">
          <p>
            Una estructura simple, con toda la información requerida en una sola
            página.
          </p>
        </div>
        <div class="tarjetas__precio">
          <p>S/. 2950.00</p>
          <p><small>Incluido IGV.</small></p>
        </div> -->

     
      <!-- </div>


      
    </div> -->
  <!-- </div>  -->
  <!-- ================================= -->
  <div class="grid-container">
      <!-- <Loader /> -->

    <div class="child-page-listing">
     
<h1>projects</h1>


      <article class="project-listing">
        <h2 class="project-title">Rextense</h2>
        <a class="project-link" href="https://github.com/krissdel/Rextense" target="_blank">Lien Github</a>
        <div class="project-image">
          <a href="https://rextense.com/" target="_blank"><img src="../assets/rextense.png" alt="image rextense "/> </a>
        </div>
      </article>





      <article class="project-listing">
                <h2 class="project-title">Groupomania</h2>

        <a class="project-link" href="https://github.com/krissdel/groupomania">Lien Github</a>
        <div class="project-image">
          <a href="#">
            <img src="../assets/groupomania_projet2.png" alt="image groupomania"/>
          </a>
        </div>
      </article>

      <article class="project-listing">
                        <h2 class="project-title">So Pekocko</h2>
        <a class="project-link" href="#">Lien Github</a>
        <div class="project-image">
          <a href="#">
            <img src="../assets/so_pekocko2.png" alt="image so_pekocko"/>
          </a>
        </div>
      </article>

      <article class="project-listing">
       <h2 class="project-title">Orinoco</h2>
        <a class="project-link" href="#">Lien Github</a>
        <div class="project-image">
          <a href="#">
            <img src="../assets/orinoco2.png" alt="image orinoco"/>
          </a>
        </div>
      </article>
      <article class="project-listing">
               <h2 class="project-title">Chouette Agence</h2>
        <a class="project-link" href="#">Lien Github</a>
        <div class="project-image">
          <a href="#">
            <img src="../assets/chouette_agence2.png" alt="image la chouette agence"/>
          </a>
        </div>
      </article>

      <article class="project-listing">
               <h2 class="project-title">Ohmyfood</h2>
        <a class="project-link" href="#">Lien Github</a>
        <div class="project-image">
          <a href="#"> <img src="../assets/ohmyfood2.png" alt="image ohmyfood"/> </a>
        </div>
      </article>

      <article class="project-listing">
                       <h2 class="project-title">CV</h2>

        <a class="project-link" href="#">Lien Github</a>
        <div class="project-image">
          <a href="#"> <img src="../assets/cv2.png" alt="image projet CV"/> </a>
        </div>
      </article>
    </div>

  </div>
  </div>
</template>

<script>
// import Loader from '@/components/Loader.vue'

export default {
  name: "projects",
  components: {
    // Loader
  },
};
</script>


<style scoped>
.wrapper {
  max-width: 900px;
  margin: auto auto;
  padding: 1em;

}



.grid-container {
  display: grid;
  /* display: inline-grid; */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    /* grid-template-rows: auto 1.5fr 1fr; */

  grid-gap: 1em;
  margin-left: 10pc;
  animation: fade-in-up 2s backwards;
}
h1 {
  color: rgb(17, 236, 229);
  margin-top: 10%;
  
}
.project-listing {
  display: grid;
  box-shadow: rgb(17 236 229) 0px 0px 6px 0.7px;
  border-radius: 70px 10px 10px 10px;
  text-align: center;
  padding: 1em;
  grid-template-rows: subgrid;
  grid-row: span 3;
  grid-row-gap: 0em;
  /* background: linear-gradient(90deg, white 0%, #0f1724 100%); */
  background: linear-gradient(90deg, white 0%, #11ece5 100%);

  transition: all 500ms ease-in-out;
  animation: fade-in-up 2s backwards;
  margin: 1em;
}
.project-listing:hover{
  transform: translate(0, -1.5rem) rotate(-3deg) scale(1.3);
}
.project-title {
  font-size: 2rem;
  /* grid-row: span 1; */
}
img {
  width: 100%;
  height: auto;
}
/* ==================================== */

/* // Animations */

@keyframes fade-in-up {
  0% {
    transform: translatey(100%);
    opacity: 0%;
  }

  100% {
    transform: translatey(0);
    opacity: 100%;
  }
}
</style>