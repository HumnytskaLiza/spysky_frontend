<script setup>
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from "https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/loaders/OBJLoader.js";
// import { RenderPass } from 

// Define container
const container = document.getElementById('app');
const w = container.clientWidth;
const h = container.clientHeight;

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
</script>