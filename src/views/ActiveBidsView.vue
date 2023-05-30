<script setup>
import { useProfileStore } from '../stores/api/profile'
import { useBiddingStore } from '../stores/api/biddings'
import GuestLogin from '../components/parts/GuestLogin.vue'

const biddings = useBiddingStore().biddingsList
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

          <ul role="list" class="divide-y divide-gray-400">
            <li v-for="bid in biddings" :key="bid._id" class="flex items-center justify-between gap-x-6 py-5">
              <div class="flex gap-x-4">
                <div class="min-w-0 flex-auto">
                  <p class="font-semibold leading-6 text-gray-900">{{ bid.productName }}</p>
                  <p class="mt-1 truncate text-sm leading-5 text-gray-500">
                    Listed at ₹ {{ bid.price }}
                  </p>
                </div>
              </div>
              <div class="flex flex-col items-end">
                <p class="mt-1 leading-5 text-gray-500">₹ {{ bid.amount }}</p>
              </div>
            </li>
          </ul>
        </section>
      </section>
    </section>
  </section>
</template>
