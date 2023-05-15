<script setup>
import { useNavGraphStore } from '../stores/navgraph'
import { useMainStore } from '../stores/main'
import IconLogout from './icons/IconLogout.vue'
import IconClose from './icons/IconClose.vue';

import anime from 'animejs/lib/anime.es';
import { onMounted } from 'vue';

const store = useNavGraphStore()
const closeState = useMainStore()

onMounted(() => {
  anime({
    targets: ".dialog",
    scale: [0, 1]
  })
})
</script>

<template>
  <nav class="z-20">
    <section class="flex flex-col gap-10 p-6 w-80 bg-white rounded-3xl dialog">
      <IconClose @click="closeState.setAccountMenu" class="absolute right-4 top-4" />
      <div class="flex gap-4 items-center mt-4">
        <div class="w-10 lg:w-14 h-10 lg:h-14 rounded-full bg-slate-500 flex items-center justify-center">A</div>
        <span>Name</span>
      </div>
      <ul class="flex flex-col justify-between gap-6 text-black/60 w-full">
        <li v-for="(navItem, index) in store.navGraph[1]" :key="index">
          <router-link :to="navItem.path" class="flex gap-4 items-center">
            <component class="shrink-0" :is="navItem.icon" />
            <span class="flex-grow whitespace-nowrap">{{ navItem.name }}</span>
          </router-link>
        </li>
        <div class="border-[1px]" />
        <div class="flex gap-4 items-center overflow-clip">
          <IconLogout class="shrink-0" />
          <span class="text-red-600 flex-grow whitespace-nowrap">Logout</span>
        </div>
      </ul>
    </section>
  </nav>
</template>
