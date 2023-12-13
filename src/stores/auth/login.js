import { defineStore } from 'pinia'
import { ref } from 'vue'

import { useProfileStore } from '../api/profile'
import { authHelper } from './auth'
import router from '../../router'

export const loginManager = defineStore('login', () => {
  const loginMessage = ref('Continue')
  const btnWarn = ref(false)
  const isLoaded = ref(false)

  async function validateUser() {
    isLoaded.value = true
    try {
      const user = await useProfileStore().userAuth()
      if (user) {
        isLoaded.value = false
        authHelper().setLogIn(user)
        router.push({ name: 'admin-home' })
      } else {
        isLoaded.value = false
        loginMessage.value = 'Invalid Credentials • Try again'
        btnWarn.value = true
      }
    } catch (error) {
      console.log('Authentication Failure')
    }
  }

  const guestUser = ref({
    email: '',
    name: 'Guest',
    username: 'Not Signed In',
    phone: '',
    id: 'guest',
    profileUrl: '',
    request: false
  })

  function setGuest() {
    authHelper().setGuest(guestUser.value)
    router.push({ name: 'admin-home' })
  }

  return { loginMessage, btnWarn, isLoaded, validateUser, setGuest }
})
