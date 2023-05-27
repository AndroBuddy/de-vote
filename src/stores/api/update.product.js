import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

import { useProfileStore } from './profile'
import { useProductStore } from './products'
import { useMainStore } from '../main'

export const useAddProductStore = defineStore('addproduct', () => {
  const baseURL = 'https://auctionsite.onrender.com'
  const productStore = useProductStore()

  const productName = ref('')
  const productDescription = ref('')
  const productImg = ref('')
  const productPrice = ref('')
  const productDuration = ref('')

  const date = new Date()

  function getDuration() {
    const duration = Date.parse(productDuration.value) - date.setDate(date.getDate())
    return duration
  }

  const profile = useProfileStore()
  const loader = ref(false)
  const skeleton = ref(false)

  const userProducts = ref([
    {
      _id: String,
      name: String,
      description: String,
      img: String,
      price: String,
      postedBy: String,
      createdAt: String,
      updatedAt: String,
      __v: Number
    }
  ])

  userProducts.value = JSON.parse(localStorage.getItem('user_products'))

  async function addNewProduct() {
    loader.value = true
    try {
      await axios.post(`${baseURL}/auction/product/`, {
        name: productName.value,
        description: productDescription.value,
        img: productImg.value,
        price: productPrice.value,
        postedBy: profile.userAccount.id,
        endtime: productDuration.value
      })

      productName.value = ''
      productDescription.value = ''
      productImg.value = ''
      productPrice.value = ''
      productDuration.value = ''

      productStore.getProducts()
      loader.value = false
      useMainStore().toggleDialog()
    } catch (error) {
      console.log(error)
      loader.value = false
    }
  }

  async function getUserProducts() {
    skeleton.value = true
    try {
      const products = await axios.get(`${baseURL}/user/product/${profile.userAccount.id}`)

      if (products.status === 200) {
        userProducts.value = products.data
        localStorage.setItem('user_products', JSON.stringify(products.data))
      }

      skeleton.value = false
    } catch (error) {
      console.log(error)
      skeleton.value = false
    }
  }

  async function updateProduct() {
    try {
      const prod = await axios.put(`${baseURL}/buy`, {
        id: '64723532a7b5cee608aba209',
        userId: profile.userAccount.id
      })

      if (prod.status === 200) {
        console.log(prod.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return {
    productName,
    productDescription,
    productImg,
    productPrice,
    productDuration,
    userProducts,
    loader,
    skeleton,
    addNewProduct,
    getUserProducts,
    updateProduct,
    getDuration
  }
})
