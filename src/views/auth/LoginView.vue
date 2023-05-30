<script setup>
import { ref } from 'vue'

import { authHelper } from '../../stores/auth/auth'
import { loginManager } from '../../stores/auth/login'
import { useProfileStore } from '../../stores/api/profile'

import { UserSquare, Eye, EyeSlash } from 'vue-iconsax'
import IconLoader from '../../components/icons/IconLoader.vue'

const store = authHelper()
const profileStore = useProfileStore()
const loginStore = loginManager()

const show = ref(false)

async function submit() {
  await loginStore.validateUser()
}
</script>

<template>
  <section class="flex flex-col sm:items-center justify-center w-full h-full">
    <section class="flex flex-col gap-8">
      <div class="flex flex-col gap-1">
        <h1>Welcome back</h1>
        <h2 class="font-normal text-black/50">Log in to your auxhive account</h2>
      </div>

      <router-link
        to="/"
        @click="loginStore.setGuest()"
        class="flex gap-3 items-center justify-center border-black/20 border p-2 rounded-lg sm:w-96 hover:bg-black/5 transition-colors"
      >
        <UserSquare size="20" />
        <h3>Log in as Guest User</h3>
      </router-link>

      <section class="flex gap-4 items-center justify-center">
        <div class="border-[1px] flex-grow" />
        <span class="text-black/40">OR</span>
        <div class="border-[1px] flex-grow" />
      </section>

      <section class="flex flex-col justify-center">
        <form class="flex flex-col gap-4" @submit.prevent="submit">
          <div class="flex flex-col gap-2">
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900 after:content-['*']"
            >
              Email
            </label>
            <input
              v-model="profileStore.userMail"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required="true"
              class="block rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 sm:leading-6"
            />
          </div>

          <div class="flex flex-col">
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900 after:content-['*']"
              >
                Password
              </label>
            </div>
            <div class="mt-2 relative">
              <input
                v-model="profileStore.userPassword"
                id="password"
                name="password"
                :type="[show ? 'text' : 'password']"
                autocomplete="current-password"
                required="true"
                class="block w-full rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 sm:leading-6"
              />
              <div
                class="absolute inset-y-0 right-0 p-3 flex items-center text-sm leading-5 cursor-pointer"
              >
                <EyeSlash size="20" @click="show = true" :class="[show ? 'hidden' : 'block']" />
                <Eye size="20" @click="show = false" :class="[show ? 'block' : 'hidden']" />
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="flex w-full justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-none"
            :class="{ 'bg-red-600 hover:bg-red-500': loginStore.btnWarn }"
          >
            <IconLoader class="text-white w-4" v-if="loginStore.isLoaded" />
            <span class="font-semibold" v-else>{{ loginStore.loginMessage }}</span>
          </button>
        </form>

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
