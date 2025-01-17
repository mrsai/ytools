import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/components/layout/DefaultLayout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: 'tools',
          component: () => import('@/views/tools/Index.vue'),
          redirect: { name: 'home' },
          children: [
            {
              path: 'home',
              name: 'home',
              component: () => import('@/views/tools/home/HomeView.vue'),
            },
            {
              path: 'encrypt',
              name: 'encrypt',
              component: () => import('@/views/tools/encrypt/EncryptView.vue'),
            },
            {
              path: 'decrypt',
              name: 'decrypt',
              component: () => import('@/views/tools/decrypt/DecryptView.vue'),
            },
          ],
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/about/AboutView.vue'),
        },
        {
          path: 'error',
          name: 'error',
          component: () => import('@/views/error/ErrorView.vue'),
        },
      ],
    },
  ],
})

export default router
