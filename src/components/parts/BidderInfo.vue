<script setup>
defineProps({
  bidderInfo: Object
})
</script>

<template>
  <div class="flex items-center justify-between">
    <section class="flex gap-4 items-center">
      <span>
        <h4 class="text-black font-semibold whitespace-nowrap">{{ bidderInfo.name }}</h4>
        <h4 class="text-xs whitespace-nowrap">{{ bidderInfo.timestamp }}</h4>
      </span>
    </section>
    <h4 class="text-black whitespace-nowrap">{{ bidderInfo.bid }}</h4>
  </div>
</template>