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
<div id="model-container-home" ref="containerHome"></div>
</template>
  
<script setup>
// Import Three.js library
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";

// Import hooks
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, ref } from "vue";

// Import shaders
import gsap from 'gsap';
import vertexShader from "../../assets/shaders-folder/vertex.glsl";
import fragmentShader from "../../assets/shaders-folder/fragment.glsl";
import atmosphereVertexShader from "../../assets/shaders-folder/atmosphereVertex.glsl";
import atmosphereFragmentShader from "../../assets/shaders-folder/atmosphereFragment.glsl";

// Init the scene
const scene = new THREE.Scene();

// Add the model-container to containerHome
const containerHome = ref(null);

// Init the camera
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 12;

// Init the renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });

// Add background to the scene
const backgroundTexture = new THREE.TextureLoader().load('src/assets/background-textures/bg.png');
scene.background = backgroundTexture;

// --- Creating the Earth ---

// Init an Earth material
const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
          globeTexture: {
              value: new THREE.TextureLoader().load('src/assets/textures/daymap.jpg')
          }
      }
  });

const geometry =  new THREE.SphereGeometry(7, 50, 50);
  
// Init the Earth
const sphere = new THREE.Mesh(geometry, material)

// --- Creating the atmosphere

// Init the atmosphere material
const material_atmosphere = new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
    });

// Init the atmosphere
const atmosphere = new THREE.Mesh(geometry, material_atmosphere)
atmosphere.scale.set(1.05, 1.05, 1.05);

// Init a group for models
const group = new THREE.Group();
    group.add(sphere);  
    group.add(atmosphere);     
    group.position.x = 6;
    group.position.y = -2;

// Create mouse obj
const mouse = {
        x: 0,
        y: 0
};

// Handling window size
function handleWindowResize () {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    // Check if model-container exists in containerHome
    if (containerHome.value) {
        containerHome.value.style.width = `${newWidth}px`;
        containerHome.value.style.height = `${newHeight}px`;
        renderer.setSize(newWidth, newHeight);
        camera.aspect = newWidth / newHeight;
    }

    camera.updateProjectionMatrix();
}

// Call the hook before the component is mounted
onBeforeMount(() => {
  window.addEventListener('resize', handleWindowResize);

  // Get mouse coords
  addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / innerWidth) * 2 - 1
        mouse.y = -(event.clientY / innerHeight) * 2 - 1
    })

  handleWindowResize();
})

// Call the hook when the component is mounted
onMounted(() => {
    // Add container to the ref
    containerHome.value = document.getElementById('model-container-home');
    console.log(containerHome.value);

    // Add style parameters to container
    containerHome.value.style.width = "100vw";
    containerHome.value.style.height = "100vh";
    containerHome.value.style.position = "absolute";
    containerHome.value.style.overflow = "hidden";
    containerHome.value.style.top = "0";
    containerHome.value.style.left = "0";

    // Get width and height for a scene
    const w = containerHome.value.offsetWidth;
    const h = containerHome.value.offsetHeight;

    camera.aspect = w/h

    // Add objects to the scene
    scene.add(group);

    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio);

    containerHome.value.appendChild(renderer.domElement);

    // Animation
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        sphere.rotation.y += 0.002;
        group.rotation.y = mouse.x * 0.5;
        gsap.to(group.rotation, {
            x: -mouse.y * 0.5,
            y: mouse.x * 0.5,
            duration: 2
        })
    }
    animate();

    window.addEventListener('resize', handleWindowResize);
});

// Call the hook to clear the scene
onBeforeUnmount(() => {  
  // Remove all scene objects
  if (sphere) {
    if (sphere.material) {
      sphere.material.dispose();
    }
    if (sphere.geometry) {
      sphere.geometry.dispose();
    }
  }

  if (atmosphere) {
    if (atmosphere.material) {
      atmosphere.material.dispose();
    }
    if (atmosphere.geometry) {
      atmosphere.geometry.dispose();
    }
  }

  scene.remove(group);
  
  if (material) {
    material.dispose();
  }
  if (material_atmosphere) {
    material_atmosphere.dispose();
  }
  if (geometry) {
    geometry.dispose();
  }
  if (scene.background) {
    scene.background.dispose();
  }
  if (camera) {
    scene.remove(camera);
  }

  renderer.dispose();
  scene.dispose();
  
  containerHome.value.removeChild(renderer.domElement);
  window.removeEventListener('resize', handleWindowResize);
});

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