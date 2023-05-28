<script setup>
import { useMainStore } from '../stores/main'
import { useProductStore } from '../stores/api/products'

import { Heart } from 'vue-iconsax'
import SkeletonLoader from '../components/parts/SkeletonLoader.vue'

defineProps({
  items: Array
})

const store = useMainStore()
const productStore = useProductStore()

function setFav(product) {
  const prodStore = useMainStore().useProductStore()
  prodStore.setFavorite(product)
}
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
        <div class="h-60 bg-black/5 rounded-xl"></div>
        <!-- Replace with img -->
        <h3 class="text-lg">{{ item.name }}</h3>
        <div class="flex justify-between items-center">
          <router-link
            :to="`/p/${item._id}`"
            class="bg-blue-500/20 text-blue-500 py-3 px-6 rounded-xl text-sm text-center hover:-translate-y-1 transition-transform w-min"
          >
            <span class="font-semibold">{{ item.price }}</span> • Bid Now
          </router-link>
          <button
            class="p-2.5 rounded-2xl hover:text-red-500 hover:bg-red-100 hover:-translate-y-2 transition-all"
            :class="[item.favorite ? 'text-red-500 bg-red-100' : 'text-gray-300 bg-gray-50']"
            @click="setFav(item)"
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
