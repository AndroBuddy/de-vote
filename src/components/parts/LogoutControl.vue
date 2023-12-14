<script setup>
import { authHelper } from '../../stores/auth/auth'
import { LogoutCurve } from 'vue-iconsax'

import { useRoute } from 'vue-router'
const route = useRoute().fullPath

const authStore = authHelper()

const logOut = () => {
  console.log(route)
  if (route.includes('/voter')) {
    authStore.setVoterLogOut()
  } else {
    authStore.setLogOut()
  }
}
</script>

<template>
  <button @click="logOut" class="text-red-600 flex gap-4 items-center overflow-clip">
    <LogoutCurve class="shrink-0" size="20" type="linear" />
    <span class="whitespace-nowrap">Logout</span>
  </button>
</template>
