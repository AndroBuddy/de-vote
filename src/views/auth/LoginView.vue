<script setup>
import { onMounted, ref } from 'vue'

import { authHelper } from '../../stores/helpers/auth'
import { loginManager } from '../../stores/helpers/login'

import IconGuest from '../../components/icons/IconGuest.vue'
import IconHide from '../../components/icons/IconHide.vue'
import IconShow from '../../components/icons/IconShow.vue'
import IconLoader from '../../components/icons/IconLoader.vue'

import { useProfileStore } from '../../stores/api/profile'

const store = authHelper()
onMounted(() => {
  store.setLogOut()
})

const loginAuth = loginManager()
const profileStore = useProfileStore()

const show = ref(false)
</script>

<template>
  <section class="flex flex-col sm:items-center justify-center w-full h-full">
    <section class="flex flex-col gap-8">
      <div class="flex flex-col gap-1">
        <h1>Welcome back</h1>
        <h2 class="font-normal text-black/50">Log in to your !much account</h2>
      </div>

      <router-link
        to="/"
        @click="store.setGuest()"
        class="flex gap-3 items-center justify-center border-black/20 border p-2 rounded-lg sm:w-96 hover:bg-black/5 transition-colors"
      >
        <IconGuest />
        <h3>Sign in as Guest User</h3>
      </router-link>

      <section class="flex gap-4 items-center justify-center">
        <div class="border-[1px] flex-grow" />
        <span class="text-black/40">OR</span>
        <div class="border-[1px] flex-grow" />
      </section>

      <section class="flex flex-col justify-center">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
              Email*
            </label>
            <input
              v-model="loginAuth.userMail"
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
                v-model="loginAuth.userPassword"
                id="password"
                name="password"
                :type="[show ? 'text' : 'password']"
                autocomplete="current-password"
                required=""
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

          <button
            @click="profileStore.validateUser()"
            type="submit"
            class="flex w-full justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            :class="{ 'bg-red-600 hover:bg-red-500': profileStore.btnWarn }"
          >
            <IconLoader v-if="profileStore.isLoaded" />
            <span v-else>{{ profileStore.loginMessage }}</span>
          </button>
        </div>

        <p class="mt-6 text-center text-sm text-gray-500">
          New here?
          <button
            @click="store.setSignUp()"
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign up now!
          </button>
        </p>
      </section>
    </section>
  </section>
</template>
