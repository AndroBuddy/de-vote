<script setup>
import { ref } from 'vue'
import { useMainStore } from '../../stores/main'

import IconHide from '../../components/icons/IconHide.vue'
import IconShow from '../../components/icons/IconShow.vue'

const store = useMainStore().authHelper()
const show = ref(false)
</script>

<template>
  <section class="flex flex-col sm:items-center justify-center w-full h-full">
    <section class="flex flex-col gap-8">
      <div class="flex flex-col gap-1">
        <h1>Sign up</h1>
        <h2 class="font-normal text-black/50">Create a new !much account</h2>
      </div>

      <section class="flex flex-col justify-center sm:w-96">
        <form class="flex flex-col gap-4" action="#" method="POST">
          <div class="flex flex-col gap-2">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
              Email*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="block rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div class="flex flex-col">
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">
                Password*
              </label>
            </div>
            <div class="mt-2 relative">
              <input
                id="new-password"
                name="password"
                :type="[show ? 'text' : 'password']"
                autocomplete="current-password"
                required="3"
                class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-spacing-0 sm:text-sm sm:leading-6"
              />
              <div
                class="absolute inset-y-0 right-0 p-3 flex items-center text-sm leading-5 cursor-pointer"
              >
                <IconHide @click="show = true" :class="[show ? 'hidden' : 'block']" />
                <IconShow @click="show = false" :class="[show ? 'block' : 'hidden']" />
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">
                Re enter Password*
              </label>
            </div>
            <div class="mt-2">
              <input
                id="retype-password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-spacing-0 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign Up
          </button>
        </form>

        <p class="mt-6 text-center text-sm text-gray-500">
          Already a member?
          <button
            @click="store.setLogOut()"
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Log in here!
          </button>
        </p>
      </section>
    </section>
  </section>
</template>
