<template>
    <div id="left-navbar">
        <div id="navbar-content">
            <div>
                <div><img src="../../assets/icons/test_profile_photo.png" id="user-photo"></div>
                <div>
                    <p>Name Surname</p>
                    <p>address@gmail.com</p>
                </div>
            </div>
            <hr>
            <div>
                <router-link to="/settings" id="no"><li>Edit profile</li></router-link>
                <router-link to="/settings/edit-subscription" id="no"><li>Available plans</li></router-link>
                <router-link to="/settings/edit-notifications" id="no"><li>Notifications</li></router-link>
            </div>
            <hr>
            <div>
                <img src="../../assets/icons/log-out.svg">
                <p>Log out</p>
            </div>

        </div>
    </div>
</template>

<script lang="ts">

export default {
    name: "settingsNavbar"
}

</script>

<style>

#left-navbar {
    width: 25%;
    height: 100%;
    margin-right: 35px;
    padding: 50px 60px 85px 40px;
    border-radius: 0.5rem;
    background-color: #000E1F;
    box-sizing: border-box;
  }

  #navbar-content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
  }

  #navbar-content div:nth-child(1),
  #navbar-content div:nth-child(3) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  #navbar-content div:nth-child(5) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  #navbar-content > div > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  #navbar-content hr {
    width: 100%;
    border: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 1px;
  }

  #navbar-content p {
    font-size: 1rem;
    color: white;
    font-weight: 600;
  }

  #navbar-content #user-photo {
    width: 40%;
  }

  #no {
    text-decoration: none;
    color: white;
    list-style: none;
  }
  
  #no.router-link-active {
    color: #FFC8C2;
    font-weight: 700;
    list-style-type: circle;
  }
</style>