<script>
import navBarVue from "../components/layout/navBar.vue"

const data = () => {
  return {
    prenom: "",
    nom: "",
    email: "",
    password: "",

  }
}

const methods = {
  inscriptionValid() {

    // je recupere les donnés de mon formulaire
    const user = {
      prenom: this.prenom,
      nom: this.nom,
      email: this.email,
      password: this.password,
    }

    const options = {
      method: 'POST', // j'indique que c'est une methode POST car Fetch par defaut envoie un GET
      body: JSON.stringify(user), // j'indique qu'il sagit de l'objet user sous forme de string pour etre un JSON
      headers: {
        // 'Accept': 'application/json', //type application utilisé
        "Content-Type": "application/json"// je lui dit qu'il faut lire en JSON
      },
    };
    fetch("http://localhost:8080/api/auth/inscription", options)
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
  name: 'Inscription',
  components: {
    navBarVue
  },
  data,
  methods
}

</script>

<template>
  <navBarVue />
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

        <div class="col-md-6">
          <input type="text" class="form-control" id="prenom" required v-model="prenom">
          <label for="prenom" class="form-label">prenonom</label>
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control" id="nom" required v-model="nom">
          <label for="nom" class="form-label">nom</label>
        </div>
        <div class="col-md-6">
          <input type="email" class="form-control" id="inputEmail4" required v-model="email">
          <label for="inputEmail4" class="form-label">Email</label>
        </div>
        <div class="col-md-6">
          <input type="password" class="form-control" id="password" required v-model="password">
          <label for="password" class="form-label">Password</label>
        </div>

        <div class="d-flex justify-content-evenly">
          <button type="submit" class="btn btn-primary" @click.prevent="inscriptionValid">Valider 👌</button>
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

/* Cible les éléments <input> qui ont */
/* l'attribut required */

input:required {
  border-color: green;
}
input:invalid {
  border-color: #ff0404;
}

</style>