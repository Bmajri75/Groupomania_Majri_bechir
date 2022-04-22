<script>
import loginVue from './components/login.vue';
import headerNavbarVue from './components/header.vue';
import homeVue from './components/home.vue';
import inscriptionVud from './components/inscription.vue';
import profilVue from './components/profil.vue';


export default {
  name: 'App',
  components: {
    headerNavbarVue,
    loginVue,
    homeVue,
    inscriptionVud,
    profilVue

  },
}
</script>

<template>
  <div>
    <headerNavbarVue />
    <router-view></router-view> <!-- Mon template des Login avec bootstrap -->

  </div>

</template>

<style>
</style>

  