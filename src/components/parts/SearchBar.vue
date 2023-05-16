<script setup>
import IconSearch from '../icons/IconSearch.vue'
</script>

<template>
  <div class="flex gap-4 p-3 lg:p-4 bg-white rounded-2xl items-center w-full lg:w-96">
    <IconSearch class="stroke-black w-3 h-3 md:w-5 md:h-5" />
    <input type="text" name="search" placeholder="Search products" class="focus:outline-none w-full text-xs">
  </div>
</template>