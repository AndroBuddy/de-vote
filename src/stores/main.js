import { defineStore } from 'pinia'

import { collapseHelper } from './helpers/collapse'
import { accountMenuHelper } from './helpers/popup'

import { useProductStore } from './api/products'
import { useBidderStore } from './api/bidders'

import { useSearchStore } from './search'
import { useNavGraphStore } from './navgraph'
import { useAnimeStore } from './anime'

export const useMainStore = defineStore('main', () => {
  return {
    collapseHelper,
    accountMenuHelper,
    useSearchStore,
    useNavGraphStore,
    useProductStore,
    useBidderStore,
    useAnimeStore
  }
})
