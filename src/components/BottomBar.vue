<script setup>
import { useMainStore } from '../stores/main'

const store = useMainStore().useNavGraphStore()
</script>

<template>
  <footer class="fixed bottom-0 z-20 overflow-clip w-full">
    <section class="flex items-center p-6 w-full bg-white rounded-t-3xl">
      <ul class="flex justify-around items-center text-black/60 w-full">
        <li v-for="(navItem, index) in store.navGraph[0]" :key="index">
          <router-link :to="navItem.path" class="flex gap-2 sm:gap-3 items-center">
            <component class="shrink-0 w-4 sm:w-6" :is="navItem.icon" />
            <span class="flex-grow whitespace-nowrap text-xs sm:text-base text-black/40">{{ navItem.name }}</span>
          </router-link>
        </li>
      </ul>
    </section>
  </footer>
</template>

<style scoped>
.router-link-exact-active {
  @apply py-2 px-3 bg-green-500/20 rounded-lg;
}

.router-link-exact-active>* {
  @apply stroke-green-500 text-green-500 !important;
}
</style>
