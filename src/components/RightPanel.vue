<script setup>
import { useMainStore } from '../stores/main'
import { onMounted } from 'vue'

import anime from 'animejs/lib/anime.es'

const store = useMainStore().useBidderStore()

onMounted(() => {
  anime({
    targets: '.panel',
    width: [0, '20rem'],
    duration: 1000,
    easing: 'easeInOutSine'
  })

  anime({
    targets: '.panel > *',
    opacity: [0, 1],
    duration: 1200
  })
})
</script>

<template>
  <section class="z-20 overflow-clip shrink-0 panel">
    <section
      class="flex flex-col gap-14 px-8 py-14 w-full bg-white h-screen rounded-tl-3xl rounded-bl-3xl"
    >
      <h2 class="whitespace-nowrap">Top bidders</h2>
      <section class="flex flex-col gap-8 overflow-clip">
        <ul class="flex flex-col gap-8 text-black/40" v-if="store.biddersList.length !== 0">
          <li v-for="(bidder, index) in store.biddersList" :key="index">
            <div class="flex items-center justify-between">
              <section class="flex gap-4 items-center">
                <span>
                  <h4 class="text-black font-semibold whitespace-nowrap">{{ bidder.firstname }}</h4>
                  <h4 class="text-xs whitespace-nowrap">{{ bidder.username }}</h4>
                </span>
              </section>
              <h4 class="text-black whitespace-nowrap">₹ {{ bidder.amount }}</h4>
            </div>
          </li>
        </ul>
        <span v-else>No bids yet</span>
      </section>
    </section>
  </section>
</template>
