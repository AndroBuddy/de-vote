<script setup>
import VoterHeaderBar from '../components/parts/VoterHeaderBar.vue';

</script>

<template>
  <!-- Header -->
  <VoterHeaderBar />
  <!-- Main page -->
  <section class="flex flex-col sm:items-center pt-20 w-full h-full bg-gray-100">
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
