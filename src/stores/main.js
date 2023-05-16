import { defineStore } from 'pinia'
import { ref, shallowRef } from 'vue'

import anime from 'animejs/lib/anime.es.js'

import IconHome from '../components/icons/IconHome.vue'
import IconActiveBids from '../components/icons/IconActiveBids.vue'
import IconFavorites from '../components/icons/IconFavorites.vue'
import IconAdd from '../components/icons/IconAdd.vue'
import IconAccount from '../components/icons/IconAccount.vue'
import IconSettings from '../components/icons/IconSettings.vue'

export const useMainStore = defineStore('main', () => {
  const isAuth = ref(true) // testing
  const userProfile = shallowRef({
    name: 'Tron Nemesis',
    username: 'tronemesis07',
    id: 1,
    profileUri: 'https://github.com/Auctioneer-SEP.png'
  })

  function setProfileImg() {
    const img = userProfile.value.profileUri
    return img
  }

  function setAuth() {
    // Auth logic here
    isAuth.value = !isAuth.value
  }

  const collapsed = ref(false)
  function setCollapse() {
    collapsed.value = !collapsed.value
  }

  const accountMenu = ref(false)
  function setAccountMenu() {
    accountMenu.value = !accountMenu.value
  }

  return {
    isAuth,
    userProfile,
    collapsed,
    accountMenu,
    setCollapse,
    setAccountMenu,
    setAuth,
    setProfileImg
  }
})

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

export const useProductStore = defineStore('products', () => {
  const productsList = [
    { name: 'Product 1', id: '1', uri: '/p/product1', img: '', price: '$10', quickBid: '$2' },
    { name: 'Product 2', id: '2', uri: '/p/product2', img: '', price: '$20', quickBid: '$5' },
    { name: 'Product 3', id: '3', uri: '/p/product3', img: '', price: '$13', quickBid: '$4' },
    { name: 'Product 4', id: '4', uri: '/p/product4', img: '', price: '$15', quickBid: '$1' },
    { name: 'Product 5', id: '5', uri: '/p/product5', img: '', price: '$15', quickBid: '$1' },
    { name: 'Product 6', id: '6', uri: '/p/product6', img: '', price: '$15', quickBid: '$1' }
  ]

  return { productsList }
})

export const useAnimeStore = defineStore('anime', () => {
  const store = useMainStore()

  function slideIn() {
    anime
      .timeline({
        targets: 'nav',
        width: ['20rem', '4.5rem'],
        duration: 1000,
        easing: 'easeInOutSine'
      })
      .add({
        targets: 'nav > section',
        padding: ['3.5rem 3.5rem 3.5rem 3.5rem', '3.5rem 1.5rem 3.5rem 1.5rem']
      })

    anime
      .timeline({
        targets: '#brand > h1',
        opacity: [1, 0]
      })
      .add({
        targets: '#brand',
        margin: [0, '0 0 0 -0.4rem']
      })

    anime({
      targets: '#logo',
      scale: [0, 1],
      delay: 600
    })

    store.setCollapse()
  }

  function slideOut() {
    anime
      .timeline({
        targets: 'nav',
        width: ['4.5rem', '20rem'],
        duration: 1000,
        easing: 'easeInOutSine'
      })
      .add({
        targets: 'nav > section',
        padding: ['3.5rem 1.5rem 3.5rem 1.5rem', '3.5rem 3.5rem 3.5rem 3.5rem']
      })

    anime({
      targets: '#logo',
      scale: [1, 0]
    })

    anime
      .timeline({
        targets: '#brand',
        margin: ['0 0 0 -0.4rem', 0]
      })
      .add({
        targets: '#brand > h1',
        opacity: [0, 1]
      })

    store.setCollapse()
  }

  return { slideIn, slideOut }
})
