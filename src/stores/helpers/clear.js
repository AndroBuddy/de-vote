import { defineStore } from 'pinia'

export const clearStore = defineStore('clear', () => {
  function clearOut() {
    localStorage.removeItem('session_token')
    localStorage.removeItem('products_list')
    localStorage.removeItem('user_products')
  }

  return { clearOut }
})
