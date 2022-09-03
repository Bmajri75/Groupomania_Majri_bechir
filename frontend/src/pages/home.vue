<script>
import postVue from "../components/post.vue";
import navBarConnectVue from "../components/layout/navBarConnect.vue";

// data renvoie les data prise
const data = () => {

  return {
    userId: "",
    commentaire: "",
    image: null
  }
}
console.log(data)
// methods qui renvoie les Methode cree pour VueJS 
const methods = {

  // methode selectionne l'image envoyé
  fileSelected(file) {
    this.image = file.target.files[0]
  },


  postValid() {

    const fd = new FormData()
    fd.append('userId', localStorage.getItem("userId"))
    fd.append('imageUrl', this.image)
    fd.append('commentaire', this.commentaire)



    console.log(fd)


    const options = {
      method: 'POST', // j'indique que c'est une methode POST car Fetch par defaut envoie un GET
      body: JSON.stringify(fd),  // j'indique qu'il sagit de l'objet post sous forme de string pour etre un JSON
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data; Boundary=------some-random-characters'
      },
    }


    const promesse = fetch("http://localhost:8080/api/post", options)
    promesse
      .then(async response => {
        try {
          const data = await response.json()
          console.log(data)
        } catch (error) {
          console.log(error)
        }
      })
  },



}



export default {
  name: 'homeVue',
  components: {
    postVue,
    navBarConnectVue
  },
  created() {
    const token = localStorage.getItem("token")
    if (token == null) {
      this.$router.push("/signup")
    }
    if (token == true) {
      this.$router.push("/home")
    }
  },
  methods,
  data

}

</script>

<template>
  <navBarConnectVue />
  <div class="container-xl  p-3">
    <div>
      <textarea class="form-control" placeholder="Ecrit ton Message ici ..." id="floatingTextarea"
        v-model="commentaire"></textarea>
    </div>
    <br>
    <form>
      <div class="mb-3 d-inline">
        <label for="formFileSm" class="form-label">Ajouter un fichier : </label>
        <input class="form-control form-control-sm" id="formFileSm" type="file" @change="fileSelected">
        <div class="button__form d-flex justify-content-between">
          <button @click="postValid" type="button" class="btn btn-outline-primary" id="envoyer">Envoyer 📤</button>
          <img v-if="image" src="" alt="">
        </div>
      </div>
    </form>
    <br>
    <hr class="separet__hr">
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