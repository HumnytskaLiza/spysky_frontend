<template>
  <div id="model-container" ref="model-container"></div>
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

    const scene = new THREE.Scene();
    const container = ref(null);
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const backgroundTexture = new THREE.TextureLoader().load('src/assets/background-textures/bg.png');
    scene.background = backgroundTexture;

    const sphere = new THREE.Mesh(new THREE.SphereGeometry(7, 50, 50), material)
    
    
    onBeforeMount(() => {
      // Define container
      window.addEventListener('resize', handleWindowResize);
      handleWindowResize();
      console.log(container.value)
    })

    onMounted(() => {
      container.value = document.getElementById('model-container');
      // Add style parameters to container
      container.value.style.width = "100vw";
      container.value.style.height = "100vh";
      container.value.style.position = "absolute";
      container.value.style.overflow = "hidden";
      container.value.style.top = "0";
      container.value.style.left = "0";


      // Get width and height for a scene
      const w = container.value.offsetWidth;
      const h = container.value.offsetHeight;
      console.log(w, h)

      camera.aspect = w/h;

      camera.position.z = 20;
      scene.add(sphere);

      renderer.setSize(w, h);
      renderer.setPixelRatio(window.devicePixelRatio);

      container.value.appendChild(renderer.domElement);

      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        sphere.rotation.y += 0.002;
      }
      animate();

      
    });

    function handleWindowResize () {
        camera.updateProjectionMatrix();
    }

  //   onBeforeUnmount(() => {
  //   const disposeObject = (obj) => {
  //     if (obj.geometry) obj.geometry.dispose();
  //     if (obj.material) {
  //       if (obj.material instanceof THREE.MeshFaceMaterial) {
  //         obj.material.materials.forEach((m) => m.dispose());
  //       } else {
  //         obj.material.dispose();
  //       }
  //     }
  //   };
  //   scene.children.forEach((child) => {
  //     disposeObject(child);
  //     scene.remove(child);
  //   });
  //   renderer.dispose();
  //   container.value.removeChild(renderer.domElement);
  //   window.removeEventListener('resize', handleWindowResize);
  // });

    

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