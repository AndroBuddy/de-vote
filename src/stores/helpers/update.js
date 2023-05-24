import { defineStore } from 'pinia'
import { ref } from 'vue'

export const profileUpdate = defineStore('profileUpdate', () => {
  const name = ref('')
  const username = ref('')
  const email = ref('')

  const updateFields = ref(false)

  function setUpdateFields() {
    updateFields.value = !updateFields.value
  }

  return { name, username, email, updateFields, setUpdateFields }
})
