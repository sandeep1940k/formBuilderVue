import { createRouter, createWebHistory } from 'vue-router'
import FormBuilder from '../views/FormBuilder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'FormBuilder',
      component: FormBuilder
    }
  ]
})

export default router
