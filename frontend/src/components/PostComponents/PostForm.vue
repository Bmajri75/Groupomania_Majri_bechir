<script>
  // Function selectionne qui selectionne l'image envoyé a chaque changement.
 function fileSelected(event) {
    console.log(this.image)
   return this.image = event.target.files[0]
  }

  // function pour valider le Poste
  // ici j'ai preferer ajouer les information manuellement 
async function postValid() {
let fd = new FormData()
fd.append('userId', localStorage.getItem("userId"))
fd.append('imageUrl', this.image)
fd.append('commentaire', this.commentaire)


for (let data of fd) {
  
  console.log(data)
}


const token = localStorage.getItem("token")
const options = {
  method: 'POST', // j'indique que c'est une methode POST car Fetch par defaut envoie un GET
  body: fd,  // j'indique qu'il sagit du Forme Data
  headers: {
    'Authorization': `Bearer ${JSON.stringify(token)}`,
    'Accept': 'application/json'
  },
 }
 const response = await fetch('http://localhost:8080/api/post', options)
 
.then( data => {
  console.log(data)
 })
 .catch(err => {
  console.log(err)
 })

}

const methods = {
  fileSelected,
  postValid

}

  export default {
    name: 'PostForme',
    methods
  }
</script>

<template>
   <form id="postForm" method="post" enctype="multipart/form-data">
      <div>
        <textarea class="form-control" placeholder="Ecrit ton Message ici ..." id="floatingTextarea"
          v-model="commentaire"></textarea>
      </div>
      <br>
      <div class="mb-3 d-inline">
        <label for="formFileSm" class="form-label">Ajouter un fichier : </label>
        <input class="form-control form-control-sm" id="formFileSm" type="file" name="imageUrl" @change="fileSelected">
        <div class="button__form d-flex justify-content-between">
          <button @click="postValid" type="button" class="btn btn-outline-primary" id="envoyer">Envoyer 📤</button>
        </div>
      </div>
    </form>
</template>

<style scoped>

.button__form {
  margin-top: 30px;
}

#floatingTextarea {
  height: 150px;
}


</style>