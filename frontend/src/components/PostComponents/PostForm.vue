<template>
  <form id="postForm" method="post" action="api/post" enctype="multipart/form-data">
    <div>
      <textarea class="form-control" name="commentaire" placeholder="Ecrit ton Message ici ..." id="floatingTextarea"
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
  name: 'PostForm',
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
      fd.append('userID', localStorage.getItem('userId'))
      fd.append('commentaire', this.commentaire)
      fd.append('imageUrl', this.image)


      const token = localStorage.getItem('token');
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);
      headers.append('Accept', "application/json");
      headers.append('Content-Type', "multipart/form-data;");
      headers.append('userid', localStorage.getItem('userId'))

      console.log(fd)
      const options = {
        method: 'POST',
        body: fd,
        headers: headers,
      };
      console.log(options)
      fetch('http://localhost:8080/api/post/', options)
        .then(response => console.log(response))
        .then(data => console.log(data))
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
