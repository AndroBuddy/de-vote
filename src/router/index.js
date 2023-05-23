import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'

import HomeView from '../views/HomeView.vue'
import ActiveBidsView from '../views/ActiveBidsView.vue'
import FavoritesView from '../views/FavoritesView.vue'

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
      component: ActiveBidsView
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView
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
      components: {
        FullPage: () => import('../views/NotFound.vue')
      }
    },
    {
      path: '/auth',
      name: 'auth',
      components: {
        FullPage: AuthView
      },
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/auth/LoginView.vue')
        },
        {
          path: 'signup',
          name: 'signup',
          component: () => import('../views/auth/SignupView.vue')
        }
      ]
    }
  ]
})

export default router
