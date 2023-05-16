<script setup>
defineProps({
  bidderInfo: Object,
  profileUrl: String
})
</script>

<template>
  <div class="flex items-center justify-between">
    <section class="flex gap-4 items-center">
      <img :src="profileUrl" class="w-8 h-8 bg-black rounded-full" >
      <span>
        <h3 class="text-black whitespace-nowrap">{{ bidderInfo.name }}</h3>
        <h4 class="text-xs whitespace-nowrap">{{ bidderInfo.timestamp }}</h4>
      </span>
    </section>
    <h3 class="text-black whitespace-nowrap">{{ bidderInfo.bid }}</h3>
  </div>
</template>