import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/Index'),
  },
  {
    path: '/config',
    name: 'config',
    component: () => import('@/views/Config'),
  },
  {
    path: '/build',
    name: 'build',
    component: () => import('@/views/Build'),
  },
  {
    path: '/localization',
    name: 'localization',
    component: () => import('@/views/Localization'),
  },
  {
    path: '/file-upload',
    name: 'file-upload',
    component: () => import('@/views/FileUpload'),
  },
  {
    path: '/event',
    name: 'event',
    component: () => import('@/views/Event'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
