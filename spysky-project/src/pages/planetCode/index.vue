<script>
// Import Three.js library
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";

// Import hooks
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from "vue";

// Import shaders
import gsap from 'gsap';
import vertexShader from "../../assets/shaders-folder/vertex.glsl";
import fragmentShader from "../../assets/shaders-folder/fragment.glsl";
import atmosphereVertexShader from "../../assets/shaders-folder/atmosphereVertex.glsl";
import atmosphereFragmentShader from "../../assets/shaders-folder/atmosphereFragment.glsl";


  // Init the scene
const scene = new THREE.Scene();

// Add the model-container to containerWelcome
const containerWelcome = ref(null);

// Init the camera
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 12;

// Init the renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });

// Add background to the scene
const backgroundTexture = new THREE.TextureLoader().load('src/assets/background-textures/bg.png');
scene.background = backgroundTexture;

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

const geometry =  new THREE.SphereGeometry(6, 50, 50);
  
// Init the Earth
const sphere = new THREE.Mesh(geometry, material)

// --- Creating the atmosphere

// Init the atmosphere material
const material_atmosphere = new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
    });

// Init the atmosphere
const atmosphere = new THREE.Mesh(geometry, material_atmosphere)
atmosphere.scale.set(1.05, 1.05, 1.05);

// Init a group for models
const group = new THREE.Group();
    group.add(sphere);  
    group.add(atmosphere);     
    group.position.x = 6.5;
    group.position.y = 1.3;

// Create mouse obj
const mouse = {
        x: 0,
        y: 0
};


 

// Call the hook before the component is mounted
onBeforeMount(() => {
  window.addEventListener('resize', handleWindowResize);

  // Get mouse coords
  addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / innerWidth) * 2 - 1
        mouse.y = -(event.clientY / innerHeight) * 2 - 1
    })

  handleWindowResize();
})

// Call the hook when the component is mounted
onMounted(() => {
    // Add container to the ref
    containerWelcome.value = document.getElementById('model-container-welcome');
    console.log(containerWelcome.value);

    // Add style parameters to container
    containerWelcome.value.style.width = "100vw";
    containerWelcome.value.style.height = "100vh";
    containerWelcome.value.style.position = "absolute";
    containerWelcome.value.style.overflow = "hidden";
    containerWelcome.value.style.top = "0";
    containerWelcome.value.style.left = "0";

    // Get width and height for a scene
    const w = containerWelcome.value.offsetWidth;
    const h = containerWelcome.value.offsetHeight;

    camera.aspect = w/h

    // Add objects to the scene
    scene.add(group);

    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio);

    containerWelcome.value.appendChild(renderer.domElement);

    // Animation
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        sphere.rotation.y += 0.002;
        group.rotation.y = mouse.x * 0.5;
        gsap.to(group.rotation, {
            x: -mouse.y * 0.5,
            y: mouse.x * 0.5,
            duration: 2
        })
    }
    animate();

    window.addEventListener('resize', handleWindowResize);
});

// Call the hook to clear the scene
onBeforeUnmount(() => {  
  // Remove all scene objects
  if (sphere) {
    if (sphere.material) {
      sphere.material.dispose();
    }
    if (sphere.geometry) {
      sphere.geometry.dispose();
    }
  }

  if (atmosphere) {
    if (atmosphere.material) {
      atmosphere.material.dispose();
    }
    if (atmosphere.geometry) {
      atmosphere.geometry.dispose();
    }
  }

  scene.remove(group);
  
  if (material) {
    material.dispose();
  }
  if (material_atmosphere) {
    material_atmosphere.dispose();
  }
  if (geometry) {
    geometry.dispose();
  }
  if (scene.background) {
    scene.background.dispose();
  }
  if (camera) {
    scene.remove(camera);
  }

  renderer.dispose();
  scene.dispose();
  
  containerWelcome.value.removeChild(renderer.domElement);
  window.removeEventListener('resize', handleWindowResize);
});



export default {
  data() {
    return {
      scene: new THREE.Scene(),
      containerWelcome: ref(null),
      camera: new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000),
      renderer: new THREE.WebGLRenderer({ antialias: true }),
      // інші дані
    };
  },
  methods: {
    // Handling window size
    handleWindowResize () {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    // Check if model-container exists in containerWelcome
    if (containerWelcome.value) {
        containerWelcome.value.style.width = `${newWidth}px`;
        containerWelcome.value.style.height = `${newHeight}px`;
        renderer.setSize(newWidth, newHeight);
        camera.aspect = newWidth / newHeight;
    }

    camera.updateProjectionMatrix();
}
    // інші методи
  },
  mounted() {
    // ваш код, що викликається при монтажі компонента
  },
  beforeUnmount() {
    // ваш код, що викликається перед розмонтажем компонента
  },
};
</script>