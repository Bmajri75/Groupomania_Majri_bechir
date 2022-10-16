<script>
// cette page est un bloque d'un post entier avec la partie comment
// commentVue est un bloque commentaire
import PostComment from './PostComment.vue'

const methods = {
  addLike() {
    console.log("LIKE")
  },

  deletPost() {
    console.log("supprime le Poste")
  },

  async getPost() {
    try {
      const response = await fetch("http://localhost:8080/api/post")
      const post = response.json()
      console.log(post)
    } catch (error) {
      console.log(error)
    }

  },

}

export default {
    name: "PostAction",
    methods,
    components: { PostComment }
}
</script>

<template>
  <hr class="separet__hr">
  <div class="container-card">
    <div class="card mb-3">
      <div class="card-header">@pseudo</div>
      <div class="row g-0">
        <div class="post-container border-bottom ">
          <img src="../../../public/icon.svg" class="card-img-top border border-5 " alt="Image du post">
          <div class="likeBloc">
            <button @click="deletPost" class="btn btn-danger">Supprimer 🗑️</button>
            <button @click.prevent="addLike" class="btn btn-primary">👍</button>
          </div>
          <div class="d-flex flex-column align-items-center">
            <PostComment class="m-3" />
            <PostComment class="m-3" />
            <PostComment class="m-3" />
          </div>
           <div class="form-floating d-flex m-4">
              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
              <label for="floatingTextarea">Ajoute ton commentaire</label>
              <button class="btn btn-outline-dark">Envoyer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.separet__hr {
  color: #FD2D01;
}
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

.likeBloc {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;
}
</style>