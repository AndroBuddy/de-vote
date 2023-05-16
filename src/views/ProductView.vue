<script setup>
import { onMounted } from 'vue';
import { useMainStore } from '../stores/main';

onMounted(() => {
  const store = useMainStore()
  if (!store.collapsed)
    store.setCollapse()
})
</script>

<template>
  <section class="flex flex-col px-4 pb-32 lg:pb-12 lg:px-14 flex-grow gap-12">
    <section class="flex flex-col gap-10 xl:self-center container">
      <h2 class="capitalize">{{ this.$route.name }}</h2>
    </section>
  </section>
</template>