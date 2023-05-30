<script setup>
import { useProfileStore } from '../stores/api/profile'
import { useBiddingStore } from '../stores/api/biddings'
import GuestLogin from '../components/parts/GuestLogin.vue'
import { onMounted } from 'vue'

import { ArrowRight2 } from 'vue-iconsax'

const biddings = useBiddingStore().biddingsList

onMounted(async () => {
  await useBiddingStore().getBiddings()
})
</script>

<template>
  <section class="flex flex-col px-4 pb-32 md:pb-12 md:px-14 flex-grow gap-12">
    <section class="flex flex-col gap-10 xl:self-center h-full container">
      <div
        class="flex flex-col items-center justify-center center h-full self-center lg:mb-32"
        v-if="useProfileStore().userAccount.id === 'guest'"
      >
        <GuestLogin />
      </div>
      <section class="flex flex-col gap-10 transition-transform" v-else>
        <section class="flex flex-col gap-6">
          <div>
            <h2>Your Bids</h2>
            <p class="text-sm text-black/40">Recently participated biddings.</p>
          </div>

          <ul role="list" class="divide-y divide-gray-200" v-if="biddings.length !== 0">
            <li v-for="bid in biddings" :key="bid._id" class="flex flex-col gap-4 py-5">
              <router-link
                :to="`/p/${bid.id}`"
                class="flex items-center flex-grow justify-between gap-x-6 hover:scale-[.99] transition-transform"
              >
                <div class="flex gap-x-4">
                  <div class="flex flex-col max-w-[20rem]">
                    <span
                      class="font-semibold leading-6 text-gray-900 overflow-clip text-ellipsis"
                      >{{ bid.productName }}</span
                    >
                    <p class="mt-1 truncate text-sm leading-5 text-gray-500">
                      Listed at ₹ {{ bid.price }}
                    </p>
                  </div>
                </div>
                <div class="flex gap-x-2 items-center shrink-0">
                  <p class="mt-1 leading-5 text-gray-500">₹ {{ bid.amount }}</p>
                  <ArrowRight2 size="20" />
                </div>
              </router-link>
              <button
                class="bg-orange-300 text-sm font-semibold w-min px-4 py-3 rounded-xl self-end hover:bg-orange-200"
                v-if="bid.highBid === useProfileStore().userAccount.id"
              >
                Checkout
              </button>
            </li>
          </ul>
          <div v-else>Nothing to see here</div>
        </section>
      </section>
    </section>
  </section>
</template>
