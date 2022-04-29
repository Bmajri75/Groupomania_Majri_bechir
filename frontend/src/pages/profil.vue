<script>
import navBarVue from "../components/layout/navBar.vue"
export default {
  name: 'profil',
  components: {
    navBarVue
  }

}
</script>

<template>
  <navBarVue />
  <div class=" d-flex justify-content-center">

    <div class=" card_contener card mt-2">
      <img src="../../public/Groupomania_Logos+(3)/icon.png"
        class="card-img-top figure-img img-fluid rounded-circle  mx-auto d-block border-dark border-bottom"
        alt="Photo de profil">

      <h5 class="text-muted card-title fs-2 fw-bold m-3 text-center" id="pseudo">@Pseudo </h5>

      <div class="card-body d-flex row">
        <div class="card-text d-flex flex-column d-grid gap-3 align-items-center mb-5">
          <span class="text-muted " id="nom">Majri</span>
          <span class="text-muted " id="prenom">Prenom</span>
          <span class="text-muted " id="mail">monmail@mail.com</span>
        </div>
        <router-link to="/inscription" class="btn btn-primary">Modifier</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card_contener {
  width: 30%;
}
</style>