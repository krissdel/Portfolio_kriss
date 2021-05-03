<template>
  <!-- <h1>My Projects</h1> -->
  <div class="wrapper">
    <!-- <h1>Projects</h1>
    <div class="tarjetas">


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

      <!-- <article class="project-listing">
        <a class="project-link" href="https://github.com/krissdel/Rextense" target="_blank">Lien Github</a>
        <div class="project-image">
          <a href="https://rextense.com/" target="_blank"><img src="../assets/rextense.png" alt="image rextense "/> </a>
        </div>
      </article> -->

<!-- 
      </div>




      <div class="tarjetas__item">
        <h2 class="tarjetas__titulo">Página Simple</h2>

        <div class="tarjetas__info">
          <p>Una web con diferentes secciones.</p>
        </div>
        <div class="tarjetas__precio">
          <p>S/. 2950.00</p>
          <p><small>Incluido IGV.</small></p>
        </div>
      </div>
      <div class="tarjetas__item">
        <h2 class="tarjetas__titulo">Tienda virtual</h2>

        <div class="tarjetas__info">
          <p>
            Has crecer tu negocio con una tienda digital que acepta todo tipo de
            tarjetas
          </p>
        </div>
        <div class="tarjetas__precio">
          <p>S/. 2950.00</p>
          <p><small>Incluido IGV.</small></p>
        </div>
      </div>
    </div>
  </div> -->
  <!-- ================================= -->
  <div class="grid-container">
      <!-- <Loader /> -->

    <div class="child-page-listing">
      <h2>projects</h2>



      <article class="project-listing">
        <a class="project-link" href="https://github.com/krissdel/Rextense" target="_blank">Lien Github</a>
        <div class="project-image">
          <a href="https://rextense.com/" target="_blank"><img src="../assets/rextense.png" alt="image rextense "/> </a>
        </div>
      </article>





      <article class="project-listing">
        <a class="project-link" href="https://github.com/krissdel/groupomania">Lien Github</a>
        <div class="project-image">
          <a href="#">
            <img src="../assets/groupomania_projet2.png" alt="image groupomania"/>
          </a>
        </div>
      </article>

      <article class="project-listing">
        <a class="project-link" href="#">Lien Github</a>
        <div class="project-image">
          <a href="#">
            <img src="../assets/so_pekocko2.png" alt="image so_pekocko"/>
          </a>
        </div>
      </article>

      <article class="project-listing">
        <a class="project-link" href="#">Lien Github</a>
        <div class="project-image">
          <a href="#">
            <img src="../assets/orinoco2.png" alt="image orinoco"/>
          </a>
        </div>
      </article>
      <article class="project-listing">
        <a class="project-link" href="#">Lien Github</a>
        <div class="project-image">
          <a href="#">
            <img src="../assets/chouette_agence2.png" alt="image la chouette agence"/>
          </a>
        </div>
      </article>

      <article class="project-listing">
        <a class="project-link" href="#">Lien Github</a>
        <div class="project-image">
          <a href="#"> <img src="../assets/ohmyfood2.png" alt="image ohmyfood"/> </a>
        </div>
      </article>

      <article class="project-listing">
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
  font-family: Lato, sans-serif;
  margin: auto auto;
  padding: 1em;

}

img {
  width: 100%;
  height: auto;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1em;
  margin-left: 10pc;
  animation: fade-in-up 2s backwards;
}
h1 {
  color: rgb(17, 236, 229);
  margin-top: 10%;
  font-family: Josefin Sans, sans-serif;
}

/* ==================================== */

/* @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"); */





.tarjetas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: auto 1.5fr 1fr;
  gap: 2rem;
}
.tarjetas__item {
  display: grid;
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.4);
  border-radius: 70px 10px 10px 10px;
  text-align: center;
  padding: 1em;
  grid-template-rows: subgrid;
  grid-row: span 3;
  grid-row-gap: 0em;
  background: linear-gradient(90deg, white 0%, #f1f1f1 100%);
  transition: all 500ms ease-in-out;
  animation: fade-in-up 2s backwards;

  /* @for $i from 1 through 3 {
    &:nth-child(#{$i}n) {
      animation-delay: #{$i * 0.2}s;
    }
  }

  &:hover {
    transform: translate(0, -1.5rem) rotate(-3deg) scale(1.3);
  } */
}
.tarjetas__titulo {
  font-size: 2rem;
  grid-row: span 1;
  font-family: Josefin Sans, sans-serif;
}
.tarjetas__info {
  grid-row: span 1;
  max-width: 22ch;
  margin: 0 auto;
}
.tarjetas__precio {
  grid-row: span 1;
  font-size: 2rem;
  font-weight: 900;
}
.tarjetas__precio p {
  margin: 0;
}
.tarjetas__precio small {
  font-size: 0.8rem;
  font-weight: 300;
}

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