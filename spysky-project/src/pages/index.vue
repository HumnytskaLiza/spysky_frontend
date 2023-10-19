<template>
  <canvas id="canvas"></canvas>
</template>

<script setup>
  import * as THREE from 'three';
  import { ref, onMounted } from 'vue';

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  scene.add(camera);
  let renderer;

  onMounted(() => {
    renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#canvas'),
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  });

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

camera.position.z = 5;

</script>

<style>
    body {
        margin: 0;
        padding: 0;
    }
    #canvas {
        height: 100%;
        width: 100%;
    }
</style>

