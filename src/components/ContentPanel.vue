<script setup>
import { useMainStore } from '../stores/main'

defineProps({
  title: String,
  items: Array
})

const store = useMainStore()
</script>

<template>
  <div class="flex flex-col gap-6 transition-transform">
    <h2>{{ title }}</h2>
    <div class="flex whitespace-nowrap flex-nowrap overflow-auto gap-8 relative -ml-20">
      <section class="sticky top-0 left-0 flex items-center h-full p-6 bg-gradient-to-r from-[#f7f7f7f7] z-10"
        :class="[store.collapsed ? '' : 'translate-x-6']"></section>
      <div v-for="item in items" :key="item.id" class="flex flex-col bg-white p-4 md:p-6 rounded-2xl w-80 shrink-0">
        <div class="h-60 bg-black/5 rounded-xl mb-4"></div>
        <!-- Replace with img -->
        <h3>{{ item.name }}</h3>
        <div class="flex justify-between items-center">
          <span>{{ item.price }}</span>
          <span class="text-green-500 bg-green-500/10 px-2 py-1 rounded-lg">+{{ item.quickBid }}</span>
        </div>
      </div>
      <section class="sticky top-0 right-0 flex items-center h-full p-6 bg-gradient-to-l from-[#f7f7f7f7]"></section>
    </div>
  </div>
</template>
