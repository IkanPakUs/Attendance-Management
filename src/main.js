import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Camera from 'simple-vue-camera'

import './assets/scss/main.scss'
import './assets/main.css'

import * as bootstrap from 'bootstrap'
import './registerServiceWorker'

import VueDatePicker from '@vuepic/vue-datepicker';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('camera', Camera)
app.component('VueDatePicker', VueDatePicker);

app.mount('#app')
