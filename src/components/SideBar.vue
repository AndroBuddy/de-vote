<script setup>
import { useMainStore } from '../stores/main'
import { onMounted } from 'vue'
import LogoutControl from './parts/LogoutControl.vue'

import { vsxIcon } from 'vue-iconsax'
import IconBrand from './icons/IconBrand.vue'

const store = useMainStore()
const navGraphStore = store.useNavGraphStore()
const collapseState = store.collapseHelper()

onMounted(() => {
  if (window.innerWidth < 1280) {
    collapseState.collapseBar()
  }
})
</script>

<template>
  <nav
    class="z-30 w-80 overflow-clip h-screen shrink-0 fixed left-0 top-0 xl:static"
    :class="[collapseState.collapsed ? 'w-[4.5rem]' : 'w-80']"
  >
    <section
      class="flex flex-col gap-14 p-14 w-full bg-white h-full rounded-tr-3xl rounded-br-3xl overflow-scroll"
      :class="[collapseState.collapsed ? 'px-6 py-14' : 'p-14']"
    >
      <section
        id="brand"
        class="cursor-pointer"
        :class="[collapseState.collapsed ? '-m-[0.4rem]' : 'm-0']"
        @click="$emit('slideInOut')"
      >
        <IconBrand
          id="logo"
          class="w-8 h-8 absolute"
          :class="[collapseState.collapsed ? 'scale-100' : 'scale-0']"
        />
        <h1 class="lowercase" :class="[collapseState.collapsed ? 'opacity-0' : 'opacity-100']">
          {{ store.appName }}
        </h1>
      </section>
      <section class="flex flex-col justify-between flex-grow gap-10">
        <section class="flex flex-col gap-8 overflow-clip">
          <ul class="flex flex-col gap-8 text-gray-400">
            <li v-for="(navItem, index) in navGraphStore.navGraph[0]" :key="index">
              <router-link
                :to="navItem.path"
                class="hover:text-black transition-all duration-500 flex gap-4 items-center"
              >
                <vsx-icon class="shrink-0" :iconName="navItem.icon" size="20" type="linear" />
                <span class="flex-grow whitespace-nowrap">{{ navItem.name }}</span>
              </router-link>
            </li>
          </ul>
          <div class="border-[1px]" />
          <ul class="flex flex-col gap-8 text-gray-400">
            <li v-for="(navItem, index) in navGraphStore.navGraph[1]" :key="index">
              <router-link
                :to="navItem.path"
                class="hover:text-black transition-all duration-500 flex gap-4 items-center"
              >
                <vsx-icon class="shrink-0" :iconName="navItem.icon" size="20" type="linear" />
                <span class="flex-grow whitespace-nowrap">{{ navItem.name }}</span>
              </router-link>
            </li>
          </ul>
        </section>

        <LogoutControl />
      </section>
    </section>
  </nav>
</template>
