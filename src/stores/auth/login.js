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
    email: 'guest@test.com',
    name: 'Power User',
    username: 'guestTester',
    phone: '0000000000',
    id: 'guest',
    profileUrl: '',
    request: false,
    admin: false
  })

  function setGuest() {
    guestUser.value.admin = true
    authHelper().setGuest(guestUser.value)
  }

  function setVoterGuest() {
    authHelper().setGuest(guestUser.value)
  }

  return { loginMessage, btnWarn, isLoaded, validateUser, setGuest, setVoterGuest }
})
