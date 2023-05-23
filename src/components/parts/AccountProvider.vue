<script setup>
import { onMounted } from 'vue'
import { useMainStore } from '../../stores/main'

const store = useMainStore()
const authStore = store.authHelper()
const profileStore = store.useProfileStore()

onMounted(() => {
  if (authStore.isAuth) {
    profileStore.setProfile()
  } else {
    profileStore.setGuest()
  }
})
</script>

<template>
  <div class="shrink-0">
    <section>
      <router-link to="/account" class="hidden lg:flex gap-4 items-center">
        <img
          :src="profileStore.setProfileImg()"
          class="w-12 h-12 rounded-full bg-white flex items-center justify-center"
          v-if="profileStore.setProfileImg()"
        />
        <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center" v-else>
          {{ profileStore.userProfile.name[0] }}
        </div>
        <span class="flex flex-col">
          <h3>{{ profileStore.userProfile.name }}</h3>
          <h4>{{ profileStore.userProfile.username }}</h4>
        </span>
      </router-link>
      <img
        :src="profileStore.setProfileImg()"
        @click="store.accountMenuHelper().setAccountMenu"
        class="w-10 h-10 rounded-full bg-white flex items-center justify-center lg:hidden"
        v-if="profileStore.setProfileImg()"
      />
      <div
        @click="store.accountMenuHelper().setAccountMenu"
        class="w-10 h-10 rounded-full bg-white flex items-center justify-center lg:hidden"
        v-else
      >
        {{ profileStore.userProfile.name[0] }}
      </div>
    </section>
  </div>
</template>
