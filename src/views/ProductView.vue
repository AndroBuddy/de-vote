<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '../stores/api/products'
import { collapseHelper } from '../stores/helpers/collapse'
import { useMainStore } from '../stores/main'
import { useRoute } from 'vue-router'

import { ArrowLeft, Clock } from 'vue-iconsax'
import IconLoader from '../components/icons/IconLoader.vue'
import BiddingDialog from '../components/parts/BiddingDialog.vue'

const productStore = useProductStore()
const store = useMainStore()

onMounted(() => {
  if (window.innerWidth < 1600) {
    store.useAnimeStore().slideIn()
    collapseHelper().collapseBar()
  }

  const route = useRoute().params.product
  productStore.setProduct(route)
})

function routeBack() {
  window.history.go(-1)
}
</script>

<template>
  <BiddingDialog />
  <section class="flex flex-col px-4 pb-48 md:pb-12 md:px-14 flex-grow gap-12">
    <section class="flex items-center justify-center h-full container" v-if="productStore.loader">
      <IconLoader class="self-center text-black" />
    </section>

    <section class="flex flex-col gap-10 xl:self-center container" v-else>
      <button @click="routeBack" class="bg-white p-4 rounded-2xl w-min">
        <ArrowLeft />
      </button>

      <div>
        <h1 class="capitalize">{{ productStore.productInfo.productname }}</h1>
        <p class="text-black/40">Listed price ₹{{ productStore.productInfo.price }}</p>
        <span class="flex gap-2 items-center mt-2 text-sm">
          <Clock size="16" />
          Ends in {{ productStore.productInfo.endTime }}
        </span>
      </div>

      <section class="flex flex-col xl:flex-row xl:justify-between gap-6">
        <div
          class="flex items-center overflow-clip h-full xl:h-3/5 2xl:h-auto 2xl:w-2/5 rounded-2xl"
        >
          <img :src="productStore.productInfo.img" class="h-full" />
        </div>
        <div class="flex flex-col xl:w-2/5 gap-6">
          <span>
            <h2>Description</h2>
            <h3 class="font-normal mt-2">Listed by {{ productStore.productInfo.username }}</h3>
          </span>
          <p class="text-gray-400">{{ productStore.productInfo.description }}</p>

          <div class="border-[1px]" />

          <section
            class="fixed md:static z-10 left-2 right-2 bottom-20 bg-gray-800 rounded-2xl p-4 flex items-center justify-between"
          >
            <div class="text-white flex flex-col">
              <h4 class="text-white">Highest Bid</h4>
              <span>₹2000</span>
            </div>
            <button
              @click="store.toggleDialog()"
              class="flex justify-center items-center rounded-md bg-orange-300 px-8 py-2 text-sm font-semibold leading-6 text-black hover:bg-orange-200 focus-visible:outline-none"
            >
              Place your Bid
            </button>
          </section>
        </div>
      </section>
    </section>
  </section>
</template>
