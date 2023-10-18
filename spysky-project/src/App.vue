<script>
  import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';

  const scene = new Scene();
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

  scene.add(camera);

  onMounted(() => {
    const renderer = new WebGLRenderer({
    canvas: document.querySelector('#canvas') as HTMLCanvasElement,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
  })

</script>

<template>
  <canvas id="canvas"></canvas>
</template>


