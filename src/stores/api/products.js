import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('products', () => {
  const productsList = ref([
    {
      name: 'Product 1',
      id: '1',
      uri: '/p/product1',
      img: 'https://github.com/AndroBuddy.png',
      price: '$10',
      favorite: false
    },
    {
      name: 'Product 2',
      id: '2',
      uri: '/p/product2',
      img: 'https://github.com/AndroBuddy.png',
      price: '$20',
      favorite: false
    },
    {
      name: 'Product 3',
      id: '3',
      uri: '/p/product3',
      img: 'https://github.com/AndroBuddy.png',
      price: '$13',
      favorite: false
    },
    {
      name: 'Product 4',
      id: '4',
      uri: '/p/product4',
      img: 'https://github.com/AndroBuddy.png',
      price: '$15',
      favorite: false
    },
    {
      name: 'Product 5',
      id: '5',
      uri: '/p/product5',
      img: 'https://github.com/AndroBuddy.png',
      price: '$15',
      favorite: false
    },
    {
      name: 'Product 6',
      id: '6',
      uri: '/p/product6',
      img: 'https://github.com/AndroBuddy.png',
      price: '$15',
      favorite: false
    }
  ])

  function setFavorite(prod) {
    const product = prod
    const index = productsList.value.indexOf(product)
    productsList.value[index].favorite = !productsList.value[index].favorite
  }

  return { productsList, setFavorite }
})
