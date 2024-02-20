import { createRouter, createWebHistory } from 'vue-router'
import SubscriptionsView from '@/views/SubscriptionsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'subscriptions',
      component: SubscriptionsView
    }
  ]
})

export default router
