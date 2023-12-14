<script setup>
const people = [
  {
    name: 'Anirudh Chimpidi',
    role: 'Frontend | Integration',
    roll: 'SE20UCSE019',
    imageUrl:
      'https://github.com/AndroBuddy.png'
  },
  {
    name: 'Sri Harsha Vandanapu',
    role: 'Backend | Solidity',
    roll: 'SE20UCSE184',
    imageUrl: 'https://github.com/aryan-sri-harsha.png'
  },
  {
    name: 'Naga Tharun Makkena',
    role: 'Backend | Solidity',
    roll: 'SE20UCSE105',
    imageUrl: 'https://github.com/Naga-Tharun.png'
  },
  {
    name: 'Srikar Tadeparti',
    role: 'Frontend | UI/UX Design',
    roll: 'SE20UCSE186',
    imageUrl: 'https://github.com/Srikar-D-Palmite.png'
  },
  {
    name: 'Vineel Pentrala',
    role: 'Tester',
    roll: 'SE20UCSE226',
    imageUrl: 'https://github.com/vineelx.png'
  }
]
</script>

<template>
  <!-- Header -->
  <div class="flex justify-between items-center px-4 md:px-8 py-5 bg-white border-b border-gray">
    <div class="overview text-lg font-bold">About</div>
  </div>
  <section class="flex flex-col pt-10 px-4 pb-32 md:pb-12 md:px-14 flex-grow gap-12">
    <section class="flex flex-col gap-10 xl:self-center container">
      <div>
        <div class="flex flex-col max-w-7xl gap-x-8 gap-y-12">
          <div class="flex flex-col">
            <h1 class="tracking-tight text-gray-900">Meet the team</h1>
            <p class="text-base text-gray-600">
              The people behind deVote, an auction site for our software engineering project.
            </p>
          </div>
          <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            <li v-for="person in people" :key="person.name">
              <div class="flex items-center gap-x-6">
                <img class="h-16 w-16 rounded-full" :src="person.imageUrl" alt="" />
                <div>
                  <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {{ person.name }}
                  </h3>
                  <p class="text-sm leading-6">{{ person.roll }}</p>
                  <p class="text-sm font-semibold leading-6 text-blue-600">{{ person.role }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </section>
</template>
