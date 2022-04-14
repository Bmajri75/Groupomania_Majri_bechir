<script>
import loginVue from './components/login.vue';
import headerNavbarVue from './components/header.vue';
import homeVue from './components/home.vue';

export default{
  name: 'App',
  components:{
    headerNavbarVue,
    loginVue,
    homeVue

  },
}
</script>

<template>
<headerNavbarVue />
 <router-view></router-view> <!-- Mon template des Login avec bootstrap -->

</template>

<style>

</style>

  