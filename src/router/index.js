/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index.vue'
import PerroView from '../views/PerroView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
     {
      path: '/perros',
      name: 'perros',
      component: PerroView,
    },
      {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
  ],
})

export default router
