import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'

import HomeView from '../views/HomeView.vue'
import { useProfileStore } from '../stores/api/profile'

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

router.beforeEach(async (to) => {
  const publicRoutes = ['/auth/login', '/auth/signup']
  const authRequired = !publicRoutes.includes(to.path)
  const auth = useProfileStore()

  if (authRequired && !auth.userAccount) {
    auth.returnUrl = to.fullPath
    return { name: 'login' }
  }
})

export default router
