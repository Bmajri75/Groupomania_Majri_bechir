///Mes imports
import loginVue from "../pages/login.vue";
import homePageVue from "../pages/home.vue";
import inscriptionVue from "../pages/inscription.vue";
import { createRouter, createWebHistory } from "vue-router";

// les routes de mes pages
const routes = [

  //! path = la route correspondante; component = le composent à envoyer au path precedent
  { path: "/login", component: loginVue,
  },
  { path: "/home", component: homePageVue,
  },
  { path: "/signup", component: inscriptionVue,
  },
  { path: "/", redirect: "/login",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // raccourci pour `routes: routes`
});

// verifie la contenance du token si ça correspond

export default router;
