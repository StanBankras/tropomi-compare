import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js';
import dayjs from './plugins/dayjs';

import './assets/css/extra.scss';

createApp(App)
  .use(router)
  .use(store)
  .use(dayjs)
  .mount('#app')
