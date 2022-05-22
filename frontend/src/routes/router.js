// composant des Routes
import loginVue from "../pages/login.vue";
import homePageVue from "../pages/home.vue";
import inscriptionVue from "../pages/inscription.vue";
import profilVue from "../pages/profil.vue";
import friendsPage from "../pages/friendsPage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/login", name: "loginVue", component: loginVue },
  { path: "/home", name: "homepage", component: homePageVue },
  { path: "/inscription", name: "inscriptionVue", component: inscriptionVue },
  { path: "/profil", name: "profilVue", component: profilVue },
  { path: "/amis", name: "friendsPage", component: friendsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // raccourci pour `routes: routes`
});

// autorise uniquement les routes /login et /inscription a l'affichage
router.beforeEach((to, from) => {
  if (isPrivatePAge(to) && !isToken()) {
    return router.push("/login"); // me renvoie a la page Login
  }

  // si le chemin autoriser et isTokenValid renvoie fals
  if (isPrivatePAge(to) && !isTokenValid()) {
    console.error("token non Valide");
    return router.push("/login"); // me renvoie a la page Login
  }
});

// verifie les chemin autorisée
const isPrivatePAge = (to) => {
  const autorizPath = ["/login", "/inscription"]; // array qui contien les seuls chemin autorisés sans Token ou inscription
  return !autorizPath.includes(to.path);
};

// verifie si le token existe sans verifier sa contenance
const isToken = () => {
  return localStorage.getItem("token") != null;
};

// verifie la contenance du token si ça correspond
const isTokenValid = () => {
  const token = localStorage.getItem("token");
  return token === "my token test";
};
export default router;
