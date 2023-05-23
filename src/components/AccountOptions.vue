<script setup>
import { useMainStore } from '../stores/main'
import IconClose from './icons/IconClose.vue'

import anime from 'animejs/lib/anime.es'
import { onMounted } from 'vue'
import LogoutControl from './parts/LogoutControl.vue'

const store = useMainStore()
const navStore = store.useNavGraphStore()
const profileStore = store.useProfileStore()

onMounted(() => {
  anime({
    targets: '.dialog',
    scale: [0, 1]
  })
})
</script>

<template>
  <nav class="z-20">
    <section class="flex flex-col gap-10 p-6 w-80 bg-white rounded-3xl dialog">
      <IconClose @click="store.accountMenuHelper().setAccountMenu" class="absolute right-4 top-4" />
      <div class="shrink-0 mt-8">
        <div class="flex gap-4 items-center">
          <img
            :src="profileStore.userAccount.profileUrl"
            class="w-12 h-12 rounded-full flex items-center justify-center"
            v-if="profileStore.userAccount.profileUrl"
          />
          <div class="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center capitalize" v-else>
            {{ profileStore.userAccount.name[0] }}
          </div>
          <span class="flex flex-col">
            <h3>{{ profileStore.userAccount.name }}</h3>
            <h4>{{ profileStore.userAccount.username }}</h4>
          </span>
        </div>
      </div>
      <ul class="flex flex-col justify-between gap-6 text-black/60 w-full">
        <li v-for="(navItem, index) in navStore.navGraph[1]" :key="index">
          <router-link :to="navItem.path" class="flex gap-4 items-center">
            <component class="shrink-0" :is="navItem.icon" />
            <span class="flex-grow whitespace-nowrap text-black/40">{{ navItem.name }}</span>
          </router-link>
        </li>
        <div class="border-[1px]" />
        <LogoutControl />
      </ul>
    </section>
  </nav>
</template>

<style scoped>
.router-link-exact-active > span {
  @apply text-black;
}
</style>
