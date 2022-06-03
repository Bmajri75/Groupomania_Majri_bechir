///Mes imports
import loginVue from "../pages/login.vue";
import homePageVue from "../pages/home.vue";
import inscriptionVue from "../pages/inscription.vue";
import { createRouter, createWebHistory } from "vue-router";

// les routes de mes pages
const routes = [
  {
    path: "/login",
    name: "loginVue",
    component: loginVue,
  },
  {
    path: "/home",
    name: "homepage",
    component: homePageVue,
  },
  {
    path: "/signup",
    name: "inscriptionVue",
    component: inscriptionVue,
  },
  {
    path: "/",
    redirect: "/login",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // raccourci pour `routes: routes`
});

// // autorise uniquement les routes /login et /inscription a l'affichage
// router.beforeEach((to, from) => {
//   if (!loginRequis(to)) {
//     // si true renvoie la page login
//     return router.push("/login");
//   }
// });

// const loginRequis = (to) => {
//   //  renvoie true ou fals selon les resultats
//   if (!isPrivatePAge) return false;
//   if (!isToken()) return true;
//   return false;
// };

// // verifie les chemin autorisée
// const isPrivatePAge = (to) => {
//   const autorizPath = ["/login", "/inscription"]; // array qui contien les seuls chemin autorisés sans Token ou inscription
//   return !autorizPath.includes(to.path);
// };

// // verifie si le token existe sans verifier sa contenance
// const isToken = () => {
//   return localStorage.getItem("token") != null;
// };

// verifie la contenance du token si ça correspond

export default router;
