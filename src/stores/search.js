import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchStore = defineStore('search', () => {
  const searchActive = ref(false)

  function setSearchActive() {
    searchActive.value = !searchActive.value
  }

  return { searchActive, setSearchActive }
})
