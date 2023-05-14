<script setup>
import { useNavGraphStore } from '@/stores/navgraph'
import { useMainStore } from '../stores/main'
import IconLogout from './icons/IconLogout.vue'

const store = useNavGraphStore()
const collapseState = useMainStore()
</script>

<template>
  <nav class="z-20 w-80 overflow-clip shrink-0">
    <section class="flex flex-col gap-14 p-14 w-full bg-white h-screen rounded-t-3xl rounded-b-3xl">
      <section id="brand" class="cursor-pointer" @click="$emit('slideInOut')">
        <div
          id="logo"
          class="bg-black text-white py-[0.3rem] px-[0.4rem] rounded-lg font-semibold text-sm absolute"
          :class="[collapseState.collapsed ? '' : 'hidden']"
        >
          !m
        </div>
        <h1>!much</h1>
      </section>
      <section class="flex flex-col justify-between flex-grow">
        <section class="flex flex-col gap-8 overflow-clip">
          <ul class="flex flex-col gap-8 text-black/60">
            <li v-for="(navItem, index) in store.navGraph[0]" :key="index">
              <router-link :to="navItem.path" class="flex gap-4 items-center">
                <component class="shrink-0" :is="navItem.icon" />
                <span class="flex-grow whitespace-nowrap">{{ navItem.name }}</span>
              </router-link>
            </li>
          </ul>
          <div class="border-[1px]" />
          <ul class="flex flex-col gap-8 text-black/60">
            <li v-for="(navItem, index) in store.navGraph[1]" :key="index">
              <router-link :to="navItem.path" class="flex gap-4 items-center">
                <component class="shrink-0" :is="navItem.icon" />
                <span class="flex-grow whitespace-nowrap">{{ navItem.name }}</span>
              </router-link>
            </li>
          </ul>
        </section>

        <div class="flex gap-4 items-center overflow-clip">
          <IconLogout class="shrink-0" />
          <span class="text-red-600 flex-grow whitespace-nowrap">Logout</span>
        </div>
      </section>
    </section>
  </nav>
</template>
