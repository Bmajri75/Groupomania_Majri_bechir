<script>
// cette methode vide le Token et renvoie a la page Login l'orsqu'elle est invoqué
const methods = {
  disconnect() {
    localStorage.removeItem('token');
    this.$router.push("/login")
  }
}
export default {
  name: "NavbarConnect",
  methods
}
</script>

<template>
  <header class="p-3 headerColor text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <!-- au click on appel la methode disconnect -->
        <div class="text-end">
          <button @click="disconnect" type="button" class="btn btn  btn-danger ">
            Disconect
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
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

.b-example-divider {
  height: 3rem;
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.form-control-dark {
  color: #fff;
  border-color: var(--bs-gray);
}

.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}

.headerColor {
  background-color: #FD2D01;
}
</style>