<script setup>
import { useMainStore } from '../stores/main'
import { onMounted } from 'vue';
import LogoutControl from './parts/LogoutControl.vue';

const store = useMainStore()
const navGraphStore = store.useNavGraphStore()
const collapseState = store.collapseHelper()

onMounted(() => {
  if (window.innerWidth < 1024) {
    collapseState.setCollapse()
  }
})
</script>

<template>
  <nav class="z-20 w-80 overflow-clip shrink-0" :class="[collapseState.collapsed ? 'w-[4.5rem]' : 'w-80']">
    <section class="flex flex-col gap-14 p-14 w-full bg-white h-screen rounded-tr-3xl rounded-br-3xl"
      :class="[collapseState.collapsed ? 'px-6 py-14' : 'p-14']">
      <section id="brand" class="cursor-pointer" :class="[collapseState.collapsed ? '-m-[0.4rem]' : 'm-0']"
        @click="$emit('slideInOut')">
        <div id="logo" class="bg-black text-white py-[0.3rem] px-[0.4rem] rounded-lg font-semibold text-sm absolute"
          :class="[collapseState.collapsed ? 'scale-100' : 'scale-0']">
          !m
        </div>
        <h1 :class="[collapseState.collapsed ? 'opacity-0' : 'opacity-100']">!much</h1>
      </section>
      <section class="flex flex-col justify-between flex-grow">
        <section class="flex flex-col gap-8 overflow-clip">
          <ul class="flex flex-col gap-8 text-black/40">
            <li v-for="(navItem, index) in navGraphStore.navGraph[0]" :key="index">
              <router-link :to="navItem.path" class="flex gap-4 items-center">
                <component class="shrink-0" :is="navItem.icon" />
                <span class="flex-grow whitespace-nowrap">{{ navItem.name }}</span>
              </router-link>
            </li>
          </ul>
          <div class="border-[1px]" />
          <ul class="flex flex-col gap-8 text-black/40">
            <li v-for="(navItem, index) in navGraphStore.navGraph[1]" :key="index">
              <router-link :to="navItem.path" class="flex gap-4 items-center">
                <component class="shrink-0" :is="navItem.icon" />
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