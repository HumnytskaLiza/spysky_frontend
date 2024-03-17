<template>
    <div id="model-container" ref="containerMap"></div>
</template>

<script setup>
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { onBeforeMount, onBeforeUnmount, onMounted, ref } from "vue";
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

import vertexShader from "../../assets/shaders-folder/vertex.glsl";
import fragmentShader from "../../assets/shaders-folder/fragment.glsl";
import atmosphereVertexShader from "../../assets/shaders-folder/atmosphereVertex.glsl";
import atmosphereFragmentShader from "../../assets/shaders-folder/atmosphereFragment.glsl";


const scene = new THREE.Scene();
const containerMap = ref(null);
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;


const renderer = new THREE.WebGLRenderer({ antialias: true });


const backgroundTexture = new THREE.TextureLoader().load('src/assets/textures/bg_high.jpg');
const spaceMaterial = new THREE.MeshBasicMaterial({ map: backgroundTexture, side: THREE.DoubleSide });
const spaceGeometry = new THREE.SphereGeometry(800, 32, 32);

const space = new THREE.Mesh(spaceGeometry, spaceMaterial);
scene.add(space);


const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

const light = new THREE.AmbientLight( 0x404040 ); 
scene.add( light );

// --- Creating the Earth and Atmosphere ---

const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
        globeTexture: {
            value: new THREE.TextureLoader().load('src/assets/textures/earth.png')
        }
    }
});


const geometry =  new THREE.SphereGeometry(1, 50, 50);
const sphere = new THREE.Mesh(geometry, material);

const material_atmosphere = new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
    });

const atmosphere = new THREE.Mesh(geometry, material_atmosphere)
atmosphere.scale.set(1, 1, 1);

// Add asteroid
function addAsteroid(x, y, z) {
    
    let mtlLoader = new MTLLoader();
    mtlLoader.load('./src/assets/textures/Rock.mtl', function(materials) {
        materials.preload();

        let loader = new OBJLoader();
        // loader.setMaterials(materials);

        loader.load('./src/assets/objects/Rock.obj', function(object){
            object.position.set(x, y, z);
            object.scale.set(0.0002, 0.0002, 0.0002);
            scene.add(object);
        });
    })



    // let lat = (90 - latRaw) * (Math.PI/180);
    // let lng = (lngRaw + 180) * (Math.PI/180);

    // let x = -(Math.sin(lat)*Math.cos(lng));
    // let y = (Math.sin(lat)*Math.sin(lng));
    // let z = (Math.cos(lat))
  }

  const group = new THREE.Group();
      group.add(sphere);  
      group.add(atmosphere);     
      group.position.y = 0;
      group.position.x = 0;
      group.position.z = 0;


const mouse = {
        x: 0,
        y: 0
};

function handleWindowResize () {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    if (containerMap.value) {
        containerMap.value.style.width = `${newWidth}px`;
        containerMap.value.style.height = `${newHeight}px`;
        renderer.setSize(newWidth, newHeight);
        camera.aspect = newWidth / newHeight;
    }

    camera.updateProjectionMatrix();
}

onBeforeMount(() => {
window.addEventListener('resize', handleWindowResize);

addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / innerWidth) * 2 - 1
        mouse.y = -(event.clientY / innerHeight) * 2 - 1
    })

handleWindowResize();
})

onMounted(() => {
    containerMap.value = document.getElementById('model-container');

    containerMap.value.style.width = "100vw";
    containerMap.value.style.height = "100vh";
    containerMap.value.style.position = "absolute";
    containerMap.value.style.overflow = "hidden";
    containerMap.value.style.top = "0";
    containerMap.value.style.left = "0";

    const w = containerMap.value.offsetWidth;
    const h = containerMap.value.offsetHeight;

    camera.aspect = w/h

    addAsteroid(1, 0.5, -0.4)
    addAsteroid(-0.4, 1, 0.5)
    addAsteroid(-0.35, 1, 0.55)
    addAsteroid(-0.8, 0.8, 0.6)
    addAsteroid(-1, -0.5, -0.7)
    addAsteroid(-1.1, -0.53, -0.75)
    addAsteroid(0.5, 0.5, 0.75)

    scene.add(group);

    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio);

    containerMap.value.appendChild(renderer.domElement);

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        controls.update();
    }
    animate();

    window.addEventListener('resize', handleWindowResize);
});

onBeforeUnmount(() => { 
    
    sphere.material.dispose();
    sphere.geometry.dispose();

    atmosphere.material.dispose();
    atmosphere.geometry.dispose();

    scene.remove(group);

    material.dispose();

    material_atmosphere.dispose();

    geometry.dispose();

    scene.background.dispose();
    scene.remove(camera);

    renderer.dispose();
    scene.dispose();

    containerMap.value.removeChild(renderer.domElement);
    window.removeEventListener('resize', handleWindowResize);
});

</script>