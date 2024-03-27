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
                <form class="password-container">
                    <div class="password-input">
                      <input type="password" class="password" ref="input" placeholder="Old password" required>
                      <img src="../../../assets/icons/eye.svg" @click="changeVisibility('input')">
                    </div>
                    <div class="password-input">
                      <input type="password" class="password" ref="inputConfirm" placeholder="New password" required>
                      <img src="../../../assets/icons/eye.svg" @click="changeVisibility('inputConfirm')">
                    </div>
                </form>
                  <p>
                    The password should be a minimum of 8 characters 
                    long, containing at least one uppercase letter and 
                    one number in it.
                  </p>
                  <button class="fill">Change your password</button>
            </div>
            <div class="form-container">
              <div class="settings-header-mid">Payment details</div>
                  <div class="links">
                    <button>
                      <div>
                        <img src="../../../assets/icons/payment.svg" alt="">
                        Payment information
                      </div>
                      <div><img src="../../../assets/icons/arrow-link.svg" alt=""></div>
                    </button>
                    <button>
                      <div>
                        <img src="../../../assets/icons/history.svg" alt="">
                        Payment history
                      </div>
                      <div><img src="../../../assets/icons/arrow-link.svg" alt=""></div>
                      </button>
                    <button>
                      <div>
                        <img src="../../../assets/icons/details.svg" alt="">
                        Subscription details
                      </div>
                      <div><img src="../../../assets/icons/arrow-link.svg" alt=""></div>
                    </button>
                  </div>
            </div>
            <div class="form-container">
              <div class="settings-header-mid">Profile deletion & deactivation</div>
              <p>
                You can either temporarily deactivate your profile or permanently delete it. 
                After the deletion, it will not be possible to get your account back.
              </p>    
              <div class="links">
                    <button>
                        Deactivate profile for 30 days
                      <div><img src="../../../assets/icons/arrow-link.svg" alt=""></div>
                    </button>
                    <button id="delete-profile">
                        Delete profile
                      <div><img src="../../../assets/icons/arrow-link.svg" alt=""></div>
                      </button>
                  </div>
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
  import { ref, onMounted } from "vue";
  
  export default {
    name: "editProfile",
    components: {
      Navbar,
      SettingsNavbar,
      Footer
    },
    setup() {
    const input = ref(null);

    onMounted(() => {
      input.value = document.getElementById("password");
    });

    return { input };
  },

  methods: {
    changeVisibility(reference) {
      const inputRef = this.$refs[reference];

      if (inputRef.type === "password") {
        inputRef.type = "text";
      } else {
        inputRef.type = "password";
      }
    },
  },
  }
  
  </script>
      
  <style>

  /*===================== GENERAL STYLES ===========================*/

  #profile-container {
    width: 55%;
    height: 100%;
    box-sizing: border-box;
  }

  #profile-photo-change {
    display: flex;
    flex-direction: row;
    gap: 60px;
    align-items: center;
    margin: 0 0 50px;
  }

  #profile-photo-change img {
    width: 150px;
  }

  #profile-photo-change > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }


  .form-container .password-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .form-container .password-container .password-input {
    position: relative;
    width: 100%;
  }

  .form-container .password-container .password-input img {
    position: absolute;
    bottom: 20px;
    right: 20px;
    filter: invert(1);
    cursor: pointer;
  }

  .form-container form input,
  .form-container form select,
  .links button {
    padding: 20px;
    border-radius: 0.5rem;
    border: 0;
    background-color: #000E1F;
    color: white;
    outline: none;
    box-sizing: border-box;
    cursor: pointer;
    width: 100%;
    appearance: none;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .links button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    transition: 0.5s;
    font-weight: 700;
    font-size: 1rem;
  }

  .links button:hover {
    box-shadow: none;
    background-color: #011932;
  }

  .links button > div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .links #delete-profile {
    color: #FF8C71;
  }

  .form-container form input::placeholder,
  .form-container form select {
    color: #A1A1A1;
    font-weight: 700;
    font-size: 1rem;
  }

  </style>