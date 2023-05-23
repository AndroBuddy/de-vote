import { defineStore } from 'pinia'
import { ref } from 'vue'

export const loginManager = defineStore('login', () => {
  // Server data
  const credentialsList = ref([
    {
      email: 'seproject@testing.xd',
      password: '123456789',
      id: 'qwertyuiop',
      name: 'Tron Nemesis',
      username: 'tronemesis07',
      profileUri: ''
    },
    {
      email: 'qwerty',
      password: 'qwerty',
      id: '123467890',
      name: 'Auction Master',
      username: 'auctionmaster69',
      profileUri: 'https://github.com/Auctioneer-SEP.png'
    }
  ])

  // Verify user data (server)
  function validateCreds(email, password) {
    const userData = credentialsList.value.find((c) => {
      if (c.email === email && c.password === password) {
        return c
      }
    })

    return userData
  }

  // Verify user data (client)
  const userMail = ref('')
  const userPassword = ref('')

  function verifyUser() {
    const user = validateCreds(userMail.value, userPassword.value)
    if (user) {
      const wrappedData = {
        name: user.name,
        username: user.username,
        id: user.id,
        profileUri: user.profileUri
      }

      return wrappedData
    }
  }

  return { userMail, userPassword, verifyUser }
})
