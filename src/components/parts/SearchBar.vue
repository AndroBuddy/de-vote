<script setup>
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useProductStore } from '../../stores/api/products'
import { ref } from 'vue'
import { SearchNormal1, ArrowRight2 } from 'vue-iconsax'
import { useSearchStore } from '../../stores/search'

const dialog = useSearchStore()

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
  <TransitionRoot as="template" :show="dialog.searchActive">
    <Dialog as="div" class="relative z-40" @close="dialog.setSearchActive()">
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
        <div class="flex min-h-full justify-center p-10 items-center">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 -translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 -translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white self-start text-left transition-all w-full md:w-auto"
            >
              <section class="flex flex-col items-center gap-[2px] w-full md:w-[42rem]">
                <div
                  class="flex gap-4 p-3 lg:p-4 bg-white items-center w-full"
                  :class="[filteredList().length > 0 ? 'rounded-t-2xl' : 'rounded-2xl']"
                >
                  <SearchNormal1 class="md:w-5 md:h-5" />
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
                      class="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 hover:rounded-3xl transition-all"
                    >
                      <router-link
                        :to="`/p/${product._id}`"
                        class="flex items-center justify-between"
                      >
                        <h3 class="overflow-clip w-40 sm:w-auto">{{ product.name }}</h3>
                        <span class="flex gap-x-2 shrink-0">
                          <h3>₹ {{ product.price }}</h3>
                          <ArrowRight2 size="20" />
                        </span>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </section>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
