<template>
   <div class="map">
    
     <GmapMap
      :center='center'
      :zoom='12'
      style='width:100%;  height: 400px;'>

       <!-- <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"

    /> -->
    </GmapMap>
     <!-- map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: -34.397, lng: 150.644},
  zoom: 8,
  mapId: '90d36726a2e98a86'}); -->
  </div>
</template>

<script>
// import { defineComponent } from 'vue'


export default {
    name: "Map",
    data() {
    return {
      center: { lat: 48.97819900512695, lng: 1.8114213943481445 },
    }
    
  },

  
  //  mounted() {
  //   this.geolocate();
  // },
  // methods: {
  //   geolocate: function() {
  //     navigator.geolocation.getCurrentPosition(position => {
  //       this.center = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude,
  //       };
  //     });
  //   },
  // },
}
</script>

<style scoped>
/* .map {
padding-bottom: 20pc;
} */
</style>