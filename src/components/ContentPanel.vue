<script setup>
import { useAnimeStore, useMainStore, useProductStore } from '../stores/main'
import IconFavorite from './icons/IconFavorite.vue';

defineProps({
  title: String,
  items: Array
})

const store = useMainStore()

function slideIn() {
  if (window.innerWidth >= 1024) {
    const animeStore = useAnimeStore()
    if (!store.collapsed)
      animeStore.slideIn()
  }
}

function setFav(product) {
  const prodStore = useProductStore()
  prodStore.setFavorite(product)
}
</script>

<template>
  <div class="flex flex-col gap-6 transition-transform">
    <h2>{{ title }}</h2>
    <div class="flex whitespace-nowrap flex-nowrap overflow-auto gap-8 relative -ml-20">
      <section class="sticky top-0 left-0 flex items-center h-full p-6 bg-gradient-to-r from-[#f7f7f7f7] z-10"
        :class="[store.collapsed ? '' : 'lg:translate-x-6']"></section>
      <div v-for="item in  items " :key="item.id" class="flex flex-col gap-4 bg-white p-4 md:p-6 rounded-2xl w-80 shrink-0">
        <div class="h-60 bg-black/5 rounded-xl"></div>
        <!-- Replace with img -->
        <h3 class="text-lg">{{ item.name }}</h3>
        <div class="flex justify-between items-center">
          <router-link :to="item.uri" @click="slideIn"
            class="bg-blue-500/20 text-blue-500 py-3 px-6 rounded-xl text-sm text-center hover:scale-95 transition-transform w-min">
            <span class="font-semibold">{{ item.price }}</span> • Bid Now
          </router-link>
          <IconFavorite class="stroke-red-500/40 w-6 h-6 cursor-pointer hover:fill-red-500 transition-colors"
            :class="[item.favorite ? 'fill-red-500' : '']" @click="setFav(item)" />
        </div>
      </div>
      <section class="sticky top-0 right-0 flex items-center h-full p-6 bg-gradient-to-l from-[#f7f7f7f7]"></section>
    </div>
  </div>
</template>
