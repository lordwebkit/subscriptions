import { createRouter, createWebHistory } from 'vue-router'
import Subscriptions from '@/views/Subscriptions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'subscriptions',
      component: Subscriptions
    },
  ]
})

export default router
