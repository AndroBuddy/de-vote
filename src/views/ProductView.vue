<script setup>
import { onMounted, ref } from 'vue';
import { useMainStore } from '../stores/main';

import IconArrow from '../components/icons/IconArrow.vue'

import { useRoute } from 'vue-router';

const productDet = ref({
  name: 'Def',
  id: 'def',
  description: 'def',
  img: 'https://def',
  price: 'def'
})

onMounted(() => {
  const route = useRoute().params.product
  const store = useMainStore()
  const productInfo = store.useProductInfoStore()

  productInfo.productInfoList.filter((p) => {
    if (p.id === route)
      productDet.value = p
  })

  if (!store.collapseHelper().collapsed)
    store.collapseHelper().setCollapse()
})

function routeBack() {
  window.history.go(-1)
}
</script>

<template>
  <section class="flex flex-col px-4 pb-32 lg:pb-12 lg:px-14 flex-grow gap-12">
    <section class="flex flex-col gap-10 xl:self-center container">
      <button @click="routeBack" class="bg-white p-4 rounded-2xl w-min">
        <IconArrow class="rotate-180" />
      </button>

      <div>
        <h1 class="capitalize">{{ productDet.name }}</h1>
        <p class="text-black/40">{{ productDet.description }}</p>
      </div>

      <section class="flex flex-col gap-6">
        <div class="bg-green-300/40 rounded-2xl w-full h-32"></div>
        <div class="flex gap-6">
          <div class="bg-slate-300/40 rounded-2xl w-full"></div>
          <div class="flex flex-col gap-4 bg-white rounded-2xl p-6">
            <h2>Your bid</h2>
            <input type="text" placeholder="$0.00"
              class="focus:outline-none text-lg w-full bg-black/5 rounded-xl p-2 text-center">
            <button class="bg-blue-500 text-white p-3 rounded-xl">Place bid</button>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>