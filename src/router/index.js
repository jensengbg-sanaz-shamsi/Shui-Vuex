import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/flow',
    name: 'Flows',
    component: () => import('../views/Flows.vue')
  },
  {
    path: '/register',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/newFlow',
    name: 'NewFlow',
    component: () => import('../views/NewFlow.vue')
  },
  {
    path: '/removed',
    name: 'RemovedUser',
    component: () => import('../views/RemovedUser.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
