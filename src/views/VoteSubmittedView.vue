<script setup>
import IconBrand from '../components/icons/IconBrand.vue'

</script>

<template>
  <!-- Header -->
  <div class="px-4 md:px-8 py-5 bg-white border-b border-gray">
    <div class="overview text-lg font-bold flex flex-row gap-2">
      <IconBrand />
      <h1 class="lowercase">devote</h1>
    </div>
  </div>
  <!-- Main page -->
  <section class="flex flex-col sm:items-center pt-20 w-full h-full">
      <div class="flex flex-col gap-5 items-center justify-center sm:w-96">
        <h2>Election</h2>
        <div class="flex flex-col gap-3 bg-white border-black/20 border p-6 rounded-lg sm:w-96">
            <div class="flex flex-col gap-4 text-sm text-center">
                <span>
                    Thank you for voting. Results will be available at the end of the polls.
                </span>
                <div class="text-blue-700">
                    <a href="/">Return to Home</a>
                </div>
            </div>
        </div>
      </div>
  </section>
</template>
