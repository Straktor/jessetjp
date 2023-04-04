import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createORM } from 'pinia-orm'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'

const pinia = createPinia().use(createORM())

loadFonts()

createApp(App).use(vuetify).use(router).use(pinia).mount('#app')
