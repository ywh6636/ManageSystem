import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home/index.vue'),
    },
    {
      path: '/bidding',
      name: 'bidding',
      component: () => import('@/views/Bidding/index.vue'),
    },
    {
      path: '/dymatic',
      name: 'dymatic',
      component: () => import('@/views/DynamicForm/index.vue'),
    },
    {
      path: '/showComponent',
      name: 'showComponent',
      component: () => import('@/views/showComponent/index.vue'),
    },
  ],
})

export default router
