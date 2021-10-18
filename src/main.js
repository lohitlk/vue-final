import { createApp } from 'vue'
import App from './App.vue'
import router from '@/route'
import 'mdb-vue-ui-kit/css/mdb.min.css';


let vue=createApp(App);


vue.use(router)
vue.mount('#app')