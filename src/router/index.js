import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Transcript from '../views/Transcript.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/trsct',
    name: 'Transcript',
    component: Transcript
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
