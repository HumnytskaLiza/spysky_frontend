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
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from "https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/loaders/OBJLoader.js";
// import { RenderPass } from 

window.addEventListener('load', () => {
  // Define container
  const container = document.getElementById('model-container');

  // Add style parameters to container
  container.style.width = "100vw";
  container.style.height = "100vh";
  container.style.overflow = "hidden";
  container.style.position = "absolute";
  container.style.top = "0";
  container.style.left = "0";
  container.style.zIndex = "-100";
  
  // Get width and height for a scene
  const w = container.offsetWidth;
  const h = container.offsetHeight;

  // Add scene
  const scene = new THREE.Scene();
  const backgroundTexture = new THREE.TextureLoader().load('src/assets/background-textures/8k_stars_milky_way.jpg');
  scene.background = backgroundTexture;

  // Add camera 
  const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 1000);
  camera.position.z = 5;

  // Add renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(w, h);
  container.appendChild(renderer.domElement);

  // // Add controls
  // const controls = new OrbitControls(camera, renderer.domElement);
  // controls.update();

  function init (geometry) { 
    const material = new THREE.MeshStandardMaterial({
      bumpMap: new THREE.TextureLoader().load('src/assets/textures/Bump_2K.png'),
      map: new THREE.TextureLoader().load('src/assets/textures/Diffuse_2K.png')
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = -3;
    scene.add(mesh);

    const sunlight = new THREE.DirectionalLight(0xffffff);
    sunlight.position.y = 2;
    scene.add(sunlight);

    // const spotLight = new THREE.SpotLight( 0x2E52E8 );
    // spotLight.position.set( 0, 100, -100 );

    // spotLight.castShadow = true;
    // spotLight.target = mesh;

    // spotLight.shadow.mapSize.width = 1024;
    // spotLight.shadow.mapSize.height = 1024;

    // spotLight.shadow.camera.near = 500;
    // spotLight.shadow.camera.far = 4000;
    // spotLight.shadow.camera.fov = 30;

    // scene.add( spotLight );

    // const filllight = new THREE.DirectionalLight(0x88ccff);
    // filllight.position.x = 1;
    // filllight.position.y = -2;
    // scene.add(filllight);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  }

  const loader = new OBJLoader();
  loader.load("src/assets/3d-models/Earth_2K.obj", (obj) => init(obj.children[0].geometry) );

  function handleWindowResize () {
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  window.addEventListener('resize', handleWindowResize, false);

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
    width: 55%;
    height: 70%;
    border-radius: 5px;
    background: rgba(89, 96, 133, 0.50);
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.17);
    backdrop-filter: blur(8px);
  }
</style>