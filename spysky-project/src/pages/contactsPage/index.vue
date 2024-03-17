<template>
<div class="main-container" id="contacts-page">
    <Navbar />
</div>
</template>
    
<script>
    
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import planetModel from "../components/planetScript.vue";

export default {
    name: "contactsPage",
    components: {
        Navbar,
        Footer,
        planetModel
    }
}

</script>
    
<style>
#contacts-page {
    width: 100vw;
    height: 100vh;
    background-image: url("../../assets/background-textures/bg.png");
}
</style>