import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/active-bids',
      name: 'active-bids',
      component: () => import('../views/ActiveBidsView.vue')
    }
  ]
})

export default router
