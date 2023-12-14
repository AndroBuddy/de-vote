<script setup>
import IconBrand from '../icons/IconBrand.vue'
import LogoutControl from './LogoutControl.vue'
</script>

<template>
  <div class="flex justify-between items-center w-full px-4 md:px-8 py-5 bg-white">
    <router-link to="/" class="overview text-lg font-bold flex flex-row gap-2">
      <IconBrand />
      <h1 class="lowercase">devote</h1>
    </router-link>
    <div class="flex items-center gap-3">
      <router-link to="/voter/results">Poll results</router-link>
      <LogoutControl />
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  @apply text-blue-600;
}
</style>