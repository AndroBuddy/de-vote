import { defineStore } from 'pinia'
import { ref } from 'vue'

import router from '../../router'
import { useProfileStore } from '../api/profile'
import { accountMenuHelper } from '../helpers/popup'
import { clearStore } from '../helpers/clear'

import { useProductStore } from '../api/products'
import { useSignupStore } from './signup'

export const authHelper = defineStore('auth', () => {
  const productStore = useProductStore()
  const isNew = ref(false)

  function setLogIn(token) {
    localStorage.setItem('session_token', JSON.stringify(token))
    productStore.getProducts()
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

  router.beforeEach(async (to) => {
    if (!isNew.value && to.name !== 'login') {
      if (!useProfileStore().userAccount) return { name: 'login' }
    }
  })

  return { isNew, setLogIn, setLogOut, setSignUp, setGuest }
})
