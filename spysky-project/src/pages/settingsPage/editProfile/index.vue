<template>
    <div id="settings-container">
      <Navbar />
  
      <!-- ============================= CONTENT ============================= -->
  
      <div id="main-container">
        <SettingsNavbar />
        <div id="profile-container">
          <div class="settings-header">Edit profile</div>
          <div id="profile-photo-change">
            <div>
              <img src="../../../assets/icons/test_profile_photo.png" alt="">
            </div>
            <div>
              <button class="fill">Change the photo</button>
              <button class="stroke">Delete the photo</button>
            </div>
          </div>
          <div class="forms-container">
            <div class="form-container">
              <div class="settings-header-mid">Personal information</div>
                  <form>
                    <input type="text" placeholder="First name">
                    <input type="text" placeholder="Last name">
                    <input type="text" placeholder="Email address">
                    <select id="country">
                      <option value="country-1">Ukraine</option>
                    </select>
                  </form>
                  <button class="fill">Save the information</button>
            </div>
            <div class="form-container">
              <div class="settings-header-mid">Password</div>
                <form>
                  <div>
                    <div class="password-input">
                      <input type="password" class="password" ref="input" placeholder="Old password" required>
                      <img src="../../../assets/icons/eye.svg" @click="changeVisibility('input')">
                    </div>
                    <div class="password-input">
                      <input type="password" class="password" ref="input" placeholder="New password" required>
                      <img src="../../../assets/icons/eye.svg" @click="changeVisibility('input')">
                    </div>
                  </div>
                  <p>
                    The password should be a minimum of 8 characters 
                    long, containing at least one uppercase letter and 
                    one number in it.
                  </p>
                  <button class="fill">Change your password</button>
                </form>
            </div>
          </div>
        </div>
      </div>
  
      <Footer />
    </div>
  </template>
      
  <script>
    
  import Navbar from "../../components/navbar.vue";
  import SettingsNavbar from "../../components/settingsNavbar.vue";
  import Footer from "../../components/footer.vue";
  
  export default {
    name: "editProfile",
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
  
  #main-container {
    width: 100%;
    margin: 70px 0;
    box-sizing: border-box;
    font-size: 18px;
    line-height: 150%;
    display: flex;
    flex-direction: row;
  }

  #profile-container {
    width: 55%;
    height: 100%;
    box-sizing: border-box;
  }

  /*===================== GENERAL STYLES ===========================*/

  #profile-photo-change {
    display: flex;
    flex-direction: row;
    gap: 60px;
    align-items: center;
    margin: 40px 0 50px;
  }

  #profile-photo-change img {
    width: 150px;
  }

  #profile-photo-change > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .settings-header-mid {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 700;
  }

  .forms-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    border: 3px solid black;
    border-radius: 0.5rem;
  }

  .form-container {
    box-sizing: border-box;
    padding: 30px 30px 40px 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: black;
    box-shadow: 0px 0px 30px 0 rgba(32, 125, 210, .15);
  }

  .form-container form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container form input,
  .form-container form select {
    padding: 20px;
    border-radius: 0.5rem;
    border: 0;
    background-color: #000E1F;
    color: white;
    outline: none;
    box-sizing: border-box;
    appearance: none;
  }

  .form-container form input::placeholder,
  .form-container form select {
    color: #A1A1A1;
    font-weight: 700;
    font-size: 1rem;
  }

  </style>