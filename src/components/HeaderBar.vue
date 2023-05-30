<script setup>
import IconBrand from './icons/IconBrand.vue'
import { SearchNormal1, Refresh } from 'vue-iconsax'

import AccountOptions from './AccountOptions.vue'
import AccountProvider from './parts/AccountProvider.vue'
import SearchBar from './parts/SearchBar.vue'

import { useMainStore } from '../stores/main'
import { useProductStore } from '../stores/api/products'
import { onMounted } from 'vue'

const store = useMainStore()
const searchStore = store.useSearchStore()

onMounted(() => {
  window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape' && searchStore.searchActive) {
      searchStore.setSearchActive()
    }
  })
})
</script>

<template>
  <AccountOptions />
  <header
    class="flex w-full justify-end items-center gap-4 lg:gap-10 sticky top-0 z-20 px-4 md:px-14 py-10 bg-gradient-to-b from-[#f5f5f5] via-[#f7f7f7]"
  >
    <router-link class="block md:hidden" to="/">
      <IconBrand />
    </router-link>

    <div
      @click="searchStore.setSearchActive()"
      class="flex gap-2 lg:gap-4 p-3 lg:p-4 bg-white hover:bg-black/5 rounded-2xl items-center w-full lg:w-96 text-xs text-black/40 cursor-pointer"
    >
      <SearchNormal1 class="w-3 h-3 md:w-5 md:h-5" />
      Search products...
    </div>

    <button
      class="bg-white p-2 sm:p-3 rounded-xl hover:scale-95 hover:-translate-y-1 transition-transform"
      @click="useProductStore().getProducts()"
    >
      <Refresh size="20" type="linear" />
    </button>

    <AccountProvider />
  </header>

  <Teleport to="main" v-if="searchStore.searchActive">
    <section class="flex justify-center absolute z-30 h-screen w-screen p-10">
      <div
        @click="searchStore.setSearchActive()"
        class="absolute top-0 left-0 backdrop-blur-lg w-full h-full"
      ></div>
      <SearchBar />
    </section>
  </Teleport>
</template>
