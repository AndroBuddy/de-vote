<script setup>
import { useMainStore } from '../stores/main'
import { vsxIcon } from 'vue-iconsax'

const store = useMainStore().useNavGraphStore()
</script>

<template>
  <footer class="fixed bottom-0 z-20 overflow-clip w-full">
    <section class="flex items-center p-6 w-full bg-white rounded-t-3xl">
      <ul class="flex justify-around items-center text-gray-400 w-full">
        <li v-for="(navItem, index) in store.navGraph[0]" :key="index">
          <router-link :to="navItem.path" class="flex gap-2 sm:gap-3 items-center">
            <vsx-icon class="shrink-0" :iconName="navItem.icon" size="20" type="linear" />
            <span class="flex-grow whitespace-nowrap text-xs sm:text-base text-black/40">{{
              navItem.name
            }}</span>
          </router-link>
        </li>
      </ul>
    </section>
  </footer>
</template>

<style scoped>
.router-link-exact-active {
  @apply py-2 px-3 bg-green-500/20 text-green-500 rounded-lg;
}
.router-link-exact-active > span {
  @apply text-green-500;
}
</style>
