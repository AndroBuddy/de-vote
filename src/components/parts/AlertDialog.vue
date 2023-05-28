<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { TickCircle } from 'vue-iconsax'

import { useMainStore } from '../../stores/main'
const open = useMainStore()
</script>

<template>
  <TransitionRoot as="template" :show="open.dialogOpen">
    <Dialog as="div" class="relative z-20" @close="open = false">
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
              class="relative transform overflow-hidden rounded-lg bg-white text-left transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div
                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"
                  >
                    <TickCircle class="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900"
                      >Product Listed!</DialogTitle
                    >
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        Your product has been listed on the marketplace for auctions. You can visit
                        the product page to see the status of your product.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-4 pb-6 sm:flex sm:flex-row-reverse sm:px-6">
                <router-link
                  @click="open.toggleDialog()"
                  to="/"
                  class="inline-flex w-full justify-center rounded-md bg-blue-100 px-3 py-2 text-sm font-semibold text-blue-500 hover:bg-blue-200 sm:ml-3 sm:w-auto"
                >
                  Go to Home
                </router-link>
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  @click="open.toggleDialog()"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
