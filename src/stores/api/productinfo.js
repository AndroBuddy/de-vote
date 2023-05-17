import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

export const useProductInfoStore = defineStore('productinfo', () => {
  const productInfoList = shallowRef([
    {
      name: 'Product 1',
      id: 'product1',
      description: 'Product description',
      img: 'https://github.com/AndroBuddy.png',
      price: '$10'
    },
    {
      name: 'Product 2',
      id: 'product2',
      description: 'Product description',
      img: 'https://github.com/AndroBuddy.png',
      price: '$20'
    },
    {
      name: 'Product 3',
      id: 'product3',
      description: 'Product description',
      img: 'https://github.com/AndroBuddy.png',
      price: '$13'
    },
    {
      name: 'Product 4',
      id: 'product4',
      description: 'Product description',
      img: 'https://github.com/AndroBuddy.png',
      price: '$15'
    },
    {
      name: 'Product 5',
      id: 'product5',
      description: 'Product description',
      img: 'https://github.com/AndroBuddy.png',
      price: '$15'
    },
    {
      name: 'Product 6',
      id: 'product6',
      description: 'Product description',
      img: 'https://github.com/AndroBuddy.png',
      price: '$15'
    }
  ])

  return { productInfoList }
})
