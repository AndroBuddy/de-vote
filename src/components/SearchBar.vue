<script setup>
import IconBrand from './icons/IconBrand.vue';
import IconSearch from './icons/IconSearch.vue'
import AccountOptions from './AccountOptions.vue'
import { useMainStore } from '../stores/main';

const store = useMainStore()
</script>

<template>
  <header class="flex w-full justify-between items-center gap-4 lg:gap-10 sticky top-6 lg:top-10 z-20 px-4 md:px-14">
    <router-link class="block md:hidden" to="/">
      <IconBrand />
    </router-link>

    <div class="flex gap-4 p-3 lg:p-4 bg-white rounded-2xl items-center flex-grow">
      <IconSearch class="stroke-black w-3 h-3 md:w-5 md:h-5" />
      <h4>Search products</h4>
    </div>
    <div @click="store.setAccountMenu"
      class="w-10 lg:w-14 h-10 lg:h-14 rounded-full bg-white flex items-center justify-center">A
    </div>
  </header>

  <section class="flex items-center justify-center fixed z-30 h-screen w-screen" v-if="store.accountMenu">
    <div class="absolute top-0 left-0 backdrop-blur-lg w-full h-full"></div>
    <AccountOptions />
  </section>
</template>
