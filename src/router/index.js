import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/HistoryView.vue')
    },
    {
      path: '/request',
      name: 'request',
      component: () => import('../views/RequestView.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/AccountView.vue')
    },
    {
      path: '/camera',
      name: 'camera',
      component: () => import('../views/CameraView.vue')
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('../views/ActivityView.vue')
    }
  ]
})

export default router
