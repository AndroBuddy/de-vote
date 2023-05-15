import { defineStore } from 'pinia'
import { ref, shallowRef } from 'vue'

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
