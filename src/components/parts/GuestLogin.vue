<script setup>
import { authHelper } from '../../stores/helpers/auth';
import IconGuest from '../icons/IconGuest.vue'

const store = authHelper()
</script>

<template>
  <div class="flex flex-col gap-4 items-center">
    <IconGuest class="stroke-black/20 w-32 h-32" />
    <div class="flex flex-col items-center text-black/40">
      <h2 class="text-base">You are not signed in.</h2>
      <p>
        <button @click="store.setLogOut()" class="text-blue-500">Sign In</button> or
        <button @click="store.setSignUp()" class="text-blue-500">Create a new account</button>
      </p>
    </div>
  </div>
</template>
