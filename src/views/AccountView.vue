<script setup>
import GuestLogin from '../components/parts/GuestLogin.vue'
import { useMainStore } from '../stores/main'

const store = useMainStore().authHelper()
</script>

<template>
  <section class="flex flex-col px-4 pb-32 lg:pb-12 lg:px-14 flex-grow gap-12">
    <section class="flex flex-col xl:self-center h-full container">
      <div
        class="flex flex-col items-center justify-center center h-full self-center lg:mb-32"
        v-if="!store.isAuth"
      >
        <GuestLogin />
      </div>
      <div class="flex flex-col gap-6 transition-transform" v-else>
        <h2>Account settings</h2>
      </div>
    </section>
  </section>
</template>
