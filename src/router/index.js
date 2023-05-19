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
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/FavoritesView.vue')
    },
    {
      path: '/add-product',
      name: 'add-product',
      component: () => import('../views/AddProductView.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/AccountView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue')
    },
    {
      path: '/p/:product',
      name: 'product',
      components: {
        default: () => import('../views/ProductView.vue'),
        RightPanel: () => import('../components/RightPanel.vue')
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    },
    {
      path: '/login',
      name: 'login',
      components: {
        Login: () => import('../views/LoginView.vue')
      }
    },
    {
      path: '/signup',
      name: 'signup',
      components: {
        Login: () => import('../views/SignupView.vue')
      }
    }
  ]
})

export default router
