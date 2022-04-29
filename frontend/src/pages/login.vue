<script>
import navBarVue from "../components/layout/navBar.vue"


// fonction qui retourne les donnée du formulaire.

const data = () => {
  // return {
  //   email: "",
  //   password: ""
  // }
}


const methods = {
  verifConnexion() {
    const email = this.email;
    const password = this.password;

    console.log(`email : ${email} Password: ${password}`)

  }
}


export default {
  name: 'Login',
  components: {
    navBarVue
  },
  data: data,
  methods: methods
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
          <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="email">
          <label for="email">Email </label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password">
          <label for="floatingPassword"> Password </label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">
          <router-link to="/profile" class="link-light text-decoration-none" id="connexionButton"
            v-on:click.prevent="verifConnexion">
            Connexion 🔑
          </router-link>
        </button>
        <p class="mt-5 mb-3 text-muted">&copy; BashCoding 2022</p>
      </form>
    </main>
  </div>
</template>
<style scoped>
body {
  height: 100%;
}

body {
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
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