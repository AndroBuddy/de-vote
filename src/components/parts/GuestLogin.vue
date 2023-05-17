<script setup>
import IconGuest from '../icons/IconGuest.vue'
</script>

<template>
  <div class="flex flex-col gap-4 items-center">
    <IconGuest class="stroke-black/20 w-32 h-32" />
    <div class="flex flex-col items-center text-black/40">
      <h3>You are not logged in.</h3>
      <p>
        <router-link to="/" class="text-blue-500">Login</router-link> or
        <router-link to="/" class="text-blue-500">Sign up</router-link>
      </p>
    </div>
  </div>
</template>
