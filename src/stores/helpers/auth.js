import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const authHelper = defineStore('auth', () => {
  const isLogged = ref(false)

  function setLogIn() {
    isLogged.value = true
  }

  function setLogOut() {
    isLogged.value = false
  }

  const router = useRouter()
  router.beforeEach(async (to, from) => {
    if (!isLogged.value && to.name !== 'login') {
      return { name: 'login' }
    }
  })

  const isAuth = ref(false) // testing
  function setAuth() {
    // Auth logic here
    isAuth.value = !isAuth.value
  }

  return { isLogged, isAuth, setLogIn, setLogOut, setAuth }
})
