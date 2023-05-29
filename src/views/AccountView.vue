<script setup>
import GuestLogin from '../components/parts/GuestLogin.vue'
import { profileUpdate } from '../stores/helpers/update'
import { useProfileStore } from '../stores/api/profile'

const profileStore = useProfileStore()
const pUpdate = profileUpdate()
</script>

<template>
  <section class="flex flex-col px-4 pb-32 lg:pb-12 md:px-14 flex-grow gap-12">
    <section class="flex flex-col xl:self-center h-full container">
      <div
        class="flex flex-col items-center justify-center center h-full self-center lg:mb-32"
        v-if="profileStore.userAccount.id === 'guest'"
      >
        <GuestLogin />
      </div>

      <section class="flex flex-col gap-10 transition-transform" v-else>
        <section class="flex flex-col sm:flex-row items-center gap-6">
          <img
            :src="profileStore.userAccount.profileUrl"
            class="w-20 sm:w-32 h-20 sm:h-32 rounded-3xl border-spacing-1 border-white bg-white flex items-center justify-center"
            v-if="profileStore.userAccount.profileUrl"
          />
          <div
            class="w-20 sm:w-32 h-20 sm:h-32 rounded-3xl border-spacing-1 border-white bg-white flex items-center justify-center capitalize text-6xl"
            v-else
          >
            {{ profileStore.userAccount.name[0] }}
          </div>
          <div class="text-center sm:text-start">
            <h1>{{ profileStore.userAccount.name }}</h1>
            <h2 class="text-black/30 font-normal">{{ profileStore.userAccount.username }}</h2>
          </div>
        </section>

        <section class="flex flex-col gap-6">
          <div>
            <h2>Your Profile</h2>
            <p class="text-sm text-black/40">Review your profile details here.</p>

            <section class="flex gap-4 mt-4" v-if="pUpdate.updateFields">
              <button
                @click="pUpdate.setUpdateFields()"
                class="self-end flex w-32 justify-center items-center rounded-md border border-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm focus-visible:outline-none"
              >
                Cancel
              </button>
              <button
                class="self-end flex w-32 justify-center items-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline-none"
              >
                Update
              </button>
            </section>
            <button
              @click="pUpdate.setUpdateFields()"
              class="self-end flex justify-center items-center rounded-md bg-gray-800 px-4 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline-none mt-4"
              v-else
            >
              Change details
            </button>
          </div>

          <div class="border-[1px]" />

          <div class="flex flex-col gap-6 lg:w-[40rem]">
            <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
              <div class="text-sm text-gray-900">
                <span class="font-semibold">Name</span>
                <p class="text-black/40">Set your name.</p>
              </div>
              <input
                v-model="pUpdate.name"
                :placeholder="profileStore.userAccount.name"
                id="name"
                name="name"
                type="name"
                :disabled="!pUpdate.updateFields"
                class="rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-200 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 sm:leading-6 text-sm text-gray-500 sm:w-72"
              />
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
              <div class="text-sm text-gray-900">
                <span class="font-semibold">Username</span>
                <p class="text-black/40">Set your username.</p>
              </div>
              <input
                v-model="pUpdate.username"
                :placeholder="profileStore.userAccount.username"
                id="username"
                name="username"
                type="username"
                :disabled="!pUpdate.updateFields"
                class="rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-200 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 sm:leading-6 text-sm text-gray-500 sm:w-72"
              />
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
              <div class="text-sm text-gray-900">
                <span class="font-semibold">Email</span>
                <p class="text-black/40">Set your email address.</p>
              </div>
              <input
                v-model="pUpdate.email"
                :placeholder="profileStore.userAccount.email"
                id="email"
                name="email"
                type="email"
                :disabled="!pUpdate.updateFields"
                class="rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-200 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 sm:leading-6 text-sm text-gray-500 sm:w-72"
              />
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
              <div class="text-sm text-gray-900">
                <span class="font-semibold">Profile Image</span>
                <p class="text-black/40">Set your profile image url.</p>
              </div>
              <input
                v-model="pUpdate.url"
                :placeholder="profileStore.userAccount.profileUrl"
                id="url"
                name="url"
                type="url"
                :disabled="!pUpdate.updateFields"
                class="rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-200 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 sm:leading-6 text-sm text-gray-500 sm:w-72"
              />
            </div>

            <div class="text-gray-400 flex sm:items-center justify-between text-sm">
              <span>User ID</span>
              <p>{{ profileStore.userAccount.id }}</p>
            </div>
          </div>
        </section>
      </section>
    </section>
  </section>
</template>
