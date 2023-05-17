import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

import IconHome from '../components/icons/IconHome.vue'
import IconActiveBids from '../components/icons/IconActiveBids.vue'
import IconFavorites from '../components/icons/IconFavorites.vue'
import IconAdd from '../components/icons/IconAdd.vue'
import IconAccount from '../components/icons/IconAccount.vue'
import IconSettings from '../components/icons/IconSettings.vue'

export const useNavGraphStore = defineStore('navgraph', () => {
  const navGraph = shallowRef([
    [
      {
        name: 'Home',
        id: 'home',
        path: '/',
        icon: IconHome
      },
      {
        name: 'Active Bids',
        id: 'active-bids',
        path: '/active-bids',
        icon: IconActiveBids
      },
      {
        name: 'Favorites',
        id: 'favorites',
        path: '/favorites',
        icon: IconFavorites
      }
    ],
    [
      {
        name: 'Add Product',
        id: 'add',
        path: '/add-product',
        icon: IconAdd
      },
      {
        name: 'Account',
        id: 'account',
        path: '/account',
        icon: IconAccount
      },
      {
        name: 'Settings',
        id: 'settings',
        path: '/settings',
        icon: IconSettings
      }
    ]
  ])

  return { navGraph }
})
