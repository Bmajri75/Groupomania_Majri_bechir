import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import BootstrapVue3 from 'bootstrap-vue-3'
import App from './App.vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'



// composant des Routes
import loginVue from './components/login.vue'
import homePageVue from './components/home.vue'
import inscriptionVue from './components/inscription.vue'
import profilVue from './components/profil.vue'


const routes = [
  { path: '/login', name: 'loginVue', component: loginVue },
  { path: '/home', name: 'homepage', component: homePageVue },
  { path: '/inscription', name: 'inscriptionVue', component: inscriptionVue },
  { path: '/profil', name: 'profilVue', component: profilVue}

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