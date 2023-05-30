import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
import { useProfileStore } from '../api/profile'

export const useUpdateProfile = defineStore('updateProfile', () => {
  const baseURL = 'https://auxhive.nagatharun.me'

  const profileName = ref('')
  const profileEmail = ref('')
  const profileUserName = ref('')
  const profilePassword = ref('')
  const profileImg = ref('')

  const loader = ref(false)
  const profileStore = useProfileStore()

  async function updateProfile() {
    loader.value = true
    try {
      const res = await axios.post(`${baseURL}/user/update/${profileStore.userAccount.id}`, {
        email: profileEmail.value !== '' ? profileEmail.value : profileStore.userAccount.email,
        password: profilePassword.value,
        name: profileName.value !== '' ? profileName.value : profileStore.userAccount.name,
        username:
          profileUserName.value !== '' ? profileUserName.value : profileStore.userAccount.username,
        phone: '',
        profileUrl: profileImg.value !== '' ? profileImg.value : profileStore.userAccount.profileUrl
      })

      if (res.status === 200) {
        profileStore.userAccount = res.data
        localStorage.setItem('session_token', JSON.stringify(profileStore.userAccount))
      }

      profileName.value = ''
      profileEmail.value = ''
      profileUserName.value = ''
      profilePassword.value = ''
      profileImg.value = ''

      loader.value = false
    } catch (error) {
      console.log(error)
      loader.value = false
    }
  }

  const updateFields = ref(false)

  function setUpdateFields() {
    updateFields.value = !updateFields.value
  }

  return {
    profileName,
    profileEmail,
    profileUserName,
    profilePassword,
    profileImg,
    loader,
    updateFields,
    updateProfile,
    setUpdateFields
  }
})
