<template>
  <div id="overlay">
    <router-link to="/">
        <button id="back-button" class="button">Return back</button>
    </router-link>
    <div id="form-container">
      <div id="log-header">Log in</div>
      <form>
        <div>
          <input type="text" id="email" name="email" placeholder="Email"><br>
        </div>
        <div>
          <input type="password" id="password" name="password" placeholder="Password"><br>
          <div id="link-container"><a href="#" id="forgot-password">Forgot password?</a></div>
        </div>
        <input type="submit" value="Log in" class="button" id="login-button">
        <div id="socials">
          <button class="button" id="google">
            <img src="../../assets/icons/google.svg" alt="google">
          </button>
          <button class="button" id="facebook">
            <img src="../../assets/icons/facebook.svg" alt="facebook">
          </button>
          <button class="button" id="apple">
            <img src="../../assets/icons/apple.svg" alt="apple">
          </button>
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
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, ref } from "vue";

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
#overlay {
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#overlay div > input {
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid #FFF;
  width: 100%;
  padding-bottom: 5px;
  outline: none;
}

#overlay div > input::placeholder {
  color: #FFF;
}

#back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1000;
}

.button {
  font-size: 15px;
  font-family: 'Exo 2', sans-serif;
  color: white;
  padding: 10px 20px;
  border: 0;
  border-radius: 8px;
  background: rgba(255, 121, 0, 0.82);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.17);
  cursor: pointer;
  transition: 0.5s;
  width: fit-content;
}

#login-button {
  margin-left: auto;
  margin-right: auto;
}

#form-container {
  position: relative;
  z-index: 1000;
  width: 55%;
  height: 70%;
  border-radius: 5px;
  background: rgba(89, 96, 133, 0.50);
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.17);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
}

#form-container form {
  display: flex;
  flex-direction: column;
  gap: 45px;
}

#socials {
  display: flex;
  flex-direction: row;
  gap: 50px;
}

#socials img {
  height: 40px;
}

#socials button,
#login-button {
  padding: 13px 60px;
}

#log-header {
  color: #FFF;
  font-family: 'Exo 2', sans-serif;
  font-size: 64px;
  font-style: normal;
  font-weight: 500;
}

#form-container form input,
#form-container form label {
  color: #FFF;
  font-family: 'Exo 2', sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
}

#link-container {
  width: 100%;
  text-align: end;
  margin-top: 20px;
}

#forgot-password {
  color: #FFF;
  font-family: 'Exo 2', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
}
</style>