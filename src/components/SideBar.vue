<script setup>
import { useNavGraphStore } from '@/stores/navgraph'
import anime from 'animejs/lib/anime.es.js'

import IconLogout from './icons/IconLogout.vue'

const store = useNavGraphStore()

const slideIn = () => {
  anime({
    targets: 'nav',
    translateX: [0, '-100%'],
    duration: 1000,
    easing: 'linear'
  })
}
</script>

<template>
  <nav>
    <section class="flex flex-col gap-14 p-14 w-72 bg-white h-screen rounded-t-3xl rounded-b-3xl">
      <section>
        <h1>!much</h1>
      </section>
      <section class="flex flex-col gap-14">
        <section class="flex flex-col gap-8">
          <ul class="flex flex-col gap-8 text-black/60">
            <li v-for="(navItem, index) in store.navGraph[0]" :key="index">
              <router-link :to="navItem.path" class="flex gap-4 items-center">
                <component :is="navItem.icon" />
                <span>{{ navItem.name }}</span>
              </router-link>
            </li>
          </ul>
          <div class="border-[1px]" />
          <ul class="flex flex-col gap-8 text-black/60">
            <li v-for="(navItem, index) in store.navGraph[1]" :key="index">
              <router-link :to="navItem.path" class="flex gap-4 items-center">
                <component :is="navItem.icon" />
                <span>{{ navItem.name }}</span>
              </router-link>
            </li>
          </ul>
        </section>

        <div>
          <div @click="slideIn" class="flex gap-4 items-center">
            <IconLogout />
            <span class="text-red-600">Logout</span>
          </div>
        </div>
      </section>
    </section>
  </nav>
</template>
