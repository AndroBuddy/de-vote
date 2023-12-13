<script setup>
import { ref } from 'vue'
import { People, Trash } from 'vue-iconsax'
import anime from 'animejs'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

let buildBallot = ref(true)
let optionModal = ref(false)

function toggleBuildBallot() {
  buildBallot.value = !buildBallot.value
}

function toggleModal() {
  optionModal.value = !optionModal.value
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
  <!-- Taken from buildBallotView -->
  <!-- Modal -->
  <TransitionRoot as="template" :show="optionModal">
    <Dialog as="div" class="relative z-40" @close="toggleModal">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left transition-all sm:w-[36rem]"
            >
              <section
                class="flex flex-col gap-5 p-10 rounded-3xl w-full max-h-[90vh] overflow-scroll"
              >
                <DialogTitle>
                  <h1 class="text-2xl">Add Voter</h1>
                </DialogTitle>

                <section class="flex flex-col justify-center">
                  <form class="flex flex-col gap-4" @submit.prevent="submit">
                    <div class="flex flex-col gap-2">
                      <label
                        for="email"
                        class="block text-sm font-medium leading-6 text-gray-900 after:content-['*']"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        placeholder="Email Address"
                        required="true"
                        class="block rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-400 placeholder:text-xs focus:outline-none focus:border-sky-500 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:ring-1 focus:ring-sky-500 sm:leading-6"
                      />
                    </div>
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
                            class="block rounded-md border border-slate-300 w-full py-1.5 px-2 placeholder:text-gray-400 placeholder:text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:leading-6"
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
                            class="block rounded-md border border-slate-300 w-full py-1.5 px-2 placeholder:text-gray-400 placeholder:text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col gap-2">
                      <label
                        for="wallet-id"
                        class="block text-sm font-medium leading-6 text-gray-900 after:content-['*']"
                      >
                        Wallet ID
                      </label>
                      <input
                        id="wallet-id"
                        name="wallet-id"
                        type="text"
                        autocomplete="walletID"
                        placeholder="Wallet ID"
                        required="true"
                        class="block rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-400 placeholder:text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:leading-6"
                      />
                    </div>
                    <div class="flex flex-col gap-2">
                      <label
                        for="email"
                        class="block text-sm font-medium leading-6 text-gray-900 after:content-['*']"
                      >
                        Passkey
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        placeholder="Passkey"
                        required="true"
                        class="block rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-400 placeholder:text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:leading-6"
                      />
                    </div>
                    <button
                      type="submit"
                      class="self-start flex justify-center items-center rounded-md bg-blue-800 px-4 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline-none mt-4"
                    >
                      Add Voter
                    </button>
                  </form>
                </section>
              </section>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <!-- Header -->
  <div
    class="px-4 md:px-8 pt-5 pb-3 rounded-bl-2xl bg-white border-b border-l border-gray flex flex-row justify-between"
  >
    <div class="overview text-lg font-bold">Voters</div>
    <div v-if="buildBallot" class="p-4"></div>
    <Transition @enter="onEnter" @leave="onLeave" mode="out-in">
      <section v-if="!buildBallot">
        <button
          type="submit"
          @click="toggleModal"
          class="flex self-start justify-center items-center rounded-md bg-blue-100 px-3 py-1.5 text-sm leading-6 text-blue-800 shadow-sm hover:bg-blue-200 focus-visible:outline-none"
        >
          Add Voter
        </button>
      </section>
    </Transition>
  </div>
  <!-- Main page -->
  <section class="flex flex-col sm:items-center pt-20 w-full h-full">
    <Transition @enter="onEnter" @leave="onLeave" mode="out-in">
      <section v-if="buildBallot">
        <div
          class="flex flex-col gap-3 items-center justify-center border-black/20 border p-10 rounded-lg sm:w-96"
        >
          <People size="40" />
          <h5>Add eligible voters</h5>
          <section class="flex flex-col justify-center">
            <button
              type="submit"
              @click="toggleBuildBallot"
              class="flex w-full justify-center items-center rounded-md bg-blue-800 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline-none"
            >
              Add Voter
            </button>
          </section>
        </div>
      </section>

      <section v-else key="2">
        <div class="border border-black/20 relative overflow-x-auto sm:rounded-lg">
          <table
            class="w-full table-auto text-left rtl:text-right text-gray-600 dark:text-gray-400"
          >
            <thead class="text-black font-semibold bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">Email Address</th>
                <th scope="col" class="px-6 py-3">Wallet ID</th>
                <th scope="col" class="px-6 py-3">First Name</th>
                <th scope="col" class="px-6 py-3">Last Name</th>
                <th scope="col" class="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td class="px-6 py-4">example@mahindrauniversity.edu.in</td>
                <td class="px-6 py-4">0x12345678</td>
                <td class="px-6 py-4">DeVote</td>
                <td class="px-6 py-4">Team</td>
                <td class="px-6 py-4">
                  <button>
                    <Trash style="color: red" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="pt-6"></div>
      </section>
    </Transition>
  </section>
</template>
