<script setup>
import { useMainStore } from '../stores/main'
import LoginHeader from '../components/login/LoginHeader.vue'

import IconGoogle from '../components/icons/IconGoogle.vue'

const store = useMainStore().authHelper()
</script>

<template>
  <main class="flex flex-col items-center lg:items-start w-screen h-screen p-6">
    <LoginHeader />
    <section class="flex flex-col sm:items-center justify-center w-full h-full">
      <section class="flex flex-col gap-8">
        <div class="flex flex-col gap-1">
          <h1>Sign up</h1>
          <h2 class="font-normal text-black/50">Create a new !much account</h2>
        </div>

        <button
          class="flex gap-3 items-center justify-center border-black/20 border p-2 rounded-lg sm:w-96 hover:bg-black/5 transition-colors"
        >
          <IconGoogle />
          <h3>Sign up with Google</h3>
        </button>

        <section class="flex gap-4 items-center justify-center">
          <div class="border-[1px] flex-grow" />
          <span class="text-black/40">OR</span>
          <div class="border-[1px] flex-grow" />
        </section>

        <section class="flex flex-col justify-center">
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
              <div class="mt-2">
                <input
                  id="new-password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required="3"
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-spacing-0 sm:text-sm sm:leading-6"
                />
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
            <router-link to="/login" @click="store.setSignUp()" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Log in here!
            </router-link>
          </p>
        </section>
      </section>
    </section>
  </main>
</template>
