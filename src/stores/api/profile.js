import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProfileStore = defineStore('profile', () => {
  const baseURL = 'https://auxhive.nagatharun.me'

  const userAccount = ref({
    email: String,
    name: String,
    username: String,
    phone: Number,
    id: String,
    profileUrl: String,
    request: Boolean,
    admin: false
  })

  userAccount.value = JSON.parse(localStorage.getItem('session_token'))
  const returnUrl = ref(null)

  const userMail = ref('')
  const userPassword = ref('')

  async function userAuth() {
    try {
      const data = await axios.post(`${baseURL}/auth/sign-in`, {
        email: userMail.value,
        password: userPassword.value
      })

      if (data.status === 200 && 'request' in data.data) {
        userAccount.value = data.data
      } else return (userAccount.value.request = false)

      return userAccount.value
    } catch (error) {
      console.log(error)
    }
  }

  function resetFields() {
    userMail.value = ''
    userPassword.value = ''
  }

  return { userMail, userPassword, userAccount, userAuth, resetFields, returnUrl }
})
