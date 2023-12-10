<template>
  <div id="welcome-page-container">
    <div id="welcome-page-navbar">
        <div id="logo"><a href=""><img src="../../assets/icons/logo_s.svg" alt=""></a></div>
      <ul>
        <router-link to="/login" id="no-underline-welcome">
          <li>Log in</li>
        </router-link>
        <li><b>|</b></li>
        <router-link to="/signup" id="no-underline-welcome">
          <li>Sign up</li>
        </router-link>
        <li><b>|</b></li>
        <li>About Us</li>
        <li><b>|</b></li>
        <li>Our Team</li>
      </ul>
    </div>
    <div id="welcome-block">
      <div id="welcome-overlay">
        <div><img id="asteroid1" src="../../assets/background-textures/asteroid1.png"></div>
        <div><img id="asteroid2" src="../../assets/background-textures/asteroid2.png"></div>
        <div><img id="asteroid3" src="../../assets/background-textures/asteroid3.png"></div>
        <div id="welcome-nav">
            <div id="header">Welcome to SpySky</div>
            <p>We dream of a time when space is free from junk, and that's what 
              SpySky is all about. We watch satellites and space junk really closely,
               and we share all that info with space agencies, big companies, and 
              anyone who loves space.</p>
            <div class="welcome-buttons">
                <router-link to="/login">
                    <button>Login</button>
                </router-link>
                <router-link to="/signup">
                    <button>Sign up</button>
                </router-link>
            </div>
        </div>
      </div>
      <div id="model-container-welcome" ref="containerWelcome"></div>
    </div>
    <div id="about-us-block">
      <div id="left-side">
        <div id="black-cover"></div>
        <img id="junk1" src="../../assets/background-textures/junk1.png">
        <img id="junk2" src="../../assets/background-textures/asteroid1.png">
        <img id="astronaut" src="../../assets/background-textures/astronaut.png">
      </div>
      <div id="right-side">
        <div class="block-count">01.</div>
        <p class="header-mid">About Us</p>
        <p>
          Our main goal is to stop problems in Space. 
          SpySky isn't just about keeping satellites safe; 
          it's also about taking care of space. By watching 
          space junk, we learn more about how it moves and 
          what it might do. This helps everyone make smart 
          choices to keep space clean and safe.
        </p>
        <p>
          SpySky has a smart system that watches and remembers where satellites 
          and space junk go. We don't just know where they are now, but we also 
          keep a record of where they've been. Our big list of space info is useful for
          scientists, students, and space fans who want to know more about 
          what's up there.
        </p>
      </div>
    </div>
    <div id="our-team-block">
      <div class="block-count">02.</div>
      <p class="header-mid">Our Team</p>
    </div>
  </div>
</template>
  
<script setup>
// Import Three.js library
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";

// Import hooks
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from "vue";

// Import shaders
import gsap from 'gsap';
import vertexShader from "../../assets/shaders-folder/vertex.glsl";
import fragmentShader from "../../assets/shaders-folder/fragment.glsl";
import atmosphereVertexShader from "../../assets/shaders-folder/atmosphereVertex.glsl";
import atmosphereFragmentShader from "../../assets/shaders-folder/atmosphereFragment.glsl";

// Init the scene
const scene = new THREE.Scene();

// Add the model-container to containerWelcome
const containerWelcome = ref(null);

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

const geometry =  new THREE.SphereGeometry(6, 50, 50);
  
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
    group.position.x = 6.5;
    group.position.y = 1.3;

// Create mouse obj
const mouse = {
        x: 0,
        y: 0
};

// Handling window size
function handleWindowResize () {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    // Check if model-container exists in containerWelcome
    if (containerWelcome.value) {
        containerWelcome.value.style.width = `${newWidth}px`;
        containerWelcome.value.style.height = `${newHeight}px`;
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
    containerWelcome.value = document.getElementById('model-container-welcome');
    console.log(containerWelcome.value);

    // Add style parameters to container
    containerWelcome.value.style.width = "100vw";
    containerWelcome.value.style.height = "100vh";
    containerWelcome.value.style.position = "absolute";
    containerWelcome.value.style.overflow = "hidden";
    containerWelcome.value.style.top = "0";
    containerWelcome.value.style.left = "0";

    // Get width and height for a scene
    const w = containerWelcome.value.offsetWidth;
    const h = containerWelcome.value.offsetHeight;

    camera.aspect = w/h

    // Add objects to the scene
    scene.add(group);

    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio);

    containerWelcome.value.appendChild(renderer.domElement);

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
  
  containerWelcome.value.removeChild(renderer.domElement);
  window.removeEventListener('resize', handleWindowResize);
});

