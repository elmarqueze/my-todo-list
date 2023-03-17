import { createRouter, createWebHistory } from 'vue-router'
// import App from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      component: () => import('../views/ArticuleOfTheDay.vue')
    }
  ]
})

export default router
