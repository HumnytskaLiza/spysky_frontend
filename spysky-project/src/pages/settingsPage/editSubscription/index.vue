<template>
    <div id="settings-container">
      <Navbar />
  
      <!-- =============================  ============================= -->
  
      <div id="main-container">
        <SettingsNavbar />
        <div id="subscription-container"></div>
      </div>
  
      <Footer />
    </div>
  </template>
      
  <script>
    
  import Navbar from "../../components/navbar.vue";
  import SettingsNavbar from "../../components/settingsNavbar.vue";
  import Footer from "../../components/footer.vue";
  
  export default {
    name: "editNotifications",
    components: {
      Navbar,
      SettingsNavbar,
      Footer
    }
  }
  
  </script>
      
  <style>
  /*===================== CONTAINERS ===========================*/
  
  #settings-container {
    width: 100vw;
    position: relative;
    color: white;
    font-family: 'Exo 2', sans-serif;
    box-sizing: border-box;
    padding: 0 150px;
    background-color: black;
    height: fit-content;
  }
  
  /*=================== ===============================*/
  
  #main-container {
    width: 100%;
    height: 80vh;
    margin: 100px 0;
    box-sizing: border-box;
    font-size: 18px;
    line-height: 150%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #subscription-container {
    width: 70%;
    height: 100%;
    box-sizing: border-box;
    background-color: rgb(161, 148, 132);
  }
  
  </style>