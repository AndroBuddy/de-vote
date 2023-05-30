import { defineStore } from 'pinia'
import anime from 'animejs/lib/anime.es.js'
import { collapseHelper } from './helpers/collapse'

export const useAnimeStore = defineStore('anime', () => {
  const store = collapseHelper()

  function slideIn() {
    anime
      .timeline({
        targets: 'nav',
        width: ['20rem', '4.5rem'],
        duration: 1000,
        easing: 'easeInOutSine'
      })
      .add({
        targets: 'nav > section',
        padding: ['3.5rem 3.5rem 3.5rem 3.5rem', '3.5rem 1.5rem 3.5rem 1.5rem']
      })

    anime
      .timeline({
        targets: '#brand > h1',
        opacity: [1, 0]
      })
      .add({
        targets: '#brand',
        margin: [0, '0 0 0 -0.4rem']
      })

    anime({
      targets: '#logo',
      scale: [0, 1],
      delay: 600
    })

    store.setCollapse()
  }

  function slideOut() {
    anime
      .timeline({
        targets: 'nav',
        width: ['4.5rem', '20rem'],
        duration: 600,
        easing: 'easeInOutSine'
      })
      .add({
        targets: 'nav > section',
        padding: ['3.5rem 1.5rem 3.5rem 1.5rem', '3.5rem 3.5rem 3.5rem 3.5rem']
      })

    anime({
      targets: '#logo',
      scale: [1, 0]
    })

    anime
      .timeline({
        targets: '#brand',
        margin: ['0 0 0 -0.4rem', 0]
      })
      .add({
        targets: '#brand > h1',
        opacity: [0, 1]
      })

    store.setCollapse()
  }

  return { slideIn, slideOut }
})
