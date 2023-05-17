<script setup>
import IconLogout from '../icons/IconLogout.vue';
import { useMainStore } from '../../stores/main';
import { useRouter } from 'vue-router';

const store = useMainStore().authHelper()
const router = useRouter()

function logOut() {
  store.setLogOut()
  router.push('/login')
}
</script>

<template>
  <div @click="logOut()" class="flex gap-4 items-center overflow-clip cursor-pointer">
    <IconLogout class="shrink-0" />
    <span class="text-red-600 flex-grow whitespace-nowrap">Logout</span>
  </div>
</template>