<script>

export default {
  name: 'comment'
}
</script>

<template>
  <div class="container-sm d-flex flex-column">
    <img src="../../public/icon.svg" class="image-card card-img-top rounded-circle" alt="avatar">
    <div class="d-flex flex-column">
      <p> @sophi à dit :</p>
      <p>commentaire trop bien ton truc</p>
      <hr>
    </div>
    <img src="../../public/icon.svg" class="image-card card-img-top rounded-circle" alt="avatar">
    <div class="d-flex flex-column">
      <p> @chris à dit : </p>
      <p>j'aimerai bien essayer</p>
      <hr>
    </div>
    <img src="../../public/icon.svg" class="image-card card-img-top rounded-circle" alt="avatar">
    <div class="d-flex flex-column">
      <p> @jungo à dit :</p>
      <p>waaa tu fais ça comment ?</p>
      <hr>
    </div>
  </div>
</template>
<style scoped>
.image-card {
  width: 50px;
  height: 50px;
}
</style>