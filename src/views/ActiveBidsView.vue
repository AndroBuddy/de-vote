<script setup>
import { useProfileStore } from '../stores/api/profile'
import GuestLogin from '../components/parts/GuestLogin.vue'
</script>

<template>
  <section class="flex flex-col px-4 pb-32 lg:pb-12 lg:px-14 flex-grow gap-12">
    <section class="flex flex-col gap-10 xl:self-center h-full container">
      <div
        class="flex flex-col items-center justify-center center h-full self-center lg:mb-32"
        v-if="useProfileStore().userAccount.id === 'guest'"
      >
        <GuestLogin />
      </div>
      <h2 class="capitalize" v-else>{{ this.$route.name }}</h2>
    </section>
  </section>
</template>
