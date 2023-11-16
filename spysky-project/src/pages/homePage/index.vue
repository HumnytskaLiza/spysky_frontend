<template>
<div>Home
    <router-link to="/login">
        <button id="b">Go login</button>
    </router-link>
    <router-link to="/signup">
        <button id="b">Go create your account you stinky</button>
    </router-link>
</div>
</template>

<script>
export default {
    name: 'Home'
};
</script>