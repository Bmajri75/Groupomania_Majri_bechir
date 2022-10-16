<!-- ! Les directives
 Les directives sont des attributs spéciaux avec le préfixe v-. 
 L'objectif d'une directive est d'appliquer de manière réactive des effets au DOM 
 lorsque la valeur de son expression change. 
 Les directives natives sont les suivantes :
    v-text (qui équivaut à {{ }}) La directive v-text permet de mettre à jour le contenu de la propriété textContent de l'élément HTML. 
    v-bind ==> La directive v-bind permet d'associer dynamiquement un attribut à une propriété. 
    v-html ==> La directive v-html permet de mettre à jour l'attribut innerHTML d'un élément. 
    Le contenu sera inséré comme du HTML simple. 
    v-once
    v-show
    v-if
    v-else
    v-else-if
    v-for
    v-on   (qui equivaut au raccourci : @.) permet d'écouter des évènements et d'attacher un gestionnaire d'événement à un évènement. 
    v-model
    v-pre
    v-cloak
    v-slot
    v-memo
Il est également possible, comme nous l'étudierons, de créer ses propres directives Vue.

! Les modificateurs d'événements (event modifiers) 

.stop : pour event.stopPropagation()
.prevent pour event.preventDefault()
.self pour ne déclencher l'événement que s'il est envoyé de cet élément
.once pour ne déclencher l'événement qu'une seule fois
.passive pour ajouter le mode passif
.capture pour ajouter l'écouteur d'événement en mode capture

<button type="submit" @click.prevent="calculer">Calculer</button>
-->


<script>

import NavBarre from "../components/Navbarre/NavBarre.vue";
import { useField, useForm } from 'vee-validate';


// ici verification des champs,  un objet validationSchema qui contiens ...
const validationSchema = {
  // une methode email avec une valeur en parametre (value)
  email(value) {
    // si ma valeurs en parametre contient un "@" et inclus un "." et la value est superieur à 5 charactere 
    if (value.includes('@') && value.includes('.') && value.length > 5) {
      return true; // si dans ce bloc on renvoie true et on quite le bloc
    } else if (value.length < 1) { // sinon si la longueure de value est inferieur a 1
      return 'Ajoute ton Email' // retourne ajoute un email 
    } else { // sinon pour toutes les autres renvoie un email non valide
      return 'Email non valide';
    }
  },
  // une methode password avec une valeur en parametre (value)
  password(value) {
    if (value.length >= 8) { // si la taille de la value est superieur ou egale a 8 
      return true; //return true 
    } else if (value.length < 1) { // sinon si la taille est inferieur à 1 
      return 'Ajoute ton Password' // return ajoute ton password
    } else { // pour tout le reste 
      return 'Le mot de passe doit être de 8 caractères au moins'; // j'informe de la demande 
    }
  },
};


useForm({ validationSchema });// j'envoie mon schema à vee-validation pour l'utilisation

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

  verifConnexion() {
    const userLogin = {
      email: this.email,
      password: this.password
    }
    const options = {
      method: 'POST', // j'indique que c'est une methode POST car Fetch par defaut envoie un GET
      body: JSON.stringify(userLogin), // j'indique qu'il sagit de l'objet user sous forme de string pour etre un JSON
      headers: {
        "Content-Type": "application/json"// je lui dit qu'il faut lire en JSON
      },
    };
    fetch("http://localhost:8080/api/auth/login", options)
      .then((res) => res.json())
      .then((data) => {
        if (data.token != undefined) { // pour regler le soucie du undefined sur le local storage
          localStorage.setItem("token", data.token)
          localStorage.setItem("userId", data.userId)
          this.$router.push("/home")
        } else {
          this.$router.push("/signup")
          alert("aucun Compte ?? Inscrit toi 🫶")
        }
      })
      .catch(err => {
        console.log(`vous avez une Erreur !! ${err}`);
        alert(`Désolé, une erreur est survenur, Merci de revenir plus tard`);
      })
  }

}



export default {
  name: 'Login',
  components: {
    NavBarre,
    useField,
    useForm
  },
  data,
  methods
}

function isRequired(value) {
  if (value && value.trim()) {
    return true;
  }
  return 'Champ obligatoire';
}

export { validationSchema };
</script>

<template>
  <navBarVue />
  <div>
    <main class="form-signin">
      <form>
        <img class="mb-4" src="../../public/Groupomania_Logos+(3)/icon-above-font.svg" alt="logo Groupomania"
          width="300" height="300">
        <h1 class="h3 mb-3 fw-normal">Identifie Toi Collegue 👋</h1>

        <div class="form-floating">
          <input type="email" class="form-control" id="email" placeholder="name@example.com" required v-model="email">
          <label for="email">Email </label>
          <p style="color: red"> {{ emailError }}</p>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required
            v-model="password">
          <label for="floatingPassword"> Password </label>
        </div>
        <p style="color: red"> {{ passwordError }}</p>
        <div class="checkbox mb-3">
        </div>
        <button @click.prevent="verifConnexion" class="w-100 btn btn-lg btn-primary" type="submit">
          Connexion 🔑
        </button>
        <p class="mt-5 mb-3 text-muted">&copy; BashCoding 2022</p>
      </form>
    </main>
  </div>
</template>

<style scoped>
body {
  height: 100%;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

/* Cible les éléments <input> qui ont */
/* l'attribut required */
input {
  border: 2px solid;
  margin-top: 10px;
}

input:required {
  border-color: green;
}

input:invalid {
  border-color: #ff0404;
}



.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>