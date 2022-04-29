<script>
import postVue from "../components/post.vue";
import navBarVue from "../components/layout/navBar.vue";
export default {
  name: 'homeVue',
  components: {
    postVue,
    navBarVue
  },
}


</script>

<template>
  <navBarVue />
  <div class="container-xl  p-3">
    <div>
      <textarea class="form-control" placeholder="Ecrit ton Message ici ..." id="floatingTextarea"></textarea>
    </div>
    <br>
    <form>
      <div class="mb-3 d-inline">
        <label for="formFileSm" class="form-label">Ajouter un fichier : </label>
        <input class="form-control form-control-sm" id="formFileSm" type="file">
        <div class="button__form d-flex justify-content-between">
          <button type="button" class="btn btn-outline-secondary" id="cleanUp">Clean UP</button>
          <button type="button" class="btn btn-outline-primary" id="envoyer">Envoyer</button>
        </div>
      </div>
    </form>
    <br>
    <hr class="separet__hr">
    <postVue />
    <postVue />
  </div>


</template>

<style scoped>
.button__form {
  margin-top: 30px;
}

#floatingTextarea {
  height: 150px;
}

.separet__hr {
  color: #FD2D01;
}
</style>