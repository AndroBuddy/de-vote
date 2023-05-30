import { defineStore } from 'pinia'
import { ref } from 'vue'

import axios from 'axios'
import router from '../../router'

export const useSignupStore = defineStore('signup', () => {
  const baseURL = 'https://auxhive.nagatharun.me'

  const name = ref('')
  const username = ref('')
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')

  const signupData = ref({
    email: String,
    name: String,
    username: String,
    phone: String,
    id: String,
    profileUrl: String,
    request: Boolean
  })

  const nextStep = ref(false)
  const loader = ref(false)
  const btnVal = ref('Next')

  function setNextStep() {
    nextStep.value = true
    btnVal.value = 'Sign Up'
  }

  function setPrevStep() {
    nextStep.value = false
    btnVal.value = 'Next'
  }

  function resetFields() {
    name.value = ''
    username.value = ''
    email.value = ''
    password.value = ''
    confirmPassword.value = ''

    nextStep.value = false
  }

  async function signupUser() {
    loader.value = true
    try {
      const payload = await axios.post(`${baseURL}/auth/sign-up`, {
        email: email.value,
        password: password.value,
        confirm_password: confirmPassword.value,
        name: name.value,
        username: username.value,
        phone: '',
        profileUrl: ''
      })

      if (payload.status === 200 && 'request' in payload.data) {
        signupData.value = payload.data
      }

      loader.value = false
      window.alert('Account Created, please login with your credentials')
      router.push({ name: 'login' })
    } catch (error) {
      loader.value = false
      btnVal.value = 'User already exists'
      console.log(error)
    }
  }

  const tos = ref(false)
  function setTos() {
    tos.value = !tos.value
  }

  return {
    name,
    username,
    email,
    password,
    confirmPassword,
    signupData,
    nextStep,
    btnVal,
    loader,
    setNextStep,
    setPrevStep,
    signupUser,
    resetFields,
    setTos,
    tos
  }
})
