import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/components/DefaultLayout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: 'tools',
          component: () => import('@/views/tools/HomeIndex.vue'),
          redirect: { name: 'home' },
          children: [
            {
              path: 'home',
              name: 'home',
              component: () => import('@/views/HomeView.vue'),
            },
            {
              path: 'encrypt',
              name: 'encrypt',
              component: () => import('@/views/EncryptView.vue'),
            },
            {
              path: 'decrypt',
              name: 'decrypt',
              component: () => import('@/views/DecryptView.vue'),
            },
          ],
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/AboutView.vue'),
        },
        {
          path: 'error',
          name: 'error',
          component: () => import('@/views/ErrorView.vue'),
        },
      ],
    },
  ],
})

export default router
