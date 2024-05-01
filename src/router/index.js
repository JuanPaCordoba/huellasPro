import { createRouter, createWebHashHistory } from 'vue-router'
import AboutUsLanding from '@/views/AboutUsLanding.vue'
import ServicesLanding from '@/views/ServicesLanding.vue'
import ContactLanding from '@/views/ContactLanding.vue'

const routes = [
  {
    path: '/',
    name: 'servicesLanding',
    component: ServicesLanding
  },
  {
    path: '/aboutUsLanding',
    name: 'aboutUsLanding',
    component: AboutUsLanding
  },
  {
    path: '/contactLanding',
    name: 'contactLanding',
    component: ContactLanding
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
