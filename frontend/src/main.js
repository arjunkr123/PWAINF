import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/axios"
import Vue3Lottie from 'vue3-lottie'

createApp(App).use(Vue3Lottie).use(router).use(store).mount('#app')

// npm install vue-router