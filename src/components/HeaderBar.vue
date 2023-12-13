<script setup>
import { useMainStore } from '../stores/main'
import { onMounted } from 'vue'
import { ReceiptEdit } from 'vue-iconsax'

const store = useMainStore()
const searchStore = store.useSearchStore()
let ballot_title = "Employee of the Week"

onMounted(() => {
  window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape' && searchStore.searchActive) {
      searchStore.setSearchActive()
    }
  })
})
</script>

<template>
  <!-- basic properties of header -->
  <header
    class="flex w-full items-center gap-4 lg:gap-10 sticky top-0 z-20 bg-white border-b border-l border-gray"
  >
    <!-- Divides top half and bottom (representing page) -->
    <div class="flex flex-col w-full">
      <!-- Seperates header from launch poll button -->
      <div class="flex justify-between items-center w-full md:px-8 py-5">
        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-2">
            <div class="text-lg font-bold">{{ ballot_title }}</div>
             <div class="flex justify-center items-center">
              <button>
                <ReceiptEdit size="16" style="color: blue" />
              </button>
            </div>
          </div>
          <div class="flex flex-col items-center py-1 bg-orange-50 rounded-md text-orange-600 w-36">
            <p class="text-xs">Under Construction</p>
          </div>
        </div>
        <div class='flex gap-3'>
          <button type="submit"
            class="flex self-start justify-center items-center rounded-md bg-blue-800/10 px-3 py-1.5 text-sm leading-6 text-blue-800 shadow-sm hover:opacity-50 focus-visible:outline-none">
            Preview
          </button>
          <button type="submit"
            class="flex self-start justify-center items-center rounded-md bg-blue-800 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline-none">
            Launch Poll
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
