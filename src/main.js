import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidatePlugin from './assets/includes/validation';
import './assets/tailwind.css'

const app = createApp(App);

app.use(store);
app.use(router);
app.use(VeeValidatePlugin)

app.mount('#app');
