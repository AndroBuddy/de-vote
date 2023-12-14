<script setup>
import { InfoCircle, People, Setting4, ExportCircle } from 'vue-iconsax'
import { ref } from 'vue'
const ballot_url = ref('https://devote.com/aiDjfdKuyfwuefgwuifrwbi')
const preview_url = ref('https://devote.com/yftyftyrtberqwetbDbrg')

/**
* @param {any} url
*/
function copyToClipboard(url) {
  const textToCopy = url
  navigator.clipboard.writeText(textToCopy).catch((err) => {
    console.error('Could not copy text: ', err)
  })
}
</script>

<template>
  <!-- Header -->
  <div
    class="flex justify-between items-center px-4 md:px-8 py-5 bg-white border-b border-gray"
  >
    <div class="text-lg font-bold">Overview</div>
    <section class="flex gap-6">
      <div class="flex flex-col text-xs">
        <div class="flex gap-1">
          Start Date
          <button>
            <ExportCircle size="12" style="color: blue" />
          </button>
        </div>
        <div>Dec 15 2023, 12:00PM</div>
      </div>
      <div class="flex flex-col text-xs">
        <div class="flex gap-1">
          End Date
          <button>
            <ExportCircle size="12" style="color: blue" />
          </button>
        </div>
        <div>Dec 15 2023, 6:00PM</div>
      </div>
    </section>
  </div>
  <section class="flex flex-col pt-10 px-4 pb-32 md:pb-12 md:px-14 flex-grow gap-12">
    <!-- Ballot Info -->
    <section class="flex flex-row gap-5 xl:self-center">
      <div
        class="flex flex-col items-center justify-center bg-blue-50 border-blue-500 border p-4 pr-10 rounded-lg text-blue-800">
        <div class="flex flex-row items-center gap-3">
          <InfoCircle size="30" />
          <div class="flex flex-col">
            <p class="text-3xl">3</p>
            <div>Ballot Questions</div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center bg-orange-50 border-orange-500 border p-4 pr-10 rounded-lg text-orange-600">
        <div class="flex flex-row items-center gap-3">
          <Setting4 size="30" />
          <div class="flex flex-col">
            <p class="text-3xl">12</p>
            <div>Ballot Options</div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center bg-green-50 border-green-500 border p-4 pr-10 rounded-lg text-green-800">
        <div class="flex flex-row items-center gap-3">
          <People size="30" />
          <div class="flex flex-col">
            <p class="text-3xl">58</p>
            <div>Registered Voters</div>
          </div>
        </div>
      </div>
    </section>

    <section class='grid grid-cols-2 gap-6'>
      <div class="flex flex-col gap-5 border-black/20 bg-white border p-5 rounded-lg">
        <div class="flex flex-col gap-1">
          <p class="font-semibold">Poll URL</p>
          <p class="text-xs">Accessible only after poll is launched</p>
        </div>
        <div class="flex flex-row flex-wrap gap-2">
          <input id="url" name="url" :value="ballot_url" readonly disabled
            class="block rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:leading-6 flex-grow" />
          <button @click="copyToClipboard(ballot_url)"
            class="flex self-start justify-center items-center rounded-md bg-blue-100 px-3 py-1.5 text-sm leading-6 text-blue-800 shadow-sm hover:bg-indigo-200 focus-visible:outline-none">
            Copy
          </button>
        </div>
      </div>
      <div class="flex flex-col gap-5 border-black/20 bg-white border p-5 rounded-lg">
        <div class="flex flex-col gap-1">
          <p class="font-semibold">Preview URL</p>
          <p class="text-xs">To preview voting session</p>
        </div>
        <div class="flex flex-row flex-wrap gap-2">
          <input id="url" name="url" :value="preview_url" readonly disabled
            class="block rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:leading-6 flex-grow" />
          <button @click="copyToClipboard(preview_url)"
            class="flex self-start justify-center items-center rounded-md bg-blue-100 px-3 py-1.5 text-sm leading-6 text-blue-800 shadow-sm hover:bg-indigo-200 focus-visible:outline-none">
            Copy
          </button>
        </div>
      </div>
      <div class="flex flex-col gap-5 border-black/20 bg-white border p-5 rounded-lg">
        <div class="flex flex-col gap-1">
          <p class="font-semibold">Voter's Registration URL</p>
          <p class="text-xs">For elligible voters to register</p>
        </div>
        <div class="flex flex-row flex-wrap gap-2">
          <input id="url" name="url" :value="preview_url" readonly disabled
            class="block rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:leading-6 flex-grow" />
          <button @click="copyToClipboard(preview_url)"
            class="flex self-start justify-center items-center rounded-md bg-blue-100 px-3 py-1.5 text-sm leading-6 text-blue-800 shadow-sm hover:bg-indigo-200 focus-visible:outline-none">
            Copy
          </button>
        </div>
      </div>
    </section>
  </section>
</template>
