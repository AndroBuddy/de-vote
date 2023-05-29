import { defineStore } from 'pinia'
import { ref } from 'vue'

export const collapseHelper = defineStore('collapse', () => {
  const collapsed = ref(false)
  function setCollapse() {
    collapsed.value = !collapsed.value
  }

  function collapseBar() {
    collapsed.value = true
  }

  return { collapsed, setCollapse, collapseBar }
})
