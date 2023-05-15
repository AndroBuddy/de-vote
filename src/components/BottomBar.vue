<script setup>
import { useNavGraphStore } from '../stores/navgraph'

const store = useNavGraphStore()
</script>

<template>
  <nav class="fixed bottom-0 z-20 overflow-clip w-full">
    <section class="flex items-center p-6 w-full bg-white rounded-t-3xl">
      <ul class="flex justify-between text-black/60 w-full">
        <li v-for="(navItem, index) in store.navGraph[0]" :key="index">
          <router-link :to="navItem.path" class="flex gap-4 items-center">
            <component class="shrink-0" :is="navItem.icon" />
            <span class="flex-grow whitespace-nowrap">{{ navItem.name }}</span>
          </router-link>
        </li>
      </ul>
    </section>
  </nav>
</template>
