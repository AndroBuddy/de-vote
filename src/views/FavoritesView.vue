<script setup>
import { useProfileStore } from '../stores/api/profile'
import { useFavoriteStore } from '../stores/helpers/favorite'

import ContentPanel from '../components/ContentPanel.vue'
import GuestLogin from '../components/parts/GuestLogin.vue'

import { HeartSlash } from 'vue-iconsax'
import { onMounted, ref } from 'vue'

const favoritesList = ref([])

onMounted(() => {
  if (useProfileStore().userAccount.id === 'guest') {
    return
  }
  useFavoriteStore().getFavorites()
  favoritesList.value = useFavoriteStore().favoritesList
})
</script>

<template>
  <section class="flex flex-col pl-4 pb-32 md:pb-12 md:pl-14 flex-grow gap-12">
    <section class="flex flex-col xl:self-center h-full xl:container">
      <div
        class="flex flex-col items-center justify-center center h-full self-center lg:mb-32"
        v-if="useProfileStore().userAccount.id === 'guest'"
      >
        <GuestLogin />
      </div>

      <section class="flex flex-col h-full" v-else>
        <div
          class="flex flex-col items-center justify-center h-full self-center lg:mb-32"
          v-if="favoritesList?.length === 0"
        >
          <HeartSlash size="128" class="text-gray-300" />
        </div>
        <section class="flex flex-col gap-8 sm:gap-10" v-else>
          <h2>Favorite listings</h2>
          <ContentPanel :items="favoritesList" />
        </section>
      </section>
    </section>
  </section>
</template>
