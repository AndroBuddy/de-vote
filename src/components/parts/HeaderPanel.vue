<script setup>
import IconBrand from '../../components/icons/IconBrand.vue'
</script>

<template>
  <header class="flex items-center justify-between px-10 py-8 bg-white">
    <div class="text-lg font-bold flex flex-row gap-2">
      <IconBrand />
      <h1 class="lowercase">devote</h1>
    </div>

    <div class='flex gap-3'>
      <router-link to='admin-home' type="submit"
        class="flex self-start justify-center items-center rounded-md bg-blue-800 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline-none">
        Create New Poll
      </router-link>
    </div>
  </header>
</template>
