<template>
    <footer id="footer">
        <div id="footer-logo"><a href="#"><img src="../../assets/icons/logo_s.svg"></a></div>
        <ul>
          <router-link to="/login" id="no-underline">
            <li>Log in</li>
          </router-link>
          <router-link to="/signup" id="no-underline">
            <li>Sign up</li>
          </router-link>
          <li>About Us</li>
          <li>Our Team</li>
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