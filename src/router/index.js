import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Auth from '@/views/AuthView.vue'
import Categories from '@/views/CategoriesView.vue'
import Collection from '@/views/MyCollectionsView.vue'
import Blog from '@/views/BlogView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories
  },
  {
    path: '/collection',
    name: 'collection',
    component: Collection
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
