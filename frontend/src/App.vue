<script>
import loginVue from './pages/login.vue';
import navbarVue from './components/layout/navBar.vue';
import homeVue from './pages/home.vue';
import inscriptionVue from './pages/inscription.vue';
import profilVue from './pages/profil.vue';
import friendsPageVue from './pages/friendsPage.vue';


export default {
  name: 'App',
  components: {
    navbarVue,
    loginVue,
    homeVue,
    inscriptionVue,
    profilVue,
    friendsPageVue

  },
}
</script>

<template>
  <div>
    <navbarVue />
    <router-view></router-view> <!-- Mon template des Login avec bootstrap -->

  </div>

</template>

<style>
</style>

  