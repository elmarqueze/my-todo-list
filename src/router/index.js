import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../App.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/Todo.vue')
    },
    {
      path: '/articules',
      name: 'articules',
      component: () => import('../views/ArticulesOfTheDay.vue')
    }
  ]
})

export default router
