import { defineStore } from 'pinia'
import { ref } from 'vue'

import { loginManager } from '../helpers/login'

export const useProfileStore = defineStore('profile', () => {
  const userProfile = ref({
    name: String,
    username: String,
    id: String,
    profileUri: String
  })

  function setProfileImg() {
    const img = userProfile.value.profileUri
    return img
  }

  function setProfile() {
    const user = loginManager().verifyUser()
    if (user) {
      userProfile.value = user
    }
  }

  function setGuest() {
    userProfile.value = {
      name: 'Guest',
      username: 'Not Logged In',
      id: 'guest1234',
      profileUri: ''
    }
  }

  return { userProfile, setProfileImg, setProfile, setGuest }
})
