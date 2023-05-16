<script setup>
import ContentPanel from '../components/ContentPanel.vue'
import { useProductStore } from '../stores/main';

const store = useProductStore();
</script>

<template>
  <section class="flex flex-col px-4 pb-32 lg:pb-12 lg:px-14 flex-grow gap-12">
    <section class="flex flex-col gap-10 xl:self-center container">
      <ContentPanel title="Recent Auctions" :items="store.productsList" />
      <ContentPanel title=" High Value Bids" :items="store.productsList" />
    </section>
  </section>
</template>
