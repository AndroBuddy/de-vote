import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const collapsed = ref(0)
  const accountMenu = ref(0)

  function setCollapse() {
    collapsed.value = !collapsed.value
  }

  function setAccountMenu() {
    accountMenu.value = !accountMenu.value
  }

  return { collapsed, setCollapse, accountMenu, setAccountMenu }
})
