import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const collapsed = ref(0)

  function setCollapse() {
    collapsed.value = !collapsed.value
  }

  return { collapsed, setCollapse }
})
