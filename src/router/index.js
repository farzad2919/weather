import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'GetCity',
      component: () => import('../views/GetCity.vue')
    },
    {
      path: '/Show',
      name: 'ShowCity',
      component: () => import('../views/ShowCityDetail.vue')
    }
  ]
})

export default router
