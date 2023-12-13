<script setup>
import { InfoCircle, People, Setting4 } from 'vue-iconsax'
import { ref } from 'vue'
let ballot_url = ref('devote.com/aiDjfdK')

function copyToClipboard() {
  const textToCopy = ballot_url.value
  navigator.clipboard.writeText(textToCopy).catch((err) => {
    console.error('Could not copy text: ', err)
  })
}
</script>

<template>
  <!-- Header -->
  <div class="px-4 md:px-14 py-5 rounded-bl-2xl bg-white border-b border-l border-gray">
    <div class="overview text-lg font-bold">Overview</div>
  </div>
  <section class="flex flex-col pt-10 px-4 pb-32 md:pb-12 md:px-14 flex-grow gap-12">
    <!-- Ballot Info -->
    <section class="flex flex-row gap-5 xl:self-center container">
      <div
        class="flex flex-col items-center justify-center bg-blue-50 border-blue-500 border p-4 pr-10 rounded-lg text-blue-800"
      >
        <div class="flex flex-row items-center gap-3">
          <InfoCircle size="30" />
          <div class="flex flex-col">
            <p class="text-3xl">3</p>
            <div>Ballot Questions</div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center bg-orange-50 border-orange-500 border p-4 pr-10 rounded-lg text-orange-600"
      >
        <div class="flex flex-row items-center gap-3">
          <Setting4 size="30" />
          <div class="flex flex-col">
            <p class="text-3xl">12</p>
            <div>Ballot Options</div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center bg-green-50 border-green-500 border p-4 pr-10 rounded-lg text-green-800"
      >
        <div class="flex flex-row items-center gap-3">
          <People size="30" />
          <div class="flex flex-col">
            <p class="text-3xl">58</p>
            <div>Registered Voters</div>
          </div>
        </div>
      </div>
    </section>

    <div class="flex flex-col gap-5 border-black/20 bg-white border p-5 rounded-lg sm:w-1/2">
      <div class="flex flex-col gap-1">
        <p class="font-semibold">Poll URL</p>
        <p class="text-xs">Accessible only after poll is launched</p>
      </div>
      <div class="flex flex-row flex-wrap gap-2">
        <input
          id="url"
          name="url"
          :value="ballot_url"
          readonly
          disabled
          class="block rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:leading-6"
        />
        <button
          @click="copyToClipboard"
          class="flex self-start justify-center items-center rounded-md bg-blue-100 px-3 py-1.5 text-sm leading-6 text-blue-800 shadow-sm hover:bg-indigo-200 focus-visible:outline-none"
        >
          Copy
        </button>
      </div>
    </div>
  </section>
</template>
