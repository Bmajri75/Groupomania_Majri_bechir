require("dotenv").config();
const app = require("./app"); // je recupere la configuration de mon module app.js

// ===== lancement du server ======
app.listen(process.env.PORT, () => {
  console.log(`Server ouvert sur le PORT : ${process.env.PORT}`); // le serveur sera lu sur le port PORT de la variable d'environement
});

//! a faire
// voir si un port est ouvert avec `sudo lsof -i :PORT `
// fermer le port avec sudo kill Numero NID

// cree les conexion du front p7

// voir la video sur le CORS de egeniclimatique n 141
