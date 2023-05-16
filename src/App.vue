<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
import HeaderBar from './components/HeaderBar.vue'
import BottomBar from './components/BottomBar.vue'

import { useAnimeStore, useMainStore } from './stores/main'


function slideInOut() {
  const store = useMainStore()
  const animeStore = useAnimeStore()
  if (!store.collapsed)
    animeStore.slideIn()
  else
    animeStore.slideOut()
}

document.title = "!much | The auction site"
</script>

<template>
  <main class="flex h-screen">
    <SideBar class="hidden md:block" @slide-in-out="slideInOut()" />
    <BottomBar class="block md:hidden" />
    <div class="flex flex-col flex-grow overflow-auto">
      <HeaderBar />
      <RouterView />
    </div>
  </main>
</template>

<style scoped></style>
