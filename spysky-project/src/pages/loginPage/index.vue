<template>
  <div id="overlay-login">
    <div id="login-page-navbar">
      <router-link to="/">
        <div id="logo"><a href=""><img src="../../assets/icons/logo_s.svg" alt=""></a></div>
      </router-link>
      <ul>
        <router-link to="/login" id="bold-text-login">
          <li>Log in</li>
        </router-link>
        <router-link to="/signup" id="no-underline-login">
          <li>Sign up</li>
        </router-link>
        <li>About Us</li>
        <li>Our Team</li>
      </ul>
    </div>
    <div id="form-container-login">
      <div id="log-header">Log in</div>
      <form>
        <div>
          <input type="text" id="email" placeholder="Email" required>
        </div>
        <div>
          <div class="password-input">
            <input type="password" id="password" placeholder="Password" required>
            <img src="../../assets/icons/eye.svg">
          </div>
          <div id="link-container"><a href="#" id="forgot-password">Forgot password?</a></div>
        </div>
        <div class="buttons">
          <router-link to="/home" id="no-underline-login">
            <input type="submit" value="Log in" id="login-button">
          </router-link>
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
        <div id="signup-link-container">
          <p id="signup-link">Don't have an account? 
            <router-link to="/signup" id="no-underline-login">
              <span>Sign up</span>
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
#no-underline-login {
  text-decoration: none;
  color: white;
}

#overlay-login {
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#overlay-login div > input::placeholder {
  color: white;
}

#form-container-login {
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

#form-container-login form {
  display: flex;
  flex-direction: column;
  gap: 65px;
  width: 70%;
}

#form-container-login #login-button {
  display: flex;
  padding: 0 70px;
  height: 70px;
  font-size: 24px;
  font-weight: 500;
}

#form-container-login #login-button {
  border-radius: 8px;
  background: rgba(255, 121, 0, 0.82);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.17);
  color: white;
  transition: 0.5s;
  font-family: 'Exo 2', sans-serif;
  cursor: pointer;
  border: 0;
}

#form-container-login .buttons {
  display: flex;
  flex-direction: row;
  gap: 70px;
  justify-content: center;
}

#form-container-login #socials {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

#form-container-login #socials button {
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

#form-container-login #login-button:hover {
  background-color: #C73814;
  box-shadow: 0px 0px 10px 1px rgba(138, 164, 218, 0.562);
}

#form-container-login #socials button:hover {
  background-color: #172183;
  box-shadow: 0px 0px 10px 1px rgba(138, 164, 218, 0.562);
}

#form-container-login #socials img {
  height: 30px;
}

#form-container-login #log-header {
  font-size: 36px;
  font-weight: 500;
}

#form-container-login form .password-input input,
#form-container-login form #email {
  font-size: 18px;
  font-weight: 400;
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid white;
  width: 100%;
  padding-bottom: 5px;
  outline: none;
  line-height: 150%;
  color: white;
}

#form-container-login #link-container {
  width: 100%;
  text-align: end;
  margin-top: 20px;
}

#forgot-password {
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
}

#signup-link {
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
}

#signup-link-container {
  width: 100%;
  text-align: center;
}

#signup-link-container span {
  color: #FF7900;
  font-weight: 700;
}

#form-container-login .password-input {
  position: relative;
}

#form-container-login .password-input img{
  position: absolute;
  right: 0;
  bottom: 6px;
  filter: invert(100%);
  width: 25px;
}

#form-container-login #forgot-password {
  color: white;
  font-size: 24px;
}

#login-page-navbar {
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
  color: white;
  font-family: 'Exo 2', sans-serif;
}

#login-page-navbar #logo img {
  height: 25px;
}

#login-page-navbar ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 3rem;
}

#bold-text-login {
  font-weight: 700;
  text-decoration: none;
  color: rgba(255, 121, 0, 1);
}
</style>