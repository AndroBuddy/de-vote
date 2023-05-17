<script setup>
import { useMainStore } from '../stores/main'
import { onMounted } from 'vue';

import BidderInfo from './parts/BidderInfo.vue';
import anime from 'animejs/lib/anime.es';

const store = useMainStore().useBidderStore()

onMounted(() => {
  anime({
    targets: ".panel",
    width: [0, '24rem'],
    duration: 1000,
    easing: 'easeInOutSine'
  })

  anime({
    targets: ".panel > *",
    opacity: [0, 1],
    duration: 1200
  })
})
</script>

<template>
  <section class="z-20 w-96 overflow-clip shrink-0 panel">
    <section class="flex flex-col gap-14 px-8 py-14 w-full bg-white h-screen rounded-tl-3xl rounded-bl-3xl">
      <h1 class="whitespace-nowrap">Top bidders</h1>
      <section class="flex flex-col gap-8 overflow-clip">
        <ul class="flex flex-col gap-8 text-black/40">
          <li v-for="(bidder, index) in store.biddersList" :key="index">
            <BidderInfo :bidder-info="bidder" :profile-url="store.profileUrl(bidder.profileUri)" />
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>