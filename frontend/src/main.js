// Mes import de module
import { createApp } from "vue"; //permet de créer une instance de votre application Vue.js.
import App from "./App.vue"; //permet d'importer le composant App.
import router from "./routes/router";
import BootstrapVue3 from "bootstrap-vue-3";

// import de css librairie bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

const app = createApp(App);
//mount(); permet de monter l'application instanciée par createApp() || { createApp }
//dans un conteneur qui est identifié par un sélecteur CSS. Ici,
//cela signifie que le composant racine App sera monté sur le conteneur dont l'id est app :

// je monte mon app en indiquant que j'utilise router et bootstrapVue3
app.use(router);
app.use(BootstrapVue3);
app.mount("#app");

// equivalent de createApp(App).use(router).mount('#app')
