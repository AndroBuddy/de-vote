<script setup>
import { useMainStore } from '@/stores/main';
const store = useMainStore()
</script>

<template>
  <div class="shrink-0">
    <section v-if="!store.isAuth">
      <router-link to="/" class="hidden lg:flex gap-4 items-center">
        <div class="w-14 h-14 rounded-full bg-white flex items-center justify-center">G
        </div>
        <h3>Guest</h3>
      </router-link>
      <div @click="store.setAccountMenu"
        class="w-10 h-10 rounded-full bg-white flex items-center justify-center lg:hidden">G
      </div>
    </section>
    <section v-else>
      <router-link to="/account" class="hidden lg:flex gap-4 items-center">
        <img :src="store.setProfileImg()" class="w-12 h-12 rounded-full bg-white flex items-center justify-center" />
        <span class="flex flex-col">
          <h3>{{ store.userProfile.name }}</h3>
          <h4>{{ store.userProfile.username }}</h4>
        </span>
      </router-link>
      <img :src="store.setProfileImg()" @click="store.setAccountMenu"
        class="w-10 h-10 rounded-full bg-white flex items-center justify-center lg:hidden" />
    </section>
  </div>
</template>