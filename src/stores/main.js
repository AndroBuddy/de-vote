import { defineStore } from 'pinia'

import { collapseHelper } from './helpers/collapse'
import { accountMenuHelper } from './helpers/popup'

import { useProductStore } from './api/products'
import { useBidderStore } from './api/bidders'

import { useSearchStore } from './search'
import { useNavGraphStore } from './navgraph'
import { useAnimeStore } from './anime'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const appName = ref('AuxHive')
  const dialogOpen = ref(false)

  function toggleDialog() {
    dialogOpen.value = !dialogOpen.value
  }

  return {
    appName,
    dialogOpen,
    collapseHelper,
    accountMenuHelper,
    useSearchStore,
    useNavGraphStore,
    useProductStore,
    useBidderStore,
    useAnimeStore,
    toggleDialog
  }
})
