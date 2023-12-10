<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
</script>

<template>
  <!-- Unused because I couldn't figure out how to common variables with components -->
  <TransitionRoot as="template" :show="useSignupStore().tos">
    <Dialog as="div" class="relative z-40" @close="useSignupStore().setTos()">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/5 backdrop-blur-lg transition-opacity" />
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
              class="relative transform overflow-hidden rounded-lg bg-white text-left transition-all sm:w-[48rem]"
            >
              <section
                class="flex flex-col gap-10 p-10 rounded-3xl w-full max-h-[90vh] overflow-scroll"
              >
                <DialogTitle class="flex flex-col gap-2">
                  <h1 class="text-2xl">Terms and Conditions for deVote</h1>
                </DialogTitle>
Hello
                <button
                  class="self-end flex justify-center items-center rounded-md bg-gray-800 px-4 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline-none mt-4"
                >
                  Agree & Continue
                </button>
              </section>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
