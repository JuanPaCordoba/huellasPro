import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserLogin from '@/components/Login/UserLogin.vue'
import BarSide from '@/components/sideBar/barSide.vue'
import DashAdminMain from '@/components/sideBar/dashAdminMain.vue'
import TablaDatos from '@/components/table/TablaDatos.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/table',
    name: 'table',
    component: TablaDatos
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashAdminMain
  },
  {
    path: '/spa/dashboard',
    name: 'spa/dashboard',
    component: BarSide
  },
  {
    path: '/login',
    name: 'login',
    component: UserLogin
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
