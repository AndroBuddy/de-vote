<script setup>
import IconBrand from '../icons/IconBrand.vue'
</script>

<template>
  <header>
    <router-link to='/' class="flex items-center justify-center lg:justify-normal gap-2 w-full mt-6 lg:mt-0">
      <IconBrand class="w-8 h-8" />
      <h3 class="text-xl">deVote</h3>
      <h4 class="text-lg">| Voter Platform</h4>
    </router-link>
  </header>
</template>
