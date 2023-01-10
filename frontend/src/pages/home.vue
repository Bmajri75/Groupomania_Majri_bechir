<script>
import PostAction from "../components/PostComponents/PostAction.vue";
import NavBarreConnect from "../components/NavBarre/NavBarreConnect.vue";
import PostForm from "../components/PostComponents/PostForm.vue";

// data renvoie les data prise
const data = () => {

  return {
    userId: "",
    commentaire: "",
    image: ""
  }
}

console.log(data)

const methods = {
  created() {
    const token = localStorage.getItem("token")
    if (token == null) {
      this.$router.push("/signup")
    }
    if (token == true) {
      this.$router.push("/home")
    }
  }
}

export default {
  name: 'homeVue',
  components: {
    PostAction,
    NavBarreConnect,
    PostForm,
  },
  methods,
  data
}


</script>

<template>
  <div>
    <NavBarreConnect />
    <div class="container-xl  p-3">
      <PostForm />
      <PostAction />
    </div>
  </div>


</template>

<style scoped>

</style>