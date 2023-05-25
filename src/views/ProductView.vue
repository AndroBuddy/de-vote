<script setup>
import { onMounted } from 'vue'
import { collapseHelper } from '../stores/helpers/collapse'
import { useProductStore } from '../stores/api/products'

import IconArrow from '../components/icons/IconArrow.vue'

import { useRoute } from 'vue-router'
import IconLoader from '../components/icons/IconLoader.vue'

const productStore = useProductStore()

onMounted(() => {
  const route = useRoute().params.product

  productStore.setProduct(route)

  if (!collapseHelper().collapsed) collapseHelper().setCollapse()
})

function routeBack() {
  window.history.go(-1)
}
</script>

<template>
  <section class="flex flex-col px-4 pb-32 lg:pb-12 lg:px-14 flex-grow gap-12">
    <section class="flex items-center justify-center h-full container" v-if="productStore.loader">
      <IconLoader class="self-center text-blue-500" />
    </section>

    <section class="flex flex-col gap-10 xl:self-center container" v-else>
      <button @click="routeBack" class="bg-white p-4 rounded-2xl w-min">
        <IconArrow class="rotate-180" />
      </button>

      <div>
        <h1 class="capitalize">{{ productStore.productInfo.productname }}</h1>
        <p class="text-black/40">{{ productStore.productInfo.description }}</p>
      </div>

      <section class="flex flex-col gap-6">
        <div class="bg-green-300/40 rounded-2xl w-full h-32"></div>
        <div class="flex gap-6">
          <div class="bg-slate-300/40 rounded-2xl w-full"></div>
          <div class="flex flex-col gap-4 bg-white rounded-2xl p-6">
            <h2>Your bid</h2>
            <input
              type="text"
              placeholder="$0.00"
              class="focus:outline-none text-lg w-full bg-black/5 rounded-xl p-2 text-center"
            />
            <button class="bg-blue-500 text-white p-3 rounded-xl">Place bid</button>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>
