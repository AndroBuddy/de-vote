<script setup>
import VoterHeaderBar from '../components/parts/VoterHeaderBar.vue';

let results = [
  { votes: 18, name: 'Narendra Modi', color: "bg-blue-800" },
  { votes: 6, name: 'Joe Biden', color: "bg-green-600" },
  { votes: 25, name: 'Naga Tharun', color: "bg-orange-600" }
]
let totalVotes = 44

function calculateWidth(votes) {
  // Calculate the width percentage based on candidate.votes and totalVotes
  return Math.round((votes / totalVotes) * 100)
}
</script>

<template>
  <!-- Header -->
  <VoterHeaderBar />
  <!-- Main page -->
  <section class="flex flex-col sm:items-center pt-20 w-full h-full">
    <div class="flex flex-col gap-7 items-center w-full">
      <h2>Live Election Results</h2>
      <div class="flex flex-row gap-5">
        <div class="flex flex-col gap-7 items-center justify-center sm:w-96">
          <div v-for="candidate in results" v-bind:key="candidate"
            class="flex flex-col gap-2 bg-white border-black/20 border p-4 rounded-lg sm:w-96">
            <div class="flex flex-row justify-between">
              <span class=""> {{ candidate.name }} </span>
              {{ Math.round((candidate.votes / totalVotes) * 100) }}%
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div :class="[candidate.color, 'h-2.5', 'rounded-full']"
                :style="{ width: calculateWidth(candidate.votes) + '%' }"></div>
            </div>
            <span class="text-xs text-gray-600">{{ candidate.votes }} votes</span>
          </div>
        </div>
        <div class="flex flex-col bg-white border-black/20 border p-4 rounded-lg h-min">
          Total votes - {{ totalVotes }}
        </div>
      </div>
    </div>
  </section>
</template>
