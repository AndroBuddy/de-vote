<script setup>
import { useProductStore } from '../../stores/api/products'
import { onMounted, ref } from 'vue'
import IconSearch from '../icons/IconSearch.vue'

onMounted(() => {
  const search = document.querySelector('input[name="search"]')
  search.focus()
})

const store = useProductStore()
const searchKey = ref('')
const filteredList = () => {
  if (!searchKey.value) return false
  return store.productsList.filter((product) => {
    return product.name.toLowerCase().includes(searchKey.value.toLowerCase())
  })
}
</script>

<template>
  <section class="flex w-full md:w-auto h-min justify-center">
    <section class="flex flex-col items-center gap-[2px] w-full sm:w-[48rem]">
      <div
        class="flex gap-4 p-3 lg:p-4 bg-white items-center w-full"
        :class="[filteredList().length > 0 ? 'rounded-t-2xl' : 'rounded-2xl']"
      >
        <IconSearch class="stroke-black md:w-5 md:h-5" />
        <input
          v-model="searchKey"
          type="text"
          name="search"
          placeholder="Search products"
          autocomplete="off"
          class="focus:outline-none w-full text-xs"
        />
      </div>
      <div
        class="p-6 bg-white rounded-b-2xl items-center w-full max-h-96 overflow-auto"
        v-if="filteredList().length > 0"
      >
        <h3>Products</h3>
        <ul class="flex flex-col gap-2 mt-6">
          <li
            v-for="(product, i) in filteredList()"
            :key="i"
            class="bg-slate-100 rounded-lg p-3 hover:bg-slate-200 hover:rounded-3xl transition-all"
          >
            <router-link to="">
              <h3 class="font-normal">{{ product.name }}</h3>
              <h4>{{ product.price }}</h4>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
  </section>
</template>
