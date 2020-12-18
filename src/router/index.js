import Vue from 'vue'
import VueRouter from 'vue-router'
import centerRouter from './routes/Center'
import cinemasRouter from './routes/Cinemas'
import filmsRouter from './routes/Films'

Vue.use(VueRouter)

const routes = [

  centerRouter,
  cinemasRouter,
  filmsRouter,
  {path:'/',redirect:'/films'}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
