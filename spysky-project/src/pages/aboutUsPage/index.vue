<template>
<div class="main-container" id="about-us-page">

  <Navbar />

  <!--============================= HERO BLOCK =============================-->

  <div class="hero-container">
    <div class="hero-overlay">
      <div><img id="asteroid1" src="../../assets/background-textures/asteroid1.png"></div>
      <div><img id="asteroid2" src="../../assets/background-textures/asteroid2.png"></div>
      <div><img id="asteroid3" src="../../assets/background-textures/asteroid3.png"></div>
      <div class="hero-nav">
          <div id="header">About us</div>
          <p>We dream of a time when space is free from junk, and that's what 
            SpySky is all about. We watch satellites and space junk really closely,
              and we share all that info with space agencies, big companies, and 
            anyone who loves space.</p>
            <router-link to="/3d-map" id="no-underline"><button class="fill"><img src="../../assets/icons/arrow.svg"> Explore our tools</button></router-link>
      </div>
    </div>
    <planetModel />
  </div>

  <Footer />

</div>
</template>
    
<script>
  
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import planetModel from "../components/planetScript.vue";

export default {
  name: "aboutUsPage",
  components: {
    Navbar,
    Footer,
    planetModel
  }
}

</script>
    
<style>
#about-us-page .hero-nav button {
  margin-top: 12px;
}
</style>