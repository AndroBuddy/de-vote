<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue';
</script>

<template>
    <main class='flex h-screen'>
        <SideBar />
        <RouterView />
    </main>
</template>

<style scoped>
</style>
