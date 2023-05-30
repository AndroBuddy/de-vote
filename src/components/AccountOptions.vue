<script setup>
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'

import { useMainStore } from '../stores/main'
import { useProfileStore } from '../stores/api/profile'

import { vsxIcon } from 'vue-iconsax'

import LogoutControl from './parts/LogoutControl.vue'

const store = useMainStore()
const navStore = store.useNavGraphStore()
const profileStore = useProfileStore()
const dialog = store.accountMenuHelper()
</script>

<template>
  <TransitionRoot as="template" :show="dialog.accountMenu">
    <Dialog as="div" class="relative z-20" @close="dialog.setAccountMenu()">
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
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
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
              class="relative transform overflow-hidden rounded-lg bg-white text-left transition-all sm:max-w-lg"
            >
              <nav class="flex flex-col gap-10 p-6 w-96 bg-white rounded-3xl dialog">
                <div class="shrink-0 mt-4">
                  <div class="flex gap-4 items-center">
                    <img
                      :src="profileStore.userAccount.profileUrl"
                      class="w-12 h-12 rounded-full flex items-center justify-center"
                      v-if="profileStore.userAccount.profileUrl"
                    />
                    <div
                      class="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center capitalize"
                      v-else
                    >
                      {{ profileStore.userAccount.name[0] }}
                    </div>
                    <span class="flex flex-col">
                      <h3>{{ profileStore.userAccount.name }}</h3>
                      <h4>{{ profileStore.userAccount.username }}</h4>
                    </span>
                  </div>
                </div>
                <ul class="flex flex-col justify-between gap-6 text-gray-400 w-full">
                  <li v-for="(navItem, index) in navStore.navGraph[1]" :key="index">
                    <router-link
                      :to="navItem.path"
                      class="flex gap-4 items-center focus:ring-0"
                      @click="dialog.setAccountMenu()"
                    >
                      <vsx-icon
                        class="shrink-0"
                        :iconName="navItem.icon"
                        size="20"
                        type="linear"
                      />
                      <span class="flex-grow whitespace-nowrap">{{ navItem.name }}</span>
                    </router-link>
                  </li>
                  <div class="border-[1px]" />
                  <LogoutControl />
                </ul>
              </nav>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
