// ======= Express =======
const express = require("express"); // je requier express pour la creation de l'app
const morgan = require("morgan"); // morgan pour pour un retours des codes status
const mongoose = require("./database/mongoose"); //le module mongoose pour la conexion à la base de donnée;
const path = require("path"); // Path
const cors = require("cors");
const app = express(); // je place dans app le module express
require("dotenv").config();

app.use(cors());

app.use(express.json()); // meme travail que bodyparser pour toutes mes methode
app.use(morgan("dev")); // je configure le package morgan avec une config pré etablie

// importation des routes via le dossier routes:
const routesUser = require("./routes/user");
const routesPost = require("./routes/post");

// la route des images
/**
 * __dirname == le dossier sur le quel on se trouve
 */
app.use("/images", express.static(path.join(__dirname, "/images")));

// routes authantifications
app.use("/api/auth", routesUser);

//routes avec post
app.use("/api/post", routesPost);

// J'export app qui sera appeler sur server.js
module.exports = app;
