import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import ItemDetail from '../views/itemDetail.vue'
import BeforeCreateHook from '../views/hookLifeCycle/beforeCreateHook.vue'
import CreatedHook from '../views/hookLifeCycle/createdHook.vue'
import BeforeMountHook from '../views/hookLifeCycle/beforeMountHook.vue'
import MountedHook from '../views/hookLifeCycle//mountedHook.vue'
import BeforeUpdateHook from '../views/hookLifeCycle/beforeUpdateHook.vue'
import UpdatedHook from '../views/hookLifeCycle/updatedHook.vue'
import BeforeUnmountHook from '../views/hookLifeCycle/beforeUnmountHook.vue'
import UnmountedHook from '../views/hookLifeCycle/unmountedHook.vue'
import SassStyling from '../views/styling/sassStyling.vue'
import DefaultStyling from '../views/styling/defaultStyling.vue'
import PropWithSetting from '../views/propsWithSetting.vue'

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
  },
  {
    path: '/sass-styling',
    component: SassStyling
  },
  {
    path: '/default-styling',
    component: DefaultStyling
  },
  {
    path: '/prop-with-setting',
    component: PropWithSetting
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router