<script setup>
import { useProfileStore } from '../stores/api/profile'
import { useAddProductStore } from '../stores/api/update.product'
import { onMounted } from 'vue'

import { AddCircle } from 'vue-iconsax'

import GuestLogin from '../components/parts/GuestLogin.vue'
import IconLoader from '../components/icons/IconLoader.vue'
import ContentPanel from '../components/ContentPanel.vue'
import AlertDialog from '../components/parts/AlertDialog.vue'

const profileStore = useProfileStore()
const productStore = useAddProductStore()

async function submit() {
  await productStore.addNewProduct()
}

onMounted(async () => {
  if (profileStore.userAccount.id === 'guest') {
    return
  }
  await productStore.getUserProducts()
})
</script>

<template>
  <section class="flex flex-col px-4 pb-32 lg:pb-12 md:px-14 flex-grow gap-12">
    <AlertDialog />
    <section class="flex flex-col xl:self-center h-full container">
      <div
        class="flex flex-col items-center justify-center center h-full self-center lg:mb-32"
        v-if="profileStore.userAccount.id === 'guest'"
      >
        <GuestLogin />
      </div>

      <section class="flex flex-col gap-10 transition-transform" v-else>
        <section class="flex flex-col gap-6">
          <div>
            <h2>Your Products</h2>
            <p class="text-sm text-black/40">Add or review your products here.</p>
          </div>

          <div class="border-[1px]" />

          <form class="flex flex-col gap-6 lg:w-[40rem]" @submit.prevent="submit">
            <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
              <div class="text-sm text-gray-900">
                <span class="font-semibold">Name</span>
                <p class="text-black/40">Product name</p>
              </div>
              <input
                v-model="productStore.productName"
                id="name"
                name="name"
                type="name"
                required="true"
                class="rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 sm:leading-6 text-sm text-gray-500 sm:w-72"
              />
            </div>
            <div class="flex flex-col sm:flex-row gap-4 sm:justify-between">
              <div class="text-sm text-gray-900">
                <span class="font-semibold">Description</span>
                <p class="text-black/40">Set a brief description of the product</p>
              </div>
              <textarea
                v-model="productStore.productDescription"
                rows="4"
                id="description"
                name="description"
                type="description"
                required="true"
                class="rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 sm:leading-6 text-sm text-gray-500 sm:w-72"
              />
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
              <div class="text-sm text-gray-900">
                <span class="font-semibold">Listing price</span>
                <p class="text-black/40">Set a base price</p>
              </div>
              <input
                v-model="productStore.productPrice"
                id="price"
                name="price"
                type="price"
                required="true"
                class="rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 sm:leading-6 text-sm text-gray-500 sm:w-72"
              />
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
              <div class="text-sm text-gray-900">
                <span class="font-semibold">Duration</span>
                <p class="text-black/40">Product listing duration</p>
              </div>
              <input
                v-model="productStore.productDuration"
                id="duration"
                name="datetime"
                type="datetime-local"
                class="rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 sm:leading-6 text-sm text-gray-500 sm:w-72"
              />
            </div>
            {{ productStore.productDuration }}
            <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
              <div class="text-sm text-gray-900">
                <span class="font-semibold">Image URL</span>
                <p class="text-black/40">Product image link</p>
              </div>
              <input
                v-model="productStore.productImg"
                id="url"
                name="url"
                type="url"
                class="rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 sm:leading-6 text-sm text-gray-500 sm:w-72"
              />
            </div>

            <button
              :disabled="productStore.loader"
              type="submit"
              class="self-end flex items-center justify-center rounded-md bg-gray-800 w-40 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline-none mt-4 disabled:opacity-80 disabled:cursor-not-allowed disabled:hover:bg-gray-800 transition-colors"
            >
              <IconLoader class="stroke-white w-5" v-if="productStore.loader" />
              <div class="flex gap-2 items-center" v-else>
                <AddCircle size="20" class="text-white" /> Add Product
              </div>
            </button>
          </form>

          <div class="border-[1px]" />

          <div class="flex flex-col gap-6" v-if="productStore.userProducts?.length !== 0">
            <h2>Listings</h2>
            <ContentPanel :items="productStore.userProducts" />
          </div>
        </section>
      </section>
    </section>
  </section>
</template>
