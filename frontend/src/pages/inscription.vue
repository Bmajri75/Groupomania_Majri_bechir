<script>
export default {
  name: 'inscription',
}
</script>

<template>
  <div class="container-sm">
    <div class="rounded-3 border border-5 d-flex flex-column justify-content-center" style="border-color:#FD2D01">
      <form class=" row g-4 p-4">
        <div class=" text-center">
          <img src="../../public/Groupomania_Logos+(3)/icon.png"
            class="figure-img img-fluid rounded-circle  mx-auto d-block rounded-circle border" alt="Photo de profil">
          <div>
            <input type="file" id="picture" name="picture" multiple>
          </div>
        </div>

        <div class="col-md-4">
          <label for="prenom" class="form-label">prenonom</label>
          <input type="text" class="form-control" id="prenom" required>
        </div>
        <div class="col-md-4">
          <label for="nom" class="form-label">nom</label>
          <input type="text" class="form-control" id="nom" required>
        </div>
        <div class="col-md-4">
          <label for="pseudo" class="form-label">Pseudo</label>
          <div class="input-group">
            <span class="input-group-text" id="inputGroupPrepend2">@</span>
            <input type="text" class="form-control" id="pseudo" aria-describedby="pseudo" required>
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4" required>
        </div>
        <div class="col-md-6">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" required>
        </div>

        <div class="d-flex justify-content-evenly">
          <button type="submit" class="btn btn-primary">Valider 👌</button>
        </div>
      </form>
    </div>
  </div>

</template>

<style scoped>
img {
  width: 300px;
  height: 300px;
}

.container-sm {
  margin-top: 100px;
}

.formulair-container {
  border-color: #FD2D01;
}
</style>