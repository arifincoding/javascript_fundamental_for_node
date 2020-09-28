import {
    createApp
} from 'vue'
import App from './App.vue'
import ReUse from './Component.vue'
import UseProps from './Prop.vue'
import router from './router'


createApp(App).use(router).mount('#app')
createApp(ReUse).use(router).mount('#reUse')
createApp(UseProps).use(router).mount('#useProps')