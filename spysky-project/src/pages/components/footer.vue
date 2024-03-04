<template>
    <footer id="footer">
        <div id="footer-logo"><a href="#"><img src="../../assets/icons/logo_s.svg"></a></div>
        <ul>
          <router-link to="/about-us" id="no-underline-footer"><li>About Us</li></router-link>
          <router-link to="/our-mission" id="no-underline-footer"><li>Our Mission</li></router-link>
          <router-link to="/our-team" id="no-underline-footer"><li>SpySKy Team</li></router-link>
          <router-link to="/pricing" id="no-underline-footer"><li>Pricing</li></router-link>
          <router-link to="/3d-map" id="no-underline-footer"><li>Our Tools</li></router-link>
          <router-link to="/contacts" id="no-underline-footer"><li>Contacts</li></router-link>
          <router-link to="/login" id="no-underline-footer"><li>Log in</li></router-link>
          <router-link to="/signup" id="no-underline-footer"><li>Sign up</li></router-link>
        </ul>
        <hr />
        <p>© 2023 SpySky</p>
      </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>