<template>
  <div class="flex whitespace-nowrap flex-nowrap lg:flex-wrap overflow-auto gap-8 relative -ml-20 lg:ml-0 animate-pulse">
    <div
      v-for="i in 8"
      :key="i"
      class="flex flex-col gap-4 bg-white p-4 md:p-6 rounded-2xl w-80 shrink-0"
    >
      <div class="bg-gray-100 h-80 w-full" />
      <div class="bg-gray-100 h-6 w-24 rounded-2xl" />
      <div class="bg-blue-500/20 text-blue-500 h-6 w-32 rounded-xl" />
    </div>
  </div>
</template>
