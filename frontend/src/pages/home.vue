<script>
import postVue from "../components/post.vue";
import navBarConnectVue from "../components/layout/navBarConnect.vue";


// data renvoie les data prise
const data = () => {
  return {
    imageUrl: "",
    commentaire: "",
  }
} 
// methods qui renvoie les methode cree 
const methods = {
beforeCreate ()  {
      const token = localStorage.getItem("token")
      if(token == null || token == "") {
        this.$router.push("/signup")
      }
      if(token == true){
        this.$router.push("/home")
      }
    },
 postValid  () {
 const post = {
   imageUrl: this.imageUrl,
   commentaire: this.commentaire,
 }
     const options = {
        method: 'POST', // j'indique que c'est une methode POST car Fetch par defaut envoie un GET
        body: JSON.stringify(post), // j'indique qu'il sagit de l'objet post sous forme de string pour etre un JSON
        headers: {
          "Content-Type": "application/json"// je lui dit qu'il faut lire en JSON
        },
      }
      fetch("http://localhost:8080/api/post", options)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
        .catch(err => {
          console.log(`vous avez une Erreur !! ${err}`);
          alert(`Désolé, une erreur est survenur, Merci de revenir plus tard`);
        })
   }
    }

export default {
  name: 'homeVue',
  components: {
    postVue,
    navBarConnectVue
  },
  methods,
  data
}

</script>

<template>
  <navBarConnectVue />
  <div class="container-xl  p-3">
    <div>
      <textarea class="form-control" placeholder="Ecrit ton Message ici ..." id="floatingTextarea" v-model="commentaire"></textarea>
    </div>
    <br>
    <form>
      <div class="mb-3 d-inline">
        <label for="formFileSm" class="form-label">Ajouter un fichier : </label>
        <input class="form-control form-control-sm" id="formFileSm" type="file">
        <div class="button__form d-flex justify-content-between">
          <button @click="postValid"  type="button" class="btn btn-outline-primary" id="envoyer">Envoyer 📤</button>
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