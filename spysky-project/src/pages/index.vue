<template>
  <canvas id="canvas"></canvas>
</template>

<script setup>
//   import * as THREE from 'three';
//   import { ref, onMounted } from 'vue';
//   import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
//   //const camera = new THREE.PerspectiveCamera(35, sceneWidth / sceneHeight, 1, 20000);
//   camera.position.set(0,100,0);
//   camera.lookAt(scene.position);
//   scene.add(camera);
//   let renderer;

  

  

// let loader = new OBJLoader();

// loader.load( 'A_10.obj' , function ( object ) {

// 	scene.add( object );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );


// const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// directionalLight.position.set(0, 1, 0);
// scene.add(directionalLight);

// camera.position.z = 5;

// onMounted(() => {
//     renderer = new THREE.WebGLRenderer({
//       canvas: document.querySelector('#canvas'),
//       antialias: true,
//     });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.render(scene, camera);
//   });


import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from "https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/loaders/OBJLoader.js";

const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

function init (geometry) { 
  const material = new THREE.MeshStandardMaterial({
    // color: 0xffffff,
    // roughness: 0.5,
    // metalness: 0.5,
    bumpMap: new THREE.TextureLoader().load('textures/Bump_2K.png'),
    map: new THREE.TextureLoader().load('textures/Diffuse_2K.png')
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const sunlight = new THREE.DirectionalLight(0xffffff);
  sunlight.position.y = 2;
  scene.add(sunlight);

  const filllight = new THREE.DirectionalLight(0x88ccff);
  filllight.position.x = 1;
  filllight.position.y = -2;
  scene.add(filllight);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
}

const loader = new OBJLoader();
loader.load("Earth_2K.obj", (obj) => init(obj.children[0].geometry) );

function handleWindowResize () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', handleWindowResize, false);
</script>

<style>
    body {
        margin: 0;
        padding: 0;
    }
</style>

