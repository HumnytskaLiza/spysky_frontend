<template>
  <div id="overlay-signup">
    <div id="navbar">
      <router-link to="/">
        <div id="logo"><img src="../../assets/icons/logo_s.svg" alt=""></div>
      </router-link>
      <ul>
        <div class="nav-links">
          <li>About Us</li>
          <li>Our Mission</li>
          <li>SpySky Team</li>
          <li>Pricing</li>
          <li>Contacts</li>
        </div>
        <div class="nav-buttons">
          <router-link to="/login" id="no-underline">
            <button id="fill">Log in</button>
          </router-link>
          <router-link to="/signup" id="no-underline">
            <button id="stroke">Sign up</button>
          </router-link>
        </div>
      </ul>
    </div>
    <div id="form-container-signup">
      <div id="signup-header">Sign up</div>
      <form id="form-first" v-if="currentPage === 'page1'">
        <div class="name-inputs">
          <input type="text" id="first-name" placeholder="First name">
          <input type="text" id="last-name" placeholder="Last name">
        </div>
        <div>
          <select id="country">
            <option value="country-1">Ukraine</option>
            <option value="country-2">Ukraine</option>
          </select>
        </div>
        <div>
          <input type="tel" id="phone-number" placeholder="+38-000-000-0000" pattern="+38-[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
        </div>
        <div class="buttons">
          <button id="next-button" @click="changePage('page2')">Next</button>
            <div id="socials">
              <button id="google">
                <img src="../../assets/icons/google.svg" alt="google">
              </button>
              <button id="facebook">
                <img src="../../assets/icons/facebook.svg" alt="facebook">
              </button>
              <button id="apple">
                <img src="../../assets/icons/apple.svg" alt="apple">
              </button>
            </div>
        </div>
        <div id="login-link-container">
          <p id="login-link">Already have an account? 
            <router-link to="/login" id="no-underline">
              <span>Log in</span>
            </router-link>
          </p>
        </div>
      </form>
      <form id="form-second" v-if="currentPage === 'page2'">
        <div>
          <input type="text" id="email" placeholder="Email">
        </div>
        <div class="password-input">
          <input type="password" id="password" placeholder="Password" required>
          <img src="../../assets/icons/eye.svg">
        </div>
        <div class="password-input">
          <input type="password" id="password" placeholder="Confirm password" required>
        </div>
        <div class="buttons-second">
          <button id="back" @click="changePage('page1')">Back</button>
          <router-link to="/home" id="no-underline">
            <input type="submit" value="Sign up" id="signup-button">
          </router-link>
        </div>
        <div id="login-link-container">
          <p id="login-link">Already have an account? 
            <router-link to="/login" id="no-underline">
              <span>Log in</span>
            </router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
  <div id="model-container" ref="containerLog"></div>
</template>
  
<script setup>
// Import Three.js library
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";

// Import hooks
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from "vue";

// Import shaders
import vertexShader from "../../assets/shaders-folder/vertex.glsl";
import fragmentShader from "../../assets/shaders-folder/fragment.glsl";
import atmosphereVertexShader from "../../assets/shaders-folder/atmosphereVertex.glsl";
import atmosphereFragmentShader from "../../assets/shaders-folder/atmosphereFragment.glsl";


const currentPage = ref('page1');

function changePage(page) {
  currentPage.value = page;
}

// Init the scene
const scene = new THREE.Scene();

// Add the model-container to containerLog
const containerLog = ref(null);

// Init the camera
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

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
    group.position.y = -7;

// Handling window size
function handleWindowResize () {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    // Check if model-container exists in containerLog
    if (containerLog.value) {
      containerLog.value.style.width = `${newWidth}px`;
      containerLog.value.style.height = `${newHeight}px`;
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
    }

    camera.updateProjectionMatrix();
}

// Call the hook before the component is mounted
onBeforeMount(() => {
  window.addEventListener('resize', handleWindowResize);
  handleWindowResize();
})

