import { createApp } from 'vue'
import App from './App.vue'
import ElButton from './components/button'
import ElContainer from './components/container'

const app = createApp(App)
app.config.globalProperties.$AILEMENTE = {
  size: 'large'
}

app.use(ElContainer).use(ElButton).mount('#app')
