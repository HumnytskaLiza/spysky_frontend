<template>
<!-- <div>Home
    <router-link to="/login">
        <button id="b">Go login</button>
    </router-link>
    <router-link to="/signup">
        <button id="b">Go create your account you stinky</button>
    </router-link>
</div> -->
<div id="model-container-home"></div>
</template>
  
<script setup>
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';

window.addEventListener('load', () => {
// Define container
const container = document.getElementById('model-container-home');

// Add style parameters to container
container.style.width = "100vw";
container.style.height = "100vh";
container.style.position = "absolute";
container.style.overflow = "hidden";
container.style.top = "0";
container.style.left = "0";

// Get width and height for a scene
const w = container.offsetWidth;
const h = container.offsetHeight;

// Add scene
const scene = new THREE.Scene();
const backgroundTexture = new THREE.TextureLoader().load('src/assets/background-textures/8k_stars_milky_way.jpg');
scene.background = backgroundTexture;

// Add camera 
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 10;

// Add renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(w, h);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

// Add controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

const material = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('src/assets/textures/daymap.jpg')
});

const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), material)
scene.add(sphere);

const sunlight = new THREE.DirectionalLight(0xffffff);
sunlight.position.y = 2;
scene.add(sunlight);

const ambient = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambient);

function animate() {
requestAnimationFrame(animate);
renderer.render(scene, camera);
}
animate();

function handleWindowResize () {
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
}

window.addEventListener('resize', handleWindowResize, false);

});
</script>
  
<style>
</style>