// Call the hook when the component is mounted
onMounted(() => {
  // Add container to the ref
  containerLog.value = document.getElementById('model-container');

  // Add style parameters to container
  containerLog.value.style.width = "100vw";
  containerLog.value.style.height = "100vh";
  containerLog.value.style.position = "absolute";
  containerLog.value.style.overflow = "hidden";
  containerLog.value.style.top = "0";
  containerLog.value.style.left = "0";

  // Get width and height for a scene
  const w = containerLog.value.offsetWidth;
  const h = containerLog.value.offsetHeight;

  camera.aspect = w/h

  // Add objects to the scene
  scene.add(group);

  renderer.setSize(w, h);
  renderer.setPixelRatio(window.devicePixelRatio);

  containerLog.value.appendChild(renderer.domElement);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    sphere.rotation.y += 0.002;
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
  
  containerLog.value.removeChild(renderer.domElement);
  window.removeEventListener('resize', handleWindowResize);
});

</script>
  
<style>
#overlay-signup {
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#overlay-signup div > input::placeholder {
  color: white;
}

#form-container-signup {
  position: relative;
  z-index: 1000;
  width: 55%;
  box-sizing: border-box;
  padding: 60px 0;
  border-radius: 5px;
  background: rgba(89, 96, 133, 0.50);
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.17);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 65px;
  color: white;
  font-family: 'Exo 2', sans-serif;
}

#form-container-signup form {
  display: flex;
  flex-direction: column;
  gap: 65px;
  width: 70%;
}

#form-container-signup #next-button,
#form-container-signup #signup-button,
#form-container-signup #back {
  display: flex;
  padding: 0 70px;
  height: 70px;
  font-size: 24px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
}

#overlay-signup #back,
#form-container-signup #next-button,
#form-container-signup #signup-button {
  border-radius: 8px;
  background: rgba(255, 121, 0, 0.82);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.17);
  color: white;
  transition: 0.5s;
  font-family: 'Exo 2', sans-serif;
  cursor: pointer;
  border: 0;
}

#form-container-signup #next-button:hover,
#form-container-signup #signup-button:hover {
  background-color: #C73814;
  box-shadow: 0px 0px 10px 1px rgba(138, 164, 218, 0.562);
}

#overlay-signup #back {
  background: rgba(20, 53, 117, 0.82);
  display: flex;
  justify-content: center;
  align-items: center;
}

#overlay-signup #back:hover,
#form-container-signup #socials button:hover {
  background-color: #172183;
  box-shadow: 0px 0px 10px 1px rgba(138, 164, 218, 0.562);
}

#form-container-signup #signup-header {
  font-size: 36px;
  font-weight: 500;
}

#form-container-signup .name-inputs input, 
#form-container-signup #phone-number, 
#form-container-signup #country,
#form-container-signup .password-input input,
#form-container-signup #email {
  font-size: 18px;
  font-weight: 400;
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid white;
  line-height: 150%;
  width: 100%;
  outline: none;
  color: white;
}

#form-container-signup .password-input {
  position: relative;
}

#form-container-signup .password-input img{
  position: absolute;
  right: 0;
  bottom: 6px;
  filter: invert(100%);
  width: 25px;
}

#form-container-signup .name-inputs {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

#form-container-signup #country {
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid white;
  width: 100%;
  color: white;
}

#form-container-signup #country:not(:first-of-type) {
  color: white;
}

#form-container-signup #country option {
  background: rgba(0, 0, 0, 0.3);
}

#form-container-signup .buttons,
#form-container-signup .buttons-second {
  display: flex;
  flex-direction: row;
  gap: 70px;
  justify-content: center;
}

#form-container-signup #socials {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

#form-container-signup #socials button {
  padding: 0px 30px;
  border-radius: 8px;
  background: rgba(20, 53, 117, 0.82);
  box-shadow: 0px 4px 16px 1px rgba(0, 0, 0, 0.17);
  display: flex;
  align-items: center;
  height: 70px;
  cursor: pointer;
  transition: 0.5s;
  border: 0;
}

#form-container-signup #socials img {
  height: 30px;
}

#login-link {
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
}

#login-link-container {
  width: 100%;
  text-align: center;
}

#login-link-container span {
  color: #FF7900;
  font-weight: 700;
}

#bold-text-signup {
  text-decoration: none;
  color: rgba(255, 121, 0, 1);
  font-weight: 700;
}
</style>