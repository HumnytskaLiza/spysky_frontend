// Import Application
import { createApp } from 'vue'
import App from './src/App.vue'

// Import vue-router
import { createRouter, createWebHistory } from 'vue-router';

// Import components
import login from './src/pages/loginPage/index.vue';
import signup from './src/pages/signupPage/index.vue';
import home from './src/pages/homePage/index.vue';

// Define routes
const routes = [
  {
    path: '/login',
    component: login, 
  },
  {
    path: '/signup',
    component: signup, 
  },
  {
    path: '/',
    component: home, 
  },
];

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create app
const app = createApp(App);

app.use(router);
app.mount('#app');