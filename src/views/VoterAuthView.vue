<script setup>
import VoterLoginHeader from '../components/login/VoterLoginHeader.vue'
</script>

<template>
  <main class="flex flex-col items-center lg:items-start w-screen h-screen p-6">
    <VoterLoginHeader />
    <RouterView />
  </main>
</template>
