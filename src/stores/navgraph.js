import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

export const useNavGraphStore = defineStore('navgraph', () => {
  const navGraph = shallowRef([
    [
      {
        name: 'Home',
        id: 'home',
        path: '/',
        icon: 'Home'
      },
      {
        name: 'Active Bids',
        id: 'active-bids',
        path: '/active-bids',
        icon: 'Activity'
      },
      {
        name: 'Favorites',
        id: 'favorites',
        path: '/favorites',
        icon: 'Heart'
      }
    ],
    [
      {
        name: 'Add Product',
        id: 'add',
        path: '/add-product',
        icon: 'AddSquare'
      },
      {
        name: 'Account',
        id: 'account',
        path: '/account',
        icon: 'UserSquare'
      },
      {
        name: 'About',
        id: 'about',
        path: '/about',
        icon: 'Information'
      }
    ]
  ])

  return { navGraph }
})
