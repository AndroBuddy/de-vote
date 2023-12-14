<script setup>
import { ref } from 'vue'
import anime from 'animejs'
import router from '../router';
import VoterHeaderBar from '../components/parts/VoterHeaderBar.vue';


let formPage = ref(2)

function nextFormPage() {
  formPage.value = formPage.value + 1
}

function validateDetails() {
  return true
}

async function submit() {
  if (validateDetails())
  {
    nextFormPage()
  }
}

async function submitForm() {
  router.push("/voter/submitted")
}

function onEnter(el, done) {
  anime({
    targets: el,
    opacity: [0, 1],
    translateX: [100, 0],
    duration: 300,
    easing: 'easeOutQuad',
    complete: done
  })
}

function onLeave(el, done) {
  anime({
    targets: el,
    opacity: [1, 0],
    translateX: [0, -100],
    duration: 300,
    easing: 'easeOutQuad',
    complete: done
  })
}
</script>

<template>
  <!-- Header -->
  <VoterHeaderBar />
  <!-- Main page -->
  <section class="flex flex-col sm:items-center pt-20 w-full h-full bg-gray-100">
    <Transition @enter="onEnter" @leave="onLeave" mode="out-in">
      <section v-if="formPage == 2">
        <div class="flex flex-col gap-3 items-center justify-center sm:w-96">
          <h2>Welcome to the Election</h2>
          Connect your wallet to get started
          <section class="flex flex-col justify-center">
            <button
              type="submit"
              @click="nextFormPage"
              class="flex w-full justify-center items-center rounded-md bg-blue-800 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline-none"
            >
              Connect Wallet
            </button>
          </section>
        </div>
      </section>
      <form @submit.prevent="submit" v-else-if="formPage == 3">
        <div class="flex flex-col gap-4 bg-white border-black/20 border p-6 rounded-lg sm:w-96">
          <h2>Enter your details to Vote</h2>
          <div class="flex flex-col gap-2">
            <div class="flex flex-row gap-5">
              <div class="flex flex-col gap-2">
                <label
                  for="first-name"
                  class="block text-sm font-medium leading-6 text-gray-900 after:content-['*']"
                >
                  First Name
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autocomplete="fname"
                  placeholder="First Name"
                  required="true"
                  class="block rounded-md border border-slate-300 w-full py-1.5 px-2 placeholder:text-gray-400 placeholder:text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:leading-6 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label
                  for="last-name"
                  class="block text-sm font-medium leading-6 text-gray-900 after:content-['*']"
                >
                  Last Name
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autocomplete="lname"
                  placeholder="Last Name"
                  required="true"
                  class="block rounded-md border border-slate-300 w-full py-1.5 px-2 placeholder:text-gray-400 placeholder:text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:leading-6 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label
              for="age"
              class="block text-sm font-medium leading-6 text-gray-900 after:content-['*']"
            >
              Age
            </label>
            <input
              id="age"
              name="age"
              type="number"
              autocomplete="age"
              placeholder="Age"
              required="true"
              class="block rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-400 placeholder:text-xs focus:outline-none focus:border-sky-500 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:ring-1 focus:ring-sky-500 sm:leading-6"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label
              for="region"
              class="block text-sm font-medium leading-6 text-gray-900 after:content-['*']"
            >
              Region
            </label>
            <input
              id="region"
              name="region"
              type="text"
              autocomplete="region"
              placeholder="Region"
              required="true"
              class="block rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-400 placeholder:text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:leading-6 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label
              for="voter-id"
              class="block text-sm font-medium leading-6 text-gray-900 after:content-['*']"
            >
              Voter ID (Aadhar)
            </label>
            <input
              id="voter-id"
              name="voter-id"
              type="text"
              autocomplete="voterID"
              placeholder="Voter ID"
              required="true"
              class="block rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-400 placeholder:text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:leading-6 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
            />
          </div>
          <button
            type="submit"
            class="flex w-full justify-center items-center rounded-md bg-blue-800 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline-none"
          >
            Log in to Vote
          </button>
        </div>
      </form>
      <section v-else-if="formPage == 4">
        <div class="flex flex-col gap-3 bg-white border-black/20 border p-6 rounded-lg sm:w-96">
          <form class="flex flex-col gap-4" @submit.prevent="submitForm">
            <span class="text-lg font-bold">Election</span>
            <span class="text-md">Choose your candidate</span>
            <ul
              class="w-full text-sm font-medium text-gray-900 bg-white border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <li class="w-full border-t border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center ps-3">
                  <input
                    id="list-radio-license"
                    type="radio"
                    value=""
                    name="list-radio"
                    required
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="list-radio-license"
                    class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Narendra Modi
                  </label>
                </div>
              </li>
              <li class="w-full border-t border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center ps-3">
                  <input
                    id="list-radio-id"
                    type="radio"
                    value=""
                    required
                    name="list-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="list-radio-id"
                    class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Joe Biden</label
                  >
                </div>
              </li>
              <li class="w-full border-t border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center ps-3">
                  <input
                    id="list-radio-military"
                    type="radio"
                    value=""
                    required
                    name="list-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="list-radio-military"
                    class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Naga Tharun</label
                  >
                </div>
              </li>
            </ul>
            <button
              type="submit"
              class="self-start flex justify-center items-center rounded-md bg-blue-800 px-4 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline-none mt-4"
            >
              Submit
          </button>
          </form>
        </div>
      </section>
    </Transition>
  </section>
</template>
