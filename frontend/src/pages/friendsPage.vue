<script>
import navBarVue from "../components/layout/navBar.vue"
export default {
  name: 'friendsList',
  components: {
    navBarVue
  }

}
</script>
<template>
  <navBarVue />
  <div class="container-sm">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card">
          <img src="../../public/icon.svg" class="card-img-top border-bottom rounded-circle" alt="...">
          <div class="card-body">
            <h5 class="card-title">@pseudo</h5>
            <div class="card-text d-flex flex-column d-grid gap-3 align-items-center mb-5">
              <span class="text-muted " id="nom">Majri</span>
              <span class="text-muted " id="prenom">Prenom</span>
              <span class="text-muted " id="mail">monmail@mail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../../public/icon.svg" class="card-img-top border-bottom rounded-circle" alt="...">
          <div class="card-body">
            <h5 class="card-title">@pseudo</h5>
            <div class="card-text d-flex flex-column d-grid gap-3 align-items-center mb-5">
              <span class="text-muted " id="nom">Majri</span>
              <span class="text-muted " id="prenom">Prenom</span>
              <span class="text-muted " id="mail">monmail@mail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../../public/icon.svg" class="card-img-top border-bottom rounded-circle" alt="...">
          <div class="card-body">
            <h5 class="card-title">@pseudo</h5>
            <div class="card-text d-flex flex-column d-grid gap-3 align-items-center mb-5">
              <span class="text-muted " id="nom">Majri</span>
              <span class="text-muted " id="prenom">Prenom</span>
              <span class="text-muted " id="mail">monmail@mail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../../public/icon.svg" class="card-img-top border-bottom rounded-circle" alt="...">
          <div class="card-body">
            <h5 class="card-title">@pseudo</h5>
            <div class="card-text d-flex flex-column d-grid gap-3 align-items-center mb-5">
              <span class="text-muted " id="nom">Majri</span>
              <span class="text-muted " id="prenom">Prenom</span>
              <span class="text-muted " id="mail">monmail@mail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>