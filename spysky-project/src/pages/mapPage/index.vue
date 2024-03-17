<template>
    <div id="map-container">
      <Navbar />
      <EarthMap />
    </div>
</template>
  
<script>

import Navbar from "../../pages/components/navbar.vue"
import EarthMap from "../../pages/components/mapScript.vue"

export default {
  name: "map",
  components: {
    Navbar,
    EarthMap
  }
}
  
</script>

<style>

#map-container {
  background: none;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>