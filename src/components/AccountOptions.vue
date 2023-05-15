<script setup>
import { useNavGraphStore } from '../stores/navgraph'
import { useMainStore } from '../stores/main'
import IconClose from './icons/IconClose.vue';

import anime from 'animejs/lib/anime.es';
import { onMounted } from 'vue';
import LogoutControl from './parts/LogoutControl.vue';

const navStore = useNavGraphStore()
const mainStore = useMainStore()

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
      <IconClose @click="mainStore.setAccountMenu" class="absolute right-4 top-4" />
      <div class="shrink-0 mt-8">
        <router-link to="/" class="flex gap-4 items-center" v-if="!mainStore.isAuth">
          <div class="w-14 h-14 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center">G
          </div>
          <h3>Guest</h3>
        </router-link>
        <router-link to="" class="flex gap-4 items-center" v-else>
          <img :src="mainStore.setProfileImg()" class="w-12 h-12 rounded-full bg-white flex items-center justify-center" />
          <span class="flex flex-col">
            <h3>{{ mainStore.userProfile.name }}</h3>
            <h4>{{ mainStore.userProfile.username }}</h4>
          </span>
        </router-link>
      </div>
      <ul class="flex flex-col justify-between gap-6 text-black/60 w-full">
        <li v-for="(navItem, index) in navStore.navGraph[1]" :key="index">
          <router-link :to="navItem.path" class="flex gap-4 items-center">
            <component class="shrink-0" :is="navItem.icon" />
            <span class="flex-grow whitespace-nowrap">{{ navItem.name }}</span>
          </router-link>
        </li>
        <div class="border-[1px]" />
        <LogoutControl />
      </ul>
    </section>
  </nav>
</template>
