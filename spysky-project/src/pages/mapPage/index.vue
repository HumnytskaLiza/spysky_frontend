<template>
    <div id="map-container">
      <Navbar />
      <div id="develop">Coming soon...</div>
    </div>
    <div id="model-container" ref="containerMap"></div>
</template>
  
<script>

import Navbar from "../../pages/components/navbar.vue"

export default {
  name: "map",
  components: {
    Navbar
  }
}
  
// import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";

// import { onBeforeMount, onBeforeUnmount, onMounted, ref } from "vue";

// import gsap from 'gsap';
// import vertexShader from "../../assets/shaders-folder/vertex.glsl";
// import fragmentShader from "../../assets/shaders-folder/fragment.glsl";
// import atmosphereVertexShader from "../../assets/shaders-folder/atmosphereVertex.glsl";
// import atmosphereFragmentShader from "../../assets/shaders-folder/atmosphereFragment.glsl";


// const scene = new THREE.Scene();
// const containerMap = ref(null);
// const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;


// const renderer = new THREE.WebGLRenderer({ antialias: true });
// const backgroundTexture = new THREE.TextureLoader().load('src/assets/background-textures/bg.png');
// scene.background = backgroundTexture;


// // --- Creating the Earth and Atmosphere ---

// const material = new THREE.ShaderMaterial({
//     vertexShader,
//     fragmentShader,
//     uniforms: {
//         globeTexture: {
//             value: new THREE.TextureLoader().load('src/assets/textures/daymap.jpg')
//         }
//     }
// });

// const geometry =  new THREE.SphereGeometry(1, 50, 50);
// const sphere = new THREE.Mesh(geometry, material);

// const material_atmosphere = new THREE.ShaderMaterial({
//         vertexShader: atmosphereVertexShader,
//         fragmentShader: atmosphereFragmentShader,
//         blending: THREE.AdditiveBlending,
//         side: THREE.BackSide
//     });

// const atmosphere = new THREE.Mesh(geometry, material_atmosphere)
// atmosphere.scale.set(1, 1, 1);

// // Create a dot (asteroid sample)
// function addAsteroid(latRaw, lngRaw) {
//     const objAsteroid = new THREE.Mesh(
//     new THREE.SphereGeometry(0.1, 5, 5),
//     new THREE.MeshBasicMaterial({color: 0xffffff})
//     );

//     let lat = (90 - latRaw) * (Math.PI/180);
//     let lng = (lngRaw + 180) * (Math.PI/180);

//     let x = -(Math.sin(lat)*Math.cos(lng));
//     let y = (Math.sin(lat)*Math.sin(lng));
//     let z = (Math.cos(lat))

//     objAsteroid.position.set(x*1.3,y*1.3,z*1.3);
//     scene.add(objAsteroid);
//     return objAsteroid;
//   }

//   const group = new THREE.Group();
//       group.add(sphere);  
//       group.add(atmosphere);     
//       group.position.y = 0;
//       group.position.x = 0;
//       group.position.z = 0;


// const mouse = {
//         x: 0,
//         y: 0
// };

// function handleWindowResize () {
//     const newWidth = window.innerWidth;
//     const newHeight = window.innerHeight;

//     if (containerMap.value) {
//         containerMap.value.style.width = `${newWidth}px`;
//         containerMap.value.style.height = `${newHeight}px`;
//         renderer.setSize(newWidth, newHeight);
//         camera.aspect = newWidth / newHeight;
//     }

//     camera.updateProjectionMatrix();
// }

// onBeforeMount(() => {
// window.addEventListener('resize', handleWindowResize);

// addEventListener('mousemove', (event) => {
//         mouse.x = (event.clientX / innerWidth) * 2 - 1
//         mouse.y = -(event.clientY / innerHeight) * 2 - 1
//     })

// handleWindowResize();
// })

// onMounted(() => {
//     containerMap.value = document.getElementById('model-container');

//     containerMap.value.style.width = "100vw";
//     containerMap.value.style.height = "100vh";
//     containerMap.value.style.position = "absolute";
//     containerMap.value.style.overflow = "hidden";
//     containerMap.value.style.top = "0";
//     containerMap.value.style.left = "0";

//     const w = containerMap.value.offsetWidth;
//     const h = containerMap.value.offsetHeight;

//     camera.aspect = w/h

//     addAsteroid(-50.450001, 30.523333)
//     addAsteroid(118, 50)
//     addAsteroid(85, 75)
//     addAsteroid(125, 15)

//     scene.add(group);

//     renderer.setSize(w, h);
//     renderer.setPixelRatio(window.devicePixelRatio);

//     containerMap.value.appendChild(renderer.domElement);

//     function animate() {
//         requestAnimationFrame(animate);
//         renderer.render(scene, camera);
//     }
//     animate();

//     window.addEventListener('resize', handleWindowResize);
// });

// onBeforeUnmount(() => { 
    
//     sphere.material.dispose();
//     sphere.geometry.dispose();

//     atmosphere.material.dispose();
//     atmosphere.geometry.dispose();

//     scene.remove(group);

//     material.dispose();

//     material_atmosphere.dispose();

//     geometry.dispose();

//     scene.background.dispose();
//     scene.remove(camera);

//     renderer.dispose();
//     scene.dispose();

//     containerMap.value.removeChild(renderer.domElement);
//     window.removeEventListener('resize', handleWindowResize);
// });

</script>

<style>

#map-container {
  background-image: url("../../assets/background-textures/bg.png");
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#develop {
  color: #FFC8C2;
  font-size: 24px;
  font-family: 'Exo 2', sans-serif;
  font-weight: 500;
}

</style>