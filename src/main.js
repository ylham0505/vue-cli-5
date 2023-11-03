import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'
import './assets/styles/styles.scss'

// export const eventBus = createApp(App)

createApp(App).use(store).mount('#app')
