import { defineStore } from 'pinia'
import { ref } from 'vue'

import router from '../../router'
import { useProfileStore } from '../api/profile'
import { accountMenuHelper } from '../helpers/popup'
import { clearStore } from '../helpers/clear'

import { useSignupStore } from './signup'

export const authHelper = defineStore('auth', () => {
  const isNew = ref(false)

  function setLogIn(token) {
    localStorage.setItem('session_token', JSON.stringify(token))
  }

  function fieldsReset() {
    clearStore().clearOut()
    useProfileStore().userAccount = null
    accountMenuHelper().accountMenu = false

    useProfileStore().resetFields()
    if (isNew.value) useSignupStore().resetFields()
  }

  function setLogOut() {
    fieldsReset()
    router.push({ name: 'login' })
  }

  function setVoterLogOut() {
    fieldsReset()
    router.push({ name: 'voter-login' })
  }

  function setSignUp() {
    clearStore().clearOut()
    useProfileStore().userAccount = null
    isNew.value = true
    router.push({ name: 'signup' })
  }

  function setGuest(token) {
    localStorage.setItem('session_token', JSON.stringify(token))
    useProfileStore().userAccount = token
  }

  return { isNew, setLogIn, setLogOut, setVoterLogOut, setSignUp, setGuest }
})
