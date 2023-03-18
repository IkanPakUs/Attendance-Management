import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Camera from 'simple-vue-camera'

import './assets/scss/main.scss'
import './assets/main.css'

import * as bootstrap from 'bootstrap'
import './registerServiceWorker'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('camera', Camera)

app.mount('#app')
