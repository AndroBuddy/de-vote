import { defineStore } from 'pinia'
import { ref } from 'vue'

export const accountMenuHelper = defineStore('accountMenu', () => {
  const accountMenu = ref(false)
  function setAccountMenu() {
    accountMenu.value = !accountMenu.value
  }

  return { accountMenu, setAccountMenu }
})
