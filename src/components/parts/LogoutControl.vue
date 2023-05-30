<script setup>
import { authHelper } from '../../stores/auth/auth'
import { LogoutCurve } from 'vue-iconsax'

const authStore = authHelper()
</script>

<template>
  <button
    @click="authStore.setLogOut()"
    class="text-red-600 flex gap-4 items-center overflow-clip"
  >
    <LogoutCurve class="shrink-0" size="20" type="linear" />
    <span class="whitespace-nowrap">Logout</span>
  </button>
</template>
