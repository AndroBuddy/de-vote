<script setup>
import IconBrand from './icons/IconBrand.vue';
import IconSearch from './icons/IconSearch.vue'
import AccountOptions from './AccountOptions.vue'
import AccountProvider from './parts/AccountProvider.vue'
import SearchBar from './parts/SearchBar.vue';

import { useMainStore } from '../stores/main';

const store = useMainStore()
const searchStore = store.useSearchStore()
</script>

<template>
  <header
    class="flex w-full justify-end items-center gap-4 lg:gap-10 sticky top-0 z-20 px-4 md:px-14 py-10 bg-gradient-to-b from-[#f7f7f7f7] via-[#f7f7f7]">
    <router-link class="block md:hidden" to="/">
      <IconBrand />
    </router-link>

    <div @click="searchStore.setSearchActive()"
      class="flex gap-2 lg:gap-4 p-3 lg:p-4 bg-white hover:bg-black/5 rounded-2xl items-center w-full lg:w-96 text-xs text-black/40 cursor-pointer">
      <IconSearch class="stroke-black w-3 h-3 md:w-5 md:h-5" />
      Search products...
    </div>

    <AccountProvider />
  </header>

  <section class="flex items-center justify-center fixed z-30 h-screen w-screen" v-if="store.accountMenuHelper().accountMenu">
    <div class="absolute top-0 left-0 backdrop-blur-lg w-full h-full"></div>
    <AccountOptions />
  </section>

  <Teleport to="main" v-if="searchStore.searchActive">
    <section class="flex items-center justify-center absolute z-30 h-screen w-screen px-6">
      <div @click="searchStore.setSearchActive()" class="absolute top-0 left-0 backdrop-blur-lg w-full h-full"></div>
      <SearchBar />
    </section>
  </Teleport>
</template>
