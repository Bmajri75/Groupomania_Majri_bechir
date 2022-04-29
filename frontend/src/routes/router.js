// composant des Routes
import loginVue from '../pages/login.vue'
import homePageVue from '../pages/home.vue'
import inscriptionVue from '../pages/inscription.vue'
import profilVue from '../pages/profil.vue'
import friendsPage from '../pages/friendsPage.vue'

import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  { path: '/login', name: 'loginVue', component: loginVue },
  { path: '/home', name: 'homepage', component: homePageVue },
  { path: '/inscription', name: 'inscriptionVue', component: inscriptionVue },
  { path: '/profil', name: 'profilVue', component: profilVue},
  { path: '/amis', name:'friendsPage', component: friendsPage}

]

const router = createRouter ({
  history: createWebHistory(),

  routes // raccourci pour `routes: routes`
})
 
router.beforeEach((to, from) => {
 const autorizPath = ["/login", "/inscription"]
  if (!autorizPath.includes(to.path)) {
  router.push('/login');
}
})

export default router;