import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import ItemDetail from '../views/itemDetail.vue'
import BeforeCreateHook from '../views/beforeCreateHook.vue'
import CreatedHook from '../views/createdHook.vue'
import BeforeMountHook from '../views/beforeMountHook.vue'
import MountedHook from '../views/mountedHook.vue'
import BeforeUpdateHook from '../views/beforeUpdateHook.vue'
import UpdatedHook from '../views/updatedHook.vue'
import BeforeUnmountHook from '../views/beforeUnmountHook.vue'
import UnmountedHook from '../views/unmountedHook.vue'

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
  },
  {
    path: '/created-hook',
    component: CreatedHook
  },
  {
    path: '/before-mount-hook',
    component: BeforeMountHook
  },
  {
    path: '/mounted-hook',
    component: MountedHook
  },
  {
    path: '/before-update-hook',
    component: BeforeUpdateHook
  },
  {
    path: '/updated-hook',
    component: UpdatedHook
  },
  {
    path: '/before-unmount-hook',
    component: BeforeUnmountHook
  },
  {
    path: '/unmounted-hook',
    component: UnmountedHook
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router