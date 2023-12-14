<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
import HeaderBar from './components/HeaderBar.vue'
import BottomBar from './components/BottomBar.vue'

import { useMainStore } from './stores/main'
import { useProfileStore } from './stores/api/profile'

const profileStore = useProfileStore()
const store = useMainStore()

function slideInOut() {
  const animeStore = store.useAnimeStore()
  if (!store.collapseHelper().collapsed) animeStore.slideIn()
  else animeStore.slideOut()
}

document.title = `${store.appName} | Auctions`
</script>

<template>
  <RouterView name="FullPage" v-if="!profileStore.userAccount || profileStore.userAccount.admin === true" />
  <main class="flex min-h-screen md:h-screen bg-[#f5f5f5]" v-else>
    <SideBar class="hidden md:block" @slide-in-out="slideInOut()" />
    <BottomBar class="block md:hidden" />
    <div class="flex flex-col flex-grow overflow-auto md:ml-20 xl:ml-0">
      <HeaderBar />
      <RouterView />
    </div>
    <RouterView name="RightPanel" class="hidden lg:block" />
  </main>
</template>
