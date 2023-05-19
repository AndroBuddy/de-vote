<script setup>
import { onMounted, ref } from 'vue'
import { useMainStore } from '../stores/main'
import { loginManager } from '../stores/helpers/login'
import LoginHeader from '../components/login/LoginHeader.vue'

import IconGoogle from '../components/icons/IconGoogle.vue'
import IconGuest from '../components/icons/IconGuest.vue'

const store = useMainStore().authHelper()
onMounted(() => {
  store.setLogOut()
})

const isValid = ref('Log in')
const valControl = ref(false)

const authStore = loginManager()
function verifyLogin() {
  if (authStore.verifyUser()) {
    store.isAuth = true
    store.setLogIn()
  } else {
    isValid.value = 'Invalid credentials • Try again'
    valControl.value = true
  }
}
</script>

<template>
  <main class="flex flex-col items-center lg:items-start w-screen h-screen p-6">
    <LoginHeader />
    <section class="flex flex-col sm:items-center justify-center w-full h-full">
      <section class="flex flex-col gap-8">
        <div class="flex flex-col gap-1">
          <h1>Welcome back</h1>
          <h2 class="font-normal text-black/50">Log in to your !much account</h2>
        </div>

        <section class="flex flex-col gap-4">
          <button
            class="flex gap-3 items-center justify-center border-black/20 border p-2 rounded-lg sm:w-96 hover:bg-black/5 transition-colors"
          >
            <IconGoogle />
            <h3>Log in with Google</h3>
          </button>

          <router-link
            to="/"
            @click="store.setGuest()"
            class="flex gap-3 items-center justify-center border-black/20 border p-2 rounded-lg sm:w-96 hover:bg-black/5 transition-colors"
          >
            <IconGuest />
            <h3>Sign in as Guest User</h3>
          </router-link>
        </section>

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
                v-model="authStore.userMail"
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
                <div class="text-sm">
                  <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div class="mt-2">
                <input
                  v-model="authStore.userPassword"
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required=""
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-spacing-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <router-link
              to="/"
              @click="verifyLogin()"
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              :class="{ 'bg-red-600 hover:bg-red-500': valControl }"
            >
              {{ isValid }}
            </router-link>
          </div>

          <p class="mt-6 text-center text-sm text-gray-500">
            New here?
            <router-link
              to="/signup"
              @click="store.setSignUp()"
              class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign up now!
            </router-link>
          </p>
        </section>
      </section>
    </section>
  </main>
</template>
