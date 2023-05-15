<script setup>
import IconBrand from './icons/IconBrand.vue';
import IconSearch from './icons/IconSearch.vue'
import AccountOptions from './AccountOptions.vue'
import AccountProvider from './parts/AccountProvider.vue'
import { useMainStore } from '../stores/main';

const store = useMainStore()
</script>

<template>
  <header
    class="flex w-full justify-end items-center gap-4 lg:gap-10 sticky top-0 z-20 px-4 md:px-14 py-10 bg-gradient-to-b from-[#f7f7f7f7] via-[#f7f7f7]">
    <router-link class="block md:hidden" to="/">
      <IconBrand />
    </router-link>

    <div class="flex gap-4 p-3 lg:p-4 bg-white rounded-2xl items-center w-full lg:w-96">
      <IconSearch class="stroke-black w-3 h-3 md:w-5 md:h-5" />
      <input type="text" name="search" placeholder="Search products" class="focus:outline-none w-full text-xs">
    </div>

    <AccountProvider />
  </header>

  <section class="flex items-center justify-center fixed z-30 h-screen w-screen" v-if="store.accountMenu">
    <div class="absolute top-0 left-0 backdrop-blur-lg w-full h-full"></div>
    <AccountOptions />
  </section>
</template>
