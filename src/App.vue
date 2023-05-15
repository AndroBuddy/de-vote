<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
import HeaderBar from './components/HeaderBar.vue'

import { useAnimeStore } from './stores/main'

import BottomBar from './components/BottomBar.vue'

const animeStore = useAnimeStore()
</script>

<template>
  <main class="flex h-screen">
    <SideBar class="hidden md:block" @slide-in-out="animeStore.slideInOut" />
    <BottomBar class="block md:hidden" />
    <div class="flex flex-col flex-grow overflow-auto">
      <HeaderBar />
      <RouterView />
    </div>
  </main>
</template>

<style scoped></style>
