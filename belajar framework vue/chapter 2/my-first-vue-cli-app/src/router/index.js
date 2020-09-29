import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import ItemDetail from '../views/itemDetail.vue'
import BeforeCreateHook from '../views/BeforeCreateHook.vue'
// path berguna untuk alamat url untuk komponen yang telah kita buat
// name berguna untuk pelabelan dan memudahkan untuk debuging(sifat opsional)
// component berguna untuk menentukan component apa yang akan ditampilkan untuk url yang telah kita buat

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/item/:name',
    name: 'ItemDetail',
    component: ItemDetail
  },
  {
    path: '/before-create-hook',
    name: 'BeforeCreateHook',
    component: BeforeCreateHook
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router