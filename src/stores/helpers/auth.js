import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const authHelper = defineStore('auth', () => {
  const isLogged = ref(false)
  const isNew = ref(false)

  function setLogIn() {
    isLogged.value = true
  }

  function setLogOut() {
    isLogged.value = false
  }

  function setSignUp() {
    setLogOut()
    isNew.value = !isNew.value
  }

  const isAuth = ref(false) // testing
  function setAuth() {
    // Auth logic here
    isAuth.value = !isAuth.value
  }

  const router = useRouter()
  router.beforeEach(async (to, from) => {
    if (!isNew.value && to.name !== 'login') {
      if (!isLogged.value)
        return { name: 'login' }
    }

    if (to.name === 'login' && isLogged.value) {
      isLogged.value = false
      return { name: 'login' }
    }
  })

  return { isLogged, isAuth, isNew, setLogIn, setLogOut, setAuth, setSignUp }
})
