<script setup>
//   import 'vuesax/dist/vuesax.css' //Vuesax styles
//   import { vsDialog } from 'vuesax'
// import { WalletAdd } from 'vue-iconsax'
import { ref } from 'vue'
import { DirectboxDefault, Trash } from 'vue-iconsax'
import anime from 'animejs'
// import AddOptionModal from '../components/parts/AddOptionModal.vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

let buildBallot = ref(true)
let optionModal = ref(false)
let changePollTitle = ref(false)

function toggleBuildBallot() {
  buildBallot.value = !buildBallot.value
}

function toggleModal() {
  optionModal.value = !optionModal.value
}

function toggleChangePollTitle() {
  changePollTitle.value = !changePollTitle.value
}

function submitOption() {
  
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
                class="flex flex-col gap-10 p-10 rounded-3xl w-full max-h-[90vh] overflow-scroll"
              >
                <DialogTitle class="flex flex-col gap-2">
                  <h1 class="text-2xl">Add Option</h1>
                </DialogTitle>

                <section class="flex flex-col justify-center">
                  <form class="flex flex-col gap-4" @submit.prevent="submit">
                    <div class="flex flex-col gap-2">
                      <label
                        for="nominee"
                        class="block text-sm font-medium leading-6 text-gray-900 after:content-['*']"
                      >
                        Nominee Name
                      </label>
                      <input
                        id="nominee"
                        name="nominee"
                        type="text"
                        placeholder="Nominee"
                        required="true"
                        class="block rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-400 placeholder:text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:leading-6 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
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
                        placeholder="Region"
                        required="true"
                        class="block rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-400 placeholder:text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:leading-6 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                      />
                    </div>
                    <div class="flex flex-col gap-2">
                      <label
                        for="location"
                        class="block text-sm font-medium leading-6 text-gray-900 after:content-['*']"
                      >
                        Location
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="Location"
                        required="true"
                        class="block rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-400 placeholder:text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:leading-6 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                      />
                    </div>
                    <div class="flex flex-col gap-2">
                      <label
                        for="party"
                        class="block text-sm font-medium leading-6 text-gray-900 after:content-['*']"
                      >
                        Party
                      </label>
                      <input
                        id="party"
                        name="party"
                        type="text"
                        placeholder="Party"
                        required="true"
                        class="block rounded-md border border-slate-300 py-1.5 px-2 placeholder:text-gray-400 placeholder:text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:leading-6 invalid:border-red-200 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                      />
                    </div>
                    <button
                      type="submit"
                      @onclick="submitOption"
                      class="self-start flex justify-center items-center rounded-md bg-blue-800 px-4 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline-none mt-4"
                    >
                      Add
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
  <div class="flex justify-between items-center px-4 md:px-8 py-5 bg-white border-b border-gray">
    <div class="text-lg font-bold">Ballot</div>
  </div>
  <!-- Main page -->
  <section class="flex flex-col sm:items-center pt-20 w-full h-full">
    <Transition @enter="onEnter" @leave="onLeave" mode="out-in">
      <section v-if="buildBallot">
        <div
          class="flex flex-col gap-3 items-center justify-center border-black/20 border p-10 rounded-lg sm:w-96"
        >
          <DirectboxDefault size="40" />
          <h5>Build your first poll</h5>
          <section class="flex flex-col justify-center">
            <button
              type="submit"
              @click="toggleBuildBallot"
              class="flex w-full justify-center items-center rounded-md bg-blue-800 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline-none"
            >
              Build Ballot
            </button>
          </section>
        </div>
      </section>

      <section v-else key="2">
        <div class="flex flex-col gap-3 bg-white border-black/20 border p-6 rounded-lg sm:w-96">
          <div>
            <div class="flex flex-row justify-between">
              <form v-if="changePollTitle">
                <input />
              </form>
              <button @onclick="toggleChangePollTitle" v-else>
                <span
                  class="font-semibold leading-6 text-gray-900 overflow-clip text-ellipsis"
                  id="poll-title"
                >
                  Election Ballot
                </span>
              </button>
              <button @click="toggleBuildBallot" class="">
                <Trash style="color: red" />
              </button>
            </div>
            <p class="mt-1 truncate text-sm leading-5 text-gray-500">
              Add nominees to your election ballot
            </p>
          </div>
          <section class="flex gap-4 items-center justify-center pb-4">
            <div class="border flex-grow" />
          </section>
          <button
            type="submit"
            @click="toggleModal"
            class="flex self-start justify-center items-center rounded-md bg-blue-800 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline-none"
          >
            Add Nominee
          </button>
        </div>
      </section>
    </Transition>
  </section>
</template>
