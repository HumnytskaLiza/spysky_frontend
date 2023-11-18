<template>
  <div id="overlay">
    <div id="form-container">
      <form>
        <div>
          <label for="fname">Email</label><br>
        <input type="text" id="fname" name="fname"><br>
        </div>
        <div>
          <label for="fname">Password</label><br>
          <input type="text" id="fname" name="fname"><br>
        </div>
      </form>
    </div>
  </div>
  <div id="model-container"></div>
</template>

<script setup>
// Import Three.js library
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";

import gsap from 'gsap';

// Import shaders
import vertexShader from "../../assets/shaders-folder/vertex.glsl";
import fragmentShader from "../../assets/shaders-folder/fragment.glsl";
import atmosphereVertexShader from "../../assets/shaders-folder/atmosphereVertex.glsl";
import atmosphereFragmentShader from "../../assets/shaders-folder/atmosphereFragment.glsl";

window.addEventListener('load', () => {
    // Define container
    const container = document.getElementById('model-container');

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
    const backgroundTexture = new THREE.TextureLoader().load('src/assets/background-textures/bg.png');
    scene.background = backgroundTexture;

    // Add camera 
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000);
    camera.position.z = 10;

    // Add renderer
    const renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Create Earth texture
    const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
            globeTexture: {
                value: new THREE.TextureLoader().load('src/assets/textures/daymap.jpg')
            }
        }
    });

    // Add sphere
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(7, 50, 50), material)

    // Create atmosphere material
    const material_atmosphere = new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
    });

    // Add atmosphere
    const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(7, 50, 50), material_atmosphere)
    atmosphere.scale.set(1.05, 1.05, 1.05);
    
    const group = new THREE.Group();
    group.add(sphere);  
    group.add(atmosphere); 
    scene.add(group);
    
    group.position.y = -7;

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        sphere.rotation.y += 0.002;
    }
    animate();

    function handleWindowResize () {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;

        container.style.width = `${newWidth}px`;
        container.style.height = `${newHeight}px`;
        renderer.setSize(newWidth, newHeight);

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
    }

    window.addEventListener('resize', handleWindowResize, false);
    handleWindowResize();
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

  #overlay input {
    background-color: transparent;
    border: 0;
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
  }
</style>