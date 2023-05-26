<script setup>
import { authHelper } from '../../stores/auth/auth';
import IconLogout from '../icons/IconLogout.vue'

const authStore = authHelper()
</script>

<template>
  <button @click="authStore.setLogOut()" class="flex gap-4 items-center overflow-clip cursor-pointer">
    <IconLogout class="shrink-0" />
    <span class="text-red-600 whitespace-nowrap">Logout</span>
  </button>
</template>
