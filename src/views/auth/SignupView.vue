<script setup>
import { ref } from 'vue'
import { authHelper } from '../../stores/auth/auth'
import { useSignupStore } from '../../stores/auth/signup'

import { ArrowLeft, ArrowRight, Eye, EyeSlash } from 'vue-iconsax'
import anime from 'animejs'
import IconLoader from '../../components/icons/IconLoader.vue'
import TermsModal from '../../components/parts/TermsModal.vue'

const authStore = authHelper()
const signupStore = useSignupStore()
const show = ref(false)

function testPass() {
  if (signupStore.password !== signupStore.confirmPassword) {
    return true
  } else {
    return false
  }
}

async function submit() {
  if (signupStore.nextStep) {
    await signupStore.signupUser()
  } else {
    signupStore.setNextStep()
  }
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
  <TermsModal />
  <section class="flex flex-col sm:items-center justify-center w-full h-full">
    <section class="flex flex-col gap-8">
      <div class="flex flex-col gap-1 transition-all">
        <h1>Get Started</h1>
        <h2 class="font-normal text-black/50">Create your auxhive account</h2>
      </div>

      <section class="flex flex-col justify-center sm:w-96">
        <form class="flex flex-col gap-4" @submit.prevent="submit" key="1">
          <Transition @enter="onEnter" @leave="onLeave" mode="out-in">
            <section v-if="!signupStore.nextStep">
              <div class="flex flex-col gap-2">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <input
                  v-model="signupStore.email"
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required="true"
                  class="block rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 sm:leading-6"
                />
              </div>

              <div class="flex flex-col gap-2 mt-2">
                <div class="flex items-center justify-between">
                  <label for="password" class="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div class="relative">
                  <input
                    v-model="signupStore.password"
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

              <div class="flex flex-col gap-2 mt-2">
                <div class="flex items-center justify-between">
                  <label for="password" class="block text-sm font-medium leading-6 text-gray-900">
                    Retype Password
                  </label>
                  <h4 class="text-red-600 font-semibold" v-if="testPass()">
                    Passwords do not match
                  </h4>
                </div>
                <input
                  v-model="signupStore.confirmPassword"
                  id="new-password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required="true"
                  class="block w-full rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 sm:leading-6"
                />
              </div>
            </section>

            <section v-else key="2">
              <div @click="signupStore.setPrevStep()" class="w-min pb-4">
                <ArrowLeft />
              </div>

              <div class="flex flex-col gap-2">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <input
                  v-model="signupStore.name"
                  id="name"
                  name="name"
                  type="name"
                  autocomplete="name"
                  required="true"
                  class="block rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 sm:leading-6"
                />
              </div>

              <div class="flex flex-col gap-2 mt-2">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <input
                  v-model="signupStore.username"
                  id="username"
                  name="username"
                  type="username"
                  autocomplete="username"
                  required="true"
                  class="block rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 sm:leading-6"
                />
              </div>
            </section>
          </Transition>

          <p class="text-xs">
            By creating an account you agree to our
            <span @click="signupStore.setTos()" class="underline text-blue-700 cursor-pointer"
              >Terms & Conditions</span
            >
          </p>

          <button
            type="submit"
            class="flex w-full justify-center items-center gap-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <IconLoader class="text-white w-4" v-if="signupStore.loader" />
            <span class="font-semibold" v-else>{{ signupStore.btnVal }}</span>
            <ArrowRight size="20" v-if="!signupStore.nextStep" />
          </button>
        </form>

        <p class="mt-6 text-center text-sm text-gray-500">
          Already a member?
          <button
            @click="authStore.setLogOut()"
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Log in here!
          </button>
        </p>
      </section>
    </section>
  </section>
</template>
