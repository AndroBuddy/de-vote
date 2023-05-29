<script setup>
import { useMainStore } from '../stores/main'
import { useProductStore } from '../stores/api/products'
import { useFavoriteStore } from '../stores/helpers/favorite'

import { Heart } from 'vue-iconsax'
import SkeletonLoader from '../components/parts/SkeletonLoader.vue'
import { defineProps } from 'vue'

defineProps({
  items: Array
})

const store = useMainStore()
const productStore = useProductStore()
const favoriteStore = useFavoriteStore()
</script>

<template>
  <SkeletonLoader v-if="productStore.loader" />
  <div class="flex flex-col gap-6 transition-transform" v-else>
    <div class="flex whitespace-nowrap flex-nowrap overflow-auto gap-8 relative -ml-20">
      <section
        class="sticky top-0 left-0 flex items-center h-full p-6 bg-gradient-to-r from-[#f7f7f7f7] z-10"
        :class="[store.collapseHelper().collapsed ? '' : 'lg:translate-x-6']"
      ></section>
      <div
        v-for="item in items"
        :key="item._id"
        class="flex flex-col gap-4 bg-white p-4 md:p-6 rounded-2xl w-80 shrink-0"
      >
        <div
          class="h-80 rounded-xl border-[#f7f7f7] border-2"
          :style="`background: url(${item.img}) center #f7f7f7; background-size: cover;`"
        />

        <h3 class="text-lg overflow-clip overflow-ellipsis">{{ item.name }}</h3>
        <div class="flex justify-between items-center">
          <router-link
            :to="`/p/${item._id}`"
            class="bg-blue-500/20 text-blue-500 py-3 px-6 rounded-xl text-sm text-center hover:-translate-y-1 transition-transform w-min"
          >
            <span class="font-semibold">₹ {{ item.price }}</span> • Bid Now
          </router-link>
          <button
            v-if="item.__v !== -1"
            @click="favoriteStore.checkFavorite(item)"
            class="p-2.5 rounded-2xl lg:hover:text-red-500 lg:hover:bg-red-100 lg:hover:-translate-y-2 transition-all"
            :class="[item.__v === 1 ? 'text-red-500 bg-red-100' : 'text-gray-300 bg-gray-50']"
          >
            <Heart size="20" type="bold" />
          </button>
        </div>
      </div>
      <section
        class="sticky top-0 right-0 flex items-center h-full p-6 bg-gradient-to-l from-[#f7f7f7f7]"
      ></section>
    </div>
  </div>
</template>
