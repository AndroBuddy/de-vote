<script setup>
import { authHelper } from '../../stores/auth/auth';
import { UserSquare }  from 'vue-iconsax'

const store = authHelper()
</script>

<template>
  <div class="flex flex-col gap-4 items-center">
    <UserSquare size="128" class="text-gray-300" />
    <div class="flex flex-col items-center text-black/40">
      <h2 class="text-base">You are not signed in.</h2>
      <p>
        <button @click="store.setLogOut()" class="text-blue-500">Sign In</button> or
        <button @click="store.setSignUp()" class="text-blue-500">Create a new account</button>
      </p>
    </div>
  </div>
</template>
