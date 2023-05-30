import { defineStore } from 'pinia'
import { ref } from 'vue'

import axios from 'axios'

export const useBidderStore = defineStore('bidder', () => {
  const baseURL = 'https://auxhive.nagatharun.me'

  const biddersList = ref([
    {
      firstname: String,
      username: String,
      amount: String,
      id: String,
      productId: String
    }
  ])

  async function getBidders(pid) {
    try {
      const data = await axios.get(`${baseURL}/auction/bid/${pid}`)
      if (data.status === 200) {
        biddersList.value = data.data
      }
    } catch (error) {
      console.log(error)
    }
  }

  return { biddersList, getBidders }
})
