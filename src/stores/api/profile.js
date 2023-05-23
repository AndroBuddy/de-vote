import { defineStore } from 'pinia'
import { ref } from 'vue'

import { loginManager } from '../helpers/login'
import { authHelper } from '../helpers/auth'
import router from '../../router'

export const useProfileStore = defineStore('profile', () => {
  const userAccount = ref({
    email: String,
    name: String,
    username: String,
    phone: Number,
    id: String,
    profileUrl: String,
    request: Boolean
  })

  const loginMessage = ref('Log in')
  const btnWarn = ref(false)
  const isLoaded = ref(false)

  async function validateUser() {
    if (loginManager().userMail === '' || loginManager().userPassword === '') {
      loginMessage.value = 'Please fill all the fields'
      btnWarn.value = false
    } else {
      isLoaded.value = true
      try {
        const user = await loginManager().userAuth()
        if (user) {
          isLoaded.value = false
          userAccount.value = user
          authHelper().setAuth()
          authHelper().setLogIn()
          router.push({ name: 'home' })
        } else {
          isLoaded.value = false
          loginMessage.value = 'Invalid Credentials • Try again'
          btnWarn.value = true
        }
      } catch (error) {
        console.log('Authentication Failure')
      }
    }
  }

  function setGuest() {
    userAccount.value = {
      email: '',
      name: 'Guest',
      username: 'Not Signed In',
      phone: '',
      id: 'guest1234',
      profileUrl: '',
      request: false
    }
  }

  return { userAccount, loginMessage, btnWarn, isLoaded, validateUser, setGuest }
})
