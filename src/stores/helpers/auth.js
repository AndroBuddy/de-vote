import { defineStore } from 'pinia'
import { ref } from 'vue'

export const authHelper = defineStore('auth', () => {
  const isAuth = ref(true) // testing
  function setAuth() {
    // Auth logic here
    isAuth.value = !isAuth.value
  }

  return { isAuth, setAuth }
})
