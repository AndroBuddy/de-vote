<script setup>
import { useMainStore } from '../stores/main'
import IconClose from './icons/IconClose.vue';

import anime from 'animejs/lib/anime.es';
import { onMounted } from 'vue';
import LogoutControl from './parts/LogoutControl.vue';
import GuestProvider from './parts/GuestProvider.vue';

const store = useMainStore()
const navStore = store.useNavGraphStore()
const profileStore = store.useProfileStore()

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
      <IconClose @click="store.accountMenuHelper().setAccountMenu" class="absolute right-4 top-4" />
      <div class="shrink-0 mt-8">
        <router-link to="/" v-if="!store.authHelper().isAuth">
          <GuestProvider />
        </router-link>
        <div class="flex gap-4 items-center" v-else>
          <img :src="profileStore.setProfileImg()"
            class="w-12 h-12 rounded-full bg-white flex items-center justify-center" />
          <span class="flex flex-col">
            <h3>{{ profileStore.userProfile.name }}</h3>
            <h4>{{ profileStore.userProfile.username }}</h4>
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
.router-link-exact-active>span {
  @apply text-black;
}
</style>
