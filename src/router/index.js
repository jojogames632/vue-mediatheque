import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/books',
    name: 'books',
    component: () => import(/* webpackChunkName: "login" */ '../views/BooksView.vue')
  },
  {
    path: '/add-book',
    name: 'add-book',
    component: () => import(/* webpackChunkName: "login" */ '../views/AddBookView.vue')
  },
  {
    path: '/profil',
    name: 'profil',
    component: () => import(/* webpackChunkName: "login" */ '../views/ProfilView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
