<script setup>
// import { onMounted } from 'vue'
import HeaderPanel from '../components/parts/HeaderPanel.vue';
</script>

<template>
  <section class="flex flex-col gap-12 h-screen">
    <HeaderPanel />
    <section class="relative flex flex-col mt-40 gap-8 sm:gap-10 xl:self-center xl:container p-10 text-center">
      <div class='flex flex-col gap-3 items-center'>
        <h1 class='text-4xl w-1/2'>
          <span>Secure</span> and <span>Transparent Voting</span> with Decentralized Technology
        </h1>
        <p class="text-lg text-black/40 w-1/2">Bringing Web3 to elections and polls. No room for doubts.</p>
      </div>

      <div class='flex gap-3 self-center'>
        <router-link to='/admin-home' type="submit"
          class="flex self-start justify-center items-center rounded-md bg-blue-800 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline-none">
          Create New Poll
        </router-link>
        <router-link to='/voter/vote' type="submit"
          class="flex self-start justify-center items-center rounded-md bg-blue-800/10 px-3 py-1.5 text-sm leading-6 text-blue-800 shadow-sm hover:opacity-50 focus-visible:outline-none">
          Register as a Voter
        </router-link>
      </div>
    </section>
  </section>
</template>

<style scoped>
span {
  color: #2563eb;
  font-weight: bold;
}
</style>
