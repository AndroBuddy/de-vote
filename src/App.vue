<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
import SearchBar from './components/SearchBar.vue'
import { useMainStore } from './stores/main'

import anime from 'animejs/lib/anime.es.js'

const store = useMainStore()
function slideInOut() {
  if (!store.collapsed) {
    anime
      .timeline({
        targets: 'nav',
        width: ['20rem', '4.5rem'],
        duration: 1000,
        easing: 'easeInOutSine'
      })
      .add({
        targets: 'nav > section',
        padding: ['3.5rem 3.5rem 3.5rem 3.5rem', '3.5rem 1.5rem 3.5rem 1.5rem']
      })

    anime
      .timeline({
        targets: '#brand > h1',
        opacity: [1, 0]
      })
      .add({
        targets: '#brand',
        margin: [0, '0 0 0 -0.4rem']
      })

    anime({
      targets: '#logo',
      scale: [0, 1],
      delay: 600
    })

    store.setCollapse()
  } else {
    anime
      .timeline({
        targets: 'nav',
        width: ['4.5rem', '20rem'],
        duration: 1000,
        easing: 'easeInOutSine'
      })
      .add({
        targets: 'nav > section',
        padding: ['3.5rem 1.5rem 3.5rem 1.5rem', '3.5rem 3.5rem 3.5rem 3.5rem']
      })

    anime({
      targets: '#logo',
      scale: [1, 0]
    })

    anime
      .timeline({
        targets: '#brand',
        margin: ['0 0 0 -0.4rem', 0]
      })
      .add({
        targets: '#brand > h1',
        opacity: [0, 1]
      })

    store.setCollapse()
  }
}
</script>

<template>
  <main class="flex h-screen">
    <SideBar @slide-in-out="slideInOut" />
    <div class="flex flex-col flex-grow overflow-auto">
      <SearchBar class="px-14 mt-10" />
      <RouterView />
    </div>
  </main>
</template>

<style scoped></style>
