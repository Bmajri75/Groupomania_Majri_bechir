<template>
  <form id="postForm" method="post" enctype="multipart/form-data">
    <div>
      <textarea class="form-control" placeholder="Ecrit ton Message ici ..." id="floatingTextarea"
        v-model="commentaire" />
    </div>
    <br />
    <div class="mb-3 d-inline">
      <label for="formFileSm" class="form-label">Ajouter un fichier : </label>
      <input class="form-control form-control-sm" id="formFileSm" type="file" name="imageUrl" multiple
        @change="fileSelected" />
      <div class="button__form d-flex justify-content-between">
        <button @click="postValid" type="button" class="btn btn-outline-primary" id="envoyer">Envoyer 📤</button>
      </div>
    </div>
  </form>
</template>


<script>
export default {
  name: 'PostForme',
  data() {
    return {
      image: null,
      commentaire: '',
    };
  },
  methods: {
    fileSelected(event) {
      this.image = event.target.files[0];
    },
    postValid() {
      const fd = new FormData();
      fd.append('imageUrl', this.image);
      fd.append('commentaire', this.commentaire);

      console.log(fd);

      const token = localStorage.getItem('token');
      const options = {
        method: 'POST',
        body: fd,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      fetch('http://localhost:8080/api/post', options)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Erreur lors de l\'envoi du post');
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>
.button__form {
  margin-top: 30px;
}

#floatingTextarea {
  height: 150px;
}
</style>
