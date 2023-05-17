<script setup>
import { onMounted, ref } from 'vue';
import ContentPanel from '../components/ContentPanel.vue'
import { useMainStore } from '../stores/main';
import IconFavoriteNone from '../components/icons/IconFavoriteNone.vue';

const store = useMainStore().useProductStore();
const favoriteList = ref([])

onMounted(() => {
  const allProds = store.productsList
  allProds.forEach(prod => {
    if (prod.favorite) {
      favoriteList.value.push(prod)
    }
  })
})
</script>

<template>
  <section class="flex flex-col px-4 pb-32 lg:pb-12 lg:px-14 flex-grow gap-12">
    <section class="flex flex-col xl:self-center h-full container">
      <div class="flex flex-col items-center justify-center center h-full self-center lg:mb-32" v-if="favoriteList.length == 0">
        <IconFavoriteNone class="w-32 h-32 stroke-black/20" />
      </div>
      <ContentPanel title="Favorite listings" :items="favoriteList" v-else />
    </section>
  </section>
</template>
