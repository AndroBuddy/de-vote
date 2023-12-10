<script setup>
const people = [
  {
    name: 'Anirudh Chimpidi',
    role: 'Frontend | UI/UX Design',
    roll: 'SE20UCSE019',
    imageUrl:
      'https://media.licdn.com/dms/image/C4D03AQFgx7qsXrSewQ/profile-displayphoto-shrink_200_200/0/1662054895906?e=1691020800&v=beta&t=3rfvnuMFG8Q7TYSUT560FOY96Fb9Trmupwb0zfBaBI4'
  },
  {
    name: 'Sri Harsha Vandanapu',
    role: 'Backend | Database',
    roll: 'SE20UCSE184',
    imageUrl: 'https://github.com/aryan-sri-harsha.png'
  },
  {
    name: 'Naga Tharun Makkena',
    role: 'Backend | Auth',
    roll: 'SE20UCSE105',
    imageUrl: 'https://github.com/Naga-Tharun.png'
  },
  {
    name: 'Srikar Tadeparti',
    role: 'Feature Developer',
    roll: 'SE20UCSE186',
    imageUrl: 'https://github.com/Srikar-D-Palmite.png'
  },
  {
    name: 'Keshav Garg',
    role: 'Feature Developer',
    roll: 'SE20UCSE065',
    imageUrl: 'https://github.com/gargkeshav2002.png'
  },
  {
    name: 'Vivek Dhir',
    role: 'Tester',
    roll: 'SE20UCSE159',
    imageUrl: 'https://github.com/vivekdhir77.png'
  }
]
</script>

<template>
  <section class="flex flex-col px-4 pb-32 md:pb-12 md:px-14 flex-grow gap-12">
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
