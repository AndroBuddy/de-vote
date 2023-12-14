import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
// import VoterAuthView from '../views/VoterAuthView.vue'

import VoterView from '../views/VoterView.vue'
import LandingView from '../views/LandingView.vue'
import { useProfileStore } from '../stores/api/profile'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      components: {
        FullPage: LandingView
      }
    },
    {
      path: '/admin-home',
      name: 'admin-home',
      component: () => import('../views/AdminHomeView.vue')
    },
    {
      path: '/ballot',
      name: 'ballot',
      component: () => import('../views/BuildBallotView.vue')
    },
    {
      path: '/voters',
      name: 'voters',
      component: () => import('../views/VotersListView.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/AccountView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      components: {
        FullPage: () => import('../views/NotFound.vue')
      }
    },
    {
      path: '/voter',
      name: 'voter-auth',
      components: {
        FullPage: VoterView
      },
      children: [
        {
          path: 'login',
          name: 'voter-login',
          component: () => import('../views/voter/LoginView.vue')
        },
        {
          path: 'signup',
          name: 'voter-signup',
          component: () => import('../views/voter/SignupView.vue')
        },
        {
          path: 'submitted',
          name: 'vote-submitted',
          component: () => import('../views/VoteSubmittedView.vue')
        },
        {
          path: 'results',
          name: 'poll-results',
          component: () => import('../views/PollResultsView.vue')
        },
        {
          path: 'vote',
          name: 'vote',
          component: () => import('../views/VotingView.vue')
        }
      ]
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
  const publicRoutes = ['/auth/login', '/auth/signup', '/voter/login', '/voter/signup', '/']
  const authRequired = !publicRoutes.includes(to.path)
  const auth = useProfileStore()

  if (authRequired && !auth.userAccount) {
    auth.returnUrl = to.fullPath

    if (to.path.includes('/voter')) {
      return { name: 'voter-login' }
    } else {
      return { name: 'login' }
    }
  }
})

export default router