</script>
  
<style>
#no-underline-welcome {
  text-decoration: none;
  color: white;
}

#welcome-page-container {
  width: 100vw;
  position: relative;
  color: white;
  font-family: 'Exo 2', sans-serif;
  box-sizing: border-box;
  padding: 0 120px;
  background-color: black;
}

#welcome-page-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  z-index: 10000;
  background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.3) 100%);
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  padding: 0 120px;
}

#welcome-page-navbar #logo img {
  height: 25px;
}

#welcome-page-navbar ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 2.5rem;
}

#welcome-block {
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
}

#welcome-page-container #about-us-block {
  width: 100%;
  height: 80vh;
  padding: 70px 0;
  box-sizing: border-box;
  font-size: 18px;
  line-height: 150%;
  display: flex;
  flex-direction: row;
  gap: 10%;
}

#welcome-page-container #about-us-block div {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

#welcome-page-container #about-us-block #left-side {
  width: 55%;
  position: relative;
  display: flex;
}

#welcome-page-container #about-us-block #black-cover {
  width: 100%;
  height: 100%;
  background: linear-gradient(270deg, #D9D9D9 -1.11%, rgba(0, 0, 0, 0.93) -1.1%, rgba(0, 0, 0, 0.00) 100%);
  z-index: 500;
}


#welcome-page-container #about-us-block #junk1 {
  position: absolute;
  width: 350px;
  bottom: 0;
  right: 40%;
}

#welcome-page-container #about-us-block #junk2 {
  position: absolute;
  left: 5%;
  width: 250px;
  top: 0;
}

#welcome-page-container #about-us-block #astronaut {
  position: absolute;
  width: 550px;
  right: 0;
  transition: 1s;
  z-index: 1000;
}

#welcome-page-container #about-us-block #astronaut:hover {
  right: 2%;
  transform: rotate(5deg);
}

#welcome-page-container #about-us-block #right-side {
  width: 45%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#welcome-page-container .block-count {
  font-weight: 700;
  font-size: 48px;
  margin-bottom: 20px;
  color: rgba(255, 121, 0, 1);
}

#welcome-page-container .header-mid {
  font-size: 36px;
  line-height: 130%;
  font-weight: 700;
}

#welcome-page-container #our-team-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: 50px;
}

#welcome-overlay #asteroid1 {
  position: absolute;
  width: 300px;
  bottom: 5%;
  right: -10%;
  transform: rotate(50deg);
  transition: 2s;
}

#welcome-overlay #asteroid1:hover {
  transform: rotate(60deg);
  right: -15%;
}

#welcome-overlay #asteroid2 {
  position: absolute;
  width: 250px;
  bottom: 35%;
  right: -60%;
  transition: 2s;
}

#welcome-overlay #asteroid2:hover {
  transform: rotate(20deg);
  right: -65%;
}

#welcome-overlay #asteroid3 {
  position: absolute;
  width: 110px;
  top: 7%;
  right: -15%;
  transform: rotate(60deg);
  transition: 2s;
}

#welcome-overlay #asteroid3:hover {
  transform: rotate(50deg);
  top: 10%;
  right: -10%;
}

#welcome-overlay {
    position: relative;
    z-index: 100;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    width: 40%;
}

#welcome-nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

#welcome-nav p {
  width: 80%;
  line-height: 150%;
  font-size: 18px;
}

#welcome-nav #header {
    font-size: 48px;
    font-weight: 700;
    text-transform: uppercase;
}

#welcome-overlay .welcome-buttons {
    margin-top: 10px;
    display: flex;
    gap: 20px;
}

#welcome-overlay .welcome-buttons button {
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

#welcome-overlay .welcome-buttons button:hover {
    background-color: #C73814;
    box-shadow: 0px 0px 10px 1px rgba(138, 164, 218, 0.562);
}

</style>