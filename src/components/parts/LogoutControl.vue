<script setup>
import IconLogout from '../icons/IconLogout.vue'
</script>

<template>
  <router-link to="/auth/login" class="flex gap-4 items-center overflow-clip cursor-pointer">
    <IconLogout class="shrink-0" />
    <span class="text-red-600 flex-grow whitespace-nowrap">Logout</span>
  </router-link>
</template>
