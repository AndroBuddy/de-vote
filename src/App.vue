<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
import HeaderBar from './components/HeaderBar.vue'
import BottomBar from './components/BottomBar.vue'

import { useMainStore } from './stores/main'


function slideInOut() {
  const store = useMainStore()
  const animeStore = store.useAnimeStore()
  if (!store.collapseHelper().collapsed)
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
    <RouterView name="RightPanel" class="hidden lg:block" />
  </main>
</template>

<style scoped></style>
