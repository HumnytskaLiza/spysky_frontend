
import { createApp } from 'vue'
import App from './src/App.vue'

import { createRouter, createWebHistory } from 'vue-router';

import login from './src/pages/loginPage/index.vue';
import signup from './src/pages/signupPage/index.vue';
import welcome from './src/pages/welcomePage/index.vue';
import aboutUs from './src/pages/aboutUsPage/index.vue';
import ourMission from './src/pages/ourMissionPage/index.vue';
import ourTeam from './src/pages/ourTeamPage/index.vue';
import pricing from './src/pages/pricingPage/index.vue';
import contacts from './src/pages/contactsPage/index.vue';
import editProfile from './src/pages/settingsPage/editProfile/index.vue';
import editNotifications from './src/pages/settingsPage/editNotifications/index.vue';
import editSubscription from './src/pages/settingsPage/editSubscription/index.vue';
import map from './src/pages/mapPage/index.vue';
import test from './src/pages/test/index.vue'

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
    component: welcome, 
  },
  {
    path: '/about-us',
    component: aboutUs
  },
  {
    path: '/our-mission',
    component: ourMission
  },
  {
    path: '/our-team',
    component: ourTeam
  },
  {
    path: '/pricing',
    component: pricing
  },
  {
    path: '/contacts',
    component: contacts
  },
  {
    path: '/settings',
    component: editProfile,
  },
  {
    path: '/settings/edit-notifications',
    component: editNotifications
  },
  {
    path: '/settings/edit-subscription',
    component: editSubscription
  },
  {
    path: '/3d-map',
    component: map
  },
  {
    path: '/test',
    component: test
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount('#app');