<script setup>
import { onMounted } from 'vue'
import { useMainStore } from '../../stores/main'

const store = useMainStore()
const authStore = store.authHelper()
const profileStore = store.useProfileStore()

onMounted(() => {
  if (!authStore.isAuth) profileStore.setGuest()
})
</script>

<template>
  <div class="shrink-0">
    <section>
      <router-link to="/account" class="hidden lg:flex gap-4 items-center">
        <img
          :src="profileStore.userAccount.profileUrl"
          class="w-12 h-12 rounded-full bg-white flex items-center justify-center"
          v-if="profileStore.userAccount.profileUrl"
        />
        <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center capitalize" v-else>
          {{ profileStore.userAccount.name[0] }}
        </div>
        <span class="flex flex-col">
          <h3>{{ profileStore.userAccount.name }}</h3>
          <h4>{{ profileStore.userAccount.username }}</h4>
        </span>
      </router-link>
      <img
        :src="profileStore.userAccount.profileUrl"
        @click="store.accountMenuHelper().setAccountMenu"
        class="w-10 h-10 rounded-full bg-white flex items-center justify-center lg:hidden"
        v-if="profileStore.userAccount.profileUrl"
      />
      <div
        @click="store.accountMenuHelper().setAccountMenu"
        class="w-10 h-10 rounded-full bg-white flex items-center justify-center lg:hidden capitalize"
        v-else
      >
        {{ profileStore.userAccount.name[0] }}
      </div>
    </section>
  </div>
</template>
