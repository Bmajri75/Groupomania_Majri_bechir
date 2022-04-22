<script>
import cardVue from './card.vue'

export default {
  name: 'homeVue',
  components: {
    cardVue

  },
}
</script>

<template>

  <div class="container-sm w-50 p-3">
    <div>
      <textarea class="form-control" placeholder="Ecrit ton Message ici ..." id="floatingTextarea"></textarea>
    </div>
    <br>
    <form>
      <div class="mb-3 d-inline">
        <label for="formFileSm" class="form-label">Ajouter un fichier : </label>
        <input class="form-control form-control-sm" id="formFileSm" type="file">
        <div class="button__form d-flex justify-content-between">
          <button type="button" class="btn btn-outline-secondary">Clean UP</button>
          <button type="button" class="btn btn-outline-primary">Envoyer</button>
        </div>
      </div>
    </form>
    <br>
    <hr class="separet__hr">
    <cardVue />
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