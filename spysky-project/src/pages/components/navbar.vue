<template>
    <div id="navbar">
        <router-link to="/" id="no-underline"><div id="logo"><img src="../../assets/icons/logo_s.svg" alt=""></div></router-link>
      <ul>
        <div class="nav-links">
          <router-link to="/about-us" id="no-underline"><li>About Us</li></router-link>
          <router-link to="/our-mission" id="no-underline"><li>Our Mission</li></router-link>
          <router-link to="/our-team" id="no-underline"><li>SpySKy Team</li></router-link>
          <router-link to="/pricing" id="no-underline"><li>Pricing</li></router-link>
          <router-link to="/3d-map" id="no-underline"><li>Our Tools</li></router-link>
          <router-link to="/contacts" id="no-underline"><li>Contacts</li></router-link>
        </div>
        <div class="nav-buttons">
          <router-link to="/login" id="no-underline">
            <button class="fill">Log in</button>
          </router-link>
          <router-link to="/signup" id="no-underline">
            <button class="stroke">Sign up</button>
          </router-link>
          <!-- <div>
            <img src="../../assets/icons/test_profile_photo.png" id="user-photo">
          </div> -->
        </div>
      </ul>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Navbar'
}
</script>

<style>
#navbar {
    font-size: 1rem;
    color: white;
    font-family: 'Exo 2', sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 75px;
    z-index: 10000;
    background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.3) 100%);
    backdrop-filter: blur(6px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    padding: 0 150px;
  }
  
  #navbar #logo img {
    height: 25px;
  }
  
  #navbar #user-photo {
    width: 36px;
  }
  
  #navbar ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 2rem;
    align-items: center;
  }
  
  #navbar ul .nav-links {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    align-items: center;
  }
  
  #navbar .nav-buttons {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  
  #navbar ul li, 
  #navbar .nav-buttons button {
    font-size: 14px;
    transition: 0.5s;
    cursor: pointer;
  }

  #active-nav {
    color: #FF8C71;
  }
  
  #navbar .nav-buttons button {
    height: 2.25rem;
  }

  #navbar ul li:hover {
    color: #FFC8C2;
  }
</style>