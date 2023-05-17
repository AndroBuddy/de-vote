import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProfileStore = defineStore('profile', () => {
  const userProfile = ref({
    name: 'Tron Nemesis',
    username: 'tronemesis07',
    id: 1,
    profileUri: 'https://github.com/Auctioneer-SEP.png'
  })

  function setProfileImg() {
    const img = userProfile.value.profileUri
    return img
  }

  return { userProfile, setProfileImg }
})
