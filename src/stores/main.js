import { defineStore } from 'pinia'

import { authHelper } from './helpers/auth'
import { collapseHelper } from './helpers/collapse'
import { accountMenuHelper } from './helpers/account'

import { useProfileStore } from './api/profile'
import { useProductStore } from './api/products'
import { useProductInfoStore } from './api/productinfo'
import { useBidderStore } from './api/bidders'

import { useSearchStore } from './search'
import { useNavGraphStore } from './navgraph'
import { useAnimeStore } from './anime'

export const useMainStore = defineStore('main', () => {
  return {
    collapseHelper,
    authHelper,
    accountMenuHelper,
    useProfileStore,
    useSearchStore,
    useNavGraphStore,
    useProductStore,
    useProductInfoStore,
    useBidderStore,
    useAnimeStore
  }
})
