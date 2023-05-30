<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useProductStore } from '../../stores/api/products'

// import { vsxIcon } from 'vue-iconsax'
const productStore = useProductStore()
</script>

<template>
  <TransitionRoot as="template" :show="productStore.checkout">
    <Dialog as="div" class="relative z-40" @close="productStore.checkout = false">
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
        <div class="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
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
              class="relative transform overflow-hidden rounded-lg bg-white text-left transition-all sm:w-[48rem]"
            >
              <section
                class="flex flex-col gap-10 p-10 rounded-3xl w-full max-h-[90vh] overflow-scroll"
              >
                <DialogTitle class="flex flex-col gap-2">
                  <h1 class="text-3xl">Order Summary</h1>
                  <p class="text-base text-black/40">
                    Thank you! We have received your bidding order and have sent it for processing.
                  </p>
                </DialogTitle>

                <div>
                  <h4>Order number</h4>
                  <h4 class="text-blue-600">{{ productStore.productInfo.id }}</h4>
                </div>

                <div class="border-[1px]" />

                <div class="flex flex-col gap-8">
                  <img :src="productStore.productInfo.img" class="w-1/5 rounded-xl" />
                  <section class="flex justify-between items-center">
                    <span>
                      <h3>{{ productStore.productInfo.productname }}</h3>
                      <h4>₹ {{ productStore.productInfo.price }}</h4>
                    </span>

                    <button
                      @click="productStore.checkout = false"
                      class="self-end flex items-center justify-center rounded-md bg-gray-800 w-40 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline-none disabled:opacity-80 disabled:cursor-not-allowed disabled:hover:bg-gray-800 transition-colors"
                    >
                      Confirmed
                    </button>
                  </section>
                </div>
              </section>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
