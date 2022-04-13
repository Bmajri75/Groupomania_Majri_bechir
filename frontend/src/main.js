import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import BootstrapVue3 from 'bootstrap-vue-3'
import App from './App.vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'



// composant des Routes
import loginVue from './components/login.vue'
import headerVue from './components/header.vue'
//import HomeViewVue from './views/HomeView.vue'


const routes = [
  { path: '/', name: 'headerVue', component: headerVue },
  { path: '/login', name: 'loginVue', component: loginVue }
]

const router = createRouter ({
  history: createWebHistory(),

  routes // raccourci pour `routes: routes`
})


const app = createApp(App)

app.use(router)
app.use(BootstrapVue3)
app.mount('#app')

export default router