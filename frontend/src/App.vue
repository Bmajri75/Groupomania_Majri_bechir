<script>
import loginVue from './components/login.vue';
import headerNavbarVue from './components/header.vue';
import homeVue from './components/home.vue';
import inscriptionVud from './components/inscription.vue';


export default {
  name: 'App',
  components: {
    headerNavbarVue,
    loginVue,
    homeVue,
    inscriptionVud

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

  