import { defineStore } from 'pinia'
import { ref } from 'vue'

export const loginManager = defineStore('login', () => {
  const userData = ref({
    mail: 'seproject@testing.xd',
    password: '123456789'
  })

  const userMail = ref('')
  const userPassword = ref('')

  function verifyUser() {
    if (userData.value.mail === userMail.value && userData.value.password === userPassword.value) {
      return true
    } else {
      return false
    }
  }

  return { userMail, userPassword, verifyUser }
})
