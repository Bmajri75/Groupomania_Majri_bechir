<script>
import navBarVue from "../components/layout/navBar.vue";

  const data = () => {
    return {
      email: "",
      password: ""
    }
  }

  const methods = {
    verifConnexion  () {
      const userLogin = {
    email: this.email,
    password: this.password
 }
   const options = {
     method: 'POST', // j'indique que c'est une methode POST car Fetch par defaut envoie un GET
      body: JSON.stringify(userLogin), // j'indique qu'il sagit de l'objet user sous forme de string pour etre un JSON
      headers: {
        // 'Accept': 'application/json', //type application utilisé
        "Content-Type": "application/json"// je lui dit qu'il faut lire en JSON
      },
    };
    fetch("http://localhost:8080/api/auth/login", options)
      .then((res) => res.json())
      .then((data) => {
       console.log(data)
       if(data.token != undefined){ // pour regler le soucie du undefined sur le local storage
         localStorage.setItem("token", data.token)
          this.$router.push("/home")
       }else {
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
    navBarVue
  },
    data,
    methods
}


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
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required v-model="password">
          <label for="floatingPassword"> Password </label>
        </div>
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
input{
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