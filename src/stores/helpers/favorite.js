import { defineStore } from 'pinia'
import { ref } from 'vue'

import axios from 'axios'
import { useProfileStore } from '../api/profile'
import { useProductStore } from '../api/products'

export const useFavoriteStore = defineStore('favorites', () => {
  const baseURL = 'https://auxhive.nagatharun.me'
  const favoritesList = ref([
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

  favoritesList.value = JSON.parse(localStorage.getItem('favorites_list'))
  const profileStore = useProfileStore()

  async function getFavorites() {
    try {
      const data = await axios.get(`${baseURL}/fav/${profileStore.userAccount.id}`)
      if (data.status === 200) {
        useProductStore().productsList.forEach((product) => {
          if (data.data.length === 0) product.__v = 0
          if (data.data.find((fav) => fav.productId === product._id)) product.__v = 1
          else product.__v = 0
        })
        localStorage.setItem('products_list', JSON.stringify(useProductStore().productsList))

        favoritesList.value = useProductStore().productsList.filter((product) => {
          if (product.__v === 1) return product
        })
        localStorage.setItem('favorites_list', JSON.stringify(favoritesList.value))
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function setFavorite(pid) {
    try {
      const data = await axios.post(`${baseURL}/fav`, {
        userId: profileStore.userAccount.id,
        productId: pid
      })
      if (data.status === 200) {
        getFavorites()
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function removeFavorite(pid) {
    try {
      const data = await axios.delete(`${baseURL}/fav`, {
        data: {
          userId: profileStore.userAccount.id,
          productId: pid
        }
      })
      if (data.status === 200) {
        getFavorites()
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function checkFavorite(product) {
    try {
      const item = favoritesList.value.find((fav) => fav._id === product._id)
      if (!item) {
        await setFavorite(product._id)
      } else {
        await removeFavorite(product._id)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return { favoritesList, getFavorites, setFavorite, removeFavorite, checkFavorite }
})
