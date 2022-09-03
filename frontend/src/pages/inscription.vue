<script>
// importation de mes Vues
import navBarVue from "../components/layout/navBar.vue" // la barre de navigation
import { useField, useForm } from 'vee-validate'; // 2 methodes useField et useForm de vee-validate pour m'aider à valider mes ormulaire
import { validationSchema } from "./login.vue"; // la methode de validation des formulaire email et password avec les messages d'erreurs en cas ou


// verification des champs 
useForm({ validationSchema });

const { value: email, errorMessage: emailError } = useField('email', validationSchema.email);
const { value: password, errorMessage: passwordError } = useField('password', validationSchema.password);


const data = () => {
  return {
    email,
    password,
    emailError,
    passwordError
  }
}
const methods = {
  // valide l'inscription et fetch au backend
  inscriptionValid() {

    if (validationSchema) {
      // je recupere les donnés de mon formulaire et je cree un Objet user qui sera envoyer au backend via fetch
      const user = {
        email: this.email,
        password: this.password,
      }
      const options = {
        method: 'POST', // j'indique que c'est une methode POST car Fetch par defaut envoie un GET
        body: JSON.stringify(user), // ici j'envoie au backend l'objet user = { email: this.email, password: this.password}
        headers: {
          "Content-Type": "application/json"// je lui dit qu'il faut lire en JSON
        },
      };
      const promesse = fetch("http://localhost:8080/api/auth/signup", options)
      promesse.then(async response => {
        try {
          const body = await response.json();
          console.log('Inscription valide')
        } catch (error) {
          console.log(`vous avez une Erreur !! ${err}`);
          alert(`Désolé, une erreur est survenur, Merci de revenir plus tard`);
        }
      })
      this.$router.push("/login")
    } else {

    }
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
          <img src="../../public/Groupomania_Logos+(3)/icon-above-font.png"
            class="figure-img img-fluid rounded-circle  mx-auto d-block rounded-circle border" alt="Photo de profil">
        </div>


        <div class="col-md-6">
          <input type="email" class="form-control" id="inputEmail4" required v-model="email">
          <label for="inputEmail4" class="form-label">Email</label>
          <p style="color: red"> {{ emailError }}</p>
        </div>
        <div class="col-md-6">
          <input type="password" class="form-control" id="password" required v-model="password">
          <label for="password" class="form-label">Password</label>
          <p style="color: red"> {{ passwordError }}</p>
        </div>

        <router-link to="/login">
          <div class="d-flex justify-content-evenly">
            <button type="submit" class="btn btn-primary" @click.prevent="inscriptionValid">Valider 👌</button>
          </div>
        </router-link>
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