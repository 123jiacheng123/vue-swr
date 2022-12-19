import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import threeD from '../views/css/3d.vue'
import randomRotate from '../views/css/randomRotate.vue'

import Container from '../views/Container.vue'
import NotFound from '../views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/css',
      name: 'threeD',
      component: Container,
      children: [
        {
          path: '3d',
          component: threeD
        },
        {
          path: 'random3d',
          component: randomRotate
        }
      ],
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ]
})

export default router
