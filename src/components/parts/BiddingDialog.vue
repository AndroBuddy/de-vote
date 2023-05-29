<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { Award } from 'vue-iconsax'

import { useMainStore } from '../../stores/main'
import { useBiddingStore } from '../../stores/api/biddings'
import { useRoute } from 'vue-router'
import IconLoader from '../icons/IconLoader.vue'

const open = useMainStore()
const bidStore = useBiddingStore()

const route = useRoute().params.product
async function submit() {
  await bidStore.placeBid(route)
}
</script>

<template>
  <TransitionRoot as="template" :show="open.dialogOpen">
    <Dialog as="div" class="relative z-40" @close="open.dialogOpen = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/5 backdrop-blur-lg transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-xl bg-white text-left transition-all p-8 sm:w-full sm:max-w-lg flex flex-col gap-4"
            >
              <div class="flex flex-col gap-6">
                <DialogTitle as="h1" class="font-semibold leading-6 text-gray-900">
                  Place your Bid
                </DialogTitle>
                <div class="border-[1px]" />
                <div class="flex gap-4 items-center">
                  <Award class="text-black" aria-hidden="true" />
                  <span>
                    <h3 class="font-normal">Highest Bid</h3>
                    <h2>₹2000</h2>
                  </span>
                </div>
                <p class="text-sm text-gray-500">
                  Your minimum bid amount must be greater than the current highest bid to be
                  eligible.
                </p>
              </div>
              <form
                @submit.prevent="submit"
                class="flex flex-col sm:flex-row gap-4 items-center justify-between"
              >
                <input
                  v-model="bidStore.bidAmount"
                  id="bidfield"
                  name="bidfield"
                  type="amount"
                  placeholder="Enter your amount"
                  required="true"
                  class="rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-200 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 sm:leading-6 text-sm text-gray-500 w-full"
                />
                <button
                  type="submit"
                  class="inline-flex items-center w-full justify-center rounded-md bg-black px-6 py-2 text-sm font-semibold text-white hover:bg-gray-800 sm:ml-3 sm:w-auto"
                >
                  <IconLoader class="w-4 h-4" v-if="bidStore.loader" />
                  <p v-else>Bid</p>
                </button>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
