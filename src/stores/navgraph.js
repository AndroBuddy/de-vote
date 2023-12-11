import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

export const useNavGraphStore = defineStore('navgraph', () => {
  const navGraph = shallowRef([
    [
      {
        name: 'Home',
        id: 'admin-home',
        path: '/admin-home',
        icon: 'Home'
      },
      {
        name: 'Ballot',
        id: 'ballot',
        path: '/ballot',
        icon: 'Menu'
      },
      {
        name: 'Voters',
        id: 'voters',
        path: '/voters',
        icon: 'People'
      }
    ],
    [
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
