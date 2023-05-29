import { defineStore } from 'pinia'
import { ref } from 'vue'

import router from '../../router'
import { useProfileStore } from '../api/profile'
import { accountMenuHelper } from '../helpers/popup'
import { clearStore } from '../helpers/clear'

import { useProductStore } from '../api/products'
import { useFavoriteStore } from '../helpers/favorite'
import { useBiddingStore } from '../api/biddings'
import { useSignupStore } from './signup'

export const authHelper = defineStore('auth', () => {
  const productStore = useProductStore()
  const favoriteStore = useFavoriteStore()
  const biddingStore = useBiddingStore()
  const isNew = ref(false)

  function setLogIn(token) {
    localStorage.setItem('session_token', JSON.stringify(token))
    productStore.getProducts()
    favoriteStore.getFavorites()
    biddingStore.getBiddings()
  }

  function setLogOut() {
    clearStore().clearOut()
    useProfileStore().userAccount = null
    accountMenuHelper().accountMenu = false

    useProfileStore().resetFields()
    if (isNew.value) useSignupStore().resetFields()
    router.push({ name: 'login' })
  }

  function setSignUp() {
    clearStore().clearOut()
    useProfileStore().userAccount = null
    isNew.value = true
    router.push({ name: 'signup' })
  }

  function setGuest(token) {
    localStorage.setItem('session_token', JSON.stringify(token))
    useProfileStore().userAccount = token
    productStore.getProducts()
  }

  return { isNew, setLogIn, setLogOut, setSignUp, setGuest }
})
