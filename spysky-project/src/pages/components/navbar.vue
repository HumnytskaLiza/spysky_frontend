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
        <!-- <div class="nav-buttons">
          <router-link to="/login" id="no-underline">
            <button class="fill">Log in</button>
          </router-link>
          <router-link to="/signup" id="no-underline">
            <button class="stroke">Sign up</button>
          </router-link>
        </div> -->
        <div class="nav-buttons">
          <div id="user" @click="showDropdown()">
            <img src="../../assets/icons/test_profile_photo.png" id="user-photo">
          </div>
        </div>
        <div id="user-dropdown">
          <div>
            <router-link to="/settings" id="no-underline-dropdown">
              <p>Profile settings</p>
            </router-link>
              <p>Dashboard</p>
          </div>
          <hr>
          <div id="logout">
            <img src="../../assets/icons/log-out.svg" alt="">
            <div>Log out</div>
          </div>
        </div>
      </ul>
    </div>
</template>

<script lang="ts">


export default {
  name: 'Navbar',
  methods: {
    showDropdown() {
      let dropdown = document.getElementById("user-dropdown")
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      } else {
        dropdown.classList.toggle("show");
      }
  }
},
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
    cursor: pointer;
  }
  
  #navbar ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 2rem;
    align-items: center;
    position: relative;
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

  #user-dropdown {
    position: absolute;
    padding: 30px 70px 45px 30px;
    background-color: #000E1F;
    top: 60px;
    right: 0;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 30px;
    border-radius: 0.5rem;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  #user-dropdown.show {
    opacity: 1;
  }

  #user-dropdown #logout {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  #user-dropdown hr {
    width: 100%;
    border: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 1px;
  }

  #user-dropdown div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  #no-underline-dropdown {
    text-decoration: none;
    color: white;
  }

</style>