<script setup>
import IconLogout from '../icons/IconLogout.vue';
import { useMainStore } from '../../stores/main';

const store = useMainStore().authHelper()
</script>

<template>
  <div @click="store.setAuth" class="flex gap-4 items-center overflow-clip cursor-pointer">
    <IconLogout class="shrink-0" />
    <span class="text-red-600 flex-grow whitespace-nowrap">Logout</span>
  </div>
</template>