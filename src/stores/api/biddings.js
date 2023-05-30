import { defineStore } from 'pinia'
import { ref } from 'vue'

import axios from 'axios'
import { useProfileStore } from '../api/profile'
import { useMainStore } from '../main'

export const useBiddingStore = defineStore('biddings', () => {
  const baseURL = 'https://auxhive.nagatharun.me'

  const biddingsList = ref([
    {
      productName: String,
      price: String,
      amount: String,
      status: Boolean,
      id: String,
      userId: String
    }
  ])

  biddingsList.value = JSON.parse(localStorage.getItem('biddings_list'))
  const profileStore = useProfileStore()

  async function getBiddings() {
    try {
      const data = await axios.get(`${baseURL}/user/bid/${profileStore.userAccount.id}`)
      if (data.status === 200) {
        biddingsList.value = data.data
        console.log(biddingsList.value)
        localStorage.setItem('biddings_list', JSON.stringify(biddingsList.value))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const bidAmount = ref('')
  const loader = ref(false)

  async function placeBid(pid) {
    loader.value = true
    try {
      await axios.post(`${baseURL}/auction/bid/`, {
        userId: profileStore.userAccount.id,
        amount: bidAmount.value,
        productId: pid
      })

      loader.value = false
      bidAmount.value = ''
      useMainStore().dialogOpen = false
    } catch (error) {
      console.log('Something went wrong')
    }
  }

  return { biddingsList, bidAmount, loader, getBiddings, placeBid }
})
