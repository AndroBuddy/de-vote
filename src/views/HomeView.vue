<script setup>
// import { onMounted } from 'vue'
import ContentPanel from '../components/ContentPanel.vue'
import { useProductStore } from '../stores/api/products'

const store = useProductStore()
// onMounted(() => {
//   store.getProducts()
// })
</script>

<template>
  <section class="flex flex-col pl-4 pb-32 md:pb-12 md:pl-14 flex-grow gap-12">
    <section class="relative flex flex-col gap-8 sm:gap-10 xl:self-center xl:container">
      <h2>Recent Auctions</h2>
      <ContentPanel :items="store.productsList" />

      <h2>High Value Bids</h2>
      <ContentPanel :items="store.productsList" />
    </section>
  </section>
</template>
