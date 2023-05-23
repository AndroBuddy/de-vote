<script setup>
import LoginHeader from '../components/login/LoginHeader.vue'
</script>

<template>
  <main class="flex flex-col items-center lg:items-start w-screen h-screen p-6">
    <LoginHeader />
    <RouterView />
  </main>
</template>
