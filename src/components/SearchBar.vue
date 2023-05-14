<script setup>
import IconSearch from './icons/IconSearch.vue'
</script>

<template>
  <header class="flex w-full justify-between items-center gap-4 lg:gap-10 sticky top-6 lg:top-10 z-10">
    <div class="flex gap-4 p-3 lg:p-4 bg-white rounded-2xl items-center flex-grow">
      <IconSearch class="stroke-black" />
      <h4>Search products</h4>
    </div>
    <div class="w-10 lg:w-14 h-10 lg:h-14 rounded-full bg-white flex items-center justify-center">A</div>
  </header>
</template>
