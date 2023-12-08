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
      path: '/events/:id',
      name: 'eventDetails',
      component: () => import('../views/EventView.vue')
    },
    {
      path: '/friends',
      name: 'friends',
      component: () => import('../views/FriendsView.vue')
    }
  ]
})

export default router
