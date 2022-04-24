<script>
import commentVue from "./comment.vue"
export default {
  name: 'post',
  components: {
    commentVue
  }
}

</script>

<template>
  <div class="container-card">
    <div class="card mb-3">
      <div class="card-header">@pseudo</div>
      <div class="row g-0">
        <div class="post-container border-bottom ">
          <img src="../../public/icon.svg" class="card-img-top border border-5 " alt="Image du post">
          <div class="post-container__text">

            <h5 class="card-title fs-6">Comptable.</h5>
            <p class="card-text">Mon POST c'est sa.</p>
          </div>
          <div class="buttonLikes">
            <button type="button" class="btn btn-outline-primary">👍</button>
            <button type="button" class="btn btn-outline-danger">👎</button>
          </div>
        </div>
        <div class=" p-2 text-dark bg-secondary bg-opacity-10 ">
          <commentVue />
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>
.container-card {
  margin-top: 50px;
}

img {
  object-fit: contain;
}

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

.post-container img {
  object-fit: contain;
  height: 300px;
}

.post-container__text {
  margin: 20px 50px;
}
</style>