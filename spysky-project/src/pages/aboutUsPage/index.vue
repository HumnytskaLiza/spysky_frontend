<template>
  <div id="about-us-page-container">
    <Navbar />

    <!--============================= WELCOME BLOCK =============================-->

    <div id="about-us-block">
      <div id="about-us-overlay">
        <div><img id="asteroid1" src="../../assets/background-textures/asteroid1.png"></div>
        <div><img id="asteroid2" src="../../assets/background-textures/asteroid2.png"></div>
        <div><img id="asteroid3" src="../../assets/background-textures/asteroid3.png"></div>
        <div id="about-us-nav">
            <div id="header">About Us</div>
            <p>We dream of a time when space is free from junk, and that's what 
              SpySky is all about. We watch satellites and space junk really closely,
                and we share all that info with space agencies, big companies, and 
              anyone who loves space.</p>
            <div class="about-us-buttons">
                <button id="fill">Explore our tools</button>
            </div>
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
/*===================== CONTAINERS ===========================*/

#about-us-page-container {
  width: 100vw;
  position: relative;
  color: white;
  font-family: 'Exo 2', sans-serif;
  box-sizing: border-box;
  padding: 0 150px;
  background-color: black;
}

/*=================== WELCOME OVERLAY BLOCK ===============================*/

#about-us-block {
  width: 100vw;
  height: 100vh;
}

#about-us-overlay {
    position: relative;
    z-index: 100;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    width: 40%;
}

#about-us-nav {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

#about-us-nav p {
  width: 80%;
  line-height: 150%;
  font-size: 18px;
}

#about-us-nav #header {
    font-size: 48px;
    font-weight: 700;
    text-transform: uppercase;
}

#about-us-overlay .welcome-buttons {
    margin-top: 10px;
    display: flex;
    gap: 20px;
}

#about-us-overlay .welcome-buttons button {
    font-size: 20px;
    font-family: 'Exo 2', sans-serif;
    color: white;
    height: 50px;
    padding: 0 25px;
    border: 0;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.17);
    cursor: pointer;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
}

#about-us-overlay .about-us-buttons #fill {
  background: linear-gradient(105deg, #003B72 0%, #207DD2 100%);
}

#about-us-overlay .about-us-buttons #stroke {
  border: 3px solid #003B72;
  background: none;
}

#about-us-overlay .about-us-buttons #stroke {
  background-color: black;
}

#about-us-overlay .about-us-buttons button:hover {
  box-shadow: 0px 0px 8.8px 7px rgba(0, 20, 45, 0.85);
}

#about-us-overlay .nasa-data {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
}

#about-us-overlay .nasa-data img {
  height: 40px;
}

/*==================== ASTEROIDS ========================*/

#about-us-overlay #asteroid1 {
  position: absolute;
  width: 200px;
  bottom: 5%;
  right: -10%;
  transform: rotate(50deg);
  transition: 2s;
}

#about-us-overlay #asteroid1:hover {
  transform: rotate(60deg);
  right: -15%;
}

#about-us-overlay #asteroid2 {
  position: absolute;
  width: 350px;
  bottom: 35%;
  right: -80%;
  transition: 2s;
}

#about-us-overlay #asteroid2:hover {
  transform: rotate(20deg);
  right: -75%;
}

#about-us-overlay #asteroid3 {
  position: absolute;
  width: 110px;
  top: 12%;
  right: -15%;
  transform: rotate(60deg);
  transition: 2s;
}

#about-us-overlay #asteroid3:hover {
  transform: rotate(50deg);
  top: 10%;
  right: -10%;
}

/**/

#about-us-overlay .about-us-buttons {
  margin-top: 10px;
  display: flex;
  gap: 20px;
}

#about-us-overlay .about-us-buttons button {
  font-size: 20px;
  font-family: 'Exo 2', sans-serif;
  color: white;
  height: 50px;
  padding: 0 25px;
  border: 0;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.17);
  cursor: pointer;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
}

#about-us-overlay .about-us-buttons #fill {
background: linear-gradient(105deg, #003B72 0%, #207DD2 100%);
}

#about-us-overlay .about-us-buttons #stroke {
border: 3px solid #003B72;
background: none;
}

#about-us-overlay .about-us-buttons #stroke {
background-color: black;
}

#about-us-overlay .about-us-buttons button:hover {
box-shadow: 0px 0px 8.8px 7px rgba(0, 20, 45, 0.85);
}

</style>