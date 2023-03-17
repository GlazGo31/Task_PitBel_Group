import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import '@/styles/main.scss';


createApp(App).use(store).mount('#app')
