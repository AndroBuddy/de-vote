import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const loginManager = defineStore('login', () => {
  const baseURL = 'https://auctionsite.onrender.com'

  const userAccount = ref({
    email: String,
    name: String,
    username: String,
    phone: Number,
    id: String,
    profileUrl: String,
    request: Boolean
  })

  const userMail = ref('')
  const userPassword = ref('')

  async function userAuth() {
    try {
      const data = await axios.post(`${baseURL}/auth/sign-in`, {
        email: userMail.value,
        password: userPassword.value
      })

      if (data.data.request) userAccount.value = data.data
      else return (userAccount.value.request = false)

      return userAccount.value
    } catch (error) {
      console.log("Something went wrong")
    }
  }

  function resetFields() {
    userMail.value = ''
    userPassword.value = ''
  }

  return { userMail, userPassword, userAuth, resetFields }
})
