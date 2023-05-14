import { defineStore } from 'pinia'

import IconHome from '../components/icons/IconHome.vue'
import IconActiveBids from '../components/icons/IconActiveBids.vue'
import IconFavorites from '../components/icons/IconFavorites.vue'
import IconAdd from '../components/icons/IconAdd.vue'
import IconAccount from '../components/icons/IconAccount.vue'
import IconSettings from '../components/icons/IconSettings.vue'
import { shallowRef } from 'vue'

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
        path: '/active-bids',
        icon: IconFavorites
      }
    ],
    [
      {
        name: 'Add Product',
        id: 'add',
        path: '/active-bids',
        icon: IconAdd
      },
      {
        name: 'Account',
        id: 'account',
        path: '/active-bids',
        icon: IconAccount
      },
      {
        name: 'Settings',
        id: 'settings',
        path: '/active-bids',
        icon: IconSettings
      }
    ]
  ])

  return { navGraph }
})
