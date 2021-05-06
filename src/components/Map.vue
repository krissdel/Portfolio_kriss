<template>
   <div>
    <!-- <div>
      <h2>Search and add a pin</h2>
    </div> -->
    <br>
     <GmapMap
      :center='center'
      :zoom='12'
      style='width:100%;  height: 400px;'
    />
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