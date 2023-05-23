import { defineStore } from 'pinia'
import { ref } from 'vue'

import router from '../../router'
import { loginManager } from './login'
import { accountMenuHelper } from './popup'

export const authHelper = defineStore('auth', () => {
  const isAuth = ref(false)
  const isLogged = ref(false)
  const isNew = ref(false)

  function setLogIn() {
    isLogged.value = true
  }

  function setLogOut() {
    isLogged.value = false
    isAuth.value = false

    accountMenuHelper().accountMenu = false

    loginManager().resetFields()
    router.push({ name: 'login' })
  }

  function setSignUp() {
    isLogged.value = false
    isAuth.value = false
    isNew.value = true

    router.push({ name: 'signup' })
  }

  function setGuest() {
    setLogIn()
    isAuth.value = false
  }

  function setAuth() {
    isAuth.value = !isAuth.value
  }

  // eslint-disable-next-line no-unused-vars
  router.beforeEach(async (to, from) => {
    if (!isNew.value && to.name !== 'login') {
      if (!isLogged.value) return { name: 'login' }
    }
  })

  return { isLogged, isAuth, isNew, setLogIn, setLogOut, setAuth, setSignUp, setGuest }
})
