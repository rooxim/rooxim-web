import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import VueSmoothScroll from 'vue3-smooth-scroll'
//@ts-ignore
import { VuePrlx } from 'vue3-prlx';
import router from './router.ts'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  }
})

createApp(App)
  .use(VueSmoothScroll)
  .use(vuetify)
  .use(router)
  .use(VuePrlx)
  .mount('#app')
