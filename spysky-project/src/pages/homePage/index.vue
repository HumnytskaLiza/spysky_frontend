<template>
<div id="home-overlay">
    <div id="home-nav">
        <div id="header">Welcome to SpySky</div>
        <p>Some description</p>
        <div class="buttons">
            <router-link to="/login">
                <button id="b">Login</button>
            </router-link>
            <router-link to="/signup">
                <button id="b">Sign up</button>
            </router-link>
        </div>
    </div>
</div>
<div id="model-container-home"></div>
</template>
  
<script setup>
// import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";
// import gsap from 'gsap';
// import vertexShader from "../../assets/shaders-folder/vertex.glsl";
// import fragmentShader from "../../assets/shaders-folder/fragment.glsl";
// import atmosphereVertexShader from "../../assets/shaders-folder/atmosphereVertex.glsl";
// import atmosphereFragmentShader from "../../assets/shaders-folder/atmosphereFragment.glsl";

// window.addEventListener('load', () => {
//     // Define container
//     const container = document.getElementById('model-container-home');

//     // Add style parameters to container
//     container.style.width = "100vw";
//     container.style.height = "100vh";
//     container.style.position = "absolute";
//     container.style.overflow = "hidden";
//     container.style.top = "0";
//     container.style.left = "0";

//     // Get width and height for a scene
//     const w = container.offsetWidth;
//     const h = container.offsetHeight;

//     // Add scene
//     const scene = new THREE.Scene();
//     const backgroundTexture = new THREE.TextureLoader().load('src/assets/background-textures/bg.png');
//     scene.background = backgroundTexture;

//     // Add camera 
//     const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000);
//     camera.position.z = 12;

//     // Add renderer
//     const renderer = new THREE.WebGLRenderer({
//         antialias: true
//     });
//     renderer.setSize(w, h);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     container.appendChild(renderer.domElement);

//     // Create an Earth texture
//     const material = new THREE.ShaderMaterial({
//         vertexShader,
//         fragmentShader,
//         uniforms: {
//             globeTexture: {
//                 value: new THREE.TextureLoader().load('src/assets/textures/daymap.jpg')
//             }
//         }
//     });

//     // Add a sphere
//     const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), material)

//     // Create atmosphere material
//     const material_atmosphere = new THREE.ShaderMaterial({
//         vertexShader: atmosphereVertexShader,
//         fragmentShader: atmosphereFragmentShader,
//         blending: THREE.AdditiveBlending,
//         side: THREE.BackSide
//     });

//     // Add the atmosphere
//     const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), material_atmosphere)
//     atmosphere.scale.set(1.05, 1.05, 1.05);
    
//     // Group the sphere and the atmosphere
//     const group = new THREE.Group();
//     group.add(sphere);  
//     group.add(atmosphere); 
//     scene.add(group);

//     group.position.x = 6;
//     group.position.y = -2;

//     // Create mouse obj
//     const mouse = {
//         x: 0,
//         y: 0
//     };

//     // Animation
//     function animate() {
//         requestAnimationFrame(animate);
//         renderer.render(scene, camera);
//         sphere.rotation.y += 0.002;
//         group.rotation.y = mouse.x * 0.5;
//         gsap.to(group.rotation, {
//             x: -mouse.y * 0.5,
//             y: mouse.x * 0.5,
//             duration: 2
//         })
//     }
//     animate();

//     // Get mouse coords
//     addEventListener('mousemove', (event) => {
//         mouse.x = (event.clientX / innerWidth) * 2 - 1
//         mouse.y = -(event.clientY / innerHeight) * 2 - 1
//     })

//     // Handle size of scene
//     function handleWindowResize () {
//         const newWidth = window.innerWidth;
//         const newHeight = window.innerHeight;

//         container.style.width = `${newWidth}px`;
//         container.style.height = `${newHeight}px`;
//         renderer.setSize(newWidth, newHeight);

//         camera.aspect = newWidth / newHeight;
//         camera.updateProjectionMatrix();
//     }

//     window.addEventListener('resize', handleWindowResize, false);
//     handleWindowResize();
// });
</script>
  
<style>
#home-overlay {
    position: relative;
    z-index: 100;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 6%;
    box-sizing: border-box;
    width: 40%;
}

#home-nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: white;
    font-family: 'Exo 2', sans-serif;
}

#home-nav #header {
    font-size: 55px;
    font-weight: 700;
    text-transform: uppercase;
}

.buttons {
    margin-top: 10px;
    display: flex;
    gap: 20px;
}

.buttons button {
    font-size: 20px;
    font-family: 'Exo 2', sans-serif;
    color: white;
    padding: 10px 20px;
    border: 0;
    border-radius: 8px;
    background: rgba(255, 121, 0, 0.82);
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.17);
    cursor: pointer;
    transition: 0.5s;
}

.buttons button:hover {
    background-color: #C73814;
    box-shadow: 0px 0px 10px 1px rgba(138, 164, 218, 0.562);
}
</style>