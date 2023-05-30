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
      <div>
        <h1>Welcome to AuxHive!</h1>
        <p class="text-base text-black/40">The marketplace for auctions</p>
      </div>
      <ContentPanel :items="store.productsList" />
    </section>
  </section>
</template>
