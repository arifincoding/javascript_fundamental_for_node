import {
    createApp
} from 'vue'
import App from './App.vue'
import ReUse from './Component.vue'
import UseProps from './Prop.vue'


createApp(App).mount('#app')
createApp(ReUse).mount('#reUse')
createApp(UseProps).mount('#useProps')