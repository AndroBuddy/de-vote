<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
import SearchBar from './components/SearchBar.vue';
</script>

<template>
  <main class="flex h-screen">
    <SideBar />
    <div class="flex flex-col flex-grow overflow-auto">
        <SearchBar class="px-14 mt-10" />
        <RouterView />
    </div>
  </main>
</template>

<style scoped></style>
