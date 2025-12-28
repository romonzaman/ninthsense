import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Construction from './views/BuildingConstruction.vue'
import Solar from './views/SolarSetup.vue'
import Consultancy from './views/Consultancy.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/construction',
    name: 'Construction',
    component: Construction
  },
  {
    path: '/solar',
    name: 'Solar',
    component: Solar
  },
  {
    path: '/consultancy',
    name: 'Consultancy',
    component: Consultancy
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router