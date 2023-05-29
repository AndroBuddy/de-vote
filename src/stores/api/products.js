import { defineStore } from 'pinia'
import { ref } from 'vue'

import axios from 'axios'

export const useProductStore = defineStore('products', () => {
  const baseURL = 'https://auxhive.nagatharun.me'
  const productsList = ref([
    {
      _id: String,
      name: String,
      description: String,
      img: String,
      price: String,
      postedBy: String,
      createdAt: String,
      updatedAt: String,
      endtime: String,
      status: Boolean,
      __v: Number
    }
  ])

  productsList.value = JSON.parse(localStorage.getItem('products_list'))

  const productInfo = ref({
    img: String,
    productname: String,
    username: String,
    email: String,
    id: String,
    price: String,
    description: String,
    request: Boolean
  })

  const loader = ref(false)

  async function getProducts() {
    loader.value = true
    try {
      const data = await axios.get(`${baseURL}/auction/product`)
      if (data.status === 200) {
        productsList.value = data.data
        localStorage.setItem('products_list', JSON.stringify(data.data))
      }
      loader.value = false
    } catch (error) {
      console.log('Something went wrong')
    }
  }

  async function setProduct(pid) {
    loader.value = true
    try {
      const data = await axios.get(`${baseURL}/auction/product/${pid}`)
      if (data.status === 200) productInfo.value = data.data
      loader.value = false
    } catch (error) {
      console.log(error)
    }
  }

  return { productsList, productInfo, loader, getProducts, setProduct }
})
