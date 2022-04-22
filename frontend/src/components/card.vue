<script>
export default {
  name: 'card'
}

</script>

<template>

  <div>
    <div class="card mb-3" style="max-width: 540px;">
      <div class="card-header">@pseudo</div>
      <div class="row g-0">
        <div class="col-md-4">
          <img src="../../public/icon.svg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Commentaire</h5>
            <p class="card-text">Mon commentaire c'est sa.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <button type="button" class="btn btn-outline-primary">👍</button>
            <button type="button" class="btn btn-outline-danger">👎</button>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3" style="max-width: 540px;">
      <div class="card-header">@pseudo</div>
      <div class="row g-0">
        <div class="col-md-4">
          <img src="../../public/icon.svg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Commentaire</h5>
            <p class="card-text">Mon commentaire c'est sa.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <button type="button" class="btn btn-outline-primary">👍</button>
            <button type="button" class="btn btn-outline-danger">👎</button>
          </div>
        </div>
      </div>
    </div>


    <div class="card mb-3" style="max-width: 540px;">
      <div class="card-header">@pseudo</div>
      <div class="row g-0">
        <div class="col-md-4">
          <img src="../../public/icon.svg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Commentaire</h5>
            <p class="card-text">Mon commentaire c'est sa.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="buttonLikes">
          <button type="button" class="btn btn-outline-primary">👍</button>
          <button type="button" class="btn btn-outline-danger">👎</button>
        </div>
      </div>
    </div>
  </div>



</template>

<style scoped>
.statusButton {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}


.buttonLikes {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

img {
  object-fit: cover;

}
</style>