<script setup>
import { onMounted, ref } from 'vue'
import { useProductStore } from '../stores/api/products'
import { collapseHelper } from '../stores/helpers/collapse'
import { useMainStore } from '../stores/main'
import { useProfileStore } from '../stores/api/profile'
import { useRoute } from 'vue-router'

import { ArrowLeft, Clock } from 'vue-iconsax'
import IconLoader from '../components/icons/IconLoader.vue'
import BiddingDialog from '../components/parts/BiddingDialog.vue'

const productStore = useProductStore()
const store = useMainStore()

const duration = ref('')

onMounted(async () => {
  if (window.innerWidth < 1600 && !collapseHelper().collapsed) {
    store.useAnimeStore().slideIn()
    collapseHelper().collapseBar()
  }

  const route = useRoute().params.product

  const millis = await productStore.setProduct(route)
  setInterval(() => {
    const time = new Date(millis - Date.parse(new Date()))
    if (time <= 0) {
      duration.value = -1
      productStore.notifyEnd(route)
      return
    }
    duration.value = `${time.getUTCHours()}h ${time.getUTCMinutes()}m ${time.getUTCSeconds()}s`
  }, 1000)
  await store.useBidderStore().getBidders(route)
})

function routeBack() {
  window.history.go(-1)
}
</script>

<template>
  <BiddingDialog />
  <section class="flex flex-col px-4 pb-48 lg:pb-12 md:px-14 flex-grow gap-12">
    <section class="flex items-center justify-center h-full container" v-if="productStore.loader">
      <IconLoader class="self-center text-black" />
    </section>

    <section class="flex flex-col gap-10 xl:self-center container" v-else>
      <button @click="routeBack" class="bg-white p-4 rounded-2xl w-min">
        <ArrowLeft />
      </button>

      <div>
        <h1 class="capitalize">{{ productStore.productInfo.productname }}</h1>
        <p class="text-black/40">Listed price ₹ {{ productStore.productInfo.price }}</p>
        <div
          class="flex gap-2 items-center mt-2 text-sm bg-red-100 text-red-600 rounded-lg p-2 w-fit"
        >
          <Clock size="16" />
          <span v-if="duration === -1 || !duration">Ended</span>
          <span v-else>Ends in {{ duration }}</span>
        </div>
      </div>

      <section class="flex flex-col xl:flex-row xl:justify-between gap-6">
        <div class="flex items-center overflow-clip xl:w-3/5 2xl:w-2/5 rounded-2xl">
          <img :src="productStore.productInfo.img" class="rounded-2xl" />
        </div>
        <div class="flex flex-col xl:w-3/5 2xl:w-2/5 gap-6">
          <span>
            <h2>Description</h2>
            <h3 class="font-normal mt-2">
              Listed by {{ productStore.productInfo.username }} &lt;{{
                productStore.productInfo.email
              }}&gt;
            </h3>
          </span>
          <p class="text-gray-400">{{ productStore.productInfo.description }}</p>

          <div class="border-[1px]" />

          <section
            class="fixed lg:static z-30 left-2 right-2 bottom-20 md:bottom-2 md:left-32 md:right-16 bg-gray-800 rounded-2xl p-4 flex items-center justify-between"
          >
            <div
              class="text-white flex flex-col"
              v-if="store.useBidderStore().biddersList.length !== 0"
            >
              <h4 class="text-white">Highest Bid</h4>
              <span> ₹ {{ store.useBidderStore().biddersList[0]?.amount }} </span>
            </div>
            <div class="text-white flex flex-col" v-else>
              <h4 class="text-white">Base Bid</h4>
              <span> ₹ {{ productStore.productInfo.price }} </span>
            </div>
            <button
              @click="store.toggleDialog()"
              :disabled="
                duration === -1 ||
                useProfileStore().userAccount.username === productStore.productInfo.username ||
                useProfileStore().userAccount.id === 'guest' ||
                store.useBidderStore().biddersList[0]?.username ===
                  useProfileStore().userAccount.username
              "
              class="flex justify-center items-center rounded-md bg-orange-300 px-8 py-2 text-sm font-semibold leading-6 text-black hover:bg-orange-200 focus-visible:outline-none disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:cursor-not-allowed"
            >
              Place your Bid
            </button>
          </section>
        </div>
      </section>
    </section>
  </section>
</template>
