import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

export const useBidderStore = defineStore('bidder', () => {
  const biddersList = shallowRef([
    {
      name: 'George Kolli',
      timestamp: '123456',
      bid: '$200',
      profileUri: 'https://github.com/AndroBuddy.png'
    },
    {
      name: 'Maneesh Matthew',
      timestamp: '123456',
      bid: '$200',
      profileUri: 'https://github.com/AndroBuddy.png'
    },
    {
      name: 'Leela Paka',
      timestamp: '123456',
      bid: '$200',
      profileUri: 'https://github.com/AndroBuddy.png'
    }
  ])

  function profileUrl(src) {
    const url = src
    return url
  }

  return { biddersList, profileUrl }
})
