<template>
  <div id="model-container" ref="containerLog"></div>
</template>

<script setup>
// Import Three.js library
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";
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
camera.position.z = 20;

// Init the renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });

// Add background to the scene
// const backgroundTexture = new THREE.TextureLoader().load('src/assets/background-textures/bg.png');
// scene.background = backgroundTexture;

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
const sphere1 = new THREE.Mesh(geometry, material)

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

onBeforeMount(() => {
  console.log("onBeforeMount was called")
  

  window.addEventListener('resize', handleWindowResize);
  handleWindowResize();
})

onMounted(() => {
  console.log("onMounted was called")

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
  console.log(w, h)

  console.log(camera.aspect)

  camera.aspect = w/h

  scene.add(sphere1);

  renderer.setSize(w, h);
  renderer.setPixelRatio(window.devicePixelRatio);

  containerLog.value.appendChild(renderer.domElement);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    sphere1.rotation.y += 0.002;
  }
  animate();

  window.addEventListener('resize', handleWindowResize);
  console.log(sphere1);
});

    

onBeforeUnmount(() => {  
  if (sphere1) {
    if (sphere1.material) {
      sphere1.material.dispose();
    }

    if (sphere1.geometry) {
      sphere1.geometry.dispose();
    }

    scene.remove(sphere1);
  }

  sphere1 = null;
  
    if (material) {
      material.dispose();
    }
    if (geometry) {
      geometry.dispose();
    }

  renderer.dispose();
  camera.dispose();
  scene.dispose();
  
  containerLog.value.removeChild(renderer.domElement);
  window.removeEventListener('resize', handleWindowResize);
  console.log("onBeforeUnmount was called")
  console.log(sphere1);
});

    

    // Add scene
    
    // const backgroundTexture = new THREE.TextureLoader().load('src/assets/background-textures/bg.png');
    // scene.background = backgroundTexture;

    // Add camera 
    //const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000);

    // Add renderer
    // const renderer = new THREE.WebGLRenderer({
    //     antialias: true
    // });
    

    // Create Earth texture
    // const material = new THREE.ShaderMaterial({
    //     vertexShader,
    //     fragmentShader,
    //     uniforms: {
    //         globeTexture: {
    //             value: new THREE.TextureLoader().load('src/assets/textures/daymap.jpg')
    //         }
    //     }
    // });

    // Add sphere

    // // Create atmosphere material
    // const material_atmosphere = new THREE.ShaderMaterial({
    //     vertexShader: atmosphereVertexShader,
    //     fragmentShader: atmosphereFragmentShader,
    //     blending: THREE.AdditiveBlending,
    //     side: THREE.BackSide
    // });

    // // Add atmosphere
    // const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(7, 50, 50), material_atmosphere)
    // atmosphere.scale.set(1.05, 1.05, 1.05);
    
    // const group = new THREE.Group();
    // group.add(sphere);  
    // group.add(atmosphere); 
    // scene.add(group);
    
    // group.position.y = -7;

    
</script>

<style>
</style>