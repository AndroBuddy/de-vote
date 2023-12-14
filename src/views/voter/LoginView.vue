<script setup>
import { loginManager } from '../../stores/auth/login'
import VoterLoginHeader from '../../components/login/VoterLoginHeader.vue'

import { UserSquare } from 'vue-iconsax'

const loginStore = loginManager()
</script>

<template>
  <main class="flex flex-col items-center lg:items-start w-screen h-screen p-6">
    <VoterLoginHeader />
  <section class="flex flex-col sm:items-center justify-center w-full h-full">
    <section class="flex flex-col gap-8">
      <div class="flex flex-col gap-1">
        <h1>Hello Voter!</h1>
        <h2 class="font-normal text-black/50">Log in to start voting on our decentralized platform</h2>
      </div>

      <router-link to="/voter/vote" @click="loginStore.setVoterGuest()"
        class="flex gap-3 items-center justify-center flex-grow border-black/20 border p-2 rounded-lg hover:bg-black/5 transition-colors"
        replace>
        <UserSquare size="20" />
        <h3>Log in as Test User</h3>
      </router-link>
    </section>
  </section>
  </main>
</template>
