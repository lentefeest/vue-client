import Vue from 'vue'
import Router from 'vue-router'
import stream from '@/components/stream'
import music from '@/components/music'
import script from '@/components/script'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'stream',
      component: stream
    },
    {
      path: '/script',
      name: 'script',
      component: script
    },
    {
      path: '/music',
      name: 'music',
      component: music
    }
  ]
})
