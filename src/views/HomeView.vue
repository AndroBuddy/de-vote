<script setup>
import { onMounted } from 'vue';
import ContentPanel from '../components/ContentPanel.vue'
import { useProductStore } from '../stores/api/products'

const store = useProductStore()
onMounted(() => {
  store.getProducts()
})
</script>

<template>
  <section class="flex flex-col px-4 pb-32 lg:pb-12 lg:px-14 flex-grow gap-12">
    <section class="relative flex flex-col gap-10 xl:self-center container">
      <h2>Recent Auctions</h2>
      <ContentPanel :items="store.productsList" />

      <h2>High Value Bids</h2>
      <ContentPanel :items="store.productsList" />
    </section>
  </section>
</template>
